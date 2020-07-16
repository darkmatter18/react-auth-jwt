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
  const context = useContext(AuthContext)

  const isAuth = () => {
    if (context?.authState.authToken && context?.authState.expireAt) {
      if (context.authState.expireAt < new Date()) {
        return true
      } else {
        console.log('RAJ :: Token Expired')
        context.setAuthState({
          authToken: null,
          expireAt: null
        })
        return false
      }
    } else {
      return false
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component props={props} /> : <Redirect to={loginPath} />
      }
    />
  )
}

export default PrivateRoute
