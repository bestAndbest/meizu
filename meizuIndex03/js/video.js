$(function(){
    var $video = $("#video1");
    console.log($video)
    //绑定事件
    $video.bind('canplay',function(){
        //获取视频总时间
        var time = $video[0].duration;

        //格式化时间
        // $(".tt").eq(0).text(toSecond(time))

        //开始播放
        $(".play_btn").click(function(){
            $video[0].play();
            //判断显示哪个按键
            if(!$video[0].paused){
                $(".play_btn").css("display","none");
                $(".pause_btn").css("display","block")
            }
        })

        //暂停播放
        $(".pause_btn").click(function(){
            $video[0].pause();
            if($video[0].paused){
                $(".play_btn").css("display","block");
                $(".pause_btn").css("display","none")
            }
        })

        //当前时间进度条时间更新
        $video.bind('timeupdate',function(){
            var current = $video[0].currentTime;
            // $(".")
            //总时长
            var total_time = $video[0].duration;
            //百分比
            var scale = current/total_time;
            //进度条的长度
            var w = scale*100+"%";
            //实时更新
            $(".currentinfo").css("width",w)
        })

        //点击季度条的时候，时间更新
        $(".pressinfo").click(function(e){
            var e = e || window.event;
            //获取总长度
            var total_w = $(".pressinfo").width()
            //x轴的偏移量
            var offsetX = e.offsetX;
            //所占百分比
            var scale = offsetX / total_w;
            //当前时间变化位置，就是用户点击位置,百分比*总时长
            $video[0].currentTime = scale * $video[0].duration
            //进度条变化
            var w = scale*100+"%";
            $("currentinfo").css("width",w)
        })

        //视频结束播放，所有控件全部都归原
        $video.bind('ended',function(){
            $video[0].currentTime = 0;
            $video[0].pause()
            $('.play-btn').css('display', 'block');
            $('.pause-btn').css('display', 'none');
        })

        //调节声音,点击喇叭，音量条出来
        $(".vol").mouseenter(function(){
            $(".vol_bar").animate({
                "opacity":"1"
            },500)
        })
        $('.novol').mouseenter(function(){
            $(".vol_bar").css("opacity","1")
        })
        $(".listen").mouseleave(function(){
            $(".vol_bar").animate({
                "opacity":"0"
            },500)
        })

        $(".vol_bar").click(function(e){
            var e = e || window.event
            var vol = $video[0].volume
            //获取音量条的长度
            var vol_w = $(".vol_bar").width()
            //鼠标点击位置的偏移量
            var offsetX = e.offsetX;
            //
            var scale = offsetX/vol_w;
            var w = scale * 100+"%"
            //音量变化
            $video[0].volume = scale
            //显示对应的图标
            if(scale==0){
                $('.vol').css('display','none');
                $('.novol').css('display','block');
                $('.novol').mouseenter(function(){
                    $(".vol_bar").css("opacity","1")
                })
            }
            else{
                $('.vol').css('display','block');
                $('.novol').css('display','none');
            }
            $(".vol_box").css("width",w)
        })
    
    
        $(".fangbig").click(function(){
            if($video[0].webkitRequestFullScreen){
                $video[0].webkitRequestFullScreen()
            }
            else if($video[0].mozRequestFullScreen){
                $video[0].mozRequestFullScreen()
            }
            else if($video[0].msRequestFullScreen){
                $video[0].msRequestFullScreen()
            }
        })
    })


    //粒子特效//星星
    function lizi(){
        //创建五彩颜色
        var str = "1234567890ABCDEF"
        //创建一个数组存贮
        var arr = []
        //获取16位里面的随机一位
        var kk = '#'
        for(var i =0;i<6;i++){
            var aa = Math.random()*17;
            kk +=str.substr(aa,1)
        }
        arr.push(kk);
        var bb = arr.join('');
        return bb
    }

   
    // 创建任意离子、
    function createlizi(){
         //浏览器可视窗口的高度和宽度
        var win_h = window.innerHeight
        var win_w = window.innerWidth
        var array = []
        for(var i =0;i<50;i++){
            ss = lizi();
            array.push(ss)
            //创建元素的坐标
            var x = parseInt(Math.random()*win_w)
            var y = parseInt(Math.random()*win_h)
        } 
        color = parseInt(Math.random()*array.length)
        // console.log(x,y)
        var str = "<span class='span iconfont'>&#xe626;</span>"
        
        //追加到body里面
        $("body").append(str);

        //获取所有的span
        // $(".span").(function(){
        
        $(".span").css({
            "position":"absolute",
            "left":x-str.length,
            "top":(y-str.length)>win_h?(y-str.length)==(win_h-y):(y-str.length),
            "color":array[color],
            "transform":"scale("+(Math.random()*3).toFixed(2)+")",
            "transition":"all 1s"
        })
        var time;
        var index = $(".span").index();
        time = setTimeout(function(){
            $(".span").eq(index-1).remove()
        },1000)
        
    }
    setInterval(function(){
        createlizi()
    },200)

})