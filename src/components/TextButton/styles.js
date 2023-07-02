import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.VIOLET};

`;