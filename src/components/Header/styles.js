import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px 123px;
    display: flex;
    justify-content: space-between;
    gap: 64px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200 };

    > h1 {
        color: ${({ theme }) => theme.COLORS.VIOLET};
    }
`;