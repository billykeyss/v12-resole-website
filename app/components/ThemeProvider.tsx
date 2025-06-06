"use client";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import theme from "../theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
