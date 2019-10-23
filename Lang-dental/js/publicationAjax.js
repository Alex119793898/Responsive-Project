// (公益区块)用户体验：请求过程中提示 数据正在加载
loadingMsg({
    wrapId:'publication-info',
    msg:'加载中'
})

/* ==============
   公益区块请求
   ============== */
$.ajax({
    url:"/data/index.php",
    type:"post",
    async:true,
    cache:true,
    data:{
        "module":"welfare",
        "categoryId":10000
    },
    dataType:"json",
    success:function(res){
        // 获取填充对象
        let publicationInfo = document.getElementById('publication-info')
        // 判断数据是否存在
        if(!res.data || res.data.length===0){
            loadingMsg({
                wrapId:'publication-info',
                msg:'当前数据为空'
            })
            return false
        }
        // console.log(res)
        // 处理第一条数据
        let html = `<div class="column">
                    <div class="content-flex">
                        <div class="content-big">
                        <img src="${res.data[0].imgUrl}" alt="${res.data[0].title}"></div>
                        <div class="content-small" style="background-color: #${res.data[0].bgColor};">
                            <div class="content-desc">
                                <h4>${res.data[0].title}</h4>
                                <time datetime="${res.data[0].date}">${res.data[0].date}</time>
                                <i class="line"></i>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`
        // 处理第二三条数据
        res.data.forEach((item,index)=>{
            if(index === 0){ return true }
            html += `<div class="column">
                <div class="content-flex">
                    <div class="content-big" style="background-color: #${item.bgColor};">
                        <div class="content-desc ${item.color}">
                            <h4>${item.title}</h4>
                            <time datetime="${item.date}">${item.date}</time>
                            <i class="line"></i>
                            <p class="desc">${item.dec}</p>
                            <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                        </div>
                    </div>
                    <div class="content-small"><img src="${item.imgUrl}" alt="${item.title}"></div>
                </div>
            </div>`
        })
        setTimeout(function(){
            publicationInfo.innerHTML = html
        },3000)
    },
    complete:function(){},
    error:function(){}
})