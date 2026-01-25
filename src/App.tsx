import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Router } from "@tanstack/react-router";
// for type autocomplete
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof Router
  }
}


export default function App() {
  return <MantineProvider theme={theme}>App</MantineProvider>;
}
