import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/backSignIn.png'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 45% 55%;
  `;

export const Form = styled.form`
  place-self: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.VIOLET};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-block: 48px;
  }
`;

export const TextLink = styled(Link)`
  display: flex;
  justify-content: center;
  
  text-decoration: none;
  margin-top: 42px;

  color: ${({ theme}) => theme.COLORS.VIOLET};
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 24px;
`;
export const BackgroundImage = styled.div`
  background: url(${backgroundImg})no-repeat center center;
  background-size: cover;
  
`;
