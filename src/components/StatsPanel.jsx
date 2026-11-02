import React from "react";
import useSoundHUD from "./useSoundHUD";

export default function StatsPanel() {
  const { playHover } = useSoundHUD();

  const developerStats = [
    { 
      stat: "+3", 
      label: "PROJECTS", 
      sub: "Including prototypes, custom tools, and playable games." 
    },
    { 
      stat: "+1", 
      label: "YEARS IN ENGINES", 
      sub: "Specialized in Unity and Unreal Engine environments." 
    },
    { 
      stat: "200h", 
      label: "Stats", 
      sub: "Accumulated time spent building, refactoring, and debugging codebase architectures" 
    },
    { 
      stat: "100%", 
      label: "OPTIMIZED CODE", 
      sub: "Strict focus on OOP, design patterns, and performance." 
    }
  ];

  return (
    <section className="section" id="stats">
      <h2 style={{ letterSpacing: "0.2rem", marginBottom: "20px" }}>DEVELOPER STATS</h2>
      
      <div className="stats-grid">
        {developerStats.map((item, index) => (
          <div 
            key={index} 
            className="stat-card"
            onMouseEnter={playHover}
            style={{ textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <h3 style={{ fontSize: "2.5rem", color: "#b5a48c", fontFamily: "inherit", margin: 0 }}>
                {item.stat}
              </h3>
              <h4 style={{ fontSize: "0.9rem", letterSpacing: "0.1rem", margin: "5px 0 10px 0", color: "#ffffff" }}>
                {item.label}
              </h4>
            </div>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.4", margin: 0 }}>
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}