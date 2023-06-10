import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const Note = () => {

    const { notes, deleteNote} = useContext(NoteContext);


    const handleDelete = (id: string) => {
        deleteNote(id);
        console.log('Deleted Note with id' + id);
    }


    return <>

        <div className="container">

            {notes.map((note) => 
                
                <div className="card shadow">

                    <div className="card-body d-flex justify-content-between">

                        {note.title}
                        <button className="btn btn-primary" onClick={() => handleDelete(note.id)}>Delete</button>
                    </div>

                   

                </div>
                
                )}

            


        </div>

    </>

}

export default Note;