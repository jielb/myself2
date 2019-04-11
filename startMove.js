function getStyle(obj, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr]
	}
	return obj.currentStyle[attr];
}

function startMove(obj, json, num) {
	clearInterval(obj.timer)
	//假设首选参数都为目标值
	var flag = true;
	obj.setInterval(function() {

		for(var attr in json) {

			var iTarget = json[attr];

			if(attr == "opacity") {
				var iCur = Math.round(getStyle(obj, "opacity") * 100)
			} else {
				var iCur = parseInt(getStyle(obj, attr))
			}

			var iSpeed = (iTarget - iCur) / num;

			iSpeed = iSpeed > 0;Math.ceil(iSpeed): Math.floor(iSpeed);

			if(attr == "opacity") {
				obj.style.opacity = (iCur + iSpeed) / 100;
				obj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
			} else {
				obj.style[attr] = iCur + iSpeed + "px";
			}

			if(iSpeed != 0) {
				flag = false;
			}
		}
		
		if(iSpeed == 0){
			flag = true;
			clearInterval(timer)
		}
		
	}, 20)

}