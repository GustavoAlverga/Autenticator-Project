import styled from 'styled-components';

export const NoteContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 15%;
    display: flex;
    justify-self: center;
    width: 75%;
    height: auto;
    flex-direction: column;
    border-radius: 8px;
    padding: 16px;
    background-color: #176d1b;
    z-index: 1000;
`;

export const NoteTitle = styled.h2`
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 8px;
`;

export const NoteContent = styled.p`
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.5;
`;

export const NoteActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;

    button {
        background: rgba(0, 0, 0, 0.7);
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

        &:hover {
            background: rgba(0, 255, 204, 0.2);
            transform: scale(1.05);
            box-shadow: 0 0 10px #00ffcc;
        }

        &:active {
            transform: scale(0.98);
            box-shadow: 0 0 5px #00ffcc;
        }
    }
`;