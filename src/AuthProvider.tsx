import React, { useState } from 'react'
import { AuthContextProvider } from './AuthContext'

type AuthProps = {
  children: React.ReactChildren
}

const AuthProvider: React.FunctionComponent<AuthProps> = ({ children }) => {
  const [authState, setAuthState] = useState<TokenInterface>({
    authToken: null,
    expireAt: null
  })

  return (
    <AuthContextProvider value={{ authState, setAuthState }}>
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider
