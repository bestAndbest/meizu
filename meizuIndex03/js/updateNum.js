$(function(){
    var store = window.localStorage.data;
    if(store!=null){
        var num = JSON.parse(store).length
    }
    $(".num").text(num);
    var str = ''
    var txt2= ''
    JSON.parse(store).forEach(item => {
        str += `
        <li style="width:318px;height:118px;border-bottom:1px solid #ccc">
            <a href="html/shopcar.html" style="width:100px;"><img src="${item.imgsrc}" style="display:inline-block;width:100px;height:118px;float:left;"></a>
            <span style="display:inline-block;width:150px;height:30px;font-size:16px;">${item.pname}</span>
            <p style="display:inline-block;width::150px;font-size:16px;position:relative;top:-30px;">${item.pcolor}</p>
            <p style="display:inline-block;width::150px;font-size:16px;position:relative;top:-30px;color:red;">￥${item.price}</p>
            <p style="display:inline-block;width::150px;font-size:14px;cursor:pointer;position:relative;top:-30px;">去支付>></p>
        </li>
    `
    });
    txt2 = $("<ul></ul>").html(str); 
    //创建节点
    $(".shcar").mouseenter(function(){
        txt2.css({
            "width":"318px",
            "nim-height":"118px",
            "position":"absolute",
            "top":"40px",
            "left":"-300px",
            "background":"#fff",
            "border":"1px solid #ccc",
            "border-radius":"5px",
            "overflow":"hidden",
            "display":"block"
        })
        $(".shcar").append(txt2)
    })
    $(txt2).mouseleave(function(){
        txt2.css("display","none")
    })



})