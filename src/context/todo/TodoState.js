import React, {useReducer} from 'react';
import {TodoContext} from "./todoContext";
import {todoReducer} from './';

export const TodoState = ({children}) => {
    const initialState = {
        todos: [{id: '1', title: 'Learn to React Native'}]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{
            todos: state.todos
        }}>{children}</TodoContext.Provider>
    )
}