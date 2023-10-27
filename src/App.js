import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection";
import Skills from "./components/SkillsSection";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={(darkTheme, lightTheme)}>
      <NavBar />
      <Body>
        <Hero />
        <Skills />
      </Body>
    </ThemeProvider>
  );
}

export default App;
