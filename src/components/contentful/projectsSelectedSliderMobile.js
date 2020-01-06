import React from "react"
import { Link } from "gatsby"
import { Styledh2, Styledprojectdate } from "../typos"
import { FocalImage } from "./../contentful/focalImage"
import Slider from "react-slick"
import styled from "styled-components"

const Title = styled(Styledh2)`
  max-width: 550px;
  overflow-wrap: break-word;
`

export const ProjectsSelectedSliderMobile = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
  }
  return (
    <div data-aos="fade-up">
      <Slider {...settings}>
        {props.projectSelected.projectsSelected.map(project => {
          return (
            <div className="projects__selected__slider--mobile">
              <Link className="slider__titles" to={`/project/${project.slug}`}>
                <Title>
                  {project.projectTitle}
                  <Styledprojectdate>
                    {project.projectTitleDate}
                  </Styledprojectdate>
                </Title>
                <p>{project.projectSubtitle}</p>
              </Link>

              <FocalImage
                image={project.image}
                focalPoint={project.focalPoint.focalPoint}
              ></FocalImage>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
