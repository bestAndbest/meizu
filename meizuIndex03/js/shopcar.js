function allsel() {
	//全选/全不选
	$('.allselected').on('click', function() {
		console.log(666)
		let sel = $('.selected')
		if($(this).hasClass('selstyle')) {
			sel.removeClass('selstyle')
		} else {
			sel.addClass('selstyle')
		}
		allprice()
		goodsnum()
	})
}

//单选
function onesel() {
	$('.sel').on('click', function() {
		if($(this).hasClass('selstyle')) {
			$(this).removeClass('selstyle')
		} else {
			$(this).addClass('selstyle')
		}
		allprice()
		goodsnum()
	})
}
nummoneyfn()
//购买数量及小计
function nummoneyfn() {
	$('.num').children('button').on('click', function() {
		let pri = $(this).parent().prev().children().text() - 0
		let inpval;
		if($(this).text() == '-') {
			inpval = Number($(this).next().val())
			if(inpval > 1) {
				inpval--;
			} else {
				inpval = 1;
			}
			$(this).siblings('span').css('display', 'none')
			$(this).next().val(inpval)
			$(this).parent().next().children().text((pri * inpval).toFixed(2))

		} else {
			inpval = Number($(this).prev().val())
			if(inpval < 5) {
				inpval++;

			} else {
				inpval = 5;
				$(this).next().css('display', 'block')
			}
			$(this).prev().val(inpval)
			$(this).parent().next().children().text((pri * inpval).toFixed(2))

		}
		allprice()
		goodsnum()
	})
}

allprice()
//总计
function allprice() {
	let sels = $('.sel')
	let sum = 0;
	let n = 0;
	for(let i = 0; i < sels.length; i++) {
		if(sels.eq(i).hasClass('selstyle')) {
			let count = sels.eq(i).parent().nextAll('.count').children().text() - 0;
			sum += count;
			n++;

		}
	}
	if(sum > 0) {
		$('#carr').text('免运费')
		$('#carr').css('color', '#999')
		$('#carr').css('margin-left', '8px')
		$('#carr').css('font-size', '12px')
	} else {
		$('#carr').html('<i>再买80.00元，即可免运费</i><a href="#">立即凑单></a>')
	}
	//取消，设置全选
	if(n == sels.length && n>0) {
		$('.allselected').addClass('selstyle')
	} else {
		$('.allselected').removeClass('selstyle')
	}
	$('.lastcount:eq(0)').children('i').children().text(sum.toFixed(2))

}

//计算所选商品件数
function goodsnum() {
	let count = 0;
	let allcount = 0;
	let inps = $('.num').children('input')
	for(let i = 0; i < inps.length; i++) {
		allcount += Number(inps.eq(i).val())

		let sel = inps.eq(i).parent().prevAll('.img_txt').children('.sel')
		if(sel.hasClass('selstyle')) {
			val = Number(inps.eq(i).val())
			count += val;
		}
	}
	$('#selnum').text(count)
	$('#allnum').children('i').text(allcount)
}

$('#alter').on('click', function() {
	if($(this).text()=='编辑'){
		$(this).text('完成')
		$('.mean').text('X')
		$('.mean').css('cursor', 'pointer');
	}else{
		$('.mean').text('--')
		$(this).text('编辑')
		$('.mean').css('cursor', 'default');
	}
})

delselfn()
function delselfn() {
	//删除选中的商品
	$('#delsel').on('click', function() {
		let sels = $('.sel')
		for(let i = 0; i < sels.length; i++) {
			if(sels.eq(i).hasClass('selstyle')) {
				sels.eq(i).parents('.goods').remove()
			}
		}
		allprice()
		goodsnum()
		delStorageData()
		delnull()
		
	})
	
}

//处理键值为null的情况
function delnull() {
	let sels = $('.sel')
	for(let i = 0; i < sels.length; i++) {
		if($('.addbuy').eq(i).text().indexOf('null')+1) {
			console.log($('.addbuy').eq(i).text().indexOf('null'))
			$('.addbuy').eq(i).parent().remove()
			i--;
		}
		if($('.ram').eq(i).text().indexOf('null')+1) {
			$('.ram').eq(i).remove()
			i--;
		}

	}
}

//根据购物车的删除相应地删除localStorage的数据
function delStorageData() {
	let sels = $('.sel')
	let arr1=[]
	for(let i = 0; i < sels.length; i++) {
		let addbuy = $('.addbuy').eq(i).text();
		let changebuy = $('.addbuy').eq(i).nextAll('span').text();
		let nowbuy = $('.addbuy').eq(i).nextAll('a').text();
		let price = $('.price').eq(i).children().text();
		let pname = $('.txt').eq(i).children('p:eq(0)').text();
		let pcolor = $('.pcolor').eq(i).text()
		let imgsrc = $('.imgsrc').eq(i).attr('src')
		let ram = $('.ram').eq(i).text()
		let inpval = $('.num').children('input').val()
		let obj = {
			'addbuy': addbuy,
			'changebuy': changebuy,
			'nowbuy': nowbuy,
			'price': price,
			'pname': pname,
			'pcolor': pcolor,
			'imgsrc': imgsrc,
			'ram': ram,
			'inpval': inpval
		}
		if(!obj.addbuy){
			obj.addbuy='null'
		}
		if(!obj.changebuy){
			obj.changebuy='null'
		}
		if(!obj.nowbuy){
			obj.nowbuy='null'
		}
		if(!obj.ram){
			obj.ram='null'
		}
		
		
		arr1.push(obj)
	}
	console.log(arr1)
	localStorage.setItem('data',JSON.stringify(arr1))
}


addgoods()

function addgoods() {
	
	//动态添加商品
	let localist = localStorage.getItem('data')
	let data = JSON.parse(localist)
	console.log(data)
	data.forEach(item => {
		let str = '';
		str += `<div class="goods">
				<p><em class='addbuy'>${item.addbuy}</em><span>${item.changebuy}</span><a>${item.nowbuy}</a></p>
				<div class="box">	
					<div class="img_txt">
						<div class="selected sel">✔</div>
						<img src="${item.imgsrc}" class='imgsrc'/>
						<div class="txt">
							<p>${item.pname}</p>
							<p><span>全网通公开版</span><span class='pcolor'>${item.pcolor}</span><span class='ram'>${item.ram}</span> </p>
						</div>
					</div>
					<div class="price">￥<span>${item.price}</span></div>
					<div class="num"><button>-</button><input type="text" value="${item.inpval}" disabled/><button>+</button><span>限购5件</span></div>
					<div class="count">￥<span>1598.00</span></div>
					<div class="mean">--</div>
				</div>
			</div>`

		$('#goods_box').append(str)

		

	})
	nummoneyfn()
	allsel()
	onesel()
	
	//编辑删除
	$('.mean').on('click', function() {
		$(this).parents('.goods').remove()
		allprice()
		goodsnum()
		//localStorageData相应进行删除
		delStorageData()
		delnull()
	})
	
	//删掉是null的内容
	delnull()

	sameprice()
	goodsnum()
	
}

function sameprice(){
	let goods=$('.goods')
	for(let i=0;i<goods.length;i++){
		let val=$('.num').eq(i).children('input').val()-0;
		//如果加入购物车累计件数超过五件则显示购买数量最多为5件，并显示提示信息
		if(val>5){
			$('.num').eq(i).children('input').val(5)
			$('.num').eq(i).children('span').css('display','block')
		}

		$('.count').eq(i).children('span').text(($('.price').eq(i).children('span').text()-0)*val)
	}
}

