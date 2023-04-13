import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
        <HeaderDiv>
            <HeaderText>
            React DJ Days Review
            </HeaderText>
        </HeaderDiv>
    </>
  );
}

export default Header;

const HeaderDiv = styled.div`
text-align: center;
color: white;
font-size: 30px;
`;

const HeaderText = styled.h1`
padding: 60px;
background: #1abc9c;
`;