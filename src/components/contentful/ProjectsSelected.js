import React from "react"
import { Link } from "gatsby"
export const ProjectsSelected = props => {
  console.log("selected", props.projectsSelected)
  return (
    <div className="projects__selected">
      <ul>
        {props.projectsSelected &&
          props.projectsSelected.map(selected => {
            return (
              selected.ContentfulProjectsSelected.fields.projectsSelected &&
              selected.ContentfulProjectsSelected.fields.projectsSelected.map(
                s => {
                  return (
                    <div>
                      <p>{s.slug}</p>
                      {s.cover && <img src={s.cover.fluid.src} />}
                    </div>
                  )
                }
              )
            )
          })}
      </ul>
    </div>
  )
}
