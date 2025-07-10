import type { Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { Container, Paper, ThemeProvider } from "@mui/material"
import { MainTheme } from "@/theme"
import Navbar from "@/components/navbar"

const roboto = Source_Serif_4({
    // weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "auto",
    variable: "--pip-font",
})

export const metadata: Metadata = {
    title: "PolIntPro",
    description: "Political Integrity Project",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${roboto.variable} antialiased`}>
            <body
                style={{
                    display: "flex",
                    flexFlow: "column",
                    maxHeight: "100vh",
                }}
            >
                <AppRouterCacheProvider>
                    <ThemeProvider theme={MainTheme}>
                        <Navbar />
                        <Container
                            sx={{
                                marginTop: "2em",
                            }}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: "1em",
                                }}
                            >
                                {children}
                            </Paper>
                        </Container>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
