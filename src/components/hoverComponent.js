import React, { useRef } from 'react';

const links = ['home', 'about', 'contact', 'career', 'blog', 'work']

const linksStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '50px'
  }

  const childrenLink = {
    height: '100px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }
  
  const random = {
    display: 'none',
    position: 'fixed',
    top: 0,
    zIndex: -1,
    width: 100,
    height: 60,
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d'
  }
  
  const image = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
  

export const HoverComponent = ({ images }) => {

    const imageElement = useRef();
    const imageDivElement = useRef();

    let firstMouseEnter = true;
  
  const previewImages = () => {
    imageDivElement.current.style.display = 'flex'
    if(firstMouseEnter) {
      imageRotate(0)
      firstMouseEnter = false;
    }
  }
  
  const removePreview = () => {
    imageDivElement.current.style.display = 'none'
    clearInterval(interval);
  }
  
  const moveImage = (event) => {
      if (event.target.className === "links") {
        removePreview()
      } else {
        previewImages()
      }
    const X = event.clientX - 40;
    const Y = event.clientY - 20;
    imageElement.current.style.transform = `translate3d(${X}px, ${Y}px, 0px)`
  }
  
  let interval;
  
  const imageRotate = (index) => {
    interval = setInterval(() => {
      imageElement.current.src = images[index];
      index++
      if (index > images.length - 1) index = 0;
    }, 500);
  }

    return (
        <main>
            <div 
                className="links" 
                style={linksStyle}
                onMouseEnter={previewImages}
                onMouseLeave={removePreview}
                onMouseMove={moveImage}
                onMouseOut={() => firstMouseEnter = true} 
                >
                { links.map((link, key) => <div style={childrenLink} key={key}>{link}</div> )}
            </div>
            <div style={random} ref={imageDivElement}>
                <img ref={imageElement} style={image} src={images[0]} />
            </div>
        </main>
    )
};

