import React, { useEffect, useState } from 'react'
import { AuthContextProvider } from './AuthContext'
import TokenObject from './TokenObject'

type AuthProps = {
  cookieName: string
  children: any
}

const AuthProvider: React.FunctionComponent<AuthProps> = ({
  cookieName,
  children
}) => {
  const JwtTokenObject = new TokenObject(cookieName)
  const [authObject, setAuthObject] = useState<TokenInterface>(
    JwtTokenObject.getToken()
  )

  useEffect(() => {
    if (
      authObject.authToken === undefined ||
      authObject.authToken === null ||
      authObject.expireAt === null
    ) {
      JwtTokenObject.removeToken()
    } else {
      JwtTokenObject.setToken(authObject.authToken, authObject.expireAt)
    }
  }, [authObject])

  return (
    <AuthContextProvider
      value={{ authObject: authObject, setAuthToken: setAuthObject }}
    >
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider
