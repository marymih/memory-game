import { useRef, useEffect } from 'react';
import RegularButton from './RegularButton';

export default function GameOver({ handleClick }) {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
      <p className="p--large">You've matched all the memory cards!</p>
      <RegularButton handleClick={handleClick}>Play Again</RegularButton>
    </div>
  );
}
