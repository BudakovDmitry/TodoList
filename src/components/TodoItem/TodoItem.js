import styled, { css } from "styled-components";
import EditIcon from "../../images/edit-icon.png";
import DeleteIcon from "../../images/delete-icon.png";

const TodoItemStyled = styled.li`
  width: 100%;
  height: 50px;
  list-style-type: none;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  :nth-child(odd) {
    background-color: #f5f5f5;
  }
  input {
    margin-left: 10px;
    margin-right: 20px;
  }
  p {
    margin-right: auto;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  margin-right: 20px;
  background-color: green;
  border: none;
  border-radius: 3px;
  text-align: center;

  img {
    width: 18px;
  }

  ${(props) =>
    props.delete &&
    css`
      background-color: red;
    `};
`;

function TodoItem() {
  return (
    <TodoItemStyled>
      <input type="checkbox" />
      <p>Test</p>
      <Button>
        <img src={EditIcon} alt="Edit" />
      </Button>
      <Button delete>
        <img src={DeleteIcon} alt="Delete" />
      </Button>
    </TodoItemStyled>
  );
}

export default TodoItem;
