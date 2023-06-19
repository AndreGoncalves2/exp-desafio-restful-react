import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 123px 58px 123px;

    > main {
        max-height: 100%;
        overflow-y: auto;
    }

`;

export const ButtonDiv = styled.div`
    height: fit-content; 
    margin-top: 47px;
    display: grid;
    grid-template-columns: 1fr 207px;
    margin-bottom: 40px;
    
    > h2 {
        font-size: 32px;
        line-height: 43px;
        
        color: white;
    }
`;