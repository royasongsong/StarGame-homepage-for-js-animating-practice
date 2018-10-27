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

//首页星游传媒加载后滑入
    $('#logoMain').fadeIn(200).animate({'top':'240px'},500);
    //媒体平台加载后滑入
    $('#slogan').fadeIn(200).animate({'top':'350px'},500);

    //首页星游传媒导航块
    //$('.navBlock a').fadeIn(150);
    //$('.navBlock a').animate({'opacity': '1'},200);
    //首页导航动画
    $('.navBlock a').each(function (index,element) {
        $(element).animate({'opacity': '0.8'},100);
        $(element).animate({'top':'280px','opacity': '1'},(index+2)*170,function () {
            $(element).animate({'top':'260px'},(index+1)*40,function () {
                $(element).animate({'top':'280px'},(index+2)/(index+1)*200);
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
    $('.ResourceList ul li a').animate({'top':'0'},800);
    $('.ResourceDes ul li').eq(0).animate({'left':'0'},800);
    $('.ResourceDes ul li').eq(2).animate({'right':'0'},800);
    $('.ResourceDes ul li').eq(1).animate({'top':'0'},800);//
    //文字内容显示
    $('.ResourceDes ul li').eq(1).children().eq(0).fadeIn(3000);

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

    //newMedia新媒体中间5个大图鼠标经过事件
    $('.itemLogo img').mouseover(function () {
    //    //$(this).addClass('addTransform');
        $(this).css({
            boxShadow: '10px 10px 10px #CFCFCF',
            transform : 'translate(-10px,-10px)',
            transition: '0.3s all',
            cursor : 'pointer'
        });
    });
    $('.itemLogo img').mouseleave(function () {
        $(this).css({
            boxShadow: '0 0 0 #FFF',
            transform : 'translate(0,0)',
            transition: '0.3s all'
        });
    });
    //$('.itemLogo img').mouseleave(function () {
    //    $('.itemLogo img').removeClass('addTransform'); //没有时间控制不行
    //});

    //newMedia新媒体中间5个大图鼠标点击事件
    $('.itemLogo img').click(function () {
        $('.mediaPlatformL p').fadeOut(100).fadeIn(100)
        $('.mediaPlatformR p').fadeOut(100).fadeIn(100)
    });

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

    //KOLActorImg 9图的动画效果
    //$('.KOLActorImg img').each(function (index,element) {
    //    $(element).animate({'width':'100%'},500,function () {
    //        $(element).animate({'width':'100%'},300,function () {
    //            $(element).animate({'width':'95%'},200,function () {
    //                $(element).animate({'width':'100%'},100)
    //            })
    //        })
    //    })
    //})




    sideNavAnimation ();//封装侧边固定导航sideNav的动画并在加载时调用；
    function sideNavAnimation () {
        //侧边固定导航sideNav动画
        $('.sideNav').animate({
            'opacity': '1',
            'right': '50px'
        },600);
        //侧边固定导航栏点击跳转到各自页面
        $('.sideNav li').eq(0).click(function () {
            $('html,body').animate({'scrollTop': '0px'},500)
        });
        $('.sideNav li').eq(1).click(function () {
            $('html,body').animate({'scrollTop': $('.mediaResource').offset().top-30},500)
        });
        $('.sideNav li').eq(2).click(function () {
            $('html,body').animate({'scrollTop': $('.community').offset().top-30},500)
        });
        $('.sideNav li').eq(3).click(function () {
            $('html,body').animate({'scrollTop': $('.newMedia').offset().top-30},500)
        });
        $('.sideNav li').eq(4).click(function () {
            $('html,body').animate({'scrollTop': $('.flowPlatform').offset().top-30},500)
        });
        $('.sideNav li').eq(5).click(function () {
            $('html,body').animate({'scrollTop': $('footer').offset().top-30},500)
        });
    }

    //全文档，设置滚轮的距离为一个页面的大小
    var index = 1;
    var step = 607;
    $(document).on('mousewheel', function (e) {
        if(e.originalEvent.wheelDelta < 0) {
            $('html,body').animate({'scrollTop': step * index+'px'},300);
            //console.log(index);
            index ++;
            if (index > 6 ) {
                index = 6;
            }
            console.log(index);
            return false;

        }
        else if (e.originalEvent.wheelDelta > 0) {
            $('html,body').animate({'scrollTop': step * (index-1)+'px'},300);
            //console.log(index);
            index --;
            if (index < 0) {
                index = 0;
            }
            console.log(index);
            return false;
        }
    });



});
