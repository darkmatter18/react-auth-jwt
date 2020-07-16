type authTokenType = string | null

declare interface TokenInterface {
  authToken: authTokenType
  expireAt: Date | null
}

declare interface ContextProps {
  authObject: TokenInterface | null
  setAuthToken: React.Dispatch<React.SetStateAction<TokenInterface>>
}
