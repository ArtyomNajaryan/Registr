import { useState } from "react"
import { Login } from "./Login"
import { PersonalInfo } from "./PersonalInfo"
import { SignUp } from "./SignUp"
import { Successful } from "./Successful"

export let Form = () => {

  const [page, setPage] = useState(0)

  const FormTitle = ['Sign Up', 'Email', 'Phone Number', ]
  const btn = ['Next', 'Confirm Password', 'Log In']

  const FormPages = () => {
    if (page === 0) {
      return <SignUp />
    }
    else if (page === 1) {
      return <PersonalInfo />
    }
    else  {
      return <Login />
    }
   
  }
  if (page == FormTitle.length) {
    return <Successful/>
  }

  

  return <div>

    <div className="h-screen flex items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 " >
    
      <div className="w-full md:w-1/4 lg:w-1/4 mx-3 md:mx-auto lg:mx-auto  bg-white  border border-gray-100 shadow-md px-8 py-12 lg:py-24 md:py-20 rounded-xl">
        <div className="relative w-full bg-white border p-1  mb-12 md:mb-20 lg:mb-24 rounded-full">
          <div className=" ease-in-out duration-300 absolute top-0 left-0 p-1 rounded-full bg-rose-600" style={{ width: page === 0 ? '33%' : page === 1 ? '66%' : '100%' }}>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-3xl mb-8 font-bold">
            {FormTitle[page]}
          </h1>
        </div>
        <div className="Body">
          {FormPages()}
          <div className="flex justify-end mt-5">
            <div className="back-btn hidden">
              <button className="transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-rose-600/40 flex items-center justify-center px-10 py-2  text-base font-medium rounded-md  bg-rose-600 shadow-md text-white md:text-lg " onClick={() => { setPage((currPage) => currPage - 1) }}>Back</button>
            </div>
            <button className="transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-rose-600/40 flex items-center justify-center px-10 py-2  text-base font-medium rounded-md  bg-rose-600 shadow-md text-white md:text-lg " disabled={page == FormTitle.length} onClick={() => { setPage((currPage) => currPage + 1) }}>
              {btn[page]}
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
}