import React, { useState, useEffect } from "react";
import useSoundHUD from "./useSoundHUD";

export default function MuteButton({ audioRef }) {
  const [isMuted, setIsMuted] = useState(false);
  const { playHover, playClick } = useSoundHUD();

  const toggleMute = () => {
    playClick(); // Sonido táctico de click al presionar
    if (audioRef && audioRef.current) {
      const currentMuted = !audioRef.current.muted;
      audioRef.current.muted = currentMuted;
      setIsMuted(currentMuted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      onMouseEnter={playHover}
      style={{
        position: "fixed",
        top: "30px",
        right: "40px",
        zIndex: 200, /* Por encima de todo el contenido y las partículas */
        background: "rgba(14, 15, 17, 0.6)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(181, 164, 140, 0.3)",
        color: isMuted ? "rgba(255, 255, 255, 0.4)" : "#b5a48c",
        padding: "10px 15px",
        fontFamily: '"Azeret Mono", monospace',
        fontSize: "0.85rem",
        letterSpacing: "0.1rem",
        cursor: "pointer",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}
      className="mute-btn-hud"
    >
      <span>{isMuted ? "AUDIO: MUTED" : "AUDIO: ON"}</span>
      <span>{isMuted ? "🔇" : "🔊"}</span>
    </button>
  );
}