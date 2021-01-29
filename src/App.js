import React from 'react'
import './App.css';

import {NoteTitle} from "./components/NoteTitle";
import CreateNote from "./components/CreateNote";
import ViewNotes from "./components/ViewNotes";

const ls = require('local-storage');

const App = () => {
  return (
    <div className="App">
        <NoteTitle />
        <CreateNote />
        <ViewNotes />
    </div>
  );
}

export default App;
