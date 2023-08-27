import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';

function Cockpit() {
  return (
    <>
    <Header/>
    <Container>Cockpit</Container>
    <Footer/>
    </>
  )
    
}

export default Cockpit;

const Container = styled.div`
width: 90vw;
height: 10vh;
font-size: 3rem;
text-align:center;
color: black;

`