import { useContext } from 'react'
import { AuthContext } from './AuthContext'

class UseAuth {
  constructor() {
    this.c = useContext(AuthContext)
  }

  signId = (token: string, expiresIn: number): boolean => {
    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)
    try {
      this.c.setAuthToken({ authToken: token, expireAt: expTime })
      return true
    } catch (e) {
      return false
    }
  }

  logoutAuth = (): boolean => {
    try {
      if (this.c?.authObject.authToken) {
        this.c.setAuthToken({ authToken: null, expireAt: null })
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}

export default UseAuth;
