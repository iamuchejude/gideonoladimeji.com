import React from 'react';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = () => (
  <Layout pathname="/">
    <SEO title="Gideon Oladimeji - Product Designer" />
    <Text>
      A product designer, Pianist and a mobile photographer.  
    </Text>
    <Text>
      Formerly a Product Designer at <a href="https://automattic.com" target="_blank" rel="noopener noreferrer">Automattic</a>.
    </Text>
    <Text>
      I'm also the CEO of a startup design agency(<a href="http://3strokes.design" target="_blank" rel="noreferrer noopener">3strokes</a>) focused on helping business scale with design. I am open to new opportunities and roles.
    </Text>
    <a
      href="https://medium.com/gideon-case-studies"
      target="_blank"
      rel="noopener noreferrer"
      role="button"
    >
      <Button marginTop>Works</Button>
    </a>
  </Layout>
);

const Text = styled.p`
  font-size: 1.5em;
  margin: 15px 0;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 1.3em;
    line-height: 1.7em;
  }

  a {
    text-transform: capitalize;
    text-decoration: underline !important;
    font-weight: 500;
  }
`;

const Button = styled.button`
  border: 2px solid #000;
  padding: 10px 3.5em;
  background: #fff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #000;
    color: #fff;
    transition: .5s linear background-color;
  }

  ${props => props.marginTop && css`
    margin-top: 9em;

    @media (max-width: 600px) {
      margin-top: 6em;
    }
  `}
`;

export default Index;
