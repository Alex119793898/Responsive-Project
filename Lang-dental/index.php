<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv=“X-UA-Compatible” content=“IE=Edge,chrome=1”>
    <!-- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> -->
    <title>Document</title>
    <!-- 项目描述 -->
    <meta name="description" content="">
    <!-- 项目搜索关键字：必不可少没有的话网站是废的 baidu搜不到 -->
    <meta name="keywords" content="">
    <!-- 项目标签图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="images/icon">
    <link rel="stylesheet" href="css/normalize.css">
    <!-- swiper 插件样式 -->
    <link rel="stylesheet" href="js/swiper/css/swiper.css">
    <link rel="stylesheet" href="css/main-flex.css">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="font/iconfont.css">
</head>

<body>
    <!-- 头部header -->
    <?php include('header.php')?>

    <!-- 幻灯片 start -->
    <div id="slide-wrap">
        <div id="slide-content" class="clearfix">
            <ul class="clearfix">
                <li><a href="#"><img src="images/banner.jpg" alt=""></a></li>
                <li><a href="#"><img src="images/banner.jpg" alt=""></a></li>
                <li><a href="#"><img src="images/banner.jpg" alt=""></a></li>
            </ul>
        </div>
        <ul class="slide-nav clearfix">
            <a href="#" class="current"></a>
            <a href="#"></a>
            <a href="#"></a>
        </ul>
        <span class="iconfont icon-jiantou-zuo slide-pre"></span>
        <span class="iconfont icon-jiantou-you slide-next"></span>
    </div>

    <div class="container">
        <!-- 介绍模块 -->
        <section>
            <header>
                <div class="column-title">
                    <h4>朗朗口腔</h4>
                    <p>呵护牙齿健康 创造美好未来<span></span>care for teeth to create a better future</p>
                </div>
            </header>
            <div id="company-info" class="company-info clearfix">
                <!-- 数据渲染 -->
            </div>
            <a href="#" class="more-btn">查看更多</a>
        </section>
        <!-- 公益模块 -->
        <section class="publication">
            <header>
                <div class="column-title padding-top-54 padding-bottom-54">
                    <h4>朗朗公益</h4>
                    <p>呵护牙齿健康 创造美好未来<span></span>care for teeth to create a better future</p>
                </div>
            </header>
            <div class="publication-info" id="publication-info">
                <!-- 第一个flex start-->
                <!-- <div class="column">
                    <div class="content-flex">
                        <div class="content-big"><img src="images/pic002.jpg" alt=""></div>
                        <div class="content-small" style="background-color: #eae9e4;">
                            <div class="content-desc">
                                <h4>爱能养老院活动</h4>
                                <time datetime="2016-09-17">2016-09-17</time>
                                <i class="line"></i>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- 第一个flex end -->
                <!-- 第二个flex start -->
                <!-- <div class="column">
                    <div class="content-flex">
                        <div class="content-big">
                            <div class="content-desc">
                                <h4>美吉姆早教义诊活动</h4>
                                <time datetime="2016-09-17">2016-09-17</time>
                                <i class="line"></i>
                                <p class="desc">在“牙齿健康从娃娃抓起”大型美吉姆公益义诊活动现场，参与活动的朗朗口腔辽宁分公司儿童口腔专家王阳有着丰富的临床治疗经验，包括儿童龋病、儿童口腔外科、儿童错颌畸形早期矫治等，囊括了儿童口腔健康的各个方面。王医生现场对孩子们进行了细致的口腔检查</p>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                        <div class="content-small"><img src="images/pic003.jpg" alt=""></div>
                    </div>
                </div> -->
                <!-- 第二个flex end -->
                <!-- 第三个flex start -->
                <!-- <div class="column">
                    <div class="content-flex">
                        <div class="content-big" style="background-color: #e03854;">
                            <div class="content-desc color-white" >
                                <h4>商业城公益捐赠活动</h4>
                                <time datetime="2016-09-17">2016-09-17</time>
                                <i class="line"></i>
                                <p class="desc">朗朗口腔辽宁分公司于2016年9月17日在沈阳核心商圈中街商业城举办公益助残捐赠活动，本次共计为辽宁省残疾人福利基金会捐助善款184500元，朗朗口腔辽宁分公司CEO张显威、总经理杜忠华、原省委宣传部副部长葛本亮、辽宁省残联秘书长胡雅菊、商业城总经理刘丽</p>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                        <div class="content-small"><img src="images/pic004.jpg" alt=""></div>
                    </div>
                </div> -->
                <!-- 第三个flex end -->
            </div>
        </section>
    </div>

    <!-- 医生模块 -->
    <section class="doctor">
        <header>
            <div style="display: none;">
                <h4>朗朗口腔</h4>
                <p>呵护牙齿健康 创造美好未来<span></span>care for teeth to create a better future</p>
            </div>
        </header>
        <div class="container">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- swiper 1 -->
                    <div class="swiper-slide">
                        <div class="doctor-slide-item clearfix">
                            <div class="slide-title">
                                <img src="images/pic005.jpg" alt="方小珍">
                                <span>方小珍</span>
                            </div>
                            <div class="slide-content">
                                <h5>牙周主诊医师</h5>
                                <p class="desc">擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</p>
                                <i class="line"></i>
                                <p class="text">国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- swiper 2 -->
                    <div class="swiper-slide">
                        <div class="doctor-slide-item clearfix">
                            <div class="slide-title">
                                <img src="images/pic005.jpg" alt="方小珍">
                                <span>方小珍</span>
                            </div>
                            <div class="slide-content">
                                <h5>牙周主诊医师</h5>
                                <p class="desc">擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</p>
                                <i class="line"></i>
                                <p class="text">国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- swiper 3 -->
                    <div class="swiper-slide">
                        <div class="doctor-slide-item clearfix">
                            <div class="slide-title">
                                <img src="images/pic005.jpg" alt="方小珍">
                                <span>方小珍</span>
                            </div>
                            <div class="slide-content">
                                <h5>牙周主诊医师</h5>
                                <p class="desc">擅长：仿真陶瓷牙修复、牙周系统治疗、残根残冠的保存治疗等。</p>
                                <i class="line"></i>
                                <p class="text">国内知名大学口腔医学学士，曾就职于高端私人齿科工作室，从事口腔事业10余年，对口腔各类常见疾病的临床治疗积累了丰富经验。积极学习新技术的临床应用，不断进修提升，精通牙体保存治疗。数次参加北京医科大学牙周学习研究项目、香港大学牙周学习研究项目。技术上追求完美，坚持 “微创无痛治疗” 原则，深受患者的信赖！</p>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- swiper 3 end-->
                </div>

                <!-- Add Arrows -->
                <!-- <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div> -->
            </div>
            <div class="p-r">
                <!-- Add Pagination -->
                <div class="swiper-pagination doctor-swiper-pagination"></div>
            </div>
        </div>
    </section>

    <!-- 资讯模块 -->
    <div class="container">
        <section>
            <header>
                <div class="column-title padding-top-90 padding-bottom-40">
                    <h4>朗朗口腔</h4>
                    <p>呵护牙齿健康 创造美好未来<span></span>care for teeth to create a better future</p>
                </div>
            </header>
            <ul class="tab-menu" id="tab-menu">
                <!-- <a href="#" class="current">行业动态</a><a href="#">朗朗资讯</a><a href="#">媒体报道</a><a href="#">公益活动</a> -->
            </ul>
            <div class="news-content" id="news-content">
                <!-- 性能优化方式一： -->

                <div id="industry" >
                        <!-- <div class="box  clearfix">
                            <div class="column">
                                <img src="images/pic006.jpg" alt="朗朗口腔“合赢未来，与资本共...">
                                <h5>朗朗口腔“合赢未来，与资本共...</h5>
                                <time datetime="2016-09-27">2016-09-27</time>
                                <i class="line"></i>
                                <p class="desc">朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站...</p>
                                <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                            </div>
                        </div> -->
                </div>
                <div id="information" style="display: none;">bbb</div>
                <div id="media" style="display: none;">ccc</div>
                <div id="publication" style="display: none;">ddd</div>


                <!-- 性能优化方式二： -->
                <!-- <div class="box  clearfix">
                    <div class="column">
                        <img src="images/pic006.jpg" alt="朗朗口腔“合赢未来，与资本共...">
                        <h5>朗朗口腔“合赢未来，与资本共...</h5>
                        <time datetime="2016-09-27">2016-09-27</time>
                        <i class="line"></i>
                        <p class="desc">朗朗口腔“合赢未来，与资本共舞”口腔行业峰会继山东青岛第一站后，即将迎来第二站：福建厦门站...</p>
                        <a href="#" class="link-more">查看更多<i class="iconfont icon-jiantou_xiangyou_o"></i></a>
                    </div>
                </div> -->
            </div>
        </section>
    </div>

    <!-- 底部footer -->
    <?php include('footer.php')?>

    <script src="js/jquery-1.12.4.js"></script>
    <script src="js/swiper/js/swiper.min.js"></script>
    <script src="js/doctorSwiper.js"></script>
    <script src="js/common.js"></script>
    <script src="js/productAjax.js"></script>
    <script src="js/publicationAjax.js"></script>
    <script src="js/tabAjax.js"></script>
    <script src="js/main.js"></script>
</body>

</html>