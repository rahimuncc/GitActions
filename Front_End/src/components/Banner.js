import React from 'react'
import styled from "styled-components"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b2 from "../brandSpotlight/BS-2.jpg";
import b3 from "../brandSpotlight/BS-3.jpg";
import b4 from "../brandSpotlight/BS-4.jpg";
import b5 from "../brandSpotlight/BS-5.jpg";
import b6 from "../brandSpotlight/BS-6.jpg";

function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // arrows:false
  }

  return (
    <Container>
    <Carousel {...setting}>
      <Wrap>
        <img src={b2} alt="" />
      </Wrap>
      <Wrap>
        <img src={b3} alt="" />
      </Wrap>
      <Wrap>
        <img src={b4} alt="" />
      </Wrap>
      <Wrap>
        <img src={b5} alt="" />
      </Wrap>
      <Wrap>
        <img src={b6} alt="" />
      </Wrap>
    </Carousel>
    </Container>
  )
}

export default ImgSlider
const Container = styled.div`
width: 100%;
height:50vh;
overflow:hidden;
@media (max-width: 768px) {
  height:25vh;
  
}
`
const Carousel = styled(Slider)`
width: 92vw;
margin-left: 2.8rem;
  margin-top: 20px;
  ul li button {
    &:before{
      font-size: 10px;
      color:rgb(150,158,171);
    }
  }
  li.slick-active button::before{
    color:gray;
  }
  .slick-list{
    overflow:visible;
  }
  .slick-next{
    right: 10px;
  }
  .slick-next:before{
    font-size: 30px;
  }
  .slick-prev{
    left: 10px;
  }
  .slick-prev:before{
    font-size: 30px;
  }
  button{
    z-index: 1;
  }
  @media (max-width: 768px) {
    margin-left: 1.2rem;
    width: 88vw;
    
  }

`
const Wrap = styled.div`
  cursor:pointer;
  margin: 0 5px;
  img{
    border: 1px solid transparent;
    border-radius: 10px;
    width: 100%;
    height: 40vh;
    transition-duration: 300ms;
    @media (max-width: 768px) {
      height: 10rem;
      
    }
    &:hover{
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`