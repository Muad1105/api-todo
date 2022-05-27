// import { ActionBtnReducer } from './model';
import { Action, Change } from '../../../model';
import { TodoReducer } from './model';

import { CreatingListOfTodo, ManipulateTodoList, EditTodoItem } from './events';

const initialState: TodoReducer = {
    todoList: [],
};

export default (
    state: TodoReducer = initialState,
    action: Action
): TodoReducer => {
    switch (action.type) {
        case CreatingListOfTodo.USERS_LIST:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };

        case ManipulateTodoList.UPDATED_LIST: {
            console.log(state);

            const updatedTodo = state.todoList.filter((e: any, i: number) => {
                if (i != action.payload) {
                    return e;
                }
            });

            return {
                ...state,
                todoList: [...updatedTodo],
            };
        }

        case EditTodoItem.EDITED_LIST: {
            console.log(action.payload);

            const editedTodo = state.todoList.map((e: String, i: number) => {
                console.log(e, i, action.payload.i, action.payload.e);

                if (i == action.payload.i) return action.payload.e;
                else return e;
            });
            return {
                ...state,
                todoList: [...editedTodo],
            };
        }

        default:
            return state;
    }
};
