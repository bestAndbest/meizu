let arr=[]
let alldata=localStorage.getItem('data')
if(alldata){
	arr=JSON.parse(alldata)
}
function senddatafn(){
	let addbuy=$('.huangou').children('span').text();
	let changebuy=$('.huangou').children('i').text();
	let nowbuy=$('.huangou').children('a').text();
	let price=$('.price').children().text();
	let pname=$('h2').text();
	let intype=$('#intype').text();
	let pcolor=$('#pcolorchange').children('.blacka').text()
	let imgsrc=$('#smallimg').attr('src')
	let ram=$('#ram').children('.blacka').text()
	let inpval=$('#count').children('input').val()
	let obj={
		'addbuy':addbuy,
		'changebuy':changebuy,
		'nowbuy':nowbuy,
		'price':price,
		'pname':pname,
		'pcolor':pcolor,
		'imgsrc':imgsrc,
		'ram':ram,
		'inpval':inpval,
		'intype':intype
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
	if(!obj.intype){
		obj.intype='null'
	}if(!(obj.intype.indexOf('全网通公开版')+1)){
		obj.intype='null'
	}
	arr.push(obj)
	console.log(arr[0].price)
	for(let i=0;i<arr.length-1;i++){
		for(let j=i+1;j<arr.length;j++){
			if(pcolor){
				if(arr[i].price==arr[j].price && arr[i].pname==arr[j].pname && arr[i].pcolor==arr[j].pcolor){
					arr[i].inpval=(arr[i].inpval-0)+(arr[j].inpval-0)
					arr.splice(j,1)
				}
			}else{
				if(arr[i].price==arr[j].price && arr[i].pname==arr[j].pname){
						arr[i].inpval=(arr[i].inpval-0)+(arr[j].inpval-0)
						arr.splice(j,1)
					}
			}
			if(arr[i].inpval>=5){
				arr[i].inpval=5;
			}
		}
	}
	
	console.log(arr)
	console.log(666666666)
	localStorage.setItem('data',JSON.stringify(arr))
}


//查看同一款手机的不同颜色
function pcolorch(data){
	let alla=$('#pcolorchange').children()
	let rep=$('.replaceimg')
	let sma=$('#smallimg')
	let big=$('#bigimg')
	for(let i=0;i<alla.length;i++){
		alla.eq(i).on('click',function(){
			if(i==0){
				sma.attr('src',data[0].img11);
				big.attr('src',data[0].img11);
				rep.eq(0).attr('src',data[0].img11);
				rep.eq(1).attr('src',data[0].img12);
				rep.eq(2).attr('src',data[0].img13);
				rep.eq(3).attr('src',data[0].img14);
			}else if(i==1){
				sma.attr('src',data[0].img21);
				big.attr('src',data[0].img21);
				rep.eq(0).attr('src',data[0].img21);
				rep.eq(1).attr('src',data[0].img22);
				rep.eq(2).attr('src',data[0].img23);
				rep.eq(3).attr('src',data[0].img24);
			}else if(i==2){
				sma.attr('src',data[0].img31);
				big.attr('src',data[0].img31);
				rep.eq(0).attr('src',data[0].img31);
				rep.eq(1).attr('src',data[0].img32);
				rep.eq(2).attr('src',data[0].img33);
				rep.eq(3).attr('src',data[0].img34);
			}else if(i==3){
				sma.attr('src',data[0].img41);
				big.attr('src',data[0].img41);
				rep.eq(0).attr('src',data[0].img41);
				rep.eq(1).attr('src',data[0].img42);
				rep.eq(2).attr('src',data[0].img43);
				rep.eq(3).attr('src',data[0].img44);
			}
		})
	}
	
	
}

//处理没有的情况
function withotfn(item) {
	let youhui = $('.youhui');
	let huangou = $('.huangou');
	console.log(!item.discount)
	console.log(youhui.text().indexOf('null'))
	if(youhui.text().indexOf('null')+1) {
		youhui.remove();
	}else if(youhui.children('i:eq(1)').text().indexOf('null')+1){
		youhui.children('i:eq(1)').remove();
	}
	if(huangou.text().indexOf('null')+1) {
		huangou.css('display', 'none');
	}
	if($('#meals').text().indexOf('null')+1) {
		$('#meals').remove();
	}
	
	if(!item.footimg4) {
		$('#lastimg').css('display', 'none');
	}
	let footimgs=$('.detail:eq(0)').children('img')
	for(let j=0;j<footimgs.length;j++){
		if(footimgs.eq(j).attr('src')=='null'){
			footimgs.eq(j).remove()
		}
	}
	
	let imgs=$('#pcolorchange').children()
	for(let k=0;k<imgs.length;k++){
		if(imgs.eq(k).text()=='undefined'){
			imgs.eq(k).remove()
		}
	}
	
	if(!item.img14){
		$('.replaceimg:eq(3)').remove()
		$('.replaceimg').css('margin-left','60px')
	}
	if(!item.img24 && item.img21 ||!item.img34 && item.img31){
		$('.replaceimg:eq(3)').remove()
		$('.replaceimg').css('margin-left','60px')
	}
	
	
	if(!item.type_num){
		$('#typenum_box').remove()
	}
	if(!item.ram){
		$('#ram_box').remove()
	}
	
	let rams=$('#ram').children()
	for(let i=0;i<rams.length;i++){
		if(rams.eq(i).text()=='undefined'){
			rams.eq(i).remove()
		}
	}
	
	let typenums=$('#typenum').children()
	for(let i=0;i<typenums.length;i++){
		if(typenums.eq(i).text()=='undefined'){
			typenums.eq(i).remove()
		}
	}
}

//切换样式
function blackafn() {
	$('dd').children('a').on('click', function(e) {
		e.preventDefault()
		console.log('preventDefault')
		$(this).siblings().removeClass('blacka')
		if(!$(this).hasClass('blacka')) {
			$(this).addClass('blacka')
		}

	})
}

//根据内存显示不同的价格
function pricebyram() {
	let price = Number($('.price').children('span').text())

	for(let i = 0; i < $('#ram').children().length; i++) {
		$('#ram').children().eq(i).on('click', function(e) {
			e.preventDefault()
			$('.price').children('span').text((Number(price) + 300 * i).toFixed(2))
		})
	}
}
//加减按钮,限定最多买5台手机
function countnum() {
	$('#count').children('button').on('click', function() {
		let inpval = $('#count').children('input').val()
		if($(this).text() == '-') {
			if(inpval > 1) {
				inpval--;
				
			} else {
				$(this).attr('disabled')
			}
			$('#count').children('span').css('display','none')
		} else {
			if(inpval < 5) {
				inpval++;
			} else {
				$('#count').children('span').css('display','block')
				$(this).attr('disabled')
			}
		}
		$('#count').children('input').val(inpval)
	})
}
//提示用户商品已加入购物车
function addnum(){
	$('.buy:eq(1)').on('click',function(){
			$('#tell').css('display','block')
		})
		$('#tell').children('em').on('click',function(){
		console.log(99999)
		$('#tell').css('display','none')
	})
}
