import { useState } from 'react';
import ToggleBtn from './components/ToggleBtn';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, setNotes] = useState([]);
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?'
    );
    if (!confirmDelete) return;
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Note App</h2>
      <ToggleBtn
        isVisibleForm={isVisibleForm}
        setIsVisibleForm={setIsVisibleForm}
      />
      <NoteForm
        notes={notes}
        setNotes={setNotes}
        isVisibleForm={isVisibleForm}
      />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};
export default App;
