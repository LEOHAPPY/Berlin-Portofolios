$(document).ready(function () {

    /* go to top after refresh */
    $(window).scrollTop(0);

    // $(".chapterTitle").

    $("#more-info").on("click",function () {
        //expand width 75% 25%
        $("#workL").addClass("compress");
        $("#workR").addClass("expand");

        scrollToHash("#work");

        //disappear other projects
        var project_list = [];
        project_list = $(".project");
        console.log(project_list.length)
        //image container cut to 50% height

        //add content to this projects

    });

    function scrollToHash(hashName) {
        // window.location = location.hash;

        var dest=0;
        if($(hashName).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
        }else{
            dest=$(hashName).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');
    }

    $(".scroll").click(function(event){
        event.preventDefault();
        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
        }else{
            dest=$(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

    $("#expand-close").on("click",function () {
        //expand width 75% 25%
        $("#workL").removeClass("compress");
        $("#workR").removeClass("expand");

        //recover other project
    });
    //dynamic sticky funciton
    var aR = $('#aboutR'),
        wR = $('#workR'),
        cR = $('#contactR');

    var aOffset = aR.offset().top,
        wOffset = wR.offset().top,
        cOffset = cR.offset().top;

    var winHeight = $(window).height();

    var aContentHeight = aR.height(),
        wContentHeight = wR.height(),
        cContentHeight = cR.height();


    $(window).scroll(function () {
        var scrollTop = $('body').scrollTop();
//        console.log(scrollTop - aOffset);

        if (scrollTop - aOffset > 0) {
            startFix("#aboutL");
            if ((scrollTop - aOffset) > (aContentHeight - winHeight)) {
                endFix("#aboutL");
            }
        } else {
            endFix("#aboutL")
        }

        if (scrollTop - wOffset > 0) {
            startFix("#workL");
            if ((scrollTop - wOffset) > (wContentHeight - winHeight)) {
                endFix("#workL");
            }
        } else {
            endFix("#workL")
        }

        if (scrollTop - cOffset > 0) {
            startFix("#contactL");
            if ((scrollTop - cOffset) > (cContentHeight - winHeight)) {
                endFix("#contactL");
            }
        } else {
            endFix("#contactL")
        }

    });

    function startFix(name) {
        $(name).addClass("fixed");
    }

    function endFix(name) {
        $(name).removeClass("fixed");
    }

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


//    var winScrollTo;
//    var windowHeight = $(window).height();
//
//    $(window).scroll(function () {
//        winScrollTo = $(window).scrollTop();
//        console.log(winScrollTo);
//
//        $("#about").
//    });

//    $(".sticker1").sticky({ topSpacing: 0});
//    $(".sticker2").sticky({ topSpacing: 0});
//    $(".sticker3").sticky({ topSpacing: 0});
//
//    $('.sticker').on('sticky-start', function() {
//        console.log("Sticky Started");
//
//        var aContentHeight = $(".aboutContent").outerHeight();
//        console.log(aContentHeight);
//        var contentScrollPos = $(".aboutContent").offset().top;
//        console.log(contentScrollPos);
//
//        if((winScrollTo) > (aContentHeight)){
//            $(".sticker").unstick();
//        }
//
//
//    });
//    $('.sticker').on('sticky-end', function() { console.log("Ended"); });
//    $('.sticker').on('sticky-update', function() { console.log("Update"); });
//    $('.sticker').on('sticky-bottom-reached', function() { console.log("Bottom reached"); });
//    $('.sticker').on('sticky-bottom-unreached', function() { console.log("Bottom unreached"); });

//    $(window).scroll(function () {
//        var scrollTo = $(window).scrollTop();
//        var docHeight = $(document).height();
//        var windowHeight = $(window).height();
//
//
//        if (scrollTo <= windowHeight){
//            $(".rightSide").scroll(function(event){
//                console.log(scrollTo + " " + windowHeight);
//
//                event.preventDefault();
//            });
//        }
////        $(".rightSide").scrollTop($(".leftSide").scrollTop());
//    });
});