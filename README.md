# Layout Engine

### Adds the rendering engine and browser names as a class on the html tag and returns a JavaScript object containing the vendor, version and browser name (where appropriate)

Layout Engine uses feature detection so there can never be a false positive* and vendors cannot be spoofed. It's the **simplest and most reliable** way to target IE10.

The following layout engines are detected: `ie`, `khtml`, `mozilla`, `opera` & `webkit`

The following versions are detected: `ie-` `7`, `8`, `9`, `10` & `opera-` `mini`

The following WebKit browsers are detected: `android` *(see below)*, `chrome` *(includes Opera Blink)* & `wiiu`

Up to 3 classes are applied to `<html>` with the syntax: `.vendor-vendor_name`, `.vendor-vendor_name-version` *(optional)* and `.browser-browser_name` *(optional)*.

A JavaScript object with up to 3 properties is exposed: `layoutEngine.vendor`, `layoutEngine.version` *(optional)* and `layoutEngine.browser` *(optional)*.

If combined with CssUserAgent (http://cssuseragent.org), Layout Engine will also identify the default Android Browser (and its WebView variants), by adding a class of `browser-android` to `<html>`. Why might you need this? Applying a border or background to `<select>`s make them render as text inputs. Also, AOSP Browser's radio buttons and checkboxes are very badly positioned compared to other browsers.

---

**Usage:**

1. Reference layout.engine.min.js in the `<head>` of your document

2. In your CSS, use a vendor `class` to style elements appropriately, e.g.:
```
.vendor-ie-10 {
	line-height: 20px; /* 1px more than IE 8 */
}
```

3. If appropriate, in your JavaScript, use `layoutEngine.vendor`, `layoutEngine.version` and `layoutEngine.browser` to run conditional functions where relevant, e.g.:
```
if (layoutEngine.vendor === 'ie' && layoutEngine.version === 10) {
	// Conditional script
}
```

---

**Caveats:**

IE 8, 9 and 10's Browser and Document Modes incorrectly detect IE 7 as IE 8. Real IE 7 works as intended, however.

IE 6 cannot be detected with Layout Engine. I recommend using IE Conditional Comments to target IE 6 and 7 instead.

---

Minified version created with UglifyJS (http://jscompress.com)