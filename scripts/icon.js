const iconsArea = document.querySelector(".icons");

function createIcon(data) {
  const iconTemplate = document.querySelector("#icon").content;
  const iconElement = iconTemplate.querySelector(".icon_new").cloneNode(true);
  const iconElementImage = iconElement.querySelector(".icon");
  const iconElementDesc = iconElement.querySelector(".icon__desc");
  iconElementImage.setAttribute("src", data.link);
  iconElementImage.setAttribute("alt", `Official Icon for ${data.name}`);
  iconElementDesc.textContent = data.name;
  return iconElement;
}

function renderIcon(data) {
  iconsArea.append(createIcon(data));
}

icons.forEach((icon) => renderIcon(icon));