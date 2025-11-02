const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute definition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec decoupe laser sur mesure</span>"
	}
];

const bannerImg = document.querySelector(".banner-img");
const bannerTagline = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const prevButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");

let current = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  current = index;

  bannerImg.src = "./assets/images/slideshow/" + slides[current].image;
  bannerTagline.innerHTML = slides[current].tagLine;

  dots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === current);
  });
}

const dots = slides.map((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.onclick = () => showSlide(i);
  dotsContainer.appendChild(dot);
  return dot;
});

prevButton.onclick = () => showSlide(current - 1);
nextButton.onclick = () => showSlide(current + 1);

prevButton.addEventListener("click", () => {
  console.log("Flèche gauche cliquée !");
});

nextButton.addEventListener("click", () => {
  console.log("Flèche droite cliquée !");
});

showSlide(current);
