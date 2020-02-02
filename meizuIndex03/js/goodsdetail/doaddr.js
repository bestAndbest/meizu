var data = JSON.parse(threeSelectData)
//处理用户收货地址
function doaddrfn() {
	//凸显当前所点击对象的样式
	function changecolor() {
		for(let i = 0; i < 3; i++) {
			$('#sel').children().eq(i).removeClass('on')
		}
	}

	//更换省/市/区
	function changetitle() {
		$('#content').children().on('click', function() {
			for(let i = 0; i < 3; i++) {
				if($('#sel').children().eq(i).hasClass('on')) {
					$('#sel').children().eq(i).text($(this).text())
				}
			}
			if($('#cit').text() != '请选择' && $('#pro').text() != '请选择' && $('#cit').text() != '请选择') {
				$('#are').css('display', 'block');
				areafn()
			}
			flag = false;
			//需更换数据后再调用，检查当前是否为请选择
			addrishide()
		})
	}

	//默认情况
	areafn()
	function areafn() {
		$('#content').empty()
		changecolor()
		$('#are').addClass('on')
		var proval = $('#pro').text();
		var citval = $('#cit').text();
		let areval;
		for(let i = 0; i < data.length; i++) {
			if(data[i]['name'] == proval) {
				for(let j = 0; j < data[i]['city'].length; j++) {
					if(data[i]['city'][j]['name'] == citval) {
						for(let k = 0; k < data[i]['city'][j]['area'].length; k++) {
							areval = data[i]['city'][j]['area'][k]
							$('#content').append($(`<li>${areval}</li>`))
						}
					}
				}
			}
		}
		changetitle()
	}
	//点击获取区
	$('#are').on('click', function() {
		areafn()
	})
	//获取省
	$('#pro').on('click', function() {
		$('#content').empty()
		changecolor()
		$(this).addClass('on')
		for(let i = 0; i < data.length; i++) {
			var pro = data[i]['name']
			$('#content').append($(`<li>${pro}</li>`))
		}
		changetitle()
		$('#cit').text('请选择')
		$('#are').css('display', 'none');
	})

	//获取城市
	$('#cit').on('click', function() {
		changecolor()
		$(this).addClass('on')
		$('#content').empty()
		let proval = $('#pro').text()
		for(let i = 0; i < data.length; i++) {
			if(data[i]['name'] == proval) {
				for(let j = 0; j < data[i]['city'].length; j++) {
					let cit = data[i]['city'][j]['name']
					$('#content').append($(`<li>${cit}</li>`))
				}
			}
		}
		changetitle()
		if($('#are').text() != '请选择') {
			$('#are').text('请选择')
			$('#are').css('display', 'block');
		}

	})
	$('#chufa').on('mouseover', function() {
		$('#alladdr').css('display', 'block')
	})
	$('#chufa').on('mouseout', function() {
		$('#alladdr').css('display', 'none')
	})
	$('#alladdr').on('mouseover', function() {
		$(this).css('display', 'block')
	})
	let flag = true;
	//当省市区都选了才能鼠标滑出消失
	$('#alladdr').on('mouseout', function() {
		if(flag) {
			$(this).css('display', 'none')
		}

	})
	$('#sel').children().on('click', function() {
		flag = false;
		addrishide()
		console.log(0000)
	})

	function addrishide() {
		if($('#are').text() != '请选择' && $('#cit').text() != '请选择' && $('#pro').text() != '请选择') {
			$('#chufa').children('em:eq(0)').css('display', 'none');
			$('#chufa').children('em:eq(1)').text($('#cit').text())
			$('#chufa').children('em:eq(2)').text($('#are').text())
			flag = true;
			console.log('true')

		}
	}

	//删除按钮事件
	$('.del:eq(0)').on('click', function() {
		flag = true;
		$('#alladdr').css('display', 'none')

	})

}