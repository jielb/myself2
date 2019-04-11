;
(function($) {
	$.fn.extend({
		jQueryDir: function() {
			var $outer = this;
			var $mark = this.find("#mark");

			var dirL = $outer.offset().left;
			var dirR = dirL + $outer.outerWidth();
			var dirT = $outer.offset().top;
			var dirB = dirT + $outer.outerHeight();

			$outer.hover(function(e) {
				enterLeave(e);
			}, function(e) {
				enterLeave(e);
			})

			function enterLeave(e) {
				var disL = Math.abs(e.pageX - dirL);
				var disR = Math.abs(e.pageX - dirR);
				var disT = Math.abs(e.pageY - dirT);
				var disB = Math.abs(e.pageY - dirB);
				var disMin = Math.min(disL, disR, disT, disB);

				if(e.type == "mouseenter") {
					switch(disMin) {
						case disL:
							$mark.show().css({
								"left": -$outer.outerWidth(),
								"top": 0
							}).stop().animate({
								"left": 0
							}, 500);
							break;
						case disR:
							$mark.show().css({
								"left": $outer.outerWidth(),
								"top": 0
							}).stop().animate({
								"left": 0
							}, 500);
							break;
						case disT:
							$mark.show().css({
								"left": 0,
								"top": -$outer.outerHeight()
							}).stop().animate({
								"top": 0
							}, 500);
							break;
						case disB:
							$mark.show().css({
								"left": 0,
								"top": $outer.outerHeight()
							}).stop().animate({
								"top": 0
							}, 500);
							break;
					}
				} else {
					switch(disMin) {
						case disL:
							$mark.stop().animate({
								"left": -$outer.outerWidth()
							}, 500);
							break;
						case disR:
							$mark.stop().animate({
								"left": $outer.outerWidth()
							}, 500);
							break;
						case disT:
							$mark.stop().animate({
								"top": -$outer.outerHeight()
							}, 500);
							break;
						case disB:
							$mark.stop().animate({
								"top": $outer.outerHeight()
							}, 500);
							break;
					}
				}
			}
			return this;
		}
	})
})(jQuery)