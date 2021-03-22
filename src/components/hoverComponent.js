import React, { useRef } from 'react';

const links = ['home', 'about', 'contact', 'career', 'blog', 'work'];

const linksStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gridGap: '50px',
};

const childrenLink = {
  height: '100px',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

const random = {
  transition: 'opacity .3s ease',
  opacity: 0,
  position: 'fixed',
  top: 0,
  zIndex: -1,
  width: 100,
  height: 60,
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
};

const image = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const HoverComponent = ({ images }) => {
  const imageElement = useRef();
  const imageDivElement = useRef();
  // using state here causes side-effects
  let firstMouseEnter = true;

  const previewImages = () => {
    if (firstMouseEnter) {
      imageDivElement.current.style.opacity = 1;
      imageRotate(0);
      firstMouseEnter = false;
    }
  };

  const removePreview = () => {
    imageDivElement.current.style.opacity = 0;
    clearInterval(interval);
  };

  const moveImage = (event) => {
    if (event.target.className === 'links') {
      removePreview();
    } else {
      previewImages();
    }
    const X = event.clientX - 40;
    const Y = event.clientY - 20;
    imageElement.current.style.transform = `translate3d(${X}px, ${Y}px, 0px)`;
  };

  let interval;

  const imageRotate = (index) => {
    interval = setInterval(() => {
      imageElement.current.src = images[index];
      index++;
      // reset index back to zero once we reach end of array
      if (index > images.length - 1) index = 0;
    }, 300);
  };

  return (
    <main>
      <div
        className="links"
        style={linksStyle}
        onMouseMove={moveImage}
        onMouseOut={() => {
          firstMouseEnter = true;
          removePreview();
        }}
      >
        {links.map((link, key) => (
          <div style={childrenLink} key={key}>
            {link}
          </div>
        ))}
      </div>
      <div style={random} ref={imageDivElement}>
        <img ref={imageElement} style={image} src={images[0]} />
      </div>
    </main>
  );
};
