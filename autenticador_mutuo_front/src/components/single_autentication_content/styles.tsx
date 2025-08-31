
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const StyledIcon = styled(Icon)`
  color: #ffffff;
  min-width: 24px;
  font-size: 3rem;
  transition: transform 0.5s ease-in-out;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 45%;
  padding: 20px;
  margin-top: 3rem;
  border: 1px solid #00ffcc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  z-index: 2;
`;

export const FormTitle = styled.h2`
  font-size: 1.32rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  h3 {
    text-align: center;
  }
`;

export const InputForm = styled.input`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #00ffcc;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  padding: 10px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: #00ffcc;
    box-shadow: 0 0 10px #00ffcc;
    background: rgba(0, 255, 204, 0.2);
  }
`;

export const AutenticationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

