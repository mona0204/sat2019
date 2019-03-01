/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Search
3. Init Menu
4. Init SVG
5. Initialize Milestones
6. Init Testimonials Slider
5. Init Accordions


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initSearch();
	initMenu();
	initSvg();
	initMilestones();
	initTestSlider();
	initAccordions();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 767 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Search

	*/

	function initSearch()
	{
		if($('.main_menu_search_button').length)
		{
			var search = $('.main_menu_search_button');
			var searchInput = $('.main_menu_search_content');
			search.on('click', function()
			{
				searchInput.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			var hamb = $('.burger');

			hamb.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
				else
				{
					openMenu();
				}
			});
		}
	}

	function closeMenu()
	{
		var menu = $('.menu');
		menu.removeClass('active');
		menuActive = false;
		menu.css('max-height', "0px");
	}

	function openMenu()
	{
		var menu = $('.menu');
		menu.addClass('active');
		menuActive = true;
		menu.css('max-height', menu.prop('scrollHeight') + "px");
	}

	/* 

	6. Init SVG

	*/

	function initSvg()
	{
		jQuery('img.svg').each(function()
		{
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data)
			{
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Replace image with new SVG
				$img.replaceWith($svg);
			}, 'xml');
		});
	}

	/* 

	6. Initialize Milestones

	*/

	
	/* 

	6. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');

			testSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dots:true,
				nav:false
			});
		}
	}

	/* 

	5. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}
});

jQuery(document).ready(function(){
	var modernAccordion = $('.mdn-accordion');
	if( modernAccordion.length > 0 ) {
		modernAccordion.each(function(){
			var each_accordion = $(this);
			$('.accordion-toggle:checked').siblings('ul').attr('style', 'display:none;').stop(true,true).slideDown(300);
			each_accordion.on('change', '.accordion-toggle', function(){
				var toggleAccordion = $(this);
				if (toggleAccordion.is(":radio")) {
					toggleAccordion.closest('.mdn-accordion').find('input[name="' + $(this).attr('name') + '"]').siblings('ul')
					.attr('style', 'display:block;').stop(true,true).slideUp(300); 
					toggleAccordion.siblings('ul').attr('style', 'display:none;').stop(true,true).slideDown(300);									
			   } else {				
					(toggleAccordion.prop('checked')) ? toggleAccordion.siblings('ul')
					.attr('style', 'display:none;').stop(true,true).slideDown(300) : toggleAccordion.siblings('ul')
					.attr('style', 'display:block;').stop(true,true).slideUp(300); 
			   }
			});
		});
	}
    
    function close_m1(){
        document.getElementById("close_u1").style.display = "none";
        //$('.close_u1').siblings('ul').attr('style', 'display:none;').stop(true,true).slideDown(300);
    }
    /// sub menu
	$(document).on('click', '.mdn-accordion .accordion-title', function(e) {
		var $mdnRippleElement = $('<span class="mdn-accordion-ripple" />'),
		$mdnButtonElement = $(this),
		mdnBtnOffset = $mdnButtonElement.offset(),
		mdnXPos = e.pageX - mdnBtnOffset.left,
		mdnYPos = e.pageY - mdnBtnOffset.top,
		mdnSize = parseInt(Math.min($mdnButtonElement.height(), $mdnButtonElement.width()) * 0.5),
		mdnAnimateSize = parseInt(Math.max($mdnButtonElement.width(), $mdnButtonElement.height()) * Math.PI);
		$mdnRippleElement
		.css({
			top: mdnYPos,
			left: mdnXPos,
			width: mdnSize,
			height: mdnSize,
			backgroundColor: $mdnButtonElement.data("accordion-ripple-color")
		})
		.appendTo($mdnButtonElement)
		.animate({
			width: mdnAnimateSize,
			height: mdnAnimateSize,
			opacity: 0
		}, 800, function() {
			$(this).remove();
		});
	});	
});
// according

 var accordionX = document.getElementsByClassName('accordionX');
// var panelMaxHeight = panelX.style.maxHeight;

// for (var i = 0; i < accordionX.length; i++) {
//     accordionX[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         var panelX = this.nextElementSibling;
//         if (panelX.style.maxHeight) {
//             panelX.style.maxHeight = null;
//         } else {
//             panelX.style.maxHeight = panelX.scrollHeight + "px";
//         }
//     });
// }

for (let acc of accordionX) {
    acc.addEventListener('click', function() {
        for (let accX of acc.parentElement.children) {
            accX.classList.remove('active');
            accX.style.maxHeight = null;
        }
        this.classList.toggle('active');
        var panelX = this.nextElementSibling;
        panelX.style.maxHeight = (panelX.style.maxHeight) ? null : panelX.scrollHeight + "px";
    })
}


    // slider
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1965499-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();




/* Create this file and add to your js folder : vertical.news.slider.js */

/*globals window, $, clearInterval, setInterval */

$(function () {
  "use strict";

  var          hl,
         newsList = $('.news-headlines'),
    newsListItems = $('.news-headlines li'),
    firstNewsItem = $('.news-headlines li:nth-child(1)'),
      newsPreview = $('.news-preview'),
          elCount = $('.news-headlines').children(':not(.highlight)').index(),
         vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
          vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
         cPadding = (parseInt($('.news-content').css('padding-top').replace('px', ''), 10)) +
                    (parseInt($('.news-content').css('padding-bottom').replace('px', ''), 10)),
            speed = 5000, // this is the speed of the switch
          myTimer = null,
         siblings = null,
      totalHeight = null,
          indexEl = 1,
                i = null;

  // the css animation gets added dynamicallly so 
  // that the news item sizes are measured correctly
  // (i.e. not in mid-animation)
  // Also, appending the highlight item to keep HTML clean
  newsList.append('<li class="highlight nh-anim"></li>');
  hl = $('.highlight');
  newsListItems.addClass('nh-anim');

  function doEqualHeight(c) {

    if (newsPreview.height() < newsList.height()) {
      newsPreview.height(newsList.height());
    } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('min-height').replace('px', ''), 10))) {
      newsPreview.height(newsList.height());
    }

    if ($('.news-content:nth-child(' + c + ')').height() > newsPreview.height()) {
      newsPreview.height($('.news-content:nth-child(' + c + ')').height() + cPadding);
    }
  }

  function doTimedSwitch() {

    myTimer = setInterval(function () {
      if (($('.selected').prev().index() + 1) === elCount) {
        firstNewsItem.trigger('click');
      } else {
        $('.selected').next(':not(.highlight)').trigger('click');
      }
    }, speed);

  }

  $('.news-content').on('mouseover', function () {
    clearInterval(myTimer);
  });

  $('.news-content').on('mouseout', function () {
      doTimedSwitch();
  });

  function doClickItem() {

    newsListItems.on('click', function () {

      newsListItems.removeClass('selected');
      $(this).addClass('selected');

      siblings = $(this).prevAll();
      totalHeight = 0;

      // this loop calculates the height of individual elements, including margins/padding
      for (i = 0; i < siblings.length; i += 1) {
          totalHeight += $(siblings[i]).height();
          totalHeight += vPadding;
          totalHeight += vMargin;
      }

      // this moves the highlight vertically the distance calculated in the previous loop
      // and also corrects the height of the highlight to match the current selection
      hl.css({
        top: totalHeight,
        height: $(this).height() + vPadding
      });

      indexEl = $(this).index() + 1;

      $('.news-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
      $('.news-content:nth-child(' + indexEl + ')').addClass('top-content');

      clearInterval(myTimer);
      // comment out the line below if you don't
      // want it to rotate automatically
      doTimedSwitch();
      doEqualHeight(indexEl);
    });

  }

  function doWindowResize() {

    $(window).resize(function () {

      clearInterval(myTimer);
      // click is triggered to recalculate and fix the highlight position
      $('.selected').trigger('click');

    });

  }

  // this is the poor man's 'init' section
  doClickItem();
  doWindowResize();
  $('.selected').trigger('click');

});
//
// Show/Hide menu
jQuery(document).ready(function() {
  
  try{
    if(jQuery( ".panel" ).length){

      // Open/Close menu event
      jQuery('.menu-button').click(function() {  

           var pannel = jQuery('.panel'),
            hidden = pannel.data('hidden'),
            speed = pannel.attr('data-df-animation-speed'),
            offset = pannel.attr('data-df-offset');

        if(hidden) jQuery('.panel').animate({ left: offset },speed);
        else  jQuery('.panel').animate({ left: '0'},speed);

        jQuery('.panel').data("hidden", !hidden);

        });

      //Rotate arrow 
      //Rotate arrow
			jQuery('#menulink').click(function () { jQuery('#icon-arrow').toggleClass('open'); });

			// Select button
			jQuery("ul.models li a").click(function (e) {

				e.preventDefault();
				jQuery("ul.models li a.active").removeClass("active");
				jQuery(this).addClass("active");

			});

      // Select button
      jQuery("ul.models li a").click(function ( e ) {

        e.preventDefault();
        jQuery("ul.models li a.active").removeClass("active");  
        jQuery(this).addClass("active"); 

      });

    }}catch(e){console.log(e);}
  
});



//ul
$(document).ready(function(){
  $("li").click(function() {
    // remove classes from all
    $("li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
   });
});//end