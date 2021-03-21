import * as React from 'react';
import { HoverComponent } from '../components/hoverComponent';
import example from '../images/example.jpg'
import icon from '../images/icon.png'

let images = [example, icon];

const hoverLinks = () => (  
  <HoverComponent images={images} />
)

export default hoverLinks;