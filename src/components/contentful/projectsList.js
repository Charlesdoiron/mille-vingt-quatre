import React from "react"
import { Link } from "gatsby"
import { Categories } from "./categories"
import { detect } from "detect-browser"
import { Styledh2, Styledprojectdate } from "../typos"
import styled from "styled-components"
import { ImgBlur } from "./../animations/image"

export class ProjectsList extends React.Component {
  constructor(props) {
    super(props)
    this.listProjects = React.createRef()
    this.state = {
      categorie: "All",
      imageOnBackground: {
        url: "",
        backgroundPositionX: "",
        defaultWidth: "",
      },
      projects: this.props.projects,
      projectFocus: "",
      isDesktop: "",
      browser: "",
    }
    this.animateProject = this.animateProject.bind(this)
  }
  changeImage = (imgUrl, imgBackgroundPositionX, imgDefaultWidth) => {
    document.querySelector(".project__img--background") &&
      document
        .querySelector(".project__img--background")
        .classList.toggle("isOut")

    this.setState({
      imageOnBackground: {
        url: imgUrl,
        backgroundPositionX: imgBackgroundPositionX,
        defaultWidth: imgDefaultWidth,
      },
    })
  }

  animateProject = () => {
    const TRIGGER_APPEAR = this.state.isDesktop ? 145 : 170
    const TRIGGER_DISAPPEAR = this.state.isDesktop ? -20 : 70
    const list = this.listProjects.current
    const titles = list.children

    for (var i = 0; i < titles.length; i++) {
      const title = titles[i].children[0]
      const imgUrl = title.children[0].getAttribute("data-image")
      const imgBackgroundPositionX = title.children[0].getAttribute(
        "data-focal-x"
      )
      const imgDefaultWidth = title.children[0].getAttribute(
        "data-default-width"
      )
      const link = title.children[0]

      if (
        // Le projet passe en mode focus.
        titles[i].getBoundingClientRect().top < TRIGGER_APPEAR &&
        titles[i].getBoundingClientRect().top > TRIGGER_DISAPPEAR
      ) {
        link.classList.add("isFocus")
        if (
          // Si l'image dans le state est différente de l'image à appeller, je met à jour le state.
          this.state.imageOnBackground.url !== imgUrl
        ) {
          this.changeImage(imgUrl, imgBackgroundPositionX, imgDefaultWidth)
        }

        if (
          // Le projet est en mode focus et disparait.
          TRIGGER_DISAPPEAR > titles[i].getBoundingClientRect().top
        ) {
          link.classList.add("isOut")
        } else {
          // Le projet réapparait
          link.classList.remove("isOut")
        }
        // Le projet repasse en mode normal.
      } else {
        link.classList.remove("isFocus")
      }
    }
  }

  getDevice = () => {
    if (window.innerWidth > 992) {
      this.setState({ isDesktop: true })
    } else {
      this.setState({ isDesktop: false })
    }
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      // Get browser for compatibility animation
      detect() && this.setState({ browser: detect().name })
      this.getDevice()
      window.addEventListener("resize", () => this.getDevice(), {
        passive: true,
      })
    }
    const list = this.listProjects.current
    list.addEventListener("scroll", () => this.animateProject(), true)
    setTimeout(() => {
      list.scrollTo({ top: 1, behavior: "smooth" })
    }, 1000)
  }

  componentWillUnmount() {
    const list = this.listProjects.current
    list.removeEventListener("scroll", () => this.animateProject())
    if (typeof window !== undefined) {
      window.removeEventListener("resize", () => this.getDevice(), {
        passive: true,
      })
    }
  }

  render() {
    const handleCategorie = categorieClicked => {
      this.setState({
        categorie: categorieClicked,
        imageOnBackground: { url: "" },
      })

      this.listProjects.current.scrollTo({ top: 10, behavior: "smooth" })
      setTimeout(() => {
        this.listProjects.current.scrollTo({
          top: 5,
          behavior: "smooth",
        })
      }, 200)
      if (categorieClicked === "All") {
        this.setState({ projects: this.props.projects })
      } else {
        const resultsWithCategories = this.props.projects.filter(project => {
          return project.categories !== null
        })

        const projectsFiltered = resultsWithCategories.filter((project, i) => {
          const hadCategorie = project.categories.filter(
            categorie => categorie.slug === categorieClicked
          )

          if (hadCategorie.length > 0) {
            return resultsWithCategories[i]
          } else return null
        })

        this.setState({ projects: projectsFiltered })
      }
    }

    const ImgResponsive = styled.div`
      div {
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.8;
        width: 100%;
        height: 100vh;
        position: absolute;
        background-position: center;
        @media screen and (max-width: 736px) {
          width: 100%;
          background-position: ${(this.state.imageOnBackground
              .backgroundPositionX *
              100) /
              this.state.imageOnBackground.defaultWidth}%
            0;
        }
      }
    `

    return (
      <div
        className="projects__container"
        data-aos={this.state.browser !== "safari" && "fade-up"}
      >
        {this.state.imageOnBackground && (
          <ImgResponsive>
            <div
              className="project__img--background"
              style={{
                backgroundImage: `url(${this.state.imageOnBackground.url})`,
              }}
            />
          </ImgResponsive>
        )}

        <div className="projects">
          {this.props.categories && (
            <Categories
              isDesktop={this.state.isDesktop}
              categories={this.props.categories}
              handleCategorie={handleCategorie}
            />
          )}
          <div className="projects__list" ref={this.listProjects}>
            {this.state.projects.map(
              ({ projectTitle, projectTitleDate, slug, image, focalPoint }) => {
                return (
                  <Link
                    to={`/project/${slug}`}
                    className="project__title__link"
                  >
                    <TitleContainer className="project__slide">
                      <Title
                        style={{ margin: "0 0 50px 0" }}
                        data-image={image.fluid.src}
                        data-focal-x={focalPoint.focalPoint.x}
                        data-default-width={image.file.details.image.width}
                      >
                        {projectTitle}
                        <Styledprojectdate>
                          {projectTitleDate}
                        </Styledprojectdate>
                      </Title>
                    </TitleContainer>
                  </Link>
                )
              }
            )}
          </div>
        </div>
      </div>
    )
  }
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Styledh2)`
  max-width: 550px;
  overflow-wrap: break-word;
  white-space: initial !important;
`

// FOCUS ON FIRST PROJECT
// function setDefaultImage() {
//   setImageState(projects[0].cover.fluid)
// }
// async function setDefaultProject() {
//   await setDefaultImage()
//   const titles = document.querySelectorAll(".project__title__link")
//   const firstTitle = titles[0]
//   await firstTitle.classList.add("isActive")
// }

// useEffect(() => {
//   setDefaultProject()
// }, [])

// leaveImage = img => {
//   setTimeout(() => {
//     document.querySelector(".project__img--background") &&
//       document
//         .querySelector(".project__img--background")
//         .classList.toggle("isOut")
//   }, 500)
// }
