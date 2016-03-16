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

	$(".menu").on('click', 'a', function(event){
		$(menu_tabs).removeClass('active');
		if($(this).text() === "Home"){
    		$('html, body').animate({scrollTop: 0},500);
			flag = true;
			$(menu_tabs[0]).addClass('active');
		}

		if($(this).text() === "About us"){
			$('html, body').animate({scrollTop: 850},500);
			$(menu_tabs[1]).addClass('active');
			flag = false;
		}

		if($(this).text() === "Portfolio"){
			$('html, body').animate({scrollTop: 1520},500);
			$(menu_tabs[2]).addClass('active');
			flag = true;
		}

		if($(this).text() === "Contact"){
			$('html, body').animate({scrollTop: 2200},500);
			$(menu_tabs[3]).addClass('active');
			flag = false;
		}
		return false;
	});
};

$(document).ready(main);