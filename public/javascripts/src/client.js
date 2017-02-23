
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel'

const props = {
  images: [
    {src: "https://unsplash.it/600/300?random", alt: "the image of something something" },
    {src: "https://unsplash.it/600/300", alt: "the image of something2 something" },
    {src: "https://unsplash.it/600/300?blur", alt: "the image of something3 something" },
  ],
}

ReactDOM.render(
  <Carousel {...props} />,
  document.getElementById('root')
);
