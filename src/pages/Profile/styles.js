import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  `;

export const Header = styled.header`
  padding-left: 144px;
  height: 144px; 
  display: flex;
  align-content: center;

  background-color: ${({ theme }) => theme.COLORS.VIOLET_LIGHT};
`;

export const Avatar = styled.div`
    position: relative;

    margin: -93px auto 64px;

  > img {
    width: 186px;
    border-radius: 50%;

  }

  > label {
    position: absolute;
    bottom: 0;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;

    background-color: ${({ theme}) => theme.COLORS.VIOLET};
    border-radius: 50%;

    > svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    }

    > input {
        display: none;
    }
  }
`;

export const Form = styled.form`
  width: 340px;
  margin: 0 auto;
  display: flex;

  gap: 8px;
  flex-direction: column;

  > div:nth-child(3) {
    margin-top: 16px;
  }

  > button {
    margin-top: 24px;
    font-weight: 500;
    color: ${({ theme}) => theme.COLORS.BACKGROUND_200};
  }
`;