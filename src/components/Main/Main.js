import styled from "styled-components";
import Todos from "../Todos/Todos";

const MainContainer = styled.main`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #808080;
  border-top: none;
  padding: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  margin: 20px auto;
  width: 90%;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #d3d3d3;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
`;

const Button = styled.button`
  width: 20%;
  height: 34px;
  text-align: center;
  background-color: #87cefa;
  color: #ffffff;
  border: none;
  border-radius: 0px 5px 5px 0px;
`;

function Main() {
  return (
    <MainContainer>
      <InputContainer>
        <Input placeholder="Enter todo here" />
        <Button>Submit</Button>
      </InputContainer>
      <Todos></Todos>
    </MainContainer>
  );
}

export default Main;
