import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const useAppContext = () => useContext(AppContext)

export const useStore = () => useAppContext().store

export const useLogic = () => useAppContext().logic