import styled from 'styled-components';

export const Body = styled.body`
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4c8bf5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3c78e5;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
