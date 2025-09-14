import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Signin() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState("")

  const navigate = useNavigate()

  const { signInUser} = useAuth()


  async function  handleSignin(e){
    e.preventDefault()

    setLoading(true)

    try {
      const result = await signInUser(email, password)
      if(result.success){
        navigate("/dashboard")
      }
    } catch (error) {
      setError("an error occurred", error)
    } finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSignin}  className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>Don't Already have an account 
          <Link to="/signup">Sign up!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="p-3 mt-6 " type="text" />
          <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="p-3 mt-6 " type="password" autoComplete="new-password" />
          <button type="submit" disabled={loading} className="mt-6">Sign in</button>
          {error && <p className="text-red-600 text-center pt-4">{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default Signin