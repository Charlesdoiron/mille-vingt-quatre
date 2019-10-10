import React from "react"
export const Categories = props => {
  return (
    <ul className="project__categories__container">
      <li
        onClick={e => props.handleCategorie("All")}
        style={{ marginBottom: "10px" }}
      >
        All
      </li>
      {props.categories.map(categorie => {
        return (
          <li
            onClick={e => props.handleCategorie(categorie.slug)}
            style={{ marginBottom: "10px" }}
          >
            {categorie.title}
          </li>
        )
      })}
    </ul>
  )
}
