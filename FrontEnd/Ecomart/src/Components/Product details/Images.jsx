import React, { useEffect, useState } from 'react';

function Images({ items }) {
  const [img, setImg] = useState();

  useEffect(() => {
    setImg(items.image);
  }, [items.image]);

  function setLink(imgLink) {
    setImg(imgLink);
  }

  return (
    <React.Fragment>
      <div>
        <img src={img} className='d-block h-200 w-100' alt='Main Image' />
      </div>
      <div className='imageparent'>
        <Slider imgData={items} setLink={setLink} />
      </div>
    </React.Fragment>
  );
}

export default Images;

// Slider.js

const Slider = ({ imgData, setLink }) => {

  return (
    <React.Fragment>
      <img src={imgData.img1} onClick={() => setLink(imgData.img1)} className='imagechild ' alt='Image 1' />
      <img src={imgData.img2} onClick={() => setLink(imgData.img2)} className='imagechild' alt='Image 2' />
      <img src={imgData.img3} onClick={() => setLink(imgData.img3)} className='imagechild' alt='Image 3' />
    </React.Fragment>
  );
};
