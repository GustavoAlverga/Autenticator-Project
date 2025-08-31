import styled from "styled-components";

export const ActionButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  width: auto;
  height: 40px;
  color: #ffffff;
  border: 1px solid #00ffcc;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 3rem;

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