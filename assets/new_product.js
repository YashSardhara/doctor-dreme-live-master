// quentity
$("document").ready(function () {
  $(".qtybox .btnqty").on("click", function () {
    var qty = parseInt($(this).parent(".qtybox").find(".quantity-input").val());
    if ($(this).hasClass("qtyplus")) {
      qty++;
    } else {
      if (qty > 1) {
        qty--;
      }
    }
    qty = isNaN(qty) ? 1 : qty;
    $(this).parent(".qtybox").find(".quantity-input").val(qty);
  });
  //  animation
  $(".bn_main").first().addClass("FirstOne");
  $(".FirstOne").css("color", "#fff");
  var heightCal = $(".FirstOne").find(".click_main ").height();
  heightCal = heightCal + 15;
  $('<div class="line_clss"></div>').insertAfter(
    $(".FirstOne").find(".banner_title")
  );
  $(".FirstOne").find(".banner_title").addClass("c_font");
  $(".FirstOne").find(".line_clss").toggleClass("changed");
  $(".FirstOne").find(".click_text").slideToggle();
  $(".FirstOne img").css(
    "filter",
    "invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%)"
  );

  $(".bn_main").click(function () {
    $(".bn_main").first().removeClass("FirstOne");
    $(".banner_title").removeClass("changed");
    $(".bn_main").css("color", "#537FBC");
    $(".bn_main").find("img").css("filter", "");
    $(this).css("color", "#fff");
    $(this)
      .find("img")
      .css(
        "filter",
        "invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%)"
      );
    var heightCal = $(this).find(".click_main ").height();
    heightCal = heightCal + 15;

    $(".click_text").hide();
    $(".line_clss").remove();
    $(".banner_title").removeClass("c_font");
    $('<div class="line_clss"></div>').insertAfter(
      $(this).find(".banner_title")
    );
    $(this).find(".banner_title").addClass("c_font");
    $(this).find(".line_clss").toggleClass("changed");
    $(this).find(".click_text").slideToggle();
  });
  // end animation
  // information tab
  $("ul.product_tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");
    $("ul.product_tabs li").removeClass("current");
    $(".product_tabs-content").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
  // end information tab
  // product media
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 5,
            dots: false,
            arrows: false,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 640,
          settings: {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 4,
            dots: false,
            arrows: false,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 420,
          settings: {
            vertical: false,
            verticalSwiping: false,
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });

  // end product media
  // emi price change

  $(".disclosure--form  li").click(function () {
    var emi_price;
    console.log(this, "new_product.js");
    var price = $(".product_info_right .product-price--original:first").text();
    price = price.split(". ");
    price = price[1].replace(",", "");
    price = parseFloat(price);
    console.log(price, "#product_regular_price");
    console.log(jQuery.type(price), "type of price ");
    // emi_price = price/6;
    // $('.emi-text span:first-child').text(emi_price);
    $(".citi .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".citi .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".citi .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".citi .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".citi .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".citi .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".amex .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".amex .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".amex .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".amex .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".amex .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".amex .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".hdfc .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".hdfc .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".hdfc .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".hdfc .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".hdfc .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".hdfc .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".axis .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".axis .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".axis .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".axis .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".axis .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".axis .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".kotak .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".kotak .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".kotak .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".kotak .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".kotak .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".kotak .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".icici .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".icici .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".icici .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".icici .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".icici .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".icici .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".indusind .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".indusind .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".indusind .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 113) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".indusind .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 112) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".indusind .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 112) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".indusind .24-emi span, .emi-text span:first-child").html(
      Intl.NumberFormat("en-IN", { currency: "INR" }).format(
        parseInt(price / 6)
      )
    );
    $(".rbl .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".rbl .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".rbl .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".rbl .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".rbl .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".rbl .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".stanc .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".stanc .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".stanc .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".stanc .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".yes .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".yes .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".yes .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".yes .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 114) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".yes .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".yes .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
    $(".bob .3-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 3)
        )
      )
      .prepend(" &#8377;");
    $(".bob .6-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt(price / 6)
        )
      )
      .prepend(" &#8377;");
    $(".bob .9-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 113) / 100 / 9)
        )
      )
      .prepend(" &#8377;");
    $(".bob .12-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 113) / 100 / 12)
        )
      )
      .prepend(" &#8377;");
    $(".bob .18-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 18)
        )
      )
      .prepend(" &#8377;");
    $(".bob .24-emi span")
      .html(
        Intl.NumberFormat("en-IN", { currency: "INR" }).format(
          parseInt((price * 115) / 100 / 24)
        )
      )
      .prepend(" &#8377;");
  });

  // end emi price change
  var s_price, c_price;
  $(".product_sticky_container select  option:first").attr(
    "selected",
    "selected"
  );
  $(".custom_selection")
    .change(function () {
     // $(".custom_selection option").removeAttr("selected");
   //   $(".custom_selection option:selected").attr("selected", "selected");
      variantIdChnage();
      s_price = $(this[this.selectedIndex]).attr("data-price");
      console.log(jQuery.type(s_price), "type of  s_price ");
      c_price = $(this[this.selectedIndex]).attr("data-compar-price");
      console.log(s_price, "==== Selling price ====");
      console.log(c_price, "==== Compare at price ====");
    })
   // .trigger("change");

  console.log($(".custom_selection option:selected").val());
  $(".custom_selection option:selected").attr("selected", "selected");
  variantIdChnage();
  function variantIdChnage() {
    $(".custom_selection option:selected").each(function (i) {
      console.log($(this).val(), "this.val");
      $(this).parent().parent().find(".v_id").text($(this).val());
    });
  }
    // copy url
  document.getElementById("cp_btn").addEventListener("click", copy_password);
  function copy_password() {
    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    $(".share_box").after("<label class='copy_msg'>Copy</label>");
    $(".copy_msg")
      .delay(3000)
      .queue(function () {
        $(this).remove();
      });
    textArea.remove();
  }
  // end copy url
  $(".share_btn").click(function () {
    $("#sliderup").toggleClass("visdrop");
    $("#sliderup").css("display", "flex");
  });
  function callImages(){var t;$(".product_info_right .product-options--option").hasClass("color-select")&&$(".product_info_right .product-options--option").hasClass("size-select")?t=$(".product_info_right .color-select .disclosure--current-option").text()+$(".product_info_right .size-select .disclosure--current-option").text():$(".product_info_right .product-options--option").hasClass("color-select")?t=$(".product_info_right .color-select .disclosure--current-option").text():$(".product_info_right .product-options--option").hasClass("size-select")&&(t=$(".product_info_right .size-select .disclosure--current-option").text()),t=t.replace(/\s+/g,""),$(".slider-single  img").each(function(){if($(this).attr("alt")==t){var i=$(this).attr("data-slick-index");$(".slider-single").slick("slickGoTo",i),$(".sticky_img_section img").attr("src",$(this).attr("src"))}}),$(".slider-nav img").each(function(){if($(this).attr("alt")==t){var i=$(this).attr("data-slick-index");$(".slider-nav").slick("slickGoTo",i)}})}
  callImages(),
    $(window).scroll(function () {
      var e = $(".pdp_payment_btn").offset().top;
      if (e != undefined) {
        $(window).scrollTop() > e
          ? $(".product_sticky_container").addClass("sticky_bottom")
          : $(".product_sticky_container").removeClass("sticky_bottom");
      }
    });
    $(".product_info_right .disclosure--main ul li").on("click",function(){callImages()});
    // Ready function end
});