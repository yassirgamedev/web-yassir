import React, { useEffect } from "react";
import useSoundHUD from "./useSoundHUD";

export default function ProjectDetail({ project, onBack }) {
  const { playHover, playClick } = useSoundHUD();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page" style={{ padding: "40px 0", color: "#ffffff", width: "100%" }}>
      
      <button 
        onClick={() => { playClick(); onBack(); }}
        onMouseEnter={playHover}
        style={{
          background: "transparent",
          border: "1px solid rgba(181, 164, 140, 0.4)",
          color: "#b5a48c",
          padding: "10px 20px",
          fontFamily: "inherit",
          cursor: "pointer",
          marginBottom: "30px",
          letterSpacing: "0.1rem",
          borderRadius: "2px"
        }}
        className="menu-btn"
      >
        🡨 BACK TO HOME
      </button>

      <header style={{ borderBottom: "1px solid rgba(181,164,140,0.2)", paddingBottom: "20px", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.5rem", letterSpacing: "0.2rem", color: "#b5a48c", margin: "0 0 10px 0" }}>
          {project.title.toUpperCase()}
        </h1>
        <span style={{ color: "#e59866", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
          SYSTEM CORE // {project.engine.toUpperCase()}
        </span>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        
        {project.video && (
          <div style={{ border: "1px solid rgba(181,164,140,0.2)", background: "#000", borderRadius: "2px", overflow: "hidden" }}>
            <video src={project.video} controls width="100%" style={{ display: "block" }} />
          </div>
        )}

        <div>
          <h2 style={{ color: "#b5a48c", letterSpacing: "0.1rem", fontSize: "1.2rem", marginBottom: "15px" }}>
            &gt; INSTANCE_OVERVIEW
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.8", fontSize: "1.05rem" }}>
            {project.longDesc}
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "30px" }}>
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                onMouseEnter={playHover}
                style={{
                  background: "rgba(181, 164, 140, 0.06)",
                  border: "1px solid rgba(181, 164, 140, 0.25)",
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  color: "#e59866",
                  borderRadius: "2px",
                  letterSpacing: "0.05rem"
                }}
              >
                #{tech.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ color: "#b5a48c", letterSpacing: "0.1rem", fontSize: "1.2rem", marginBottom: "20px" }}>
            &gt; SENSOR_DATA_CAPTURES
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {project.images.map((imgUrl, index) => (
              <div 
                key={index} 
                style={{ border: "1px solid rgba(181,164,140,0.2)", borderRadius: "2px", overflow: "hidden" }}
              >
                <img src={imgUrl} alt="Visual system build" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}