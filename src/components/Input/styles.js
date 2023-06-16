import styled from 'styled-components';

export const Container = styled.input`
    height: 56px;
    width: 100%;
    
    padding: 19px 24px;
    border-radius: 10px;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
`;