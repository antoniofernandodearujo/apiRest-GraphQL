import { gql } from "apollo-server-express";
import todos from "../data/todos";

export const typeDefs = gql`
    type Todo {
        id: ID!
        title: String!
        completed: Boolean!
    }

    type Query {
        todos: [Todo!]!
    }
    
    type Mutation {
        addTodo(title: String!): Todo!
        updateTodoStatus(id: ID!, completed: Boolean!): Todo!
        deleteTodo(id: ID!): Todo!
    }

`;

export const resolvers = {
    Query: {
        todos: () => todos,
    },
    Mutation: {
        addTodo: (_: any, { title }: { title: string }) => {
            const newTodo = { id: Date.now(), title, completed: false };
            todos.push(newTodo);
            return newTodo;
        },
        updateTodoStatus: (_: any, { id, completed }: { id: string, completed: boolean }) => {
            const todo = todos.find((todo) => todo.id == parseInt(id));
            if (todo) {
                todo.completed = completed;
                return todo;
            } else {
                throw new Error("Todo not found");
            }
        },
        deleteTodo: (_: any, { id }: { id: string }) => {
            const index = todos.findIndex((todo) => todo.id == parseInt(id));
            if (index !== -1) {
                const deletedTodo = todos.splice(index, 1);
                return deletedTodo[0];
            } else {
                throw new Error("Todo not found");
            }
        },
    },
};