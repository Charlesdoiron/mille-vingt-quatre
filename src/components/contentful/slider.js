import React, { Component } from "react"

import styled from "styled-components"
import "./../../../node_modules/slick-carousel/slick/slick.css"
import "./../../../node_modules/slick-carousel/slick/slick-theme.css"
import arrow_right from "./../../img/pictos/arrow_right.svg"
import arrow_left from "./../../img/pictos/arrow_left.svg"
import slider_arrow from "./../../img/pictos/slider_arrow.svg"
import Slider from "react-slick"

let Container = styled.div`
  width: 100%;
  padding: 0 10%;
`

function SampleNextArrow(props) {
  const { onClick } = props
  return <img onClick={onClick} src={slider_arrow} alt="next" />
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <img
      alt="prev"
      onClick={onClick}
      src={slider_arrow}
      style={{ transform: "rotate(180deg)" }}
    />
  )
}

export class CustomSlider extends Component {
  state = {
    cursorIsNext: false,
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
      ],
    }
    const changeCursor = e => {
      const halfSliderWitdh =
        document.querySelector(".slider__container").offsetWidth / 2
      const cursorPositionX = e.clientX

      if (cursorPositionX > halfSliderWitdh) {
        this.setState({ cursorIsNext: true })
      } else {
        this.setState({ cursorIsNext: false })
      }
    }
    return (
      <Container
        className="slider__container"
        onMouseMove={e => changeCursor(e)}
        onClick={e =>
          this.state.cursorIsNext
            ? this.slider.slickNext()
            : this.slider.slickPrev()
        }
        style={
          this.state.cursorIsNext
            ? { cursor: `url(${arrow_right}), url(${arrow_right}), auto` }
            : { cursor: `url(${arrow_left}), url(${arrow_left}), auto` }
        }
      >
        <Slider {...settings} ref={c => (this.slider = c)}>
          {this.props.images.images.map(image => (
            <img
              src={image.fluid.src}
              alt="slider"
              style={{
                width: "100%",
                minHeigth: "300px",
                maxHeigth: "300px",
              }}
            />
          ))}
        </Slider>
      </Container>
    )
  }
}
