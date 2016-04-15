define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/checkout-cart.html',
    "\n" +
    "\n" +
    "    <div class=\"navbar navbar-default craftsvilla-international hidden-sm hidden-xs\" role=\"navigation\">\n" +
    "        <div class=\"container craftsvilla-international-navbar \">\n" +
    "            <div class=\"left-section-international col-md-8 nopadding\">\n" +
    "                <i class=\"icon-v2 icon-small icon-call\"></i>\n" +
    "                <span class=\"call-text\">\n" +
    "                    Call <b>022 61579090</b> for any assistance\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"right-section-international pull-right col-md-4\">\n" +
    "                <a href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&hl=en\" class=\"download-app-section\" target=\"_blank\">\n" +
    "                    <i class=\"icon icon-small icon-download\"></i>\n" +
    "                    <span class=\"download-text\">Download App</span>\n" +
    "                </a>\n" +
    "                <span>&nbsp|&nbsp</span>\n" +
    "                <a href=\"/sell\" class=\"sell-section\">\n" +
    "                    <span class=\"sell-text\">Sell on Craftsvilla</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "<!-- International navbar section ends here -->\n" +
    "\n" +
    "<!-- craftsvilla header navbar starts here -->\n" +
    "\n" +
    "    <div class=\"navbar navbar-default craftsvilla-navbar navbar-fixed-top\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <div class=\"without-searchbar\">\n" +
    "                    <button type=\"button\" class=\"navbar-toggle pull-left mobile-navbar\" data-toggle=\"offcanvas\" data-target=\".sidebar-offcanvas\">\n" +
    "                        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                    </button>\n" +
    "                    <a class=\"navbar-brand logo-container\" rel=\"home\" href=\"/\">\n" +
    "                        <img class=\"brand\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" />\n" +
    "                    </a>\n" +
    "                    <div class=\"mobile-top visible-sm visible-xs pull-right\">\n" +
    "                        <i class=\"icon-v2 icon-small icon-search-v2 header-mobile-icon\"></i>\n" +
    "                        <a href=\"/wishlist/\"><i class=\"icon-v2 icon-wish icon-small header-mobile-icon\"></i></a>\n" +
    "                        <a class=\"cart-icon-section\" rel=\"nofollow\" href=\"/checkout/cart/\" onclick=\"dataLayer.push({'event':'WentToCartEvent','eventName':'WentToCart','source':'TopNavigation','count':'6'});\">\n" +
    "                            <span class=\"icon-container\">\n" +
    "                                <i class=\"icon-v2 icon-cart icon-small header-mobile-icon\"></i>\n" +
    "                                <span class=\"cart-count-container\">\n" +
    "                                    <span class=\"mnotification\">\n" +
    "                                        0\n" +
    "                                    </span>\n" +
    "                                </span>\n" +
    "                            </span>\n" +
    "                        </a>\n" +
    "                        <a rel=\"nofollow\" href=\"/customer/account/login/\" class=\"user-icon-section\">\n" +
    "                            <i class=\"icon-v2 icon-user header-mobile-icon\"></i>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"with-searchbar\">\n" +
    "                    <div class=\"back-arrow-container\">\n" +
    "                        <i class=\"icon-v2 icon-small icon-back-arrow\"></i>\n" +
    "                    </div>\n" +
    "                    <form class=\"col-xs-9\"id=\"msearch_mini_form\" action=\"/searchresults\" method=\"get\">\n" +
    "                        <input type=\"hidden\" name=\"searchby\" id=\"searchby\" value=\"product\">\n" +
    "                        <input class=\"typeahead sb-search-input\" placeholder=\"Search...\" type=\"text\" name=\"q\" value = \"\" id=\"msearchval\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-default col-md-2 text-uppercase sb-search-submit\" onclick=\"dataLayer.push({'event':'SearchPerformedEvent','eventName':'SearchPerformed','source':'homeScreen','suggestionUsed':'no'});\"><i class=\"icon-v2 icon-small icon-search-v2\"></i></button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "            <div class=\"collapse navbar-collapse nopadding\">\n" +
    "                <div class=\"col-md-6 col-md-offset-1 autosuggest-section\">\n" +
    "                    <form id=\"search_mini_form\" role=\"search\" action=\"/searchresults\" method=\"get\" onsubmit=\"javascript:return fillvalues();\">\n" +
    "                        <input type=\"hidden\" name=\"searchby\" id=\"searchby\"\n" +
    "                            value=\"product\"                      />\n" +
    "                        <div class=\"form-group col-md-10 text-holder\">\n" +
    "                            <input type=\"text\"  name=\"q\" class=\"typeahead form-control\" id=\"searchval\" placeholder=\"Eg: Salwar Suit, Lehnga, Kurtis\">\n" +
    "                        </div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default col-md-2 text-uppercase search-button\" onclick=\"dataLayer.push({'event':'SearchPerformedEvent','eventName':'SearchPerformed','source':'homeScreen','suggestionUsed':'no'});\">Search</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <ul class=\"nav navbar-nav col-md-3 right-section\">\n" +
    "                    <a class=\"col-md-2 wishlist\" href=\"/wishlist/\">\n" +
    "                        <i class=\"icon-small icon-wish\"></i>\n" +
    "                    </a>\n" +
    "                    <a class=\"cart-icon-container header-icon-container\" rel=\"nofollow\" href=\"/checkout/cart/\" onclick=\"dataLayer.push({'event':'WentToCartEvent','eventName':'WentToCart','source':'TopNavigation','count':'6'});\">\n" +
    "                        <li class=\"col-md-4 cart-container\">\n" +
    "                            <span class=\"cart-icon\">\n" +
    "                                <i class=\"icon-v2 icon-cart icon-small\"></i>\n" +
    "                            </span>\n" +
    "                            <span class=\"cart-text\">\n" +
    "                                Cart\n" +
    "                            </span>\n" +
    "                            <span class=\"notification\">\n" +
    "                                0\n" +
    "                            </span>\n" +
    "                        </li>\n" +
    "                    </a>\n" +
    "                    <li id=\"loginLogoutResponse\" class=\"col-md-4\">\n" +
    "                        <ul class=\"user-icon-container header-icon-container fancybox\" href=\"#login\">\n" +
    "                            <li class=\"account-section\">\n" +
    "                                <span class=\"user-icon\">\n" +
    "                                    <i class=\"icon-v2 icon-user\"></i>\n" +
    "                                </span>\n" +
    "                                <span class=\"user-text\">\n" +
    "                                    Sign In\n" +
    "                                </span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "        </div><!-- /.container-fluid -->\n" +
    "    </div>\n" +
    "<!-- Craftsvilla navbar ends here -->\n" +
    "  <!--  <a class=\"col-xs-12 buyer_protection_mobile visible-sm visible-xs\" id=\"buyer_protection_mobile\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\" class=\"protection-shield\"/>\n" +
    "        <span class=\"protection_text\"><b>100%</b> Buyer Protection</span>\n" +
    "        <span class=\"learn_more\">Learn More</span>\n" +
    "    </a> -->\n" +
    "    <!-- Modal -->\n" +
    "    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "            <!-- Modal content-->\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header no-border custom-modal-header\">\n" +
    "                    <div  class=\"policies-close\"  data-dismiss=\"modal\">X</div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body pad10px\">\n" +
    "                    <div>\n" +
    "                        <!-- Nav tabs -->\n" +
    "                        <ul class=\"nav nav-tabs policies-nav\" role=\"tablist\">\n" +
    "                            <li role=\"presentation\" class=\"active\"><a href=\"#shippingPolicies\" aria-controls=\"shippingPolicies\" role=\"tab\" data-toggle=\"tab\">Shipping Policies</a></li>\n" +
    "                            <li role=\"presentation\"><a href=\"#returnPolicies\" aria-controls=\"returnPolicies\" role=\"tab\" data-toggle=\"tab\">Return Policies</a></li>\n" +
    "                            <li role=\"presentation\"><a href=\"#securePayments\" aria-controls=\"securePayments\" role=\"tab\" data-toggle=\"tab\">100% Secure Payments</a></li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <!-- Tab panes -->\n" +
    "                        <div class=\"tab-content policies-tab-conent\">\n" +
    "                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"shippingPolicies\">\n" +
    "                                <div class=\"mart5\"><b>Shipping Time</b></div>\n" +
    "\n" +
    "                                <p>We deliver in India within 10 days and outside of India within 21 days. Currently our average delivery time in India is around 4 days and outside of India is 18 days</p>\n" +
    "\n" +
    "                                <div class=\"mart5\"><b>Shipment Tracking:</b></div>\n" +
    "\n" +
    "                                <p>You will get an email and SMS with the tracking details as soon as the product is shipped. You can also request the seller for a\n" +
    "                                faster shipping by clicking the ‘Contact Seller’ button on the product page after you place the order</p>\n" +
    "\n" +
    "                                <div class=\"mart5\"><b>Shipping Locations:</b> </div>\n" +
    "\n" +
    "                                <p>We deliver to over 100 countries globally including USA, UK, Australia and Canada </p>\n" +
    "                            </div>\n" +
    "                            <div role=\"tabpanel\" class=\"fade tab-pane\" id=\"returnPolicies\">\n" +
    "                                <div class=\"mart5\"><b>Return Time:</b></div>\n" +
    "                                <p>We have a 100% Buyer protection policy wherein you can return the product for any reason whatsoever. You can ship it back to us within 14 days and get a full refund  </p>\n" +
    "                                <div class=\"mart5\"><b>Return Process: </b></div>\n" +
    "                                <p>Just email us your complaint with order number within 7 days of receipt of the product. You can also login to your account and raise a dispute from there. Our team will reply to you with an approval email containing the instructions and return shipping address to which you need to send back the product within 7 days.  </p>\n" +
    "                                <div class=\"mart5\"><b>Refund: </b></div>\n" +
    "                                <p>If you wish, we can offer you a redeemable voucher worth the refund amount for future purchases. Else we can also refund the entire amount back to your bank account without any deductions along  with Rs. 100 for return shipping.</p>\n" +
    "                            </div>\n" +
    "                            <div role=\"tabpanel\" class=\"fade tab-pane\" id=\"securePayments\">\n" +
    "                                <div class=\"mart5\"><b>Payment Modes:</b> </div>\n" +
    "                                <p>Cash on Delivery</p>\n" +
    "                                <p>Net Banking, Debit cards/ Credit Cards (Visa, MasterCard, American Express, Diners Club cards accepted) International Credit Cards </p>\n" +
    "                                <div class=\"mart5\"><b>Payment Details: </b></div>\n" +
    "                                <p>You will receive an email with your payment details immediately after you make a purchase. In case of any issues our customer care would be happy to help you </p>\n" +
    "                                <div class=\"mart5\"><b>Payment Security:</b></div>\n" +
    "                                <p>You transparently pay through our Payment Gateway and all the data is transferred through high level encryption technology. We guarantee you, your payments are 100% secured with us and your payment details are never shared with anyone during the payment process </p>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- modal ends -->\n" +
    "    <div id=\"login\" style=\"display: none;\">\n" +
    "        <div class=\"col-xs-11 col-sm-11 item-chunk-xtra-padding\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <ul class=\"nav nav-pills\" role=\"tablist\">\n" +
    "                    <li role=\"presentation\" class=\"active\"><a id=\"login-hover\" href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Login</a></li>\n" +
    "                    <li role=\"presentation\" class=\"\"><a id=\"register-hover\" href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">Register</a></li>\n" +
    "                </ul>\n" +
    "                <div class=\"tab-content spacer nopadding\">\n" +
    "                    <div role=\"tabpanel\" class=\"fade tab-pane active in\" id=\"home\">\n" +
    "                        <form id=\"login-top\" method=\"post\" action=\"/customer/account/loginPost/\" class=\"signin-register-form\" role=\"form\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"email\" name=\"login[username]\" id=\"email\" placeholder=\"Email id\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"email\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"password\" name=\"login[password]\" id=\"pass\" placeholder=\"Password\" required=\"\" class=\"col-xs-12 form-control\" data-validation=\"required\" data-validation-error-msg=\"You did not enter a password\">\n" +
    "                            </div>\n" +
    "                            <input type=\"hidden\" name=\"login[currenturl]\" id=\"url\" value=\"http://www.craftsvilla.com/catalog/product/view/id/3142433/s/mimosa-kanchipuram-tassar-wedding-silk-saree-white-3051-97-hlfwhitemarun/\" />\n" +
    "                            <p class=\"small pull-right\">\n" +
    "                                <a id=\"fpass-hover\" href=\"/customer/account/forgotpassword/\">Forgot Password?</a>\n" +
    "                            </p>\n" +
    "                            <button id=\"signin-hover\" type=\"submit\" class=\"col-xs-12\">Sign In</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div role=\"tabpanel\" class=\"fade tab-pane\" id=\"profile\">\n" +
    "                        <form action=\"/customer/account/createpost/\" class=\"signin-register-form\" method=\"post\" id=\"form-validate\" role=\"form\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" name=\"firstname\" id=\"firstname\" placeholder=\"First Name\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"required alphanumeric\" data-validation-error-msg=\"You did not enter a first name\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" name=\"lastname\" id=\"lastname\" placeholder=\"Last Name\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"required alphanumeric\" data-validation-error-msg=\"You did not enter a last name\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" id=\"telephone\" name=\"telephone\" placeholder=\"Mobile No\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"number length\" maxlength=\"10\" data-validation-length=\"10-10\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"email\" name=\"email\" id=\"email_address\" placeholder=\"Email id\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"email\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required=\"\" class=\"col-xs-12 form-control\" data-validation=\"required length\" data-validation-length=\"min6\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"password\" id=\"confirmation\" name=\"confirmation\" placeholder=\"Re-Enter Password\" required=\"\" class=\"col-xs-12 form-control\" data-validation=\"confirmation\" data-validation-confirm=\"password\" data-validation-error-msg=\"Please enter the same password\"/>\n" +
    "                            </div>\n" +
    "                            <button id=\"register-header\" type=\"submit\" class=\"col-xs-12\" onclick=\"sendSignUpData();\">Register</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "<script>\n" +
    "    function sendSignUpData() {\n" +
    "        dataLayer.push({\n" +
    "            'event':'UserSignedUpEvent',\n" +
    "            'eventName':'UserSignedUp',\n" +
    "            'type':'email',\n" +
    "            'cartValue':'6'\n" +
    "        });\n" +
    "        clevertap.profile.push({\n" +
    "            \"Site\": {\n" +
    "                \"Name\": $('#firstname').val() + \" \" + $('#lastname').val(),// User's name\n" +
    "                \"Email\": $('#email_address').val(), // User's email\n" +
    "                \"Phone\": \"+91\" + $('#telephone').val() // User's phone with country code\n" +
    "            }\n" +
    "        });\n" +
    "    }\n" +
    "    dataLayer = [{\n" +
    "        'pageLink':'http://www.craftsvilla.com/catalog/product/view/id/3142433/s/mimosa-kanchipuram-tassar-wedding-silk-saree-white-3051-97-hlfwhitemarun/',\n" +
    "        'title':'Mimosa Kanchipuram Tassar Wedding Silk Saree White(3051-97-hlfwhitemarun)-Sarees-Kataria Silk House Pvt Ltd',\n" +
    "        'userEmailAddress':'kurheasha@gmaii.com',\n" +
    "        'type':'email',\n" +
    "        'city':'amravati',\n" +
    "        'loggedIn':'yes',\n" +
    "        'cartValue':'6',\n" +
    "        'cartItemsCount':'6'\n" +
    "    }];\n" +
    "</script>\n" +
    "\n" +
    "<div class=\"dropdown visible-xs\" id=\"custom-header-dropdown\">\n" +
    "  <ul class=\"dropdown-menu dropdown-category\" aria-labelledby=\"dropdownMenu1\">\n" +
    "      <li class=\"dropdown-header\"><b>FASHION</b></li>\n" +
    "          <li><a href=\"/sarees-sari.html\">Sarees</a></li>\n" +
    "          <li><a href=\"/clothing/lehnga.html\">Bridal Lehenga</a></li>\n" +
    "          <li><a href=\"/clothing/salwar-suit.html\">Salwar Suits</a></li>\n" +
    "          <li><a href=\"/clothing.html\">Other Clothing</a></li>\n" +
    "          <li><a href=\"/jewellery-jewelry.html\">Jewellery</a></li>\n" +
    "          <li><a href=\"/bags.html\">Bags</a></li>\n" +
    "          <li><a href=\"/accessories.html\">Accessories</a></li>\n" +
    "          <li><a href=\"/footwear-1.html\">Footwear</a></li>\n" +
    "      <li class=\"dropdown-header\"><b>HOME</b></li>\n" +
    "          <li><a href=\"/home-decor-products.html\">Home Decor</a></li>\n" +
    "          <li><a href=\"/home-furnishing.html\">Home Furnishings</a></li>\n" +
    "      <li class=\"dropdown-header\"><b>LIFESTYLE</b></li>\n" +
    "          <li><a href=\"/food-health.html\">Food &amp; Health</a></li>\n" +
    "          <li><a href=\"/bath-beauty.html\">Bath &amp; Beauty</a></li>\n" +
    "      <li class=\"dropdown-header\"><b>OTHER</b></li>\n" +
    "          <li><a href=\"/gifts-birthday-anniversary-wedding.html\">Gifts</a></li>\n" +
    "          <li><a href=\"/kids-baby-names-toy.html\">Kids</a></li>\n" +
    "          <li><a href=\"/books-india.html\">Books</a></li>\n" +
    "          <li><a href=\"/spiritual-books-pooja.html\">Spiritual</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\">\n" +
    "\t<div class=\"container product_container  cart-pad-lr5-xs\"><!-- Product page breadcrumbs starts here -->\n" +
    "\n" +
    "\t<!-- new checkout design starts here -->\n" +
    "\n" +
    "    <div class=\"col-xs-12  col-md-12 buyer-section hidden-sm hidden-xs\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "        <img class=\"buyer-icon\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\">\n" +
    "        <span class=\"buyer-text\"><b>100%</b> <span class=\"buyer-regular-text regular-text\">Buyer Protection</span> |\n" +
    "        <span class=\"secure-text regular-text\">Secure Payments &amp; Easy Returns | <span class=\"learn-text regular-text\">Learn More</span></span></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-12 nopadding\" check-out=\"\">\n" +
    "\n" +
    "       <div class=\"header\"> my cart | 3 item(s) </div> <!-- checkout header ends -->\n" +
    "\n" +
    "         <div class=\"col-xs-12 check-out-msg\" >\n" +
    "             <div class=\"check-out-msg-txt\">Some itmes in your cart are <strong>'out of stock'</strong></div>\n" +
    "             <div class=\"check-out-msg-btn\">Remove</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 check-out-msg\"    style=\"display:none;\" >\n" +
    "             <div class=\"check-out-msg-txt\"> Item removed from your cart</div>\n" +
    "             <div class=\"check-out-msg-btn\">undo</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-12 nopadding left-panel\">\n" +
    "\n" +
    "            <div class=\"cart-items-card\">\n" +
    "                 <div class=\"cart-details-close\"><img src=\"images/delete-icon.png\" width='100%'></div>\n" +
    "                <div class=\"cart-items-cont\">\n" +
    "                    <div class=\"cart-img-cont\">\n" +
    "                        <img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MKATA38861136840--KATARIA_SILK_HOUSE_PVT_LTD-Craftsvilla_1.jpg\">\n" +
    "                    </div>\n" +
    "                     <div class=\"cart-details-cont\">\n" +
    "                        <div class=\"col-xs-12 nopadding  c-itm-name\">Latest Designer Black And White Long Sleeve Straight Suit</div>\n" +
    "                        <div class=\"col-xs-12 nopadding  c-itm-price\">  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>\n" +
    "<div style=\"float:left;\">1800</div></div>\n" +
    "                        <div class=\"col-xs-12 nopadding  c-itm-qty\">\n" +
    "                            <div class=\"text\">Qty:</div>\n" +
    "                            <div class=\"dropdown chck-drpdwn\">\n" +
    "                                <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\" style=\"\"></span> </button>\n" +
    "                                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                    <li><a href=\"#\">1</a></li>\n" +
    "                                    <li><a href=\"#\">2</a></li>\n" +
    "                                    <li><a href=\"#\">3</a></li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"seller-note hidden-xs\">add a note seller</div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"cart-seller-cont hidden-lg\">\n" +
    "                    <form >\n" +
    "                    <div class=\"text out-o-stk\">out of stock</div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                  <div class=\"overlay-out-stock\">   </div>\n" +
    "      </div> <!-- cart-items-card ends -->\n" +
    "\n" +
    "\n" +
    "  <div class=\"cart-items-card t-m-10\">\n" +
    "                 <div class=\"cart-details-close\"><img src=\"images/delete-icon.png\" width='100%'></div>\n" +
    "                <div class=\"cart-items-cont\">\n" +
    "                    <div class=\"cart-img-cont\">\n" +
    "                        <img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MKATA38861136840--KATARIA_SILK_HOUSE_PVT_LTD-Craftsvilla_1.jpg\">\n" +
    "                    </div>\n" +
    "                     <div class=\"cart-details-cont\">\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-name\">Latest Designer Black And White Long Sleeve Straight Suit</div>\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-price\">  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>\n" +
    "<div style=\"float:left;\">1800</div></div>\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-qty\">\n" +
    "                            <div class=\"text\">Qty:</div>\n" +
    "                            <div class=\"dropdown chck-drpdwn\">\n" +
    "                                <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                    <li><a href=\"#\">1</a></li>\n" +
    "                                    <li><a href=\"#\">2</a></li>\n" +
    "                                    <li><a href=\"#\">3</a></li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                         <div class=\"seller-note out-o-stk hidden-xs\">out of stock</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"cart-seller-cont hidden-lg\">\n" +
    "                    <form >\n" +
    "                    <div class=\"text out-o-stk\">out of stock</div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                  <div class=\"overlay-out-stock\">   </div>\n" +
    "      </div> <!-- cart-items-card ends -->\n" +
    "\n" +
    "  <div class=\"col-xs-6 nopadding red t-m-10\">Items without cash on delivery</div>\n" +
    "  <div class=\"col-xs-6 nopadding clrrouge t-m-10 text-right \">Remove All</div>\n" +
    "          <div class=\"cart-items-card t-m-10\">\n" +
    "                 <div class=\"cart-details-close\"><img src=\"images/delete-icon.png\" width='100%'></div>\n" +
    "                <div class=\"cart-items-cont\">\n" +
    "                    <div class=\"cart-img-cont\">\n" +
    "                        <img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MRISE17939320530--Rise_N_Shine-Craftsvilla_1.jpg\">\n" +
    "                    </div>\n" +
    "                     <div class=\"cart-details-cont\">\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-name\">Latest Designer Black And White Long Sleeve Straight Suit</div>\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-price\">  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>\n" +
    "<div style=\"float:left;\">1800</div></div>\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-qty\">\n" +
    "                            <div class=\"text\">Qty:</div>\n" +
    "                            <div class=\"dropdown chck-drpdwn\">\n" +
    "                                <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                    <li><a href=\"#\">1</a></li>\n" +
    "                                    <li><a href=\"#\">2</a></li>\n" +
    "                                    <li><a href=\"#\">3</a></li>\n" +
    "\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                           <div class=\"seller-note hidden-xs\" >add a note seller</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"cart-seller-cont hidden-lg\">\n" +
    "                    <form >\n" +
    "                    <div class=\"text\" style=\"display:none;\">add a seller note</div>\n" +
    "                    <div class=\"open-cont\" >\n" +
    "                        <p> Add note to seller </p>\n" +
    "                        <textarea class=\"seller-texta\" placeholder=\"Add a note here\"></textarea>\n" +
    "                     <span class=\"buttons r-m-20 t-m-10 m-left-59 m-right-20\">cancel</span>\n" +
    "                        <span class=\"buttons t-m-10 \">save</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"open-cont\" style=\"display:none;\">\n" +
    "                        <p> Whatever the user adds appears here. Whatever the user adds appear here</p>\n" +
    "                       <span class=\"buttons r-m-20 t-m-10 m-left-59 m-right-20\">remove</span>\n" +
    "                        <span class=\"buttons t-m-10\">edit</span>\n" +
    "                    </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "      </div> <!-- cart-items-card ends -->\n" +
    "\n" +
    "       <div class=\"cart-items-card t-m-10\">\n" +
    "                 <div class=\"cart-details-close\"><img src=\"images/delete-icon.png\" width='100%'></div>\n" +
    "                <div class=\"cart-items-cont\">\n" +
    "                    <div class=\"cart-img-cont\">\n" +
    "                        <img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MRISE17939320530--Rise_N_Shine-Craftsvilla_1.jpg\">\n" +
    "                    </div>\n" +
    "                     <div class=\"cart-details-cont\">\n" +
    "                        <div class=\"col-xs-12 nopadding  c-itm-name\">Latest Designer Black And White Long Sleeve Straight Suit</div>\n" +
    "                        <div class=\"col-xs-12 nopadding  c-itm-price\">\n" +
    "                              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>\n" +
    "<div style=\"float:left;\">1800</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-qty\">\n" +
    "                            <div class=\"text\">Qty:</div>\n" +
    "                            <div class=\"dropdown chck-drpdwn\">\n" +
    "                                <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                    <li><a href=\"#\">1</a></li>\n" +
    "                                    <li><a href=\"#\">2</a></li>\n" +
    "                                    <li><a href=\"#\">3</a></li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"seller-note hidden-xs\" style=\"display:none;\">add a note seller</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"cart-seller-cont \">\n" +
    "                    <form >\n" +
    "                    <div class=\"text hidden-lg \" style=\"display:none;\" >add a seller note</div>\n" +
    "                    <div class=\"open-cont \" >\n" +
    "                        <p> Add note to seller </p>\n" +
    "                        <textarea class=\"seller-texta\" placeholder=\"Add a note here\" ></textarea>\n" +
    "                        <span class=\"buttons b-border t-m-10 \">save</span>\n" +
    "                        <span class=\"buttons l-m-20 t-m-10 m-right-20\">cancel</span>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"open-cont\" style=\"display:none;\">\n" +
    "                        <p> Whatever the user adds appears here. Whatever the user adds appear here</p>\n" +
    "                        <span class=\"buttons r-m-20 t-m-10 m-left-59 m-right-20\">remove</span>\n" +
    "                        <span class=\"buttons t-m-10\">edit</span>\n" +
    "                    </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "      </div> <!-- cart-items-card ends -->\n" +
    "\n" +
    "        <div class=\"cart-items-card t-m-10\">\n" +
    "                 <div class=\"cart-details-close\"><img src=\"images/delete-icon.png\" width='100%'></div>\n" +
    "                <div class=\"cart-items-cont\">\n" +
    "                    <div class=\"cart-img-cont\">\n" +
    "                        <img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MRISE17939320530--Rise_N_Shine-Craftsvilla_1.jpg\">\n" +
    "                    </div>\n" +
    "                     <div class=\"cart-details-cont\">\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-name\">Latest Designer Black And White Long Sleeve Straight Suit test</div>\n" +
    "                        <div class=\"col-xs-12 nopadding c-itm-price\">\n" +
    "                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>\n" +
    "<div style=\"float:left;\">1800</div></div>\n" +
    "                        <div class=\"col-xs-12 nopadding  c-itm-qty\">\n" +
    "                            <div class=\"text\">Qty:</div>\n" +
    "                            <div class=\"dropdown chck-drpdwn\">\n" +
    "                                <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                    <li><a href=\"#\">1</a></li>\n" +
    "                                    <li><a href=\"#\">2</a></li>\n" +
    "                                    <li><a href=\"#\">3</a></li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"seller-note hidden-xs\" style=\"display:none;\">add a note seller</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"cart-seller-cont \" >\n" +
    "                    <form >\n" +
    "                    <div class=\"text hidden-lg\" style=\"display:none;\" >add a seller note</div>\n" +
    "                    <div class=\"open-cont\" style=\"display:none;\" >\n" +
    "                        <p> Add note to seller </p>\n" +
    "                        <textarea class=\"seller-texta\" placeholder=\"Add a note here\" ></textarea>\n" +
    "                        <span class=\"buttons r-m-20 t-m-10 m-left-59 m-right-20\">cancel</span>\n" +
    "                        <span class=\"buttons t-m-10\">save</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"open-cont\" >\n" +
    "                        <p> Whatever the user adds appears here. Whatever the user adds appear here. Whatever the user adds appears here. Whatever the user adds appear here.</p>\n" +
    "                        <span class=\"buttons  b-border t-m-10\">edit</span>\n" +
    "                        <span class=\"buttons l-m-20 t-m-10 m-left-20\">remove</span>\n" +
    "\n" +
    "                    </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "      </div> <!-- cart-items-card ends -->\n" +
    "\n" +
    "      <div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "        <div class=\"c-continue-shpng\"> <img class=\"c-arrw\" src=\"images/back-CTA-icon.png\"> Continue Shopping    </div>\n" +
    "        <div class=\"order-total\">\n" +
    "            <div class=\"pulll-left inln-blck\">Total Payable(3 Item(s))</div>\n" +
    "            <div class=\"o-t-amt pull-right inln-blck\">\n" +
    "                <div class=\"pull-right inln-blck\"> 3,240</div><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "        </div> <!-- checkout left panel ends -->\n" +
    "\n" +
    "        <div class=\"col-xs-12 nopadding  right-panel\">\n" +
    "           <div class=\"col-xs-12  coupon-cont\"  >\n" +
    "            <div class=\"coupon-text\" style=\"display:none;\" >Coupon <span class=\"colorblack\"><strong>“CRAFTSLOVE”</strong></span> applied  <span class=\"clrrouge\">Remove</span></div>\n" +
    "             <div class=\"coupon-text\" style=\"display:none;\"    >Coupon <span class=\"colorblack\"><strong>“CRAFTSLOVE”</strong></span> applied  <span class=\"clrrouge\">Remove</span></div>\n" +
    "            <div class=\"cc-header\" >Enter Coupon Code</div>\n" +
    "            <div class=\"col-xs-12 nopadding\"  >\n" +
    "                <form class=\"coupon-cont-form\">\n" +
    "                    <input type=\"text\" class=\"col-xs-8 coupon-input red-border\">\n" +
    "                    <button class=\"col-xs-4 coupon-c-button\">APPLY</button>\n" +
    "                     <div class=\"red\" >Coupon code invalid</div>\n" +
    "                </form>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    " <div class=\"col-xs-12 order-cont\">\n" +
    "            <div class=\"o-heading\">order summary</div>\n" +
    "\n" +
    "            <div class=\"o-left-cont\">\n" +
    "                <p>Sub Total</p>\n" +
    "                <p>Coupon Applied (CRAFTSLOVE)</p>\n" +
    "                <p class=\"green\">You saved 10%</p>\n" +
    "                <p>Shipping</p>\n" +
    "                <p class=\"total pad-t-7\"><b>Total Payable</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"o-right-cont\">\n" +
    "                <div class=\"ord-amt\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> <div class=\"pull-right\">3,600</div></div>\n" +
    "                <div class=\"ord-amt\"> - <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> 360</div>\n" +
    "\n" +
    "<div class=\"ord-amt icon\"> </div>\n" +
    "                <div class=\"ord-amt\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>0</div>\n" +
    "                <div class=\"ord-amt total\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>3240</div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 procd-to-checkout\">Proceed to checkout<img style=\"margin-left:5px;height:auto; width:5%;\" src=\"images/Checkout-CTA-icon.png\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        </div> <!-- checkout right panel ends -->\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\t<!-- new checkout design ends here -->\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"fancybox\" id=\"successmessage\" style=\"display:none\">\n" +
    "            <p class=\"colorgreen mt20\">Your message has been sent</p>\n" +
    "        </div>\n" +
    "        <div class=\"fancybox\" id=\"notsuccessmessage\" style=\"display:none\">\n" +
    "            <p class=\"colorred mt20\">Image size should be less than 2MB</p>\n" +
    "        </div>\n" +
    "        <div class=\"fancybox\" id=\"filetypeext\" style=\"display:none\">\n" +
    "            <p class=\"colorred mt20\">It is not valid file type</p>\n" +
    "        </div>\n" +
    "        <!--Seller Contact pop up Info-->\n" +
    "        <script>\n" +
    "            /* $('.modal-toggle').click(function (e) {\n" +
    "            var tab = e.target.hash;\n" +
    "            $('li > a[href=\"' + tab + '\"]').tab(\"show\");\n" +
    "            });*/\n" +
    "        </script>\n" +
    "        <script>\n" +
    "            dataLayer = [{\n" +
    "                'productId':'3142433',\n" +
    "                'skuId':'MKATA60862076570',\n" +
    "                'prodName':'Mimosa Kanchipuram Tassar Wedding Silk Saree White305197hlfwhitemarun',\n" +
    "                'prodURL':'/catalog/product/view/id/3142433/s/mimosa-kanchipuram-tassar-wedding-silk-saree-white-3051-97-hlfwhitemarun',\n" +
    "                'imageURL':'/C/V/CV-MKATA60862076570--KATARIA_SILK_HOUSE_PVT_LTD-Craftsvilla_1.jpg',\n" +
    "                'localShippingCost':'150',\n" +
    "                'shippingCostInternational':'1,000',\n" +
    "                'productCategory':'Sarees',\n" +
    "                'productSubCategory':'Kanchivaram Sarees',\n" +
    "                'productPrice':'1,849',\n" +
    "                'sellerName':'Kataria Silk House Pvt Ltd',\n" +
    "                'productAvailability':'1',\n" +
    "                'currency':'INR',\n" +
    "                'source':'productDetailsPage',\n" +
    "                'buttonText':'BuyNow'\n" +
    "            }];\n" +
    "        </script>\n" +
    "</div></div><!-- footer begins here -->\n" +
    "<div class=\"container-fluid nopadding footer_container\">\n" +
    "    <div class=\"footer\">\n" +
    "        <footer>\n" +
    "            <div class=\"container nopadding\">\n" +
    "                <section class=\"col-xs-12 hidden-xs hidden-lg\">\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>OUR COMPANY</h1></li>\n" +
    "                        <li><a href=\"/about-us-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'About us'});\">About us</a></li>\n" +
    "                        <li><a href=\"/craftsvilla-in-media\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Craftsvilla in Media'});\">Craftsvilla in Media</a></li>\n" +
    "                        <li><a href=\"/how-to-buy-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'How to Buy'});\">How to buy</a></li>\n" +
    "                        <li><a href=\"http://blog.craftsvilla.com\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Blog'});\">Blog</a></li>\n" +
    "                        <li><a href=\"/secure-shopping-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Secure Payment Options'});\">Secure Payment Options</a></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>USEFUL INFO</h1></li>\n" +
    "                        <li><a href=\"/faq-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'FAQ'});\">FAQ's</a></li>\n" +
    "                        <li><a href=\"/catalog/seo_sitemap/category\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Sitemap'});\">Sitemap</a></li>\n" +
    "                        <li><a href=\"/contact-us-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Contact Us'});\">Contact us</a></li>\n" +
    "\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>POLICIES & INFO</h1></li>\n" +
    "                        <li><a href=\"/terms-and-conditions-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Terms  Conditions'});\">Terms &amp; Conditions</a></li>\n" +
    "                        <li><a href=\"/policy-for-sellers\" onclick=\"dataLayer.push({'event':'PoliciesViewedEvent','eventName':'PoliciesViewed','link':'Policy for Sellers','type':'PolicyForSellers','place':'policiesPage'});\">Policy for Sellers</a></li>\n" +
    "                        <li><a href=\"/policy-for-buyers\" onclick=\"dataLayer.push({'event':'PoliciesViewedEvent','eventName':'PoliciesViewed','link':'Policy for Buyers','type':'PolicyForBuyers','place':'policiesPage'});\">Policy for Buyers</a></li>\n" +
    "                        <li><a href=\"/shipping-artisans-designers\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Shipping Refund Policies'});\">Shipping &amp; Refund Policies</a></li>\n" +
    "                        <li><a href=\"/wholesale-policy\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Wholesale Policy'});\">Wholesale Policy</a></li>\n" +
    "                        <li><a href=\"/privacy-policy-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Privacy Policy'});\">Privacy Policy</a></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>POLICIES & INFO</h1></li>\n" +
    "                        <li><a href=\"/marketplace/vendor\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller Login'});\">Seller Login</a></li>\n" +
    "                        <li><a href=\"/umicrosite/vendor/register\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller Sign Up'});\">Seller Sign up</a></li>\n" +
    "                        <li><a href=\"/seller-handbook\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller Handbook'});\">Seller Handbook</a></li>\n" +
    "                        <li><a href=\"/craftsvilla-seller-faq\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller FAQs'});\">Seller FAQs</a></li>\n" +
    "                    </ul>\n" +
    "                </section>\n" +
    "                <section class=\"col-xs-12 hidden-xs\">\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>SUPPORT</h1></li>\n" +
    "                        <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "                            <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1> PAYMENT OPTIONS</h1></li>\n" +
    "                        <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>STAY CONNECTED</h1></li>\n" +
    "                        <li>\n" +
    "                            <a href=\"http://www.facebook.com/craftsvilla\" target=\"_blank\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "                            <a href=\"https://twitter.com/craftsvilla\" target=\"_blank\"><img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\"></a>\n" +
    "                            <a href=\"https://plus.google.com/117677147285924975963\" target=\"_blank\"><img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"></a>\n" +
    "                            <a href=\"https://www.pinterest.com/craftsvilla/\" target=\"_blank\">\n" +
    "                            <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\">\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>DOWNLOAD OUR APP</h1></li>\n" +
    "                        <li><a href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&hl=en\" target=\"_blank\">\n" +
    "                                <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </section>\n" +
    "            </div>\n" +
    "            <section class=\"m-t-10 beige-bg nopadding hidden-xs center-block subscribe-block\">\n" +
    "                <div class=\"subscribe-cont\">\n" +
    "                    <span>STAY CONNECTED</span>\n" +
    "                    <span class=\"p-l-5\"> <input type=\"text\"\n" +
    "                        title=\"subscribe\"><input type=\"submit\" title=\"subscribe-sub\" value=\"Subscribe\"></span>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "\n" +
    "            <section class=\"hidden-md hidden-lg write-us-cont\">\n" +
    "                <p class=\"write-us\" >If you can't find What you're looking for, write to us on <a href=\"\" class=\"rouge\">customercare@craftsvilla.com</a></p>\n" +
    "                    <div style=\"text-align:center; padding:10px 0; \">\n" +
    "                        <a href=\"http://www.facebook.com/craftsvilla\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\">\n" +
    "                        </a>\n" +
    "                        <a href=\"https://www.pinterest.com/craftsvilla/\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\">\n" +
    "                        </a>\n" +
    "                        <a href=\"https://twitter.com/craftsvilla\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\">\n" +
    "                        </a>\n" +
    "                        <a href=\"https://plus.google.com/117677147285924975963\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\">\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "            </section>\n" +
    "        </footer>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('partials/empty-cart.html',
    "\n" +
    "    <div class=\"navbar navbar-default craftsvilla-international hidden-sm hidden-xs\" role=\"navigation\">\n" +
    "        <div class=\"container craftsvilla-international-navbar \">\n" +
    "            <div class=\"left-section-international col-md-8 nopadding\">\n" +
    "                <i class=\"icon-v2 icon-small icon-call\"></i>\n" +
    "                <span class=\"call-text\">\n" +
    "                    Call <b>022 61579090</b> for any assistance\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"right-section-international pull-right col-md-4\">\n" +
    "                <a href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&hl=en\" class=\"download-app-section\" target=\"_blank\">\n" +
    "                    <i class=\"icon icon-small icon-download\"></i>\n" +
    "                    <span class=\"download-text\">Download App</span>\n" +
    "                </a>\n" +
    "                <span>&nbsp|&nbsp</span>\n" +
    "                <a href=\"/sell\" class=\"sell-section\">\n" +
    "                    <span class=\"sell-text\">Sell on Craftsvilla</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "<!-- International navbar section ends here -->\n" +
    "\n" +
    "<!-- craftsvilla header navbar starts here -->\n" +
    "\n" +
    "    <div class=\"navbar navbar-default craftsvilla-navbar navbar-fixed-top\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <div class=\"without-searchbar\">\n" +
    "                    <button type=\"button\" class=\"navbar-toggle pull-left mobile-navbar\" data-toggle=\"offcanvas\" data-target=\".sidebar-offcanvas\">\n" +
    "                        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                    </button>\n" +
    "                    <a class=\"navbar-brand logo-container\" rel=\"home\" href=\"/\">\n" +
    "                        <img class=\"brand\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" />\n" +
    "                    </a>\n" +
    "                    <div class=\"mobile-top visible-sm visible-xs pull-right\">\n" +
    "                        <i class=\"icon-v2 icon-small icon-search-v2 header-mobile-icon\"></i>\n" +
    "                        <a href=\"/wishlist/\"><i class=\"icon-v2 icon-wish icon-small header-mobile-icon\"></i></a>\n" +
    "                        <a class=\"cart-icon-section\" rel=\"nofollow\" href=\"/checkout/cart/\" onclick=\"dataLayer.push({'event':'WentToCartEvent','eventName':'WentToCart','source':'TopNavigation','count':'6'});\">\n" +
    "                            <span class=\"icon-container\">\n" +
    "                                <i class=\"icon-v2 icon-cart icon-small header-mobile-icon\"></i>\n" +
    "                                <span class=\"cart-count-container\">\n" +
    "                                    <span class=\"mnotification\">\n" +
    "                                        0\n" +
    "                                    </span>\n" +
    "                                </span>\n" +
    "                            </span>\n" +
    "                        </a>\n" +
    "                        <a rel=\"nofollow\" href=\"/customer/account/login/\" class=\"user-icon-section\">\n" +
    "                            <i class=\"icon-v2 icon-user header-mobile-icon\"></i>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"with-searchbar\">\n" +
    "                    <div class=\"back-arrow-container\">\n" +
    "                        <i class=\"icon-v2 icon-small icon-back-arrow\"></i>\n" +
    "                    </div>\n" +
    "                    <form class=\"col-xs-9\"id=\"msearch_mini_form\" action=\"/searchresults\" method=\"get\">\n" +
    "                        <input type=\"hidden\" name=\"searchby\" id=\"searchby\" value=\"product\">\n" +
    "                        <input class=\"typeahead sb-search-input\" placeholder=\"Search...\" type=\"text\" name=\"q\" value = \"\" id=\"msearchval\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-default col-md-2 text-uppercase sb-search-submit\" onclick=\"dataLayer.push({'event':'SearchPerformedEvent','eventName':'SearchPerformed','source':'homeScreen','suggestionUsed':'no'});\"><i class=\"icon-v2 icon-small icon-search-v2\"></i></button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "            <div class=\"collapse navbar-collapse nopadding\">\n" +
    "                <div class=\"col-md-6 col-md-offset-1 autosuggest-section\">\n" +
    "                    <form id=\"search_mini_form\" role=\"search\" action=\"/searchresults\" method=\"get\" onsubmit=\"javascript:return fillvalues();\">\n" +
    "                        <input type=\"hidden\" name=\"searchby\" id=\"searchby\"\n" +
    "                            value=\"product\"                      />\n" +
    "                        <div class=\"form-group col-md-10 text-holder\">\n" +
    "                            <input type=\"text\"  name=\"q\" class=\"typeahead form-control\" id=\"searchval\" placeholder=\"Eg: Salwar Suit, Lehnga, Kurtis\">\n" +
    "                        </div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default col-md-2 text-uppercase search-button\" onclick=\"dataLayer.push({'event':'SearchPerformedEvent','eventName':'SearchPerformed','source':'homeScreen','suggestionUsed':'no'});\">Search</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <ul class=\"nav navbar-nav col-md-3 right-section\">\n" +
    "                    <a class=\"col-md-2 wishlist\" href=\"/wishlist/\">\n" +
    "                        <i class=\"icon-small icon-wish\"></i>\n" +
    "                    </a>\n" +
    "                    <a class=\"cart-icon-container header-icon-container\" rel=\"nofollow\" href=\"/checkout/cart/\" onclick=\"dataLayer.push({'event':'WentToCartEvent','eventName':'WentToCart','source':'TopNavigation','count':'6'});\">\n" +
    "                        <li class=\"col-md-4 cart-container\">\n" +
    "                            <span class=\"cart-icon\">\n" +
    "                                <i class=\"icon-v2 icon-cart icon-small\"></i>\n" +
    "                            </span>\n" +
    "                            <span class=\"cart-text\">\n" +
    "                                Cart\n" +
    "                            </span>\n" +
    "                            <span class=\"notification\">\n" +
    "                                0\n" +
    "                            </span>\n" +
    "                        </li>\n" +
    "                    </a>\n" +
    "                    <li id=\"loginLogoutResponse\" class=\"col-md-4\">\n" +
    "                        <ul class=\"user-icon-container header-icon-container fancybox\" href=\"#login\">\n" +
    "                            <li class=\"account-section\">\n" +
    "                                <span class=\"user-icon\">\n" +
    "                                    <i class=\"icon-v2 icon-user\"></i>\n" +
    "                                </span>\n" +
    "                                <span class=\"user-text\">\n" +
    "                                    Sign In\n" +
    "                                </span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "        </div><!-- /.container-fluid -->\n" +
    "    </div>\n" +
    "<!-- Craftsvilla navbar ends here -->\n" +
    "  <!--  <a class=\"col-xs-12 buyer_protection_mobile visible-sm visible-xs\" id=\"buyer_protection_mobile\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\" class=\"protection-shield\"/>\n" +
    "        <span class=\"protection_text\"><b>100%</b> Buyer Protection</span>\n" +
    "        <span class=\"learn_more\">Learn More</span>\n" +
    "    </a> -->\n" +
    "    <!-- Modal -->\n" +
    "    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "            <!-- Modal content-->\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header no-border custom-modal-header\">\n" +
    "                    <div  class=\"policies-close\"  data-dismiss=\"modal\">X</div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body pad10px\">\n" +
    "                    <div>\n" +
    "                        <!-- Nav tabs -->\n" +
    "                        <ul class=\"nav nav-tabs policies-nav\" role=\"tablist\">\n" +
    "                            <li role=\"presentation\" class=\"active\"><a href=\"#shippingPolicies\" aria-controls=\"shippingPolicies\" role=\"tab\" data-toggle=\"tab\">Shipping Policies</a></li>\n" +
    "                            <li role=\"presentation\"><a href=\"#returnPolicies\" aria-controls=\"returnPolicies\" role=\"tab\" data-toggle=\"tab\">Return Policies</a></li>\n" +
    "                            <li role=\"presentation\"><a href=\"#securePayments\" aria-controls=\"securePayments\" role=\"tab\" data-toggle=\"tab\">100% Secure Payments</a></li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <!-- Tab panes -->\n" +
    "                        <div class=\"tab-content policies-tab-conent\">\n" +
    "                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"shippingPolicies\">\n" +
    "                                <div class=\"mart5\"><b>Shipping Time</b></div>\n" +
    "\n" +
    "                                <p>We deliver in India within 10 days and outside of India within 21 days. Currently our average delivery time in India is around 4 days and outside of India is 18 days</p>\n" +
    "\n" +
    "                                <div class=\"mart5\"><b>Shipment Tracking:</b></div>\n" +
    "\n" +
    "                                <p>You will get an email and SMS with the tracking details as soon as the product is shipped. You can also request the seller for a\n" +
    "                                faster shipping by clicking the ‘Contact Seller’ button on the product page after you place the order</p>\n" +
    "\n" +
    "                                <div class=\"mart5\"><b>Shipping Locations:</b> </div>\n" +
    "\n" +
    "                                <p>We deliver to over 100 countries globally including USA, UK, Australia and Canada </p>\n" +
    "                            </div>\n" +
    "                            <div role=\"tabpanel\" class=\"fade tab-pane\" id=\"returnPolicies\">\n" +
    "                                <div class=\"mart5\"><b>Return Time:</b></div>\n" +
    "                                <p>We have a 100% Buyer protection policy wherein you can return the product for any reason whatsoever. You can ship it back to us within 14 days and get a full refund  </p>\n" +
    "                                <div class=\"mart5\"><b>Return Process: </b></div>\n" +
    "                                <p>Just email us your complaint with order number within 7 days of receipt of the product. You can also login to your account and raise a dispute from there. Our team will reply to you with an approval email containing the instructions and return shipping address to which you need to send back the product within 7 days.  </p>\n" +
    "                                <div class=\"mart5\"><b>Refund: </b></div>\n" +
    "                                <p>If you wish, we can offer you a redeemable voucher worth the refund amount for future purchases. Else we can also refund the entire amount back to your bank account without any deductions along  with Rs. 100 for return shipping.</p>\n" +
    "                            </div>\n" +
    "                            <div role=\"tabpanel\" class=\"fade tab-pane\" id=\"securePayments\">\n" +
    "                                <div class=\"mart5\"><b>Payment Modes:</b> </div>\n" +
    "                                <p>Cash on Delivery</p>\n" +
    "                                <p>Net Banking, Debit cards/ Credit Cards (Visa, MasterCard, American Express, Diners Club cards accepted) International Credit Cards </p>\n" +
    "                                <div class=\"mart5\"><b>Payment Details: </b></div>\n" +
    "                                <p>You will receive an email with your payment details immediately after you make a purchase. In case of any issues our customer care would be happy to help you </p>\n" +
    "                                <div class=\"mart5\"><b>Payment Security:</b></div>\n" +
    "                                <p>You transparently pay through our Payment Gateway and all the data is transferred through high level encryption technology. We guarantee you, your payments are 100% secured with us and your payment details are never shared with anyone during the payment process </p>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- modal ends -->\n" +
    "    <div id=\"login\" style=\"display: none;\">\n" +
    "        <div class=\"col-xs-11 col-sm-11 item-chunk-xtra-padding\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <ul class=\"nav nav-pills\" role=\"tablist\">\n" +
    "                    <li role=\"presentation\" class=\"active\"><a id=\"login-hover\" href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"true\">Login</a></li>\n" +
    "                    <li role=\"presentation\" class=\"\"><a id=\"register-hover\" href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">Register</a></li>\n" +
    "                </ul>\n" +
    "                <div class=\"tab-content spacer nopadding\">\n" +
    "                    <div role=\"tabpanel\" class=\"fade tab-pane active in\" id=\"home\">\n" +
    "                        <form id=\"login-top\" method=\"post\" action=\"/customer/account/loginPost/\" class=\"signin-register-form\" role=\"form\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"email\" name=\"login[username]\" id=\"email\" placeholder=\"Email id\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"email\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"password\" name=\"login[password]\" id=\"pass\" placeholder=\"Password\" required=\"\" class=\"col-xs-12 form-control\" data-validation=\"required\" data-validation-error-msg=\"You did not enter a password\">\n" +
    "                            </div>\n" +
    "                            <input type=\"hidden\" name=\"login[currenturl]\" id=\"url\" value=\"http://www.craftsvilla.com/catalog/product/view/id/3142433/s/mimosa-kanchipuram-tassar-wedding-silk-saree-white-3051-97-hlfwhitemarun/\" />\n" +
    "                            <p class=\"small pull-right\">\n" +
    "                                <a id=\"fpass-hover\" href=\"/customer/account/forgotpassword/\">Forgot Password?</a>\n" +
    "                            </p>\n" +
    "                            <button id=\"signin-hover\" type=\"submit\" class=\"col-xs-12\">Sign In</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div role=\"tabpanel\" class=\"fade tab-pane\" id=\"profile\">\n" +
    "                        <form action=\"/customer/account/createpost/\" class=\"signin-register-form\" method=\"post\" id=\"form-validate\" role=\"form\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" name=\"firstname\" id=\"firstname\" placeholder=\"First Name\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"required alphanumeric\" data-validation-error-msg=\"You did not enter a first name\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" name=\"lastname\" id=\"lastname\" placeholder=\"Last Name\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"required alphanumeric\" data-validation-error-msg=\"You did not enter a last name\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" id=\"telephone\" name=\"telephone\" placeholder=\"Mobile No\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"number length\" maxlength=\"10\" data-validation-length=\"10-10\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"email\" name=\"email\" id=\"email_address\" placeholder=\"Email id\" required=\"\" class=\"col-xs-12 form-control\" autocomplete=\"off\" data-validation=\"email\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required=\"\" class=\"col-xs-12 form-control\" data-validation=\"required length\" data-validation-length=\"min6\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"password\" id=\"confirmation\" name=\"confirmation\" placeholder=\"Re-Enter Password\" required=\"\" class=\"col-xs-12 form-control\" data-validation=\"confirmation\" data-validation-confirm=\"password\" data-validation-error-msg=\"Please enter the same password\"/>\n" +
    "                            </div>\n" +
    "                            <button id=\"register-header\" type=\"submit\" class=\"col-xs-12\" onclick=\"sendSignUpData();\">Register</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "<script>\n" +
    "    function sendSignUpData() {\n" +
    "        dataLayer.push({\n" +
    "            'event':'UserSignedUpEvent',\n" +
    "            'eventName':'UserSignedUp',\n" +
    "            'type':'email',\n" +
    "            'cartValue':'6'\n" +
    "        });\n" +
    "        clevertap.profile.push({\n" +
    "            \"Site\": {\n" +
    "                \"Name\": $('#firstname').val() + \" \" + $('#lastname').val(),// User's name\n" +
    "                \"Email\": $('#email_address').val(), // User's email\n" +
    "                \"Phone\": \"+91\" + $('#telephone').val() // User's phone with country code\n" +
    "            }\n" +
    "        });\n" +
    "    }\n" +
    "    dataLayer = [{\n" +
    "        'pageLink':'http://www.craftsvilla.com/catalog/product/view/id/3142433/s/mimosa-kanchipuram-tassar-wedding-silk-saree-white-3051-97-hlfwhitemarun/',\n" +
    "        'title':'Mimosa Kanchipuram Tassar Wedding Silk Saree White(3051-97-hlfwhitemarun)-Sarees-Kataria Silk House Pvt Ltd',\n" +
    "        'userEmailAddress':'kurheasha@gmaii.com',\n" +
    "        'type':'email',\n" +
    "        'city':'amravati',\n" +
    "        'loggedIn':'yes',\n" +
    "        'cartValue':'6',\n" +
    "        'cartItemsCount':'6'\n" +
    "    }];\n" +
    "</script>\n" +
    "\n" +
    "<div class=\"dropdown visible-xs\" id=\"custom-header-dropdown\">\n" +
    "  <ul class=\"dropdown-menu dropdown-category\" aria-labelledby=\"dropdownMenu1\">\n" +
    "      <li class=\"dropdown-header\"><b>FASHION</b></li>\n" +
    "          <li><a href=\"/sarees-sari.html\">Sarees</a></li>\n" +
    "          <li><a href=\"/clothing/lehnga.html\">Bridal Lehenga</a></li>\n" +
    "          <li><a href=\"/clothing/salwar-suit.html\">Salwar Suits</a></li>\n" +
    "          <li><a href=\"/clothing.html\">Other Clothing</a></li>\n" +
    "          <li><a href=\"/jewellery-jewelry.html\">Jewellery</a></li>\n" +
    "          <li><a href=\"/bags.html\">Bags</a></li>\n" +
    "          <li><a href=\"/accessories.html\">Accessories</a></li>\n" +
    "          <li><a href=\"/footwear-1.html\">Footwear</a></li>\n" +
    "      <li class=\"dropdown-header\"><b>HOME</b></li>\n" +
    "          <li><a href=\"/home-decor-products.html\">Home Decor</a></li>\n" +
    "          <li><a href=\"/home-furnishing.html\">Home Furnishings</a></li>\n" +
    "      <li class=\"dropdown-header\"><b>LIFESTYLE</b></li>\n" +
    "          <li><a href=\"/food-health.html\">Food &amp; Health</a></li>\n" +
    "          <li><a href=\"/bath-beauty.html\">Bath &amp; Beauty</a></li>\n" +
    "      <li class=\"dropdown-header\"><b>OTHER</b></li>\n" +
    "          <li><a href=\"/gifts-birthday-anniversary-wedding.html\">Gifts</a></li>\n" +
    "          <li><a href=\"/kids-baby-names-toy.html\">Kids</a></li>\n" +
    "          <li><a href=\"/books-india.html\">Books</a></li>\n" +
    "          <li><a href=\"/spiritual-books-pooja.html\">Spiritual</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\">\n" +
    "\t<div class=\"container product_container  cart-pad-lr5-xs\"><!-- Product page breadcrumbs starts here -->\n" +
    "\n" +
    "\t<!-- new checkout design starts here -->\n" +
    "\n" +
    "    <div class=\"col-xs-12  col-md-12 buyer-section hidden-sm hidden-xs\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "        <img class=\"buyer-icon\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\">\n" +
    "        <span class=\"buyer-text\"><b>100%</b> <span class=\"buyer-regular-text regular-text\">Buyer Protection</span> |\n" +
    "        <span class=\"secure-text regular-text\">Secure Payments &amp; Easy Returns | <span class=\"learn-text regular-text\">Learn More</span></span></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div empt-cart=\"\">\n" +
    "        <div class=\"empty-head\">YOUR CART IS EMPTY</div>\n" +
    "        <div class=\"empty-txt\">Start shopping with options below.</div>\n" +
    "        <div class=\"empty-lst\">\n" +
    "            <ul>\n" +
    "                <li><a href=\"#\">Sarees</a></li>\n" +
    "                <li><a href=\"#\">Salwar Suits</a></li>\n" +
    "                <li><a href=\"#\">Lehengas</a></li>\n" +
    "                <li><a href=\"#\">Jewellery</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"contn-shpng\">CONTINUE SHOPPING</div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\t<!-- new checkout design ends here -->\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"fancybox\" id=\"successmessage\" style=\"display:none\">\n" +
    "            <p class=\"colorgreen mt20\">Your message has been sent</p>\n" +
    "        </div>\n" +
    "        <div class=\"fancybox\" id=\"notsuccessmessage\" style=\"display:none\">\n" +
    "            <p class=\"colorred mt20\">Image size should be less than 2MB</p>\n" +
    "        </div>\n" +
    "        <div class=\"fancybox\" id=\"filetypeext\" style=\"display:none\">\n" +
    "            <p class=\"colorred mt20\">It is not valid file type</p>\n" +
    "        </div>\n" +
    "        <!--Seller Contact pop up Info-->\n" +
    "        <script>\n" +
    "            /* $('.modal-toggle').click(function (e) {\n" +
    "            var tab = e.target.hash;\n" +
    "            $('li > a[href=\"' + tab + '\"]').tab(\"show\");\n" +
    "            });*/\n" +
    "        </script>\n" +
    "        <script>\n" +
    "            dataLayer = [{\n" +
    "                'productId':'3142433',\n" +
    "                'skuId':'MKATA60862076570',\n" +
    "                'prodName':'Mimosa Kanchipuram Tassar Wedding Silk Saree White305197hlfwhitemarun',\n" +
    "                'prodURL':'/catalog/product/view/id/3142433/s/mimosa-kanchipuram-tassar-wedding-silk-saree-white-3051-97-hlfwhitemarun',\n" +
    "                'imageURL':'/C/V/CV-MKATA60862076570--KATARIA_SILK_HOUSE_PVT_LTD-Craftsvilla_1.jpg',\n" +
    "                'localShippingCost':'150',\n" +
    "                'shippingCostInternational':'1,000',\n" +
    "                'productCategory':'Sarees',\n" +
    "                'productSubCategory':'Kanchivaram Sarees',\n" +
    "                'productPrice':'1,849',\n" +
    "                'sellerName':'Kataria Silk House Pvt Ltd',\n" +
    "                'productAvailability':'1',\n" +
    "                'currency':'INR',\n" +
    "                'source':'productDetailsPage',\n" +
    "                'buttonText':'BuyNow'\n" +
    "            }];\n" +
    "        </script>\n" +
    "</div></div><!-- footer begins here -->\n" +
    "<div class=\"container-fluid nopadding footer_container\">\n" +
    "    <div class=\"footer\">\n" +
    "        <footer>\n" +
    "            <div class=\"container nopadding\">\n" +
    "                <section class=\"col-xs-12 hidden-xs hidden-lg\">\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>OUR COMPANY</h1></li>\n" +
    "                        <li><a href=\"/about-us-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'About us'});\">About us</a></li>\n" +
    "                        <li><a href=\"/craftsvilla-in-media\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Craftsvilla in Media'});\">Craftsvilla in Media</a></li>\n" +
    "                        <li><a href=\"/how-to-buy-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'How to Buy'});\">How to buy</a></li>\n" +
    "                        <li><a href=\"http://blog.craftsvilla.com\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Blog'});\">Blog</a></li>\n" +
    "                        <li><a href=\"/secure-shopping-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Secure Payment Options'});\">Secure Payment Options</a></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>USEFUL INFO</h1></li>\n" +
    "                        <li><a href=\"/faq-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'FAQ'});\">FAQ's</a></li>\n" +
    "                        <li><a href=\"/catalog/seo_sitemap/category\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Sitemap'});\">Sitemap</a></li>\n" +
    "                        <li><a href=\"/contact-us-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Contact Us'});\">Contact us</a></li>\n" +
    "\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>POLICIES & INFO</h1></li>\n" +
    "                        <li><a href=\"/terms-and-conditions-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Terms  Conditions'});\">Terms &amp; Conditions</a></li>\n" +
    "                        <li><a href=\"/policy-for-sellers\" onclick=\"dataLayer.push({'event':'PoliciesViewedEvent','eventName':'PoliciesViewed','link':'Policy for Sellers','type':'PolicyForSellers','place':'policiesPage'});\">Policy for Sellers</a></li>\n" +
    "                        <li><a href=\"/policy-for-buyers\" onclick=\"dataLayer.push({'event':'PoliciesViewedEvent','eventName':'PoliciesViewed','link':'Policy for Buyers','type':'PolicyForBuyers','place':'policiesPage'});\">Policy for Buyers</a></li>\n" +
    "                        <li><a href=\"/shipping-artisans-designers\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Shipping Refund Policies'});\">Shipping &amp; Refund Policies</a></li>\n" +
    "                        <li><a href=\"/wholesale-policy\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Wholesale Policy'});\">Wholesale Policy</a></li>\n" +
    "                        <li><a href=\"/privacy-policy-craftsvilla\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Privacy Policy'});\">Privacy Policy</a></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>POLICIES & INFO</h1></li>\n" +
    "                        <li><a href=\"/marketplace/vendor\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller Login'});\">Seller Login</a></li>\n" +
    "                        <li><a href=\"/umicrosite/vendor/register\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller Sign Up'});\">Seller Sign up</a></li>\n" +
    "                        <li><a href=\"/seller-handbook\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller Handbook'});\">Seller Handbook</a></li>\n" +
    "                        <li><a href=\"/craftsvilla-seller-faq\" onclick=\"dataLayer.push({'event':'FooterLinkAccessedEvent','eventName':'footerLinkAccessed','link':'Seller FAQs'});\">Seller FAQs</a></li>\n" +
    "                    </ul>\n" +
    "                </section>\n" +
    "                <section class=\"col-xs-12 hidden-xs\">\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>SUPPORT</h1></li>\n" +
    "                        <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "                            <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1> PAYMENT OPTIONS</h1></li>\n" +
    "                        <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>STAY CONNECTED</h1></li>\n" +
    "                        <li>\n" +
    "                            <a href=\"http://www.facebook.com/craftsvilla\" target=\"_blank\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "                            <a href=\"https://twitter.com/craftsvilla\" target=\"_blank\"><img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\"></a>\n" +
    "                            <a href=\"https://plus.google.com/117677147285924975963\" target=\"_blank\"><img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"></a>\n" +
    "                            <a href=\"https://www.pinterest.com/craftsvilla/\" target=\"_blank\">\n" +
    "                            <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\">\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"footer-col col-xs-3\">\n" +
    "                        <li><h1>DOWNLOAD OUR APP</h1></li>\n" +
    "                        <li><a href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&hl=en\" target=\"_blank\">\n" +
    "                                <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </section>\n" +
    "            </div>\n" +
    "            <section class=\"m-t-10 beige-bg nopadding hidden-xs center-block subscribe-block\">\n" +
    "                <div class=\"subscribe-cont\">\n" +
    "                    <span>STAY CONNECTED</span>\n" +
    "                    <span class=\"p-l-5\"> <input type=\"text\"\n" +
    "                        title=\"subscribe\"><input type=\"submit\" title=\"subscribe-sub\" value=\"Subscribe\"></span>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "\n" +
    "            <section class=\"hidden-md hidden-lg write-us-cont\">\n" +
    "                <p class=\"write-us\" >If you can't find What you're looking for, write to us on <a href=\"\" class=\"rouge\">customercare@craftsvilla.com</a></p>\n" +
    "                    <div style=\"text-align:center; padding:10px 0; \">\n" +
    "                        <a href=\"http://www.facebook.com/craftsvilla\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\">\n" +
    "                        </a>\n" +
    "                        <a href=\"https://www.pinterest.com/craftsvilla/\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\">\n" +
    "                        </a>\n" +
    "                        <a href=\"https://twitter.com/craftsvilla\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\">\n" +
    "                        </a>\n" +
    "                        <a href=\"https://plus.google.com/117677147285924975963\" target=\"_blank\">\n" +
    "                            <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\">\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "            </section>\n" +
    "        </footer>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('partials/login.html',
    "\n" +
    "<div data-overlay ng-show=\"forgotPasswd || sendPasswd\" >&nbsp;</div>\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t<!--// login Flow Start -->\n" +
    "\t\t<div class=\"loginProcessContainer container-fluid\">\n" +
    "\t\t\t<div role=\"loginFlow\" class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t<div class=\"circleBox LoginIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/Login-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Login</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Firstliner white-nine\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox ShippingIcon white-nine\">\n" +
    "\t\t\t\t\t<span><img src=\"images/Shipping-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"warm-greyColor\">Shipping</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Secoundliner white-nine\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox PaymentIcon white-nine\">\n" +
    "\t\t\t\t\t<span><img src=\"images/payment-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"warm-greyColor\">Payment</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Flow End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div class=\"container-fluid nopadding visible-xs\">\n" +
    "\t<div class=\"col-xs-12 col-sm-6 socialMediaContainer\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-xs-6 nopadding socialMedia\">\n" +
    "\t\t\t\t<a class=\"signup-fb\"  href=\"javascript:void(0)\" ng-click=\"signupFB()\"><small><img src=\"images/facebook_alt.png\" width=\"8\" height=\"17\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Facebook</span></a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-6 nopadding socialMedia\">\n" +
    "\t\t\t\t<a class=\"signup-g\" href=\"javascript:void(0)\" ng-click=\"signupGgle()\"><small><img src=\"images/googlw_Plus.png\" width=\"26\" height=\"16\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Google</span></a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 guest\" ng-hide=\"guestUser\">\n" +
    "\t\t\t\t<h4>CONTINUE AS A GUEST</h4>\n" +
    "\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\"><input class=\"btn guestBtn\" type=\"submit\" ng-click=\"changeGuest()\" value=\"GUEST CHECKOUT\"></div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "<div class=\"container m-padding\">\n" +
    "\t<!--// login Container Start -->\n" +
    "\t\t<div class=\"col-xs-12 loginContainer\">\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 \" ng-class=\"{ 'signinForm' : !guestUser }\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-10\">\n" +
    "\t\t\t\t\t<div class=\"mobile-seperator visible-xs\">\n" +
    "\t\t\t\t\t\t<span class=\"Mseperator\">OR</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<h4>HAVE AN ACCOUNT? SIGN IN</h4>\n" +
    "\t\t\t\t\t<div class=\"existingUser\" ng-hide=\"guestUser\">\n" +
    "\t\t\t\t\t\t<form name=\"userLoginForm\" ng-submit =\" loginCred()\" novalidate>\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : (userLoginForm.email.$invalid && !userLoginForm.email.$pristine) || (userLoginForm.$submitted && userLoginForm.email.$error.required)}\" >\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<label>Email</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email address\"  ng-model=\"userLogin.email\" required>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<span ng-message=\"userLoginForm.email.$invalid && !userLoginForm.email.$pristine \" ng-show=\"userLoginForm.email.$invalid && userLoginForm.email.$touched\" class=\"error\" > Please enter valid email address.</span>\n" +
    "\t\t\t\t\t\t\t\t  <div ng-show=\"userLoginForm.$submitted\" >\n" +
    "\t\t\t\t\t\t\t\t\t<span ng-show=\"userLoginForm.email.$error.required\" class=\"error\">Tell us your email.</span>\n" +
    "\t\t\t\t\t\t\t\t</div >\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group \" ng-class=\"{'error': (userLoginForm.password.$invalid && !userLoginForm.password.$pristine) || (userLoginForm.$submitted && userLoginForm.password.$error.required)}\">\n" +
    "\t\t\t\t\t\t\t\t<label>Password</label>\n" +
    "\t\t\t\t\t\t\t\t<input type=\"password\" name =\"password\" class=\"form-control\" placeholder=\"password\"   ng-minlength=\"6\" ng-model=\"userLogin.password\" required>\n" +
    "\t\t\t\t\t\t\t\t<span ng-message=\"userLoginForm.password.$error.minlength &&  !userLoginForm.password.$pristine\" ng-show=\"userLoginForm.email.$invalid &&  userLoginForm.password.$touched\" class=\"error\">Password needs to be minimum 6 characters.</span>\n" +
    "\t\t\t\t\t\t\t\t <div ng-show=\"userLoginForm.$submitted\" >\n" +
    "\t\t\t\t\t\t\t\t<span ng-show=\"userLoginForm.password.$error.required\" class=\"error\">Please enter password.</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"alert alert-warning rougeColor\" ng-show=\"invalidCred\">Invalid email ID or Password!</div>\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t<a role=\"ForgotPassword\"  href=\"javascript:void(0)\" ng-click=\"forgotPwd()\">Forgot password?</a>\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\n" +
    "\t\t\t\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<button class=\"btn newBtn\" type=\"submit\"> LOGIN</button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t<div class=\"container-fluid ForgotPasswordContainer\"  ng-show=\"forgotPasswd\">\n" +
    "\t\t\t\t\t\t\t<div class=\"FPcontainer\">\n" +
    "\t\t\t\t\t\t\t\t<span role=\"close\" ng-show=\"forgotPasswd\" ng-click=\"forgtPwdClose()\"><a href=\"#\"><img src=\"images/delete-icon.png\" alt=\"\" title=\"\"></a></span>\n" +
    "\t\t\t\t\t\t\t\t<h3>FORGOT PASSWORD?</h3>\n" +
    "\t\t\t\t\t\t\t\t<p>Enter your email below and we’ll send you a new password by email.</p>\n" +
    "\t\t\t\t\t\t\t\t<form  name=\"sendPasswordForm\" ng-submit=\"sendPassword()\" novalidate>\n" +
    "\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : (sendPasswordForm.forgotEmail.$invalid && !sendPasswordForm.forgotEmail.$pristine)  || (sendPasswordForm.$submitted && sendPasswordForm.forgotEmail.$error.required)  }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"forgotEmail\" class=\"form-control\" placeholder=\"Enter email address\" ng-model=\"userForgot.forgotEmail\" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t<span ng-message=\"sendPasswordForm.forgotEmail.$invalid && !sendPasswordForm.forgotEmail.$pristine\" ng-show=\"sendPasswordForm.forgotEmail.$invalid && sendPasswordForm.forgotEmail.$touched\"  class=\"error\" >Email is either wrong or not registered with us.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div ng-show=\"sendPasswordForm.$submitted\">\n" +
    "                \t\t\t\t\t\t<span ng-show=\"sendPasswordForm.forgotEmail.$error.required\" class=\"error\">Please enter your email.</span>\n" +
    "                \t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn sendBtn\">SEND PASSWORD </button>\n" +
    "\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"container-fluid ForgotPasswordContainer\"  ng-show=\"sendPasswd\">\n" +
    "\t\t\t\t\t\t\t<div class=\"SPcontainer\">\n" +
    "\t\t\t\t\t\t\t\t<span role=\"close\" ng-show=\"sendPasswd\" ng-click=\"sendPwdClose()\"><a href=\"#\"><img src=\"images/delete-icon.png\" alt=\"\" title=\"\"></a></span>\n" +
    "\t\t\t\t\t\t\t\t<h3>PASSWORD SENT</h3>\n" +
    "\t\t\t\t\t\t\t\t<p>Password has been sent to your email address.</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"guestUser col-xs-12 nopadding\" ng-show=\"guestUser\" >\n" +
    "\t\t\t\t\t\t<form  name=\"guestUserForm\" ng-submit=\"changeGuestCheckout()\"  novalidate>\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : (guestUserForm.guestEmail.$invalid && !guestUserForm.guestEmail.$pristine) || (guestUserForm.$submitted && guestUserForm.guestEmail.$error.required) }\">\n" +
    "\t\t\t\t\t\t\t\t<label>Email</label>\n" +
    "\t\t\t\t\t\t\t\t<input type=\"email\" name=\"guestEmail\" class=\"form-control\" placeholder=\"Enter email address\" ng-model=\"guest.guestUserEmail\" required>\n" +
    "\t\t\t\t\t\t\t\t<span ng-message=\"guestUserForm.guestEmail.$invalid && !guestUserForm.guestEmail.$pristine\" ng-show=\"guestUserForm.guestEmail.$invalid && guestUserForm.guestEmail.$touched\" class=\"error\" >Email is either wrong or not registered with us.</span>\n" +
    "\t\t\t\t\t\t\t\t<div ng-show=\"guestUserForm.$submitted\">\n" +
    "                <span ng-show=\"guestUserForm.guestEmail.$error.required\" class=\"error\">Tell us your email.</span>\n" +
    "              </div>\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn newBtn\" >GUEST CHECKOUT </button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<p>Have an account? <span><a role=\"ForgotPassword\" href=\"javascript:void(0)\" ng-click=\"loginHere()\">Login Here</a></span></p>\n" +
    "\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<span class=\"seperator hidden-xs\" ng-hide=\"guestUser\">OR</span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 socialMediaContainer hidden-xs\" ng-hide=\"guestUser\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-10 pull-right\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 nopadding socialMedia\">\n" +
    "\t\t\t\t\t\t<a class=\"signup-fb\" href=\"javascript:void(0)\" ng-click=\"signupFB()\"><small><img src=\"images/facebook_alt.png\" width=\"8\" height=\"17\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Facebook</span></a>\n" +
    "\t\t\t\t\t\t<a class=\"signup-g\" href=\"javascript:void(0)\" ng-click=\"signupGgle()\"><small><img src=\"images/googlw_Plus.png\" width=\"26\" height=\"16\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Google</span></a>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding guest\">\n" +
    "\t\t\t\t\t\t\t<h4>CHECKOUT AS A GUEST</h4>\n" +
    "\t\t\t\t\t\t\t<p>New to craftsvilla? Use our quick and secure method.</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\" ng-hide=\"guestUser\">\n" +
    "\t\t\t\t\t\t\t\t<button class=\"btn guestBtn\" ng-click=\"changeGuest()\">CONTINUE AS GUEST</button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Container End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid hidden-xs\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding\">\n" +
    "\t\t\t<ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t\t\t<li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t\t\t<li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t\t\t\t<a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t\t<ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t\t\t<li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t\t\t<li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t\t<ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t\t\t<li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t\t\t<li>\n" +
    "\t\t\t\t\t<a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t\t\t\t<a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t\t\t\t<a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t\t\t\t<a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t\t\t\t\t<img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t\t<ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t\t\t<li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t\t\t<li>\n" +
    "\t\t\t\t\t<a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t\t\t\t\t<img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('partials/payment-error.html',
    "\n" +
    "<div data-overlay class=\"hide\">&nbsp;</div>\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"payment-error\">\n" +
    "\t\t\t<div class=\"container-fluid nopadding\">\n" +
    "\t\t\t\t<div class=\"error-massege\">\n" +
    "\t\t\t\t\t<h2><span><img src=\"images/payment-faliure.png\" alt=\"Error\" title=\"Error\"></span> Payment Error</h2>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<p>We are sorry, payment could not be processed. Please try again. We reserved your items for your next few minutes and look forward to your recieving them soon.</p>\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding col-sm-5\">\n" +
    "\t\t\t\t\t<button class=\"btn retry-btn\">RETRY</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding spacer\">&nbsp;</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding hidden-xs\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Footer -->\n" +
    "<!--// Jquery -->\n" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>\n" +
    "<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"js/common.js\"></script>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "</html>\n"
  );


  $templateCache.put('partials/payment-success.html',
    "\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"h-space hidden-xs hidden-sm\"></div>\n" +
    "\t<div role-nav class=\"container nopadding\">\n" +
    "\t\t<div class=\"col-xs-12 col-sm-5 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\">\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-12 col-sm-7 nopadding buyerProtection hidden-xs\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li><a href=\"#\">\n" +
    "\t\t\t\t\t<span><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\"></span>\n" +
    "\t\t\t\t\t<strong>100%</strong> Buyer Protection</a></li>\n" +
    "\t\t\t\t<li>|</li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span>Learn More</span></a></li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "<!-- order success start -->\n" +
    "<div class=\"container nopadding\">\n" +
    "<div class=\" nopadding\" order-thank-cont=\"\">\n" +
    "\t<div class=\"col-xs-12  nopadding order-header\">\n" +
    "\t\t<div class=\"thnku\">\n" +
    "\t\t\t<div class=\"t-img\"><img src=\"images/tick.png\" width=\"100%\"></div>\n" +
    "\t\t\t<div class=\"t-txt\">Thank You</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"succ-txt\">Your order has been placed successfully.</div>\n" +
    "\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12  \" order-success-cont=\"\">\n" +
    "\t<div class=\"col-xs-12 nopadding detls-cont\">\n" +
    "\t\t<div class=\"dtl-txt\">Details</div>\n" +
    "\t\t<div class=\"ttl-no-ord\">Order number.1234567</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont\">\n" +
    "\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text\">Latest Designer Black And White Long Sleeve Straight Suit</div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> <strong>1800</strong></div>\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding detail-qty\">Quantity: 1</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont\">\n" +
    "\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text\">Latest Designer Black And White Long Sleeve Straight Suit</div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> <strong>1800</strong></div>\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding detail-qty\">Quantity: 1</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont\">\n" +
    "\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text\">Sub Total </div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> 1800</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding m-t-8px\">\n" +
    "\t\t\t<div class=\"detail-text \"> Coupon Applied (CRAFTSLOVE)</div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> 360</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding m-t-8px\">\n" +
    "\t\t\t<div class=\"detail-text\">Shipping</div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> 0</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-12  nopadding m-t-8px m-b-10px\">\n" +
    "\t\t\t<div class=\"detail-text color-black\"><strong>Total Payable</strong></div>\n" +
    "\t\t\t<div class=\"detail-amt color-black\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg><strong> 3240 </strong></div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont p-b-10px\">\n" +
    "\t\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  ln-hgt-2-6\">SHIPPING DETAILS</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  font16 font14-xs  ln-hgt-2-6 gryeish-brown\"><strong>Shruti Kartikey</strong></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  font16 font14-xs \">G-1502, Craftsvilla,  Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  font16 font14-xs  ln-hgt-2-6\">+91 7738233261</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"note\">Tracking details sent to you via email/SMS as they are shipped. Please allow 10 working days for domestic (India) & 21 days\n" +
    "for delivery of international orders\n" +
    "\t</div>\n" +
    "<!-- recommended  products start-->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "<div class=\"item-chunk-xtra-padding\">\n" +
    "<div class=\"col-xs-12 nopadding\" id=\"view_recommended_products\">\n" +
    "<div class=\"clearfix\"></div><h4 class=\"borderbottom product_name text-center\">Recommended Products</h4><div class=\"flex-center\"><div class=\"col-xs-6 col-md-3 product mob_padding\"><div class=\"product-image-container\"><a href=\"/catalog/product/view/id/2224370/s/clothsvilla-self-designed-attractive-choli-8\" title=\"Clothsvilla Self Designed Attractive Choli-8\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductDetailsViewedEvent&quot;,&quot;eventName&quot;:&quot;ProductDetailsViewed&quot;,&quot;eventAction&quot;:&quot;4999&quot;,&quot;eventLabel&quot;:&quot;2224370&quot;,&quot;discountPercentage&quot;:&quot;50&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;price&quot;:&quot;4999&quot;,&quot;productId&quot;:&quot;2224370&quot;,&quot;positionOnPage&quot;:&quot;1&quot;});\">\n" +
    "\t\t\t\t\t\t\t\t<img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MCLOT29669775060--Clothsvilla.com-Craftsvilla_1.jpg\" alt=\"Clothsvilla Self Designed Attractive Choli-8\" title=\"Clothsvilla Self Designed Attractive Choli-8\" class=\"product-image\"></a></div><div class=\"product-details-container col-xs-12\"><a href=\"/catalog/product/view/id/2224370/s/clothsvilla-self-designed-attractive-choli-8\"><div class=\"product-name truncate\">Clothsvilla Self Designed..</div></a><a href=\"/clothsvilla\" title=\"Clothsvilla.com\" target=\"_blank\"><div class=\"vendor-name\">Clothsvilla.com</div></a><div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">Rs 4,999</div><div class=\"col-xs-12 col-md-6 original-price price nopadding\">Rs <s> 9,999</s> </div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                            Save 50%\n" +
    "                          </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;2224370&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x\" id=\"wishicon-2224370\"></i></div>\n" +
    "\n" +
    "\t\t\t\t\t\t</div><div class=\"col-xs-6 col-md-3 product mob_padding\"><div class=\"product-image-container\"><a href=\"/catalog/product/view/id/3327197/s/mindblowing-blue-color-jacquard-net-fabric-designer-embroidered-lahenga\" title=\"Mindblowing Blue Color Jacquard &amp; Net Fabric Designer Embroidered Lahenga.\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductDetailsViewedEvent&quot;,&quot;eventName&quot;:&quot;ProductDetailsViewed&quot;,&quot;eventAction&quot;:&quot;6370&quot;,&quot;eventLabel&quot;:&quot;3327197&quot;,&quot;discountPercentage&quot;:&quot;63.7&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;price&quot;:&quot;6370&quot;,&quot;productId&quot;:&quot;3327197&quot;,&quot;positionOnPage&quot;:&quot;2&quot;});\">\n" +
    "\t\t\t\t\t\t\t\t<img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MSNH_98689417290--SNH_Export-Craftsvilla_1.jpg\" alt=\"Mindblowing Blue Color Jacquard &amp; Net Fabric Designer Embroidered Lahenga.\" title=\"Mindblowing Blue Color Jacquard &amp; Net Fabric Designer Embroidered Lahenga.\" class=\"product-image\"></a></div><div class=\"product-details-container col-xs-12\"><a href=\"/catalog/product/view/id/3327197/s/mindblowing-blue-color-jacquard-net-fabric-designer-embroidered-lahenga\"><div class=\"product-name truncate\">Mindblowing Blue Color Ja..</div></a><a href=\"/SNHExport\" title=\"Snh Export\" target=\"_blank\"><div class=\"vendor-name\">Snh Export</div></a><div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">Rs 6,370</div><div class=\"col-xs-12 col-md-6 original-price price nopadding\">Rs <s> 12,740</s> </div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                            Save 50%\n" +
    "                          </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;3327197&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x\" id=\"wishicon-3327197\"></i></div>\n" +
    "\n" +
    "\t\t\t\t\t\t</div><div class=\"col-xs-6 col-md-3 product mob_padding\"><div class=\"product-image-container\"><a href=\"/catalog/product/view/id/3450328/s/firstloot-green-designer-embroidery-lehenga\" title=\"Firstloot Green Designer Embroidery Lehenga\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductDetailsViewedEvent&quot;,&quot;eventName&quot;:&quot;ProductDetailsViewed&quot;,&quot;eventAction&quot;:&quot;2499&quot;,&quot;eventLabel&quot;:&quot;3450328&quot;,&quot;discountPercentage&quot;:&quot;10&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;price&quot;:&quot;2499&quot;,&quot;productId&quot;:&quot;3450328&quot;,&quot;positionOnPage&quot;:&quot;3&quot;});\">\n" +
    "\t\t\t\t\t\t\t\t<img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MFIRS56897129650--First_Loot-Craftsvilla_1.jpg\" alt=\"Firstloot Green Designer Embroidery Lehenga\" title=\"Firstloot Green Designer Embroidery Lehenga\" class=\"product-image\"></a></div><div class=\"product-details-container col-xs-12\"><a href=\"/catalog/product/view/id/3450328/s/firstloot-green-designer-embroidery-lehenga\"><div class=\"product-name truncate\">Firstloot Green Designer ..</div></a><a href=\"/firstloot\" title=\"First Loot\" target=\"_blank\"><div class=\"vendor-name\">First Loot</div></a><div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">Rs 2,499</div><div class=\"col-xs-12 col-md-6 original-price price nopadding\">Rs <s> 3,499</s> </div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                            Save 29%\n" +
    "                          </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;3450328&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x\" id=\"wishicon-3450328\"></i></div>\n" +
    "\n" +
    "\t\t\t\t\t\t</div><div class=\"col-xs-6 col-md-3 product mob_padding\"><div class=\"product-image-container\"><a href=\"/catalog/product/view/id/3723812/s/clothsvilla-self-designed-attractive-choli-2-lehengas-by-clothsvilla-com\" title=\"Clothsvilla Self Designed Attractive Choli-2 - Lehengas By Shoping4all\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductDetailsViewedEvent&quot;,&quot;eventName&quot;:&quot;ProductDetailsViewed&quot;,&quot;eventAction&quot;:&quot;5999&quot;,&quot;eventLabel&quot;:&quot;3723812&quot;,&quot;discountPercentage&quot;:&quot;10&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;price&quot;:&quot;5999&quot;,&quot;productId&quot;:&quot;3723812&quot;,&quot;positionOnPage&quot;:&quot;4&quot;});\">\n" +
    "\t\t\t\t\t\t\t\t<img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MSHOP67531894720--Shoping4all-Craftsvilla_1.jpg\" alt=\"Clothsvilla Self Designed Attractive Choli-2 - Lehengas By Shoping4all\" title=\"Clothsvilla Self Designed Attractive Choli-2 - Lehengas By Shoping4all\" class=\"product-image\"></a></div><div class=\"product-details-container col-xs-12\"><a href=\"/catalog/product/view/id/3723812/s/clothsvilla-self-designed-attractive-choli-2-lehengas-by-clothsvilla-com\"><div class=\"product-name truncate\">Clothsvilla Self Designed..</div></a><a href=\"/shopping4all\" title=\"Shoping4all\" target=\"_blank\"><div class=\"vendor-name\">Shoping4all</div></a><div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">Rs 5,999</div><div class=\"col-xs-12 col-md-6 original-price price nopadding\">Rs <s> 6,999</s> </div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                            Save 14%\n" +
    "                          </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;3723812&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x\" id=\"wishicon-3723812\"></i></div>\n" +
    "\n" +
    "\t\t\t\t\t\t</div></div></div>\n" +
    "</div></div>\n" +
    "<!-- recommended products ends -->\n" +
    "\n" +
    "<div class=\"col-xs-12  nopadding\">\n" +
    "\t<div class=\"shpng-contn\">CONTINUE SHOPPING</div>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "<!-- order success end-->\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid hidden-xs\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/payments.html',
    "\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Flow Start -->\n" +
    "\t\t<div class=\"loginProcessContainer container-fluid\">\n" +
    "\t\t\t<div role=\"loginFlow\" class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t<div class=\"circleBox LoginIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/check.png\" data-complete alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Login</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Firstliner rougeBack\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox ShippingIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/check.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Shipping</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Secoundliner rougeBack\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox PaymentIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/payment-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Payment</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Flow End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"row paymentContainer\">\n" +
    "\t\t\t<div class=\"col-xs-12 hidden-xs\">\n" +
    "\t\t\t\t<h4 role=\"headding\">CHOOSE PAYMENT METHOD</h4>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 pull-right item-details\">\n" +
    "\t\t\t\t<div class=\"row youpay visible-xs\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<div role=\"items\" class=\"col-xs-12 padding-left-0 padding-right-0\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>You Pay <span><a href=\"#\">Hide Details</a></span></h5>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\"><span class=\"total-amount\">&#8377; 3,240</span></div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding r-bg hidden-xs\">\n" +
    "\t\t\t\t\t<div role=\"items\" class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h5>2 ITEMS <span><a href=\"#\">View Details</a></span></h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\"><span class=\"total-amount\">&#8377; 3,240</span></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"media\">\n" +
    "\t\t\t\t\t\t\t<div class=\"media-left\">\n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
    "\t\t\t\t\t\t\t\t\t<img class=\"media-object\" src=\"http://dummyimage.com/100x100/dedede/0011ff\" alt=\"\" title=\"\">\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Latest Designer Black And White Long Sleeve Straight Suit</h4>\n" +
    "\t\t\t\t\t\t\t\t<p>Quantity: <span>1</span></p>\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"items-price\">&#8377; 1,800</h4>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"media\">\n" +
    "\t\t\t\t\t\t\t<div class=\"media-left\">\n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
    "\t\t\t\t\t\t\t\t\t<img class=\"media-object\" src=\"http://dummyimage.com/100x100/dedede/0011ff\" alt=\"\" title=\"\">\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Latest Designer Black And White Long Sleeve Straight Suit</h4>\n" +
    "\t\t\t\t\t\t\t\t<p>Quantity: <span>1</span></p>\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"items-price\">&#8377; 1,800</h4>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// Shipping Details -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding shipping-details\">\n" +
    "\t\t\t\t\t\t\t<h5>SHIPPING DETAILS</h5>\n" +
    "\t\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t\t<span>Shruti Kartikey</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"normal\">G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"normal\">+91 7738233261</span>\n" +
    "\t\t\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// Shipping End -->\n" +
    "\t\t\t\t\t<!--// Order Summary -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 order-summary\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding border-bottom\">\n" +
    "\t\t\t\t\t\t\t<h5>ORDER SUMMARY</h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding border-bottom order-summary-details\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Sub Total</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>&#8377; 3,600</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Coupon Applied (CRAFTSLOVE)</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>- &#8377; 360</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Shipping</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>&#8377; 0</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h5>Total Payable <span class=\"pull-right\">&#8377; 3,240</span></h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!--// Desktop -->\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-8 new-payment-method hidden-xs\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding box-border\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 col-sm-3 nopadding payment-list\"> <!-- required for floating -->\n" +
    "\t\t\t\t\t    <!-- Nav tabs -->\n" +
    "\t\t\t\t\t\t<ul class=\"nav nav-tabs tabs-left\">\n" +
    "\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t<a href=\"#cashondelivery\" data-toggle=\"tab\">Cash on Delivery</a>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery hide\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#CreditCard\" data-toggle=\"tab\">Credit Card</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#DebitCard\" data-toggle=\"tab\">Debit Card</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#NetBanking\" data-toggle=\"tab\">Net Banking</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#PayUmoney\" data-toggle=\"tab\">Pay U Money</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<!-- Tab panes -->\n" +
    "\t\t\t\t\t<div class=\"tab-content col-xs-9 col-sm-9\">\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"cashondelivery\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery\">\n" +
    "\t\t\t\t\t\t\t\t<h3>Pay Using Cash on Delivery</h3>\n" +
    "\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"PLACE ORDER\" class=\"btn btn-newStyle bg-green\">\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"CreditCard\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 creditcard\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label>Credit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Credit Card Number\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"MM\" maxlength=\"2\" class=\"form-control pull-left\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"YY\" maxlength=\"4\" class=\"form-control pull-right\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input maxlength=\"3\" type=\"text\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"btn btn-newStyle bg-green\" href=\"#\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"DebitCard\">Debit Card</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"NetBanking\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\">\n" +
    "\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"icici\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"icici\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"axis\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"axis\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"sbi\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"sbi\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"hdfc\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"hdfc\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"city\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"city\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"idbi\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"idbi\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"pull-left or\">OR</span>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Volvo</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Saab</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"mercedes\">Mercedes</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"audi\">Audi</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"btn btn-newStyle bg-green\" href=\"#\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"PayUmoney\">Pay U Money</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!--// Mobile -->\n" +
    "\t\t\t<div class=\"container-fluid nopadding visible-xs\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 new-payment-method m-padding\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<h4 role=\"headding\">CHOOSE PAYMENT METHOD</h4>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding payment-list\"> <!-- required for floating -->\n" +
    "\t\t\t\t\t\t    <!-- Nav tabs -->\n" +
    "\t\t\t\t\t\t\t<ul data-payment-mobile class=\"nav nav-tabs tabs-left\">\n" +
    "\t\t\t\t\t\t\t\t<li class=\"active\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"m-tab\" href=\"#\">Cash on Delivery</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#\">Credit Card</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 creditcard\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Credit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Credit Card Number\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"MM\" maxlength=\"2\" class=\"form-control pull-left\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"YY\" maxlength=\"4\" class=\"form-control pull-right\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input maxlength=\"3\" type=\"text\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#\">Debit Card</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"icici1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"icici1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"axis1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"axis1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sbi1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"sbi1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"hdfc1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"hdfc1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"city1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"city1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"idbi1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"idbi1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#\">Net Banking</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"icici2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"icici2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"axis2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"axis2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sbi2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"sbi2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"hdfc2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"hdfc2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"city2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"city2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"idbi2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"idbi2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-left or\">OR</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Volvo</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Saab</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mercedes\">Mercedes</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"audi\">Audi</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li><a href=\"#\">Pay U Money</a></li>\n" +
    "\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 nopadding visible-xs fixed-button\">\n" +
    "\t\t\t\t<input type=\"button\" value=\"PLACE ORDER\" class=\"btn btn-newStyle bg-green\">\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding spacer\">&nbsp;</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding payments-facilities text-center\">\n" +
    "\t\t\t<div class=\"row visible-xs\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 nopadding buyerProtection visible-xs\">\n" +
    "\t\t\t\t\t\t<a href=\"#\">\n" +
    "\t\t\t\t\t\t\t<span><img src=\"images/bitmap.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t\t\t<strong>100%</strong> Buyer Protection\n" +
    "\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li><img src=\"images/verified-by-visa.png\" alt=\"\" title=\"\"></li>\n" +
    "\t\t\t\t<li><img src=\"images/visa-mastercard.png\" alt=\"\" title=\"\"></li>\n" +
    "\t\t\t\t<li><img src=\"images/footer.png\" alt=\"\" title=\"\"></li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid hidden-xs\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding hidden-xs\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('partials/shipping.html',
    "\n" +
    "<div data-overlay class=\"hide\">&nbsp;</div>\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Flow Start -->\n" +
    "\t\t<div class=\"loginProcessContainer container-fluid\">\n" +
    "\t\t\t<div role=\"loginFlow\" class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t<div class=\"circleBox LoginIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/check.png\" data-complete alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Login</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Firstliner rougeBack\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox ShippingIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/Shipping-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Shipping</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Secoundliner white-nine\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox PaymentIcon white-nine\">\n" +
    "\t\t\t\t\t<span><img src=\"images/payment-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"warm-greyColor\">Payment</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Flow End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Container Start -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding shippingContainer\">\n" +
    "\t\t\t<h4 role=\"headding\">SELECT SHIPPING ADDRESS <small><a class=\"rougeColor\" href=\"#\">Change</a></small></h4>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard addressCardActive\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>Shruti Kartikey <span><a href=\"#\"><img src=\"images/edit-icon.png\"></a></span><span class=\"pull-right delete-shipping\"><a href=\"#\"><img src=\"images/remove.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">+91 7738233261</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Edit Shipping Address Start -->\n" +
    "\t\t\t\t<div class=\"col-xs-12 add-new-shipping\">\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h4 role=\"headding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a href=\"#new-address\">Edit Address </a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</h4>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"change-country\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"City\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Select City</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Saab</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mercedes\">Mercedes</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"audi\">Audi</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div id=\"State\" class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"City\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Saab</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mercedes\">Mercedes</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"audi\">Audi</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">SAVE</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">CANCEL</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Edit Shipping Address End -->\n" +
    "\t\t\t\t<!--// Desktop Edit Shipping Address Start -->\n" +
    "\t\t\t\t<div class=\"addressEditContainer hide\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 nopadding\">\n" +
    "\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t<h4 role=\"headding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#new-address\">Edit Address </a>\n" +
    "\t\t\t\t\t\t\t\t</h4>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select id=\"change-country\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select City</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">SAVE</a>\n" +
    "\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">CANCEL</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Desktop Edit Shipping Address End -->\n" +
    "\t\t\t\t<!--// Select Billing Address -->\n" +
    "\t\t\t\t<div class=\"col-xs-12\"><h4 role=\"headding\">SELECT BILLING ADDRESS</h4></div>\n" +
    "\t\t\t\t<!--// Billing Address Not select Error -->\n" +
    "\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 text-center form-error\">Please select billing address or add new billing Address</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// -->\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>Shruti Kartikey <span><a href=\"#\"><img src=\"images/edit-icon.png\"></a></span><span class=\"pull-right delete-shipping\"><a href=\"#\"><img src=\"images/remove.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">+91 7738233261</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>Shruti Kartikey <span><a href=\"#\"><img src=\"images/edit-icon.png\"></a></span><span class=\"pull-right delete-shipping\"><a href=\"#\"><img src=\"images/remove.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">+91 7738233261</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding add-new-shipping\">\n" +
    "\t\t\t<h4 class=\"M-add-new-address\" role=\"headding\">\n" +
    "\t\t\t\t<a href=\"#new-address\">ADD NEW ADDRESS <span><img src=\"images/Shape.png\" title=\"\" alt=\"\"></span></a>\n" +
    "\t\t\t</h4>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select City</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding margin0\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<hr class=\"line-divider\" />\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h4 role=\"headding\">ADD BILLING ADDRESS</h4>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select City</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding margin0\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle btn-newStyleActive Width60\" type=\"button\" value=\"SAVE & CONTINUE\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// Button Mobile Start -->\n" +
    "\t\t<div class=\"BtnContainer col-xs-12 nopadding visible-xs\">\n" +
    "\t\t\t<a class=\"btn newBtn\" href=\"#\">PROCEED TO PAYMENT <span><img src=\"images/Checkout-CTA-icon.png\" title=\"\" alt=\"\"></span></a>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// Button Mobile End -->\n" +
    "\t\t<!--// login Container End -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding spacer\">&nbsp;</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding hidden-xs\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n"
  );
}]); });