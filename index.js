import "./index.css";
import MY_IMAGE from './assets/image.png';
const img = document.createElement("img");


img.src = MY_IMAGE;
document.body.append(img);
document.body.insertAdjacentHTML('afterbegin', "I love JavaScript");

function hello() {
  console.log("Hello world!");
}

hello();
