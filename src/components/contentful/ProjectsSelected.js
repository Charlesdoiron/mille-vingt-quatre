import React from "react"
import { Link } from "gatsby"
export const ProjectsSelected = props => {
  console.log("PROJECTS SELECTED", props.projectsSelected)
  return (
    <div className="projects__selected">
      {props.projectsSelected.projectsSelected.map(project => {
        return (
          <div>
            <p>{project.projectTitle}</p>
            {project.cover && <img src={project.cover.fluid.src} />}
          </div>
        )
      })}
    </div>
  )
}
