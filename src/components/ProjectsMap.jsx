import React from "react";
import useSoundHUD from "./useSoundHUD";
import { projectsData } from "./projectsData";

export default function ProjectsMap({ onSelectProject }) {
  const { playHover, playClick } = useSoundHUD();

  return (
    <section className="section" id="projects" style={{ width: "100%", marginTop: "40px" }}>
      <h2 style={{ letterSpacing: "0.2rem", marginBottom: "20px" }}>
        &gt; REPOSITORY::PERSONAL_PROJECTS
      </h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="project-card"
            style={{ 
              cursor: "pointer",
              background: "rgba(18, 20, 23, 0.6)",
              border: "1px solid rgba(181, 164, 140, 0.2)",
              padding: "24px",
              borderRadius: "2px",
              position: "relative",
              backdropFilter: "blur(4px)",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={playHover}
            onClick={() => {
              playClick();
              onSelectProject(project);
            }}
          >
            {/* Esquina superior izquierda estilo retícula militar */}
            <div style={{ 
              position: "absolute", 
              top: "0", 
              left: "0", 
              width: "8px", 
              height: "8px", 
              borderTop: "2px solid #b5a48c", 
              borderLeft: "2px solid #b5a48c" 
            }} />

            <div style={{ fontSize: "0.7rem", color: "rgba(181, 164, 140, 0.5)", marginBottom: "10px", letterSpacing: "0.05rem" }}>
              FILE_REF // {project.id.toUpperCase()}
            </div>
            
            <h3 style={{ margin: "0 0 6px 0", color: "#ffffff", fontSize: "1.25rem" }}>
              {project.title.toUpperCase()}
            </h3>
            
            <h5 style={{ color: "#e59866", fontSize: "0.8rem", margin: "0 0 16px 0", letterSpacing: "0.05rem" }}>
              SYSTEM_CORE :: {project.engine.toUpperCase()}
            </h5>
            
            <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}