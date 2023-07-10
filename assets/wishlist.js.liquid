(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

//Wishlist
document.addEventListener("DOMContentLoaded", function() {
//     if (event.target.readyState === "complete") 
//     {
        //var cookieValue = $.cookie("wishlist-product");
    	//var obj = JSON.parse(cookieValue);
    	var current_product_id 	= $("#wishlist").attr('data-product-id');
  		var current_variant_id 	= $("#wishlist").attr('data-variant-id');
      	var customer_id 		= $("#wishlist").attr('data-customer-id');

  		if(customer_id)
        {
          $.ajax({
            url: "https://binaryic.co.in/nilkamal/public/api/get-wishlist",
            cache: false,
            type: "POST",
            data: {customer_id:customer_id},
              success: function(html)
              {
                  var obj = JSON.parse(JSON.stringify(html));
                  $("#wishlist_count").html(obj.data.length);
                  //var cookieValue = $.cookie("wishlist-count");
                  $.cookie('wishlist-count',obj.data.length,{ path: '/' });
                  $.each(obj.data, function() 
                  {
                      var wishlisted_product_id = this.product_id;
//                        console.log('wishlisted_product_id'+wishlisted_product_id);
                      var wishlisted_variant_id = this.variant_id;

                      if((current_product_id == wishlisted_product_id) && (current_variant_id == wishlisted_variant_id) )
                      {
                          $("#wishlist").addClass('add-wishlist');
                          //$("#wishlist").css('background','#da2128');
        //                   $("#wishlist svg path").css('fill','#da2128');
        //                   $("#add-wishlist").css('color','#da2128');
        //                   $("#wishlist").css('border','1px solid #da2128');
        //                   $("#add-wishlist").text('Added to Wishlist');
        					$("#wishlist").css('pointer-events','none'); 
                      }

                  });
              }
           });
        }
        

});
  
$(document).on('click','#wishlist',function(event)
{
  	var nietos = [];
  	event.stopPropagation();
    event.stopImmediatePropagation();
  	
  
//   	var cookieValue = $.cookie("wishlist-product");
  
//     if(cookieValue)
//     { 
//       var $obj2 = {};
//       var cookiesArr = JSON.parse(cookieValue);
      
//       //console.log(cookiesArr);
      
//       $.each(JSON.parse(cookiesArr),function (index, item) 
//       {
//         var $obj2 = {};
//         $obj2.product_id = item.product_id;
//         $obj2.variant_id = item.variant_id;
//         $obj2.price = item.price;
//         $obj2.title = item.title;
//         $obj2.handle = item.handle;
//         $obj2.image = item.image;
//         $obj2.secondImage = item.secondImage;
//         $obj2.offerPercent = item.offerPercent;
//         $obj2.comparePrice = item.comparePrice;
        
//         nietos.push($obj2);
        
//       });
//     }
  	
  	var product_id 	= $(this).attr('data-product-id');
  	var variant_id 	= $(this).attr('data-variant-id');
  	var price 		= $(this).attr('data-product-price');
  	var title 		= $(this).attr('data-product-title');
  	var handle 		= window.location.pathname ;
  	var image 		= $(this).attr('data-product-image');
    var secondImage = $(this).attr('data-second-image');
  	var offerPercent= $(this).attr('data-offer-percent');
  	var comparePrice= $(this).attr('data-compare-price');
  	var customer_id= $(this).attr('data-customer-id');
  	//var image = $(this).attr('data-product-image');
//   	if (nietos.length > 0) 
//     {
//       for (var i = 0; i < nietos.length; i++) 
//       {
//         if((nietos[i]['product_id'] === product_id) && (nietos[i]['variant_id'] === variant_id))
//         {
//           break;
//         }
//         else
//        	{
//           var $obj = {};
//           $obj.product_id = product_id;
//           $obj.variant_id = variant_id;
//           $obj.price = price;
//           $obj.title = title;
//           $obj.handle = handle;
//           $obj.image = image;
//           $obj.secondImage = secondImage;
//           $obj.offerPercent = offerPercent;
//           $obj.comparePrice = comparePrice;

//           nietos.push($obj);
//        	}
//       }
//     }
//     else
//     {
      var $obj = {};
      $obj.product_id = product_id;
      $obj.variant_id = variant_id;
      $obj.price = price;
      $obj.title = title;
      $obj.handle = handle;
      $obj.image = image;
      $obj.secondImage = secondImage;
      $obj.offerPercent = offerPercent;
      $obj.comparePrice = comparePrice;

      nietos.push($obj);
	//}
//   	$finalAr = [];
//     for($i=0;$i<nietos.length;$i++){
//         $currentPair = nietos[$i];
//       $pos = null;
//       for($j=0;$j<$finalAr.length;$j++){
//         if($finalAr[$j]['product_id'] == $currentPair['product_id'] &&$finalAr[$j]['variant_id'] == $currentPair['variant_id']){
//             $pos = $j;
//         }
//       }
//       if($pos == null){
//         $finalAr.push($currentPair);
//       }
//     }
                
//     $.cookie.json = true;

//     $.cookie('wishlist-product',JSON.stringify($finalAr),{ path: '/' });
	//alert();
  	callApi(nietos,customer_id,title,product_id);



  /** Wishlist toaster **/
  	//console.log(nietos);
	//var wishArr = JSON.parse(nietos);
	$("#wishlist_count").html(nietos.length);
  	
    
});
  

function callApi(cookieValue,customer_id,title,product_id)
{
  //alert(customer_id);
  
  $.ajax({
      url: "https://binaryic.co.in/nilkamal/public/api/create-wishlist",
      cache: false,
      type: "POST",
     data: {data : cookieValue,customer_id:customer_id},
      success: function(response){
        if(response.success){
        	toastr.success(title);
          	$("#wishlist").addClass('add-wishlist');
          	$("#wishlist").css('pointer-events','none');
        }
      }
    });
}

function fetchApi(customer_id)
{
	//var obj	
  	$.ajax({
      url: "https://binaryic.co.in/nilkamal/public/api/get-wishlist",
      cache: false,
      type: "POST",
      data: {customer_id:customer_id},
      success: function(html)
      {
        	return JSON.parse(JSON.stringify(html));
      }
      //return obj;
   });
}
  
function deleteWishData(product_id,customer_id)
{
    var product_id = product_id;
    var customer_id = customer_id;
    //alert(product_id);
    $.ajax({
      url: "https://binaryic.co.in/nilkamal/public/api/delete-wishlist",
      cache: false,
      type: "POST",
      data: {data :cookieValue,product_id:product_id,customer_id:customer_id},
      success: function(html)
      {
//        console.log(html);
        $("#wish_List").load("#wish_List");    
      }
    });
    		
}