//面向对象封装一个shoppingCart
function shoppingCart(){
	//购物车数据  //判断购物车数据，防止每次调用cart时，给this.cartData数据给清空，使购物车的总数每次刷新页面从0开始
	if(localStorage.getItem("cart") != null){
		this.cartData = JSON.parse(localStorage.getItem("cart"));//如果数据以前存在，就从本地获取并转化为对象格式
	}else{
		this.cartData = {};//如果本地没有存储过数据，就给一个空对象		
	}
	//添加购物车  //添加要展示数据和添加点击数量
	this.addCart = function(id,num){
		//获取每个商品（id）点击次数
		if(this.cartData[id] == undefined){
			this.cartData[id] = 1;// id名不存在，赋值为1
		}else{
			this.cartData[id]++; //如果id名已经存在，则加1
		}
		//向localStorage本地存储数据都是字符串形式
		var str = JSON.stringify(this.cartData) 
		//向localStorage存储数据{"10001":4,"10001":2}
		localStorage.setItem("cart",str)
	}
	
	//计算购物车总数量   //
	this.getTotalNum = function(){
		this.sum = 0;
		for(var attr in this.cartData){
			this.sum += this.cartData[attr];
		}
	}
	
	
	//向购物车页面展示数据  // obj ：返回页面数据的DOM接受对象
	this.showCartList = function(obj){
		
		//设置已储存在本地数据，将这些数据返回到购物车页面
		var str = "";
		//对this.cartData进行遍历，得到只有id属性名
		for(var attr in this.cartData){
			//对后台提供数据进行遍历
			for(var i = 0 ; i < data.length;i++){
				 //如果点击储存的id和后台数据中id名相同，则把后台提供数据对应id名的商品信息获取并返回到购物车页面
				if(attr == data[i].id){
					//复选框有没有没选中返回布尔值   input.checked
					str += `<li>
							<input type="checkbox" id= "check"/>   
							<img src="${data[i].imgSrc}"/>
							<p>${data[i].title}</p>
							<p>${data[i].price}</p>
							<div id="update">
								<span>-</span>
								<span>${this.cartData[attr]}</span>    
								<span>+</span>
								<span>删除</span>
							</div>
						</li>`
					 //获取单个商品添加到购物车总数${this.cartData[attr]}
				}
			}
		}
		obj.innerHTML = str;
		
		
	}
	
	
	
	
	
	
}



//模拟后台数据
var data = [{
	id:"10001",
	imgSrc:"img/1.jpg",
	title:"图片一",
	price:"100"
},{
	id:"10002",
	imgSrc:"img/2.jpg",
	title:"图片二",
	price:"99"
},{
	id:"10003",
	imgSrc:"img/3.jpg",
	title:"图片三",
	price:"98"
}]