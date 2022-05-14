export let SignUp = () => {
  return <div>
    
    <form className=" w-full">
      <div className="mb-5">
      <label className="text-xs">First Name <span className="text-red-500">*</span></label>
      <input className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2 px-1 text-sm" type="name"  />
      </div>

      <div className="mb-5">
      <label className="text-xs">Email <span className="text-red-500">*</span></label>
      <input className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2 px-1 text-sm"  type="email" />
      </div>
    </form>
  </div>
}