import { useState } from 'react'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    const documentRoot = document.documentElement
    if (!darkMode) {
      documentRoot.classList.add('dark')
    } else {
      documentRoot.classList.remove('dark')
    }
  }

  return {
    darkMode,
    toggleDarkMode
  }
}
