function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.20168725978661, lng: 10.6660639 },
        zoom: 14
    });

    let marker = new google.maps.Marker({
        position: { lat: 47.20168725978661, lng: 10.6660639 },
        map: map
    });
}