import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import GideonImage from '../images/gideon_one.png';

const About = () => (
  <Layout pathname="/about">
    <Content>
      <ContentHeader>About Gideon</ContentHeader>
      <Container>
        <Block>
          <Text>
            I'm Gideon, Product Designer, Pianist and a Mobile Photographer. Currently doing Product Design at <a href="https://automattic" target="_blank" rel="noreferrer noopener">Automattic</a>.
          </Text>

          <Text>
            I love to be happy and designing is one of the things that makes me happy. I’m a foodie, love music (classical is my best genre), movies and playing the piano. I love meeting new people and talking about things in different fields.
          </Text>

          <Text>
            I have previously worked at various agencies and startups where I’ve used design to solve problems and also influence decisions, I’m also the CEO of a startup design agency <a href="https://3strokes.co" target="_blank" rel="noreferrer noopener">3strokes</a>; focused on helping businesses scale with design.
          </Text>

          <Text>
            Do you have a project for my company? or just want to say hello? don’t hesitate to <Link to="/contact">contact me</Link>. Cheers!
          </Text>
        </Block>

        <Block>
          <Image src={GideonImage} alt="Gideon" />
        </Block>
      </Container>
    </Content>
  </Layout>
);

const Content = styled.div`
  padding: 100px 0;
`;

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
    position: absolute;
  }
`;

const Image = styled.img`
  width: 100%;
  box-sizing: border-box;
`;

const Block = styled.div`
  padding-right: 20px;

  &:nth-child(2) {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.p`
  font-weight: 100;
  font-size: 1.1em;
  line-height: 1.8em;
  margin: 20px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
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
