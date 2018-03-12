<template>
    <div class="google-map">
        <slot></slot>
    </div>
</template>

<script>
    import GMaps from 'gmaps';
    import gmarker from './gmarker.vue';
    export default {
        components: {
            gmarker
        },
        data() {
            return {
                map: undefined,
                styles: [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            }
        },
        props: {
            id: {
                type: String,
                default: 'map'
            },
            zoom: {
                type: String,
                default: "15"
            },
            center: {
                type: String,
                default: '54.344559, 18.582926'
            }
        },
        computed: {
            lat() {
                return this.$props.center.split(', ')[0];
            },
            lng() {
                return this.$props.center.split(', ')[1];
            },
            markers() {
                return this.$children;
            }
        },
        methods: {
            addGoogleMapsScript() {
                return new Promise((resolve, reject) => {
                    let apikey = document.getElementById('GoogleMapsApiKey').getAttribute('content');
                    let s = document.createElement('script');
                    s.setAttribute('src', `http://maps.google.com/maps/api/js?key=${apikey}`);
                    document.body.appendChild(s);
                    setTimeout(resolve, 1000);
                });
            },
            initMap() {
                this.map = new GMaps({
                    el: this.$el,
                    lat: this.lat,
                    lng: this.lng,
                    zoom: Number(this.$props.zoom)
                });
                this.map.addStyle({
                    styledMapName: "Styled Map",
                    styles: this.styles,
                    mapTypeId: "map_style"
                })
                this.map.setStyle("map_style");
                let bounds = [];
                this.markers.forEach(marker => {
                    this.map.addMarker(marker.data);
                    bounds.push(new google.maps.LatLng(marker.lat, marker.lng));
                })
                if (this.markers.length > 1) {
                    this.map.fitLatLngBounds(bounds);
                }
            }
        },
        mounted() {
            this.addGoogleMapsScript().then(() => {
                this.initMap();
            });
        }
    }
</script>