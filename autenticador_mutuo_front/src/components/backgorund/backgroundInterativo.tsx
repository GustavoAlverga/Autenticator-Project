import { useEffect } from "react";
import "./backgroundInterativo.css";
import { iniciarMatrix } from './matrix';

export default function BackgroundInterativo() {
  useEffect(() => {
    iniciarMatrix();
  }, []);

  return <canvas id="matrixCanvas"></canvas>;
}