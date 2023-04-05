import React from 'react';
import styled from 'styled-components';

//import components
import StarRating from "./StarRating";

const AlbumCard = ({name, artist, genre, photoFile}) => {
  return (
    <StyledDiv>
      <img src={photoFile} alt={name}/>
      <AlbumName>{name}</AlbumName>
      <h3>{artist}</h3>
      <p>{genre}</p>
      <StarRating/>
    </StyledDiv>
  );
}

export default AlbumCard;

const StyledDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 400px;
  text-align: center;
  margin: 50px auto;
  padding: 60px 20px 40px 20px;
  background-color: #ADD8E6;
`;

const AlbumName = styled.h2`
  color: blue;
`;