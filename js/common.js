//preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status-img').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
})
//mobile menu
$('.menu-btn').click(function(){
    $('header ul').toggleClass('active')
})
//modules slider
const swipermodules = new Swiper('.modules-carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: '.modules-next',
      prevEl: '.modules-prev',
    },
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16,
    
    breakpoints: {
        1280: {
          slidesPerView: 'auto',
          watchOverflow: true,
          spaceBetween: 40,
          centeredSlides: false,
        },
      },
  });
  //team slider
const swiperteam = new Swiper('.team-carousel', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // Navigation arrows
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1280: {
        direction: 'vertical',
    },
  },
});
//faq accordeon
var toggleActiveElements = document.querySelectorAll(".toggle-accordion");
for (var i = 0; i < toggleActiveElements.length; i++) {
    toggleActiveElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });
}
//rating form
if(document.querySelector(".starIcon1") != undefined){

  // initialize the rating stars list as a global variable to reuse it later
  let stars = [];

  // init the stars query selectors
    var starQueryInit = function (){
        // create the querySelector of each 5 stars and push it to the stars list
        for(let i=1; i <= 5; i++){
            stars.push(document.querySelector(".starIcon"+i));
        }
    }
  

  // remove the clickedStar class on every stars
  var removeClickedStar = function (){
      for(let i = 0; i < stars.length; i++){
          stars[i].classList.remove("clickedStar");
      }
  }

  // add the clickedStar function when clicked and check his radio button
  var addClickedStar = function (numStar){
      // clickedStar function when clicked
      for(let i = 0; i < numStar; i++){
          stars[i].classList.add("clickedStar");
      }
      // check his radio button
      document.querySelector("input[type=radio].star"+numStar).checked = true;
      let checkedValue = document.querySelector('input[name="comment[rating]"]:checked').value;
      // console.log(checkedValue);
  }

  // translate hover effect
  var translateHover = function (numStar, translateY){
      for(let i = 0; i < numStar; i++){
          stars[i].style.transform = translateY;
      }
  }

  var createRatingEventListeners = function (){
      // iterate over the stars and add event listeners
      for(let i = 0; i < stars.length; i++){
          // set the number of star value
          let numStar = i+1;


          // click event listener (change color and check the radio button)
          stars[i].addEventListener("click", ()=> {
              // remove all the clickedStar
              removeClickedStar();
              // add clickedStar and check his radio button
              addClickedStar(numStar);
          });
      }
  }

  // init the stars query selectors
  starQueryInit();
  // create the events listeners
  createRatingEventListeners();
}
//copyright year
document.getElementById('copyright-year').appendChild(document.createTextNode(new Date().getFullYear()))
//show more news
$('.show-more-content').hide();
$(".show-more").on("click", function(e) {
    $(this).parent().parent().prev('.show-more-content').delay(100).fadeIn();
    e.preventDefault();
})
