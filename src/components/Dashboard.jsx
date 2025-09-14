import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Dashboard() {

  const {session, signOut} = useAuth()
  const navigate = useNavigate()

  async function handleSignOut(e) {
    e.preventDefault()

    try {
      await signOut()
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <p onClick={handleSignOut} className="hover:cursor-pointer inline-block px-4 py-3 mt-4">Sign out</p>
      </div>
    </div>
  )
}

export default Dashboard