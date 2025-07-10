import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
    output: "export",
    basePath: process.env.PAGES_BASE_PATH,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
