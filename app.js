$(function() {



    // navTogge of mobile
    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    })




    let intro = $("#intro");
    let header  = $("#header");

    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(this).scrollTop();
    // Hader class onScroll
    // ================
    headerScroll();

    $(window).on("scroll resize", function() {
        headerScroll()
    });


    function headerScroll() {
        let introH = intro.innerHeight();
        let headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= (introH -headerH )) {
            header.addClass('header--scroll');
        } else {
            header.removeClass("header--scroll");
        }

    };



    // Smooth scroll to section
    // ================
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;
        // скролим с помощью анимации(выборку 2ух элементов)

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)



        console.log(scrollEl)
    });



    // Scroll spy
    // ++++++++++++++++

    let windowH =   $(window).height();

    ScrollSpy(scrollTop);

    $(window).on("scroll", function() {

      
        let scrollTop = $(this).scrollTop();

        ScrollSpy(scrollTop);

    });
    
    function ScrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function(){

      
            let $this = $(this);
            let sectionId = $this.data("scrollspy");
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.3);
            
                if(scrollTop >= sectionOffset) {
                    $('[data-scroll]').removeClass("active");

                    $('[data-scroll="' + sectionId + '"]').addClass("active");
                }
                if(scrollTop == 0) {
                    $('[data-scroll]').removeClass("active");
                }

               
            
        });
    }


     // Modal
    // ++++++++++++++++

    $(' [data-modal]').on("click", function(event){
            event.preventDefault();

            let modal = $(this).data("modal");

            console.log(modal);

            $('body').addClass('no-scroll');
            $(modal).addClass('show');
            // анимация появления модального окна
            setTimeout(function(){
            $(modal).find('.modal__content').css({
                // translateY(0) scal(1)
                transform: "scale(1)",
                opacity: '1'

            }, 200)
        })


    });
    $(' [data-modal-close]').on("click", function(event){
        event.preventDefault();
        
        let modal = $(this).parents(".modal");

        modalClose(modal)

        
    });


    $('.modal').on("click", function(){
        let modal = $(this);
      
        modalClose(modal)
    });


    $('.modal__content').on("click", function(event){
       event.stopPropagation();
    });

    function modalClose(modal){


        modal.find('.modal__content').css({
            // translateY(0) scal(1)
            transform: "scale(0.4)",
            opacity: '0'

        }, 200)


        setTimeout(function(){
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
           
        }, 200)
    }

    // Slick Slider https://kenwheeler.github.io/slick/
    let introSlider =  $("#introSlider");

    introSlider.slick ({
        infinite : true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        // появляются картинки а не слайдятся

        fade:false,

        // autoplay: true,
        // autoplaySpeed: 4000
    });

    $("#introSliderPrev").on('click', function(){
        introSlider.slick("slickPrev")
    });
    
    $("#introSliderNext").on('click', function(){
        introSlider.slick("slickNext")
    });

    // Rewiews Slider
    let reviewsSlider =   $("#reviewsSlider");

    reviewsSlider.slick ({
        infinite : true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        // появляются картинки а не слайдятся

        // fade:true,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 4000
        speed: 500
    });

    $("#reviewsSliderPrev").on('click', function(){
        reviewsSlider.slick("slickPrev")
    });
    
    $("#reviewsSliderNext").on('click', function(){
        reviewsSlider.slick("slickNext")
    });

    // aos js

   

// You can also pass an optional settings object
// below listed default settings
    AOS.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    ones: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
})

