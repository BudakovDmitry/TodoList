import styled from "styled-components";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = styled.ul`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
  padding-left: 0;
  border: 1px solid #d3d3d3;
`;

function Todos() {
  return (
    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>
  );
}

export default Todos;
