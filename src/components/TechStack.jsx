import React from "react";
import useSoundHUD from "./useSoundHUD";

export default function TechStack() {
  const { playHover } = useSoundHUD();

  const technologies = [
    "Unity", "Unreal Engine", "C#", "C++",
    "Java", "Git", "Blender", "Python",
    "Html", "CSS", "SQL", "PLSQL",
    "COQL", "React", "JavaScript", "Odoo",
    "Adobe Premiere", "Adobe Photoshop", "Adobe After Effects", "Adobe Illustrator"
  ];

  return (
    <section className="section">
      <h2 style={{ letterSpacing: "0.2rem", marginBottom: "10px" }}>TECH STACK</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            onMouseEnter={playHover}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}