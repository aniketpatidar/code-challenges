const Navbar = () => {
  return (
    <div className="bg-gray-800 shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-center" >
        <nav className="bg-gray-800 text-white p-4 items-center flex justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              className="h-8 w-auto">
            </img>
            Code Challenges
          </div>
          {/* <ul className="flex gap-20">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar