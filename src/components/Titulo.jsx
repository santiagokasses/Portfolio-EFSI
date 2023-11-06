import React, { useEffect, useState } from 'react';

const Titulo = () => {
    const text = 'Proyectos de Santiago Kasses';
    const [displayText, setDisplayText] = useState('');
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
    useEffect(() => {
      const delay = 100;
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        setDisplayText((prevText) => {
          if (currentIndex < text.length) {
            return prevText + text[currentIndex];
          } else {
            clearInterval(interval);
            setIsAnimationComplete(true);
            return prevText;
          }
        });
        currentIndex++;
      }, delay);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='margenTopInicial'>
      {isAnimationComplete ? (
        <h1 className='tituloPrincipal'>{text}</h1>
      ) : (
        <h1 className='tituloPrincipal'>{displayText}</h1>
      )}
    </div>
  );
}

export default Titulo;
