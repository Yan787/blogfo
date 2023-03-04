import React, { useState } from "react";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ThemeProvider from "./context/Theme/Provider";
import { Theme } from "./context/Theme/Context";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);
  const onChengeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChengeTheme={onChengeTheme}>
      <div>
        <Post />
        <ThemeSwitcher />
        <Home />
      </div>
    </ThemeProvider>
  );
};
export default App;
