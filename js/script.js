/*--------------------------------------W3------------------------------------------------------------------*/

var slideIndex = 1;
		showDivs(slideIndex);
		
		function plusDivs(n) {
		  showDivs(slideIndex += n);
		}
		
		function currentDiv(n) {
		  showDivs(slideIndex = n);
		}
		
		function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("demo");
		  if (n > x.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = x.length}
		  for (i = 0; i < x.length; i++) {
			 x[i].style.display = "none";  
		  }
		  for (i = 0; i < dots.length; i++) {
			 dots[i].className = dots[i].className.replace(" w3-white", "");
		  }
		  x[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " w3-white";
		}


		
		var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


/*----------------------------------------------------------------------------------*/

/*
var map = new GMaps({ 
	div: '.map',
	lat: 54.9360666,
	  zoom: 12
  });
  
  map.addMarker({
	lat: 54.9360666,
	lng: -2.6978895,
	title: 'United Kingdom',
	
	  infoWindow: {
	content: '<p>United Kingdom HQ</p>' 
  }
  });
*/

/*----------------------------------------------------------------------------------*/


/*
var images = [
	"../img/1800x760-BKL-Summer-banner-20170612-safearea-B013.jpg", 
	"../img/1800x760-BKL-KING BOX Banner safe area-F.jpg", 
	"../img/BKL_WEB_1800x760_Sep KING SAVERS BANNER safe area.jpg",
	"../img/BKL-WEB-1800x760-Long Banner safe area-F2.jpg",
	"../img/click-collect-half.jpg",
	"../img/meals-under-half.jpg", 
	"../img/deals-half.jpg",
	"../img/1800x760-BKL-Summer-banner-20170612-safearea-B013.jpg", 
	"../img/1800x760-BKL-KING BOX Banner safe area-F.jpg", 
	"../img/BKL_WEB_1800x760_Sep KING SAVERS BANNER safe area.jpg",
	"../img/BKL-WEB-1800x760-Long Banner safe area-F2.jpg",
	"../img/click-collect-half.jpg",
	"../img/meals-under-half.jpg", 
	"../img/deals-half.jpg"
];
var num = 0;
function next() {
	var slider = document.getElementById('slider');
	num++;
	if(num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}

function prev() {
	var slider = document.getElementById('slider');
	num--;
	if(num < 0) {
		num = images.length - 1;
	}
	slider.src = images[num];

}
*/
