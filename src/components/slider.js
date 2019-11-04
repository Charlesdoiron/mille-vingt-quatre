import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Styledh2, Styledprojectdate } from "./typos"
import arrow_to_project from "./../img/pictos/arrow_to_project.svg"
import { disableScroll } from "../utils/disableScroll"

const sliderHeight = 650;

const SliderContainer = styled.div`
  height: ${sliderHeight}px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: ${props => sliderHeight - props.projectHeight}px;
  -webkit-overflow-scrolling: auto !important;
  `

const MarginBottom = styled.div`
  height: ${props => sliderHeight - props.projectHeight}px;
  `

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  `

const ScrollContainer = styled.div`
  -webkit-overflow-scrolling: auto !important;
  /* border: 3px solid #fff; */
`

const getProjectImageToHandle = ({ cover }) => cover.fluid;

const Project = ({
  cover,
  projectTitle,
  projectTitleDate,
  handleClick,
  slug,
  showLinkToProject,
  isCurrentProject,
  handleDisableWindowScroll,
  handleEnableWindowScroll,
}) =>
  <Title
    onClick={handleClick}
    onMouseEnter={handleDisableWindowScroll}
    onMouseMove={handleDisableWindowScroll}
    onMouseLeave={handleEnableWindowScroll}
    onTouchStart={handleDisableWindowScroll}
    onTouchMove={handleDisableWindowScroll}
    onTouchEnd={handleEnableWindowScroll}
    className="project__slide"
    >
    <Styledh2 isCurrentProject={isCurrentProject}>
      {projectTitle}
      <Styledprojectdate>{projectTitleDate}</Styledprojectdate>
    </Styledh2>
    {showLinkToProject && (
      <Link
        to={`/project/${slug}`}
        className="link__to__project"
      >
        See the project{" "}
        <img alt="see the project" src={arrow_to_project} />
      </Link>
    )}
  </Title>

const Projects = ({
  projects,
  handleClick,
  showLinkToProject,
  currentProjectIndex,
  handleDisableWindowScroll,
  handleEnableWindowScroll,
}) =>
  <React.Fragment>
    {projects.map((project, i) => {
      return <Project
        key={project.slug + i}
        handleClick={() => handleClick(i)}
        showLinkToProject={showLinkToProject}
        isCurrentProject={currentProjectIndex === i}
        handleDisableWindowScroll={handleDisableWindowScroll}
        handleEnableWindowScroll={handleEnableWindowScroll}
        {...project}
      />
    })}
  </React.Fragment>

export default class Slider extends Component {

  state = {
    projectHeight: 100,
    currentProjectIndex: 0,
  }

  scrollling = null;

  componentDidMount(){
    console.clear()
    this.handleSaveProjectHeight()
    this.handleSaveScrollContainerInitPosition()
    this.handleScrollToProjectIndex(0, false)
    disableScroll(this.scrollArea, this.handleControlledScroll)
  }

  handleSaveScrollContainerInitPosition = () => {
    this.initialPosition = this.scrollArea.getBoundingClientRect().top
  }

  handleFixScrollContainerOnTop = () => {
    window.scrollTo({ top: this.initialPosition, behavior: "smooth" })
  }

  handleDisableWindowScroll = () => {
    document.body.classList.add('disable-overflow')
  }

  handleEnableWindowScroll = () => {
    document.body.classList.remove('disable-overflow')
  }

  handleControlledScroll = e => {
    // fix container on top of window
    this.handleFixScrollContainerOnTop();
    // debounce first
    this.debounceScrolling = Date.now() - this.timestamp;
    if (this.debounceScrolling < 300) {
      this.timestamp = Date.now();
      return;
    }
    // prevent scrolling when already scrollin
    if (this.scrolling) return;
    this.scrolling = true;

    // handle scroll
    if (e.deltaY > 0) this.handleScrollDown();
    if (e.deltaY < 0) this.handleScrollUp();
  }

  componentWillUnmount() {
    clearTimeout(this.scrollToProjectTimeout)
  }

  handleSaveProjectHeight = () => {
    if (!this.scrollArea) return;
    if (!this.scrollArea.childNodes.length) return;
    setTimeout(() => {
      const projectHeight = this.scrollArea.childNodes[0].childNodes[0].getBoundingClientRect().height;
      this.setState({ projectHeight })
    }, 200); // to make sure the title is mounted
  }

  handleScrollDown = () => {
    const { currentProjectIndex } = this.state;
    const { projects } = this.props;
    const nextProjectIndex =
    currentProjectIndex === projects.length - 1
    ? currentProjectIndex
    : currentProjectIndex + 1
    this.handleScrollToProjectIndex(nextProjectIndex)
  }

  handleScrollUp = () => {
    const { currentProjectIndex } = this.state;
    const nextProjectIndex =
    currentProjectIndex === 0
    ? currentProjectIndex
    : currentProjectIndex - 1
    this.handleScrollToProjectIndex(nextProjectIndex)
  }

  handleScrollToProjectIndex = (projectIndex, fixScrollContainerOnTop = true) => {
    fixScrollContainerOnTop && this.handleFixScrollContainerOnTop()
    const { projectHeight } = this.state;
    const newScrollTop = projectIndex * projectHeight;
    this.scrollArea.scrollTo({ top: newScrollTop, behavior: 'smooth' })
    const { projects, handleImage } = this.props;
    this.setState({ currentProjectIndex: projectIndex }, () => {
      handleImage(getProjectImageToHandle(projects[projectIndex]))
    })
    this.scrollToProjectTimeout = setTimeout(() => {
      fixScrollContainerOnTop && this.handleFixScrollContainerOnTop()
      this.scrolling = false;
    }, 100);
  }

  render() {
    const {
      projects,
      showLinkToProject,
    } = this.props;

    const {
      projectHeight,
      currentProjectIndex,
    } = this.state;

    if (!projects.length) return "Pas de projets"
    return(
      <SliderContainer
        ref={ref => this.scrollArea = ref}
      >
        <ScrollContainer
        >
          <Projects
            projects={projects}
            handleClick={this.handleScrollToProjectIndex}
            showLinkToProject={showLinkToProject}
            currentProjectIndex={currentProjectIndex}
            handleDisableWindowScroll={this.handleDisableWindowScroll}
            handleEnableWindowScroll={this.handleEnableWindowScroll}
          />
          <MarginBottom projectHeight={projectHeight} />
        </ScrollContainer>
      </SliderContainer>
    )
  }
}
