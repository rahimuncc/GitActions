import React from "react";
import styled from "styled-components";

function Promises() {
  return (
    <Container>
        <h3>Our Promises</h3>
      <PromiseDiv>
        <img src="/images/day_shipping.png" alt="" />
        <img src="/images/classss.png" alt="" />
        <img src="/images/beyond.png" alt="" />
        <img src="/images/24h.png" alt="" />
      </PromiseDiv>
    </Container>
  );
}

export default Promises;

const Container = styled.div`
  // background: #090b13;
  // background:#f9f9f9;
  color: black;
  margin: 5vh 0;
  h3 {
    text-align:center;
    padding: 2rem 0 0 2.5rem;
    letter-spacing: 4px;
    margin-bottom: 8vh;
    font-family: monospace;
    font-size: 1.8rem;
    color: #48494a;
    text-transform: uppercase;
  }
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    h3 {
        padding: 1rem 0;
      text-align: center;
    }
  }
`;
const PromiseDiv = styled.div`
  display: grid;
  color: black;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-left: 15vw;
  img {
   width: 120px;
   height: 120px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left:15vw;
  }
`;
