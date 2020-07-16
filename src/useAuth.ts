import { useContext } from 'react'
import { AuthContext } from './AuthContext'

class UseAuth {
  private readonly c: ContextProps | null
  constructor() {
    this.c = useContext(AuthContext)
  }

  signId = (token: string, expiresIn: number): boolean => {
    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000)
    try {
      if (this.c) {
        this.c.setAuthToken({ authToken: token, expireAt: expTime })
        return true
      } else {
        return false
      }
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

export default UseAuth
