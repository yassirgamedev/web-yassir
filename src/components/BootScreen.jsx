import React, { useState, useEffect } from "react";

export default function BootScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // La barra de progreso se ejecuta e inicia sola de forma automática inmediatamente
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinish(); // Entra directo al portfolio sin clics al llegar al 100%
          }, 300);
          return 100;
        }
        return oldProgress + 5; // Velocidad de la carga automática
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="boot-screen" style={{ textAlign: "center", userSelect: "none" }}>
      <div>
        <h2 style={{ letterSpacing: "0.15rem", marginBottom: "20px" }}>
          {progress < 100 ? "LOADING SYSTEM REPOSITORIES..." : "SYSTEM READY"}
        </h2>
        <div className="progress-bar" style={{ margin: "0 auto" }}>
          <div className="progress" style={{ width: `${progress}%`, transition: "width 0.08s linear" }}></div>
        </div>
        <p style={{ marginTop: "15px", fontSize: "0.9rem", color: "#b5a48c" }}>
          {progress}%
        </p>
      </div>
    </div>
  );
}