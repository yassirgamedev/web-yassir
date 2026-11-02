import React from "react";
import useSoundHUD from "./useSoundHUD";

export default function Hero() {
  const { playHover, playClick } = useSoundHUD();

  return (
    <section className="hero" id="hero">

      <div className="hero-overlay" />

      <div className="hero-content">

        <span className="hero-location">
          BARCELONA · SPAIN
        </span>

        <h1 className="hero-title">
          YASSIR
        </h1>

        <h1 className="hero-title surname">
          EL MOUNSI
        </h1>

        <h2 className="hero-subtitle">
          GAMEPLAY PROGRAMMER
        </h2>

        <p className="hero-desc">
          Game Development student specialized in gameplay systems,
          Unreal Engine and immersive interactive experiences.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/yassirgamedev"
            target="_blank"
            rel="noreferrer"
            className="menu-btn"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            GITHUB
          </a>

          <a
            href="/cv.pdf"
            download="Yassir_El_Mounsi_CV.pdf"
            className="menu-btn"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            DOWNLOAD CV
          </a>

        </div>

      </div>

    </section>
  );
}