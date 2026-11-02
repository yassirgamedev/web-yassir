import { useCallback } from "react";

export default function useSoundHUD() {
  // Sonido sutil al pasar el cursor (Hover)
  const playHover = useCallback(() => {
    const audio = new Audio("/sounds/hover.mp3");
    audio.volume = 0.15; // Volumen suave al 15% para que no sature
    audio.play().catch(() => {}); // Evita errores si el navegador bloquea el audio activo
  }, []);

  // Sonido seco al hacer click (Selección/Confirmación)
  const playClick = useCallback(() => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.35; // Volumen un poco más alto para el feedback de click
    audio.play().catch(() => {});
  }, []);

  return { playHover, playClick };
}