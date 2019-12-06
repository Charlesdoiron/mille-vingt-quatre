import React, { Component } from "react"
import "react-perfect-scrollbar/dist/css/styles.css"
import PerfectScrollbar from "react-perfect-scrollbar"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Styledh2, Styledprojectdate, Styledcapitalize } from "./typos"
import arrow_to_project from "./../img/pictos/arrow_to_project.svg"

const marginTopMobile = 90

const perfectScrollbarOptions = {
  handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 0.5,
  wheelPropagation: true,
  // swipeEasing: true,
  // minScrollbarLength: null,
  // maxScrollbarLength: null,
  // scrollingThreshold: 1000,
  useBothWheelAxes: true,
  suppressScrollX: true,
  // suppressScrollY: false,
  // scrollXMarginOffset: 0,
  // scrollYMarginOffset: 0,
}

const styledcapitalizeForDesktop = css`
  margin-right: 100px;
  padding-top: ${props => props.projectHeight + 50}px;
`
const SectionTitle = styled(Styledcapitalize)`
  ${props => props.forDesktop && styledcapitalizeForDesktop}
`

const computeSliderContainerHeight = ({ windowHeight, projectHeight }) =>
  Math.floor(windowHeight / projectHeight) * projectHeight

const mobileCss = css`
  /* margin-top: ${marginTopMobile}px; */
  max-height: (100vh - ${marginTopMobile}px);
`
const SliderContainer = styled.div`
  height: ${computeSliderContainerHeight}px;
  max-height: 100vh;
  overflow: hidden;
  width: 100%;
  ${props => !props.forDesktop && mobileCss}
`

const computeSliderContainerMarginBottom = ({ windowHeight, projectHeight }) =>
  Math.floor(windowHeight / projectHeight) * projectHeight - 2 * projectHeight

const MarginBottom = styled.div`
  height: ${computeSliderContainerMarginBottom}px;
`
const MarginTop = styled.div`
  height: ${props => props.projectHeight}px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Styledh2)`
  max-width: 550px;
  overflow-wrap: break-word;
`

// const TopFader = styled.div`
//   height: ${props => props.projectHeight}px;
//   background: linear-gradient(to bottom, #000, transparent);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 101;
//   pointer-events: none;
// `

const getProjectImageToHandle = ({ cover }) => cover.fluid

const Project = ({
  isCurrentProject,
  projectTitle,
  projectTitleDate,
  handleClick,
  slug,
  showLinkToProject,
  projectNumber,
}) => (
  <TitleContainer
    onClick={handleClick}
    className="project__slide"
    projectNumber={projectNumber}
  >
    <Title selected={isCurrentProject}>
      {projectTitle}
      <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
    </Title>
    {showLinkToProject && (
      <Link to={`/project/${slug}`} className="link__to__project">
        See the project <img alt="see the project" src={arrow_to_project} />
      </Link>
    )}
  </TitleContainer>
)

const Projects = ({
  projects,
  handleClick,
  showLinkToProject,
  currentProjectIndex,
}) => (
  <React.Fragment>
    {projects.map((project, i) => {
      return (
        <Project
          key={project.slug + i}
          projectNumber={i}
          isCurrentProject={currentProjectIndex === i}
          handleClick={() => handleClick(i)}
          showLinkToProject={showLinkToProject}
          {...project}
        />
      )
    })}
  </React.Fragment>
)

export default class Slider extends Component {
  state = {
    projectHeight: 100,
    windowHeight: null,
    currentProjectIndex: 0,
  }

  scrollling = null
  scrollTimeout = 300

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.containerRef.current) {
      const windowHeight = nextProps.containerRef.current.getBoundingClientRect()
        .height
      return {
        ...prevState,
        windowHeight,
      }
    }
    return prevState
  }

  componentDidMount() {
    setTimeout(() => {
      this.handleSaveProjectHeight()
      this.handleSaveScrollContainerInitPosition()
      this.handleScrollToProjectIndex(0, false)
    }, 100) // to make sure the title is mounted
  }

  componentWillUnmount() {
    clearTimeout(this.scrollToProjectTimeout)
  }

  handleSaveProjectHeight = () => {
    if (!this.scrollArea) return
    if (!this.scrollArea.childNodes.length) return
    const projectHeight = document
      .querySelector(".project__slide")
      .getBoundingClientRect().height
    this.setState({ projectHeight })
  }

  handleSaveScrollContainerInitPosition = () => {
    this.initialPosition =
      this.scrollArea.getBoundingClientRect().top -
      (this.props.forDesktop ? 0 : marginTopMobile)
  }

  handleFixScrollContainerOnTop = () => {
    window.scrollTo({ top: this.initialPosition, behavior: "smooth" })
  }

  handleScroll = scroll => {
    clearTimeout(this.scrollToProjectTimeout)
    this.scrollToProjectTimeout = setTimeout(() => {
      this.handleScrollToProject(scroll)
    }, this.scrollTimeout)
  }

  handleScrollToProject = scroll => {
    const { projectHeight } = this.state
    // const { projects, forDesktop } = this.props
    const scrollTop = scroll.scrollTop
    const projectToFocus = Math.round(scrollTop / projectHeight)
    // if (forDesktop && !!projects[projectToFocus]) {
    //   this.handleFixScrollContainerOnTop()
    //   if (!projects[projectToFocus]) return;
    //   const newScrollTop = projectToFocus * projectHeight;
    //   this.scrollArea.scrollTo({ top: newScrollTop, behavior: 'smooth' })
    // }
    this.handleProjectIndex(projectToFocus)
  }

  handleScrollToProjectIndex = (
    projectIndex,
    fixScrollContainerOnTop = true
  ) => {
    const { forDesktop } = this.props
    if (forDesktop) {
      fixScrollContainerOnTop && this.handleFixScrollContainerOnTop()
      const { projectHeight } = this.state
      const newScrollTop = projectIndex * projectHeight
      this.scrollArea.scrollTo({ top: newScrollTop, behavior: "smooth" })
    }
    this.handleProjectIndex(projectIndex)
  }

  handleProjectIndex = projectIndex => {
    const { projects, handleImage } = this.props
    this.setState({ currentProjectIndex: projectIndex }, () => {
      handleImage(getProjectImageToHandle(projects[projectIndex]))
    })
  }

  render() {
    const { projects, showLinkToProject, forDesktop, title } = this.props

    const { projectHeight, windowHeight, currentProjectIndex } = this.state

    if (!projects.length) return "Pas de projets"
    return (
      <React.Fragment>
        {Boolean(title) && (
          <SectionTitle forDesktop={forDesktop} projectHeight={projectHeight}>
            {title}
          </SectionTitle>
        )}
        <SliderContainer
          projectHeight={projectHeight}
          windowHeight={windowHeight}
          forDesktop={forDesktop}
        >
          <PerfectScrollbar
            component="ul"
            options={perfectScrollbarOptions}
            onScrollY={this.handleScroll}
            containerRef={ref => (this.scrollArea = ref)}
            ref={ref => (this._scrollAreaRef = ref)}
          >
            {forDesktop && <MarginTop projectHeight={projectHeight} />}
            <Projects
              projects={projects}
              handleClick={this.handleScrollToProjectIndex}
              showLinkToProject={showLinkToProject}
              currentProjectIndex={currentProjectIndex}
            />
            {forDesktop && (
              <MarginBottom
                projectHeight={projectHeight}
                windowHeight={windowHeight}
                forDesktop={forDesktop}
              />
            )}
          </PerfectScrollbar>
          {/* {forDesktop && <TopFader projectHeight={projectHeight} />} */}
        </SliderContainer>
      </React.Fragment>
    )
  }
}
