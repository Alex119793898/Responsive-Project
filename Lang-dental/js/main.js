let slideWrap = document.getElementById('slide-wrap')
let slideContent = slideWrap.children[0]
let viewWidth = document.documentElement.clientWidth || document.body.clientWidth
let liItem = slideContent.getElementsByTagName('li')
let aItem = slideWrap.children[1].getElementsByTagName('a')
let pre = slideWrap.children[2]
let next = slideWrap.children[3]
// 声名当前索引值
let currentIndex = 0
// 声名开关标记
let flag = false
// 标记定时器
let timer = null
// 标记轮播
let autoTimer = null

// console.log(slideWrap,slideContent,viewWidth,liItem,aItem,pre,next)

slideContent.style.width = viewWidth * liItem.length + 'px'
for(let i=0; i<liItem.length; i++){
    liItem[i].style.width = viewWidth + 'px'
}

for(let j=0; j<liItem.length; j++){
    aItem[j].onclick = function(){
        // 把a的索引j赋值给索引赋值
        currentIndex = j
        // 对应第j个a的移动slideContent的left值
        slideImage(j)
    }
}
// 上一张按钮
pre.onclick = function(){
    if(flag){return false}
    flag = true     //下一步要去设置定时器flag = false 再次打开开关
    prePic()
}
// 下一张按钮
next.onclick = function(){
    if(flag){return false}
    flag = true     //下一步要去设置定时器flag = false 再次打开开关
    nextPic()
}


// 抽离pre供轮播使用
function prePic(){
    currentIndex--
    if(currentIndex<0){
        currentIndex = liItem.length-1
    }
    slideImage(currentIndex)
}

// 抽离next轮播使用
function nextPic(){
    currentIndex++
    if(currentIndex>liItem.length-1){
        currentIndex = 0
    }
    slideImage(currentIndex)
}

// 自动轮播
autoPlay()
function autoPlay(){
    autoTimer = setInterval(function(){
        nextPic()
    },5000)
}

// 鼠标进入slideWrap停止轮播
slideWrap.onmouseenter = function(){
    clearInterval(autoTimer)
}
// 鼠标离开slideWrap重新轮播开始
slideWrap.onmouseleave = function(){
    autoPlay()
}

// 切换图片
function slideImage(index){
    slideContent.style.left = -viewWidth * index + 'px'
    // 高光切换
    toogleHigh()
    // 开启定时器 下一步要去声名定时器标记，用来清除定时器
    timer = setTimeout(function(){
        flag = false
        // 清除定时器
        clearTimeout(timer)
    },500)
}

// 切换高光
function toogleHigh(){
    for(let k=0; k<liItem.length; k++){
        aItem[k].className = ''
    }
    // currentIndex的取值范围[0,1,2]值的根源从[a,a,a]a的数量来的
    aItem[currentIndex].className = 'current'
}


