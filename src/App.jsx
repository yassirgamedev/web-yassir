import { useState, useEffect, useRef } from "react";
import BackgroundParticles from "./components/BackgroundParticles";
import BootScreen from "./components/BootScreen";
import NavbarHUD from "./components/NavbarHUD";
import MuteButton from "./components/MuteButton";
import Hero from "./components/Hero";
import PlayerProfile from "./components/PlayerProfile";
import StatsPanel from "./components/StatsPanel";
import SkillTree from "./components/SkillTree";
import TechStack from "./components/TechStack";
import QuestLog from "./components/QuestLog";
import ProjectsMap from "./components/ProjectsMap";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/sounds/Ambience.mp3");
    audio.loop = true;
    audio.volume = 0.12;
    audioRef.current = audio;

    const startAudioContext = () => {
      if (audioRef.current && !isBooting) {
        audioRef.current.play()
          .then(() => cleanListeners())
          .catch(() => {});
      }
    };

    const cleanListeners = () => {
      window.removeEventListener("mousemove", startAudioContext);
      window.removeEventListener("scroll", startAudioContext);
      window.removeEventListener("click", startAudioContext);
    };

    if (!isBooting) {
      window.addEventListener("mousemove", startAudioContext);
      window.addEventListener("scroll", startAudioContext);
      window.addEventListener("click", startAudioContext);
    }

    return () => {
      cleanListeners();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isBooting]);

  if (isBooting) {
    return <BootScreen onFinish={() => setIsBooting(false)} />;
  }

  return (
    <div className="app-container">
      <BackgroundParticles />
      
      {/* Esconde el menú izquierdo si estamos analizando un proyecto concreto */}
      {!selectedProject && <NavbarHUD />}
      
      <MuteButton audioRef={audioRef} />

      <main 
        className="content-wrapper" 
        style={{ 
          width: selectedProject ? "100%" : "calc(100% - 280px)", 
          marginLeft: selectedProject ? "0" : "280px",
          padding: selectedProject ? "40px 80px" : "40px 50px"
        }}
      >
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        ) : (
          <>
            <Hero />
            <PlayerProfile />
            <StatsPanel />
            <SkillTree />
            <TechStack />
            <QuestLog />
            <ProjectsMap onSelectProject={setSelectedProject} />
          </>
        )}
      </main>
    </div>
  );
}