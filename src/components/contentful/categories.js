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

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1224px)",
  })

  return (
    <ul
      className={classNames("project__categories__container", {
        isTabletOrMobileDevice: isTabletOrMobileDevice,
      })}
    >
      <li
        onClick={e => handleCategorie("All")}
        style={{ marginBottom: "10px" }}
        className={active === "All" ? "isActive" : ""}
      >
        All
      </li>
      {props.categories.map((categorie, i) => {
        return (
          <li
            onClick={e => handleCategorie(categorie.slug)}
            style={{ marginBottom: "10px" }}
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