import { request, response, Router } from "express";

import {
  createNote,
  getAllNotes,
  getNoteByID,
  removeNote,
  updatedNote,
} from "./controllers.js";

const router = Router();



router.get("/api/notes", getAllNotes);

router.get("/api/notes/:id", getNoteByID);

router.post("/api/notes", createNote);

router.put("/api/notes/:id", updatedNote);

router.delete("/api/notes/:id", removeNote);

export default router;
