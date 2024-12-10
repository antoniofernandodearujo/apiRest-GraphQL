import { Router } from "express";
import RestController from "../controllers/restController";

const router = Router();

const todo = new RestController();

router.get("/todos", todo.getTodos);
router.post("/todos", todo.addTodo);
router.put("/todos/:id", todo.updateTodoStatus);
router.delete("/todos/:id", todo.deleteTodo);

export default router;