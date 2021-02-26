import { FetchTodosAction, DeleteTodoAction } from './todoActions';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
