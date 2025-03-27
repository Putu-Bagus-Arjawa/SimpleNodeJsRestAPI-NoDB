import express from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controller/controller.js";

const routes = express.Router()

routes.get("/", getAllBooks)
routes.get("/:id", getBookById)
routes.post("/", createBook)

routes.put("/:id", updateBook)
routes.delete("/:id", deleteBook)

export default routes