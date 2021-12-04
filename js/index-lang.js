const selectLang = document.querySelector(".lang-select-button");
const langList = document.querySelector(".lang-select");
const langClick = (evn) => {
  if (evn.target.nodeName !== "P") {
    return
  }
  const list = [...langList.children];

  list.forEach(num => {
    num.classList.toggle("close-lang")
  });
}
const selectlan = (evn) => {
  if (evn.target.nodeName !== "P") {
    return
  }
  if (evn.target.outerText === selectLang.innerText) {
    return
  }
  const name = selectLang.children[0].textContent;
  selectLang.children[0].textContent = evn.target.outerText;
  evn.target.textContent = name;
}
langList.addEventListener("click", selectlan)
langList.addEventListener("click", langClick);