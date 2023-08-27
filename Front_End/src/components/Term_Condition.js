import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

function Term_Condition() {
  return (
    <>
    <Header/>
    <Container>Term_Condition</Container>
    <Footer/>
    </>
  )
    
}

export default Term_Condition;

const Container = styled.div`
width: 90vw;
height: 10vh;
font-size: 3rem;
text-align:center;
color: black;

`