$(function(){
    banner();

    initMobileTab();
    // 初始化工具提示
    $('[data-toggle="tooltip"]').tooltip()


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
    var getData = function(callback){
        if(window.data){
            callback && callback(window.data);
        }else{
            // 1.获取轮播图数据       ajax
            $.ajax({
            type:'get',
            url:'js/data.json',
            data:'',
            // 强制转换后台返回数据为json格式
            // 如果转换不成功则报错，不执行success执行error回调函数
            dataType:'json',
            success:function(data){
                window.data = data;
                callback && callback(data);
            }
            })
        }
    }
    var render =function(){
            getData(function(data){

            // 2.根据屏幕宽度判断动态渲染对应数据
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

            })
    }
    render();
    // 3.测试功能
    $(window).on('resize',function(){
        render();
    });
    // 4.移动端手势切换
    var startX = 0;
    var distanceX = 0;
    var isMove = false;
    $('.wjs_banner').on('touchstart',function(e){
        // jquery中的touch事件对象与js得touch事件对象不同
        // console.log(e);
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        var moveX = e.originalEvent.touches[0].clientX;
        // console.log(e);
        distanceX = moveX - startX;
        isMove = true;
    }).on('touchend',function(){
        if(isMove && Math.abs(distanceX) > 50){
            // 右滑手势
            if(distanceX > 0){
                console.log('右滑');
                $('#carousel-example-generic').carousel('prev');
            // 左滑手势
            }else{
                console.log('左滑');
                $('#carousel-example-generic').carousel('next');
            }

        }
        // 重置参数
        startX = 0;
        distanceX = 0;
        isMove = false;

    })

}
// 初始化移动端页签长度
    var initMobileTab = function(){
        // 解决换行
        var $navTabs = $('.wjs_product .nav-tabs');
        var width = 0;
        $navTabs.find('li').each(function(i,item){
            var $currLi = $(item);
            var liWidth = $currLi.outerWidth(true);
            width += liWidth;
        })
        $navTabs.width(width);
        console.log(width);
        // 修改代码结构 给nav-tabs设置一个父元素 并且overflow hidden；
        new IScroll($('.nav-tabs-parent')[0],{
            scrollX:true,
            scrollY:false,
            click:true
        })
    }