import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ExampleHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #1488cc;
  color: #fff;
`;

export const Logo = styled.span`
   {
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
  }
`;

export const ExampleContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    display: inline-block;
    width: 150px;
    height: auto;
  }
`;
