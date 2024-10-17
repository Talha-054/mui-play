import Home from "./components/Home/Home";
import "./utils/i18/i18";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme/theme.ts";
import { useAppSelector } from "./hooks/useAppSelector.ts";

function App() {
  const palette = useAppSelector((state) => state.themeSlice.palette);
  let selectedTheme = palette.mode == "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
