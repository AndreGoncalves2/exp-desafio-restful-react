import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 37px;
    padding: 32px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.VIOLET_LIGHT};

    > h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg {
        margin-top: 8px;
        color: ${({ theme }) => theme.COLORS.VIOLET};
    }

    > p {
        margin-top: 10px;

        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

`;

