'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
})

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem('embsys-theme') || 'light'
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
    }, [])

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
        localStorage.setItem('embsys-theme', next)
    }

    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{children}</div>
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
