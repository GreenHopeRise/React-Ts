import { createContext } from "react"

interface themeContextType {
    theme : string
toggleTheme : () => void
}
const AuthContext = createContext<themeContextType | null>(null)