import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Header,
  About,
  Timeline,
  Projects,
  Contact,
  Bottom,
  Skills,
} from "./components";
import LoadingScreen from "./components/loadingScreen";
import ScrollEffect from "./hooks/ScrollEffect";

const App = () => {
  return (
    <BrowserRouter>
      <LoadingScreen>
        {}
        <div className="scroll-smooth">
          {}

          <section id="home">
            <Hero />
          </section>
          <Header />

          {}
          <ScrollEffect direction="right">
            <section id="about" className="scroll-mt-24">
              <About />
            </section>
          </ScrollEffect>

          {}
          <ScrollEffect direction="left">
            <section id="timeline" className="scroll-mt-24">
              <Timeline />
            </section>
          </ScrollEffect>

          {/* Skills Section */}
          <ScrollEffect direction="right">
            <section id="skills" className="scroll-mt-24">
              <Skills />
            </section>
          </ScrollEffect>
          {}
          <ScrollEffect>
            <section id="projects" className="scroll-mt-24">
              <Projects />
            </section>
          </ScrollEffect>

          {}
          <ScrollEffect>
            <section id="contact" className="scroll-mt-24">
              <Contact />
            </section>
          </ScrollEffect>
        </div>
        <Bottom />
      </LoadingScreen>
    </BrowserRouter>
  );
};

export default App;
