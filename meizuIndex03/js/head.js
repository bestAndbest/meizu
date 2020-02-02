$(function(){
    $(".navl ul li a").mouseover(function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement
        if ($(target).parent().hasClass("active")) {
            $(".phl").animate({
                "height": "250px"
            }, 500)
        } else {
            $(".phl").css({
                "height": "0px"
            })
        }
        if($(target).attr("id")!=null){
            mousepl($(target).attr("id"),$(target).attr("name"))
        }
    })
    $(".phl").mouseleave(function () {
        $(".phl").css({
            "height": "0px"
        })
    })

    //自执行函数
    function self() {
        //自执行函数
        (function () {
            //调整完全居中
            var dl_w = $(".phlist dl").width();
            //获取父级盒子的大小
            var phl_w = $(".phl").width()

            var ph_w = dl_w * $(".phlist dl").length //决定多少个

            $(".phlist").css({
                "width": ph_w + "px",
                "margin-left": (phl_w - ph_w) / 2 + "px"
            })
        })()
    }


function mousepl(tt,nn){
    $.ajax({
        url:"../php/limit.php",
        type:"GET",
        data:{"list":tt},
        // async:false,
        // data:{"name":"huan","age":"15","cb":"cb=jQuery110204181862487275063_1569556229388&_=1569556229392"},
        success(res){
            var jsonp = JSON.parse(res);
            phl(jsonp,nn)
        }
    })
}

function phl(jj,nn){
    var str = '';
    jj.forEach(item => {
        str += `
        <dl>
            <a href="../html/${nn}.html?id=${item.id}"><dt style="background-image:url(${item.url});background-size:100% 100%;"></dt></a>
            <dd><span>${item.name}</span></dd>
            <dd><span><em>￥</em>${item.price}</span></dd>
        </dl> 
        `
    });
    $(".phlist").html(str);
    self()
}

})