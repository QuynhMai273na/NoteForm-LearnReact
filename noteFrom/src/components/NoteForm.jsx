import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';
const NoteForm = ({ notes, setNotes, isVisibleForm }) => {
  //   const [title, setTitle] = useState('');
  //   const [piority, setPiority] = useState('Medium');
  //   const [category, setCategory] = useState('Work');
  //   const [description, setDescription] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    piority: 'Medium',
    category: 'Work',
    description: '',
  });
  //   const [isVisibleForm, setIsVisibleForm] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form data
    if (!formData.title || !formData.description) {
      alert('Please fill all the fields');
      return;
    }
    // create note
    const newNote = {
      id: Date.now(),
      ...formData,
    };
    // add note to state
    setNotes([newNote, ...notes]);
    // reset form
    setFormData({
      title: '',
      piority: 'Medium',
      category: 'Work',
      description: '',
    });
  };
  return (
    <>
      {/* Toggle button */}
      {/* <button
        onClick={() => setIsVisibleForm(!isVisibleForm)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
      >
        {isVisibleForm ? 'Close Form ✖️' : 'Add New Note ➕'}
      </button> */}
      {isVisibleForm && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Piority"
            name="piority"
            value={formData.piority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟠 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '📂 Work' },
              { value: 'Personal', label: '🏠 Personal' },
              { value: 'Ideas', label: '💡 Ideas' },
            ]}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg cursor-pointer">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
