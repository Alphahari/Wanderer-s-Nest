import { useEffect } from 'react'
import { clearToken } from '../redux/tokenManager/tokens'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(clearToken())
      window.location.reload() 
    }, [])
    
  return (
    <Navigate to="/login" />
  )
}

export default Logout
