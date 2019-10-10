import React from "react"
import { ProjectsSelectedList } from "./ProjectsSelectedList"

export const ProjectsSelected = props => {
  console.log("PROPS PROJECTS SELECTED", props)
  const { projectSelected, categories } = props
  return (
    <div className="wrapper--m">
      <div className="projects__selected">
        <span>{props.projectSelected.titleProjectsSelected}</span>
        <ProjectsSelectedList projects={projectSelected.projectsSelected} />
      </div>
    </div>
  )
}
