import React, { useState } from 'react'
import { AuthContextProvider } from './AuthContext'

type AuthProps = {
  children: any
}

const AuthProvider: React.FunctionComponent<AuthProps> = ({ children }) => {
  const [authObject, setAuthObject] = useState<TokenInterface>({
    authToken: null,
    expireAt: null
  })

  // useEffect(() => {
  //   console.log('Using Auth Effect')
  //   if (authObject.authToken === null || authObject.expireAt === null) {
  //     console.log('Using Auth Effect removing Token')
  //     JwtTokenObject.removeToken()
  //   } else {
  //     console.log('Using Auth Effect Adding Token')
  //     JwtTokenObject.setToken(authObject.authToken, authObject.expireAt)
  //   }
  // }, [authObject])

  return (
    <AuthContextProvider
      value={{ authObject: authObject, setAuthToken: setAuthObject }}
    >
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider
