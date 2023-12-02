import React, { useState, useMemo, useCallback } from 'react';
import './App.css';
const ColorGenerator = () => {

  const generateRandomColor = useCallback(() => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
  }, []);


  const memoizedGenerateColor = useMemo(() => generateRandomColor, [generateRandomColor]);

  const [currentColor, setCurrentColor] = useState(memoizedGenerateColor());

  const handleButtonClick = () => {

    setCurrentColor(memoizedGenerateColor());
  };

  return (
      <div>

        <button onClick={handleButtonClick}>Нажми на меня</button>
          <h1 style={{ color: currentColor }}>Рандомный цвет текста</h1>
      </div>
  );
};

export default ColorGenerator;
