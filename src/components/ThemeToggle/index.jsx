'use client';
import { useState } from "react";
import { Sun, Moon } from "react-feather";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
  };
  
  return (
    <button onClick={toggleTheme} className="absolute top-8 right-8 animate-bounce">
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

export default ThemeToggle;