function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
	return obj.currentStyle[attr];
}


function move(obj,json){
	setInterval(obj.timer)
	for(var attr in json){
		var iTarget = json[attr];
		var flag = true;
		if(attr == "opacity"){
			var iCur = Math.round(getStyle(obj,"opactity"))
		} else {
			var iCur = parseInt(getStyle(obj,attr))
		}
		
		
		var iSpeed = (iTarget - iCur)/8;
		
		iSpeed = iSpeed > 0? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
		
		
		
	}

}
