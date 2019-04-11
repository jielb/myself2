function drag(obj){
	obj.onmousedown = function(e){
		var evt = e ||event;
		var x = evt.offsetX;
		var y = evt.offsetY;
		console.log("aa")
		document.onmousemove = function(e){
			console.log("bbb")
			var evt = e || event;
			var left = evt.clientX - x ;
			var top = evt.clientY - y;
			var _x = obj.offsetWidth;
			var _y = obj.offsetHeight;
			if(left <= 0){
				left = 0;
			}
			if(top <= 0){
				top = 0;
			}
			
			if(left >= document.documentElement.clientWidth - _x){
				left = document.documentElement.clientWidth - _x; 
			}
			if(top >= document.documentElement.clientHeight - _y ){
				top = document.documentElement.clientHeight - _y;
			}
			
			obj.style.left = left + "px";
			obj.style.top = top + "px";
		 	return false;  
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}
