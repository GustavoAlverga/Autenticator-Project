import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white; 
  width: 100%;
  min-height: 100vh;
  position: relative; 
  background-color: transparent;
  z-index: 1;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 15%;
  left: 15%;
  color: #ffffff;
  min-width: 24px;
  font-size: 3rem;
  transition: transform 0.5s ease-in-out;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
  gap: 15px;
  z-index: 2;
`;

export const ActionButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  width: 200px;
  height: 40px;
  color: #ffffff;
  border: 1px solid #00ffcc;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 255, 204, 0.2);
    transform: scale(1.05);
    box-shadow: 0 0 10px #00ffcc;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 5px #00ffcc;
  }
`;