import React from "react"
import { Link } from "gatsby"
export const ProjectsSelected = props => {
  return (
    <div className="projects__selected">
      <ul>
        {props.data.projects &&
          props.data.projects.map(project => {
            return (
              <Link to={`project/${project.slug}`}>
                <img
                  src={project.cover.fluid.src}
                  alt=""
                  style={{
                    width: `50%`,
                    margin: `0 auto`,
                  }}
                />
                <p>{project.title}</p>
              </Link>
            )
          })}
      </ul>
    </div>
  )
}
