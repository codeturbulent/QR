# QR Suite

A comprehensive, frontend-only toolkit for generating and scanning QR codes.

## Project Structure

-   `/` - Main landing page (entry point)
-   `/api/` - URL-based QR generation endpoint
-   `/generator/` - Visual styling tool for custom QR codes
-   `/scanner/` - Browser-based QR code scanner
-   `/lib/` - Shared libraries (`qr-code-styling`, `qr-scanner`)

## Features

### 🎨 QR Stylist
A visual interface to create beautiful QR codes. Customize:
- Colors and Gradients
- Dot styles (rounded, classy, etc.)
- Corner styles
- Custom logos/images

### 🚀 QR API
Generate QR codes by simply adding query parameters to the URL.
Example: `api/index.html?data=Hello&color=%23facc15`

**Parameters:**
- `data`: Content of the QR
- `color`: Hex color of dots
- `bg`: Background color (or `transparent`)
- `size`: Size in pixels
- `dots`: Style (`square`, `rounded`, `dots`, `classy`, `classy-rounded`, `extra-rounded`)
- `corners`: Corner style (`square`, `extra-rounded`, `rounded`, `dot`)

### 📷 QR Scanner
Scan QR codes using:
- Real-time camera feed
- Image file upload

## Technology
- [qr-code-styling](https://github.com/Syk93/qr-code-styling)
- [qr-scanner](https://github.com/nimiq/qr-scanner)

## How to Run
Simply open `index.html` in any modern web browser. For camera features (Scanner), you may need to serve the files via a local server (e.g., `npx serve .`) or host them on an HTTPS-enabled domain.
