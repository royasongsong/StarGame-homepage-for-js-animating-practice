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

//��ҳ���δ�ý���غ���
    $('#logoMain').fadeIn(200).animate({'top':'240px'},500);
    //ý��ƽ̨���غ���
    $('#slogan').fadeIn(200).animate({'top':'350px'},500);

    //��ҳ���δ�ý������
    //$('.navBlock a').fadeIn(150);
    //$('.navBlock a').animate({'opacity': '1'},200);
    //��ҳ��������
    $('.navBlock a').each(function (index,element) {
        $(element).animate({'opacity': '0.8'},100);
        $(element).animate({'top':'280px','opacity': '1'},(index+2)*170,function () {
            $(element).animate({'top':'260px'},(index+1)*40,function () {
                $(element).animate({'top':'280px'},(index+2)/(index+1)*200);
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
    $('.ResourceList ul li a').animate({'top':'0'},800);
    $('.ResourceDes ul li').eq(0).animate({'left':'0'},800);
    $('.ResourceDes ul li').eq(2).animate({'right':'0'},800);
    $('.ResourceDes ul li').eq(1).animate({'top':'0'},800);//
    //����������ʾ
    $('.ResourceDes ul li').eq(1).children().eq(0).fadeIn(3000);

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

    //newMedia��ý���м�5����ͼ��꾭���¼�
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
    //    $('.itemLogo img').removeClass('addTransform'); //û��ʱ����Ʋ���
    //});

    //newMedia��ý���м�5����ͼ������¼�
    $('.itemLogo img').click(function () {
        $('.mediaPlatformL p').fadeOut(100).fadeIn(100)
        $('.mediaPlatformR p').fadeOut(100).fadeIn(100)
    });

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

    //KOLActorImg 9ͼ�Ķ���Ч��
    //$('.KOLActorImg img').each(function (index,element) {
    //    $(element).animate({'width':'100%'},500,function () {
    //        $(element).animate({'width':'100%'},300,function () {
    //            $(element).animate({'width':'95%'},200,function () {
    //                $(element).animate({'width':'100%'},100)
    //            })
    //        })
    //    })
    //})




    sideNavAnimation ();//��װ��߹̶�����sideNav�Ķ������ڼ���ʱ���ã�
    function sideNavAnimation () {
        //��߹̶�����sideNav����
        $('.sideNav').animate({
            'opacity': '1',
            'right': '50px'
        },600);
        //��߹̶������������ת������ҳ��
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

    //ȫ�ĵ������ù��ֵľ���Ϊһ��ҳ��Ĵ�С
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
