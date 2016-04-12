/*!
* Layout Engine v0.10.2
*
* Copyright (c) 2016 Matt Stow
* http://mattstow.com
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
			cssClass += edge + vendor + edge;
			jsObject = {
				vendor: edge
			};
			// Support for <meter> was introduced a little after Edge 13.
			// @link https://developer.microsoft.com/en-us/microsoft-edge/platform/changelog/desktop/10586/?compareWith=10514
			var meter = document.createElement('meter');
			if (typeof meter.low === 'number') {
				cssClass += '-13';
				jsObject.version = 13;
			} else {
				cssClass += '-12';
				jsObject.version = 12;
			}
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
				jsObject.version = 9;
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
