"use client"
import { createTheme } from "@mui/material"

export const RootThemeOpts: Parameters<typeof createTheme>[0] = {
    cssVariables: true,
    colorSchemes: {
        dark: true,
        light: true,
    },
    typography: {
        fontFamily: "var(--pip-font)",
    },
}

export const MainTheme = createTheme({
    ...RootThemeOpts,
    cssVariables: {
        cssVarPrefix: "pip",
    },
    colorSchemes: {
        dark: false,
    },
    palette: {
        mode: "light",
    },
})
