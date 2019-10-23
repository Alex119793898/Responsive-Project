

// (资讯区块)用户体验：请求过程中提示 数据正在加载
// loadingMsg({
//     wrapId:'news-content',
//     msg:'加载中'
// })


/* ==============
   资讯区块请求性能优化一：
   ============== */
$.ajax({
    url:"/data/newsCategory.php",       //请求url地址
    dataType:"json",                    //返回格式json
    async:true,                         //是否异步请求 默认是
    cache:true,                         //是否读取缓存
    timeout:5000,                       //设置超时,超时将取消请求
    data:JSON.stringify({                              //post 提交参数
        "module":'news'
    }),
    type:"post",                        //post / get
    headers:{                           //设置请求头
        "Content-type":"application/json; charset=utf-8"
    },
    success:function(res){              //请求成功时处理
        // tab-menu获取填充对象
        let tabMenu = document.getElementsByClassName('tab-menu')[0]
        let html = ''
        res.data.forEach((item,index)=>{
            let className = ''
            if(index === 0){ className = 'current' }
            html +=`<a data-request="false" href="javascript:void(0)" class="${className}" onclick="loadNewsData({_this:this,id:${item.id},index:${index}})">${item.categoryName}</a>`
        })
        // tab菜单渲染
        tabMenu.innerHTML = html

        // 默认加载第一块资讯的数据
        loadNewsData({_this:tabMenu.children[0],id:res.data[0].id,index:0})
        // console.log(res,tabMenu,html)
    },
    complete:function(){},              //请求完成时处理
    error:function(){}                  //请求报错时处理
})



function loadNewsData(params){

    // 获取分类菜单
    let aItem = document.getElementsByClassName('tab-menu')[0].children
    // news-content获取填充对象
    let newsContentItem = document.getElementById('news-content').children
    // 获取data-request属性标识
    let getRequest = params._this.getAttribute('data-request')

    // 分类高光
    // 清除所有高光
    for ( let i = 0; i<aItem.length; i++){aItem[i].className = '' }
    // 当前tab高光
    params._this.className = 'current'

   // 隐藏所有资讯
   for(let i=0; i<newsContentItem.length; i++){ newsContentItem[i].style.display = 'none' }
   // 显示指定资讯区域
   newsContentItem[params.index].style.display = 'block'

   // data-request属性标识性能优化
   if(getRequest === 'true'){ return false }
    $.ajax({
        url:"/data/indexNews.php",          //请求url地址
        dataType:"json",                    //返回格式json
        timeout:5000,                       //设置超时,超时将取消请求
        data:JSON.stringify({               //post提交参数
            "categoryId":params.id
        }),
        type:"post",                        //post / get 请求方式
        headers:{                           //设置请求头
            "Content-type":"application/json; charset=utf-8"
        },
        success:function(res){              //请求成功时处理
            let html = '<div class="box  clearfix">'
            res.data.forEach(item=>{
                // 格式化时间
                let time = item.time.split(' ')
                html += `<div class="column">
                    <div style="background:url(${item.imgUrl}) no-repeat center/cover; ">
                        <img src="./images/pic007.png" alt="${item.title}">
                    </div>
                    <h5>${item.title}</h5>
                    <time datetime="${time[0]}">${time[0]}</time>
                    <i class="line"></i>
                    <p class="desc">${item.dec}</p>
                    <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                </div>`
            })
            html += '</div>'

            // 资讯渲染
            newsContentItem[params.index].innerHTML = html
            // 设置data-request标识为ture
            params._this.setAttribute('data-request','true')
        },
        complete:function(){},              //请求完成时处理
        error:function(){}                  //请求报错时处理
    })
}



/* ==============
   资讯区块请求性能优化二：
   ============== */

// $.ajax({
//     url:"/data/newsCategory.php",       //请求url地址
//     dataType:"json",                    //返回格式json
//     async:true,                         //是否异步请求 默认是
//     cache:true,                         //是否读取缓存
//     timeout:5000,                       //设置超时,超时将取消请求
//     data:JSON.stringify({                              //post 提交参数
//         "module":'news'
//     }),
//     type:"post",                        //post / get
//     headers:{                           //设置请求头
//         "Content-type":"application/json; charset=utf-8"
//     },
//     success:function(res){              //请求成功时处理
//         // tab-menu获取填充对象
//         let tabMenu = document.getElementsByClassName('tab-menu')[0]
//         let html = ''
//         res.data.forEach((item,index)=>{
//             let className = ''
//             if(index === 0){ className = 'current' }
//             html +=`<a data-type="${item.type}" href="javascript:void(0)" class="${className}" onclick="loadNewsData({_this:this,id:${item.id},index:${index}})">${item.categoryName}</a>`
//         })
//         // tab菜单渲染
//         tabMenu.innerHTML = html

//         // 默认加载第一块资讯的数据
//         loadNewsData({_this:tabMenu.children[0],id:res.data[0].id,index:0})
//         // console.log(res,tabMenu,html)
//     },
//     complete:function(){},              //请求完成时处理
//     error:function(){}                  //请求报错时处理
// })

// // 准备存储数据的json对象
// let data = {}

// function loadNewsData(params){
//     // 获取分类菜单
//     let aItem = document.getElementsByClassName('tab-menu')[0].children
//     // news-content获取填充对象
//     let newsContent = document.getElementById('news-content')
//     // 获取data-type属性标识
//     let getType = params._this.getAttribute('data-type')

//     // 分类高光
//     // 清除所有高光
//     for ( let i = 0; i<aItem.length; i++){aItem[i].className = '' }
//     // 当前tab高光
//     params._this.className = 'current'


//     // 获取存储的数据
//     let dataItem = data[getType]
//     if(dataItem){
//         // 数据渲染render函数
//         render(dataItem,newsContent)
//         return false
//     }
//     console.log(dataItem)
//     $.ajax({
//         url:"/data/indexNews.php",          //请求url地址
//         dataType:"json",                    //返回格式json
//         timeout:5000,                       //设置超时,超时将取消请求
//         data:JSON.stringify({               //post提交参数
//             "categoryId":params.id
//         }),
//         type:"post",                        //post / get 请求方式
//         headers:{                           //设置请求头
//             "Content-type":"application/json; charset=utf-8"
//         },
//         success:function(res){              //请求成功时处理
//             // 数据渲染render函数
//             render(res.data,newsContent)

//             // 给data对象存储数据
//             data[getType] = res.data
//             console.log(data)
//         },
//         complete:function(){},              //请求完成时处理
//         error:function(){}                  //请求报错时处理
//     })
// }

// function render(data,dom){
//     let html = '<div class="box  clearfix">'
//     data.forEach(item=>{
//         // 格式化时间
//         let time = item.time.split(' ')
//         html += `
//             <div class="column">
//                 <div style="background:url(${item.imgUrl}) no-repeat center/cover; ">
//                     <img src="./images/pic007.png" alt="${item.title}">
//                 </div>

//                 <h5>${item.title}</h5>
//                 <time datetime="${time[0]}">${time[0]}</time>
//                 <i class="line"></i>
//                 <p class="desc">${item.dec}</p>
//                 <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
//             </div>`
//     })
//     html +=`</div>`
//     // 资讯渲染
//     dom.innerHTML = html
// }

