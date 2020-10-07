import styled, { css } from 'styled-components'; 

export const Block = styled.div`
  ${({ theme }) => css`
     align-items: center;
     border: solid 1px ${theme.colors.black};
     cursor: pointer;
     display: flex;
     height: 70px;
     justify-content: center; 
     font-size: 50px;
     transition: ${ theme.transition};
     width: 70px;     
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
  `}  
  h3{
    font-size:38px;
  }
`;

export const Grid = styled.div<{marking: boolean}>`
  ${({ marking, theme }) => css`
    border: solid 1px ${theme.colors.black};
    margin-bottom: 30px;  
    
    & > div > div {
        background-color: ${marking ? theme.colors.lightgrey : theme.colors.white};

        &:hover {
            background-color: ${marking ? theme.colors.lightgrey : theme.colors.lightblue};
        }
    }
  `}

`

export const Row = styled.div`
${({ theme }) => css`
display: flex;
`}
`;



