import React from 'react';
import { NoteContainer, NoteContent, NoteActions, NoteTitle }  from './styles';

interface NoteProps {
    title: string;
    content: string;
    onClose: () => void;
}

const Note: React.FC<NoteProps> = ({ title, content, onClose }) => {
    return (
        <NoteContainer>
            <NoteTitle>
                <h3>{title}</h3>
            </NoteTitle>
            <NoteContent>
                <p>{content}</p>
            </NoteContent>
            <NoteActions>
                <button onClick={onClose}>Close</button>
            </NoteActions>
        </NoteContainer>
    );
};

export default Note;