import React from "react";
import styled, { css } from 'styled-components';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import SEO from '../components/seo';

const FourOFour = () => (
  <Wrapper>
    <SEO title="Gideon does not live here." />
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>This page is missing or you entered the link incorrectly.</Message>
      <GoBackLink>
        <AniLink color="black" paintDrip to="/">
          Go home
        </AniLink>
      </GoBackLink>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;

  @media (max-width: 1000px) {
    width: 85vw;
  }
`;

const ErrorCode = styled.h1`
  font-size: 12em;
  margin: 0;
  padding: 0;
  font-weight: 900;

  @media (max-width: 900px) {
    font-size: 8em;
  }

  @media (max-width: 600px) {
    font-size: 4em;
  }
`;

const normalFontSize = css`
  font-size: 1.5em;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 1.3em;
  }

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const Message = styled.h4`
  ${ normalFontSize}
  margin: 0;
  padding: 0;
`;

const GoBackLink = styled.div`
  margin-top: 2em;

  a {
    text-decoration: underline;
    ${ normalFontSize}
  }
`;

export default FourOFour;
