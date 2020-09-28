import styled from 'styled-components'; 

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button { 
    width: 156px;
    }
`;


export const Row = styled.div`
display: flex;
`;


export const Block = styled.div`
align-items: center;
border: solid 1px black;
cursor: pointer;
display: flex;
justify-content: center; 
font-size: 50px;
width: 50px;
height: 50px;
transition: 0.3s;

&:hover {
    background-color: lightgrey;
}

`;















