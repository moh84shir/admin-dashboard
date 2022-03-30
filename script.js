// Menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// hover class menu
let list = document.querySelectorAll(".navigation ul li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));
