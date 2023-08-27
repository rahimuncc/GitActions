import React from "react";
import styled from "styled-components";
import image1 from "../brandSpotlight/BS-1.jpg";
import image2 from "../brandSpotlight/BS-4.jpg";
import image3 from "../brandSpotlight/BS-6.jpg";
import image4 from "../brandSpotlight/BS-3.jpg";
import image5 from "../brandSpotlight/BS-5.jpg";


const Parent = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;


  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;


const Div = styled.div`
  height: 250px;
  background-color: rgb(185, 94, 9);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  transition: all 0.3s ease; /* Add a transition effect */
  cursor:pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
      height:80px;
      width:100%;
    }


  ${({ image }) =>
    image &&
    `
    background-image: url(${image});
  `}


  @media (min-width: 768px) {
    ${({ area }) =>
      area &&
      `
      grid-area: ${area};
    `}
  }
  @media (max-width: 768px) {
    ${({ area }) =>
      area &&
      `
      grid-area: ${area};
    `}
  }
`;


const BrandSpotlight = () => {
  return (
    <Parent>
        {/* grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>; */}
        <Div image={image1} area="1 / 1 / 2 / 4"></Div>
        <Div image={image2} area="1 / 4 / 2 / 6"></Div>
        <Div image={image3} area="2 / 1 / 3 / 3"></Div>
        <Div image={image4} area="2 / 3 / 3 / 4"></Div>
        <Div image={image5} area="2 / 4 / 3 / 6"></Div>
    </Parent>
  );
};


export default BrandSpotlight;




