const ADD_TODO = 'ADD-TODO';
const DELETE_TODO = 'DELETE-TODO';
const UPDATE_TODO = 'UPDATE-TODO';
const SET_VALUE_ID = 'SET-VALUE-ID';

export const initializeState = {
    todo: [{id: '1', title: 'TV-sell'}],
    todoId: null
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [{
                    id: Date.now().toString(),
                    title: action.title
                },
                    ...state.todo
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(td => td.id !== action.id)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todo: state.todo.map(td => td.id === action.id ? {...td, title: action.title} : td)
            }
        case SET_VALUE_ID: {
            return {
                ...state,
                todoId: action.value
            }
        }
    }
    return state
}

export const updateTodoAC = (id, title) => ({type: UPDATE_TODO, id, title})
export const deleteTodoAC = (id) => ({type: DELETE_TODO, id})
export const addTodoAC = (title) => ({type: ADD_TODO, title})
export const setValueId = (value) => ({type: SET_VALUE_ID, value})
