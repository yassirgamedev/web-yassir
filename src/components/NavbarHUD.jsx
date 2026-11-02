import React from "react";
import useSoundHUD from "./useSoundHUD";

export default function NavbarHUD() {
  const { playHover, playClick } = useSoundHUD();

  return (
    <nav className="hud">
      <ul>
        <li>
          <a 
            href="#hero" 
            onMouseEnter={playHover} 
            onClick={playClick}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#player-data" /* Cambiado para que vaya a Player Data */
            onMouseEnter={playHover} 
            onClick={playClick}
          >
            About Me
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            onMouseEnter={playHover} 
            onClick={playClick}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onMouseEnter={playHover} 
            onClick={playClick}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}