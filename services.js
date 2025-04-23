import {notes} from "./notes.js"

export const getAllNotesService = () => {
return notes;
}
export const getNoteByIDService = (id) => {
const findNote = notes.find((note) => note.id = id);
return findNote;
}
export const createNoteService = (data) => {
    const { title, content } = data;
    const ids = notes.map((note) => note.id);
    const maxID = Math.max(...ids);
    console.log(maxID)
    const newNote = {
        id: maxID + 1,
        title: title,
        content: content, 
        createdAt : new Date(),
        updatedAt: new Date()
    }
    return notes.push(newNote);
}
export const updateNoteService = (data, id) => {
    const { title, content } = data;
    const findNote = notes.find((note) => note.id = id);
    if(findNote) {
        Object.assign( findNote, { title, content });
        return findNote;
    }else return null;
    
}
export const removeNoteService = (id) => {
    const deletedNote = notes.filter((note) => note.id === id)
    return deletedNote;
}
