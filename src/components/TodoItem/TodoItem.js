import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, updateTodo } from "../../redux/todoSlice";
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

function TodoItem({ id, title, completed, handleEdit }) {
    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({ id: id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }));
    };

    return (
        <TodoItemStyled>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCompleteClick}
            />
            <p>{title}</p>
            <Button onClick={() => handleEdit(id)}>
                <img src={EditIcon} alt="Edit" />
            </Button>
            <Button onClick={handleDeleteClick} delete>
                <img src={DeleteIcon} alt="Delete" />
            </Button>
        </TodoItemStyled>
    );
}

export default TodoItem;
