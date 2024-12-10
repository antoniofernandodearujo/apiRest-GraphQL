import { Request, Response } from "express";
import todos from "../data/todos";

export default class RestController {

    getTodos(req: Request, res: Response) {
        res.json(todos);
    }

    addTodo(req: Request, res: Response) {
        const { title } = req.body;
        const newTodo = { id: Date.now(), title, completed: false };
        todos.push(newTodo);
        res.json(newTodo);
    }

    updateTodoStatus(req: Request, res: Response) {
        const { id } = req.params;
        const { completed } = req.body;
        const todo = todos.find((todo) => todo.id == parseInt(id));
        if (todo) {
            todo.completed = completed;
            res.json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    }

    deleteTodo(req: Request, res: Response) {
        const { id } = req.params;
        const index = todos.findIndex((todo) => todo.id == parseInt(id));
        if (index !== -1) {
            todos.splice(index, 1);
            res.json({ message: "Todo deleted" });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    }

}