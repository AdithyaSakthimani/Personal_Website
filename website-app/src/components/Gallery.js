import React, { useState } from 'react';
import Img3 from './images/GettyImages-526245433.jpg';
import Img2 from './images/badminton_smash_tips_tricks-1024x664.jpg';
import Img1 from './images/dgt-electronic-plastic-chess-pieces.jpg';
import './GalStyle.css' ;
import frwd from './images/arrow_forward_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import bwkd from './images/arrow_back_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
function Gallery() {
  const [cnt, setCnt] = useState(0);

  const images = [Img1, Img2, Img3];

  const IncCnt = () => {
    setCnt((prev) => {
      return prev + 1 === images.length ? 0 : prev + 1; 
    });
  };

  const DecCnt = () => {
    setCnt((prev) => {
      if (prev === 0) {
        return images.length - 1; 
      }
      return prev - 1;
    });
  };

  const RenderImg = () => {
    return <img src={images[cnt]} alt="Gallery" className='img-style'/>;
  };

  return (
    <div className='hobby-gal'>
      <h1>MY HOBBIES</h1>
      <div className="images">
        <img src={bwkd}  onClick={DecCnt}className='bwk'/>
        {RenderImg()}
            <img src={frwd} onClick={IncCnt} className='frw'/>
      </div>
    </div>
  );
}

export default Gallery;
