const ToggleBtn = ({ isVisibleForm, setIsVisibleForm }) => {
  return (
    <button
      onClick={() => setIsVisibleForm(!isVisibleForm)}
      className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
    >
      {isVisibleForm ? 'Close Form ✖️' : 'Add New Note ➕'}
    </button>
  );
};

export default ToggleBtn;
