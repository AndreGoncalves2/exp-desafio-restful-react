import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.VIOLET};

`;