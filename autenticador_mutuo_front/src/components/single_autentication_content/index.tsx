import { FormContainer, FormTitle, FormContent, InputForm, StyledIcon, AutenticationContainer, IconContainer } from './styles';
import React, { useState } from "react";
import Animation from '../string_bites_animation/bits_line';
import Single from '../../services/RunSingleAutentication';

const SingleAutentication: React.FC = () => {
    const [showAuthenticationResult, setShowAuthenticationResult] = useState(false);
    const [formResponse, setFormResponse] = useState("");

    const [service1Icon, setService1Icon] = useState("");
    const [service2Icon, setService2Icon] = useState("");

    const [service1Name, setService1Name] = useState("");
    const [service2Name, setService2Name] = useState("");

    const iconHacker = 'game-icons:hoodie';
    const iconService = 'carbon:cloud-service-management';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formResponse.trim()) {
            return;
        }

        try {
            setShowAuthenticationResult(false);
            setShowAuthenticationResult(true);// Reload animation
            const service = new Single();
            const response = await service.run(formResponse);


            // set ícones
            setService1Icon(response?.data?.service1_type === "Intruder" ? iconHacker : iconService);
            setService2Icon(response?.data?.service2_type === "Intruder" ? iconHacker : iconService);

            // set nomes vindos do backend
            setService1Name(response?.data?.service1 || "");
            setService2Name(response?.data?.service2 || "");

        } catch (error) {
            console.error("Authentication error:", error);
            setShowAuthenticationResult(false);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Message that will be used for authentication</FormTitle>
            <FormContent>
                <InputForm 
                    type="text" 
                    placeholder="Message" 
                    value={formResponse}
                    onChange={(e) => setFormResponse(e.target.value)}
                    required
                />
            </FormContent>
            <AutenticationContainer>
                {showAuthenticationResult && (
                    <IconContainer>
                        <StyledIcon icon={service1Icon} />
                        <h3>{service1Name}</h3>
                    </IconContainer>
                )}
                
                {showAuthenticationResult && (
                <Animation 
                    status={(service1Icon === iconService && service2Icon === iconService)? 'success': 'failure'} 
                />)}
                
                {showAuthenticationResult && (
                    <IconContainer>
                        <StyledIcon icon={service2Icon} />
                        <h3>{service2Name}</h3>
                    </IconContainer>
                )}
            </AutenticationContainer>
        </FormContainer>
    );
};

export default SingleAutentication;
