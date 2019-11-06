import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Styledh2, Styledprojectdate, Styledcapitalize } from "./typos"
import arrow_to_project from "./../img/pictos/arrow_to_project.svg"
import { disableScroll } from "../utils/disableScroll"
import getScrollbarWidth from "../utils/scrollbarWidth"

const marginTopMobile = 90;
const scrollbarWidth = getScrollbarWidth();

const styledcapitalizeForDesktop = css`
  margin-right: 100px;
  padding-top: ${props => props.projectHeight + 50}px;
`
const SectionTitle = styled(Styledcapitalize)`
 ${props => props.forDesktop && styledcapitalizeForDesktop}
`

const computeSliderContainerHeight = ({ windowHeight, projectHeight }) =>
  Math.floor(windowHeight / projectHeight) * projectHeight;

const computeSliderContainerMarginBottom = ({ windowHeight, projectHeight }) =>
  Math.floor(windowHeight / projectHeight) * projectHeight - projectHeight;

const mobileCss = css`
  margin-top: ${marginTopMobile}px;
  max-height: (100vh - ${marginTopMobile}px);
`

const SliderContainer = styled.div`
  height: ${computeSliderContainerHeight}px;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  ${props => !props.forDesktop && mobileCss}
`

const ScrollContainer = styled.div`
  -webkit-overflow-scrolling: auto !important;
  box-sizing: border-box;
  position: relative;
`

const MarginBottom = styled.div`
  height: ${computeSliderContainerMarginBottom}px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  opacity: 1;
  transition: opacity 250ms ease-in-out;
`

const Spacer = styled.div`
  height: ${props => props.visible ? props.projectHeight : 0}px;
  /* transform: scale(${props => props.visible ? 1 : 0}); */
  transition: height 250ms ease-in-out;
`

const TopFader = styled.div`
  height: ${props => props.projectHeight}px;
  background: linear-gradient(to bottom, #000, transparent);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 101;
`

const getProjectImageToHandle = ({ cover }) => cover.fluid;

const Project = ({
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
  projectHeight,
  projects,
  handleClick,
  showLinkToProject,
  currentProjectIndex,
  handleDisableWindowScroll,
  handleEnableWindowScroll,
  forDesktop,
}) =>
  <React.Fragment>
    {projects.map((project, i) => {
      return (
        <React.Fragment
          key={`${project.slug}${i}${projectHeight}`}
        >
          {forDesktop && <Spacer
            projectHeight={projectHeight}
            visible={currentProjectIndex === i}
          />}
          <Project
            handleClick={() => handleClick(i)}
            showLinkToProject={showLinkToProject}
            isCurrentProject={currentProjectIndex === i}
            handleDisableWindowScroll={handleDisableWindowScroll}
            handleEnableWindowScroll={handleEnableWindowScroll}
            {...project}
          />
        </React.Fragment>

    )})}
  </React.Fragment>

export default class Slider extends Component {

  state = {
    projectHeight: 100,
    currentProjectIndex: 0,
    windowHeight: null
  }

  scrollling = null;

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.containerRef.current) {
      const windowHeight = nextProps.containerRef.current.getBoundingClientRect().height
      return {
        ...prevState,
        windowHeight,
      }
    }
    return prevState;
  }

  componentDidMount(){
    // console.clear()
    this.handleScrollToProjectIndex(0, false)
    disableScroll(this.scrollArea, this.handleControlledScroll)
    setTimeout(() => {
      this.handleSaveProjectHeight()
      this.handleSaveScrollContainerInitPosition()
    }, 400); // to make sure the title is mounted
  }

  handleSaveProjectHeight = () => {
    if (!this.scrollArea) return;
    if (!this.scrollArea.childNodes.length) return;
    const projectHeight = document.querySelector('.project__slide').getBoundingClientRect().height;
    this.setState({ projectHeight })
  }

  handleSaveScrollContainerInitPosition = () => {
    this.initialPosition =
      this.scrollArea.getBoundingClientRect().top
      - (this.props.forDesktop ? 0 : marginTopMobile);
  }

  handleFixScrollContainerOnTop = () => {
    window.scrollTo({ top: this.initialPosition, behavior: "smooth" })
  }

  handleDisableWindowScroll = () => {
    document.body.classList.add('disable-overflow')
    if (this.props.scrollbarIsVisible) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  handleEnableWindowScroll = () => {
    document.body.classList.remove('disable-overflow')
    if (this.props.scrollbarIsVisible) {
      document.body.style.paddingRight = '0px';
    }
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
    disableScroll(this.scrollArea, this.handleControlledScroll);

    // handle scroll
    if (e.deltaY > 0) this.handleScrollDown();
    if (e.deltaY < 0) this.handleScrollUp();
  }

  componentWillUnmount() {
    clearTimeout(this.scrollToProjectTimeout)
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
    }, 700);
  }

  render() {
    const {
      projects,
      showLinkToProject,
      title,
      forDesktop,
    } = this.props;

    const {
      projectHeight,
      currentProjectIndex,
      windowHeight,
    } = this.state;

    if (!projects.length) return "Pas de projets"
    return(
      <React.Fragment>
        <SectionTitle
          forDesktop={forDesktop}
          projectHeight={projectHeight}
        >
            {title}
        </SectionTitle>
        <SliderContainer
          ref={ref => this.scrollArea = ref}
          projectHeight={projectHeight}
          windowHeight={windowHeight}
          forDesktop={forDesktop}
        >
          <ScrollContainer
          >
            <Projects
              projects={projects}
              projectHeight={projectHeight}
              handleClick={this.handleScrollToProjectIndex}
              showLinkToProject={showLinkToProject}
              currentProjectIndex={currentProjectIndex}
              handleDisableWindowScroll={this.handleDisableWindowScroll}
              handleEnableWindowScroll={this.handleEnableWindowScroll}
              forDesktop={forDesktop}
            />
            <MarginBottom
              projectHeight={projectHeight}
              windowHeight={windowHeight}
              forDesktop={forDesktop}
            />
          </ScrollContainer>
        </SliderContainer>
        {forDesktop && <TopFader
          projectHeight={projectHeight}
        />}
      </React.Fragment>
    )
  }
}
