import { useState } from "react"

export let Login = () => {
   const [page, setPage] = useState(0)
  return <div>
    <form className=" w-full">
      <div className="mb-5">
        <label className="text-xs">Username <span className="text-red-500">*</span></label>
        <input className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2 px-1 text-sm" type="text" />
      </div>

      <div className="mb-5">
        <label className="text-xs">Password <span className="text-red-500">*</span></label>
        <input className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2 px-1 text-sm" type="password" />
      </div>

    </form>
    
  </div>
}