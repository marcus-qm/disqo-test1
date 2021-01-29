import React from 'react'
import './App.css';
import { nanoid } from 'nanoid'

import {NoteTitle} from "./components/NoteTitle";
import CreateNote from "./components/CreateNote";
import ViewNotes from "./components/ViewNotes";

import { createNotePad, getNotePad, updateNotePad, deleteNotePad } from "./services/gistService";

const ls = require('local-storage');

function App() {
  const [title, setTitle] = React.useState('');
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    if (ls('gist-id')) {
      let notes = [];
      (async function fetchNotes() {
        notes = await getNotePad(ls.get('gist-id'));
        setNotes(formatResponseNotes(notes))
        setTitle(formatResponseTitle(notes))
      })();
    }
  }, [])

  const saveNotepad = async() => {
    //update
    if (ls('gist-id')) {
      const savedNoted = await createNotePad({notes, title});
      ls('gist-id', savedNoted.data.id);

    } else {
      //create
      const savedNoted = await createNotePad({notes, title});
      ls('gist-id', savedNoted.data.id);
    }
  }

  const formatResponseNotes = (data) => JSON.parse((data.data.files.note.content)).notes

  const formatResponseTitle = (data) => JSON.parse((data.data.files.note.content)).title

  const handleDeleteNotePad = async() => {
    if (ls('gist-id')) {
      const deletedNote = await deleteNotePad(ls.get('gist-id'));
      console.log(deletedNote);
    }
    ls.remove('gist-id');
    setNotes([]);
    setTitle('');
  }

  const handleDeleteNote = id => setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id))

  return (
    <div className="App">
        <NoteTitle onTitleChange={(title) => setTitle(title)} title={title} onSave={() => saveNotepad()} onDelete={() => handleDeleteNotePad()} />
        <CreateNote onSave={(newNote) => {console.log('ssss');setNotes((currentNotes) => [...currentNotes, {id: nanoid(), ...newNote}])}} />
        <ViewNotes notes={notes} handleDeleteNote={(id) => handleDeleteNote(id)} />
    </div>
  );
}

export default App;
