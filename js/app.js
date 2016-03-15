var main = function(){
	var menu_elem = document.getElementsByClassName("menu")[0],
		menu_tabs = $(menu_elem).find("a"),
		scroll_y = null,
		flag = false;
	
	$(window).scroll(function(event){
		scroll_y = window.scrollY;
		//console.log("Y:" + scroll_y);
		if(scroll_y < 700 && flag === false){
			flag = true;
			$(menu_tabs).removeClass('active');
			$(menu_tabs[0]).addClass('active');
		}
		if(scroll_y > 700 && scroll_y < 1400 && flag === true){
			$(menu_tabs).removeClass('active');
			$(menu_tabs[1]).addClass('active');
			flag = false;
		}
		if(scroll_y > 1400 && scroll_y < 2200 && flag === false){
			$(menu_tabs).removeClass('active');
			$(menu_tabs[2]).addClass('active');
			flag = true;
		}
		if(scroll_y > 2200 && flag === true){
			$(menu_tabs).removeClass('active');
			$(menu_tabs[3]).addClass('active');
			flag = false;
		}
	});	

	window.scrollTo(0,700);
	$(".menu").on('click', 'a', function(event){
		//console.log($(this).text());
		//console.log($(menu_tabs[0]).text());
		//console.log($(event.currentTarget).lastChild);
		$(menu_tabs).removeClass('active');
		if($(this).text() === "Home"){
			flag = true;
			$(menu_tabs[0]).addClass('active');
		}

		if($(this).text() === "About us"){
			//$("html,body").scrollTop(700);
			$(menu_tabs[1]).addClass('active');
			flag = false;
		}

		if($(this).text() === "Portfolio"){
			$(window).scrollY = 1401;
			$(menu_tabs[2]).addClass('active');
			flag = true;
		}

		if($(this).text() === "Contact"){
			$(window).scrollY = 2201;
			$(menu_tabs[3]).addClass('active');
			flag = false;
		}

	});
};

$(document).ready(main);