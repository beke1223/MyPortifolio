import Card from "react-bootstrap/Card";
var Lanskils = [
  {
    language: "C++",
    value: 60,
  },
  {
    language: "Java",
    value: 70,
  },
  {
    language: "Python",
    value: 80,
  },
  {
    language: "JavaScript",
    value: 80,
  },
  {
    language: "Html",
    value: 85,
  },
  {
    language: "Css",
    value: 90,
  },
  {
    language: "Bootstrap",
    value: 90,
  },
  {
    language: "React Js",
    value: 70,
  },
  {
    language: "Flutter",
    value: "loading ...",
  },
];

function Skills() {
  return (
    <Card
      style={{
        position: "absolute",
        backgroundColor: "transparent",
        height: "30%",
        width: "70%",
        left: "20%",
        border: "none",
      }}
    >
      <div className="skills-Circular">
        <div className="langs">
          {Lanskils.map((skill) => {
            return (
              <div
                className="indLang "
                style={{
                  clipPath: "circle()",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>{skill.language}</p>
                <p>{skill.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
export default Skills;
