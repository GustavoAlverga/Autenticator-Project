import { useState } from 'react';
import { Container, StyledIcon, ButtonRow, ActionButton } from './app_styles/App_style';
import BackgroundInterativo from './components/backgorund/backgroundInterativo';
import Note from './components/note';
import ClearAll from './components/clear_all_content';
import Create from './components/create_new_service';
import SingleAutentication from './components/single_autentication_content';
import AutoContent from './components/auto_autentication_content';
import ResetStyles from './app_styles/reset_styles';


export default function App() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  type ActionType = "create" | "single" | "run" | "clear" | null;

  const [activeAction, setActiveAction] = useState<ActionType>(null);



  const handleCloseNote = () => {
    setIsNoteOpen(false);
  };

  return (
    <Container>
      <ResetStyles />
      <BackgroundInterativo />
      
      {/* Renderiza o Note apenas se isNoteOpen for true */}
      {isNoteOpen && (
        <Note 
          title="Important" 
          content="The script works as follows: In the automatic generation format, each entity has its own private key, 
          which is the SHA256 hash of the string 'private_key_{i}' where 'i' is its respective number, 
          and a list of known keys. Based on this, validation is done in the following way: 
          each of the parties hashes the same message with its private key (generated as explained above) and sends it to the other service for validation. 
          The other service, in turn, receives this hash of the message and checks its own keys by hashing the original message with each of its known keys. 
          If any of these hashes is equal to the message received from the unknown service, it recognizes the service and grants access. 
          In the case of Intruders, they know all the private keys of the services, but no one knows their private key, so the connection is denied. 
          Note: The script has problems; use it for educational purposes only." 
          onClose={handleCloseNote} 
        />
      )}

      {/* Botão para reabrir o popup (opcional) */}
      {!isNoteOpen && (
        <StyledIcon
        icon={'jam:alert-f'}
        onClick={() => setIsNoteOpen(true)}>
        </StyledIcon>
      )}

      <ButtonRow>
        <ActionButton onClick={() => setActiveAction("create")}>
          Create New Service
        </ActionButton>
        <ActionButton onClick={() => setActiveAction("single")}>
          Single Autentication
        </ActionButton>
        <ActionButton onClick={() => setActiveAction("run")}>
          Auto Autentication
        </ActionButton>
        <ActionButton onClick={() => setActiveAction("clear")}>
          Clear All Serveces
        </ActionButton>
      </ButtonRow>

      {activeAction === "create" && <Create />}
      {activeAction === "single" && <SingleAutentication />}
      {activeAction === "run" && <AutoContent />}
      {activeAction === "clear" && <ClearAll />}
    </Container>
  );
}