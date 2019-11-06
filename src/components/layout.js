import React from "react"
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Menu from "./menu"

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


const Layout = props => {
  return (
    <PerfectScrollbar
    options={perfectScrollbarOptions}
    >
      <Menu currentPage={props.currentPage} />
      <div className="children__container">{props.children}</div>
    </PerfectScrollbar>
  )
}
export default Layout
