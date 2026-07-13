function Projects() {
  const projects = [
    {
      title: "🍽️ YouChef - Recipe Book",
      tech: "React | Node.js | Express | MongoDB",
      description:
        "A full-stack recipe management application with complete CRUD functionality. Built reusable React components, created REST APIs using Node.js and Express, and integrated MongoDB Atlas for cloud-based data storage.",
      github: "https://github.com/yogitabachhav22/recipebook-new",
    },
    {
      title: "✈️ Airamaze Flight Booking System",
      tech: "Angular | Node.js | Express | MongoDB",
      description:
        "A full-stack flight booking application with user and admin modules, CRUD operations, Angular routing, form validation, and REST API integration.",
      github: "https://github.com/yogitabachhav22/AiramazeApp",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;



