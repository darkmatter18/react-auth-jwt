type authTokenType = string | null

declare interface TokenInterface {
  authToken: authTokenType
  expireAt: Date | null
  authState: object | null
}

declare interface ContextProps {
  authState: TokenInterface
  setAuthState: React.Dispatch<React.SetStateAction<TokenInterface>>
}
