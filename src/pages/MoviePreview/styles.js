import styled from 'styled-components';

export const Container = styled.div`
    padding-inline: 123px;
        
    > main {
        max-height: 580px;
        overflow-y: auto;

        > a {
            margin-top: 40px;
        }
        
        > .rating {
            margin-top: 24px;
            display: flex;
            gap: 20px;
            align-items: center;
            
            > h2 {
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-size: 36px;
                font-weight: 500;
            }
        }
        
        > .author-inf {
            margin: 24px 0 40px;
            display: flex;
            align-items: center;
            gap: 8px;
        
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 400;
        
            > img {
                width: 16px;
                border-radius: 50%;
            }
        
            > svg {
                color: ${({ theme }) => theme.COLORS.VIOLET};
            }
        }
        
        > p {
            margin-top: 40px;
            text-align: justify;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        .save {
            margin-top: 20px;
        }
    }
`; 