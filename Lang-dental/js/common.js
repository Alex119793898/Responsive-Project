function loadingMsg(params){
    let wrap = document.getElementById(params.wrapId)
    wrap.innerHTML = `<div class="loading-wait">
                        ${params.msg}
                        <span>
                            <i class="iconfont icon-jiazai"></i>
                        </span>
                    </div>`

    // console.log(params)
}