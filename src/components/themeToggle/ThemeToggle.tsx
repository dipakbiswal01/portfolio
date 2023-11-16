"use client";

import React from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useThemeContext();

  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={toggle}
    >
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={"/sun.png"} alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
