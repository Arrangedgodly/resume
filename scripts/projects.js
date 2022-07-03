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
const projectListElement = document.querySelector(".list_project");
let projectCount = 0;
const leftArrow = document.querySelector(".icon_left-arrow");
const rightArrow = document.querySelector(".icon_right-arrow");
const leftArrowIcon = document.querySelector(".fa-arrow-left");
const rightArrowIcon = document.querySelector(".fa-arrow-right");
const startingProject = createProject(projects[0]);
projectList.append(startingProject);

checkArrows(projectCount);

function checkArrows(num) {
  if (num === 0) {
    leftArrowIcon.setAttribute("style", "opacity: 0;");
  } else if (num > 0) {
    leftArrowIcon.setAttribute("style", "opacity: 1;");
  };
  if (num === projects.length) {
    rightArrowIcon.setAttribute("style", "opacity: 0;");
  } else if (num < projects.length) {
    rightArrowIcon.setAttribute("style", "opacity: 1;");
  }
}

function updateProject(num) {
  let tempProject = createProject(projects[num]);
  projectList.replaceChildren(tempProject);
  checkArrows(projectCount);
}

function clickRightArrow() {
  projectCount++;
  updateProject(projectCount);
}

function clickLeftArrow() {
  projectCount--;
  updateProject(projectCount);
}

leftArrow.addEventListener("click", clickLeftArrow);
rightArrow.addEventListener("click", clickRightArrow);