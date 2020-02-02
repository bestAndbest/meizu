

//放大镜
function imgbigger() {
	
	let smabox = $('.smaimg');
	let mark = $('.mark');
	let bigimg = $('#bigimg');
	let smaoffX = parseInt(smabox.offset().left);
	let smaoffY = parseInt(smabox.offset().top);

	$('.smaimg').on('mouseover', function(e) {
		var e = e || window.event;
		mark.css('display', 'block');
		$('.bigimg').css('display', 'block');
		markposition(e)
	})
	$('.smaimg').on('mouseout', function(e) {
		var e = e || window.event;
		mark.css('display', 'none');
		$('.bigimg').css('display', 'none');
	})

	smabox.on('mousemove', function(e) {
		var e = e || window.event;
		mark.css('display', 'block');
		$('.bigimg').css('display', 'block');
		markposition(e)
	})

	function markposition(e) {
		var a = e || window.event
		let mex = a.clientX - smaoffX - (mark.width() / 2);
		let mey = a.clientY - smaoffY - (mark.height() / 2);
		let maxL = smabox.width() - mark.width();
		let maxT = smabox.height() - mark.height();
		let bigL = 0,
			bigT = 0;
		if(mex <= 0) {
			mex = 0;
			bigL = 0;
		} else if(mex >= maxL) {
			mex = maxL;
			bigL = maxL;
		} else {
			bigL = mex;
		}

		if(mey <= 0) {
			mey = 0;
			bigT = 0;
		} else if(mey >= maxT) {
			mey = maxT;
			bigT = maxT;
		} else {
			bigT = mey;
		}
		let x = -(bigL * 2);
		let y = -(bigT * 2);
		$('.mark').css('left', `${mex}px`);
		$('.mark').css('top', `${mey}px`);
		$('#bigimg').css('left', `${x}px`);
		$('#bigimg').css('top', `${y}px`);
	}

	$('.replaceimg').on('click', function() {
		let src1 = $('#smallimg').attr('src')
		let src2 = $(this).attr('src')
		$(this).attr('src', `${src1}`);
		$('#smallimg').attr('src', `${src2}`);
		$('#bigimg').attr('src', `${src2}`);
	})
}
