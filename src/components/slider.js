import React, { Component } from "react"
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from "styled-components"
import { Link } from "gatsby"
import { Styledh2, Styledprojectdate } from "./typos"
import arrow_to_project from "./../img/pictos/arrow_to_project.svg"

const sliderHeight = 650;
const perfectScrollbarOptions = {
  handlers : ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
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

const SliderContainer = styled.div`
  height: ${sliderHeight}px;
  overflow: hidden;
  padding-bottom: ${props => sliderHeight - props.projectHeight}px;
`

const MarginBottom = styled.div`
  height: ${props => sliderHeight - props.projectHeight}px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const getProjectImageToHandle = ({ cover }) => cover.fluid;

const Project = ({
  cover,
  projectTitle,
  projectTitleDate,
  handleImage,
  slug,
  showLinkToProject,
}) =>
  <Title
    onClick={() => cover && handleImage(getProjectImageToHandle({ cover }))}
    className="project__slide"
    >
    <Styledh2>
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

const Projects = ({ projects, handleImage, showLinkToProject }) =>
  <React.Fragment>
    {projects.map((project, i) => {
      return <Project
        key={project.slug}
        handleImage={handleImage}
        showLinkToProject={showLinkToProject}
        {...project}
      />
    })}
  </React.Fragment>

export default class Slider extends Component {

  state = {
    projectHeight: 100,
  }

  scrollling = null;
  scrollTimeout = 300;

  componentDidMount(){
    this.handleSaveProjectHeight()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollToProjectTimeout)
  }

  handleSaveProjectHeight = () => {
    if (!this.scrollArea) return;
    if (!this.scrollArea.childNodes.length) return;
    setTimeout(() => {
      const projectHeight = this.scrollArea.childNodes[0].getBoundingClientRect().height;
      this.setState({ projectHeight })
    }, 500); // to make sure the title is mounted
  }

  handleScroll = (scroll) => {
    clearTimeout(this.scrollToProjectTimeout)
    this.scrollToProjectTimeout = setTimeout(() => {
      this.handleScrollToProject(scroll)
    }, this.scrollTimeout);
  }

  handleScrollToProject = (scroll) => {
    const { projectHeight } = this.state;
    const { projects } = this.props;
    const scrollTop = scroll.scrollTop;
    const numberOfProjects = scroll.childNodes.length - 3;
    console.log(
      'scroll tio flucking project',
      scrollTop,
      numberOfProjects,
      this.state.projectHeight,
    );
    const projectToFocus = Math.round(scrollTop / projectHeight)
    const newScrollTop = projectToFocus * projectHeight;
    this.scrollArea.scrollTo({ top: newScrollTop, behavior: 'smooth' })
    this.props.handleImage(getProjectImageToHandle(projects[projectToFocus]))
  }

  render() {
    const {
      handleImage,
      projects,
      showLinkToProject,
    } = this.props;

    const {
      projectHeight,
    } = this.state;

    if (!projects.length) return "Pas de projets"
    return(
      <SliderContainer>
        <PerfectScrollbar
          component='ul'
          options={perfectScrollbarOptions}
          onScrollY={this.handleScroll}
          containerRef={ref => (this.scrollArea = ref)}
          ref={ref => (this._scrollAreaRef = ref)}
        >
          <Projects
            projects={projects}
            handleImage={handleImage}
            showLinkToProject={showLinkToProject}
          />
          <MarginBottom projectHeight={projectHeight} />
        </PerfectScrollbar>
      </SliderContainer>
    )
  }
}
