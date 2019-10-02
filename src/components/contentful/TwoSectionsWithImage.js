import React from "react"

export const TwoSectionsWithImage = props => {
  console.log("twosections props", props)

  return props.twoSectionsImageText.map(module => {
    console.log("module dans tsw", module)

    return (
      <div className="two__sections__with__image">
        <h2>{module.ContentfulTwoSectionsImageText.fields.title}</h2>
        <div style={{ display: `flex`, justifyContent: `space-between` }}>
          <p>
            {module.ContentfulTwoSectionsImageText.fields.twoSectionsText &&
              module.ContentfulTwoSectionsImageText.fields.twoSectionsText
                .twoSectionsText}
          </p>
          <img
            src={
              module.ContentfulTwoSectionsImageText.fields.image &&
              module.ContentfulTwoSectionsImageText.fields.image.fluid.src
            }
            alt=""
          />
        </div>
      </div>
    )
  })
}
