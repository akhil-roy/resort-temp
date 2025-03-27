// Header animation and back-to-top button based on scroll

// Get the button
let header = document.getElementById("header");
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    header.classList.add("active");
    mybutton.style.opacity = "1";
  } else {
    header.classList.remove("active");
    mybutton.style.opacity = "0";
  }
}
// When the user clicks on the back-to-top button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Navbar toggle

let menu = document.getElementById("menu");

document.getElementById('openBtn').onclick = function(){
  menu.classList.add("show");
}
document.getElementById('closeBtn').onclick = function(){
  menu.classList.remove('show');
}


// HERO SLIDER SECTION

// next button
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
// prev button
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
// auto-sliding

// function autoSlide(){
//   setTimeout(autoSlide, 8000);
//   let lists = document.querySelectorAll('.item');
//   document.getElementById('slide').appendChild(lists[0]);
// }

// autoSlide();
