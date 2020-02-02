let inputs = document.querySelectorAll('input');
let name, p1, p2, ema, phone1;

function mean(t, flag, info, intext) {
	let va = t.value;
	if(flag) {
		t.nextElementSibling.innerHTML = '√'
		t.nextElementSibling.style.color = 'green'
	} else {
		if(va == '') {
			t.nextElementSibling.innerHTML = `*&nbsp;${info}不能为空`;
		} else if(intext) {
			t.nextElementSibling.innerHTML = intext;
		}
		t.nextElementSibling.style.color = 'red'

	}

}

function checkUser(t) {
	let reg = /^[^0-9]{4,16}$/;
	let va = t.value;
	if(reg.test(va)) {
		name = true;
		mean(t, name)
	} else {
		name = false;
		let info = '账号';
		mean(t, name, info)
	}
}

function checkPass(t) {
	let reg = /^\w{6,16}$/;
	let va = t.value;
	if(reg.test(va)) {
		p1 = true;
		mean(t, p1)
	} else {
		p1 = false;
		let info = '密码';
		mean(t, p1, info)
	}
}

function checkPass2(t) {
	let va = t.value;
	let va1 = inputs[1].value;
	if(va == va1 && va != '') {
		p2 = true;
		mean(t, p2)
	} else {
		p2 = false;
		let intext = '*&nbsp;两次输入密码不一致'
		let info = '确认密码';
		mean(t, p2, info, intext)
	}
}

function checkEma(t) {
	let reg = /^\w+@(qq|163|sina)\.(com|cn)(.cn)?$/;
	let va = t.value || '';
	if(reg.test(va)) {
		ema = true;
		mean(t, ema)
	} else {
		ema = false;
		let intext = '*&nbsp;邮箱格式错误'
		let info = '邮箱';
		mean(t, ema, info, intext)
	}
}


function checkPhone(t) {
	let reg = /^1[34578]\d{9}$/;
	let va = t.value;
	if(reg.test(va)) {
		phone1 = true;
		mean(t, phone1)
	} else {
		phone1 = false;
		let intext = '*&nbsp;没有该手机号'
		let info = '手机号';
		mean(t, phone1, info, intext)
	}
}

function checkAll() {
	if(name && p1 && p2 && ema && phone1) {
		regiterfn()
		async function regiterfn(){
			let p2=await pAjax({
				url:'../server/regiter.php',
				data:{
					username:inputs[0].value,
					psd:inputs[1].value
				}
			})
			if(p2=='用户名已存在'){
				inputs[0].nextElementSibling.innerHTML='用户名已存在'
				inputs[0].nextElementSibling.style.color='red'
				return false;
			}else{
				return true;
			}
		}
		
	} else {
		checkUser(inputs[0])
		checkEma(inputs[3])
		checkPass(inputs[1])
		checkPass2(inputs[2])
		checkPhone(inputs[4])
		return false
	}
}