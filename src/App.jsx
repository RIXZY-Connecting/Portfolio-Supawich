import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
  education,
  experiences,
  ryuprojects,
  ryuskills,
} from "./data/config";
import { useTheme } from "./hooks/useTheme";
import { useWindowManager } from "./hooks/useWindowManager";
import { LanguageProvider } from "./context/LanguageContext";

import WinTaskbar from "./components/WinTaskbar";
import HeroHeader from "./components/HeroHeader";
import BentoGrid from "./components/BentoGrid";

const Home = ({ windowManager }) => {
  return (
    <main className="win-desktop-area">
      {/* Hero Header — "Welcome" Window */}
      <HeroHeader mainBody={mainBody} about={about} />

      {/* Content Windows */}
      <BentoGrid
        about={about}
        skills={ryuskills}
        experiences={experiences}
        education={education}
        ryuprojects={ryuprojects}
        repos={repos}
        getInTouch={getInTouch}
        windowManager={windowManager}
      />
    </main>
  );
};

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const windowManager = useWindowManager();

  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
        <div className="win-desktop-shell" data-theme={theme}>
          {/* Desktop Wallpaper Background */}
          <div className="win-wallpaper" aria-hidden="true" />

          {/* Windows Taskbar / Top Header */}
          <WinTaskbar
            theme={theme}
            toggleTheme={toggleTheme}
            windowManager={windowManager}
            profileImage={about.imageLink}
            profileName={`${mainBody.firstName} ${mainBody.nickname ? `(${mainBody.nickname})` : ""}`}
          />

          <Routes>
            <Route path="/" element={<Home windowManager={windowManager} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
