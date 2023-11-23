document.addEventListener('DOMContentLoaded', function() {
    const thankyouSection = document.getElementById('thankyou-section');

    function fadeInElement(element) {
        let opacity = 0;
        const fadeInInterval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 100);
    }

    fadeInElement(thankyouSection);
});
