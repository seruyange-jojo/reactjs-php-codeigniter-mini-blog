import { useState, useEffect } from "react";
import Note from './Note';
import Layout from "./Layout";

function Home(){
    const [notes, setNotes] = useState([]);

    async function fetchNotes(){
        const response = await fetch('http://localhost:8080/note');
        const data = await response.json();
        setNotes(data);
    }

    useEffect(() => {
      fetchNotes();
    }, []);

    return (
      <div className="container p-5">
        <Layout/>
        <h2 className="text-center text-muted">Notes Application</h2>

        {notes &&
          notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              author={note.author}
              body={note.body}
              id={note.id}
            />
          ))}
      </div>
    );
}

export default Home;