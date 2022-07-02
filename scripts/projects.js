function createProject(data) {
  const projectTemplate = document.querySelector("#project").content;
  const projectElement = projectTemplate.querySelector(".list_project").cloneNode(true);
  const projectIframeLink = projectElement.querySelector(".image_l");
  const projectALink = projectElement.querySelector(".link");
  const projectDescription = projectElement.querySelector(".list_sm_alt_projects");
  projectIframeLink.setAttribute("src", data.link);
  projectIframeLink.setAttribute("alt", data.name);
  projectALink.setAttribute("src", data.link);
  projectALink.insertAdjacentText("afterbegin", data.name);
  projectDescription.textContent = data.desc;
  return projectElement;
}

const projectList = document.querySelector(".list_flex_project");

for (let i = 0; i < projects.length; i++) {
  const project = createProject(projects[i]);
  projectList.append(project);
};