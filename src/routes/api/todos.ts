import express, { Request, Response } from "express";
import todos from "../../models/Todo";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(todos));
});

export default router;
