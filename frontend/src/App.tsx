import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Note from './Components/Note';
import NoteForm from './Components/NoteForm';
import { NoteProvider } from './context/NoteContext';


function App() {
  return (
      <div className="App">
          <NoteProvider>
          <Nav />
          <NoteForm />
              <Note />
        </NoteProvider>
        


    </div>
  );
}

export default App;
