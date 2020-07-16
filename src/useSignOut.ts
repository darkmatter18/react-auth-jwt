import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const useSignOut = () => {
  const c = useContext(AuthContext)
  return () => {
    try {
      if (c?.authObject.authToken) {
        c.setAuthToken((prevState) => ({
          ...prevState,
          authToken: null,
          expireAt: null
        }))
        console.log('RAJ :: Signing Out')
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}

export default useSignOut
