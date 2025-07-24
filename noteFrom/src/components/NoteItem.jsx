const NoteItem = ({ note, deleteNote }) => {
  return (
    <div
      style={{
        borderLeftColor:
          note.piority == 'High'
            ? 'red'
            : note.piority == 'Medium'
            ? 'orange'
            : 'green',
      }}
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category</strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Piority</strong> {note.piority}
      </p>
      <p className="mt-2">{note.description}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
      >
        🗑 Delete
      </button>
    </div>
  );
};

export default NoteItem;
