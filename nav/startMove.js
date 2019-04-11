function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
	return obj.currentStyle[attr];
}


function startMoves(obj,json ){
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		//假设每一次定时器开始时，所有的属性都达到了目标值
		var flag = true;
		for(var attr in json){
			var target = json[attr];
			
			if( attr == "opacity"){
				var cur = Math.round(getStyle(obj,"opacity")*100)
			}else{
				var cur = parseInt(getStyle(obj,attr))
			}	
			
			var speed = (target - cur)/8;
		
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed)/10000;
				obj.style.filter = "alpha(opacity="+(speed + cur)+")"
			}else{
				obj.style[attr] = cur + speed + "px";
			 
			}
			//如果cur ！= target，假设不成立
			if(speed != 0){
				flag = false
			}
		
		}
		//所有属性都达到了目标值
		if(speed == 0){
			flag = true;
			clearInterval(obj.timer)
		}
		
		
	},20)
	
	
	
	
	
	
	
}
