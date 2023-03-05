import React, { useState } from "react";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ThemeProvider from "./context/Theme/Provider";
import { Theme } from "./context/Theme/Context";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);
  const onChengeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChengeTheme={onChengeTheme}>
      <Success />
      <ThemeSwitcher />
      <SignIn />
      <ThemeSwitcher />
      <Post />
      <ThemeSwitcher />
      <Home />
    </ThemeProvider>
  );
};
export default App;
