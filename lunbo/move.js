function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];
}
//json{"width":500,"height":300,"left":200,"opacity":50}
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//假定所有的属性都达到了目标值
		for(var attr in json){
			if(attr == "opacity"){
				var iCur = parseInt(getStyle(obj,"opacity")*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			
			var iTarget = json[attr];
			
			var iSpeed = (iTarget - iCur)/6;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
				obj.style.opacity = (iCur+iSpeed)/100;
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}

			if(iCur!=iTarget){ //有没有达到目标值 
				flag = false;//其中有的属性没有达到目标值
			}

		}
		//如果都达到目标值了
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}		
	},20);
}
