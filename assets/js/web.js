$(function(){

    $('.works-list').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });

    $('.works-navis a').on( 'click', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter').toString();
        $('.works-navis a.active').removeClass("active");
        $(this).addClass("acitve");
        $('.works-list').isotope({filter: filterValue});
    });

    $('.venobox').venobox();

    $("#go-top").click(function(e){
        e.preventDefault();
        $("body,html").animate({scrollTop: 0});

    });

    $(".anchor").click(function(e){
        e.preventDefault();
        var _go = $(this).attr("href").toString();
        $("body,html").animate({scrollTop: $(_go).offset().top});
    });

    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        var _showPosition = $("#experience").offset().top;
        if(_top > _showPosition){
            $("#go-top").addClass("show");
        }else{
            $("#go-top").removeClass("show");
        }
    });

});