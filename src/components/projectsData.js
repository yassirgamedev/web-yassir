export const projectsData = [
  {
    id: "project-horror",
    title: "Never Awake",
    engine: "Unreal Engine 5",
    desc: "Psychological horror mechanics, immersive environmental storytelling, and dynamic sanity systems.",
    longDesc: "This project focuses on creating a first-person psychological horror game in Unreal Engine 5 using Blueprint and C++. It features modular interaction systems, dynamic event triggering, AI-driven scare sequences, and immersive environmental storytelling. The game combines exploration, puzzle-solving, and reality-shifting mechanics to maintain tension while delivering a narrative-focused horror experience inspired by classic psychological horror titles.",
    video: "/videos/survival_clip.mp4", // Coloca tus vídeos locales aquí
    images: [
      "/public/images/neverawake (1).png", // Coloca tus capturas locales aquí
      "/public/images/neverawake (2).png",
    ],
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Chaos Physics"]
  },
  {
    id: "Parkour-Project",
    title: "Parkour System",
    engine: "Unreal Engine 5",
    desc: "Advanced parkour movement mechanics and animation-driven traversal systems for fluid environmental navigation.",
    longDesc: "This project focuses on creating a modular parkour movement framework in Unreal Engine 5 using Blueprint and C++. It features advanced traversal mechanics such as wall running, mantling, vaulting, climbing, and ledge traversal, supported by animation-driven locomotion systems and state-based movement logic. The framework emphasizes smooth animation transitions, responsive player input, and scalable architecture, making it suitable for integration into action-adventure, open-world, and first-person gameplay experiences.",
    video: "",
    images: ["/images/ai_1.png"],
    technologies: ["Unity", "C#", "HFSM", "NavMesh AI"]
  },
  {
    id: "Shooting-Project",
    title: "Shooting System",
    engine: "Unreal Engine 5",
    desc: "Advanced shooting mechanics, survival features, and adaptive inventory management systems.",
    longDesc: "This project focuses on creating a highly responsive modular shooting framework in UE5 using C++. It features an advanced inventory system with weight calculation, grid sorting, and an adaptive weapon attachment system that affects gun handling and recoil dynamically.",
    video: "",
    images: ["/images/physics_1.png"],
    technologies: ["C++", "Data Structures", "Vector Math", "SAT Collision"]
  }
];