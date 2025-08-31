import React, { useState } from "react";
import ClearAll from '../../services/ClearAll';
import { ActionButton } from "./styles";

const ClearAllContant: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleClear = async () => {
    try {
      const service = new ClearAll();
      const response = await service.clear();

      if (response && response.data?.message) {
        setMessage(response.data.message);
      } else {
        setMessage("Erro ao limpar recursos.");
      }
    } catch (error) {
      console.error("Erro ao chamar ClearAll:", error);
      setMessage("Erro ao limpar recursos.");
    }
  };

  return (
    <>
      <ActionButton onClick={handleClear}>
        Clear All Services And Intruders
      </ActionButton>
      {message && <p>{message}</p>}
    </>
  );
};

export default ClearAllContant;
