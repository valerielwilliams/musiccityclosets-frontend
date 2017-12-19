//@prepros-prepend jquery-3.2.1.min.js
//@prepros-prepend backtotop.js
//@prepros-prepend production.js


jQuery ( function ($) {

    var site = new SiteController($);
    site.init();

});

function SiteController($)
{
    self.init = function()
    {
        initMobileNav();
        initHandleLabels();
    }

    function initMobileNav() {

        //CLICK ON TRIGGER, OPEN THE MOBILE NAV
        $('.js-mobile-trigger').click(function(e) {
            e.preventDefault();
            $('.js-mobile-nav').addClass('open');
        });

        //CLICK ON CLOSE BUTTON, CLOSE MOBILE NAV
        $('.js-mobile-nav-close').click(function(e) {
            e.preventDefault();
            $('.js-mobile-nav').removeClass('open');
        });
    }

    function initHandleLabels() {
        $('input[type=text]').focus(function(e) {
            $(this).parent().find('label').addClass('out-of-the-way');
        });

        $('input[type=text]').blur(function(e) {

            //if the field has a value, leave it
            if ($(this).val() || $(this).val() != '') {
                return;
            }
            $(this).parent().find('label').removeClass('out-of-the-way');
            //otherwise, move the label back
        });

        $('input[type=phone]').focus(function(e) {
            $(this).parent().find('label').addClass('out-of-the-way');
        });

        $('input[type=phone]').blur(function(e) {

            //if the field has a value, leave it
            if ($(this).val() || $(this).val() != '') {
                return;
            }
            $(this).parent().find('label').removeClass('out-of-the-way');
            //otherwise, move the label back
        });

        $('textarea').focus(function(e) {
            $(this).parent().find('label').addClass('out-of-the-way');
        });

        $('textarea').blur(function(e) {

            //if the field has a value, leave it
            if ($(this).val() || $(this).val() != '') {
                return;
            }
            $(this).parent().find('label').removeClass('out-of-the-way');
            //otherwise, move the label back
        });
    }

return self;
}
