$(function () {
    //首页快速导航点击事件
    var isHidden = true;
    $('.small-logo').click(function () {
        if (isHidden) {
            $('.navLinks').fadeIn(800);
        } else {
            $('.navLinks').fadeOut(500);
        }
        isHidden = !isHidden;
    });

    //首页动画封装并调用
    navAnimation();
    function navAnimation() {
        //首页星游传媒加载后滑入
        $('#logoMain').fadeIn(200).animate({'top':'100px'},500);
        //媒体平台加载后滑入
        $('#slogan').fadeIn(200).animate({'top':'200px'},500);

        //首页星游传媒导航块
        $('.navBlock a').each(function (index,element) {
            $(element).animate({'opacity': '0.8'},100);
            $(element).animate({'top':'130px','opacity': '1'},(index+2)*170,function () {
                $(element).animate({'top':'100px'},(index+1)*40,function () {
                    $(element).animate({'top':'130px'},(index+2)/(index+1)*200);
                })
            });
        });

            //不行
        //$('.navBlock a').first().animate({'top':'280px'},150,function () {
        //    $(this).animate({'top':'250px'},100,function () {
        //        $(this).animate({'top':'280px'},100);
        //        $('.navBlock a').eq(1).animate({'top':'280px'},150,function () {
        //            $(this).animate({'top':'250px'},150, function () {
        //                $(this).animate({'top': '280px'},150)
        //            });
        //            $('.navBlock a').eq(2).animate({'top':'280px'},150,function () {
        //                $(this).animate({'top':'250px'},200, function () {
        //                    $(this).animate({'top': '280px'},100)
        //                });
        //                $('.navBlock a').eq(3).animate({'top':'265px'},300,function () {
        //                    $(this).animate({'top':'250px'},100, function () {
        //                        $(this).animate({'top': '265px'},100)
        //                    });
        //                    $('.navBlock a').eq(4).animate({'top':'265px'},300,function () {
        //                        $(this).animate({'top':'250px'},100, function () {
        //                            $(this).animate({'top': '265px'},100)
        //                        })
        //                    });
        //                });
        //            });
        //        });
        //    });
        //});
    }
    //首页还原动画之前的状态
    function navRestore() {
        //左中2个背景图
        $('#logoMain').fadeOut(0).animate({'top': '50px'}, 50);
        //媒体平台加载后滑入
        $('#slogan').fadeOut(0).animate({'top': '300px'}, 50);
        //首页星游传媒导航块
        $('.navBlock a').each(function (index, element) {
            $(element).animate({'top': '-300px', 'opacity': '0'}, 0)
        })
    }

    //媒体资源页面动画封装并调用
    mediaResourceAnimation();
    function mediaResourceAnimation() {
        //媒体资源tab栏切换
        $('.ResourceList ul li').click(function () {
            var index = $(this).index();
            $('.ResourceDes ul li div').eq(index).show().siblings().hide();
        });

        //.ResourceList媒体资源导航栏鼠标经过事件
        $('.ResourceList ul li').mouseover(function () {
            $(this).children('a').css({
                color: '#FFFFFF',
                background: 'url("images/slide-nav-bg.png") no-repeat', //为什么路径不是../
                backgroundSize: '143px 94px',
                backgroundPosition: '0 -47px'
            });
            $(this).siblings().children('a').css({
                color: '#00005A',
                background: 'url("images/slide-nav-bg.png") no-repeat', //为什么路径不是../
                backgroundSize: '143px 94px',
                backgroundPosition: '0 0'
            });
        });
        //媒体资源加载动画
        $('.ResourceList ul li a').animate({'top':'0','opacity' :'1'},800);
        $('.ResourceDes ul li').eq(0).animate({'left':'0','opacity' :'1'},800);
        $('.ResourceDes ul li').eq(2).animate({'right':'0','opacity' :'1'},800);
        $('.ResourceDes ul li').eq(1).animate({'top':'0','opacity' :'1'},800);//'opacity' :'1' css原本的设置就是这样，加载后没影响，但是动画还原后再执行就会隐藏还原时候的动画
        //文字内容显示
        $('.ResourceDes ul li').eq(1).children().eq(0).fadeIn(3000);
    }
    //媒体资源页面还原到动画前状态
    function mediaResourceRestore() {
        //媒体资源加载还原动画
        $('.ResourceList ul li a').animate({'opacity' :'0','top':'-55px'},0);
        $('.ResourceDes ul li').eq(0).animate({'opacity' :'0','left':'-100px'},0);
        $('.ResourceDes ul li').eq(2).animate({'opacity' :'0','right':'-100px'},0);
        $('.ResourceDes ul li').eq(1).animate({'opacity' :'0','top':'100px'},0);//
        //文字内容显示
        $('.ResourceDes ul li').eq(1).children().eq(0).fadeOut(50);
    }

    //社区页面页面动画封装并调用
    communityAnimation();
    function communityAnimation() {
        //社区页面加载动画
        $('.communityMain a').eq(0).animate({'left': '0','opacity' :'1'},900);
        $('.communityMain a').eq(2).animate({'right': '0','opacity' :'1'},900);
        $('.communityMain a').eq(1).animate({'top': '0','opacity' :'1'},900);

        //community  a标签鼠标经过事件，communityDes显示
        $('.communityMain a').mouseenter(function () {
            $(this).children('div').fadeIn(1500);
        }).mouseleave(function () {
            $(this).children('div').fadeOut(1500);
        });
    }
    //社区页面加载动画还原
    function communityRestore() {
        $('.communityMain a').eq(0).animate({'left': '-150px','opacity' :'0'},50);
        $('.communityMain a').eq(2).animate({'right': '-150px','opacity' :'0'},50);
        $('.communityMain a').eq(1).animate({'top': '-150px','opacity' :'0'},50);
    }

    //newMedia新媒体页面页面动画封装并调用
    newMediaAnimation();
    //newMedia新媒体中间5个大图鼠标经过事件
    $('.itemLogo img').mouseover(function () {
        //    //$(this).addClass('addTransform');
        $(this).css({
            boxShadow: '10px 10px 10px #CFCFCF',
            transform: 'translate(-10px,-10px)',
            transition: '0.3s all',
            cursor: 'pointer'
        });
    });
    $('.itemLogo img').mouseleave(function () {
        $(this).css({
            boxShadow: '0 0 0 #FFF',
            transform: 'translate(0,0)',
            transition: '0.3s all'
        });
    });
    //$('.itemLogo img').mouseleave(function () {
    //    $('.itemLogo img').removeClass('addTransform'); //没有时间控制不行
    //});
    //newMedia新媒体中间5个大图鼠标点击事件
    $('.itemLogo img').click(function () {
        $('.mediaPlatformL p').fadeOut(100).fadeIn(100);
        $('.mediaPlatformR p').fadeOut(100).fadeIn(100)
    });
    function newMediaAnimation() {
        //newMedia新媒体中间5个大图滑动动画
        $('.itemLogo img').eq(0).animate({'left': '29px','opacity' :'1'},1400,function () {
        });
        $('.itemLogo img').eq(1).animate({'right': '64px','opacity' :'1'},1400);
        $('.itemLogo img').eq(2).animate({'left': '0','opacity' :'1'},1400);
        $('.itemLogo img').eq(3).animate({'right': '0','opacity' :'1'},1400);
        $('.itemLogo img').eq(4).animate({'bottom': '0','opacity' :'1'},1400);

        //newMedia新媒体.mediaPlatformR各媒体平台小logo动画
        $('.mediaPlatformR img').animate({'left': '-94px','opacity' :'1'},1700);
        $('.mediaPlatformL img').animate({'right': '-94px','opacity' :'1'},1700);
    }

    //newMedia新媒体动画还原
    function newMediaRestore() {
        //newMedia新媒体中间5个大图滑动动画还原
        $('.itemLogo img').eq(0).animate({'left': '76px','opacity' :'0'},0);
        $('.itemLogo img').eq(1).animate({'right': '137px','opacity' :'0'},0);
        $('.itemLogo img').eq(2).animate({'left': '60px','opacity' :'0'},0);
        $('.itemLogo img').eq(3).animate({'right': '108px','opacity' :'0'},0);
        $('.itemLogo img').eq(4).animate({'bottom': '73px','opacity' :'0'},0);

        //newMedia新媒体.mediaPlatformR各媒体平台小logo动画还原
        $('.mediaPlatformR img').animate({'left': '-200px','opacity' :'0'},0);
        $('.mediaPlatformL img').animate({'right': '-200px','opacity' :'0'},0);
    }

    //流量平台flowPlatform页面动画封装并调用
    //flowPlatformAnimation();
    function flowPlatformAnimation() {
        //流量平台flowBlock鼠标经过事件
        $('.flowBlock span').mouseenter(function () {
            $(this).addClass('add_bg');
            $(this).children().fadeIn(10);
        });
        $('.flowBlock span').mouseleave(function () {
            $(this).removeClass('add_bg');
            $(this).children().fadeOut(10);
        });

        //流量平台flowBlock动画
        $('.flowBlock a').each(function (index,element) {
            $(element).animate({'opacity': '0.8'},100);
            $(element).animate({'top':'0','opacity': '1'},(index+2)*170,function () {
                $(element).animate({'top':'-30px'},(index+1)*40,function () {
                    $(element).animate({'top':'0'},(index+2)/(index+1)*200);
                })
            });
        });
    }
    //流量平台flowPlatform页面动画还原
    function flowPlatformRestore() {
        //流量平台flowBlock动画
        $('.flowBlock a').each(function (index,element) {
            $(element).animate({'top':'-600px','opacity': '0'},0);
        });
    }


    //封装侧边固定导航sideNav的动画并在加载时调用；
    //sideNavAnimation ();
    //function sideNavAnimation () {
    //    //侧边固定导航sideNav动画
    //    $('.sideNav').animate({
    //        'opacity': '1',
    //        'right': '50px'
    //    },600);
    //    //侧边固定导航栏点击跳转到各自页面
    //    $('.sideNav li').eq(0).click(function () {
    //        $('html,body').animate({'scrollTop': '0px'},500)
    //    });
    //    $('.sideNav li').eq(1).click(function () {
    //        $('html,body').animate({'scrollTop': $('.mediaResource').offset().top-30},500)
    //    });
    //    $('.sideNav li').eq(2).click(function () {
    //        $('html,body').animate({'scrollTop': $('.community').offset().top-30},500)
    //    });
    //    $('.sideNav li').eq(3).click(function () {
    //        $('html,body').animate({'scrollTop': $('.newMedia').offset().top-30},500)
    //    });
    //    $('.sideNav li').eq(4).click(function () {
    //        $('html,body').animate({'scrollTop': $('.flowPlatform').offset().top-30},500)
    //    });
    //    $('.sideNav li').eq(5).click(function () {
    //        $('html,body').animate({'scrollTop': $('footer').offset().top-30},500)
    //    });
    //}
    //封装侧边固定导航sideNav的还原动画；
    //function sideNavRestore () {
    //    //侧边固定导航sideNav动画
    //    $('.sideNav').animate({
    //        'opacity': '0',
    //        'right': '-100px'
    //    },0);
    //}
    //封装侧边固定导航sideNav的动画并在加载时调用；
    //sideNavAnimation ();
    function fpNavAnimation () {
        //侧边固定导航sideNav动画
        $('#fp-nav').animate({
            'opacity': '1',
            'right': '50px'
        },600);
    }
    function fpNavRestore () {
        //新的侧边固定导航fp-nav动画
        $('#fp-nav').animate({
            'opacity': '0',
            'right': '-100px'
        },0);
    }

    //fullPage插件实现滚动一个固定高度的页面，并加载当前页所有动画。
    $('#fullpage').fullpage({
        resize: false,
        scrollingSpeed: 300,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        'navigation': true,
        'navigationPosition': 'right',
        afterLoad: function(anchorLink, index) {
            if(index == 1) {
                navAnimation();//本页动画调用函数
            }
            if(index == 2) {
                mediaResourceAnimation();
            }
            if(index == 3) {
                communityAnimation();
            }
            if(index == 4) {
                newMediaAnimation();
            }
            if(index == 5) {
                flowPlatformAnimation();
            }
        },
        onLeave: function(index, direction) {
            if(index == 1) {
                fpNavAnimation ();//侧边导航动画调用函数
                mediaResourceRestore();//还原下个页面
            }
            if(index == 2) {
                communityRestore();//还原下个页面
                navRestore();//还原上个页面
            }
            if(index == 3) {
                mediaResourceRestore();
                newMediaRestore();
            }
            if(index == 4) {
                communityRestore();
                flowPlatformRestore()
            }
            if(index == 5) {
                newMediaRestore();
            }
            if(index == 6) {
                flowPlatformRestore()
            }

        }
    })








});
