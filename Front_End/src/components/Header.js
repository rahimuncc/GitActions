import React, { useState } from 'react';
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import axios from 'axios';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/search", {
            search: searchTerm,
          });
          console.log(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <HeaderDiv>
      <BurgerDiv>
        <MenuIconWrapper>
          <MenuIconStyled style={fontB} />
        </MenuIconWrapper>
        <Link to="/"><Logo src="/images/CC_lgg.png" /></Link>
      </BurgerDiv>
      <SearchWrap>
        <SearchInput>
          <SIcon style={fontS} onClick={handleSearch} />
          <input
            placeholder="Search From Over 3000+ Parts, Accessories, Clothing & Featured Product "
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
          <UserDetail>
            <UserImg src="https://media.licdn.com/dms/image/D4E03AQGJmddfZULv9g/profile-displayphoto-shrink_400_400/0/1686810989679?e=1697068800&v=beta&t=J6ysNHxkiwrzmrypyXJ7racsYTO7b_ryg1f1nRZ8tN0" />
            {/* <UserName>SignIn/SignUp</UserName> */}
            <UserName>Majaz Haque</UserName>
          </UserDetail>
          <CartDetail>
            <FavoriteIcon style={fontS} />
            <CartDiv>
              <CartIcon style={fontS} />
              <sup>0</sup>
            </CartDiv>
          </CartDetail>
      </SearchWrap>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.nav`
position:sticky;
top: 0;
z-index: 999;
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 105px;
    padding: 0.5rem 1rem;
    flex-direction: column;
    align-items: start;
  }
`;
const BurgerDiv = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: start;
  margin-top: 0.2rem;
  a{
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const MenuIconWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIconStyled = styled(MenuIcon)`
  margin-right: 1rem;
`;

const Logo = styled.img`
  width: 100%;
  height: 3rem;
  margin-bottom: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5px;
    height: 2.4rem;
  }
`;
const SearchWrap = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const SearchInput = styled.div`
  width: 50vw;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 1.5rem;

  input {
    width: 100%;
    height: 2.5rem;
    background: white;
    color: gray;
    border: 2px solid black;
    border-radius: 4px;
    padding: 0 5px 0 2.5rem;
    text-align: start;
    font-size: 1.1rem;
    outline: none; /* Remove the default outline */
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #0074e4; /* Change border color on focus */
    }
  }
  @media (max-width: 768px) {
    width: 95vw;
    input {
      height: 2.6rem;
    }
  }
`;
const UserDetail = styled.div`
  position: relative; /* Add relative positioning */
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    position: static;
    display:none;
  }
`;
const UserImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;
const UserName = styled.span`
  margin-left: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SIcon = styled(SearchIcon)`
  position: absolute;
  margin-left: 15px;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const CartDetail = styled.div`
  width: 10vw;
  max-width: 12vw;
  display: flex;
  align-items: center;
  margin-left: 3.5rem;
  padding-bottom: 0.5rem;
  justify-content: space-between;
  //   margin: 0 10px;
  @media (max-width: 768px) {
    width: 25vw;
    max-width: 30vw;
    justify-content: space-between;
    margin-top: -10vh;
    margin-left: -30vw;
  }
`;

const FavoriteIcon = styled(FavoriteBorderIcon)`
  //   margin: 0 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    // margin-left: -2rem;
  }
`;

const CartDiv = styled.div`
  //   margin: 0 2rem;
  display: flex;
  align-items: center;

  sup {
    margin-bottom: 20px;
    font-size: 18px;
  }

  cursor: pointer;
`;

const CartIcon = styled(ShoppingCartIcon)``;

const fontS = {
  fontSize: "30",
};
const fontB = {
  fontSize: "40",
};
