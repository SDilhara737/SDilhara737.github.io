const projects = [
  {
    title: "Python Project",
    description: "Some Python project from my GitHub.",
    link: "https://github.com/SDilhara737/python"
  },
  {
    title: "My Profile Repo",
    description: "This profile repository.",
    link: "https://github.com/SDilhara737/sdilhara737"
  }
];

const container = document.getElementById("project-list");
projects.forEach(proj => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3><a href="${proj.link}" target="_blank">${proj.title}</a></h3>
    <p>${proj.description}</p>
  `;
  container.appendChild(div);
});
