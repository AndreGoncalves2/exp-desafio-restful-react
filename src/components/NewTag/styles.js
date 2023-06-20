import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 10px;
  padding-right: 16px;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_100};
  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};

  > input {
    height: 56px;
    width: 100%;
    
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    
    border: none;
    outline: none;
    text-align: center;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

  }

  > button {
    background: transparent;
    border: none;
  }

  > button svg {
    width: 22px;
    height: 24px;

    color: ${({ theme }) => theme.COLORS.VIOLET};
  }
  `;

  