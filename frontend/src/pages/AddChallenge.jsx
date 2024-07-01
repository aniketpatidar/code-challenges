import Button from '../elements/Button'
import { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from '../components/EditorToolbar';
import "react-quill/dist/quill.snow.css";

const initiateError = {
  title: '',
  description: '',
  date: '',
  api: ''
}
const AddChallenge = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    let newError = {}

    if (!(title.length > 0)) {
      newError = { ...newError, title: 'Title cannot be empty'}
    }
    if (!(description.length > 0)) {
      newError = { ...newError, description: 'Description cannot be empty' }
    }
    if (!(value.startDate && value.endDate)) {
      newError = { ...newError, date: 'Start date and End date cannot be empty' }
    }

    setError(newError)

    const hasError = Object.values(newError).some((err) => err !== '')
    if (hasError) {
      return
    }
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(initiateError)
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e)
  }

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl">Add Challenge</h1>
      { error.api && <p className="text-sm text-medium text-red-500 mt-2">{ error.api }</p> }

      <form className="mt-6 flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            type="title"
            placeholder="Add title"
            className="p-2 border border-gray-300 rounded-md w-full"
            value={title}
            onChange={handleTitle}
          />
          { error.title && <p className="text-sm text-medium text-red-500 mt-2">{ error.title }</p> }
        </div>

        <div>
          <div className="text-editor">
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
            />
          </div>
          { error.description && <p className="text-sm text-medium text-red-500 mt-2">{ error.description }</p> }
        </div>

        <div>
          <Datepicker
            minDate={new Date()}
            placeholder="Start Date ~ End Date"
            displayFormat="DD MMMM"
            inputClassName="p-2 border border-gray-300 rounded-md w-full"
            value={value}
            onChange={handleValueChange}
          />
          { error.date && <p className="text-sm text-medium text-red-500 mt-2">{ error.date }</p> }
        </div>

        <Button type="submit">
          Add Challenge
        </Button>
      </form>
    </div>
  )
}

export default AddChallenge
