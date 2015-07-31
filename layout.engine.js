/*!
* Layout Engine v0.10.0
*
* Adds the rendering engine and browser names as a class on the html tag and returns a JavaScript object containing the vendor, version and browser name (where appropriate)
*
* Possible vendors: '.vendor-' + 'edge', 'ie', 'khtml', 'mozilla', 'opera', 'webkit'
* '.vendor-ie' also adds the version: 'vendor-' + 'ie-11', 'ie-10', 'ie-9', 'ie-8', 'ie-7'
* '.vendor-opera-mini' is also detected
*
* Possible browsers: '.browser-' + 'android', 'chrome', 'safari', 'safari-ios', 'wiiu'
*
* Copyright (c) 2015 Matt Stow
*
* http://mattstow.com
*
* Licensed under the MIT license
*/
;var layoutEngine = (function() {
	var html = document.documentElement,
		style = html.style,
		vendor = ' vendor-',
		edge = 'edge',
		ie = 'ie',
		khtml = 'khtml',
		mozilla = 'mozilla',
		opera = 'opera',
		webkit = 'webkit',
		browser = ' browser-',
		android = 'android',
		chrome = 'chrome',
		safari = 'safari',
		iosSafari = safari + '-ios',
		wiiu = 'wiiu',
		cssClass = vendor,
		jsObject;
	
	// Edge and IE
	if ('msScrollLimit' in style || 'behavior' in style) {
		if ('msTextSizeAdjust' in style) {
			cssClass += edge;
			jsObject = {
				vendor: edge
			};
		}
		else {
			cssClass += ie + vendor + ie;
			jsObject = {
				vendor: ie
			};
			if ('msImeAlign' in style) {
				cssClass += '-11';
				jsObject.version = 11;
			}
			else if ('msUserSelect' in style) {
				cssClass += '-10';
				jsObject.version = 10;
			}
			else if ('fill' in style) {
				cssClass += '-9';
				jjsObject.version = 9;
			}
			else if ('widows' in style) {
				cssClass += '-8';
				jsObject.version = 8;
			}
			else {
				cssClass += '-7';
				jsObject.version = 7;
			}
		}
	}
	// WebKit
	else if ('WebkitAppearance' in style) {
		cssClass += webkit;
		var ua = navigator.userAgent;

		jsObject = {
			vendor: webkit
		};
		
		if (!!window.chrome || ua.indexOf('OPR') >= 0 || ua.indexOf('wv') >= 0) {
			cssClass += browser + chrome;
			jsObject.browser = chrome;
		}
		else if ('webkitDashboardRegion' in style) {
			cssClass += browser + safari;
			jsObject.browser = safari;
		}
		else if ('webkitOverflowScrolling' in style) {
			cssClass += browser + iosSafari;
			jsObject.browser = iosSafari;
		}
		else if (ua.indexOf('Android') >= 0) {
			cssClass += browser + android;
			jsObject.browser = android;
		}
		else if (!!window.wiiu) {
			cssClass += browser + wiiu;
			jsObject.browser = wiiu;
		}
	}
	// Mozilla
	else if ('MozAppearance' in style) {
		cssClass += mozilla;
		jsObject = {
			vendor: mozilla
		}
	}
	// Opera
	else if ('OLink' in style || !!window.opera) {
		cssClass += opera;
		
		jsObject = {
			vendor: opera,
		};
		
		if ('OMiniFold' in style) {
			cssClass += '-mini';
			jsObject.browser = 'mini';
		}
	}
	// KHTML
	else if ('KhtmlUserInput' in style) {
		cssClass += khtml;
		jsObject = {
			vendor: khtml
		};
	}
	else {
		return false;
	}
	
	html.className += cssClass;
	
	return jsObject;
})();