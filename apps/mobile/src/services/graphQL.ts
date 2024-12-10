import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      completed
    }
  }
`;

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface GetTodosData {
  todos: Todo[];
}
