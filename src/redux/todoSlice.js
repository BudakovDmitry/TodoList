import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo } =
    todoSlice.actions;

export default todoSlice.reducer;
