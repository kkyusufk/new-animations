import * as React from 'react';
import example from '../images/example.jpg'
import icon from '../images/icon.png'

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

let firstMouseEnter = true;

const previewImages = (elem) => {
  console.log(elem)
  const random = document.getElementById("random");
  random.style.willChange = 'opacity, transform'
  random.style.display = 'flex'
  if(firstMouseEnter) {
    imageRotate(document.getElementById("randomImg"), 0)
    firstMouseEnter = false;
  }
}

const removePreview = (elem) => {
  const random = document.getElementById("random");
  random.style.willChange = 'auto'
  random.style.display = 'none'
  clearInterval(interval);
}

const moveImage = (event) => {
  const random = document.getElementById("randomImg");
  const X = event.clientX - 40;
  const Y = event.clientY - 20;
  random.style.transform = `translate3d(${X}px, ${Y}px, 0px)`
}

let interval;

const imageRotate = (random, index) => {
  let images = [example, icon];
  interval = setInterval(() => {
    random.src = images[index];
    index++
    if (index > images.length - 1) index = 0;
  }, 500);
}

const hoverLinks = () => (  
  <main>
    <div className="links" style={linksStyle}>
      {links.map((link, key) => 
        <div 
          key={key} 
          style={childrenLink}
          onMouseEnter={previewImages}
          onMouseLeave={removePreview}
          onMouseMove={moveImage}
          onMouseOut={() => firstMouseEnter = true}
          >
            {link}
        </div>
        )
      }
    </div>
    <div id="random" style={random}>
      <img id="randomImg" src={example} style={image} />
    </div>
  </main>
)

export default hoverLinks;