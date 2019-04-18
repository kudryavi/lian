ymaps.ready(init);

    function init(){  

        var myMap = new ymaps.Map('map', {
            center: [40.672500, -73.832951],
            zoom: 15,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        var placemark = new ymaps.Placemark([40.672500, -73.832951], {
            hintContent: [
                '<div class="map__mark">',
                '<div class="map__address map__address--color">Mulitix Big Wordpress Theme</div>',
                '<div class="map__address">110-00 Rockaway Blvd</div>',
                '<div class="map__address">South Ozone Park, NY 11420</div>',
                '</div>'
            ].join('')
        },
        {
            hintOffset: [50 -250]
        });

        myMap.geoObjects.add(placemark);
    }