import React, { useState } from 'react'
import { AuthContextProvider } from './AuthContext'

type AuthProps = {
  children: React.ReactChildren
}

const AuthProvider: React.FunctionComponent<AuthProps> = ({ children }) => {
  const [authObject, setAuthObject] = useState<TokenInterface>({
    authToken: null,
    expireAt: null
  })

  return (
    <AuthContextProvider
      value={{ authObject: authObject, setAuthToken: setAuthObject }}
    >
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider
