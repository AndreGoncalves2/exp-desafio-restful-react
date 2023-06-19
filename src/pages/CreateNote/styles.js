import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    height: 100vh;
    padding: 0 123px;

    > main {
        margin-top: 40px;
        overflow-y: auto;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        gap: 40px;

        > h1 {
            font-size: 36px;
            font-weight: 500;
            color: ${({ theme}) => theme.COLORS.WHITE};
        }

        > textarea {
            height: 275px;
            width: 100%;
    
            padding: 19px 16px;
    
            resize: none;
            outline: none;
    
            background-color: ${({ theme}) => theme.COLORS.BACKGROUND_100};
            border: none;
            border-radius: 10px;
    
            color: ${({ theme }) => theme.COLORS.WHITE};
    
            &::placeholder {
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }
    }
`;

export const NoteHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
`;