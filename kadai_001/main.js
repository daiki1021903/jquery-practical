const buttontop = document.querySelector(".buttontop");
// const modal = document.getElementById("modal")
// const item = document.getElementById("item")

 // カルーセル
 $(function () {
    $('a').on('mouseover',function(){
        $(this).stop().animate({
            opacity:0.5,
        },600)
    });

    $('a').on('mouseout',function(){
        $(this).stop().animate({
            opacity:1,
        },600)
    });


    $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade:true,
    speed:1000,
    });
});

// window.addEventListener("scroll",()=>{
//     const scrollValue = document.scrollingElement.scrollTop;
//    console.log(scrollValue);
//     if(scrollValue > 100){
//         buttontop.style.display ='inline';
//         }
//         else{
//         buttontop.style.display ='none';
//         }
// })

$(function(){
    $(window).scroll(function(){
        const scrollValue = document.scrollingElement.scrollTop;
        console.log(scrollValue);
        if(scrollValue > 100){
        $('.buttontop').css('display','inline');
        }
        else{
        $('.buttontop').css('display','none');
        }
    });
})

$(function(){
    $('.item').on("click",function(){
        $('#modal').css('display','block');
        console.log(this);
        let clickSrc =$(this).children('img').attr('src');
        console.log(clickSrc);
        $('#modalPicture').attr('src',clickSrc);
    });

    $('#modalCloth').on('click',function(){
        console.log('click')
        $('#modal').css('display','none');
    });
})

$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500 //スクロール速度(ミリ秒)
        var href = $(this).attr("href");
        var target =$(href =="#"|| href =="" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    })
})

$(function(){
    $(window).scroll(function(){
        const scrollValue = document.scrollingElement.scrollTop;
        const height = $(window).height();
        //console.log(height);
        const about= $(".about").offset().top;
        //console.log(about)
        const works= $(".works").offset().top;
        //console.log(works)
        if(scrollValue > about - height){
           $(".about").addClass("is-show");
        };
        if(scrollValue < about - height){
            $(".about").removeClass("is-show");
         };
         if(scrollValue > works - height){
            $(".works").addClass("is-show");
         };
         if(scrollValue < works - height){
             $(".works").removeClass("is-show");
          };
         return false;
    })
})



