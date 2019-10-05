import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';

const Contact = () => (
  <Layout pathname="/contact">
    <Content>
      <Info>
        Wanna talk about an Idea, or something you're working on, or you have a project for my company? Hit me up on <a href="https://twitter.com/scalarbane" target="_blank" rel="noopener noreferrer">twitter</a>, <a href="https://linkedin.com/in/scalarbane" target="_blank" rel="noopener noreferrer">linkedin</a> or <a href="mailto: olagidi9@gmail.com" target="_blank" rel="noopener noreferrer">email</a>,  I’ll be happy to hear from you.
      </Info>
      <Info second>
        You can check out my <a href="https://iamuchejude.dev" target="_blank" rel="noopener noreferrer">resume</a> here.
      </Info>
    </Content>
  </Layout>
);

const Content = styled.div`
  padding: 100px 0;

  a,
  a:link,
  a:visited,
  a:hover,
  a:focus {
    text-decoration: underline;
    font-weight: 500;
  }
`;

const Info = styled.p`
  font-size: 1.4em;
  line-height: 1.5em;
  font-weight: 500;

  ${props => props.second && css`
    margin-top: 4em;
    font-size: 1.5em;
  `}
`;

export default Contact;
