import React from "react"
import {useStaticQuery, graphql, Link, StaticQuery} from "gatsby"


const Menu = ({data}) => (
  data.allContentfulPages.edges.map(({node}) => {
    const {slug, title} = node
    return <Link to={slug} key={slug}>{title}</Link>
  })
)

export default props => (
  <StaticQuery
    query={graphql`
    query {
      allContentfulPages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `}
    render={data => <Menu data={data} {...props} key={data.slug} />} />
)




