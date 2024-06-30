const Button = (
  {
    children,
    onClick,
    parentClassName='bg-indigo-300',
    childClassName='bg-indigo-300 hover:bg-indigo-700 text-black hover:text-white',
  }
) => {
  return (
    <div className={`${parentClassName} rounded hover:-translate-x-0.5 hover:-translate-y-0.5`}>
      <button
        onClick={onClick}
        className={`${childClassName} w-full p-2 rounded hover:-translate-x-1.5 hover:-translate-y-1.5`}
        type="submit"
      >
        {children}
      </button>
    </div>
  )
}

export default Button
