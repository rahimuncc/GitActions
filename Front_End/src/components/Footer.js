import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";

import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";
function Footer() {
  return (
    <Container>
      <AboutUS>
        <h3>ABOUT</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          excepturi quos minima ducimus necessitatibus .
        </p>
        <Payment>
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmex />
          <FaCcVisa />
          <FaCcDiscover />
        </Payment>
        <Secure>
          <LockIcon />
          <p>Secure Online Payment</p>
        </Secure>
      </AboutUS>
      <Informations>
        <h3>INFORMATIONS</h3>
        <ul>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/term_condition">Term & Condition</Link>
          </li>
          <li>
            <Link to="/return_exchange">Return & Exchange</Link>
          </li>
          <li>
            <Link to="/shipping_delivery">Shipping & Delivery</Link>
          </li>
          <li>
            <Link to="/policy">Private Policy</Link>
          </li>
        </ul>
      </Informations>
      <Categories>
        <h3>CATEGORIES</h3>
        <ul>
          <li>
            <Link to="/frameSet">FrameSet</Link>
          </li>
          <li>
            <Link to="/suspension">Suspension</Link>
          </li>
          <li>
            <Link to="/driveTrain">DriveTrain</Link>
          </li>
          <li>
            <Link to="/wheelSet">Wheelset</Link>
          </li>
          <li>
            <Link to="/cockpit">Cockpit</Link>
          </li>
          <li>
            <Link to="/brackSet">BrackSet</Link>
          </li>
        </ul>
      </Categories>
      <Contact>
        <h3>CONTACT</h3>
        <Address>
          <Location style={fontS} />
          <p>
            Address : CycleCircle, Shop No-9, Block -2,
            <br /> SDA Complex, Kasumpti Shimla,
            <br /> Himachal Pradesh 171009
          </p>
        </Address>
        <hr />
        <Phone>
          <Ph style={fontS} />
          <p>Phone: 883947882 / 900289492 </p>
        </Phone>
        <Email>
          <Mail style={fontS} />
          <p>Email: support@cyclecircle.one</p>
        </Email>
        <Social>
          <Link to="https://www.facebook.com/profile.php?id=100083101911813&_rdr" target="_blank"><Facebook style={fontSS} src="https://cdn-icons-png.flaticon.com/128/733/733547.png" /></Link>
          <Link to="https://www.google.com/cyclecircle" target="_blank"><Google src="https://cdn-icons-png.flaticon.com/128/2111/2111450.png" /></Link>
          <Link to="https://www.instagram.com/cyclecircle.one" target="_blank"><Instagram src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" /></Link>
          <Link to="https://www.youtube.com/cyclecircle" target="_blank"><Youtube src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" /></Link>
          <Link to="https://www.twitter.com/cyclecircle" target="_blank"><Twitter src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png" /></Link>
          

         
          
        </Social>
      </Contact>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 1.5rem 4rem;
  min-height: 40vh;
  background: #090b13;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    text-align: center;
  }
`;
const AboutUS = styled.div`
  min-width: 20vw;
  width: 25vw;
  h3{
    padding-right:1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
`;
const Payment = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  svg {
    font-size: 2rem;
    margin-right: 0.8rem;
    color: white;
  }
  @media (max-width: 768px) {
    justify-content:center;
    margin-top: 1rem;
    
  }
`;
const Secure = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    justify-content:center;
    font-size: 0.8rem;
    
  }
`;
const Informations = styled.div`
h3{
  padding: 0 1rem;
}
  ul {
    li {
      a {
        color: white;
        text-decoration: none;
      }
      margin-bottom: 10px;
      margin-left: -15px;
      &:hover {
        color: gray;
      }
      
    }
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 35px;
      list-style:none;
      text-align:start;
      font-size: 0.7rem;
      margin-left: -20px;
    }
  }
`;

const Categories = styled(Informations)`
h3{
  padding: 0 1rem;
}
  @media (max-width: 768px) {
    display: none;
  }
`;
const Contact = styled.div`
h3{
  padding: 0 1rem;
}
hr{
  width: 85%;
  margin-left:2.5rem;
}
@media (max-width: 768px) {
  hr{
    width: 95%;
    margin-left:0.8rem;
  }
}
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.8rem;
  }
  // border-bottom: 2px solid white;
  font-size: 0.9rem;
  margin-top: -15px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Location = styled(LocationOnIcon)`
color: #8c8b88;
  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }
`;
const Phone = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.8rem;
  }
  font-size: 0.9rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Ph = styled(PhoneIcon)`
color: #8c8b88;
  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }
`;
const Email = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.8rem;
  }
  font-size: 0.9rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Mail = styled(MailIcon)`
color: #8c8b88;
  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin-bottom: 1.3rem;
    justify-content: center;
  }
`;
const Facebook = styled.img`
  width: 2.2rem;
  height: 1.2rem;
  padding: 0px 8px;
  margin: 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease; /* Add a transition effect */

  &:hover {
    transform: scale(1.2); /* Increase size on hover */
  }
  @media (max-width: 768px) {
    margin:auto;
    
  }
`;
const Google = styled(Facebook)``;
const Instagram = styled(Facebook)``;
const Youtube = styled(Facebook)``;
const Twitter = styled(Facebook)``;

const fontS = {
  fontSize: "25",
};
const fontSS = {
  fontSize: "20",
};

