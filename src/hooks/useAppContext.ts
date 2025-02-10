// Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.eslint(react-refresh/only-export-components)
import { createContext, useContext } from 'react'
import { type AppContextProps } from '../types/ProgramTypes'

export const AppContext = createContext<AppContextProps | null>(null)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === null) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}
