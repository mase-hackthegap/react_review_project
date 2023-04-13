import React from 'react';
import styled from 'styled-components';

function AboutProject() {
  return (
    <>
        <WelcomeMessage>This is the About Project Page</WelcomeMessage>
    </>
  );
}

export default AboutProject;

const WelcomeMessage = styled.h3`
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
`;