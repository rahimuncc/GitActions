import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

function Shipping_delivery() {
  return (
    <>
    <Header/>
    <Container>Shipping_delivery</Container>
    <Footer/>
    </>
  )
    
}

export default Shipping_delivery;

const Container = styled.div`
width: 90vw;
height: 10vh;
font-size: 3rem;
text-align:center;
color: black;

`