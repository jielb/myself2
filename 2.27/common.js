 
var dateUtil = {
	isLeapYear: function(year) {
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			return true;
		}
		return false;
	},
	formate: function(d, s) {
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
	},
	getDays: function(year, month) {
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
	},
	getDiffDays: function(d1, d2) {
		var ss = Math.abs(d2 - d1) / 1000;
		//var day = (ss/3600)/24;
		var day = Math.floor((ss / 3600) / 24);
		var hour = Math.floor(ss / 3600 % 24);
		var minute = Math.floor(ss / 60 % 60);
		var second = Math.floor(ss % 60);

		var str = day + "天" + hour + "时" + minute + "分" + second + "秒";

		return str;

	},
	getNday: function(n) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + n);
		return oDate;
	}
}
/*function isLeapYear(year) {
	if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return true;
	}
	return false;
}

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

function getDiffDays(d1, d2) {
	var ss = Math.abs(d2 - d1) / 1000;
	//var day = (ss/3600)/24;
	var day = Math.floor((ss / 3600) / 24);
	var hour = Math.floor(ss / 3600 % 24);
	var minute = Math.floor(ss / 60 % 60);
	var second = Math.floor(ss % 60);

	var str = day + "天" + hour + "时" + minute + "分" + second + "秒";

	return str;

}
function getNday(n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	return oDate;
}
*/
 
