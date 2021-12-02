const selectLang = document.querySelector(".header-lang-select");
const langList = document.querySelector(".lang-select");
const langClick = (evn) => {
  evn.preventDefault();
  switch (evn.srcElement.textContent) {
    case "ua":
      selectLang.textContent = "ua";
      break;
    case "ru":
      selectLang.textContent = "ru";
      break;
    case "en":
      selectLang.textContent = "en";
      break;
  }
}
langList.addEventListener("click", langClick);