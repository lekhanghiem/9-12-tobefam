"use client";
import { useEffect, useRef } from 'react';

const App = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const customEventListener = (ev:any) => {
      handleScrollToTop();
    };

    window.addEventListener("scrolltotop", customEventListener);

    const buttons = document.querySelectorAll('.scroll-to-top-button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const event = new CustomEvent('scrolltotop');
        window.dispatchEvent(event);
      });
    });

    return () => {
      window.removeEventListener("scrolltotop", customEventListener);
      buttons.forEach(button => {
        button.removeEventListener('click', () => {
          const event = new CustomEvent('scrolltotop');
          window.dispatchEvent(event);
        });
      });
    };
  }, []);

  return (
    <div>
        <div className="scroll-to-top-button" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="circle size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>

        </div>
      </div>
  );
};

export default App;
