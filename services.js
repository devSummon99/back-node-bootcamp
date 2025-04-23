import notes from "./notes.js"

export const getAllNotesService = () => {
return notes;
}
export const getNoteByIDService = (id) => {
const findNote = notes.find((note) => note.id = id);
return findNote;
}
export const createNoteService = (data) => {
    const { title, content } = data;
    const ids = notes.map(note => note.id);
    const maxID = Math.max(ids);
    const newNote = {
        id: maxID + 1,
        title: title,
        content: content, 
        date: new Date().toISOString()
    }
    return notes = notes.concat(newNote);
}
export const updateNoteService = (data, id) => {
    const findNote = notes.find((note) => note.id = id);
    if(findNote) {
        Object.assign( findNote, data);
        return findNote;
    }else return null;
    
}
export const removeNoteService = (id) => {
    const deletedNote = notes.filter((note) => note.id === id)
    return deletedNote;
}
