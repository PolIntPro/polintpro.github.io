import {
    AppBar,
    Container,
    Link,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material"

export default function Navbar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h5"
                        component={"a"}
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "inherit",
                            fontFamily: "serif",
                            letterSpacing: "0.05em",
                        }}
                    >
                        PolIntPro
                    </Typography>

                    <Stack
                        direction={"row"}
                        sx={{
                            marginLeft: "2em",
                            paddingTop: "0.2em",
                            a: {
                                color: "white",
                            },
                        }}
                    >
                        <Link href="https://proposit.app/about">Proposit</Link>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
