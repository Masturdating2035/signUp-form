$(document).ready(function () {
    $('.menu').click(function () {
        if ($(this).hasClass('fas fa-bars')) {
            $(this).removeClass('fas fa-bars').addClass('fas fa-times');
            $('.leftSide').animate({ width: '0px' });
            $('.leftSide .pic').css('display', 'none');
            $('.rightSide').animate({ width: '90vw' });
            $('.leftSide .palette ul').css('flex-direction', 'column')
            $('.leftSide .palette ul').css('margin-right', '40px')
            $('.leftSide .palette ul').css('margin-top', '80px')
            $('.leftSide .palette ul li').css('margin', '20px')
        } else {
            $(this).removeClass('fas fa-times').addClass('fas fa-bars');
            $('.leftSide').animate({ width: '50vw' });
            $('.leftSide .pic').css('display', 'flex');
            $('.rightSide').animate({ width: '50vw' });
            $('.leftSide .palette ul').css('flex-direction', 'row-reverse')
            $('.leftSide .palette ul').css('margin', '0')
            $('.leftSide .palette ul li').css('margin', '0 40px')
        }
    })


    $('.palette ul li.yellow').click(function () {
        $('.leftSide .pic').css('background','#fdd365')
    })

    $('.palette ul li.green').click(function () {
        $('.leftSide .pic').css('background','#75b79e')
    })

    $('.palette ul li.blue').click(function () {
        $('.leftSide .pic').css('background','#4a47a3')
    })

    $('.palette ul li.red').click(function () {
        $('.leftSide .pic').css('background','#f67280')
    })

})