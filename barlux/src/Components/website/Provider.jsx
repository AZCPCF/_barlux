import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { TokenProvider } from "../../Store/TokenContext";
import Theme from "../../Styles/Theme";
import { ThemeProvider } from "@mui/material";
import { ResponsiveProvider } from "../../Store/ResponsiveContext"
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Provider(props) {
  return (
    <CacheProvider value={cacheRtl}>
      <TokenProvider>
        <ResponsiveProvider>
          <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
        </ResponsiveProvider>
      </TokenProvider>
    </CacheProvider>
  );
}
