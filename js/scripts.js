/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
var input = document.querySelector("#number");
  window.intlTelInput(input, {
    // any initialisation options go here
    separateDialCode: true,
  });
  var input = document.querySelector("#number2");
  window.intlTelInput(input, {
    // any initialisation options go here
    separateDialCode: true,
  });
//handle login
  "use strict";

// Class Definition
var KTLogin = function() {
    var _login;

    var _showForm = function(form) {
        var cls = 'login-' + form + '-on';
        var form = 'kt_login_' + form + '_form';

        _login.removeClass('login-forgot-on');
        _login.removeClass('login-signin-on');
        _login.removeClass('login-signup-on');

        _login.addClass(cls);

        KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
    }

    var _handleSignInForm = function() {
        // Handle forgot button
        $('#kt_login_forgot').on('click', function (e) {
            e.preventDefault();
            _showForm('forgot');
        });

		// Handle signup
		$('#kt_login_signup').on('click', function (e) {
			e.preventDefault();
			_showForm('signup');
		});

		// Handle signup
		$('#kt_login_signin').on('click', function (e) {
			e.preventDefault();
			_showForm('signin');
		});
    }

    var _handleSignUpForm = function(e) {
        $('#kt_login_signup_submit').on('click', function (e) {
			if(!$('#agreeTerm').is(':checked')){
				e.preventDefault();
				alert('Bạn cần đồng ý với điều khoản sử dụng.')
			}
        });
        // Handle cancel button
        $('#kt_login_signup_cancel').on('click', function (e) {
            _showForm('signin');
        });
    }

    var _handleForgotForm = function(e) {
        // Handle cancel button
        $('#kt_login_forgot_cancel').on('click', function (e) {
            e.preventDefault();
            _showForm('signin');
        });
    }

    // Public Functions
    return {
        // public functions
        init: function() {
            _login = $('#kt_login');

            _handleSignInForm();
            _handleSignUpForm();
            _handleForgotForm();
        }
    };
}();

// Class Initialization
$(document).ready(function() {
    KTLogin.init();
});

$('#kt_login_signup').click(function(e){
    e.preventDefault();
    $('#dangnhap').addClass("hidden");
});
$(document).ready(function(){
    $('btn_login').click(function(){
        window.location.href='home.html';
        console.log("abc");
        return false;
     });
});