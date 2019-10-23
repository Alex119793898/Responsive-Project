
// (公司介绍区块)用户体验：请求过程中提示 数据正在加载
loadingMsg({
    wrapId:'company-info',
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
        let companyInfo = document.getElementById('company-info')
        // 判断数据是否存在
        if(!res.data || res.data.length===0){
            loadingMsg({
                wrapId:'company-info',
                msg:'当前数据为空'
            })
            return false
        }
        // console.log(res)
        // 处理数据
        let html = ''
        res.data.forEach(item=>{
                html+=`<figure>
                    <a href="newsDetail.php?id=${item.id}">
                        <img src="${item.imgUrl}" alt="">
                        <figcaption>${item.title}</figcaption>
                        ${item.dec}
                    </a>
                </figure>`
        })
        // 演示数据异步请求
        setTimeout(function(){
            companyInfo.innerHTML = html
        },3000)
        // console.log(html)
    },
    complete:function(){},
    error:function(){}
})

