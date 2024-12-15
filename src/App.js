import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects.jsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={(darkTheme, lightTheme)}>
      <Router>
        <NavBar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          <ProjectDetails />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
