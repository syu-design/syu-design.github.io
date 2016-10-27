//動畫效果By Benoît Boucart
$(function() {
  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;
  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);
  
  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
		  
		  //數字跳動效果 RAY LEE & https://github.com/talmand/jquery-animate-numbers
		  (function($) {
    		$.fn.animateNumbers = function(stop, commas, duration, ease) {
        	return this.each(function() {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
			commas = (commas === undefined) ? true : commas;
            $({value: start}).animate({value: stop}, {
            	duration: duration == undefined ? 1000 : duration,
            	easing: ease == undefined ? "swing" : ease,
            	step: function() {
            		$this.text(Math.floor(this.value));
					if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	},
            	complete: function() {
            	   if (parseInt($this.text()) !== stop) {
            	       $this.text(stop);
					   if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	   }
            	}
            });
        });
    };
})(jQuery);
 $(document).ready(function() {
           
            $("#pageLoad").animateNumbers(95, true, 2000);
			$("#pageLoad1").animateNumbers(90, true, 2000);
			$("#pageLoad2").animateNumbers(90, true, 2000);
			$("#pageLoad3").animateNumbers(85, true, 2000);
			$("#pageLoad4").animateNumbers(100, true, 2000);
			$("#pageLoad5").animateNumbers(100, true, 2000);
        });//數字動畫結束

		  
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });   
  }
  revealOnScroll();
});

//跳頁滑動效果
$(function(){
	$('a[href=#page_2]').click(function(){
		$('html,body').animate({scrollTop:$('#page_2').offset().top+40}, 1200);
	}); 
	
	$('a[href=#page_3]').click(function(){
		$('html,body').animate({scrollTop:$('#page_3').offset().top+80}, 1200);
	});
	
	$('a[href=#page_4]').click(function(){
		$('html,body').animate({scrollTop:$('#page_4').offset().top}, 1200);
	});
	
	$('a[href=#page_5]').click(function(){
		$('html,body').animate({scrollTop:$('#page_5').offset().top}, 1200);
	});
	
	return false;
});
 