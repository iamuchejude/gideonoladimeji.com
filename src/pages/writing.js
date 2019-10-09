import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Writing = () => (
  <Layout pathname="/writing">
    <SEO title="Gideon writes too." />
    <Info>
      I write about thoughts on design, process, creative thinking, life and other things on <a href="https://medium.com/@olagidi9" target="_blank" rel="noopener noreferrer">medium</a>.
    </Info>
  </Layout>
);

const Info = styled.p`
  font-size: 1.8em;
  line-height: 1.6em;
  font-weight: 500;

  a,
  a:link,
  a:hover {
    text-decoration: none;
    font-weight: 500;
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
`;

export default Writing;
