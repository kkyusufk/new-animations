import * as React from 'react';

export const container = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const card = {
  position: 'relative',
  width: 200,
  height: 300,
  border: '1px solid #c2c2c2',
};

const hueRotation = () => (
  <main>
    <div className="container" style={container}>
      <div className="card" style={card}>
        This is a card
      </div>
    </div>
  </main>
);

export default hueRotation;
