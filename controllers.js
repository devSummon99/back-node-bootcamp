import {
  createNoteService,
  getAllNotesService,
  getNoteByIDService,
  removeNoteService,
  updateNoteService,
} from "./services.js";

export const getAllNotes = (req, res) => {
  const allNotes = getAllNotesService();
  if (allNotes) {
    res.json(allNotes);
  } else {
    res.status(404).json({ message: "No hay notas" });
  }
};

export const getNoteByID = (req, res) => {
  const id = Number(req.params.id);
  const noteByID = getNoteByIDService(id);
  if (noteByID) {
    res.json(noteByID);
  } else {
    res.status(404).json({ message: "No se encuentra la nota" });
  }
};

export const createNote = (req, res) => {
    const {title, content} = req.body;
  const newNota = createNoteService({title, content});
  return res.json(newNota).status(201);
};

export const updatedNote = (req, res) => {
  const id = Number(req.params.id);
  const {title, content} = req.body;
  const dataUpdated = updateNoteService({title, content}, id);
  if (dataUpdated) {
    return res.json(dataUpdated).status(200);
  } else {
    return res
      .json({ message: "Error no se ha podido modificar el objeto" })
      .status(400);
  }
};

export const removeNote = (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const noteIndex = removeNoteService(noteId);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Note not found");
  }
};
