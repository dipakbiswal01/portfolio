"use client";

import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
const ISSERVER = typeof window === "undefined";

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  toggle: () => void;
};
export const ThemeContext = createContext<ThemeContext | null>(null);

const getFromLocalStorage = () => {
  if (!ISSERVER) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<any>(() => getFromLocalStorage());

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("you need to define your theme provider");
  }
  return theme;
}
