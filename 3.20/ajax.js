function ajax(type,url,data,fnSuc){
	//data{username:"aaa",password:1111}
	//如果不需要数据传递，data可以传入{}
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest;
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str = "";
	for(var i in data){
		str += i + "=" + data[i] + "&";
	}
	
	str = str.replace(/&$/,"");
	
	if(type.toUpperCase() == "GET"){
		if(str == ""){
			xhr.open("GET",url,true)
		} else{
			xhr.open("GET",url+"?"+str,true)			
		}
		xhr.send()
	}
	if(type.toUpperCase() == "POST"){
		xhr.open("POST",url,true)
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	window.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var data = xhr.responseText;
				data = JSON.parse(data);
				fnSuc(data);
			}
		}
	}
	
	
}
