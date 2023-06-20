import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    
    gap: 12px;
    border-radius: 10px;
    padding-inline: 12px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > input {
        height: 56px;
        width: 100%;
        border: none;
        outline: none;
        
        border-radius: 10px;
    
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
    
`;