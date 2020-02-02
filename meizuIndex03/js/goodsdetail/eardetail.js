
let srcurl = window.location;
let sear = srcurl.search
let goodsid = sear.substring(sear.indexOf('=') + 1)
//console.log(goodsid)
// goodsid = 12;
//从数据库获取数据
getgoodsdata()
async function getgoodsdata() {
	let p = await pAjax({
		url: '../server/eardetail.php',
		data: {
			id: goodsid
		}
	})
	let data = JSON.parse(p)
	adddatatohtml(data)
}


function adddatatohtml(data) {
	let str = '';
	data.forEach(item => {


		str += `<div class="de_head">
				<div class="de_wrap">
					<div class="brand"><span>${item.p_name}</span></div>
					<ul class="infos">
						<li>
							<a href="#">概述</a>
						</li>
						<li>
							<a href="#">参数</a>
						</li>
						<li>
							<a href="#">常见问题</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="de_box">
				<div class="de_wrap">
	
					<div class="imgs_box">
						<div class="smaimg">
							<img src="${item.img11}" id="smallimg" />
							<div class="mark" ></div>
							<div class="smallimgs">
								<img src="${item.img11}" class="replaceimg" />
								<img src="${item.img12}" class="replaceimg" />
								<img src="${item.img13}" class="replaceimg" />
								<img src="${item.img14}" class="replaceimg" />
							</div>
						</div>					
						<div class="bigimg">
							<img src="${item.img11}" id="bigimg" />
						</div>
	
					</div>
	
					<div class="phoneinfos_box">
						<h2>${item.p_name}</h2>
						<p style="font-size: 12px;color: #e22841;">${item.descride}</p>
						<div class="price_box">
							<p class="price">￥<span>${item.price}</span></p>
						</div>
						<div class="payurl">
							<div class="pay">
								<span>支&nbsp;&nbsp;持</span>
								<span><img src="../img/arr.jpg"/>花呗分期</span>
								<span><img src="../img/arr.jpg"/>顺丰发货</span>
								<span><img src="../img/arr.jpg"/>7天无理由退货（激活后不支持）</span>
							</div>
							<div class="url">
								<span>配送服务</span>
								<p id="chufa" style="color: #000"><em>广东</em><em>深圳</em><em></em><img src="../img/select.png" /></p>
								<div id="alladdr">
									<p id="sel">
										<span id="pro">广东</span>
										<span id="cit">深圳</span>
										<span id="are" class="on">请选择</span>
									</p>
									<ul id="content">
									</ul>
								<div class="del">X</div>
								</div>
	
							</div>
							<p style="padding-left: 54px; padding-top: 28px;">本商品由魅族 负责发货并提供售后服务<span><img src="../img/smeil.jpg" />商城客服</span></p>
						</div>
	
						<div class="phoneinfo_box">
							<div class="property" id='typenum_box'>
								<dl>
									<dt>型&nbsp;&nbsp;&nbsp;&nbsp;号</dt>
									<dd id='typenum'>
										
									</dd>
								</dl>
							</div>
	
							<div class="property">
								<dl>
									<dt>颜色分类</dt>
									<dd id='pcolorchange'>

									</dd>
								</dl>			
							</div>
							<div class="property" id='ram_box'>
								<dl>
									<dt>内容存量</dt>
									<dd id="ram">
										
									</dd>
								</dl>
							</div>
							<div class="property" id='meals'>
								
							</div>
							<!--购买数量-->
							<div class="property">
								<dl class="num">
									<dt>数量</dt>
									<dd id="count">
										<button>-</button>
										<input type="text" value="1" readonly="readonly" />
										<button>+</button>
										<span>限购5件</span>
									</dd>
								</dl>
							</div><br/>
							<div class="property">
								<div class="buttons">
									<button class="buy" id="nowbuy">立即购买</button>
									<button class="buy">加入购物车</button>
									<div id='tell'>
										<div>
											<span>√</span><i>已成功加入购物车</i>
										</div>
										<p><a href='shopcar.html'>去购物车结算 ></a></p>
										<em>×</em>
									</div>

								</div>
								
							</div>
						</div>
	
					</div>
	
				</div>
			</div>
			<div class='detail'>
				<p>商品详情</p>
				<img src='${item.footimg0}' />
				<img src='${item.footimg1}' />
				<img src='${item.footimg2}' />
				<img src='${item.footimg3}' />
				<img src='${item.footimg4}'/>
			</div>
			`

	})
	document.body.innerHTML = str;

	let ram;
	if(data[0].ram) {
		ram = data[0].ram.split(',')
		let str1 = `<a href="#" class="blacka">${ram[0]}</a>
					<a href="#">${ram[1]}</a>
					<a href="#">${ram[2]}</a>`
		$('#ram').append(str1)
	}
	let typenum;
	if(data[0].type_num) {
		typenum = data[0].type_num.split(',')
		let str1 = `<a href="#" class="blacka">${typenum[0]}</a>
					 <a href="#">${typenum[1]}</a>
					 <a href="#">${typenum[2]}</a>
					 <a href="#">${typenum[3]}</a>
					 <a href="#">${typenum[4]}</a>
					 <a href="#">${typenum[5]}</a>`
		$('#typenum').append(str1)
	}
	let colortype;
	if(data[0].colortype) {
		colortype = data[0].colortype.split(',')
		let str1 = `<a href="#" class="blacka" ><img src="${data[0].img11}"/>${colortype[0]}</a>
					<a href="#"><img src="${data[0].img21}" />${colortype[1]}</a>
					<a href="#"><img src="${data[0].img31}" />${colortype[2]}</a>
					<a href="#"><img src="${data[0].img41}" />${colortype[3]}</a>`
					$('#pcolorchange').append(str1)
	}

	//调用切换样式函数
	blackafn()

	//调用根据内存变换价格函数
	pricebyram()

	//处理没有的情况
	withotfn(data[0])

	//处理购买数量
	countnum()

	//地址
	doaddrfn()

	//放大镜
	imgbigger()

	//处理不同颜色的手机
	pcolorch(data)
	
	

	let src1 = window.location
	$('.buy:eq(0)').click(function() {
		let login = getCookie('login')
		if(!login) {
			let srcurl = 'goodsdetail.html' + src1.search;
			window.location.href = `login.html?path1="${srcurl}"`;
		} else {
			window.location.href = 'shopcar.html';
		}
	})
	$('.buy:eq(1)').click(function() {
		let login = getCookie('login')
		if(!login) {
			let srcurl = 'eardetail.html' + src1.search;
			window.location.href = `login.html?path1="${srcurl}"`;
		} else {
			//购物车购买数量显示
			addnum()
			senddatafn()

		}
	})
}