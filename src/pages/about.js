import React from 'react';
import styled, { css } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GideonImage from '../images/gideon.png';

const About = () => (
  <Layout pathname="/about">
    <SEO title="About Gideon." />
    <ContentHeader>About Gideon</ContentHeader>
    
    <Container>
      <Block>
        <Image src={GideonImage} mobile alt="Gideon" />
        <Text>
          I'm Gideon, Product Designer, Pianist and a Mobile Photographer. Previously doing Product Design at <a href="https://automattic.com" target="_blank" rel="noreferrer noopener">Automattic</a>.
        </Text>

        <Text>
          I love to be happy and designing is one of the things that makes me happy. I’m a foodie, love music (classical is my best genre), movies and playing the piano. I love meeting new people and talking about things in different fields.
        </Text>

        <Text>
          I have previously worked at various agencies and startups where I’ve used design to solve problems and also influence decisions. I’m also the CEO of a startup design agency <a href="http://3strokes.design" target="_blank" rel="noreferrer noopener">3strokes</a>; focused on helping businesses scale with design.
        </Text>

        <Text>
          Do you have a project for my company? Or just want to say hello? don’t hesitate to <AniLink paintDrip color="black" to="/contact">contact me</AniLink>. Cheers!
        </Text>
      </Block>

      <Block>
        <Image src={GideonImage} deskop alt="Gideon" />
      </Block>
    </Container>
  </Layout >
);

const ContentHeader = styled.h2`
  font-weight: 500;
`;

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  margin: 2.5em 0;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  @media (max-width: 1010px) {
    display: block
  }
`;

const Image = styled.img`
  width: 100%;
  box-sizing: border-box;
  display: block;

  ${props => props.desktop && css`
    @media (max-width: 950px) {
      display: none;
    }
  `}

  ${props => props.mobile && css`
    display: none;
    margin: 0;

    @media (max-width: 550px) {
      display: block;
      margin: 0 0 3em 0;
    }
  `}
`;

const Block = styled.div`
  padding-right: 20px;

  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
  }

  &:nth-child(2) {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0;

    @media (max-width: 1010px) {
      width: 0;
      margin-right: 0;
    }
  }
`;

const Text = styled.p`
  font-weight: 100;
  font-size: 1.1em;
  line-height: 1.8em;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    font-size: 1.1em;
  }

  a,
  a:link,
  a:visited,
  a:focus,
  a:hover {
    text-decoration: underline;
  }
`;

export default About;
