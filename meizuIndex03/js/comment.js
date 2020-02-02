$(function(){
    var m = 0;
    //获取a标签的数量，即为图片的数量
    var count = $('.content a').length;
    var timer = setInterval(fn,3000);
    function fn(){
        if(m>=count){
            m = 0;
        }
        hover(m);
        controlLi(m);
        m++;
    }
    //控制图片
    function hover(n){
        //循环一遍，把所有的图片全部遍历出来
            for(var i = 0;i<count;i++){
                $('.content a').eq(i).css('display','none');
            }
            //显示指定的图片
            $('.content a').eq(n).fadeIn(500);
           
        }

        $('.content').mouseover(function(){
            clearInterval(timer);
        })
        $('.content').mouseout(function(){
            timer=setInterval(fn,3000);
        })

        //控制侧栏图标部分
        function controlLi(n){
            //遍历侧栏的所有li
            var count = $('.icon span').length;
            for(i = 0; i< count;i++){
                    $('.icon span').eq(i).css('background','rgba(255,255,255,0.4)');
                }
                $('.icon span').eq(n).css('background','rgba(255,255,255,1)');
        }

         //给图标绑定事件
        for(var i =0;i<$('.icon span').length;i++){
         //自己调用自己的方法  (functuon(){})() 
        (function(i){
            $('.icon span').eq(i).click(function(){
                hover(i);//绑定对应的图片
                controlLi(i);//对应图片的对应图标 
                //改变循环的变量
                m = i+1;
            })
        })(i)
        }


        /*
            下面是ajax数据请求
            从数据库中获取数据到页面中
        */
            $.ajax({
                url:"../php/demo.php",
                type:"GET",
                data:{"list":"hotcomments"},
                success(res){
                    var jsonp = JSON.parse(res);
                    commentli(jsonp)
                }
            })

       //数据渲染
       var str = ''
       function commentli(dd){
           dd.forEach(item => {
            str+=`
            <li class="li">
                <div class="hd" style="background-image: url('${item.authorpic}');background-size: 100% 100%;">
                </div>
                <p>${item.tittle}</p>
                <p>
                    <span class="author">${item.username}</span>
                    <span class="tanlun"><em class="iconfont">&#xe876;</em>${item.comment}</span>
                    <span class="liulan"><em class="iconfont">&#xe877;</em>${item.fangwenliang}</span></p>
                <div class="authorinfo">
                <div class="head" style="background-image: url('${item.authorpic}');background-size: 100% 100%;">

                </div>
                <p class="auth">${item.username}</p>
                <p class="authurl">${item.tittle}</p>
                <p class="authurl">
                    <span>帖子:${item.comment}</span>
                    <span>收听:921</span>
                    <span>听众:${item.fangwenliang}</span>
                </p>
                </div>
            </li>
            `
           });
           $(".tielist ul").html(str)
           //鼠标进入
           $(".hd").mouseenter(function(e){
                var e = e|| window.event;
                var target = e.target;
                var index = $(target).parent().index();
                if($(target).attr("class")=="hd"){
                    $(".authorinfo").eq(index).animate({
                        "z-index":"99"
                    },500)
                }
           })
           //鼠标离开
           $(".authorinfo").mouseleave(function(e){
            var e = e|| window.event;
            var target = e.target;
            var index = $(target).parent().index();
            if($(target).attr("class")=="authorinfo"){
                $(".authorinfo").eq(index).animate({
                    "z-index":"-1"
                },500)
            }
       })

       } 

        $.ajax({
            url:"../php/demo.php",
            type:"GET",
            data:{"list":"commentlist"},
            success(res){
                var jsonp = JSON.parse(res);
                commlist(jsonp)
            }
        })


        var str1 = ''
        function commlist(dd){
            dd.forEach(item => {
                str1+=`
                <div class="argument">
                    <div class="con_info">
                        <img src="${item.infopic}" alt="">
                        <h4>${item.tip}</h4>
                        <p class="title">${item.tittle}</p>
                        <p class="viewlist">
                            <span><em class="iconfont">&#xe877;</em>${item.fangwenliang}</span>
                            <span><em class="iconfont">&#xe876;</em>${item.comment}</span>
                            <span><em></em>/${item.author}</span>
                            <span><em></em>/${item.fabutime}</span>
                            <span><a href="#">阅读全文</a></span>
                        </p>
                        <p class="infoth">${item.tittleinfo}</p>
                        <p class="share"><a href="${item.shareurl}"><em class="iconfont">&#xe62a;</em></a></p>
                    </div>
                </div>
                `
                
            });
            $(str1).appendTo($(".session"));
            var kk = document.getElementsByClassName("infoth");
            //优化p  class="info"效果
            // console.log(kk)
            youhuap(kk)
        }

        //设置语句段的超出部分会出现。。。。
        function youhuap(ff){
            var str = "....."
           for(var i =0;i<ff.length;i++){
               console.log($(ff[i]).attr('class'))
                var len = $(ff[i]).text().length;
                if(len>=49){
                    $(ff[i]).html($(ff[i]).text()+str);
                }
           }
        }
     

        //设置当前时间
        (function(){
            //创建时间对象
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var str = "<a href='#'>"+year+"年"+month+"月"+day+"日"+"</a>"
            //时间渲染
            $(".qindao").children().eq(0).html(str)
        })()

    })