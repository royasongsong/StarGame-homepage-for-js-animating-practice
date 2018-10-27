$(function(){
    function navChangeBefore(){
        $('#fp-nav').css({top:'3.52rem','margin-top':'0',right:'-1rem',width:'6rem','z-index':'1'});
        $('#fp-nav ul li, .fp-slidesNav ul li').css({width:'1.51rem',height:'1.275rem',float:'left',left:'-4.5rem',top:'0','padding-top':'0','margin-right':'0.2rem',opacity:'0'});
        $('#fp-nav ul li:first-child, .fp-slidesNav ul li:first-child').css({'margin-right':'0'}).hide();
        $('#fp-nav ul li:nth-child(5), .fp-slidesNav ul li:nth-child(5)').css({'margin-left':'0.95rem','margin-top':'0.2rem'});
        $('#fp-nav ul li:nth-child(6), .fp-slidesNav ul li:nth-child(6)').css({'margin-top':'0.2rem'});
        $('#fp-nav ul li a, .fp-slidesNav ul li a').css({'padding-top':'0.4rem',backgroundPosition:'0 0'});
    }
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        'navigation': true,
        'navigationPosition': 'right',
        onLeave:function (index,nextIndex) {
            var $nav = $('#fp-nav');
            var $logo = $('.logo');
            var $slogan = $('.slogan');
            var $honey01 = $('.honey-div1');
            var $honey02 = $('.honey-div2');
            var $honey03 = $('.honey-div3');
            var $honey04 = $('.honey-div4');
            var $honey05 = $('.honey-div5');
            var $slideNav = $('.slide-nav');
            var $slideDivContent = $('.slide-div-content');
            var $slideDivLeft = $('.slide-div-left');
            var $slideDivRight = $('.slide-div-right');
            var $slideDivContentInDiv = $(".slide-div-content .slide-div-content-in-div:first-child");
            var $communityNga = $('#community .community-nga');
            var $communityDospy = $('#community .community-dospy');
            var $communityA9vg = $('#community .community-a9vg');
            var $newMeidaLogo01 = $('.new-meida-logo>img:nth-child(1)');
            var $newMeidaLogo02 = $('.new-meida-logo>img:nth-child(2)');
            var $newMeidaLogo03 = $('.new-meida-logo>img:nth-child(3)');
            var $newMeidaLogo04 = $('.new-meida-logo>img:nth-child(4)');
            var $newMeidaLogo05 = $('.new-meida-logo>img:nth-child(5)');
            var $newMediaPlatLeft = $('.media .new-media-plat>div>img:lt(4)');
            var $newMediaPlatRight = $('.media .new-media-plat>div>img:gt(3)');
            var $platHoney01 = $('.plat-honey1');
            var $platHoney02 = $('.plat-honey2');
            var $platHoney03 = $('.plat-honey3');
            var $platHoney04 = $('.plat-honey4');
            var $platHoney05 = $('.plat-honey5');
            var $kolImgeven = $('#kol .kol-div>img:even');
            var $kolImgOdd = $('#kol .kol-div>img:odd');
            var $newMediaDiv  = $('.new-media-text>div');
            if(nextIndex==1) {
                $nav.animate({'right':'-1rem'},300);
                $logo.addClass('fadeindown');
                $slogan.addClass('fadeinup');
                $honey01.addClass('honey01');
                $honey02.addClass('honey02');
                $honey03.addClass('honey03');
                $honey04.addClass('honey04');
                $honey05.addClass('honey05');
                navChangeBefore();
            }
            else{
                $nav.animate({'right':'0.6rem'},300);
                $logo.removeClass('fadeindown');
                $slogan.removeClass('fadeinup');
                $honey01.removeClass('honey01');
                $honey02.removeClass('honey02');
                $honey03.removeClass('honey03');
                $honey04.removeClass('honey04');
                $honey05.removeClass('honey05');

                function navChangeAfter(){
                    $('#fp-nav').css({top:'52%','margin-top':'-204.5px',width:'1rem','z-index':'1000'});
                    $('#fp-nav ul li, .fp-slidesNav ul li').css({float:'none',width:'0.7rem',height:'0.77rem',left:'0',top:'0','padding-top':'0','margin-right':'0',opacity:'1'});
                    $('#fp-nav ul li:first-child, .fp-slidesNav ul li:first-child').show();
                    $('#fp-nav ul li:nth-child(5), .fp-slidesNav ul li:nth-child(5)').css({'margin-left':'0.07rem','margin-top':'0'});
                    $('#fp-nav ul li:nth-child(6), .fp-slidesNav ul li:nth-child(6)').css({'margin-top':'0'});
                    $('#fp-nav ul li a, .fp-slidesNav ul li a').css({'padding-top':'0'});
                }
                /*navChangeAfter();*/
            }
            if(nextIndex==2){
                $slideNav.addClass('fadeindown');
                $slideDivContent.addClass('fadeinup');
                $slideDivLeft.addClass('fadeinleft');
                $slideDivRight.addClass('fadeinright');
                $slideDivContentInDiv.addClass('fadein');
                navChangeAfter();
            }
            else{
                $slideNav.removeClass('fadeindown');
                $slideDivContent.removeClass('fadeinup');
                $slideDivLeft.removeClass('fadeinleft');
                $slideDivRight.removeClass('fadeinright');
                $slideDivContentInDiv.removeClass('fadein');
            }
            if(nextIndex==3){
                $communityNga.addClass('fadeinleft');
                $communityDospy.addClass('fadeindown');
                $communityA9vg.addClass('fadeinright');
                navChangeAfter();
            }
            else{
                $communityNga.removeClass('fadeinleft');
                $communityDospy.removeClass('fadeindown');
                $communityA9vg.removeClass('fadeinright');
            }
            if(nextIndex==4) {
                $newMeidaLogo01.addClass('fadeinup');
                $newMeidaLogo02.addClass('fadeinup');
                $newMeidaLogo03.addClass('fadeinright');
                $newMeidaLogo04.addClass('fadeinleft');
                $newMeidaLogo05.addClass('fadeindown');
                $newMediaPlatLeft.addClass('fadeinrightslow');
                $newMediaPlatRight.addClass('fadeinleftslow');
                $newMediaDiv.addClass('fadeinfast');
                navChangeAfter();

            }
            else{
                $newMeidaLogo01.removeClass('fadeinup');
                $newMeidaLogo02.removeClass('fadeinup');
                $newMeidaLogo03.removeClass('fadeinright');
                $newMeidaLogo04.removeClass('fadeinleft');
                $newMeidaLogo05.removeClass('fadeindown');
                $newMediaPlatLeft.removeClass('fadeinrightslow');
                $newMediaPlatRight.removeClass('fadeinleftslow');
                $newMediaDiv.removeClass('fadeinfast');
            }
            if(nextIndex==5) {
                $platHoney01.addClass('honey01');
                $platHoney02.addClass('honey02');
                $platHoney03.addClass('honey03');
                $platHoney04.addClass('honey04');
                $platHoney05.addClass('honey05');
                navChangeAfter();
            }
            else{
                $platHoney01.removeClass('honey01');
                $platHoney02.removeClass('honey02');
                $platHoney03.removeClass('honey03');
                $platHoney04.removeClass('honey04');
                $platHoney05.removeClass('honey05');
            }
            if(nextIndex==6) {
                $kolImgeven.addClass('bounceIn');
                $kolImgOdd.addClass('bounceInSlow');
                navChangeAfter();
            }
            else{
                $kolImgeven.removeClass('bounceIn');
                $kolImgOdd.removeClass('bounceInSlow');
            }
        }
    });

    $('.slide .slide-nav>li').on("click",function(){
        var i = $(this).index();
        $(this).addClass('nav-on').siblings().removeClass('nav-on');
        $('#Submedias .slide-div-content>div').removeClass('fadein').css({opacity:'1'}).eq(i).fadeIn().siblings().fadeOut();
    });

    var navInsideImg = ["<img src='images/icon-Submedias-con.png'","<img src='images/icon-community-con.png'","<img src='images/icon-media-con.png'","<img src='images/icon-plat-con.png'","<img src='images/icon-kol-con.png'","<img src='images/icon-top-con.png'"];
    var navInsideCon = 'style="position: absolute;top:0;left:0;width:0.7rem;height:0.77rem;">';
    var navInside = function (i) {
        return navInsideImg[i]+navInsideCon;
    };
    $('#fp-nav ul li:nth-child(1) a').append(navInside(5));
    $('#fp-nav ul li:nth-child(2) a').append(navInside(0));
    $('#fp-nav ul li:nth-child(3) a').append(navInside(1));
    $('#fp-nav ul li:nth-child(4) a').append(navInside(2));
    $('#fp-nav ul li:nth-child(5) a').append(navInside(3));
    $('#fp-nav ul li:nth-child(6) a').append(navInside(4));

    $('.community-div>div').hover(function(){
        $(this).find('div').stop(false,true).fadeIn(1000);
    },function(){
        $(this).find('div').stop(false,true).fadeOut(1000);
    });
    $('#plat .plat-honey').hover(function(){
        $(this).find('p').eq(0).hide();
    },function(){
        $(this).find('p').eq(0).show();
    });

    function navResect () {
        navChangeBefore();
        $('#fp-nav').css({right:'-1rem'});
    }

    $('#fp-nav ul li a, .fp-slidesNav ul li a').hover(
        function(){
            var i = $(this).parent().index();
            $(this).css({backgroundPosition:'0 -0.775rem'});
            $('#honey>div').eq(i-1).css({backgroundPosition:'0 -1.68rem'}).siblings().css({backgroundPosition:'0 0'});
        },function(){
            $(this).css({backgroundPosition:'0 0'});
            $('#honey>div').css({backgroundPosition:'0 0'});
        }
    );
    $('#fp-nav ul li a, .fp-slidesNav ul li a').click(
        function(){
            $(this).parent().css({backgroundPosition:'0 -0.775rem'}).siblings().css({backgroundPosition:'0 0'});
        }
    );

    $('.media .new-meida-logo>img:first-child').addClass('boxshow');
    $('.media .new-meida-logo>img').hover(function(){
       $(this).addClass('boxshow02').siblings().removeClass('boxshow02');
    },function(){
        $('.media .new-meida-logo>img').removeClass('boxshow02');
    });

    $('.media .new-meida-logo>img').click(function(){
       var i = $(this).index();
       $(this).addClass('boxshow').siblings().removeClass('boxshow');
       $('.new-media-text>div').eq(i).show().siblings().hide();
    });
    $('.plat-div').click(function(){
       alert('敬请期待！')
    });
    var topNav = false;
    $('.top-nav .top-nav-div .top-nav-div-right').on('click',function(){
        if(topNav == false){
            $('.top-nav .top-nav-hover-div').fadeIn();
            topNav = true;
        }
        else{
            $('.top-nav .top-nav-hover-div').fadeOut();
            topNav = false;
        }

    });

    navChangeBefore();
/*    $('#fp-nav ul li a, .fp-slidesNav ul li a').hover(function(){
        $(this).css('background-position','0 -1.677rem');
    },function(){
        $(this).css('background-position','0 0');
    })*/
});


