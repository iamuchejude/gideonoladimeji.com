import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import './layout.css';

import Header from "./header";

const Layout = ({ pathname = '/', children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} pathname={pathname} />
      <Main>{children}</Main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
  margin: 10vh auto;
  width: 900px;

  @media (max-width: 920px) {
    width: 82vw;
    margin: 5vh auto;
  }

  a,
  a:link,
  a:visited,
  a:focus,
  a:active {
    color: #000;
    text-decoration: none;
}`;

const Main = styled.main`
  height: calc(100vh - (3 * 10vh));
  padding: 5em 0;

  @media (max-width: 500px) {
    padding: 3em 0;
  }
`;

export default Layout
