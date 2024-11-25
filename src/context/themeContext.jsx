import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme === "dark");

  const themeHandler = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return !prevTheme;
    });
  };

  useEffect(() => {
    const currentTheme = isDarkTheme ? "dark" : "light";
    document.body.className = currentTheme;
    localStorage.setItem("theme", currentTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

