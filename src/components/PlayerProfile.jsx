import React from "react";

export default function PlayerProfile() {
  return (
    <section className="section" id="player-data">
      <h2 style={{ letterSpacing: "0.2rem", marginBottom: "10px" }}>PLAYER DATA</h2>
      <div className="panel">
        <div className="profile-grid">
          
          {/* CONTENEDOR DE LA IMAGEN DE PERFIL */}
          <div style={{ 
            width: "200px", 
            height: "200px", 
            background: "rgba(255,255,255,0.02)", 
            border: "1px solid rgba(181,164,140,0.3)",
            overflow: "hidden", /* Recorta los bordes de la foto si es más grande */
            borderRadius: "4px"
          }}>
            <img 
              src="/dante.jpg" /* Apunta directo a la raíz de tu carpeta public */
              alt="Yassir El Mounsi Profile" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover" /* Ajusta y centra la imagen automáticamente para que no se estire */
              }} 
            />
          </div>
          
          {/* INFORMACIÓN DEL JUGADOR */}
          <div>
            <h3 style={{ color: "#b5a48c", marginBottom: "15px" }}>Age 23 - Gameplay Developer - Based in Barcelona</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
              I'm a Game Development student at the ENTI-UB in Barcelona, driven by a lifelong passion for video games and interactive experiences. For me, games are more than entertainment—they are a unique form of art capable of inspiring, connecting, and creating unforgettable memories. My dream is to contribute to the future of this industry and be part of the teams that shape the next generation of games, leaving a meaningful mark on the history of video games.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}