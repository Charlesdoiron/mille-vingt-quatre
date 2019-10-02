import React from "react"

export const ProjectsPreview = props => {
  console.log("projets", props)
  return (
    <ul>
      {props.projects.map(project => {
        return <li>{project.ContentfulProject.fields.projectTitle}</li>
      })}
    </ul>
  )
}
