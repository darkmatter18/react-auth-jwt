import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const useSignIn = () => {
  const c = useContext(AuthContext)
  return (token: string, expiresIn: number) => {
    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)
    try {
      if (c) {
        c.setAuthToken((prevState) => ({
          ...prevState,
          authToken: token,
          expireAt: expTime
        }))
        console.log('RAJ :: Signing In')
        return true
      } else {
        return false
      }
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
export default useSignIn
