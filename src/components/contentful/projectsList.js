import React from "react"
import { Link } from "gatsby"
import { Categories } from "./categories"
import { debounce } from "lodash"
import { Styledh2, Styledprojectdate } from "../typos"
import styled from "styled-components"

export class ProjectsList extends React.Component {
  constructor(props) {
    super(props)
    this.listProjects = React.createRef()
    this.state = {
      categorie: "All",
      imageOnBackground: "",
      projects: this.props.projects,
      projectFocus: "",
    }
    this.animateProject = this.animateProject.bind(this)
  }

  animateProject = () => {
    const TRIGGER = 145
    const list = this.listProjects.current
    const titles = list.children

    for (var i = 0; i < titles.length; i++) {
      const title = titles[i].children[0]
      const imgTitle = title.children[0].getAttribute("data-image")
      const link = title.children[0]

      if (
        // Le projet passe en mode focus.
        titles[i].getBoundingClientRect().top < TRIGGER &&
        titles[i].getBoundingClientRect().top > -20
      ) {
        link.classList.add("isFocus")
        if (
          // Si l'image dans le state est différente de l'image à appeller, je met à jour le state.
          this.state.imageOnBackground !== imgTitle
        ) {
          // c'est ici que ça bug, si je setState dans le scroll, tous les projets sont envoyés dans le state,
          // L'image qui part dans le state est celle du dernier projet de la liste.
          //ça se vérifie avec le console log du dessus.

          // Hypothèse : Quand j'update le state, le composant re-render et les projets sont en dessous du trigger, le condition ne fonctionne donc plus.
          // J'ai essayé avec un cas très simple, l'event listener du scroll sur une ref() déclanche un setState, ça met aussi le bazar dans le scroll.

          // this.setState({ imageOnBackground: imgTitle })
          console.log(link.innerText)
        }

        if (
          // Le projet est en mode focus et disparait.
          -20 > titles[i].getBoundingClientRect().top
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

  componentDidMount() {
    const list = this.listProjects.current

    list.addEventListener("scroll", () => this.animateProject(), true)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.imageOnBackground !== nextState.imageOnBackground) {
      return true
    }
    return false
  }

  componentWillUnmount() {
    const list = this.listProjects.current

    list.removeEventListener("scroll", () => this.animateProject())
  }
  render() {
    const handleCategorie = categorieClicked => {
      this.setState({ categorie: categorieClicked })

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

    // const changeImage = img => {
    //   document.querySelector(".project__img--background") &&
    //     document
    //       .querySelector(".project__img--background")
    //       .classList.toggle("isOut")

    //   setTimeout(() => {
    //     this.setState({ imageOnBackground: img })
    //     //setImageState(img)
    //   }, 300)
    // }

    const leaveImage = img => {
      // setTimeout(() => {
      //   document.querySelector(".project__img--background") &&
      //     document
      //       .querySelector(".project__img--background")
      //       .classList.toggle("isOut")
      // }, 500)
    }

    const Project = ({ projectTitle, projectTitleDate, slug, image }) => {
      return (
        <Link to={`/project/${slug}`} className="project__title__link">
          <TitleContainer className="project__slide">
            <Title
              style={{ margin: "0 0 50px 0" }}
              data-image={image.fluid.src}
            >
              {projectTitle}
              <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
            </Title>
          </TitleContainer>
        </Link>
      )
    }

    const Projects = ({ projects }) => (
      <div className="projects__list" ref={this.listProjects}>
        {projects.map((project, i) => {
          return <Project key={project.slug + i} {...project} />
        })}
      </div>
    )

    return (
      <div className="projects__container" onMouseLeave={e => leaveImage()}>
        <img
          src={this.state.imageOnBackground}
          className="project__img--background"
          style={{ opacity: "0.8" }}
        />

        <div className="projects">
          {this.props.categories && (
            <Categories
              categories={this.props.categories}
              handleCategorie={handleCategorie}
            />
          )}
          <Projects projects={this.state.projects} />
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
