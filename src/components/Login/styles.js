import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 50px 0pc 0px;
  background-color: #fff;
  border: 1px solid #000;
  border-bottom: 0px;

  @media (max-width: 580px) {
    margin: auto 20px;
    width: 90vw;
  }
`;

export const Form = styled.form`
  padding: 20px 0px 0px;
`;

export const Input = styled.input`
  padding: 10px 10px;
  margin: 10px auto;
  width: 60%;

  display: flex;
  flex-direction: column;
  background-color: unset;
  border: 1px solid #d9d9d9;
  border-radius: 0%;
  text-align: center;
`;

export const LogInButton = styled.button`
  padding: 30px 200px;
  margin-top: 25px;
  width: 100%;
  background-color: ${({ $newRegister }) =>
    $newRegister ? "#306764" : "#4e6730"};
  border: 3px solid #4e6730;
  color: #b9caa6;
  font-family: "ITC Garamond Std";
  /* padding: 10px 50px; */
  outline: 0px;
  border: 0px;
  font-size: 22px;

  @media (max-width: 580px) {
    padding: 20px;
  }
`;
