import { useContext } from 'react'
import { AuthContext } from './AuthContext'

/**
 * useSignInHook
 */
const useSignIn = () => {
  const c = useContext(AuthContext)
  return (token: string, expiresIn: number) =>
    new Promise((resolve) => {
      const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)
      if (c) {
        c.setAuthToken({ authToken: token, expireAt: expTime })
        resolve(true)
      } else {
        throw new Error('Could not able to Sign Out')
      }
    })
}
export default useSignIn
