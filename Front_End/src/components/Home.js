import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Brands from './Brands';
import Navigation from "./Navigation/Navigation";
import Promises from './Promises';
import BrandSpotlight from './BrandSpotlight';
import Banner from './Banner';
function Home() {
  return (
    <>
    <div className="Home">
      <Header />
      <Navigation/>
      <Banner/>
      <Promises/>
      <BrandSpotlight/>
      <Brands/>
      <Footer />
    </div>
  </>
  );
}

export default Home;


