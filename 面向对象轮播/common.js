//Obj  表示DOM对象   attr 表示样式属性名
//获取DOM对象的DOM.style.width  
function getStyle(obj, attr) {

	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}


//运动   obj==>DOM对象，json数据{width："20px",height："30"}
//将DOM对象的位置，样式属性等改变
function startMove(obj, json) {
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function() {
		//假设每一次定时器开始时，所有的属性都达到了目标值
		var flag = true;
		for(var attr in json) {
			
			var iTarget = json[attr];
			
			if(attr == "opacity") {
				var iCur = Math.round(getStyle(obj, "opacity") * 100);
			} else {
				var iCur = parseInt(getStyle(obj, attr));
			}

			var iSpeed = (iTarget - iCur) / 8;
			
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			if(attr == "opacity") {
				oBox.style.opacity = (iCur + iSpeed) / 100;
				oBox.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
			} else {
				obj.style[attr] = iCur + iSpeed + "px";
			}

			//如果iCur!= iTarget,假设不成立
			if(iSpeed != 0) {
				flag = false;
			}

		}
		//flag为true 所有的属性都达到了目标值
		if(flag) {
			clearInterval(obj.timer);
		}

	}, 1);
}

//判断是否是闰年     year 表示年份
//闰年返回true
function isLeapYear(year) {
	if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return true;
	}
	return false;
}

//获取d日期的年月日 并以 s(分隔符)  分割
//d表示日期  s表示分隔符   
//返回以分隔符分开年月日
function formate(d, s) {
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	if(month < 10) {
		month = "0" + month;
	}
	if(day < 10) {
		day = "0" + day;
	}

	return year + s + month + s + day;
}

//判断某一年某月的天数
//year 表示年份   moth表示月份   返回对应天数
function getDays(year, month) {
	switch(month) {
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
			break;
		case 2:
			if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				return 29;

			} else {
				return 28
			}
			break;
		default:
			return 31;
			break;

	}
}

//返回2个日期相差的时间
//d1，d2表示传入时间
function getDiffDays(d1, d2) {
	var ss = Math.abs(d2 - d1) / 1000;
	var day = Math.floor((ss / 3600) / 24);
	var hour = Math.floor(ss / 3600 % 24);
	var minute = Math.floor(ss / 60 % 60);
	var second = Math.floor(ss % 60);

	var str = day + "天" + hour + "时" + minute + "分" + second + "秒";

	return str;

}

//获取当前日期+n天以后日期
//n  表示天数
function getNday(n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	return oDate;
}

//cookie封装    3个  参数以字符串形式传递

//  1.增加cookie并设置cookie存在时间
//name 商品名 （唯一）； value 商品值 ； n 天数
function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires" + oDate;
}

//  2.获取cookie中商品名所对应的值
//name 为要获取商品值的商品名或id名
function getCookie(name) {
	var str = document.cookie //获取cookie数据 字符串形式   productId=1001; username=myself
	var arr = str.split("; ") //将字符串以（; ）隔开转化为数组  [productId=1001,username=myself]
	for(var i = 0; i < arr.length; i++) { //arr[i]   productId=1001和username=myself
		var arr1 = arr[i].split("="); //arr1 = [ productId,1001] 和 [username,myself]
		if(arr1[0] == name) {
			return arr1[1];
		}
	}
}

//  3.删除cookie 
// name  要删除cookie名字
function removeCookie(name) {
	setCookie(name, 1, -1);
}

//DOM2级事件处理函数  //同一个DOM对象可以添加相同事件名，当事件触发时，函数依次执行
//参数 ：  obj:DOM对象 ； type：事件名 ； fn：事件处理函数
//1.监听事件
function addEvent(obj, type, fn) {
	if(obj.addEventListener) {
		obj.addEventListener(type, fn);
	} else {
		obj.attachEvent("on" + type, fn); //兼容IE浏览器
	}
}
//2.移除事件			
function removeEvent(obj, type, fn) {
	if(obj.removeEventListener) {
		obj.removeEventListener(type, fn);
	} else {
		obj.detachEvent("on" + type, fn);
	}
}