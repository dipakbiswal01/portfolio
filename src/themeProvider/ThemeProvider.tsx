"use client";
import { useThemeContext } from "@/context/ThemeContext";
import { ReactNode, useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (mount) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
