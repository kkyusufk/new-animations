import * as React from 'react';

export const container = {
  width: "100vw",
  height: "100vh",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const card = {
  width: 200,
  height: 300,
  border: "1px solid #c2c2c2"
}

let interval;

const colors = ['black', 'orange', 'blue', 'green', 'yellow']

const colorRotate = (elem, index) => {
  elem.target.style.background = colors[index]
  index++
    interval = setInterval(() => {
      elem.target.style.background = colors[index]
      index++
      if (index > colors.length - 1) index = 0;
    }, 500)
}

const hueRotation = () => (
    <main>
      <div className="container" style={container}>
        <div className="card" style={card} onMouseEnter={(elem) => colorRotate(elem, 0)} onMouseLeave={(e) => {
          clearInterval(interval)}}>
            This is a card
        </div>
        </div>
    </main>
);

export default hueRotation