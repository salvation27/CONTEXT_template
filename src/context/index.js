import { createContext } from "react"
import { theme } from "./theme-context"
import { menu } from "./menu-context"
import { user } from "./userContext"

export const state = {
    theme,
    menu,
    user,
}

export const stateContext = createContext(state)