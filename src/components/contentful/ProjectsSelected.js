import React from "react"
import { Link } from "gatsby"
export const ProjectsSelected = props => {
  return (
    <div className="projects__selected">
      <ul>
        {props.data &&
          props.data.map(project => {
            return (
              <Link to={`project/${project.slug}`}>
                <img src={project.cover.fluid.src} alt="" />
                <p>{project.title}</p>
                <small>{project.description.description}</small>
              </Link>
            )
          })}
      </ul>
    </div>
  )
}
