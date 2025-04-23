import { Router } from "express";

import {
  createNote,
  getAllNotes,
  getNoteByID,
  removeNote,
  updatedNote,
} from "./controllers.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/api/notes", getAllNotes(req, res));

router.get("/api/notes/:id", getNoteByID(req, res));

router.post("/api/notes", createNote(req, res));

router.put("/api/notes/:id", updatedNote(req, res));

router.delete("/api/notes/:id", removeNote(req, res));

export default router;
