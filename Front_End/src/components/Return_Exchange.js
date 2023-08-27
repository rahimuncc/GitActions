import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

function Return_Exchange() {
  return (
    <>
    <Header/>
    <Container>Return_Exchange</Container>
    <Footer/>
    </>
  )
    
}

export default Return_Exchange;

const Container = styled.div`
width: 90vw;
height: 10vh;
font-size: 3rem;
text-align:center;
color: black;

`