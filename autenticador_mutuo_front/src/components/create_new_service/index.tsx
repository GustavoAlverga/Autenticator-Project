import { FormContainer, FormTitle, FormContent, InputForm } from './styles';
import React, { useState } from "react";
import CreateService from '../../services/CreateService';

const CreateServiceContent: React.FC = () => {
    const [message, setMessage] = useState("");
    const [serviceName, setServiceName] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!serviceName) return;

        try {
            const service = new CreateService();
            const response = await service.create(serviceName);
            setMessage(response?.data?.message || "Service created successfully");
        } catch (error) {
            setMessage("Erro ao criar serviço");
            console.error(error);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle></FormTitle>
            <FormContent>
                <h1>Name for new Service</h1>
                <InputForm 
                    type="text" 
                    placeholder="Name..." 
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                />
                {message && <p>{message}</p>}
            </FormContent>
        </FormContainer>
    );
};

export default CreateServiceContent;