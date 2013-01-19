Layout Engine
============

### Adds the rendering engine name as a class on the html tag and returns a JavaScript object containing the vendor and version (where appropriate)

Layout Engine uses feature detection so there can never be a false positive* and vendors cannot be spoofed. It's the **simplest and most reliable** way to target IE10.

The following layout engines are detected: `ie`, `khtml`, `mozilla`, `opera` & `webkit`

The following versions are detected: `ie-` `7`, `8`, `9`, `10` & `opera-` `mini`

Up to 2 classes are applied to `<html>` with the syntax: `.vendor-vendor_name` and `.vendor-vendor_name-version` (optional)

A JavaScript object with up to 2 properties is exposed: `layoutEngine.vendor` and `layoutEngine.version` (optional)

---

**Usage:**

1. Reference layout.engine.min.js in the `<head>` of your document

2. In your CSS, use a vendor `class` to style elements appropriately, e.g.:
```
.vendor-ie-10 {
	line-height: 20px; /* 1px more than IE 8 */
}
```

3. If appropriate, in your JavaScript, use `layoutEngine.vendor` and `layoutEngine.version` to run conditional functions where relevant, e.g.:
```
if (layoutEngine.vendor === 'ie' && layoutEngine.version === 10) {
	// Conditional script
}
```

---

**Caveats:**

IE 8, 9 and 10's Browser and Document Modes incorrectly detect IE 7 as IE 8. Real IE 7 works as intended, however.

IE 6 cannot be detected with Layout Engine. I recommend using IE Conditional Comments to target IE 6 and 7 instead.