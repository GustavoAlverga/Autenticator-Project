import { FormContainer, FormTitle, FormContent, InputForm, StyledIcon, AutenticationContainer, AutenticationCel, IconContainer, SubmitButton } from './styles';
import React, { useState } from "react";
import Animation from '../string_bites_animation/bits_line';
import Auto from '../../services/RunAutoAutentication';

const AutoAutentication: React.FC = () => {
    const [stateConatiner, setStateConatiner] = useState(false);

    // estados do formulário
    const [numberOfServices, setNumberOfServices] = useState("");
    const [numberOfIntruders, setNumberOfIntruders] = useState("");
    const [message, setMsg] = useState("");
    const [validations, setValidations] = useState("");

    // lista de resultados do back
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [results, setResults] = useState<any[]>([]);

    const iconHacker = 'game-icons:hoodie';
    const iconService = 'carbon:cloud-service-management';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit here")

        if (!numberOfServices || !numberOfIntruders || !message || !validations) {
            return;
        }

        try {
            setStateConatiner(false);
            const service = new Auto();

            // monta o objeto esperado pelo back
            const payload = {
                number_of_services: parseInt(numberOfServices, 10),
                number_of_intruders: parseInt(numberOfIntruders, 10),
                message,
                validations: parseInt(validations, 10),
            };

            const response = await service.run(payload);

            const resultList = response?.data?.results || [];

            setResults(resultList);
            setStateConatiner(true); // mostrar resultados

        } catch (error) {
            console.error("Authentication error:", error);
            setStateConatiner(false);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Form to run auto authentications</FormTitle>
            <FormContent>
                <h3>Number of services to create</h3>
                <InputForm 
                    placeholder="ex: 10" 
                    value={numberOfServices}
                    onChange={(e) => setNumberOfServices(e.target.value)}
                    required
                />
                <h3>Number of intruders to create</h3>
                <InputForm 
                    placeholder="ex: 5" 
                    value={numberOfIntruders}
                    onChange={(e) => setNumberOfIntruders(e.target.value)}
                    required
                />
                <h3>Message to hash</h3>
                <InputForm 
                    type="text" 
                    placeholder="Message..." 
                    value={message}
                    onChange={(e) => setMsg(e.target.value)}
                    required
                />
                <h3>Number of validations</h3>
                <InputForm
                    placeholder="ex: 3" 
                    value={validations}
                    onChange={(e) => setValidations(e.target.value)}
                    required
                />
                <SubmitButton type="submit">Run Authentication</SubmitButton>
            </FormContent>

            <AutenticationContainer>
                {stateConatiner && results.map((res) => {
                    const service1Icon = res.service1_type === "Intruder" ? iconHacker : iconService;
                    const service2Icon = res.service2_type === "Intruder" ? iconHacker : iconService;

                    return (
                        <AutenticationCel>
                            <IconContainer>
                                <StyledIcon icon={service1Icon} />
                                <h3>{res.service1}</h3>
                            </IconContainer>

                            <Animation 
                                status={res.result ? "success" : "failure"} 
                            />

                            <IconContainer>
                                <StyledIcon icon={service2Icon} />
                                <h3>{res.service2}</h3>
                            </IconContainer>
                        </AutenticationCel>
                    );
                })}
            </AutenticationContainer>
        </FormContainer>
    );
};

export default AutoAutentication;
