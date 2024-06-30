import Button from '../elements/Button'
import { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

const AddChallenge = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Add Challenge')
  }

  const [title, setTitle] = useState('')
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl">Add Challenge</h1>
      <form className="mt-6 flex flex-col gap-8" onSubmit={handleSubmit}>
        <input
          name="title"
          type="title"
          placeholder="Add title"
          className="p-2 border border-gray-300 rounded-md w-full"
          value={title}
          onChange={handleTitle}
        />
        <Datepicker
          minDate={new Date()}
          placeholder="Start Date ~ End Date"
          displayFormat="DD MMMM"
          inputClassName="p-2 border border-gray-300 rounded-md w-full"
          value={value}
          onChange={handleValueChange}
        />
        <Button type="submit">
          Add Challenge
        </Button>
      </form>
    </div>
  )
}

export default AddChallenge
