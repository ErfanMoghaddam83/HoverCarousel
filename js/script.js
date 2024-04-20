var toyota = document.querySelector(".toyota");
var mitsubishi = document.querySelector(".mitsubishi");
var dodge = document.querySelector(".dodge");
var bmw = document.querySelector(".bmw");
var ford = document.querySelector(".ford");
var elements = [toyota, mitsubishi, dodge, bmw, ford];
function removeActiveClass() {
  elements.forEach((element) => {
    element.classList.remove("active");
    element.src = element.dataset.originalSrc;
  });
}

function addActiveClass(element) {
  removeActiveClass();
  element.classList.add("active");
}
elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    addActiveClass(element);
    toyota.addEventListener("mouseover", () => {
      toyota.style.backgroundImage = "url(img/ToyotaCar.jpg) ";
    });
    mitsubishi.addEventListener("mouseover", () => {
      mitsubishi.style.backgroundImage = "url(img/mitsubishi-lancerCar.jpg) ";
    });
    dodge.addEventListener("mouseover", () => {
      dodge.style.backgroundImage = "url(img/dodgeCar.jpg) ";
    });
    bmw.addEventListener("mouseover", () => {
      bmw.style.backgroundImage = "url(img/bmwCar.jpg) ";
    });
    ford.addEventListener("mouseover", () => {
      ford.style.backgroundImage = "url(img/fordCar.jpg) ";
    });
  });
  element.addEventListener("mouseout", () => {
    removeActiveClass();
    toyota.style.backgroundImage = "url(img/toyota.jpg)";
    mitsubishi.style.backgroundImage = "url(img/mitsubishi.jpg) ";
    dodge.style.backgroundImage = "url(img/dodge.jpg) ";
    bmw.style.backgroundImage = "url(img/bmw.jpg) ";
    ford.style.backgroundImage = "url(img/ford.jpg) ";
  });
});
