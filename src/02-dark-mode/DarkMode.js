import { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = (isDarkMode) => {
    setDarkMode(isDarkMode);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : ""} page`}>
      <button
        onClick={() => changeMode(true)}
        className="dark-mode-button"
        type="button"
      >
        Dark Mode
      </button>
      <button
        onClick={() => changeMode(false)}
        className="light-mode-button"
        type="button"
      >
        Light Mode
      </button>
    </div>
  );
}
