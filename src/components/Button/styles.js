import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    
    width: 100%;
    padding: 13.5px 0;

    border: none;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.VIOLET};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    
    font-size: 16px;
    line-height: 20px;

    cursor: pointer;

    > svg {
        color: black;
    }
`;