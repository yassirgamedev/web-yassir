export default function SkillTree() {
  const skills = [
    { name: "Unity", level: 100 },
    { name: "C#", level: 80 },
    { name: "Unreal Engine", level: 100 },
    { name: "C++", level: 70 },
    { name: "Gameplay Systems", level: 90 },
    { name: "AI Programming", level: 90 },
  ];

  return (
    <section className="section" id="skills">

      <h2>SKILL TREE</h2>

      <div className="skill-tree">

        {skills.map((skill) => (
          <div key={skill.name} className="skill-row">

            <span>{skill.name}</span>

            <div className="bar">
              <div
                className="fill"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>

            <span>{skill.level}%</span>

          </div>
        ))}

      </div>

    </section>
  );
}