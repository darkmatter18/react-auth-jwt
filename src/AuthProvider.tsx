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
    JwtTokenObject.getToken()
  )

  useEffect(() => {
    console.log('RAJ :: Using Auth Effect')
    if (
      authState.authToken === undefined ||
      authState.authToken === null ||
      authState.expireAt === null ||
      authState.authState === null
    ) {
      console.log('RAJ :: Using Auth Effect removing Token')
      JwtTokenObject.removeToken()
    } else {
      console.log('RAJ :: Using Auth Effect Adding Token')
      JwtTokenObject.setToken(
        authState.authToken,
        authState.expireAt,
        authState.authState
      )
    }
  }, [authState])

  return (
    <AuthContextProvider value={{ authState, setAuthState }}>
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider
