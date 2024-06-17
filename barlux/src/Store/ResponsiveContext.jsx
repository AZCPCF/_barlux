// TokenContext.js
import { useMediaQuery, useTheme } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

const ResponsiveContext = createContext();

const ResponsiveProvider = ({ children }) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.down('xl'))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <ResponsiveContext.Provider value={{ xl,lg,md,sm,xs }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export { ResponsiveProvider, ResponsiveContext };
