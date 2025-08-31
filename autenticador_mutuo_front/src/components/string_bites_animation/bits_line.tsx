import React, { useState, useEffect } from 'react';
import './styles.css';

interface BitAnimationProps {
  status?: 'success' | 'failure' | null; // Prop para receber o status externamente
  onAnimationComplete?: () => void; // Callback quando a animação terminar
}

const BitAnimation: React.FC<BitAnimationProps> = ({ 
  status = null, 
  onAnimationComplete 
}) => {
  const [leftBits, setLeftBits] = useState<string[]>([]);
  const [rightBits, setRightBits] = useState<string[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Gerar bits aleatórios
  const generateRandomBit = (): string => {
    return Math.random() > 0.5 ? '1' : '0';
  };

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftBits(prev => [...prev, generateRandomBit()].slice(-10));
    }, 300);

    const rightInterval = setInterval(() => {
      setRightBits(prev => [...prev, generateRandomBit()].slice(-10));
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
      setAnimationComplete(true);
      onAnimationComplete?.(); // Chama o callback quando a animação terminar
    }, 3000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
      clearTimeout(timeout);
    };
  }, [onAnimationComplete]);

  return (
    <div className="bit-animation-container">
      <div className="bit-stream">
        <div className="left-bits">
          {leftBits.map((bit, index) => (
            <span key={`left-${index}`} className="bit">{bit}</span>
          ))}
        </div>
        
        <div className={`center-container ${animationComplete ? 'show-result' : ''}`}>
          {status === 'success' && (
            <div className="authentication-message success">Authentication Success!</div>
          )}
          {status === 'failure' && (
            <div className="authentication-message failure">Authentication Failure!</div>
          )}
        </div>
        
        <div className="right-bits">
          {rightBits.map((bit, index) => (
            <span key={`right-${index}`} className="bit">{bit}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BitAnimation;