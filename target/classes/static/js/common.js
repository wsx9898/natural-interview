jQuery(document).on("ready", function () {
  jQuery(".cross-img").on("click", function () {
    jQuery(".header-banner").hide();
  });
  jQuery("#slideshow > p:gt(0)").hide();
  setInterval(function () {
    jQuery("#slideshow > p:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 3000);
  jQuery("#bestsell-slider .slider-items").owlCarousel({
    items: 3,
    itemsDesktop: [1024, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [768, 2],
    itemsMobile: [480, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#featured-slider .slider-items").owlCarousel({
    items: 5,
    itemsDesktop: [1024, 4],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [767, 2],
    itemsMobile: [480, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#new-arrivals-slider .slider-items").owlCarousel({
    items: 4,
    itemsDesktop: [1024, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [768, 2],
    itemsMobile: [480, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#brand-logo-slider .slider-items").owlCarousel({
    autoPlay: true,
    items: 6,
    itemsDesktop: [1024, 4],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [600, 2],
    itemsMobile: [320, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#category-desc-slider .slider-items").owlCarousel({
    autoPlay: true,
    items: 1,
    itemsDesktop: [1024, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: [320, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#related-products-slider .slider-items").owlCarousel({
    items: 4,
    itemsDesktop: [1024, 4],
    itemsDesktopSmall: [768, 3],
    itemsTablet: [640, 2],
    itemsMobile: [480, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#upsell-products-slider .slider-items").owlCarousel({
    items: 4,
    itemsDesktop: [1024, 4],
    itemsDesktopSmall: [768, 3],
    itemsTablet: [640, 2],
    itemsMobile: [480, 1],
    navigation: true,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
  });
  jQuery("#mobile-menu").mobileMenu({
    MenuWidth: 250,
    SlideSpeed: 300,
    WindowsMaxWidth: 767,
    PagePush: true,
    FromLeft: true,
    Overlay: true,
    CollapseMenu: true,
    ClassName: "mobile-menu",
  });
  function a() {
    jQuery("body").on("click", function () {
      jQuery(this).find(".top-cart-content").slideUp();
    });
    jQuery(".top-cart-contain").on("mouseenter", function () {
      event.stopPropagation();
      jQuery(this).find(".top-cart-content").slideDown();
    });
    jQuery(".top-cart-contain").on("click", function () {
      event.stopPropagation();
      jQuery(this).find(".top-cart-content").slideDown();
    });
    jQuery(".top-cart-contain").on("mouseleave", function () {
      jQuery(this).find(".top-cart-content").slideUp();
    });
  }
  jQuery(function () {
    a();
  });
});
jQuery.fn.UItoTop = function (d) {
  var c = {
    text: "",
    min: 200,
    inDelay: 600,
    outDelay: 400,
    containerID: "toTop",
    containerHoverID: "toTopHover",
    scrollSpeed: 1200,
    easingType: "linear",
  };
  var e = jQuery.extend(c, d);
  var b = "#" + e.containerID;
  var a = "#" + e.containerHoverID;
  jQuery("body").append(
    '<a href="#" id="' + e.containerID + '">' + e.text + "</a>"
  );
  jQuery(b)
    .hide()
    .on("click", function () {
      jQuery("html, body").animate(
        { scrollTop: 0 },
        e.scrollSpeed,
        e.easingType
      );
      jQuery("#" + e.containerHoverID, this)
        .stop()
        .animate({ opacity: 0 }, e.inDelay, e.easingType);
      return false;
    })
    .prepend('<span id="' + e.containerHoverID + '"></span>')
    .hover(
      function () {
        jQuery(a, this).stop().animate({ opacity: 1 }, 600, "linear");
      },
      function () {
        jQuery(a, this).stop().animate({ opacity: 0 }, 700, "linear");
      }
    );
  jQuery(window).on("scroll", function () {
    var f = jQuery(window).scrollTop();
    if (typeof document.body.style.maxHeight === "undefined") {
      jQuery(b).css({
        position: "absolute",
        top: jQuery(window).scrollTop() + jQuery(window).height() - 50,
      });
    }
    if (f > e.min) {
      jQuery(b).fadeIn(e.inDelay);
    } else {
      jQuery(b).fadeOut(e.Outdelay);
    }
  });
};
var isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
jQuery(window).on("load", function () {
  if (isTouchDevice) {
  }
  jQuery().UItoTop();
});
jQuery(window).on("scroll", function () {
  jQuery(this).scrollTop() > 150
    ? jQuery("nav").addClass("sticky-header")
    : jQuery("nav").removeClass("sticky-header");
});
jQuery(".timer-grid").each(function () {
  var a = jQuery(this).attr("data-time");
  jQuery(this).countdown(a, function (b) {
    jQuery(this).html(
      '<div class="day box-time-date"><span class="number">' +
        b.strftime("%D") +
        ' </span>days</div> <div class="hour box-time-date"><span class="number">' +
        b.strftime("%H") +
        '</span>hrs</div><div class="min box-time-date"><span class="number">' +
        b.strftime("%M") +
        '</span> mins</div> <div class="sec box-time-date"><span class="number">' +
        b.strftime("%S") +
        " </span>sec</div>"
    );
  });
});
