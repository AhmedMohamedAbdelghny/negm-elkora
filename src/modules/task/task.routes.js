import { Router } from "express";
import * as TC from "./task.controller.js";
import { validation } from "../../middleware/validation.js";
import * as TV from "./task.validation.js";
import { auth } from './../../middleware/auth.js';





const router = Router();

router.post("/", validation(TV.createTask), TC.createTask);
router.patch("/:id", validation(TV.updateTask), TC.updateTask);
router.delete("/:id", validation(TV.deleteTask), TC.deleteTask);
router.get("/allTasks", TC.getTasks);
router.get("/:id", TC.getOneTask);
router.put("/:id", auth(), TC.doTask);

router.get("/", auth(), TC.getChildTasks);



export default router;
