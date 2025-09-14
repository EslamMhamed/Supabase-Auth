import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {

    const {session} = useAuth()

    if(session === undefined){
        return <p>Loading..</p>
    }

  return (
    <>
        {session ? <>{children}</> : <Navigate to="/signup"/> }
    </>
  )
}

export default PrivateRoute