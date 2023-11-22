import React, {useEffect, useState} from 'react';
import {images} from './data/images';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Screen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const screen = setInterval(() => {
      setIndex((index + 1) % images.length);
      console.log('screenImage ' + index);
    }, 3000);

    return () => {
      clearInterval(screen);
    };
  }, [index]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="5000" className="screen-box">
      <img src={images[index]} alt="screen" />
    </div>
  );
}
