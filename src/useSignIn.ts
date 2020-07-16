import { useContext } from 'react'
import { AuthContext } from './AuthContext'

/**
 * useSignInHook
 */
const useSignIn = () => {
  const c = useContext(AuthContext)
  return (token: string, expiresIn: number): boolean => {
    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)
    try {
      if (c) {
        c.setAuthToken((prevState) => ({
          ...prevState,
          authToken: token,
          expireAt: expTime
        }))
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
export default useSignIn
