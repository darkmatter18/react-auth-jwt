import React from 'react'

const Auth = React.createContext<ContextProps | null>(null)

export const AuthContextProvider = Auth.Provider
export const AuthContextConsumer = Auth.Consumer
export const AuthContext = Auth
