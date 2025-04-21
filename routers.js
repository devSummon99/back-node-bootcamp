import { Router } from "express";
import { notes } from "./notes.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/api/notes", (req, res) => {
  res.json(notes);
});

router.get("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const note = notes.find((n) => n.id === noteId);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
});

router.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = notes.length + 1;
  newNote.createdAt = new Date();
  newNote.updatedAt = new Date();
  notes.push(newNote);
  res.status(201).json(newNote);
});

router.put("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const noteIndex = notes.findIndex((n) => n.id === noteId);
  if (noteIndex !== -1) {
    const updatedNote = {
      ...notes[noteIndex],
      ...req.body,
      updatedAt: new Date(),
    };
    notes[noteIndex] = updatedNote;
    res.json(updatedNote);
  } else {
    res.status(404).send("Note not found");
  }
});

router.delete("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const noteIndex = notes.findIndex((n) => n.id === noteId);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Note not found");
  }
});

export default router;
