$(function () {
    //��ҳ���ٵ�������¼�
    var isHidden = true;
    $('.small-logo').click(function () {
        if (isHidden) {
            $('.navLinks').fadeIn(800);
        } else {
            $('.navLinks').fadeOut(500);
        }
        isHidden = !isHidden;
    });

    //��ҳ������װ������
    navAnimation();
    function navAnimation() {
        //��ҳ���δ�ý���غ���
        $('#logoMain').fadeIn(200).animate({'top':'100px'},500);
        //ý��ƽ̨���غ���
        $('#slogan').fadeIn(200).animate({'top':'200px'},500);

        //��ҳ���δ�ý������
        $('.navBlock a').each(function (index,element) {
            $(element).animate({'opacity': '0.8'},100);
            $(element).animate({'top':'130px','opacity': '1'},(index+2)*170,function () {
                $(element).animate({'top':'100px'},(index+1)*40,function () {
                    $(element).animate({'top':'130px'},(index+2)/(index+1)*200);
                })
            });
        });

            //����
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
    //��ҳ��ԭ����֮ǰ��״̬
    function navRestore() {
        //����2������ͼ
        $('#logoMain').fadeOut(0).animate({'top': '50px'}, 50);
        //ý��ƽ̨���غ���
        $('#slogan').fadeOut(0).animate({'top': '300px'}, 50);
        //��ҳ���δ�ý������
        $('.navBlock a').each(function (index, element) {
            $(element).animate({'top': '-300px', 'opacity': '0'}, 0)
        })
    }

    //ý����Դҳ�涯����װ������
    mediaResourceAnimation();
    function mediaResourceAnimation() {
        //ý����Դtab���л�
        $('.ResourceList ul li').click(function () {
            var index = $(this).index();
            $('.ResourceDes ul li div').eq(index).show().siblings().hide();
        });

        //.ResourceListý����Դ��������꾭���¼�
        $('.ResourceList ul li').mouseover(function () {
            $(this).children('a').css({
                color: '#FFFFFF',
                background: 'url("images/slide-nav-bg.png") no-repeat', //Ϊʲô·������../
                backgroundSize: '143px 94px',
                backgroundPosition: '0 -47px'
            });
            $(this).siblings().children('a').css({
                color: '#00005A',
                background: 'url("images/slide-nav-bg.png") no-repeat', //Ϊʲô·������../
                backgroundSize: '143px 94px',
                backgroundPosition: '0 0'
            });
        });
        //ý����Դ���ض���
        $('.ResourceList ul li a').animate({'top':'0','opacity' :'1'},800);
        $('.ResourceDes ul li').eq(0).animate({'left':'0','opacity' :'1'},800);
        $('.ResourceDes ul li').eq(2).animate({'right':'0','opacity' :'1'},800);
        $('.ResourceDes ul li').eq(1).animate({'top':'0','opacity' :'1'},800);//'opacity' :'1' cssԭ�������þ������������غ�ûӰ�죬���Ƕ�����ԭ����ִ�оͻ����ػ�ԭʱ��Ķ���
        //����������ʾ
        $('.ResourceDes ul li').eq(1).children().eq(0).fadeIn(3000);
    }
    //ý����Դҳ�滹ԭ������ǰ״̬
    function mediaResourceRestore() {
        //ý����Դ���ػ�ԭ����
        $('.ResourceList ul li a').animate({'opacity' :'0','top':'-55px'},0);
        $('.ResourceDes ul li').eq(0).animate({'opacity' :'0','left':'-100px'},0);
        $('.ResourceDes ul li').eq(2).animate({'opacity' :'0','right':'-100px'},0);
        $('.ResourceDes ul li').eq(1).animate({'opacity' :'0','top':'100px'},0);//
        //����������ʾ
        $('.ResourceDes ul li').eq(1).children().eq(0).fadeOut(50);
    }

    //����ҳ��ҳ�涯����װ������
    communityAnimation();
    function communityAnimation() {
        //����ҳ����ض���
        $('.communityMain a').eq(0).animate({'left': '0','opacity' :'1'},900);
        $('.communityMain a').eq(2).animate({'right': '0','opacity' :'1'},900);
        $('.communityMain a').eq(1).animate({'top': '0','opacity' :'1'},900);

        //community  a��ǩ��꾭���¼���communityDes��ʾ
        $('.communityMain a').mouseenter(function () {
            $(this).children('div').fadeIn(1500);
        }).mouseleave(function () {
            $(this).children('div').fadeOut(1500);
        });
    }
    //����ҳ����ض�����ԭ
    function communityRestore() {
        $('.communityMain a').eq(0).animate({'left': '-150px','opacity' :'0'},50);
        $('.communityMain a').eq(2).animate({'right': '-150px','opacity' :'0'},50);
        $('.communityMain a').eq(1).animate({'top': '-150px','opacity' :'0'},50);
    }

    //newMedia��ý��ҳ��ҳ�涯����װ������
    newMediaAnimation();
    //newMedia��ý���м�5����ͼ��꾭���¼�
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
    //    $('.itemLogo img').removeClass('addTransform'); //û��ʱ����Ʋ���
    //});
    //newMedia��ý���м�5����ͼ������¼�
    $('.itemLogo img').click(function () {
        $('.mediaPlatformL p').fadeOut(100).fadeIn(100);
        $('.mediaPlatformR p').fadeOut(100).fadeIn(100)
    });
    function newMediaAnimation() {
        //newMedia��ý���м�5����ͼ��������
        $('.itemLogo img').eq(0).animate({'left': '29px','opacity' :'1'},1400,function () {
        });
        $('.itemLogo img').eq(1).animate({'right': '64px','opacity' :'1'},1400);
        $('.itemLogo img').eq(2).animate({'left': '0','opacity' :'1'},1400);
        $('.itemLogo img').eq(3).animate({'right': '0','opacity' :'1'},1400);
        $('.itemLogo img').eq(4).animate({'bottom': '0','opacity' :'1'},1400);

        //newMedia��ý��.mediaPlatformR��ý��ƽ̨Сlogo����
        $('.mediaPlatformR img').animate({'left': '-94px','opacity' :'1'},1700);
        $('.mediaPlatformL img').animate({'right': '-94px','opacity' :'1'},1700);
    }

    //newMedia��ý�嶯����ԭ
    function newMediaRestore() {
        //newMedia��ý���м�5����ͼ����������ԭ
        $('.itemLogo img').eq(0).animate({'left': '76px','opacity' :'0'},0);
        $('.itemLogo img').eq(1).animate({'right': '137px','opacity' :'0'},0);
        $('.itemLogo img').eq(2).animate({'left': '60px','opacity' :'0'},0);
        $('.itemLogo img').eq(3).animate({'right': '108px','opacity' :'0'},0);
        $('.itemLogo img').eq(4).animate({'bottom': '73px','opacity' :'0'},0);

        //newMedia��ý��.mediaPlatformR��ý��ƽ̨Сlogo������ԭ
        $('.mediaPlatformR img').animate({'left': '-200px','opacity' :'0'},0);
        $('.mediaPlatformL img').animate({'right': '-200px','opacity' :'0'},0);
    }

    //����ƽ̨flowPlatformҳ�涯����װ������
    //flowPlatformAnimation();
    function flowPlatformAnimation() {
        //����ƽ̨flowBlock��꾭���¼�
        $('.flowBlock span').mouseenter(function () {
            $(this).addClass('add_bg');
            $(this).children().fadeIn(10);
        });
        $('.flowBlock span').mouseleave(function () {
            $(this).removeClass('add_bg');
            $(this).children().fadeOut(10);
        });

        //����ƽ̨flowBlock����
        $('.flowBlock a').each(function (index,element) {
            $(element).animate({'opacity': '0.8'},100);
            $(element).animate({'top':'0','opacity': '1'},(index+2)*170,function () {
                $(element).animate({'top':'-30px'},(index+1)*40,function () {
                    $(element).animate({'top':'0'},(index+2)/(index+1)*200);
                })
            });
        });
    }
    //����ƽ̨flowPlatformҳ�涯����ԭ
    function flowPlatformRestore() {
        //����ƽ̨flowBlock����
        $('.flowBlock a').each(function (index,element) {
            $(element).animate({'top':'-600px','opacity': '0'},0);
        });
    }


    //��װ��߹̶�����sideNav�Ķ������ڼ���ʱ���ã�
    //sideNavAnimation ();
    //function sideNavAnimation () {
    //    //��߹̶�����sideNav����
    //    $('.sideNav').animate({
    //        'opacity': '1',
    //        'right': '50px'
    //    },600);
    //    //��߹̶������������ת������ҳ��
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
    //��װ��߹̶�����sideNav�Ļ�ԭ������
    //function sideNavRestore () {
    //    //��߹̶�����sideNav����
    //    $('.sideNav').animate({
    //        'opacity': '0',
    //        'right': '-100px'
    //    },0);
    //}
    //��װ��߹̶�����sideNav�Ķ������ڼ���ʱ���ã�
    //sideNavAnimation ();
    function fpNavAnimation () {
        //��߹̶�����sideNav����
        $('#fp-nav').animate({
            'opacity': '1',
            'right': '50px'
        },600);
    }
    function fpNavRestore () {
        //�µĲ�߹̶�����fp-nav����
        $('#fp-nav').animate({
            'opacity': '0',
            'right': '-100px'
        },0);
    }

    //fullPage���ʵ�ֹ���һ���̶��߶ȵ�ҳ�棬�����ص�ǰҳ���ж�����
    $('#fullpage').fullpage({
        resize: false,
        scrollingSpeed: 300,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        'navigation': true,
        'navigationPosition': 'right',
        afterLoad: function(anchorLink, index) {
            if(index == 1) {
                navAnimation();//��ҳ�������ú���
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
                fpNavAnimation ();//��ߵ����������ú���
                mediaResourceRestore();//��ԭ�¸�ҳ��
            }
            if(index == 2) {
                communityRestore();//��ԭ�¸�ҳ��
                navRestore();//��ԭ�ϸ�ҳ��
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
