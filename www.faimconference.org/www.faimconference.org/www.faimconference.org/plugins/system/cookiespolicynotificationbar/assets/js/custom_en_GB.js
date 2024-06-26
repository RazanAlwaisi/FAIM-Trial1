// BEGIN: Cookies Policy Notification Bar - J! plugin (powered by: web357.eu)
				jQuery.noConflict();
				(function($){
				  $(window).load(function(){

// hide in iFrames
if (top != self) {
   return false;
}


					// Cookie setting script wrapper
					var cookieScripts = function () {
						// Internal javascript called
						console.log("Running");
					
						// Loading external javascript file
						$.cookiesDirective.loadScript({
							uri:'external.js',
							appendTo: 'body'
						});
					}
					
					$.cookiesDirective({
						w357_explicitConsent: false,
						w357_position: 'bottom',
						w357_duration: 60,
						w357_animate_duration: 2000,
						w357_limit: 0,
						w357_message: 'We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.',
						w357_buttonText: 'Ok, I\'ve understood!',
						w357_buttonMoreText: 'More Info',
						w357_buttonMoreLink: '',
						w357_display_more_info_btn: 1,
						w357_fontColor: '#ffffff',
						w357_linkColor: '#ffffff',
						w357_fontSize: '14px',
						w357_backgroundOpacity: '95',
						w357_backgroundColor: '#1b3a78',
						w357_height: 'auto',
						w357_line_height: '',
						w357_cookie_name: 'cookiesDirective',
						w357_link_target: '_self',
						w357_popup_width: '800',
						w357_popup_height: '600'
					 });
				
					

				  });
				  
				})(jQuery);
// END: Cookies Policy Notification Bar - J! plugin (powered by: web357.eu)