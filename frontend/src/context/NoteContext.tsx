import React, {useState, createContext, useEffect, useContext} from 'react'



//Structure of a Note
export interface Note {
    id: string,
    title: string
}

//Structure of Note Context
interface NoteContextValue {
    notes: Note[];
    addNote: (title: string) => Note | void;
    deleteNote: (id: string) => void;
}


//Note Context
export const NoteContext = createContext<NoteContextValue>({
    notes: [],
    addNote: () => { },
    deleteNote: () => { }
});


//Define the props that note provider takes
interface NoteProviderProps {
    children: React.ReactNode;
}


export const NoteProvider = ({ children }: NoteProviderProps) => {
    const [notes, setNotes] = useState<Note[]>([]);

    //Add Note
    const addNote = (title: string) => {

        if (!title) {
            throw new Error('You Cannot add an Empty Note');
        }

        const newNote: Note = {
            id: Math.random().toString(),
            title: title
        }

        setNotes([...notes, newNote]);
        localStorage.setItem("notes", JSON.stringify(notes));

    }

    //Delete Note
    const deleteNote = (id: string) => {
        setNotes(notes.filter((note) => note.id != id));
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    useEffect(() => {

        const notesStorage = localStorage.getItem("notes");

        if (notesStorage) {
            setNotes(JSON.parse(notesStorage));
        }



    }, [])


    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])




    return (

        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>

            {children}

        </NoteContext.Provider>

    );


}











