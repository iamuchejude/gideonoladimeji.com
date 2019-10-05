import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';

const Index = () => (
  <Layout pathname="/">
    <Content>
      <Text>Product Designer, Pianist and a Mobile Photographer.</Text>
      <Text>
        Currently doing Product Design at <a href="https://automattic.com" target="_blank" rel="noopener noreferrer">Automattic</a>.
      </Text>
      <Text>This site shows insights on how I think and use design to solve problems.</Text>
      <a
        href="http://dribbble.com/scalarbane"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button marginTop>Works</Button>
      </a>
    </Content>
  </Layout>
);

const Content = styled.div`
  padding: 6em 0;
`;

const Text = styled.p`
  font-size: 1.5em;
  margin: 15px 0;
  font-weight: 500;

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
    margin-top: 10em;
  `}
`;

export default Index;
