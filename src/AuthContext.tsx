import { createContext } from "react"

interface AuthContextType{
    theme : string | null
toggleTheme : () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

