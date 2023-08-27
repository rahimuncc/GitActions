import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

function Suspension() {
  return (
    <>
    <Header/>
    <Container>Suspension</Container>
    <Footer/>
    </>
  )
    
}

export default Suspension;

const Container = styled.div`
width: 90vw;
height: 10vh;
font-size: 3rem;
text-align:center;
color: black;

`