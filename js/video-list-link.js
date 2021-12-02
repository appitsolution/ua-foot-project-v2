const openInput = document.querySelector(".head-button.link-youtube");
const inputLink = document.querySelector(".head-button-toomb-link.link-youtube");
const closeButton = document.querySelector(".head-button-toomb-close");
const avatarText = document.querySelector(".head-avatar-text");
const listMenu = document.querySelector(".block-video-menu");

const openForm = () => {
  avatarText.classList.add("button-close");
  openInput.classList.add("button-close");
  inputLink.classList.remove("button-close");
}
const closeForm = () => {
  openInput.classList.remove("button-close");
  inputLink.classList.add("button-close");
  avatarText.classList.remove("button-close")
}
const menuLink = (evn) => {
  if (evn.target.nodeName !== "A") return;
  Array.prototype.forEach.call(listMenu.children, num => {
    num.children[0].classList.remove('active');
  });
  
  evn.target.classList.add("active")
}

listMenu.addEventListener('click', menuLink)
closeButton.addEventListener("click", closeForm);
openInput.addEventListener("click", openForm);