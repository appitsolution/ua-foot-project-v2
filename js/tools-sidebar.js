const buttonLine = document.querySelector("#line");
const buttonForm = document.querySelector("#form");
const buttonText = document.querySelector("#text");
const buttonGraph = document.querySelector("#graph");

const toolsLine = document.querySelector(".tools-line");
const toolsForm = document.querySelector(".tools-forms");
const toolsText = document.querySelector(".tools-texts");
const toolsGraph = document.querySelector(".tools-graph");

const closeLine = document.querySelector(".tools-line-exit");
const closeForm = document.querySelector(".tools-forms-button-close");
const closeText = document.querySelector(".tools-text-button-close");
const closeGraph = document.querySelector(".tools-graph-button-close");

const lineOpen = () => {
  toolsForm.style.opacity = "0";
  toolsText.style.opacity = "0";
  toolsGraph.style.opacity = "0";
  toolsForm.style.pointerEvents = "none";
  toolsText.style.pointerEvents = "none";
  toolsGraph.style.pointerEvents = "none";
  if (toolsLine.style.opacity === "1") {
    toolsLine.style.opacity = "0";
    toolsLine.style.pointerEvents = "none"
    return
  }
  toolsLine.style.opacity = "1";
  toolsLine.style.pointerEvents = "auto"
}
const lineClose = () => {
  toolsLine.style.opacity = "0"
}

const formOpen = () => {
  toolsLine.style.opacity = "0";
  toolsText.style.opacity = "0";
  toolsGraph.style.opacity = "0";
  toolsLine.style.pointerEvents = "none";
  toolsText.style.pointerEvents = "none";
  toolsGraph.style.pointerEvents = "none";
  if (toolsForm.style.opacity === "1") {
    toolsForm.style.opacity = "0"
    toolsForm.style.pointerEvents = "none"
    return
  }
  toolsForm.style.opacity = "1"
  toolsForm.style.pointerEvents = "auto"
}
const formClose = () => {
  toolsForm.style.opacity = "0"
}

const textOpen = () => {
  toolsLine.style.opacity = "0";
  toolsForm.style.opacity = "0";
  toolsGraph.style.opacity = "0";
  toolsLine.style.pointerEvents = "none";
  toolsForm.style.pointerEvents = "none";
  toolsGraph.style.pointerEvents = "none";
  if (toolsText.style.opacity === "1") {
    toolsText.style.opacity = "0"
    toolsText.style.pointerEvents = "none"
    return
  }
  toolsText.style.opacity = "1"
  toolsText.style.pointerEvents = "auto"
}
const textClose = () => {
  toolsText.style.opacity = "0"
}

const graphOpen = () => {
  toolsLine.style.opacity = "0";
  toolsForm.style.opacity = "0";
  toolsText.style.opacity = "0";
  toolsLine.style.pointerEvents = "none";
  toolsForm.style.pointerEvents = "none";
  toolsText.style.pointerEvents = "none";
  if (toolsGraph.style.opacity === "1") {
    toolsGraph.style.opacity = "0"
    toolsGraph.style.pointerEvents = "none"
    return
  }
  toolsGraph.style.opacity = "1"
  toolsGraph.style.pointerEvents = "auto"
}
const graphClose = () => {
  toolsGraph.style.opacity = "0"
  toolsGraph.style.pointerEvents = "none"
}

buttonLine.addEventListener("click", lineOpen);
closeLine.addEventListener("click", lineClose);

buttonForm.addEventListener("click", formOpen);
closeForm.addEventListener("click", formClose);

buttonText.addEventListener("click", textOpen);
closeText.addEventListener("click", textClose);

buttonGraph.addEventListener("click", graphOpen);
closeGraph.addEventListener("click", graphClose);