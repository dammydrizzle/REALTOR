import{ Outlet, Navigate } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus()
    if(checkingStatus){
        return <h2 className='font-bold'>Loading...</h2>
    }
  return  loggedIn ? <Outlet/> : <Navigate to="/Sign-in"/>
 
}
