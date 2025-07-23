import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const storedTheme = sessionStorage.getItem("isDarkMode") === "true"
    const [isDarkMode, setIsDarkMode] = useState(storedTheme);

    useEffect(() => {
        sessionStorage.setItem("isDarkMode", isDarkMode)
        
        // Apply theme to document root using data attribute
        if (isDarkMode) {
            document.documentElement.setAttribute("data-theme", "dark")
        } else {
            document.documentElement.removeAttribute("data-theme")
        }
    }, [isDarkMode])

    const toggleTheme = () => { 
        setIsDarkMode((prevMode) => !prevMode)
    }
    
    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}