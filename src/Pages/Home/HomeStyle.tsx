import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
`;
export const CalculatorBx = styled.div`
  width: 260px;
  box-shadow: 1px 10px 7px #525252;
`;

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  text-align: end;
  padding: 0px 20px;
  font-size: 20px;
  outline: none;
`;

export const Row = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 65px;
  height: 60px;
  background: #22252d;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #1b1f26;
  }
`;

export const EqualBtn = styled.button`
  width: 130px;
  height: 60px;
  background: #22252d;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 20px;
  &:hover {
    background: #1b1f26;
  }
`;
