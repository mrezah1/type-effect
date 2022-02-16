const ul = document.querySelector(".list-typo");
const items = ul.querySelectorAll("li");
let counter = 0;

const changeCurrent = () => {
  items.forEach((i) => {
    i.classList.remove("show");
  });
  counter++;
  if (counter > items.length - 1) counter = 0;
  items[counter].classList.add("show");
};
setInterval(() => ul.classList.add("w-100"), 2000);
setInterval(() => {
  changeCurrent();
  ul.classList.remove("w-100");
}, 4000);
