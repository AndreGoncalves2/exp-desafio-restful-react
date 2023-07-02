import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 9px;
    align-items: center;

    > img {
        height: 64px;
        width: 64px;

        border-radius: 50%;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200 };
        cursor: pointer;
    }

    > div {
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 14px;
            font-weight: 700;
            white-space: nowrap;

            color: ${({ theme }) => theme.COLORS.WHITE};
            cursor: pointer;
        }

        button {
            background: none;
            border: none;
            
            align-self: end;

            font-size: 14px;
            line-height: 18px;

            cursor: pointer;

            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

`;