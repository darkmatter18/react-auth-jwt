import { useContext } from 'react'
import { AuthContext } from './AuthContext'

/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
const useAuth = () => {
  const c = useContext(AuthContext)

  /**
   * Get Auth State
   *
   * @returns - authstate
   */
  const auth = (): TokenInterface => {
    return <TokenInterface>c?.authState
  }

  return auth
}

export default useAuth
