import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 123px 58px 123px;

    display: grid;
    grid-template-rows: 1fr fit-content;

    > main {
        overflow-y: auto;
    }

`;

export const ButtonDiv = styled.div`
    margin-top: 47px;
    display: grid;
    grid-template-columns: 1fr 207px;
    
    > h2 {
        font-size: 32px;
        line-height: 43px;

        color: white;
    }
`;