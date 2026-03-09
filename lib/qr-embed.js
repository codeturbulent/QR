/**
 * QR Suite Embed Helper
 * This script finds any <img> with the class 'qr-api' and converts it into 
 * a functional QR code using the local API.
 */
(function() {
    function initQR() {
        const qrImages = document.querySelectorAll('img.qr-api');
        
        qrImages.forEach(img => {
            // Get the src which points to the api/index.html
            const apiSrc = img.getAttribute('src') || img.getAttribute('data-src');
            if (!apiSrc) return;

            // Create an iframe to execute the QR logic
            const iframe = document.createElement('iframe');
            
            // Pass all attributes from the img to the iframe (width, height, etc)
            iframe.src = apiSrc;
            iframe.width = img.getAttribute('width') || 300;
            iframe.height = img.getAttribute('height') || 300;
            
            // Styling to make it look like a clean image
            iframe.style.border = 'none';
            iframe.style.overflow = 'hidden';
            iframe.style.display = 'inline-block';
            iframe.style.verticalAlign = 'middle';
            iframe.setAttribute('scrolling', 'no');
            
            // Replace the image tag with our new iframe
            img.replaceWith(iframe);
        });
    }

    // Run when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQR);
    } else {
        initQR();
    }
})();
