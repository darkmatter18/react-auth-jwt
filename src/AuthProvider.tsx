import React, { useEffect, useState } from 'react'
import { AuthContextProvider } from './AuthContext'
import TokenObject from './TokenObject'

type AuthProps = {
  cookieName: string
  children: React.ReactChildren
}

/**
 * AuthProvider Functional Component
 *
 * @param children - Children Component
 * @param cookieName - Cookie Name for Auth Storing
 *
 * @return - AuthContext Provider
 */
const AuthProvider: React.FunctionComponent<AuthProps> = ({
  children,
  cookieName
}) => {
  const JwtTokenObject = new TokenObject(cookieName)
  const [authState, setAuthState] = useState<TokenInterface>(
    JwtTokenObject.initialToken()
  )

  useEffect(() => {
    JwtTokenObject.syncTokens(authState)
  }, [authState])

  return (
    <AuthContextProvider value={{ authState, setAuthState }}>
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider
