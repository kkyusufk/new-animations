import * as React from 'react';
import icon from '../images/example.jpg'

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
  alignItems: 'center'
}

const random = {
  display: 'none',
  position: 'absolute',
  top: 0,
  width: 60,
  height: 40,
  border: '1px solid black'
}

const image = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

const previewImages = (elem) => {
  const random = document.getElementById("random");
  random.style.willChange = 'display, transform'
  random.style.display = 'block'
}

const removePreview = (elem) => {
  const random = document.getElementById("random");
  random.style.willChange = 'auto'
  random.style.display = 'none'
}

const moveImage = (event) => {
  const random = document.getElementById("random");
  const X = event.clientX;
  const Y = event.clientY;
  random.style.transform = `translate(${X}px, ${Y}px)`
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
          >
            {link}
        </div>
        )
      }
    </div>
    <div id="random" style={random}>
      <img src={icon} style={image} />
    </div>
  </main>
)

export default hoverLinks;