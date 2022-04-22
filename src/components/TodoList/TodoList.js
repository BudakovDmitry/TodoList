import styled from "styled-components";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const Todos = styled.ul`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding-left: 0;
    border: 1px solid #d3d3d3;
`;

const Text = styled.h3`
    text-align: center;
`;

function TodoList({ setTodo, handleEdit }) {
    const todos = useSelector((state) => state.todos);

    const todoItem =
        todos.length > 0 ? (
            todos.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        handleEdit={handleEdit}
                    />
                );
            })
        ) : (
            <Text>No todos...</Text>
        );

    return <Todos>{todoItem}</Todos>;
}

export default TodoList;
