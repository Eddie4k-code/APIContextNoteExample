import { useContext, useState } from "react";
import { Note, NoteContext } from "../context/NoteContext";

const NoteForm = () => {

    const { addNote, notes } = useContext(NoteContext);
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string>('');

    //On Form Submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            addNote(title);

            console.log(notes);

            setTitle('');
            setError('');
        } catch (err: any) {
            setError(err.message);
        }


    }

    



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group w-50 mx-auto">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" name="title" value={title } onChange={(e) => setTitle(e.target.value)}/>
                <input className="form-control" type="submit" />
            </div>

            {error && <h1>{error}</h1>}

        </form>);

}

export default NoteForm;