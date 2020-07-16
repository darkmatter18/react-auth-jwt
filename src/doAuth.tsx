import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export const loginAuth = (token: string, expiresIn: number): boolean => {
  const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)

  try {
    const c = useContext(AuthContext)
    c.setAuthToken({ authToken: token, expireAt: expTime })
    return true
  } catch (e) {
    return false
  }
}

export const logoutAuth = (): boolean => {
  try {
    const c = useContext(AuthContext)
    if (c?.authObject.authToken) {
      c.setAuthToken({ authToken: null, expireAt: null })
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}
