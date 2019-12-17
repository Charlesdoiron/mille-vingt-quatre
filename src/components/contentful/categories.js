import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import classNames from "classnames"
export const Categories = props => {
  const [active, setActive] = useState("All")

  useEffect(() => {
    setActive("All")
  }, [])

  const handleCategorie = e => {
    props.handleCategorie(e)
    setActive(e)
  }
  console.log(props.isDesktop)

  return (
    <ul
      className={classNames("project__categories__container", {
        isTabletOrMobile: !props.isDesktop,
      })}
    >
      <li
        onClick={e => handleCategorie("All")}
        className={active === "All" ? "isActive" : ""}
      >
        All
      </li>
      {props.categories.map((categorie, i) => {
        return (
          <li
            onClick={e => handleCategorie(categorie.slug)}
            key={i}
            className={active === categorie.slug ? "isActive" : ""}
          >
            {categorie.title}
          </li>
        )
      })}
    </ul>
  )
}
