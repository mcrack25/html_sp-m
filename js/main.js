$(document).ready(function () {

  /* Эффект Focus на SearchForm */
  
  $('.search-form__input').focus(function(){
    $('.search-form').addClass("search-form_active");
  });
  
  $('.search-form__input').focusout(function(){
    $('.search-form').removeClass("search-form_active");
  });

  /* Медиазапросы на JS */
  function media_768(){

    if ($(window).width() < 768.999) {
      /* ----- Один каталог ----- */
      $('.p-catalog .info-block').addClass("info-block_accordion");
      $('.p-catalog .condition-buy').addClass("condition-buy_accordion");
    } 

    if ($(window).width() >= 768.999) {
      /* ----- Один каталог ----- */
      $('.p-catalog .info-block').removeClass("info-block_accordion");
      $('.p-catalog .condition-buy').removeClass("condition-buy_accordion");
    }

  }

  function media_992(){
    if ($(window).width() < 992.999) {
      /* Прятать рубрикатор */
      $('.menu-popup').removeClass('menu-popup_active');
    /* Прятать гамбергер меню */
      $('.gamburg-menu').removeClass('gamburg-menu_active');
    }

    if ($(window).width() >= 992.999) {
      /* Прятать Мобильное меню */
      $('.mobile-menu').removeClass('mobile-menu_active');
      $('.overlay').removeClass('overlay_active');
        document.body.style.overflow = '';
        $('body').css("padding-right", "0px");
    }
  }

  function media_1200() {
    if ($(window).width() < 1200.999) {
      
      $(".sets").removeClass("position-box__selected");
      $(".set_block").addClass("position-box__selected");

      /* Автоматически делать блочными линейные блоки при сжатии экрана */
      $(".switching").removeClass("switching_line");
      $(".switching").addClass("switching_block");

      $(".sets").css("display", "none")
    } else {
      $(".sets").css("display", "block")
    }

  }

  media_768();
  media_992();
  media_1200();

  $(window).resize(function () {
    media_768();
    media_992();
    media_1200();
  });

  /* Параметры Главного слайдера */
  $('.main-slider__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.item-slider__list',
  });

  $('.item-slider__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.main-slider__list',
    focusOnSelect: true,
    vertical: true
  });

  /* Проходимся по всем imagefill и подменяем изображение, если оно сломано */
  $('.imagefill').each(function (index) {
    var image_one = $(this).find('img');
    var image_one_src = image_one.attr('src');

    var image = new Image();
    image.onerror = function () {
      image_one.attr("src", "img/card-one_2.jpg");
    }

    image.src = image_one_src;
  });


  /* Обрезка изображений */
  $('.imagefill').imagefill();


  /* MegaMenu - Рубрикатор */

  var $menu = $(".menu-popup__list");
  var $sub_menu = $(".menu-popup__submenus");

  $menu.menuAim({
    activate: activateSubmenu,
    deactivate: deactivateSubmenu,
  });

  function activateSubmenu(row) {
    $menu.children().find("a").removeClass("maintainHover");
    $sub_menu.children().css("display", "none");

    var $row = $(row),
      submenuId = $row.data("submenuId"),
      $submenu = $("#" + submenuId);

    $submenu.css({
      display: "block"
    });

    $row.find("a").addClass("maintainHover");
  }

  function deactivateSubmenu(row) {
    var $row = $(row),
      submenuId = $row.data("submenuId"),
      $submenu = $("#" + submenuId);

    // Hide the submenu and remove the row's highlighted look
    $submenu.css("display", "none");
    $row.find("a").removeClass("maintainHover");
  }

  function firstParams() {
    $sub_menu.children().css("display", "none");
    $menu.children().find("a.maintainHover").removeClass("maintainHover");

    $menu.children().first().find("a").addClass("maintainHover");
    $sub_menu.children().first().css("display", "block");
  }

  firstParams();

/* MegaMenu - Рубрикатор */
  
/* MegaMenu - Гамбургер */

  $('.menu-btn_pc').click(function () {
    $('.gamburg-menu').toggleClass('gamburg-menu_active');
  });

  var $g_menu = $(".gamburg-right-menu__list");
  var $g_sub_menu = $(".gamburg-menu__submenus");

  $g_menu.menuAim({
    activate: g_activateSubmenu,
    deactivate: g_deactivateSubmenu,
    submenuDirection: "left"
  });

  function g_activateSubmenu(row) {
    /* Clean */
    $g_menu.children().find("a").removeClass("maintainHover");
    $g_sub_menu.children().css("display", "none");

    var $row = $(row),
      submenuId = $row.data("submenuId"),
      $submenu = $("#" + submenuId);

    // Show the submenu
    $submenu.css({
      display: "block"
    });

    // Keep the currently activated row's highlighted look
    $row.find("a").addClass("maintainHover");
  }

  function g_deactivateSubmenu(row) {
    var $row = $(row),
      submenuId = $row.data("submenuId"),
      $submenu = $("#" + submenuId);

    // Hide the submenu and remove the row's highlighted look
    $submenu.css("display", "none");
    $row.find("a").removeClass("maintainHover");
  }

  function g_firstParams() {
    $g_sub_menu.children().css("display", "none");
    $g_menu.children().find("a.maintainHover").removeClass("maintainHover");

    $g_menu.children().first().find("a").addClass("maintainHover");
    $g_sub_menu.children().first().css("display", "block");
  }

  g_firstParams();


  /* Прятать гамбургер меню при нажатии вне области */
  $(document).mouseup(function (e) {
    var menu_btn_pc = $(".menu-btn_pc"),
        gamburg_menu = $(".gamburg-menu");
    
    if (!menu_btn_pc.is(e.target) && menu_btn_pc.has(e.target).length === 0) {
      if (!gamburg_menu.is(e.target) && gamburg_menu.has(e.target).length === 0) {
        $(".gamburg-menu").removeClass("gamburg-menu_active");
      }
    }
  });


  /* Ширина скролл-бара */
  var scrollSize = scrollbarWidth();

  /* Функция по определению ширины скролл-бара */
  function scrollbarWidth() {
    var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
      indicator = $('<div>').css({ 'height': '200px' });

    $('body').append(block.append(indicator));
    var w1 = $('div', block).innerWidth();
    block.css('overflow-y', 'scroll');
    var w2 = $('div', block).innerWidth();
    $(block).remove();
    return (w1 - w2);
  }


  /* При нажатии на кнопку меню показывать сайдбар */
  $('.menu-btn_mob').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_mob_active');
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $('.overlay').toggleClass('overlay_active');
    document.body.style.overflow = 'hidden';
    $('body').css("padding-right", scrollSize + "px");
  });

  /* При нажатии на кнопку закрыть, скрывать сайдбар */
  $('.mobile-menu__close').on('click', function (e) {
    e.preventDefault;
    $('.menu-btn_mob').toggleClass('menu-btn_mob_active');
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $('.overlay').toggleClass('overlay_active');
    document.body.style.overflow = '';
    $('body').css("padding-right", "0px");
  });

  /* При нажатии на оверлей, скрывать сайдбар */
  $('.overlay').on('click', function (e) {
    e.preventDefault;
    $('.menu-btn_mob').toggleClass('menu-btn_mob_active');
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $(this).toggleClass('overlay_active');
    document.body.style.overflow = '';
    $('body').css("padding-right", "0px");
  });


  /* При нажатии на кнопку мы перемещаемся к началу страницы */
  $('.go-up').click(function (e) {
    e.preventDefault;
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  /* Слайдер в Виджете */
  $('.slider-stop__list').slick({
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    dotsClass: 'slider-stop__dots'
  });


  /* Переключаемый блок с табличной на строчную и обратно */
  $(".set_line").on("click", function(e){
    e.preventDefault;

    $(".sets").removeClass("position-box__selected");
    $(this).addClass("position-box__selected");

    $(".switching").removeClass("switching_block");
    $(".switching").addClass("switching_line");
  });

  $(".set_block").on("click", function(e){
    e.preventDefault;
    $(".sets").removeClass("position-box__selected");
    $(this).addClass("position-box__selected");

    $(".switching").removeClass("switching_line");
    $(".switching").addClass("switching_block");
  });



  $('.mobile-filters__hidden').fadeOut(0);
  $('.mobile-filters__box').on('click', function(e){
    e.preventDefault;
    $('body').toggleClass('noscroll');

    $('.mobile-filters__hidden').fadeToggle("fast");
    $('.mobile-filters__icon').toggleClass("mobile-filters__icon_active");
  });

  /* Включаем отображение Tooltip */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /* Диопазоны цен */
  var slider_range__min = 0;
  var slider_range__max = 15000;

  $(".widget-prices__slider-range").slider({
    range: true,
    min: slider_range__min,
    max: slider_range__max,
    values: [slider_range__min, slider_range__max],
    slide: function (event, ui) {
      $(".widget-prices__before").val(ui.values[0]);
      $(".widget-prices__after").val(ui.values[1]);
    }
  });

  $(".widget-prices__before").val(slider_range__min);
  $(".widget-prices__after").val(slider_range__max);
  
  
  $('.catalogs-alone').find('.catalog-one').each(function(){
    
    /* Слайдер в одном каталоге */
    $(this).find('.catalog-one-slider-img__list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      asNavFor: $(this).find('.catalog-one-slider-thumb__list'),
      dots: true,
      fade: true,
      cssEase: 'linear',
      appendDots: $(this).find('.catalog-one-slider-img__dots')
    });

    $(this).find('.catalog-one-slider-thumb__list').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: $(this).find('.catalog-one-slider-img__list'),
      focusOnSelect: true,
      vertical: true
    });
  });


  /* Слайдер комментариев на странице одного каталога */
  $('.slider-comments__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
    appendArrows: $('.slider-comments__arrows'),
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  /* Слайдер новостей на странице одного каталога */
  $('.news-box-slider__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    appendDots: $('.news-box-slider__dots')
  });



  $(function () {
    var icons = {
      header: "iconClosed",    // custom icon class
      activeHeader: "iconOpen" // custom icon class
    };

    $(".info-block_accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
      icons: icons
    });

    $(".condition-buy_accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
      icons: icons
    });

    $(".news-box-accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
      icons: icons
    });

  });


  $(".chosen-select").chosen();

});
