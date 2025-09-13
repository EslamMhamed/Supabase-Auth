import { useState } from "react"
import { Link } from "react-router-dom"

function Signup() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState("")

  return (
    <div>
      <form  className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>Already have an account 
          <Link to="/signup">Sign up</Link>
        </p>
        <div className="flex flex-col py-4">
          <input placeholder="Email" className="p-3 mt-6 " type="text" />
          <input placeholder="Password" className="p-3 mt-6 " type="password" />
          <button type="submit" disabled={loading} className="mt-6">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup