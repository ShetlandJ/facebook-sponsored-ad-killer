const killAds = () => {
    spans = document.querySelectorAll('[data-content="S"]')

    spans.forEach(span => {

        if (span.offsetHeight > 0) {

            parentElement = span.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

            parentElement.parentNode.remove(parentElement);
        }
    })
}

killAds();
setInterval(() => killAds(), 4000);