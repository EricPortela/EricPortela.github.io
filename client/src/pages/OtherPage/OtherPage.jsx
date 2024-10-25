import React, { useState, useRef } from 'react';
import './OtherPage.scss';
import Menu from '../../components/general-components/Menu.jsx'
import { ImageGallery } from "react-image-grid-gallery"; 

const images = require.context('../../assets/photos', true);
const imageList = images.keys().map(image => images(image));

function OtherPage() {

  // Map over imported images to create an array of objects for ImageGallery
  const imagesArray = imageList.map((src, index) => ({
    src,
    loading: "lazy"
  }));

  console.log(imagesArray.length);

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
