class TokenObject {
  private readonly tokenName: string
  constructor(tokenName: string) {
    this.tokenName = tokenName
  }

  isTokenExist() {
    return localStorage[this.tokenName] !== undefined
  }

  isTokenExpire() {
    if (this.isTokenExist()) {
      const _e = JSON.parse(localStorage[this.tokenName]).expiresAt
      return _e < new Date()
    } else {
      return true
    }
  }

  setToken(value: string, expiresAt: Date, authState: object) {
    // {value: xxx, expiresAt: ttt}
    const json = { value: value, expiresAt: expiresAt, authState: authState}
    localStorage[this.tokenName] = JSON.stringify(json)
  }

  getToken(): TokenInterface {
    if (this.isTokenExist()) {
      if (!this.isTokenExpire()) {
        const _t = JSON.parse(localStorage[this.tokenName])
        const token = _t.value
        const expiresAt = _t.expiresAt
        const authState = _t.authState
        return { authToken: token, expireAt: expiresAt, authState: authState }
      } else {
        return { authToken: null, expireAt: null, authState: null }
      }
    } else {
      return { authToken: null, expireAt: null, authState: null }
    }
  }

  removeToken() {
    localStorage.removeItem(this.tokenName)
  }
}

export default TokenObject
