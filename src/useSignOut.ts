import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const useSignOut = () => {
  const c = useContext(AuthContext)
  return () =>
    new Promise((resolve) => {
      if (c?.authObject.authToken) {
        c.setAuthToken({ authToken: null, expireAt: null })
        resolve(true)
      } else {
        throw new Error('Could not able to Sign Out')
      }
    })
}

export default useSignOut
