import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const useAuth = () => {
  const c = useContext(AuthContext)
  return () => {
    return c?.authState
  }
}

export default useAuth
