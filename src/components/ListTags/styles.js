import styled from 'styled-components';

export const Container = styled.ul`
    margin-top: 15px;
    list-style: none;

    display: flex;
    gap:8px;

    > li {
        padding: 5px 16px;
        font-size: 12px;
        border-radius: 8px; 
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
        
        button {
            background: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.WHITE_200};
        }
    }
`;