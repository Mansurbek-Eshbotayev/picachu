let elList = document.querySelector(".pocemon__list");

var fragment = new DocumentFragment();
let elTemplate = document.querySelector(".el-template").content;
// console.log(elTemplate);

for (let pocemon of pokemons) {
  let cloneTemplate = elTemplate.cloneNode(true);
  cloneTemplate.querySelector(".pocemon__item");
  cloneTemplate.querySelector(".pocemon__title").textContent = pocemon.name;
  cloneTemplate.querySelector(".pocemon__img").src = pocemon.img;
  cloneTemplate.querySelector(".pocemon__text").textContent = pocemon.type;
  fragment.appendChild(cloneTemplate);
}

elList.appendChild(fragment);
