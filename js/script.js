let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
// Add this JavaScript code after your existing carousel JavaScript code

$(document).ready(function(){
    $(".b").click(function(){
        $(this).toggleClass("b");
        $(this).toggleClass("b-selected");
    });
  });
  
  // You only need one instance of Flickity, remove the duplicated initialization
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity( elem, {
    cellalign: 'right',
    pageDots: false,
    groupCells: '20%',
    selectedAttraction: 0.03,
    friction: 0.15
  });
  
