import React, { useState, useRef } from 'react';
import './OtherPage.scss';
import Menu from '../../components/general-components/Menu.jsx'
import { ImageGallery } from "react-image-grid-gallery"; 
import fondDataMockup from '../../assets/fonddata-mockup.svg'; // Import image directly

// Use require.context to import all images from the gallery folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../../assets/photos', false, /\.(png|jpe?g|svg|HEIC|heic)$/));

function OtherPage() {

  // Map over imported images to create an array of objects for ImageGallery
  const imagesArray = images.map((src, index) => ({
    src,
  }));

  return (
    <div className="OtherPage">
      <Menu />
      <p className='subtitle'>
        During my spare-time I try to enjoy quality time with friends and family.
        One of my favorite things to do so, is by travelling and experiencing new cultures and places.
        Although I'm not by any means measured a professional photographer, I really like documenting and taking photos.
        <br></br>
        <br></br>
        I have had the opportunity to visit quite a few countries, mostly in Europe, Asia and North America.
        Here are some of my selected photos 😄
      </p>
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnCount={"auto"}
        columnWidth={300}
        gapSize={24}
      />
    </div>
  );
}

export default OtherPage;
