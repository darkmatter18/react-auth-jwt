import { useContext } from 'react'
import { AuthContext } from './AuthContext'

/**
 * Authentication SignIn Hook
 *
 * @returns {function(): boolean} - Sign In function
 */
const useSignIn = () => {
  const c = useContext(AuthContext)

  /**
   * Sign In Function
   *
   * @param token - Authentication Token
   * @param expiresIn - Time to expire the Token in minutes
   * @param authState - Auth Users state
   *
   * @returns - status of Authentication true | false
   */
  const signIn = (
    token: string,
    expiresIn: number,
    authState: object
  ): boolean => {
    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)
    try {
      if (c) {
        c.setAuthState((prevState) => ({
          ...prevState,
          authToken: token,
          expireAt: expTime,
          authState: authState
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
  return signIn
}
export default useSignIn
