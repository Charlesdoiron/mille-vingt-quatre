import React, { useEffect, useState } from "react"
import { ProjectsSelectedList } from "./projectsSelectedList"
import { ProjectsSelectedSliderMobile } from "./projectsSelectedSliderMobile"

export const ProjectsSelected = props => {
  const [device, setDevice] = useState("")
  const getWidth = () => {
    if (window.innerWidth > 992) {
      setDevice("desktop")
    } else if (678 < window.innerWidth && window.innerWidth > 992) {
      setDevice("tablet")
    } else {
      setDevice("mobile")
    }
  }
  useEffect(() => {
    getWidth()
  }, [])
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => getWidth(), {
        passive: true,
      })
      return () => window.removeEventListener("resize", () => getWidth())
    }
  }, [device])

  if (device === "mobile") {
    return (
      <ProjectsSelectedSliderMobile projectSelected={props.projectSelected} />
    )
  } else {
    return (
      <ProjectsSelectedList
        projectSelected={props.projectSelected}
        key={props.i}
        title="selected projects"
      />
    )
  }
}
