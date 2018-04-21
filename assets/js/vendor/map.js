        /*google map*/
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', mapInit);

        function mapInit() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 14,

                scrollwheel: false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(9.3173519, 76.6172611), // New York

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -100
                        },
                        {
                            "gamma": 0.5
                        }
                    ]
                }]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('googlemap');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(9.3173519, 76.6172611),
                map: map,
                title: 'Snazzy!'
            });
        }
