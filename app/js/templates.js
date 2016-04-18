define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/checkout-cart.html',
    "<div class=\"navbar navbar-default craftsvilla-navbar\" role=\"navigation\">\n" +
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
    "                    <a class=\"navbar-brand logo-container\" rel=\"home\" href=\"http://dev7.craftsvilla.com/\">\n" +
    "                        <!--<img class=\"brand\" src=\"/img/cv_logo.png\" />-->\n" +
    "                        <svg width=\"170px\" height=\"28px\" viewBox=\"0 0 203 33\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"cv-logo\">\n" +
    "                        <title>cv_logo</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs>\n" +
    "                            <path id=\"path-1\" d=\"M0,0.444230769 L202.429428,0.444230769 L202.429428,33 L0,33 L0,0.444230769 Z\"></path>\n" +
    "                        </defs>\n" +
    "                        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n" +
    "                            <g id=\"icons\" transform=\"translate(-434.000000, -60.000000)\">\n" +
    "                                <g id=\"cv_logo\" transform=\"translate(434.000000, 60.000000)\">\n" +
    "                                    <mask id=\"mask-2\" fill=\"white\">\n" +
    "                                        <use xlink:href=\"#path-1\"></use>\n" +
    "                                    </mask>\n" +
    "                                    <g id=\"Clip-2\"></g>\n" +
    "                                    <path d=\"M13.7259745,27.4887462 C8.56325844,25.6255154 6.62264527,21.1273615 6.20578519,18.2242077 C5.20248066,11.2239769 9.89320082,6.51851538 14.3391514,6.36028462 C20.2177975,6.15128462 21.6387975,9.95305385 21.6387975,12.3908231 C21.6387975,15.2372846 19.785065,16.9397462 17.7425342,16.9397462 C15.1060403,16.9397462 14.7560115,15.2372846 14.7560115,15.2372846 C16.6740691,15.4048231 18.030744,14.2549 18.0015053,12.4475154 C17.9722667,10.6528231 16.8829169,9.68228462 14.9289374,9.7779 C11.6717481,9.93697692 11.8463449,14.3090538 11.8463449,14.3090538 C11.8463449,16.7713615 13.2581556,20.0011308 18.1435218,20.0011308 C27.8290444,20.0011308 27.7722379,6.72751538 27.7722379,6.72751538 C24.5442872,6.72751538 23.3713984,6.20120769 20.8142667,4.99797692 C18.6163531,3.96313077 16.6214395,3.44951538 14.3391514,3.44951538 C4.8390856,3.44951538 -0.000334156379,10.8245923 -0.000334156379,17.3602846 C-0.000334156379,24.7615923 4.68370288,32.9997462 15.5746947,32.9997462 C20.6964765,32.9997462 23.8584313,31.0874385 25.7756535,29.0499 C25.7915259,29.0329769 25.8073984,29.0169 25.8232708,28.9982846 C25.8909374,28.9263615 25.9535918,28.8544385 26.0170815,28.7816692 C26.6085383,28.1047462 27.4096782,27.0259 27.8415753,25.7634385 C21.5995342,29.8317462 15.0834848,27.9786692 13.7259745,27.4887462 L13.7259745,27.4887462 Z M195.111069,24.7649769 C194.040098,24.5052077 192.714333,24.3317462 191.258246,24.3317462 C188.99016,24.3317462 187.620954,25.3725154 187.620954,27.1062846 C187.620954,28.6234385 188.733695,29.4467462 190.402806,29.4467462 C192.071917,29.4467462 193.697588,28.7969 195.111069,27.7561308 L195.111069,24.7649769 Z M202.429929,28.6234385 L202.429929,32.5250538 L195.196279,32.5250538 L195.196279,30.4443615 C193.697588,31.7449 191.429501,32.8719769 188.904114,32.8719769 C185.694542,32.8719769 182.826645,31.0950538 182.826645,27.5395154 C182.826645,23.9848231 185.908402,21.8169769 190.360201,21.8169769 C192.284942,21.8169769 194.083538,22.0775923 195.111069,22.3373615 L195.111069,20.8193615 C195.111069,19.6931308 194.853769,18.8258231 194.382608,18.2191308 C193.612378,17.2223615 192.371822,16.8322846 190.702711,16.8322846 C189.888205,16.8322846 189.290065,16.9617462 188.861509,17.1352077 C188.947555,17.3949769 189.032765,17.8282077 189.032765,18.0888231 C189.032765,19.5196692 187.920859,20.5595923 186.507378,20.5595923 C185.094732,20.5595923 184.024596,19.5628231 184.024596,18.0016692 C184.024596,15.6612077 186.378728,13.1895923 191.472942,13.1895923 C194.682514,13.1895923 196.86539,14.1009 198.192826,15.7475154 C199.176081,16.9617462 199.647242,18.6092077 199.647242,20.5164385 L199.647242,28.6234385 L202.429929,28.6234385 Z M177.579555,0.7909 L170.00423,0.7909 L170.00423,4.77966923 L172.913896,4.77966923 L172.913896,28.6234385 L170.00423,28.6234385 L170.00423,32.5250538 L180.361407,32.5250538 L180.361407,28.6234385 L177.579555,28.6234385 L177.579555,0.7909 Z M164.94009,0.7909 L157.364765,0.7909 L157.364765,4.77966923 L160.275267,4.77966923 L160.275267,28.6234385 L157.364765,28.6234385 L157.364765,32.5250538 L167.721942,32.5250538 L167.721942,28.6234385 L164.94009,28.6234385 L164.94009,0.7909 Z M149.37425,10.6325154 C151.042526,10.6325154 152.541217,9.24482308 152.541217,7.51105385 C152.541217,5.77728462 151.128571,4.38959231 149.45946,4.38959231 C147.790349,4.38959231 146.292493,5.77728462 146.292493,7.51105385 C146.292493,9.24482308 147.705139,10.6325154 149.37425,10.6325154 L149.37425,10.6325154 Z M152.198707,13.5365154 L144.665987,13.5365154 L144.665987,17.5252846 L147.533049,17.5252846 L147.533049,28.6234385 L144.665987,28.6234385 L144.665987,32.5250538 L154.980559,32.5250538 L154.980559,28.6234385 L152.198707,28.6234385 L152.198707,13.5365154 Z M133.126732,17.3086692 L135.952024,17.3086692 L131.457621,27.1925923 L126.964053,17.3086692 L129.659024,17.3086692 L129.659024,13.5365154 L120.072077,13.5365154 L120.072077,17.5252846 L122.255789,17.5252846 L129.7033,32.8719769 L133.040686,32.8719769 L140.488197,17.5252846 L142.671073,17.5252846 L142.671073,13.5365154 L133.126732,13.5365154 L133.126732,17.3086692 Z M111.09246,21.0368231 C108.224563,20.2566692 107.155263,19.6931308 107.155263,18.6092077 C107.155263,17.6115923 108.181958,16.6579769 110.279625,16.6579769 C111.22111,16.6579769 112.162596,16.8322846 112.933662,17.1352077 C112.847616,17.3949769 112.847616,17.6547462 112.847616,17.9585154 C112.847616,19.3893615 113.875147,20.2998231 115.373003,20.2998231 C116.742209,20.2998231 117.68453,19.2599 117.68453,17.7419 C117.68453,16.8322846 117.34202,16.0081308 116.656999,15.3142846 C115.373003,14.0137462 112.633756,13.1464385 110.36567,13.1464385 C105.101036,13.1464385 102.703464,16.2247462 102.703464,19.1727462 C102.703464,22.4245154 104.887176,23.6810538 110.065765,25.0687462 C112.933662,25.8489 113.746497,26.4124385 113.746497,27.3660538 C113.746497,28.7537462 112.206036,29.4035923 110.32223,29.4035923 C108.995629,29.4035923 107.797678,29.1429769 106.941402,28.7969 C106.984007,28.5371308 107.026612,28.2765154 107.026612,28.0167462 C107.026612,26.3684385 105.785221,25.5028231 104.501226,25.5028231 C103.045974,25.5028231 102.019279,26.6722077 102.019279,28.0599 C102.019279,29.0566692 102.319184,29.8368231 103.088579,30.6178231 C104.330806,31.8743615 107.412563,32.9151308 110.279625,32.9151308 C114.516728,32.9151308 118.19746,30.7912846 118.19746,26.8025154 C118.19746,23.3772846 115.586863,22.2510538 111.09246,21.0368231 L111.09246,21.0368231 Z M93.7589333,27.7561308 C93.5450733,27.3660538 93.459028,26.9759769 93.459028,26.3684385 L93.459028,17.5252846 L99.1522173,17.5252846 L99.1522173,13.5365154 L93.459028,13.5365154 L93.459028,7.51105385 L88.8368099,9.54859231 L88.8368099,13.5365154 L85.1986823,13.5365154 L85.1986823,17.5252846 L88.8368099,17.5252846 L88.8368099,27.2797462 C88.8368099,28.4931308 89.05067,29.4899 89.4783901,30.2709 C90.4207111,32.0918231 92.2610774,32.8719769 94.5291638,32.8719769 C96.2417152,32.8719769 97.7395712,32.3947462 99.0235671,31.7449 L99.4086823,27.6698231 C98.2959416,28.1902077 96.9259004,28.6665923 95.7279498,28.6665923 C94.7856288,28.6665923 94.1006082,28.3636692 93.7589333,27.7561308 L93.7589333,27.7561308 Z M79.4679004,5.34320769 C79.6817605,4.99628462 80.0668757,4.73651538 80.4519909,4.56305385 C80.9657564,5.55982308 81.6933819,6.33997692 83.1486329,6.33997692 C84.4760691,6.33997692 85.6731844,5.34320769 85.6731844,3.65259231 C85.6731844,1.74451538 83.9614683,0.444823077 81.5221267,0.444823077 C79.4252955,0.444823077 77.712744,1.13782308 76.3861432,2.43836154 C74.5883819,4.21613077 73.9894066,6.38397692 73.9894066,9.85151538 L73.9894066,13.5365154 L70.7798346,13.5365154 L70.7798346,17.5252846 L73.9894066,17.5252846 L73.9894066,28.6234385 L71.1641144,28.6234385 L71.1641144,32.5250538 L82.2497523,32.5250538 L82.2497523,28.6234385 L78.6116247,28.6234385 L78.6116247,17.5252846 L83.4911432,17.5252846 L83.4911432,13.5365154 L78.6116247,13.5365154 L78.6116247,9.15766923 C78.6116247,7.33759231 78.91153,6.16651538 79.4679004,5.34320769 L79.4679004,5.34320769 Z M61.4785918,24.7649769 C60.408456,24.5052077 59.0818551,24.3317462 57.6266041,24.3317462 C55.3576823,24.3317462 53.9884765,25.3725154 53.9884765,27.1062846 C53.9884765,28.6234385 55.1012173,29.4467462 56.7703284,29.4467462 C58.4394395,29.4467462 60.0659457,28.7969 61.4785918,27.7561308 L61.4785918,24.7649769 Z M66.0156,28.6234385 L68.7974519,28.6234385 L68.7974519,32.5250538 L61.5638016,32.5250538 L61.5638016,30.4443615 C60.0659457,31.7449 57.7978593,32.8719769 55.2724724,32.8719769 C52.062065,32.8719769 49.1950033,31.0950538 49.1950033,27.5395154 C49.1950033,23.9848231 52.2767605,21.8169769 56.7277235,21.8169769 C58.6532996,21.8169769 60.4518963,22.0775923 61.4785918,22.3373615 L61.4785918,20.8193615 C61.4785918,19.6931308 61.2212914,18.8258231 60.7509663,18.2191308 C59.9807358,17.2223615 58.7393449,16.8322846 57.0702337,16.8322846 C56.256563,16.8322846 55.6575877,16.9617462 55.2298675,17.1352077 C55.3150774,17.3949769 55.4011226,17.8282077 55.4011226,18.0888231 C55.4011226,19.5196692 54.2883819,20.5595923 52.8749004,20.5595923 C51.4630897,20.5595923 50.3929539,19.5628231 50.3929539,18.0016692 C50.3929539,15.6612077 52.7470856,13.1895923 57.8404642,13.1895923 C61.0500362,13.1895923 63.2337481,14.1009 64.560349,15.7475154 C65.5444395,16.9617462 66.0156,18.6092077 66.0156,20.5164385 L66.0156,28.6234385 Z M47.6186206,16.3110538 C47.6186206,17.9153615 46.378065,19.2599 44.8367687,19.2599 C43.424958,19.2599 42.482637,18.4357462 42.0975218,17.5684385 C40.770921,18.0448231 39.2296247,19.5196692 38.3741844,21.1662846 L38.3741844,28.6234385 L41.6271967,28.6234385 L41.6271967,32.5250538 L30.9266741,32.5250538 L30.9266741,28.6234385 L33.7085259,28.6234385 L33.7085259,17.5252846 L30.9266741,17.5252846 L30.9266741,13.5365154 L38.2029292,13.5365154 L38.2029292,17.8282077 C39.7859951,15.2702846 41.7550115,13.1895923 44.1525835,13.1895923 C46.4641103,13.1895923 47.6186206,14.6204385 47.6186206,16.3110538 L47.6186206,16.3110538 Z\" id=\"Fill-1\" fill=\"#981937\" mask=\"url(#mask-2)\"></path>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                    </svg>\n" +
    "                    </a>\n" +
    "                    <div class=\"mobile-top visible-sm visible-xs pull-right\">\n" +
    "                        <i class=\"icon-v2 icon-small icon-search-v2 header-mobile-icon\"></i>\n" +
    "                        <a href=\"/wishlist/\"><i class=\"icon-v2 icon-wish icon-small header-mobile-icon\"></i></a>\n" +
    "                        <a class=\"cart-icon-section\" rel=\"nofollow\" href=\"/checkout/cart/\" onclick=\"dataLayer.push({'event':'WentToCartEvent','eventName':'WentToCart','source':'TopNavigation','count':'3'});\">\n" +
    "                            <span class=\"icon-container\">\n" +
    "                                <i class=\"icon-v2 icon-cart icon-small header-mobile-icon\"></i>\n" +
    "                                <span class=\"cart-count-container\">\n" +
    "                                    <span class=\"mnotification\">3</span>\n" +
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
    "                    <form class=\"col-xs-9\" id=\"msearch_mini_form\" action=\"/searchresults\" method=\"get\">\n" +
    "                        <input type=\"hidden\" name=\"searchby\" id=\"searchby\" value=\"product\">\n" +
    "                        <span class=\"twitter-typeahead\" style=\"position: relative; display: inline-block; direction: ltr;\"><input class=\"typeahead sb-search-input tt-hint\" type=\"text\" value=\"\" readonly=\"\" autocomplete=\"off\" spellcheck=\"false\" tabindex=\"-1\" style=\"position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);\"><input class=\"typeahead sb-search-input tt-input\" placeholder=\"Search...\" type=\"text\" name=\"q\" value=\"\" id=\"msearchval\" autocomplete=\"off\" spellcheck=\"false\" dir=\"auto\" style=\"position: relative; vertical-align: top; background-color: transparent;\"><pre aria-hidden=\"true\" style=\"position: absolute; visibility: hidden; white-space: pre; font-family: Lato, sans-serif; font-size: 12px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0.2px; text-indent: 0px; text-rendering: auto; text-transform: none;\"></pre><span class=\"tt-dropdown-menu\" style=\"position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;\"><div class=\"tt-dataset-0\"></div></span></span>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default col-md-2 text-uppercase sb-search-submit\" onclick=\"dataLayer.push({'event':'SearchPerformedEvent','eventName':'SearchPerformed','source':'homeScreen','suggestionUsed':'no'});\"><i class=\"icon-v2 icon-small icon-search-v2\"></i></button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "            <div class=\"collapse navbar-collapse nopadding\">\n" +
    "                                <div class=\"col-md-6 autosuggest-section\">\n" +
    "                    <form id=\"search_mini_form\" role=\"search\" action=\"/searchresults\" method=\"get\" onsubmit=\"javascript:return fillvalues();\">\n" +
    "                        <input type=\"hidden\" name=\"searchby\" id=\"searchby\" value=\"product\">\n" +
    "                        <div class=\"form-group col-md-10 text-holder\">\n" +
    "                            <span class=\"twitter-typeahead\" style=\"position: relative; display: inline-block; direction: ltr;\"><input type=\"text\" class=\"typeahead form-control tt-hint\" readonly=\"\" autocomplete=\"off\" spellcheck=\"false\" tabindex=\"-1\" style=\"position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);\"><input type=\"text\" name=\"q\" class=\"typeahead form-control tt-input\" id=\"searchval\" placeholder=\"Eg: Salwar Suit, Lehnga, Kurtis\" autocomplete=\"off\" spellcheck=\"false\" dir=\"auto\" style=\"position: relative; vertical-align: top; background-color: transparent;\"><pre aria-hidden=\"true\" style=\"position: absolute; visibility: hidden; white-space: pre; font-family: Lato, sans-serif; font-size: 12px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0.2px; text-indent: 0px; text-rendering: auto; text-transform: none;\"></pre><span class=\"tt-dropdown-menu\" style=\"position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;\"><div class=\"tt-dataset-1\"></div></span></span>\n" +
    "                        </div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default col-md-2 text-uppercase search-button\" onclick=\"dataLayer.push({'event':'SearchPerformedEvent','eventName':'SearchPerformed','source':'homeScreen','suggestionUsed':'no'});\">Search</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "\n" +
    "                <ul class=\"nav navbar-nav col-md-3 right-section pull-right\">\n" +
    "                    <a class=\"col-md-2 wishlist\" href=\"/wishlist/\">\n" +
    "                        <i class=\"icon-small icon-wish\"></i>\n" +
    "                    </a>\n" +
    "                    <a class=\"cart-icon-container header-icon-container\" rel=\"nofollow\" href=\"/checkout/cart/\" onclick=\"dataLayer.push({'event':'WentToCartEvent','eventName':'WentToCart','source':'TopNavigation','count':'3'});\">\n" +
    "                        <li class=\"col-md-4 cart-container\">\n" +
    "                            <span class=\"cart-icon\">\n" +
    "                                <i class=\"icon-v2 icon-cart icon-small\"></i>\n" +
    "                            </span>\n" +
    "                            <span class=\"cart-text\">\n" +
    "                                Cart\n" +
    "                            </span>\n" +
    "                            <span class=\"notification\">3</span>\n" +
    "                        </li>\n" +
    "                    </a>\n" +
    "                    <li id=\"loginLogoutResponse\" class=\"col-md-4\"><a class=\"user-icon-container header-icon-container fancybox\" href=\"#login\"><li class=\"account-section\">                         <span class=\"user-icon\">                             <i class=\"icon-v2 icon-user\"></i>                         </span>                         <span class=\"user-text\">                             Sign In                         </span>                     </li></a></li>\n" +
    "                </ul>\n" +
    "\n" +
    "<!-- <div class=\"block block-currency\"> -->\n" +
    "    <div class=\"currencybox nopadding mt30 pull-right hidden-xs\">\n" +
    "        <span class=\"clrrouge font16\">Currency</span>\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <span>\n" +
    "                INR - ( ₹  )            </span>\n" +
    "            <b class=\"caret clrrouge\"></b>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/AUD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    AUD - ( AU$ )               </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/GBP/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    GBP - ( £ )             </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/CAD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    CAD - ( CA$ )               </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/EUR/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    EUR - ( € )             </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/INR/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    INR - ( ₹  )                </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/MYR/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    MYR - ( RM )                </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/SGD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    SGD - ( S$ )                </li>\n" +
    "                            <li id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/USD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                    USD - ( $ )             </li>\n" +
    "                    </ul>\n" +
    "   </div>\n" +
    "   <ul class=\"visible-xs\">\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/AUD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                AU$&nbsp;&nbsp;&nbsp;Australian Dollar                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/GBP/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                £&nbsp;&nbsp;&nbsp;British Pound Sterling                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/CAD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                CA$&nbsp;&nbsp;&nbsp;Canadian Dollar                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/EUR/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                €&nbsp;&nbsp;&nbsp;Euro                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/INR/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                ₹ &nbsp;&nbsp;&nbsp;Indian Rupee                <span class=\"pull-right  checkmark \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/MYR/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                RM&nbsp;&nbsp;&nbsp;Malaysian Ringgit                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/SGD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                S$&nbsp;&nbsp;&nbsp;Singapore Dollar                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "                    <li class=\"currency-check\" id=\"http://dev7.craftsvilla.com/directory/currency/switch/currency/USD/searchresult/http://dev7.craftsvilla.com/checkout/cart//uenc/aHR0cDovL2RldjcuY3JhZnRzdmlsbGEuY29tL2NoZWNrb3V0L2NhcnQv/\" onclick=\"window.location.href=(this.id);\">\n" +
    "                $&nbsp;&nbsp;&nbsp;US Dollar                <span class=\"pull-right \"></span>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            </ul>\n" +
    "<!-- </div> -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "\n" +
    "        <div id=\"infinite_analytics_div_1\"></div><div id=\"infinite_analytics_div_2\"></div><div id=\"infinite_analytics_div_3\"></div></div><!-- /.container-fluid -->\n" +
    "    </div>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "    <div class=\"container product_container  cart-pad-lr5-xs\">\n" +
    "        <!-- Product page breadcrumbs starts here -->\n" +
    "        <!-- new checkout design starts here -->\n" +
    "        <div class=\"col-xs-12  col-md-12 buyer-section hidden-sm hidden-xs\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "            <img class=\"buyer-icon\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\">\n" +
    "            <span class=\"buyer-text\"><b>100%</b> <span class=\"buyer-regular-text regular-text\">Buyer Protection</span> |\n" +
    "            <span class=\"secure-text regular-text\">Secure Payments &amp; Easy Returns | <span class=\"learn-text regular-text\">Learn More</span></span></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-12 nopadding\" check-out=\"\">\n" +
    "            <div class=\"header\"> my cart |  {{ items }} item(s) </div>\n" +
    "            <!-- checkout header ends -->\n" +
    "\n" +
    "            <div class=\"col-xs-12 check-out-msg\" ng-if=\"outOfStockProducts.length\">\n" +
    "                <div class=\"check-out-msg-txt\">Some itmes in your cart are <strong>'out of stock'</strong></div>\n" +
    "                <a href=\"javascript:void(0)\" class=\"check-out-msg-btn\" ng-click=\"removeProductsFromCart()\">Remove</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 check-out-msg\" ng-if=\"inStockNotCod.length\">\n" +
    "                <div class=\"check-out-msg-txt\">If you proceed, <strong>Cash on Delivery</strong> will not be available as a payment option.</div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"col-xs-12 check-out-msg\" ng-if=\"itemRemoved == 1\">\n" +
    "                <div class=\"check-out-msg-txt\"> Item removed from your cart</div>\n" +
    "                <div class=\"check-out-msg-btn\" ng-click=\"addToCart()\">undo</div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 nopadding left-panel\">\n" +
    "                <div class=\"col-xs-6 nopadding red t-m-10\" ng-if=\"inStockNotCod.length\">Items without cash on delivery</div>\n" +
    "                <a href=\"javascript:void(0)\" ng-if=\"items.length\" class=\"nopadding clrrouge t-m-10 text-right\" ng-class=\"inStockNotCod.length? 'col-xs-6':'col-xs-12'\" ng-click=\"removeAllItems()\">Remove All</a>\n" +
    "                <div class=\"cart-items-card\" ng-repeat=\"product in outOfStockProducts\">\n" +
    "                    <a href=\"javascript:void(0)\" class=\"cart-details-close\" ng-click=\"removeProductFromCart(product.product_id)\"><img src=\"images/delete-icon.png\" width:'100%'></a>\n" +
    "                    <div class=\"cart-items-cont\">\n" +
    "                        <div class=\"cart-img-cont\">\n" +
    "                            <img src=\"http://img1.craftsvilla.com/thumb/216x216{{ product.product_image }}\" class=\"img-responsive\">\n" +
    "                        </div>\n" +
    "                        <div class=\"cart-details-cont\">\n" +
    "                            <div class=\"col-xs-12 nopadding  c-itm-name\">{{ product.product_name }}</div>\n" +
    "                            <div class=\"col-xs-12 nopadding  c-itm-price\">\n" +
    "                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                    <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                                </svg>\n" +
    "                                <div style=\"float:left;\">{{ product.product_price }}</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12 nopadding  c-itm-qty\">\n" +
    "                                <div class=\"text\">Qty:</div>\n" +
    "                                <div class=\"dropdown chck-drpdwn\">\n" +
    "                                    <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\" style=\"\"></span> </button>\n" +
    "                                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                        <li><a href=\"#\">1</a></li>\n" +
    "                                        <li><a href=\"#\">2</a></li>\n" +
    "                                        <li><a href=\"#\">3</a></li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"seller-note hidden-xs\"><a href=\"javascript:void(0)\" ng-click=\"addNoteToSeller($index, product.product_id)\">add a note seller</a></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cart-seller-cont hidden-lg\">\n" +
    "                        <form >\n" +
    "                            <div class=\"text out-o-stk\">out of stock</div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div class=\"overlay-out-stock\">  </div>\n" +
    "                </div>\n" +
    "                <!-- cart-items-card ends -->\n" +
    "\n" +
    "                     <!--ng repeat for cod products : 0 for cod as in api call-->\n" +
    "\n" +
    "                <div class=\"cart-items-card t-m-10\" ng-repeat=\"data in inStockCod\" ng-if=\"!data.cod_available\">\n" +
    "                    <a href=\"javascript:void(0)\" class=\"cart-details-close\" ng-click=\"removeProductFromCart(data.product_id)\"><img src=\"images/delete-icon.png\" width:'100%'></a>\n" +
    "                    <div class=\"cart-items-cont\">\n" +
    "                        <div class=\"cart-img-cont\">\n" +
    "                            <img src=\"http://img1.craftsvilla.com/thumb/216x216{{data.product_image}}\" class=\"img-responsive\">\n" +
    "                        </div>\n" +
    "                        <div class=\"cart-details-cont\">\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-name\">{{data.product_name}}</div>\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-price\">\n" +
    "                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                    <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                                </svg>\n" +
    "                                <div style=\"float:left;\">{{data.product_price}}</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-qty\">\n" +
    "                                <div class=\"text\">Qty:</div>\n" +
    "                                <!-- <div class=\"dropdown chck-drpdwn\">\n" +
    "                                    <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn sdsd\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> {{ data.product_qty }} <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                        <li><a href=\"#\">1</a></li>\n" +
    "                                        <li><a href=\"#\">2</a></li>\n" +
    "                                        <li><a href=\"#\">3</a></li>\n" +
    "                                    </ul>\n" +
    "                                </div> -->\n" +
    "                                <select class=\"form-control width-auto\">\n" +
    "                                  <option>1</option>\n" +
    "                                  <option>2</option>\n" +
    "                                  <option>3</option>\n" +
    "                                  <option>4</option>\n" +
    "                                  <option>5</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <!-- <div class=\"seller-note hidden-xs\" ng-click=\"showNoteToSeller()\" ng-hide=\"showNote\">add a note seller</div> -->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cart-seller-cont\">\n" +
    "                            <div class=\"text hidden-lg\" style=\"display:none;\" >add a seller note</div>\n" +
    "                            <div class=\"open-cont\" ng-if=\"data.seller_note==null\">\n" +
    "                                <form name=\"sellerForm{{$index}}\" ng-submit=\"addNoteToSeller($index, data.product_id, seller.sellernote )\" novalidate>\n" +
    "                                    <div ng-class=\"{ 'error' : (sellerForm{{$index}}.sellernote.$invalid && !sellerForm{{$index}}.sellernote.$pristine) || (sellerForm{{$index}}.$submitted && sellerForm{{$index}}.sellernote.$error.required) }\">\n" +
    "                                        <p> Add note to seller </p>\n" +
    "                                        <textarea class=\"seller-texta\" ng-model=\"seller.sellernote\" name=\"sellernote\" placeholder=\"Add a note here\" ng-minlength=\"5\" required></textarea>\n" +
    "                                        <div ng-show=\"sellerForm{{$index}}.$submitted || sellerForm{{$index}}.sellernote.$touched\">\n" +
    "                                            <span ng-show=\"sellerForm{{$index}}.sellernote.$error.required\" class=\"error\">Seller note required.</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <button type=\"submit\" class=\"buttons b-border t-m-10\">save</button>\n" +
    "                                </form>\n" +
    "                                <span class=\"buttons l-m-20 t-m-10 m-right-20\" ng-click=\"hideNoteToSeller()\">cancel</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"open-cont\" ng-if=\"data.seller_note\">\n" +
    "                                <p>{{data.seller_note}}</p>\n" +
    "                                <button class=\"buttons  b-border t-m-10\" ng-click=\"updateNoteToSeller()\">edit</button>\n" +
    "                                <a href=\"javascript:void(0)\" class=\"buttons l-m-20 t-m-10 m-left-20\" ng-click=\"removeNoteToSeller()\">remove</a>\n" +
    "                            </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <!--ng repeat for non cod products : 1 for non cod as in api call-->\n" +
    "\n" +
    "                <div class=\"cart-items-card t-m-10\" ng-repeat=\"data in inStockNotCod\" ng-if=\"data.cod_available\">\n" +
    "                    <a href=\"javascript:void(0)\" class=\"cart-details-close\" ng-click=\"removeProductFromCart(data.product_id)\"><img src=\"images/delete-icon.png\" width:'100%'></a>\n" +
    "                    <div class=\"cart-items-cont\">\n" +
    "                        <div class=\"cart-img-cont\">\n" +
    "                            <img src=\"http://img1.craftsvilla.com/thumb/216x216{{data.product_image}}\" class=\"img-responsive\">\n" +
    "                        </div>\n" +
    "                        <div class=\"cart-details-cont\">\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-name\">{{data.product_name}}</div>\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-price\">\n" +
    "                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                    <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                                </svg>\n" +
    "                                <div style=\"float:left;\">{{data.product_price}}</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-qty\">\n" +
    "                                <div class=\"text\">Qty:</div>\n" +
    "                                <!-- <div class=\"dropdown chck-drpdwn\">\n" +
    "                                    <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn sdsd\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> {{ data.product_qty }} <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                        <li><a href=\"#\">1</a></li>\n" +
    "                                        <li><a href=\"#\">2</a></li>\n" +
    "                                        <li><a href=\"#\">3</a></li>\n" +
    "                                    </ul>\n" +
    "                                </div> -->\n" +
    "                                <select class=\"form-control width-auto\">\n" +
    "                                  <option>1</option>\n" +
    "                                  <option>2</option>\n" +
    "                                  <option>3</option>\n" +
    "                                  <option>4</option>\n" +
    "                                  <option>5</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                            <!-- <div class=\"seller-note hidden-xs\" ng-click=\"showNoteToSeller()\" ng-hide=\"showNote\">add a note seller</div> -->\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cart-seller-cont\">\n" +
    "\n" +
    "                            <div class=\"text hidden-lg\" style=\"display:none;\" >add a seller note</div>\n" +
    "                            <div class=\"open-cont\" ng-if=\"data.seller_note==null\">\n" +
    "                                <form name=\"sellerForm{{$index}}\" ng-submit=\"addNoteToSeller($index, data.product_id, seller.sellernote)\" novalidate>\n" +
    "                                    <div ng-class=\"{ 'error' : (sellerForm{{$index}}.sellernote.$invalid && !sellerForm{{$index}}.sellernote.$pristine) || (sellerForm{{$index}}.$submitted && sellerForm{{$index}}{{$index}}.sellernote.$error.required) }\">\n" +
    "                                        <p> Add note to seller </p>\n" +
    "                                        <textarea class=\"seller-texta\" ng-model=\"seller.sellernote\" name=\"sellernote\" placeholder=\"Add a note here\"  required></textarea>\n" +
    "                                        <div ng-show=\"sellerForm{{$index}}.$submitted || sellerForm{{$index}}.sellernote.$touched\">\n" +
    "                                            <span ng-show=\"sellerForm{{$index}}.sellernote.$error.required\" class=\"error\">Seller note required.</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <button type=\"submit\" class=\"buttons b-border t-m-10\">save</button>\n" +
    "                                </form>\n" +
    "                                <span class=\"buttons l-m-20 t-m-10 m-right-20 close-note\" ng-click=\"hideNoteToSeller()\">cancel</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"open-cont\" ng-if=\"data.seller_note\">\n" +
    "                                <p>{{data.seller_note}}</p>\n" +
    "                                <button class=\"buttons  b-border t-m-10\" ng-click=\"updateNoteToSeller()\">edit</button>\n" +
    "                                <a href=\"javascript:void(0)\" class=\"buttons l-m-20 t-m-10 m-left-20\" ng-click=\"removeNoteToSeller()\">remove</a>\n" +
    "                            </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <!--ng repeat for cod products : 0 for cod as in api call ends here-->\n" +
    "\n" +
    "\n" +
    "                <!-- cart-items-card ends -->\n" +
    "                <!-- <div class=\"cart-items-card t-m-10\">\n" +
    "                    <div class=\"cart-details-close\"><img src=\"images/delete-icon.png\" width:'100%'></div>\n" +
    "                    <div class=\"cart-items-cont\">\n" +
    "                        <div class=\"cart-img-cont\">\n" +
    "                            <img src=\"http://img1.craftsvilla.com/thumb/166x166/C/V/CV-MRISE17939320530--Rise_N_Shine-Craftsvilla_1.jpg\">\n" +
    "                        </div>\n" +
    "                        <div class=\"cart-details-cont\">\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-name\">Latest Designer Black And White Long Sleeve Straight Suit test</div>\n" +
    "                            <div class=\"col-xs-12 nopadding c-itm-price\">\n" +
    "                                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                    <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                                </svg>\n" +
    "                                <div style=\"float:left;\">1800</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12 nopadding  c-itm-qty\">\n" +
    "                                <div class=\"text\">Qty:</div>\n" +
    "                                <div class=\"dropdown chck-drpdwn\">\n" +
    "                                    <button class=\"btn btn-default dropdown-toggle chck-drpdwn-btn\" style=\"border-radius:2px;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"> 1 <span class=\"caret chck-caret\"></span> </button>\n" +
    "                                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                                        <li><a href=\"#\">1</a></li>\n" +
    "                                        <li><a href=\"#\">2</a></li>\n" +
    "                                        <li><a href=\"#\">3</a></li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"seller-note hidden-xs\" style=\"display:none;\">add a note seller</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cart-seller-cont \" >\n" +
    "                        <form >\n" +
    "                            <div class=\"text hidden-lg\" style=\"display:none;\" >add a seller note</div>\n" +
    "                            <div class=\"open-cont\" style=\"display:none;\" >\n" +
    "                                <p> Add note to seller </p>\n" +
    "                                <textarea class=\"seller-texta\" placeholder=\"Add a note here\" ></textarea>\n" +
    "                                <span class=\"buttons r-m-20 t-m-10 m-left-59 m-right-20\">cancel</span>\n" +
    "                                <span class=\"buttons t-m-10\">save</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"open-cont\" >\n" +
    "                                <p> Whatever the user adds appears here. Whatever the user adds appear here. Whatever the user adds appears here. Whatever the user adds appear here.</p>\n" +
    "                                <button class=\"buttons  b-border t-m-10\" ng-click=\"updateNoteToSeller()\">edit</button>\n" +
    "                                <a href=\"javascript:void(0)\" class=\"buttons l-m-20 t-m-10 m-left-20\" ng-click=\"removeNoteToSeller()\">remove</a>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div> -->\n" +
    "                <!-- cart-items-card ends -->\n" +
    "                <div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "                    <div class=\"c-continue-shpng\"> <img class=\"c-arrw\" src=\"images/back-CTA-icon.png\"> Continue Shopping    </div>\n" +
    "                    <div class=\"order-total\">\n" +
    "                        <div class=\"pulll-left inln-blck\">Total Payable( {{ items }} Item(s))</div>\n" +
    "                        <div class=\"o-t-amt pull-right inln-blck\">\n" +
    "                            <div class=\"pull-right inln-blck\"> {{ grandTotal }}</div>\n" +
    "                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                            </svg>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- checkout left panel ends -->\n" +
    "\n" +
    "            <!--coupon code proceed to checkout starts here-->\n" +
    "            <div class=\"col-xs-12 nopadding  right-panel\">\n" +
    "                <div class=\"col-xs-12  coupon-cont\"  >\n" +
    "                    <div class=\"coupon-text\" ng-show=\"successCoupon\" >Coupon\n" +
    "                        <span class=\"colorblack\"><strong>\"{{couponCode}}\"</strong></span> applied\n" +
    "                        <!--<span class=\"clrrouge\">Remove</span>-->\n" +
    "                        <a href=\"javascript:void(0)\" ng-click=\"removeCoupon(couponCode)\"><span class=\"clrrouge\">Remove</span></a>\n" +
    "                    </div>\n" +
    "                    <div ng-hide=\"successCoupon\">\n" +
    "                        <div class=\"cc-header\" >Enter Coupon Code</div>\n" +
    "                        <div class=\"col-xs-12 nopadding\">\n" +
    "                            <form class=\"coupon-cont-form\" name=\"couponForm\" ng-submit=\"applyCoupon()\" novalidate>\n" +
    "                                <div ng-class=\"{ 'error' : (couponForm.couponcode.$invalid && !couponForm.couponcode.$pristine) || (couponForm.$submitted && couponForm.couponcode.$error.required) }\">\n" +
    "                                    <input type=\"text\" class=\"col-xs-8 coupon-input red-border\" name=\"couponcode\" ng-model=\"coupon.couponcode\" required>\n" +
    "\n" +
    "\n" +
    "                                </div>\n" +
    "                                <button type=\"submit\" class=\"col-xs-4 coupon-c-button\">APPLY</button>\n" +
    "                                <div ng-show=\"couponForm.$submitted || couponForm.couponcode.$touched\">\n" +
    "                                    <span ng-show=\"couponForm.couponcode.$error.required\" class=\"error\">Coupon code invalid</span>\n" +
    "                                </div>\n" +
    "                                <p>{{couponMessage}}</p>\n" +
    "                                <!--<div class=\"red\" >Coupon code invalid</div>-->\n" +
    "                            </form>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 order-cont\">\n" +
    "                    <div class=\"o-heading\">order summary</div>\n" +
    "                    <div class=\"o-left-cont\">\n" +
    "                        <p>Sub Total</p>\n" +
    "                        <p ng-show=\"successCoupon\">Coupon Applied ({{couponCode}})</p>\n" +
    "                        <p class=\"green\" ng-show=\"successCoupon\">You saved {{discount | number:0}}%</p>\n" +
    "                        <p>Shipping</p>\n" +
    "                        <p class=\"total pad-t-7\"><b>Total Payable</b></p>\n" +
    "                    </div>\n" +
    "                    <div class=\"o-right-cont\">\n" +
    "                        <div class=\"ord-amt\">\n" +
    "                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                            </svg>\n" +
    "                            <div class=\"pull-right\">{{ subTotal }}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"ord-amt\" ng-show=\"successCoupon\">\n" +
    "                            <span class=\"pull-left\"> &#45; </span>\n" +
    "                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                            </svg>\n" +
    "                            {{ totalDiscount }}\n" +
    "                        </div>\n" +
    "                        <div class=\"ord-amt icon width100\" ng-show=\"successCoupon\"> </div>\n" +
    "                        <div class=\"ord-amt\">\n" +
    "                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                            </svg>\n" +
    "                            {{ shippingAmount }}\n" +
    "                        </div>\n" +
    "                        <div class=\"ord-amt total\">\n" +
    "                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "                                <path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "                            </svg>\n" +
    "                            {{ grandTotal }}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <button class=\"btn col-xs-12 procd-to-checkout\" ng-click=\"proceedToCheckout()\">Proceed to checkout<img style=\"margin-left:5px;height:auto; width:5%;\" src=\"images/Checkout-CTA-icon.png\"></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- checkout right panel ends -->\n" +
    "        </div>\n" +
    "        <!-- new checkout design ends here -->\n" +
    "        <div class=\"clearfix\"></div>\n" +
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
    "    </div>\n" +
    "</div>\n" +
    "\n"
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
    "\t\t\t\t<a class=\"signup-fb\"  href=\"javascript:void(0)\" ng-click=\"authenticate('facebook')\"><small><img src=\"images/facebook_alt.png\" width=\"8\" height=\"17\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Facebook</span></a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-6 nopadding socialMedia\">\n" +
    "\t\t\t\t<a class=\"signup-g\" href=\"javascript:void(0)\" ng-click=\"authenticate('google')\"><small><img src=\"images/googlw_Plus.png\" width=\"26\" height=\"16\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Google</span></a>\n" +
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
    "\t\t\t\t\t\t\t\t\t\t<span ng-message=\"sendPasswordForm.forgotEmail.$invalid && !sendPasswordForm.forgotEmail.$pristine\" ng-show=\"sendPasswordForm.forgotEmail.$invalid && sendPasswordForm.forgotEmail.$touched\"  class=\"error\" >Please enter valid Email ID.</span>\n" +
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
    "\t\t\t\t\t\t\t\t<span ng-message=\"guestUserForm.guestEmail.$invalid && !guestUserForm.guestEmail.$pristine\" ng-show=\"guestUserForm.guestEmail.$invalid && guestUserForm.guestEmail.$touched\" class=\"error\" >Please enter valid Email ID.</span>\n" +
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
    "\t\t\t\t\t\t<a class=\"signup-fb\" href=\"javascript:void(0)\" ng-click=\"authenticate('facebook')\"><small><img src=\"images/facebook_alt.png\" width=\"8\" height=\"17\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Facebook</span></a>\n" +
    "\t\t\t\t\t\t<a class=\"signup-g\" href=\"javascript:void(0)\" ng-click=\"authenticate('google')\"><small><img src=\"images/googlw_Plus.png\" width=\"26\" height=\"16\" alt=\"\" title=\"\"></small><span class=\"cart-s-m\">Log In with Google</span></a>\n" +
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
    "</div>\n" +
    "\n"
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
    "<div class=\"col-xs-12  \" order-success-cont=\"\" >\n" +
    "\t<div class=\"col-xs-12 nopadding detls-cont\">\n" +
    "\t\t<div class=\"dtl-txt\">Details</div>\n" +
    "\t\t<div class=\"ttl-no-ord\">Order number {{ orderNo }} </div>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont\" ng-repeat=\"order in orderDetails\">\n" +
    "\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text\">{{ order.product_name }}</div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> <strong>{{order.product_price | number : 2 }}</strong></div>\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding detail-qty\">Quantity: {{ order.product_qty}}</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont\">\n" +
    "\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text\">Sub Total </div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg> {{ subTotal }}</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding m-t-8px\">\n" +
    "\t\t\t<div class=\"detail-text \"> Coupon Applied (CRAFTSLOVE)</div>\n" +
    "\t\t\t<div class=\"detail-amt\" ng-if=\"order.coupon_code\">\n" +
    "\t\t\t\t- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>  {{ order.couponCode }} ></div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding m-t-8px\">\n" +
    "\t\t\t<div class=\"detail-text\">Shipping</div>\n" +
    "\t\t\t<div class=\"detail-amt\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg>  {{ order.shippingAmount }}</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-12  nopadding m-t-8px m-b-10px\">\n" +
    "\t\t\t<div class=\"detail-text color-black\"><strong>Total Payable</strong></div>\n" +
    "\t\t\t<div class=\"detail-amt color-black\">\n" +
    "\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 14 28\" class=\"icon\">\n" +
    "<path d=\"M14.031 7.344v1.594q0 0.219-0.141 0.359t-0.359 0.141h-2.625q-0.359 2.25-2.016 3.656t-4.312 1.719q2.609 2.781 7.172 8.375 0.219 0.25 0.063 0.531-0.125 0.281-0.453 0.281h-3.047q-0.25 0-0.391-0.187-4.781-5.734-7.781-8.922-0.141-0.141-0.141-0.344v-1.984q0-0.203 0.148-0.352t0.352-0.148h1.75q2.063 0 3.32-0.672t1.602-1.953h-6.672q-0.219 0-0.359-0.141t-0.141-0.359v-1.594q0-0.219 0.141-0.359t0.359-0.141h6.453q-0.891-1.766-4.188-1.766h-2.266q-0.203 0-0.352-0.148t-0.148-0.352v-2.078q0-0.219 0.141-0.359t0.359-0.141h13q0.219 0 0.359 0.141t0.141 0.359v1.594q0 0.219-0.141 0.359t-0.359 0.141h-3.641q0.734 0.953 1 2.25h2.672q0.219 0 0.359 0.141t0.141 0.359z\"></path>\n" +
    "</svg><strong> {{order.totalPayble}} </strong></div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-12  nopadding details-cont p-b-10px\">\n" +
    "\t\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  ln-hgt-2-6\">SHIPPING DETAILS</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  font16 font14-xs  ln-hgt-2-6 gryeish-brown\"><strong>{{shippingDetails.firstname}} {{shippingDetails.lastname}}</strong></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  font16 font14-xs \">{{shippingDetails.company}},  {{shippingDetails.street}}, {{shippingDetails.city}}, {{shippingDetails.region}} \t - {{order.postcode}}</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12  nopadding\">\n" +
    "\t\t\t<div class=\"detail-text  font16 font14-xs  ln-hgt-2-6\">{{ shippingDetails.telephone }}</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t\t<div class=\"col-xs-12  nopadding details-cont p-b-10px\">\n" +
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
    "\n" +
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
    "\t<button class=\"shpng-contn\" ng-click=\"continueShopping()\">CONTINUE SHOPPING</button>\n" +
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
    "</div>\n"
  );


  $templateCache.put('partials/payment.html',
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
    "\t\t\t\t\t\t\t<h5>{{shippingAmountData.total_items}} ITEMS <span><a href=\"#\">View Details</a></span></h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\"><span class=\"total-amount\">&#8377; {{shippingAdressData.grand_total}}</span></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\" ng-repeat = \"quotedata in finalQuoteData\">\n" +
    "\t\t\t\t\t\t<div class=\"media\">\n" +
    "\t\t\t\t\t\t\t<div class=\"media-left\">\n" +
    "\t\t\t\t\t\t\t\t<a href=\"{{prdctUrl + quotedata.product_id}}\">\n" +
    "\t\t\t\t\t\t\t\t\t<img class=\"media-object\" src=\" {{imgHost + quotedata.product_image}}\" alt=\"\"  width=\"100px\" height=\"100px\" title=\"\">\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">{{quotedata.product_name}}</h4>\n" +
    "\t\t\t\t\t\t\t\t<p>Quantity: <span>{{quotedata.product_qty}}</span></p>\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"items-price\">&#8377; {{quotedata.product_price | number : 2}}</h4>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<!--// Shipping Details -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding shipping-details\">\n" +
    "\t\t\t\t\t\t\t<h5>SHIPPING DETAILS</h5>\n" +
    "\t\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t\t<span>{{shippingAdressData.firstname + ' ' + shippingAdressData.lastname}}</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"normal\">{{shippingAdressData.street +','+shippingAdressData.city +','+ shippingAdressData.region +','+ shippingAdressData.postcode}}</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"normal\">{{shippingAdressData.telephone}}</span>\n" +
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
    "\t\t\t\t\t\t\t\t\t<p>&#8377; {{shippingAmountData.sub_total | number : 2 }}</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Coupon Applied (CRAFTSLOVE)</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>- &#8377; {{shippingAdressData.discount_amount | number : 2}}</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Shipping</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>&#8377; {{shippingAdressData.shipping_amount | number : 2}}</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h5>Total Payable <span class=\"pull-right\">&#8377; {{shippingAdressData.grand_total | number : 2}}</span></h5>\n" +
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
    "\t\t\t\t\t\t\t<li ng-repeat=\"item in paymentMethods\" ng-class=\"{ active: changeName == '{{item.method}}' }\">\n" +
    "\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" data-toggle=\"tab\" ng-click=\"changeSlide(item.method)\">{{ item.method }}</a>\n" +
    "\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!-- Tab panes -->\n" +
    "\t\t\t\t\t<div class=\"tab-content col-xs-9 col-sm-9\">\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"cashondelivery\" ng-class=\"{ active: changeName == '{{item.method}}' }\" ng-repeat=\"item in paymentMethods\">\n" +
    "\t\t\t\t\t\t\t<!-- show on cod -->\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery\" ng-if = \"item.method == 'Cash On Delivery'\">\n" +
    "\t\t\t\t\t\t\t\t<h3>Pay Using Cash on Delivery</h3>\n" +
    "\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"PLACE ORDER\" class=\"btn btn-newStyle bg-green\" ng-click=\"submitCOD()\">\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<!-- show on creditcard -->\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 creditcard\" ng-if = \"item.method == 'Credit card'\">\n" +
    "\t\t\t\t\t\t\t\t<form name=\"forms.creditForm\" ng-submit=\"submitCreditForm()\" novalidate>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.creditForm.cardNumber.$invalid && !forms.creditForm.cardNumber.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Credit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n" +
    "\t\t\t\t\t\t\t\t\t      type=\"text\"\n" +
    "\t\t\t\t\t\t\t\t\t      name=\"cardNumber\"\n" +
    "\t\t\t\t\t\t\t\t\t      ng-model=\"credit.cardNumber\"\n" +
    "\t\t\t\t\t\t\t\t\t      required\n" +
    "\t\t\t\t\t\t\t\t\t      cc-number\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tcc-format\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tcc-type=\"cardType\"\n" +
    "\t\t\t\t\t\t\t\t\t      placeholder=\"Card Number\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-show=\"forms.creditForm.cardNumber.$invalid && !forms.creditForm.cardNumber.$pristine\">Invalid Credit Card</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"card-type\">{{forms.creditForm.cardNumber.$ccType || ''}}</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.creditForm.cardName.$invalid && !forms.creditForm.cardName.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\" ng-model=\"credit.cardName\" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : (!forms.creditForm.cardM.$valid && !forms.creditForm.cardM.$pristine) || (!forms.creditForm.cardY.$valid && !forms.creditForm.cardY.$pristine) }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input ng-model=\"credit.cardMonth\" cc-exp-month class=\"form-control pull-left\" placeholder=\"MM\"  name=\"cardM\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "  \t\t\t\t\t\t\t\t\t\t\t<input ng-model=\"credit.cardYear\" cc-exp-year class=\"form-control pull-right\" placeholder=\"YY\" name=\"cardY\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{'error' : !forms.creditForm.cardCVC.$valid && !forms.creditForm.cardCVC.$pristine}\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cc_cvc\" cc-cvc cc-type=\"forms.creditForm.cardNumber.$ccType\" name=\"cardCVC\" ng-model=\"credit.cardCvv\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-newStyle bg-green\" ng-disabled=\"forms.creditForm.$invalid\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</button>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<!-- show on Debit card -->\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 creditcard\" ng-if = \"item.method == 'Debit Card'\">\n" +
    "\t\t\t\t\t\t\t\t<form name=\"forms.debitForm\" ng-submit=\"submitDebitForm()\" novalidate >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.debitForm.cardNumber.$invalid && !forms.debitForm.cardNumber.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Debit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n" +
    "\t\t\t\t\t\t\t\t\t      type=\"text\"\n" +
    "\t\t\t\t\t\t\t\t\t      name=\"cardNumber\"\n" +
    "\t\t\t\t\t\t\t\t\t      ng-model=\"debit.cardNumber\"\n" +
    "\t\t\t\t\t\t\t\t\t      required\n" +
    "\t\t\t\t\t\t\t\t\t      cc-number\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tcc-format\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tcc-type=\"cardType\"\n" +
    "\t\t\t\t\t\t\t\t\t      placeholder=\"Card Number\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-show=\"forms.debitForm.cardNumber.$invalid && !forms.debitForm.cardNumber.$pristine\">Invalid Credit Card</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"card-type\">{{forms.debitForm.cardNumber.$ccType || ''}}</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.debitForm.cardName.$invalid && !forms.debitForm.cardName.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\" ng-model=\"debit.cardName\" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : (!forms.debitForm.cardM.$valid && !forms.debitForm.cardM.$pristine) || (!forms.debitForm.cardY.$valid && !forms.debitForm.cardY.$pristine) }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input ng-model=\"debit.cardMonth\" cc-exp-month class=\"form-control pull-left\" placeholder=\"MM\"  name=\"cardM\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "  \t\t\t\t\t\t\t\t\t\t\t<input ng-model=\"debit.cardYear\" cc-exp-year class=\"form-control pull-right\" placeholder=\"YY\" name=\"cardY\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{'error' : !forms.debitForm.cardCvv.$valid && !forms.debitForm.cardCvv.$pristine}\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"dc_cvc\" cc-cvc cc-type=\"forms.debitForm.cardNumber.$ccType\" name=\"cardCvv\" ng-model=\"debit.cardCvv\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-newStyle bg-green\" ng-disabled=\"forms.debitForm.$invalid\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</button>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<!-- show on Net Banking -->\n" +
    "\t\t\t\t\t\t\t<form class=\"col-xs-12 NetBanking\" name=\"forms.NBForm\" novalidate ng-if = \"item.method == 'Net Banking'\">\n" +
    "\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t<li ng-repeat = \"bank in item.content.priority\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"{{bank.bank_code}}\" type=\"radio\" name=\"bank\" value=\"{{bank.bank_code}}\" ng-model=\"netbanking.bank_code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"{{bank.bank_code}}\"><span></span><span>{{bank.bank_name}}</span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"pull-left or\">OR</span>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select ng-model=\"netbanking\" name=\"bank\" ng-options=\"item as item.bank_name for item in item.content.others\"></select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"btn btn-newStyle bg-green\" href=\"javascript:void(0)\" ng-click=\"submitNBForm()\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<!-- pay U Money -->\n" +
    "\t\t\t\t\t\t\t<!--<div class=\"col-xs-12 PayUMoney\" ng-if = \"item.method == 'PayU Money'\">\n" +
    "\t\t\t\t\t\t\t\t<form name=\"DebitCardForm\" ng-submit=\"submitCreditForm()\" novalidate >\n" +
    "\t\t\t\t\t\t\t\t\t<label>PayU Money</label>\n" +
    "\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t</div>-->\n" +
    "\n" +
    "\t\t\t\t\t\t</div>\n" +
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
    "\t\t\t\t\t\t\t\t<li ng-repeat=\"item in paymentMethods\" ng-class=\"{ active: changeName == '{{item.method}}' }\">\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" data-toggle=\"tab\" ng-click=\"changeSlide(item)\">{{ item.method }}</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- show on cod -->\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery\" ng-if = \"item.method == 'Cash On Delivery'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<h3>Pay Using Cash on Delivery</h3>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"PLACE ORDER\" class=\"btn btn-newStyle bg-green\" ng-click=\"cashOn()\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- show on creditcard -->\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 creditcard\" ng-if = \"item.method == 'Credit card'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<form name=\"creditForm\" ng-submit=\"submitCreditForm()\" novalidate >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.creditForm.cardNumber.$invalid && !forms.creditForm.cardNumber.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Credit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"cardNumber\" type=\"number\" placeholder=\"Credit Card Number\" class=\"form-control\"  ng-minlength = \"9\" ng-model=\"credit.cardNumber\" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p ng-show=\"forms.creditForm.cardNumber.$error.minlength\">Please Enter Valid Credit Card Number</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.creditForm.cardName.$invalid && !forms.creditForm.cardName.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\" ng-model=\"forms.creditForm.cardName\" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p ng-show=\"forms.creditForm.cardName.$invalid\">Please Enter Card Name</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\" ng-class=\"{ 'error' : forms.creditForm.cardMonth.$invalid && !forms.creditForm.cardMonth.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"MM\" maxlength=\"2\" class=\"form-control pull-left\" ng-model=\"forms.creditForm.cardMonth\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"YY\" maxlength=\"4\" class=\"form-control pull-right\" ng-model=\"forms.creditForm.cardYear\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input maxlength=\"3\" type=\"text\" class=\"form-control\" ng-model=\"forms.creditForm.cardCvv\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-newStyle bg-green\" ng-disabled=\"submitCreditForm.$invalid\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- show on Debit card -->\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 DebitCard\" ng-if = \"item.method == 'Debit Card'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<form name=\"DebitCardForm\" ng-submit=\"submitCreditForm()\" novalidate >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Debit Card Form</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- show on Net Banking -->\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\" ng-if = \"item.method == 'Net Banking'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<li ng-repeat = \"bank in item.content.priority\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{bank.bank_code}}_2\" type=\"radio\" name=\"bank\" value=\"{{bank.bank_name}}\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"{{bank.bank_code}}_2\"><span></span><span><img ng-src=\"{{bank.logo_url}}\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-left or\">OR</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"selectedItem\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option ng-repeat=\"bank as bank in item.content.priority\">{{bank}}</option> -->\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-newStyle bg-green\" href=\"javascript:void(0)\" ng-click=\"netBanking()\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- pay U Money -->\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 PayUMoney\" ng-if = \"item.method == 'PayU Money'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<form name=\"DebitCardForm\" ng-submit=\"submitCreditForm()\" novalidate >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>PayU Money</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
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
    "<div data-overlay class=\"hide\">&nbsp;</div>\n" +
    "<!--// Header -->\n" +
    "<div ng-app=\"validApp\">\n" +
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
    "\t\t\t<h4 role=\"headding\">SELECT SHIPPING ADDRESS <small><a class=\"rougeColor\" href=\"#\" ng-show=\"showhideprop\">Change</a></small></h4>\n" +
    "\t\t\t<!--// -->\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\" ng-repeat=\"address in addresses\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard \">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>{{address.firstname}} {{address.lastname}}<span></span><span class=\"pull-right delete-shipping\"><a href=\"javascript:void(0)\" ng-click=\"shippingEdit(address);\"><img src=\"images/edit-icon.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>{{address.street}}</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">{{address.telephone}}</p>\n" +
    "\t\t\t\t\t\t\t</div> \n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<!-- <div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" ng-show=\"shippadd\" type=\"button\"  ng-click=\"deliveryAddress(address)\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div> -->\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"checkbox col-xs-12 nopadding\" ng-show=\"shippadd\">\n" +
    "\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"  ng-model=\"chkStatus\" ng-change=\"checkStatus()\" checked><span for=\"Guest\"></span> This is also my Billing Address --AAAAA</label>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\" style=\"width:30%;\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "<div ng-hide=\"billingAddress\" >\n" +
    "\t\t\t\t<div class=\"col-xs-12\"><h4 role=\"headding\">SELECT BILLING ADDRESS</h4></div>\n" +
    "\t\t\t\t<!--// Billing Address Not select Error -->\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<!--// -->\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\" ng-repeat=\"address in addresses\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard\" ng-show=\"shippadd\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>{{address.firstname}} {{address.lastname}}<span></span><span class=\"pull-right delete-shipping\"><a href=\"javascript:void(0)\" ng-click=\"shippingEdit();\"><img src=\"images/edit-icon.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>{{address.street}}</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">{{address.telephone}}</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<!-- <div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div> -->\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\n" +
    "\t\t\t\t<!--// Edit Shipping Address Start -->\n" +
    "\t\t\t\t<div class=\"col-xs-12 add-new-shipping\" ng-hide=\"true\">\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<!---1st edit form-->\t\n" +
    "\t\t\t\t\t\t\t\t\t<form role=\"form\" name=\"editaddrForm\" ng-submit=\"editsubmitForm();\" novalidate>\n" +
    "\t\t\t\t\t\t\t\t\t\t<h4 role=\"headding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a href=\"#new-address\">Edit Address </a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</h4>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\" ng-class=\"{ 'error' : editaddrForm.country.$invalid && !editaddrForm.country.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"change-country\" name=\"country\" ng-model=\"editaddr.country\" ng-option=\" item as item in country \" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span ng-show=\"editaddrForm.country.$invaild\">Please Select Country</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t <!-- USERNAME -->\n" +
    "       \n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\"  ng-class=\"{ 'error' : editaddrForm.username.$invalid && !editaddrForm.username.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input id=\"name\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" ng-model=\"editaddr.username\"  ng-minlength=\"2\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t <span ng-show=\"editaddrForm.username.$error.minlength\" class=\"error\">Name is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\" ng-class=\"{ 'error' : editaddrForm.address.$invalid && !editaddrForm.address.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" name=\"address\" class=\"form-control\" ng-minlength=\"10\" mg-model=\"editaddr.address\" required ></textarea>\n" +
    "            <span ng-show=\"editaddrForm.address.$error.minlength\" class=\"error\">Address is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"  ng-class=\"{ 'error' : editaddrForm.pincode.$invalid && !editaddrForm.pincode.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" name=\"pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" ng-minlength=\"4\" ng-model=\"editaddr.pincode\" ng-maxlength=\"7\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t <span ng-show=\"editaddrForm.pincode.$error.minlength\" class=\"error\">Pincode is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t <span ng-show=\"editaddrForm.pincode.$error.maxlength\" class=\"error\">Username is too long.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\n" +
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
    "\n" +
    "\n" +
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
    "\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\" ng-class=\"{ 'error' : editaddrForm.username.$invalid && !editaddrForm.username.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"phonenumber\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\" ng-model=\"editaddr.phonenumber\" ng-minlength=\"10\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span ng-show=\"editaddrForm.phonenumber.$error.minlength\" class=\"error\">Phone Number is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span ng-show=\"editaddrForm.pincode.$error.maxlength\" class=\"error\">phone number is too long .</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default outline-btn\" >SAVE</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default outline-btn\" >CANCEL</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t\t<!---/ 1st edit form-->\t\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Edit Shipping Address End -->\n" +
    "\t\t\t\t<!--// Desktop Edit Shipping Address Start destop popup -->\n" +
    "\t\t\t\t<div class=\"addressEditContainer \" ng-hide=\"editAddPOP\"><!--hide-->\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<span role=\"close\" ng-click=\"formclose()\"><a href=\"#\"><img src=\"images/delete-icon.png\" alt=\"\" title=\"\"></a></span>\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t<!---2st edit form -->\t\n" +
    "\t\t\t\t\t\t\t<form role=\"form\" name=\"DeditAddress\" ng-submit=\"DeditsubmitForm();\" novalidate> \n" +
    "\t\t\t\t\t\t\t\t<h4 role=\"headding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#new-address\">Edit Address</a>\n" +
    "\t\t\t\t\t\t\t\t</h4>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select id=\"change-country\" mg-model=\"editAddr.country\" ng-model=\"Dedit.country\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t  \n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\" ng-class=\"{ 'error' : DeditAddress.fullname.$invalid && !DeditAddress.fullname.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" name=\"fullname\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" ng-model=\"editAddr.firstname\" ng-minlength=\"2\" >\n" +
    "\t\t\t\t\t\t\t\t\t<span ng-show=\"DeditAddress.fullname.$error.minlength\" class=\"error\">FullName is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\" ng-class=\"{ 'error' : DeditAddress.lastname.$invalid && !DeditAddress.lastname.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Last Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" name=\"lastname\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" ng-model=\"editAddr.lastname\" ng-minlength=\"2\" >\n" +
    "\t\t\t\t\t\t\t\t\t<span ng-show=\"DeditAddress.lastname.$error.minlength\" class=\"error\">FullName is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\" ng-class=\"{ 'error' : DeditAddress.address.$invalid && !DeditAddress.address.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" name=\"address\" class=\"form-control\" ng-minlength=\"10\" ng-model=\"editAddr.street\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t\t<span ng-show=\"DeditAddress.address.$error.minlength\" class=\"error\">Address is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\" ng-class=\"{ 'error' : DeditAddress.pincode.$invalid && !DeditAddress.pincode.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" name=\"pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" ng-minlength=\"4\" ng-model=\"editAddr.postcode\" ng-maxlength=\"7\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t <span ng-show=\"DeditAddress.pincode.$error.minlength\" class=\"error\">Pincode is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t <span ng-show=\"DeditAddress.pincode.$error.maxlength\" class=\"error\">pincode is too long.</span>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\" ng-class=\"{ 'error' : DeditAddress.city.$invalid && !DeditAddress.city.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select name=\"city\" ng-model=\"editAddr.city\" ng-option=\"\" requried>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select City</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t <span ng-show=\"DeditAddress.city.$error.minlength\" class=\"error\">Please Select </span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\" ng-class=\"{ 'error' : DeditAddress.state.$invalid && !DeditAddress.state.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select name=\"state\" ng-model=\"editAddr.region\" ng-option=\"\" requried>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span ng-show=\"DeditAddress.state.$error.minlength\" class=\"error\">Please Select State </span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\" ng-class=\"{ 'error' : DeditAddress.telephone.$invalid && !DeditAddress.telephone.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"telephone\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\" ng-model=\"editAddr.telephone\" ng-minlength=\"10\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span ng-show=\"DeditAddress.telephone.$error.minlength\" class=\"error\">Phone Number is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span ng-show=\"DeditAddress.telephone.$error.maxlength\" class=\"error\">phone number is too long .</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default outline-btn\" >SAVE</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default outline-btn\" >CANCEL</button>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t<!---/2st edit form-->\t\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Desktop Edit Shipping Address End -->\n" +
    "\t\t\t\t<!--// Select Billing Address -->\n" +
    "\n" +
    "\t\t\t\t\t\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding add-new-shipping\">\n" +
    "\t\t\t<h4 class=\"M-add-new-address\" role=\"headding\">\n" +
    "\t\t\t\t<a href=\"#new-address\">ADD NEW ADDRESS<span><img src=\"images/Shape.png\" title=\"\" alt=\"\"></span></a>\n" +
    "\t\t\t</h4>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t<!---3st edit form-->\t\n" +
    "\t\t\t\t\t\t<form role=\"form\" name=\"addnewForm\" ng-submit=\"addnewsubmit();\" novalidate>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\" ng-class=\"{ 'error' : addnewForm.state.$invalid && !addnewForm.state.$pristine }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t<select ng-model=\"addnew.state\" name=\"state\" required ng-options=\"v.name for v in states track by v.id\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<option selected value=\"\"> Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<span ng-show=\"addnewForm.state.$error.minlength\" class=\"error\">Username is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"error\" ng-show=\"addnewForm.$submitted && addnewForm.state.$error.required\">Please Select State</span>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\" ng-class=\"{ 'error' : (addnewForm.fullname.$invalid && !addnewForm.fullname.$pristine) || (addnewForm.$submitted && addnewForm.fullname.$error.required) }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" name =\"fullname\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" ng-model=\"addNew.fullname\" ng-minlength=\"2\"  required>\n" +
    "\t\t\t\t\t\t\t\t\t <span ng-show=\"addnewForm.fullname.$error.minlength\" class=\"error\">Username is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t  <div ng-show=\"addnewForm.$submitted || addnewForm.fullname.$touched\">\n" +
    "             <span ng-show=\"addnewForm.fullname.$error.required\" class=\"error\">Tell us your name.</span>\n" +
    "             </div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\" ng-class=\"{ 'error' : (addnewForm.address.$invalid && !addnewForm.address.$pristine) || (addnewForm.$submitted && addnewForm.address.$error.required) }\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" name=\"address\" ng-model=\"addNew.address\" class=\"form-control\" ng-minlength=\"10\" required></textarea>\n" +
    "\t\t\t\t\t\t\t\t\t<span ng-show=\"addnewForm.address.$error.minlength\" class=\"error\">Address is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t<div ng-show=\"addnewForm.$submitted || addnewForm.address.$touched\">\n" +
    "             <span ng-show=\"addnewForm.address.$error.required\" class=\"error\">Tell us your Address.</span>\n" +
    "             </div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\" ng-class=\"{ 'error' : (addnewForm.pincode.$invalid && !addnewForm.pincode.$pristine) || (addnewForm.$submitted && addnewForm.pincode.$error.required) }\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" name=\"pincode\" type=\"number\" class=\"form-control\" placeholder=\"Pincode\"  ng-minlength=\"4\" ng-maxlength=\"9\" ng-model=\"addnew.pincode\" required>\n" +
    "\t\t\t\t\t\t\t\t\t\t<span ng-show=\"addnewForm.pincode.$error.minlength\" class=\"error\">Pincode is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t<span ng-show=\"addnewForm.pincode.$error.maxlength\" class=\"error\">phone number is too long .</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div ng-show=\"addnewForm.$submitted || addnewForm.pincode.$touched\">\n" +
    "             <span ng-show=\"addnewForm.pincode.$error.required\" class=\"error\">Tell us your Pincode.</span>\n" +
    "             </div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"addnew.city\" name=\"city\"  required ng-options=\"v.name for v in city track by v.id\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"\">Select City</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t<span class=\"error\" ng-show=\"addnewForm.$submitted && addnewForm.city.$error.required\">Please Select State</span>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"addnew.state\" name=\"state\" required ng-options=\"v.name for v in states track by v.id\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<option selected value=\"\"> Select State</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<span ng-show=\"addnewForm.state.$error.minlength\" class=\"error\">Username is too short.</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"error\" ng-show=\"addnewForm.$submitted && addnewForm.state.$error.required\">Please Select State</span>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\" ng-class=\"{ 'error' : (addnewForm.phonenumber.$invalid && !addnewForm.phonenumber.$pristine) || (addnewForm.$submitted && addnewForm.phonenumber.$error.required) }\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"phonenumber\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\" ng-model=\"addnew.phonenumber\" ng-minlength=\"10\" ng-maxlength=\"10\" ng-required=\"true\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t<span class=\"error\" ng-show=\"addnewForm.phone.$error.required || addnewForm.phone.$error.number\">Valid phone number is required</span>\n" +
    "            <span class=\"error\" ng-show=\"((addnewForm.phonenumber.$error.minlength || addnewForm.phonenumber.$error.maxlength) && addnewForm.phonenumber.$dirty) \">phone number should be 10 digits</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div ng-show=\"addnewForm.$submitted || addnewForm.phonenumber.$touched\">\n" +
    "             <span ng-show=\"addnewForm.phonenumber.$error.required\" class=\"error\">Valid phone number is required</span>\n" +
    "             </div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<!-- <input class=\"btn btn-newStyle btn-newStyleActive Width60\" type=\"button\" value=\"SAVE & CONTINUE\"> -->\n" +
    "\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-newStyle btn-newStyleActive Width60\" > SAVE & CONTINUE</button>\n" +
    "\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding margin0\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\" ng-model=\"chkbill\" ng-change=\"checkBilling()\" checked><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t<!---4st edit form-->\t\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\n" +
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
    "</div>\n" +
    "<div data-overlay  ng-hide=\"editAddPOP\">&nbsp;</div>"
  );
}]); });