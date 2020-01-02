import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout pathname="/contact">
    <SEO title="Reach out to Gideon." />
    <Info>
      Want to talk about an Idea, or something you're working on, or you have a project for my company? Hit me up on <a href="https://twitter.com/scalarbane" target="_blank" rel="noopener noreferrer">twitter</a>, <a href="https://linkedin.com/in/scalarbane" target="_blank" rel="noopener noreferrer">linkedin</a> or <a href="mailto: olagidi9@gmail.com" target="_blank" rel="noopener noreferrer">email</a>,  I’ll be happy to hear from you.
    </Info>
    <Info second>
      You can check out my <a href="https://drive.google.com/file/d/1b_39TlxTlhfjCm3Yxf_g5NGOf7dRDxwP" target="_blank" rel="noopener noreferrer">resume</a> here.
      </Info>
  </Layout>
);

const Info = styled.p`
  font-size: 1.4em;
  line-height: 1.6em;
  font-weight: 500;

  a,
  a:link,
  a:hover {
    text-decoration: none;
    font-weight: 500;
    text-decoration: underline;
  }

  ${props => props.second && css`
    margin-top: 4em;
    font-size: 1.5em;
  `}

  @media (max-width: 700px) {
    font-size: 1.3em;
    line-height: 1.7em;
  }
`;

export default Contact;
