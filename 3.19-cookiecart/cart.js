//cookie 封装
function setCookie(name,val,n){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + val + ";expires = " + oDate+";path/";
}

function removerCookie(name){
	getCookie(name,1,-8);
}
function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; "); 
	for(var i = 0; i < arr.length; i++){
		var newArr = arr[i].split("=");
		if(newArr[0] == name){
			return newArr[1];
		}
	}
}


///模拟后台数据
var data = [{
		id: 1,
		imgSrc: "img/1.jpg",
		price: 5888,
		title: '联想123'
	},
	{
		id: 2,
		imgSrc: 'img/2.jpg',
		price: 6888,
		title: '联想456'
	},
	{
		id: 3,
		imgSrc: 'img/3.jpg',
		price: 7888,
		title: '联想789'
	}
]

//cookie cart


function Cart(){
	if(getCookie("cart")){
		this.cartData = JSON.parse(getCookie("cart"))
	}else{
		this.cartData = {}
	};
	
	this.addcart = function(id,num){ 
		if(this.cartData[id] == undefined){
			this.cartData[id] = 1;
		} else {
			this.cartData[id]++
		}
		let str = JSON.stringify(this.cartData)
		setCookie("cart",str,7)
	}; 
	//总数
	this.cartnum = function(){
		this.sum = 0 ;
		for(var attr in this.cartData){
			this.sum += this.cartData[attr]
		}
	};
	//总价
	this.cartprice = function( ){
		this.price = 0;
		 
			for(let attr in this.cartData){
				for(let i = 0; i < data.length;i++){
					if(attr == data[i].id){
						this.price += data[i].price*this.cartData[attr]
					}
				
			}
		}
	}
	//减号
	this.cartdelete = function(){
		this.red.onclick = function(){
			console.log("aa")
			var str = JSON.parse(getCookie("cart"));
			var id = this.getAttribute("data-id2")
			console.log(id)
			this.cartData[id]--
			if(this.cartData[id] == 1){
				this.cartData[id] == 1;
			}
		} 
		let str = JSON.stringify(this.cartData)
		setCookie("cart",str,7)
		this.cartnum()
		this.cartprice()
		return false
	};
	//加号
	this.cartadd = function( ){
		this.add.onclick = function(){
			this.cartData[id]++
		}
		let str = JSON.stringify(this.cartData)
		setCookie("cart",str,7)
		this.cartnum()
		this.cartprice()
	}
	
	this.cart = function(obj){
		let str = "";
		for(let attr in this.cartData){
			for(let i = 0 ; i < data.length; i++){
				if(data[i].id == attr){
					str += `<li>
								<div>
									<input type="checkbox"/>
									<img src="${data[i].imgSrc}"/>
								</div>
								<div>
									<span>${data[i].title}</span>
									<span>${data[i].price}</span>
								</div>
								<div>
									<span data-id2="${data[i].id}">-</span>
									<span>${this.cartData[attr]}</span> 
									<span>+</span>
									<span id="btn" data-id2="${data[i].id}">删除</span>
								</div>
					       </li>`
				}
			}
		}
		obj.innerHTML = str;
		let oLi = document.getElementsByTagName("li");
		for(let i = 0; i < oLi.length;i++){
			this.oDiv = oLi[i].children[2];	
			//this.check = oLi[i].children[0].getAttribute("input");
		} 
		this.red = this.oDiv.children[0];
		this.add = this.oDiv.children[2];
		this.del = this.oDiv.children[3];
	}
		
		
	
	
}
