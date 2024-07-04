/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});



if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){


$(document).ready(function () {
  hsize = $(window).height();
  $(".keyvisual").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $(".keyvisual").css("height", hsize + "px");
});



$(function() {
    var btnUp = $('.btn-up');
    var start = $('.start');    
    btnUp.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            btnUp.fadeIn();
        } else {
        	start.fadeIn();
            btnUp.fadeOut();
        }
    });
    //スクロールしてトップ
    /*topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });*/
});


}




$('#check').click(function() {
    $("#dest").slideToggle(this.checked);
});


