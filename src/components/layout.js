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
`;

export default Layout
