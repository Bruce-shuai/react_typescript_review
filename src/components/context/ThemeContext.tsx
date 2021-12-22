import { createContext } from 'react';
import { theme } from './theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {
  // 这里的value值的类型和createContext的参数类型是一致的
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

