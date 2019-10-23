
// (公司介绍区块)用户体验：请求过程中提示 数据正在加载
loadingMsg({
    wrapId:'column-info',
    msg:'加载中'
})
/* ==============
   公司介绍请求
   ============== */
$.ajax({
    url:"/data/index.php",
    dataType:"json",
    async:true,
    cache:true,
    data:{
        "categoryId":123456
    },
    type:"post",
    success:function(res){
        // 获取填充对象
        let columnInfo = document.getElementById('column-info')
        // 判断数据是否存在
        if(!res.data || res.data.length===0){
            loadingMsg({
                wrapId:'column-info',
                msg:'当前数据为空'
            })
            return false
        }
        // console.log(res)
        // 处理数据
        let ul = `<ul class="column-info clearfix">`
        res.data.forEach(item=>{
            ul+=`<figure>
                    <a href="newsDetail.php?id=${item.id}">
                        <img src="${item.imgUrl}" alt="">
                        <figcaption>${item.title}</figcaption>
                        ${item.dec}
                    </a>
                </figure>`
        })
            ul += `</ul>`
            // 演示数据异步请求
            setTimeout(function(){
                columnInfo.innerHTML = ul
            },3000)
            // console.log(ul)
    },
    complete:function(){},
    error:function(){}
})

// (公益区块)用户体验：请求过程中提示 数据正在加载
loadingMsg({
    wrapId:'publication-info',
    msg:'加载中'
})
