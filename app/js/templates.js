define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/cart.html',
    "<div>hi</div>"
  );


  $templateCache.put('partials/products.html',
    "<div class=\"container\">\n" +
    "<div itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/Product\"\n" +
    "     class=\"col-xs-6 col-md-3 product mob_padding\" ng-repeat=\"product in products\">\n" +
    "\n" +
    "    <div class=\"product-image-container\">\n" +
    "        <a href=\"/cart\">\n" +
    "            <img itemprop=\"image\"\n" +
    "                 src=\"http://img1.craftsvilla.com/thumb/500x500/C/V/CV-MKATA48233802450--KATARIA_SILK_HOUSE_PVT_LTD-Craftsvilla_1.jpg\" class=\"product-image lazy\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"product-details-container col-xs-12\">\n" +
    "        <a itemprop=\"url\" href=\"/cart\">\n" +
    "            <div class=\"product-name\" itemprop=\"name\">Mimosa Silk Saree (r...</div>\n" +
    "        </a>\n" +
    "\n" +
    "        <a href=\"/Mimosa\" title=\"Kataria Silk House Pvt Ltd\" target=\"_blank\">\n" +
    "            <div class=\"vendor-name\">By Kataria Silk House</div>\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"price-container col-xs-12 nopadding\" itemprop=\"offers\" itemscope=\"\"\n" +
    "             itemtype=\"http://schema.org/Offer\">\n" +
    "            <div class=\"col-xs-6 col-md-8 nopadding\">\n" +
    "                <div class=\"col-xs-12 col-md-6 original-price price nopadding visible-xs\"><s><span itemprop=\"price\"> 4256</span></s>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">\n" +
    "                    Rs 2,149\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6 col-md-6 original-price price nopadding hidden-xs\"><s> <span\n" +
    "                        itemprop=\"price\">4256</span></s></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                Save 50%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wishit\">\n" +
    "        <div class=\"wishitIcon\"><i class=\"icon-small icon-v2 icon-wish\" id=\"wishicon-3150468\"></i></div>\n" +
    "        <div class=\"wishitText hidden-xs\" id=\"wished-3150468\">Wished</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>"
  );
}]); });