import React from 'react'
import { AuthContextConsumer } from './AuthContext'

interface withAuthProps {
  authState: object | null
}

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return class withAuth extends React.Component<P & withAuthProps> {
    render() {
      const { ...props } = this.props
      return (
        <AuthContextConsumer>
          {(value) => (
            <Component {...(props as P)} authState={value?.authState} />
          )}
        </AuthContextConsumer>
      )
    }
  }
}

export default withAuth
