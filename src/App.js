import React from 'react'
import './App.css';
import { nanoid } from 'nanoid'

import {NoteTitle} from "./components/NoteTitle";
import CreateNote from "./components/CreateNote";
import ViewNotes from "./components/ViewNotes";

const ls = require('local-storage');

const App = () => {
  const [title, setTitle] = React.useState('');
  const [notes, setNotes] = React.useState([]);

  return (
    <div className="App">
        <NoteTitle onTitleChange={(title) => setTitle(title)} title={title} onSave={() => {console.log('save')}} onDelete={() => {console.log('delete')}} />
        <CreateNote onSave={(newNote) => setNotes((currentNotes) => [...currentNotes, {id: nanoid(), ...newNote}])} />
        <ViewNotes />
    </div>
  );
}

export default App;
