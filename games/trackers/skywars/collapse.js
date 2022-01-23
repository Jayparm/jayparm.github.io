function initCollapse() {
  let sessionCollapse = document.getElementById("session");
  sessionCollapse
    .getElementsByTagName("IMG")
    .item(0)
    .addEventListener("click", () => {
      let children = sessionCollapse.getElementsByTagName("SECTION");
      collapse(children);
    });
  let gameHistoryCollapse = document.getElementById("lastGame");
  gameHistoryCollapse
    .getElementsByTagName("IMG")
    .item(0)
    .addEventListener("click", () => {
      let children = gameHistoryCollapse.getElementsByTagName("SECTION");
      collapse(children);
    });
  let currentMapCollapse = document.getElementById("currentMap");
  currentMapCollapse
    .getElementsByTagName("IMG")
    .item(0)
    .addEventListener("click", () => {
      let children = currentMapCollapse.getElementsByTagName("SECTION");
      collapse(children);
    });
}

function collapse(children) {
  for (let i = 0; i < children.length; i++) {
    let section = children.item(i);
    if (section.style.display == "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
}
