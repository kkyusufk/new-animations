import React, { useEffect, useRef } from 'react';

const paragraph1 = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  fontWeight: 'lighter',
  width: '100%',
  fontSize: '40px',
  padding: 0,
  margin: 0
}

const animatingDiv = {
  minHeight: '80vh'
}

const getScrollDirection = () => {
  let scrollPos = 0;
  let direction = 'DOWN';
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		direction = 'UP';
	else
		direction = 'DOWN';
	// saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top;
  return direction;
}

export const ScrollComponent = () => {

  const animatingDivElement = useRef();
  const animatingPara = useRef()

  useEffect(() => {
    let prevRatio = 0.0;
    let prevY = 0;
    let Y = 0;
    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 50;
    
      for (let i=1.0; i<=numSteps; i++) {
        let ratio = i/numSteps;
        thresholds.push(ratio);
      }
    
      thresholds.push(0);
      return thresholds;
    }
    // configure the intersection observer instance
    const intersectionObserverOptions = {
      root: null, // default is the viewport
      rootMargin: "0px",
      threshold: buildThresholdList(), // percentage of the target visible area which will trigger "onIntersection"
    };

    const observer = new IntersectionObserver(
      onIntersection,
      intersectionObserverOptions
    );

    // called when target is fully visible
    function onIntersection(entries, opts) {
      const { style } = animatingPara.current;
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        console.log(currentY, prevY, Y)
        if (entry.intersectionRatio > prevRatio) {
          // this if will prevent the para to go out of the parent div.
          if (Y < (entry.target.clientHeight - animatingPara.current.clientHeight) && Y >= 0) {
            if (currentY < prevY) {
              console.log('down');
              style.transform = `translateY(${Y}px)`;
              Y += 30;
            } else if (currentY > prevY) {
              console.log('up');
              style.transform = `translateY(${Y}px)`;
              Y -= 30;
            }
          }
        }
        prevY = currentY;
        prevRatio = entry.intersectionRatio;
      });
    }

    // provide the observer with a target
    observer.observe(animatingDivElement.current);

    return function cleanUp() {
      observer.unobserve(animatingDivElement.current);
    };
  });

  return (
    <>
      <div className="container">
            <p style={paragraph1}>
                lorAliqua dolor pariatur consequat ad irure reprehenderit aliqua consectetur. Ea nulla ullamco cillum sint adipisicing est reprehenderit sint incididunt eu mollit ullamco. Est duis minim qui laboris enim eiusmod. Sunt in qui cupidatat cupidatat ex labore reprehenderit incididunt tempor quis laboris. Aliquip qui irure enim et cillum.
            </p>
            <p style={paragraph1}>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
            <p style={paragraph1}>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
            <p style={paragraph1} className="starting-animation">
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
            <div id="animating-div" style={animatingDiv} ref={animatingDivElement}>
            <p style={paragraph1} id="animating-para" ref={animatingPara}>
              <i>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
                </i>
            </p>
            </div>
            <p style={paragraph1}>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
            <p style={paragraph1}>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
            <p style={paragraph1}>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
            <p style={paragraph1}>
                Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
            </p>
        </div>
    </>
  )
}