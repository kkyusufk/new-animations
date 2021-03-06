import React, { useEffect, useRef } from 'react';

const paragraph1 = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  fontWeight: 'lighter',
  width: '100%',
  fontSize: '40px',
  padding: 0,
  margin: 0,
};

const animatingDiv = {
  minHeight: '80vh',
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return rect.top <= window.innerHeight && rect.bottom >= 0.0;
}

export const ScrollComponent = () => {
  const animatingDivElement = useRef();
  const animatingPara = useRef();
  let Y = 0;
  let lastScrollPos = 0;

  typeof window !== `undefined` && window.addEventListener('scroll', () => {
    if (!isElementInViewport(animatingDivElement.current)) {
      const { style } = animatingPara.current;
      if (document.body.getBoundingClientRect().top > lastScrollPos) {
        style.transform = `translate(267px)`;
        Y = 267;
      } else {
        style.transform = `translate(0px)`;
        Y = 0;
      }
      lastScrollPos = document.body.getBoundingClientRect().top;
    }
  });

  useEffect(() => {
    let prevRatio = 0.0;
    let prevY = 0;

    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 50;

      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }

      thresholds.push(0);
      return thresholds;
    }
    // configure the intersection observer instance
    const intersectionObserverOptions = {
      root: null, // default is the viewport
      rootMargin: '0px',
      threshold: buildThresholdList(), // percentage of the target visible area which will trigger "onIntersection"
    };

    const observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);

    // called when target is fully visible
    function onIntersection(entries, opts) {
      const { style } = animatingPara.current;
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        const maxScrollHeight = entry.target.clientHeight - animatingPara.current.clientHeight;
        if (entry.intersectionRatio > prevRatio) {
          // this will prevent the para to go out of the parent div.
          if (Y <= maxScrollHeight && Y >= 0) {
            if (currentY < prevY) {
              style.transform = `translateY(${Y}px)`;
              Y += 50;
              if (Y > maxScrollHeight) Y = maxScrollHeight;
            } else {
              style.transform = `translateY(${Y}px)`;
              Y -= 50;
              if (Y < 0) Y = 0;
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
          lorAliqua dolor pariatur consequat ad irure reprehenderit aliqua consectetur. Ea nulla ullamco cillum sint
          adipisicing est reprehenderit sint incididunt eu mollit ullamco. Est duis minim qui laboris enim eiusmod. Sunt
          in qui cupidatat cupidatat ex labore reprehenderit incididunt tempor quis laboris. Aliquip qui irure enim et
          cillum.
        </p>
        <p style={paragraph1}>
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
        <p style={paragraph1}>
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
        <p style={paragraph1} className="starting-animation">
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
        <div id="animating-div" style={animatingDiv} ref={animatingDivElement}>
          <p style={paragraph1} id="animating-para" ref={animatingPara}>
            <i>
              Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation
              ex veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris
              reprehenderit consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia
              consectetur consectetur et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident
              cillum incididunt laborum.
            </i>
          </p>
        </div>
        <p style={paragraph1}>
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
        <p style={paragraph1}>
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
        <p style={paragraph1}>
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
        <p style={paragraph1}>
          Nulla dolor reprehenderit magna qui esse duis culpa consequat cillum do esse deserunt aute. Exercitation ex
          veniam cillum enim non aliquip cupidatat dolor consequat magna id. Adipisicing laborum laboris reprehenderit
          consequat duis dolore cupidatat eu. Laboris in minim amet ut dolore duis duis officia consectetur consectetur
          et cillum. Dolore est sit labore enim. Velit sint aliquip amet nisi non proident cillum incididunt laborum.
        </p>
      </div>
    </>
  );
};
