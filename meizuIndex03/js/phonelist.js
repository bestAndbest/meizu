$(function(){
    ajaxfn("phonelist","phonedetail")
    $(".nav").click(function(e){
        var e = e || window.event;
        var target = e.target;
        // 获取指定数据
        var phone = $(target).attr("id")
        var name = $(target).attr("name")
        if(phone!=null){
            e.preventDefault();
            console.log(name)
            ajaxfn(phone,name)
        }
    })

    function ajaxfn(tt,nn){
        $.ajax({
            url:"../php/demo.php",
            type:"GET",
            data:{"list":tt},
            // async:false,
            // data:{"name":"huan","age":"15","cb":"cb=jQuery110204181862487275063_1569556229388&_=1569556229392"},
            success(res){
                var jsonp = JSON.parse(res); 
                phlist(jsonp,nn)
                suggectforyou(jsonp,nn)
            }
        })
    }


    function  phlist(kk,nn){
      var str = ''; 
      kk.forEach(item => {
        if(item.info!=null){
          str += `
        <dl>
            <dt style="background:${item.newpin!=null?'red':''||'#fff'}">${item.newpin!=null?item.newpin:""}</dt>
            <dd>
                <img src="${item.url}" style="z-index: 10;opacity: 1;" index="${item.id}"/>
                <img src="${item.url1}" index="${item.id}"/>
                <img src="${item.url2!=null?item.url2:null}" index="${item.id}"/>
                <img src="${item.url3!=null?item.url3:null}" index="${item.id}"/>
            </dd>
            <dd>
                <span style="background-image:url('${item.color1}');"></span>
                <span style="background-image:url('${item.color2}');"></span>
                <span style="background-image:url('${item.color3}');"></span>
                <span style="background-image:url('${item.color4}');"></span>
            </dd>
            <dd><h3>${item.name}</h3></dd>
            <dd><p>${item.info}</p></dd>
            <dd><h3 style="color: red;"><span>￥${item.price}</span></h3></dd>
		</dl>
        `
        }
      });
      $(".good_list").html(str)
      control(nn)
    }

   function control(nn){
        $(".good_list dl").click(function(e){
            var target = e.target;
            if($(target).is("span")){
                var i = $(target).index()
                $(target).parent().prev().children().eq(i).animate({"z-index":"10","opacity":"1"},500)
                $(target).parent().prev().children().eq(i).siblings().animate({"z-index":"5","opacity":"0"},500)
                if($(target).parent().prev().children().eq(i).attr("src")==="null"){
                    $(target).parent().prev().children().eq(i).toggle()
                    $(target).toggle()
                }
            }
            if($(target).is("img")){
                var id = $(target).attr("index");
                location.href = "../html/"+nn+".html?id="+id
            }
        })
   }

   function suggectforyou(ss,nn){
    console.log(ss)
        var str = ''
        ss.forEach(item => {
            str+=`
           
            <dl>
                <dt>
                    <a href="../html/${nn}.html?id=${item.id}" class="show"><img src="${item.url}" alt="" index="${item.id}"></a>
                </dt>
                <dd>
                    <p>${item.name}</p>
                    <p>￥${item.price}</p>
                </dd>
            </dl>
      
            `
        });
        $(".comment_main").html(str);
   }

})