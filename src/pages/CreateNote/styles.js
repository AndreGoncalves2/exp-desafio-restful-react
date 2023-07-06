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
            min-height: 100px;
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

export const NewTags = styled.div`
    gap: 9px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    padding: 16px;
    border-radius: 8px;

`;

export const HighLighter = styled.div`

    > h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        
        margin-bottom: 24px;
    }
`;

export const Controls = styled.div`
    display: flex;
    gap: 40px;

    >.save {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    }

    >.delete {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.VIOLET};
    }
`;