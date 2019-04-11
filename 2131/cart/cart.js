function ShoppingCart() {
	//如果localStorage已经有数据了，就取出来
	if(localStorage.getItem("cart") != null) {
		//购物车的数据
		this.cartData = JSON.parse(localStorage.getItem("cart"));
	} else {
		this.cartData = {}; //购物车的数据
	}

	//添加购物车
	this.addCart = function(id, num) {

		if(this.cartData[id] == undefined) {
			this.cartData[id] = 1;
		} else {
			this.cartData[id]++;
		}

		var str = JSON.stringify(this.cartData);

		localStorage.setItem("cart", str);
	}

	//计算总的数量的方法，有需求，就通过实例调用
	this.getTotalNums = function() {
		this.sum = 0;
		for(let attr in this.cartData) {
			this.sum += this.cartData[attr];
		}
	}

	this.deleteCart = function(id) {

	}

	this.getTotalPrice = function(obj, id) {
		this.sumPrice = 0;
		var flag = true;

		for(let i = 0; i < obj.length; i++) {
			console.log(obj.length)
			obj[i].onblur = function() {
				if(obj[i].checked) {
					flag = false;
					this.sumPrice += this.cartData[id] * data[i].price
				} else {
					flag = true;
					for(let attr in this.cartData) {
						for(let i = 0; i < data.length; i++) {

							if(attr == data[i].id) {

								this.sumPrice += data[i].price * this.cartData[attr]
							}
						}
					}
				}
			}

	}		/*for(let i = 0; i < data.length; i++) {

				if(attr == data[i].id) {

					this.sumPrice += data[i].price * this.cartData[attr]
				}
			}*/
		}

		this.showCartList = function(obj) {
			let str = "";
			for(let id in this.cartData) {
				for(let i = 0; i < data.length; i++) {
					if(id == data[i].id) {
						str += `<li>
					<input type="checkbox" data1-id="${data[i].id}">
					<img src="${data[i].imgUrl}">
					<span>${data[i].title}</span>
					<span>${data[i].price}</span>
					<span>-</span>
					<span>${this.cartData[id]}</span>
					<span>+</span>
					</li>`;
					}
				}
				//console.log(str)
			}

			obj.innerHTML = str;

		}

	}

	var data = [{
		id: 10001,
		imgUrl: "1.jpg",
		title: "T恤T恤T恤T恤1",
		price: 100
	}, {
		id: 10002,
		imgUrl: "2.jpg",
		title: "T恤T恤T恤T恤2",
		price: 99
	}, {
		id: 10003,
		imgUrl: "1.jpg",
		title: "T恤T恤T恤T恤3",
		price: 98
	}];