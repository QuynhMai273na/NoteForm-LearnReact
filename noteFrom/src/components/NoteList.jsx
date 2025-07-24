import NoteItem from './NoteItem';
const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center">No notes yet</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
