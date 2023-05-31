$(document).ready(function(){
	$('.hero_owl').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		dots:false,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			728:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true
			}
		}
	});
});

/*$(document).ready(function () {


	// Trigger maximage
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 3000,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1,
			pager: '#pager',
			pagerAnchorBuilder: function paginate(idx, el) {
				return '<a class="service' + idx + '" href="#" ></a>';
			}
		}
	});



});
*/


$(document).ready(function() {
    function body(){
        var open = $('.menu').hasClass('open');   
         $("body").toggleClass("hideoverflow" , !!open); 
    }  
	
	$(".menu_trigger").click(function(){
	    $(".menu").toggleClass("open");
	    $(".menu .has-sub").removeClass('open');
		body();
	});
	
	$('.menu .has-sub a').click(function(){
        var el = $(this).parent('li.has-sub'), active = el.hasClass('open');
        $('.menu .has-sub').removeClass('open');
        active || el.addClass('open');   
        body();
	});		
	
	$("#menu_close").click(function(){
	    $(".menu").toggleClass("open");
	    body();
	});	
	
	$(".search").click(function(){
	    $(".searchbar").toggleClass("open");
	});
	
	$(".close").click(function(){
	    $(".searchbar").toggleClass("open");
	});


});

$(document).ready(function() {
	
	$('.w20 ul li.has-sub > a').click(function(){
        var el2 = $(this).parent('li'), active = el2.hasClass('open');
        $('.w20 ul li.has-sub').removeClass('open');
        active || el2.addClass('open'); 
		return false;
	});	
});



$(document).ready(function(){
	$('.carousel1').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:true,
				loop:false
			}
		}
	});
});




$(document).ready(function(){
	$('.related').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});
});





$(document).ready(function(){
	$('.acc-gallery').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		items:1,
		nav:true
	});
});












$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 7; //globaly define number of elements per page
  var syncedSecondary = true;

	  sync1.owlCarousel({
		items : 1,
		slideSpeed : 2000,
		nav: false,
		autoplay: false,
		dots: false,
		loop: true,
		responsive:{
			0:{
				items:1,
				dots: true,
			},
			900:{
				items:1,
				dots: false
			}
		},
		responsiveRefreshRate : 200,
		navText: ['<', '>'],
	  }).on('changed.owl.carousel', syncPosition);

	  sync2.on('initialized.owl.carousel', function () {
		  sync2.find(".owl-item").eq(0).addClass("current");
		}).owlCarousel({
		items : slidesPerPage,
		dots: false,
		nav: true,
		margin:5,
		smartSpeed: 200,
		slideSpeed : 500,
		slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate : 100
	  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).index();
		//sync1.data('owl.carousel').to(number, 300, true);
		
		sync1.data('owl.carousel').to(number, 300, true);
		
	});
});



$(document).ready(function() {
	$('#sync1').magnificPopup({
	  delegate: '.item a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title');
		}
	  }
	});
});


$(document).ready(function() {
	$('#acc1, #acc2, #acc3').magnificPopup({
	  delegate: '.item a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title');
		}
	  }
	});
});


function tabs(evt, tabName) {
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
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





function tabs2(evt, tabName) {
  // Declare all variables
  var j, tabcontent2, tablinks2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (j = 0; j < tabcontent2.length; j++) {
	tabcontent2[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (j = 0; j < tablinks2.length; j++) {
	tablinks2[j].className = tablinks2[j].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();












/**/