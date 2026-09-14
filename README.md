# QR-Gen

A lightweight, browser-based QR code generator for URLs and plain text. Create a scannable code instantly, tailor its colors and output size, then save it as a PNG.

## Features

- Generate QR codes from any URL or text input
- Live preview while typing, with a short debounce to keep interactions smooth
- Supports content up to 1,200 characters
- Choose foreground and background colors
- Select a 180 px, 280 px, or 400 px QR code
- High error-correction level for better scan resilience
- Download the generated code as `qr-gen.png`
- Responsive layout for desktop and mobile screens
- Processing happens in the browser; content is not sent to an app server

## Run locally

This is a static site—there is no build step or package installation required.

1. Open `index.html` in a modern browser.
2. Enter a URL or text in the input field.
3. Adjust the color and image size if desired.
4. Select **Download PNG** to save the code.

> QR-Gen loads the QR rendering library and fonts from CDNs, so an internet connection is needed when loading the page.

## Project structure

```text
qr-gen/
├── index.html   # Page structure and controls
├── styles.css   # Responsive visual design
├── app.js       # QR generation and PNG download behavior
└── README.md
```

## Implementation notes

- QR generation uses [qrcode.js](https://github.com/davidshimjs/qrcodejs) from cdnjs.
- The generated QR code uses high (`H`) error correction.
- PNG download works whether the renderer produces a canvas or image element.

## Browser support

Use a current version of Chrome, Edge, Firefox, or Safari with JavaScript enabled.
