import { Typography } from "@mui/material"
import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
        h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
        h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
        h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
        img: (props) => <Image sizes="100vw" {...(props as ImageProps)} />,
        p: ({ children }) => (
            <Typography variant="body1">{children}</Typography>
        ),
    }
}
