const ADD_TODO = 'ADD-TODO';
const DELETE_TODO = 'DELETE-TODO';
const UPDATE_TODO = 'UPDATE-TODO';
const SET_VALUE_ID = 'SET-VALUE-ID';
const SHOW_LOADER = 'SHOW-LOADER';
const HIDE_LOADER = 'HIDE-LOADER';
const SHOW_ERROR = 'SHOW-ERROR';
const CLEAR_ERROR = 'CLEAR- ERROR';
const FETCH_TODOS = 'FETCH-TODOS';

export const initializeState = {
    todos: [],
    todoId: null,
    loading: false,
    error: null
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [{id: action.id, title: action.title}, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(td => td.id !== action.id)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(td => td.id === action.id ? {...td, title: action.title} : td)
            }
        case SET_VALUE_ID: {
            return {
                ...state,
                todoId: action.value
            }
        }
        case SHOW_LOADER: {
            return {
                ...state,
                loading: true
            }
        }
        case HIDE_LOADER: {
            return {
                ...state,
                loading: false
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case FETCH_TODOS: {
            return {
                ...state,
                todos: action.todos
            }
        }
    }
    return state
}

export const updateTodoAC = (id, title) => ({type: UPDATE_TODO, id, title})
export const deleteTodoAC = (id) => ({type: DELETE_TODO, id})
export const addTodoAC = (title, id) => ({type: ADD_TODO, title, id})
export const setValueIdAC = (value) => ({type: SET_VALUE_ID, value})
export const showLoaderAC = () => ({type: SHOW_LOADER})
export const hideLoaderAC = () => ({type: HIDE_LOADER})
export const showErrorAC = (error) => ({type: SHOW_ERROR, error})
export const clearErrorAC = () => ({type: HIDE_LOADER})
export const fetchTodosAC = (todos) => ({type: FETCH_TODOS, todos})