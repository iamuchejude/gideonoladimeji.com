import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gideon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data.placeholderImage.childImageSharp.fluid);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Gideon Oladimeji" />
}

export default Image
