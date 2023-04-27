// zoombox customize
zoombox.option({
    backgroundOpacity: 0.9,
    imageTransTimimg: '.5s',
    slideShowInterval: 2,
    lockBodyScroll: true,
    enableZoomButton: true,
    enableScrollZoom: 3,
    hideWatermark: false,
    enableTouchControl: true,
    enableNavigation: true,
    enableSlideShow: true,
    hasRoot: false,
});


const listItems = ['exp1', 'exp2', 'exp3'];
listItems.map(heading => {
    let dom = document.getElementById(heading);

    dom.addEventListener('click', function () {
        let placeholder = this.nextElementSibling;
    
        while (placeholder) {
            if (placeholder.classList.contains('panel_text')) {
                placeholder.classList.toggle('hideme');
            }
            placeholder = placeholder.nextElementSibling;
        }
    })
})