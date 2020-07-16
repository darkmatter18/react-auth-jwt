import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthContext'

type Props = {
  Component: React.ElementType
  loginPath: string
  rest: any
}

const PrivateRoute: React.FunctionComponent<Props> = ({
  Component,
  loginPath,
  ...rest
}) => {
  const _authContext = useContext(AuthContext)

  const isAuth = () => {
    if (
      _authContext?.authObject.authToken &&
      _authContext?.authObject.expireAt
    ) {
      if (_authContext.authObject.expireAt < new Date()) {
        return { auth: true, authToken: _authContext.authObject.authToken }
      } else {
        _authContext.setAuthToken({
          authToken: null,
          expireAt: null
        })
        return { auth: false, authToken: null }
      }
    } else {
      return { auth: false, authToken: null }
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth().auth ? (
          <Component props={props} />
        ) : (
          <Redirect to={loginPath} />
        )
      }
    />
  )
}

export default PrivateRoute
