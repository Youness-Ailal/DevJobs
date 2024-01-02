import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkThemeContext = createContext();

function DarkThemeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );
  const toggleTheme = () => setIsDark(prev => !prev);
  return (
    <DarkThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}>
      {children}
    </DarkThemeContext.Provider>
  );
}
export function useDarkTheme() {
  const context = useContext(DarkThemeContext);
  if (context === null)
    throw new Error("useDarkTheme context used outside DarkThemeProvider");
  return context;
}
export default DarkThemeProvider;
