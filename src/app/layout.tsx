import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
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
        <html lang="en">
            <body
                className={`${roboto.variable} antialiased`}
                style={{
                    display: "flex",
                    flexFlow: "column",
                    maxHeight: "100vh",
                }}
            >
                {children}
            </body>
        </html>
    )
}
