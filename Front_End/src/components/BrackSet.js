import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';


function BrackSet() {
  return (
    <>
    <Header/>
    <Container>BrackSet</Container>
    <Footer/>
    </>
  )
}

export default BrackSet;

const Container = styled.div`
width: 90vw;
height: 48vh;
font-size: 3rem;
text-align:center;
color: black;

`