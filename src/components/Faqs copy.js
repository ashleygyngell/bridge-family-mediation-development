import React from 'react';
import { Link } from 'react-router-dom';

const details = document.querySelectorAll('details');

for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', accordion);
}

function accordion() {
  // Close any other accordion element except clicked one.
  for (let i = 0; i < details.length; i++) {
    if (details[i].open) {
      if (this !== details[i].open) {
        details[i].open = false;
      }
    }
  }
}

const FaqGrid = () => {
  return (
    <>
      <div className="content ">
        <p className="title ">FAQ&#39;s</p>
        <body id="links-text">
          <section className="simple-accordion">
            <div>
              <details>
                <summary>Is mediation legally binding?</summary>
                <p>Lorem ipsum dolor sit amet.</p>
              </details>
            </div>
            <details>
              <summary>Is mediation mandatory?</summary>
              <p>Consectetur adipiscing elit.</p>
            </details>
            <details>
              <summary>
                Am I entitled to 50% of my partner&#39;s assets?
              </summary>
              <p>Excepteur sint occaecat cupidatat non proident.</p>
            </details>
          </section>
        </body>
      </div>
    </>
  );
};

export default FaqGrid;
