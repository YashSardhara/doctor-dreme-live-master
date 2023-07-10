$("document").ready(function () {
  //  page faq slider script start
  $(".faqs_slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  // page faq slider script end
  $(".read").click(function () {
    $(this).prev().toggle();
    $(this).siblings(".dots").toggle();
    if ($(this).text() == "read more") {
      $(this).text("read less");
    } else {
      $(this).text("read more");
    }
  });
  //  end collection page read more read less
  function menuOverlay() {
    var menu_width;
    console.log("mobile menu button clicked");
    console.log($("#SiteNav").width(), "width");
    menu_width = $(window).width() - $("#SiteNav").width();
    $(".menu_close_btn").css("width", menu_width);
    console.log(menu_width, "menu_width");
  }
  $(function () {
    $(".sidebar-menu-list li a").each(function (index, value) {
      var abc = $(this).attr("data-title").trim();
      var custom_text_over_head, img_scr_over, custom_text_over;
      console.log(abc, "header menu text");
      if (abc == "Hybrid Pocket Spring Mattress") {
        custom_text_over_head = "";
      } else if (abc == "Max ICEFOAM™ Orthopaedic Mattress") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Max_cool_mattress_closeup.jpg?v=1643798725";
        custom_text_over = "Microbial and Cooling function | ICEFOAM ";
        custom_text_over_head = "Best Seller";
      } else if (abc == "Lite Dual Comfort Mattress") {
        custom_text_over_head = "Budget Friendly";
      } else if (abc == "Plus Memory Foam Mattress") {
        custom_text_over_head = "Firm Mattress";
      } else if (abc == "Striker Metal Bed") {
        custom_text_over_head = "Best Seller";
      } else if (abc == "Striker Metal Bed White") {
        custom_text_over_head = "Best Seller";
      } else if (abc == "Fusion Bed With Storage") {
        custom_text_over_head = "New Launch";
      } else if (abc == "Matrix Smart Adjustable Bed") {
        custom_text_over_head = "New Launch";
      } else if (abc == "Smart Aroma Diffuser") {
        custom_text_over_head = "New Launch";
      } else if (abc == "Premium Pure Cotton Fitted Bedsheet") {
        custom_text_over_head = "New Launch";
      } else if (abc == "Snuggle Pillow") {
        custom_text_over_head = "Fiber and Foam Hybrid Adjustable";
      } else if (abc == "Luxe Memory Foam Pillow") {
        custom_text_over_head = "Memory Foam Adjustable";
      } else if (abc == "Cloud Pillow") {
        custom_text_over_head = "Microfiber Filled";
      } else if (abc == "Cuddle Pillow") {
        custom_text_over_head = "Shredded Gel Memory Foam Filling";
      } else if (abc == "Bread Pillow") {
        custom_text_over_head = "Fiber and Foam Hybrid Adjustable";
      }  else if (abc == "ECOAIR™ Latex Mattress") {
        custom_text_over_head = "New Launch";
      } else if (abc == "Luxe TruGrid® Mattress") {
        custom_text_over_head = "New Launch";
      }else if (abc == "Sleep Snug") {
        custom_text_over_head = "New Launch";
      }
      console.log("custom_text_over_head", custom_text_over_head);
      // $(this).next().text(custom_text_over_head);
      $(this).children().text(custom_text_over_head);
    });
    // images
    $(".sidebar-menu-list li ").mouseover(function () {
      var custom_text_over, img_scr_over;
      abc = $(this).children().attr("data-title").trim();
      console.log(abc, "hover menu text");
      $(".site-nav--has-dropdown").removeClass("image_parent");
      var image_location = $(this)
        .parents(".site-nav--has-dropdown")
        .addClass("image_parent");
      if (abc == "Max ICEFOAM® Orthopaedic Mattress") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/mega_menu_3.jpg?v=1669026581";
        custom_text_over = "Microbial and Cooling function | ICEFOAM ";
      } else if (abc == "Sleep Snug") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/sleep_snug_megamenu.jpg?v=1677155592";
        custom_text_over =
          "";
      } else if (abc == "Lite Dual Comfort Mattress") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/mega_menu_5.jpg?v=1669026581";
        custom_text_over = "Dual sided | long standing life";
      } else if (abc == "Plus Memory Foam Mattress") {
        console.log(abc, "Inside Plus Memory Foam Mattress");
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/mega_menu_6.jpg?v=1669026581";
        custom_text_over = "Memory foam support | No partner disturbance";
      } else if (abc == "Striker Metal Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Striker_0d6467a3-c7db-4b87-b0a1-d047ea80485e.jpg?v=1667907036";
        custom_text_over = "Rust Resistant | optimal weight management";
      } else if (abc == "Striker Metal Bed White") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/stricker_bed_white_closeup.jpg?v=1643881570";
        custom_text_over = "Rust Resistant | optimal weight management";
      } else if (abc == "Acacia Solid Wooden Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/acacia.jpg?v=1667907368";
        custom_text_over = "Premium Quality Hardwood | Sturdy Construction";
      } else if (abc == "Gel Infused Memory Foam Pillow") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/gel-infused.jpg?v=1667907368";
        custom_text_over = "Memory Foam | Antibacterial encasement";
      } else if (abc == "Cloud Comforter") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/cloud_1.jpg?v=1667907367";
        custom_text_over = "Microfiber Fabric | Temperature Regulation";
      } else if (abc == "Weighted Blankets") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Weighted_Blankets.jpg?v=1644217035";
        custom_text_over = "Easy Maintenance | Pressure Therapy";
      } else if (abc == "Mattress Tencel Protector") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Tencel_Mattress_Protector.jpg?v=1644217035";
        custom_text_over = "Water & Stain Resistance | Tencel Fabric";
      } else if (abc == "Tencel Pillow Protector") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Tencel_Pillow_Protector_1.jpg?v=1644217035";
        custom_text_over = "Fabric Easy wash | Soft & Breathable Fabric";
      } else if (abc == "Essential Oil Pillow Spray") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Essential_Oil_Pillow_Spray_970fcfdf-a9a1-4e8e-ab7a-d17dea2cdc66.jpg?v=1644218020";
        custom_text_over = "Paraben Free | Improves Sleep Quality | Calms Mind";
      } else if (abc == "Aroma Diffuser Oil") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Aroma_Diffuser.jpg?v=1644233382";
        custom_text_over =
          "Essential Oil | Calms Mind | Improves Sleep Quality";
      } else if (abc == "Eye Mask") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/eye-mask.jpg?v=1667907368";
        custom_text_over =
          "100% Natural | Aroma Infused Seeds | Improves Sleep Quality";
      } else if (abc == "Bread Pillow") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/bread_6008920c-b346-4b71-9369-b313b2dba802.jpg?v=1667910184";
        custom_text_over =
          "12 Microfibre Pockets | Gel-infused Memory Foam | Super soft Polyester Cover";
      } else if (abc == "Mattress + Single Size Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/combo_mega_menu_1.jpg?v=1669027160";
        custom_text_over = "Easy transport | Sturdy construction";
      } else if (abc == "Mattress + Queen Size Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/combo_mega_menu_2.jpg?v=1669027285";
        custom_text_over = "Comfort for two | easy assembly";
      } else if (abc == "Mattress + King Size Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/combo_mega_menu_3.jpg?v=1669027285";
        custom_text_over = "All round support | premium minimal design";
      } else if (abc == "Fusion Bed with Storage") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Fusion_bed_white_grey_closeup.jpg?v=1644388983";
        custom_text_over = "Termite- Resistant | Good Storage Space";
      } else if (abc == "Matrix Smart Adjustable Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/matrix.jpg?v=1667907368";
        custom_text_over =
          "One-touch adjustable bed | 5 comfort-enhancing presets";
      } else if (abc == "Snuggle Pillow") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Snuggle_69726e8f-c98f-4616-8253-b4cefd76e7a2.jpg?v=1667907367";
        custom_text_over =
          "Light Microfibre | Adjustable Foam | Anti-microbial Cover";
      } else if (abc == "Luxe Memory Foam Pillow") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Luxe-Megamenu.jpg?v=1670399731";
        custom_text_over =
          "Airy Gel Memory Foam | Soft Foam Pockets | Cool Tencel Cover";
      } else if (abc == "Cloud Pillow") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/cloud_e420a358-5149-4daa-b504-264b00a99a57.jpg?v=1667907368";
        custom_text_over =
          "Hypoallergenic Microfibre | Comfortable neck support | Super-Soft Polyester Cover";
      } else if (abc == "Cuddle Pillow") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/cuddle_07523985-c954-4ff2-ae98-a4a76c7f6021.jpg?v=1667907368";
        custom_text_over =
          "Airy Shredded Memory Foam | Comfy Super Soft Foam | Soft Knitted Polyester Cover";
      } else if (abc == "Smart Aroma Diffuser") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/megamenu-01_e726e4ab-0e9c-464b-a426-4a72ba86511c.png?v=1648547015";
        custom_text_over =
          "Aroma diffuser + humidifier | Bluetooth speaker + 10 light modes";
      } else if (abc == "Grande Wood and Metal Structure Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/grande.jpg?v=1667907368";
        custom_text_over =
          "Hybrid wood-metal structure | Sophisticated modern aesthetics | Lightweight and portable design";
      } else if (abc == "Premium Pure Cotton Fitted Bedsheet") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/bedsheet.jpg?v=1667907368";
        custom_text_over =
          "100% Super-Soft Cotton | TruGrip Elastic Fit | No Crease Technology";
      } else if (abc == "Hybrid Pocket Spring Mattress") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/mega_menu_4.jpg?v=1669026581";
        custom_text_over =
          "Zero Motion Transfer Technology | Anti Sagging Side Wall ";
      } else if (abc == "Velvette Upholstered Bed") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/velvette_f8800889-3c00-4a96-a569-5722edb5fb8f.jpg?v=1667906881";
        custom_text_over =
          "Ultra-Lightweight Structure | Elegant Modern Design ";
      } else if (abc == "ECOAIR™ Latex Mattress") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/1_6f960389-782a-4ebf-9631-417f88643a8f.jpg?v=1669026356";
        custom_text_over = "100% Natural Latex Top | Ultra-Cool Tencel Fabric";
      } else if (abc == "Luxe TruGrid® Mattress") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/grid_mattress.png?v=1673259102";
        custom_text_over = "Smart, TruGrid® Mattress Technolog | Reliable Dual";
      } else if (abc == "Grace Upside Down Reversible Comforter") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/grace_4acc6c92-6cb0-488b-8390-b7356a033741.jpg?v=1667907368";
        custom_text_over =
          "Hypoallergenic Microfibre | Comfortable Neck Support | Super-Soft Polyester Cover";
      } else if (abc == "Essential oil kit for happy sleep") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Kit.jpg?v=1671712227";
        custom_text_over =
          "";
      } else if (abc == "Citrus-rich essential aroma oil (energize)") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Megamenu_c.jpg?v=1671712570";
        custom_text_over =
          "";
      } else if (abc == "Lavender-based essential aroma oil (meditate)") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Megamenu_L.jpg?v=1671712788";
        custom_text_over =
          "";
      } else if (abc == "Jasmine fragance essential aroma oil (sleep)") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Megamenu_J.jpg?v=1671712984";
        custom_text_over =
          "";
      } else if (abc == "Citrus room freshener (energize)") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Megamenu_cs.jpg?v=1671713222";
        custom_text_over =
          "";
      } else if (abc == "Lavender room spray (meditate)") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Megamenu_LS.jpg?v=1671713416";
        custom_text_over =
          "";
      } else if (abc == "Jasmine pillow spray (sleep)") {
        img_scr_over =
          "https://cdn.shopify.com/s/files/1/0248/7766/2271/files/Megamenu_jS.jpg?v=1671713571";
        custom_text_over =
          "";
      }
      console.log(abc, "hover title");
      console.log(img_scr_over, "img_scr_over");
      $(".image_parent .image-section .megamenu_img_section").attr(
        "src",
        img_scr_over
      );
      $(".image_parent .image-section .image_text").text(custom_text_over);
    });
    // mobile menu
    $(".mobile_menu_div").click(function () {
      menuOverlay();
      $("#SiteNav").addClass("menutoggle_class");
      $(".menu_close_btn").css("display", "block");
      $(".Mob_hideChatMenu").fadeOut();
    });
    $(".menu_close_btn").click(function () {
      $("#SiteNav").removeClass("menutoggle_class");
      $(".menu_close_btn").css("display", "none");
    });
  });
  // fix header
  $(window).scroll(function(){$(".sticky_header"),$(window).scrollTop()>0?($("#shopify-section-new-header").addClass("fixed_padding"),$(".site-nav__dropdown").addClass("mega_full")):($("#shopify-section-new-header").removeClass("fixed_padding"),$(".site-nav__dropdown").removeClass("mega_full"))});
  // end
  // redirect to pincode
  $(".bottom_but_it_with").click(function(){$("html, body").animate({scrollTop:$(".pincode_div").offset().top-425},500)});
  // end
  var top_menu_height, newlettwe_title_width;
  $(".top_menu_list").removeClass("mobile_il_clicked");
  $(".site-nav__dropdown").removeClass("visible_menu_class");
  function myFunction(x) {
    if (x.matches) {
      $(".top_menu_list").removeClass("mobile_il_clicked");
      $(".site-nav__dropdown").removeClass("visible_menu_class");
      $(".top_menu_list svg").click(function () {
        $(".top_menu_list svg").css("transform", "rotate(270deg)");
        $(".top_menu_list").css("color", "#000");
        $(".top_menu_list").removeClass("mobile_il_clicked");
        $(".site-nav__dropdown").removeClass("visible_menu_class");
        $(this).parents().eq(1).addClass("mobile_il_clicked");
        top_menu_height = $(this).parents("top_menu_list").outerHeight();
        top_menu_height = top_menu_height + 2;
        console.log(top_menu_height, "top_menu_height");
        $(".mobile_il_clicked .site-nav__dropdown").css("top", top_menu_height);

        $(".mobile_il_clicked .site-nav__dropdown").addClass(
          "visible_menu_class"
        );
        $(".visible_menu_class")
          .siblings("span")
          .children("svg")
          .css("transform", "rotate(359deg)");
        $(".visible_menu_class")
          .parents(".top_menu_list")
          .css("color", "var(--bg_color1)");

        if (
          $(".mobile_il_clicked .site-nav__dropdown").css("visibility") ==
          "visible"
        ) {
          $(".visible_menu_class")
            .siblings("span")
            .children("svg")
            .css("transform", "rotate(270deg)");
          $(".visible_menu_class")
            .parents(".top_menu_list")
            .css("color", "#000");

          $(".mobile_il_clicked .site-nav__dropdown").removeClass(
            "visible_menu_class"
          );
        }
      });
    } else {
      $(".sub-menu-inner-page").on("mouseleave", function () {
        $(".site-nav__dropdown").css("visibility", "hidden");
        $(".site-nav__dropdown").css("opacity", "0");
        $(".top_menu_list").removeClass("active_link");
      });

      $(".top_menu_list").on("mouseenter", function () {
        $(this).find(".site-nav__dropdown").css("visibility", "visible");
        $(this).find(".site-nav__dropdown").css("opacity", "1");
        $(this).addClass("active_link");
      });

      $(".top_menu_list").hover(
        function () {
          $(".site-nav__dropdown").css("visibility", "hidden");
          $(".site-nav__dropdown").css("opacity", "0");
          $(".top_menu_list").removeClass("active_link");
          $(this).find(".site-nav__dropdown").css("visibility", "visible");
          $(this).find(".site-nav__dropdown").css("opacity", "1");
          $(this).addClass("active_link");
        },
        function () {
          $(".site-nav__dropdown").css("visibility", "hidden");
          $(".site-nav__dropdown").css("opacity", "0");
          $(".top_menu_list").removeClass("active_link");
        }
      );
    }
  }
  var x = window.matchMedia("(max-width: 1300px)");
  myFunction(x);
  x.addListener(myFunction);

  $(window).resize(function () {
    menuOverlay();
  });

  $(".combos_button").click(function () {
    $(".combos_button").removeClass("combo_vis");

    $(".best_combo_slider").css("display", "none");
    $(".faq_info").css("display", "none");
    $(".best_combo_slider").slick("refresh");
    $(this).addClass("combo_vis");
    console.log($(this).attr("id"));
    var vis_slider = $(this).attr("id");
    vis_slider = "#" + vis_slider + "_slider";
    console.log(vis_slider);
    $(vis_slider).css("display", "block");
  });

  $(".show_more").click(function () {
    console.log($(this).text().toLowerCase());
    console.log("click show more");
    $(this).hide();
    $(".show_less").show();
    $(".new_collection_grid").css("display", "block");
  });

  $(".show_less").click(function () {
    $(this).hide();
    $(".show_more").show();
    $(".new_collection_grid:nth-child(5)").css("display", "none");
    $(".new_collection_grid:nth-child(6)").css("display", "none");
  });
  // faq
  var acc=document.getElementsByClassName("accordion1");if(acc.length>0){var e,t=acc[0],l=t.nextElementSibling;for(t.classList.add("active"),l.style.maxHeight=l.scrollHeight+"px",e=0;e<acc.length;e++)acc[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}
  // end faq
  // faq_slider
  $(".faqs_slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
   // preference_box
   $(".preference_box").on("click",function(){$(".preference_box").removeClass("firstBlock"),$(this).addClass("firstBlock")}),$(".preference_box").on("mouseenter",function(){$(".preference_box").removeClass("firstBlock_desk"),$(this).addClass("firstBlock_desk")});
});