import { Action, Change, Edit } from '../../../model';
import { CreatingListOfTodo, ManipulateTodoList, EditTodoItem } from './events';

export const createUserList = (value: string): Action => ({
    type: CreatingListOfTodo.USERS_LIST,
    payload: value,
});

export const alterTodoList = (value: number): Change => ({
    type: ManipulateTodoList.UPDATED_LIST,
    payload: value,
});

export const editTodoItem = (value: object): Edit => ({
    type: EditTodoItem.EDITED_LIST,
    payload: value,
});
