

$(function(){
    banner();
});

var banner = function(){
    // 动态轮播图实现思路
    // 1.获取轮播图数据       ajax
    // 2.根据当前屏幕宽度判断并动态渲染
    // 2.1准备数据
    // 2.2把数据转换成html格式字符串（动态创建 / 字符串拼接 / 模版引擎arttemplate）
    // 2.3把字符渲染到页面中
    // 3.测试功能

    // UI框架：bootstrap  妹子UI  easyUI  jqueryMobile    mui    framework7
    // 移动端的UI框架bootstrap jqueryMobile  mui  framework7
    // 模版引擎 arttemplate handlebars  mustache  baiduTemplate  velocity  underscore

    var render =function(){
        $.ajax({
        type:'get',
        url:'js/data.json',
        data:'',
        // 强制转换后台返回数据为json格式
        // 如果转换不成功则报错，不执行success执行error回调函数
        dataType:'json',
        success:function(data){
            window.data = data;
            // 根据屏幕宽度判断动态渲染对应数据
            var isMobile = $(window).width()<768;
            // console.log(isMobile);
            // 准备数据——>模版引擎动态渲染
            var pointHtml = template('pointTemplate',{list:data});
            var imgHtml = template('imgTemplate',{list:data,isM : isMobile});
            // console.log(pointHtml);
            // console.log(imgHtml);
            // 渲染到页面中
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imgHtml);
        }
        })
    }
    render();
    $(window).on('resize',function(){
        render();
    })
}