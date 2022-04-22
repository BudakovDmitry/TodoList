import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../redux/todoSlice";

import TodoList from "../TodoList/TodoList";

const MainContainer = styled.main`
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #808080;
    border-top: none;
    padding: 5px;
`;

const Form = styled.form`
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
    const todos = useSelector((state) => state.todos);
    const [todo, setTodo] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();

    const onChange = (event) => {
        setTodo(event.target.value);
    };

    const onUpdate = () => {
        dispatch(
            updateTodo({
                title: todo,
            })
        );
        setIsEdit(false);
    };

    const handleEdit = (id) => {
        const selectedItem = todos.find((item) => item.id === id);
        console.log(selectedItem);
        setIsEdit(true);
        setTodo(selectedItem.title);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addTodo({
                title: todo,
            })
        );
        setTodo("");
    };

    return (
        <MainContainer>
            <Form onSubmit={onSubmit}>
                <Input
                    placeholder="Enter todo here"
                    type="text"
                    value={todo}
                    onChange={onChange}
                />
                {isEdit ? (
                    <Button onClick={onUpdate}>Update todo</Button>
                ) : (
                    <Button type="submit">Add todo</Button>
                )}
            </Form>
            <TodoList handleEdit={handleEdit} />
        </MainContainer>
    );
}

export default Main;
