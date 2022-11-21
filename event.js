
//exo 1
let footerClick = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerClick ++;
	console.log(`Clique ${footerClick}`);
});


// exo 2
let navbar = document.getElementById("navbarHeader");
let hamburger = document.querySelector("span.navbar-toggler-icon")
function Collapse() {
  navbar.classList.toggle("collapse");
};
hamburger.addEventListener("click",Collapse);




//exo 3
let firstCard = document.getElementsByClassName("card")[0];
let editCard = firstCard.getElementsByClassName("btn")[1];
function red() {
  firstCard.style.color = 'red';
};
editCard.addEventListener("click",red);


// exo 4
let secondCard = document.getElementsByClassName("card")[1];
let editSecondCard = secondCard.getElementsByClassName("btn")[1];
function green() {
  if (secondCard.style.color === 'green') {
  secondCard.style.color = '' ;
  } else {
    secondCard.style.color = 'green'
};}
editSecondCard.addEventListener("click",green);





// exo 5
var navbar2 = document.querySelector("div.navbar")
var link = document.querySelector("link")

console.log(navbar2)


function Nucleaire() {
  if (link.disabled !== true) {
  link.disabled = true;
} else {
  link.disabled = false;
}
}
navbar2.addEventListener("dblclick",Nucleaire);


// exo 6


const articles = document.querySelectorAll('card');

for (let i = 0; i < articles.length; i++) {
  articles[i].style.fontFamily = 'Comic Sans MS';
}



