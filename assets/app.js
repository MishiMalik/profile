
var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

var dp = function (event) {
    var image = document.getElementById('dp');
    image.src = URL.createObjectURL(event.target.files[0]);
};


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$('.owl-carousel').owlCarousel({
    loop: true,

    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    navText: [`<div class='nav-btn prev-slide'><svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="21px" height="19px">
   <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
    d="M9.999,1.999 L2.999,8.999 L9.999,15.999 "/>
   <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
    d="M18.999,8.999 L2.999,8.999 "/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg 
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   width="21px" height="19px">
  <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
   d="M16.999,8.999 L0.999,8.999 "/>
  <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
   d="M9.999,1.999 L16.999,8.999 L9.999,15.999 "/>
  </svg></div>`],

    responsive: {

        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})