var map;
function displayPosition(position) {
    
   map = new google.maps.Map(document.getElementById("map"), {
        center:  new google.maps.LatLng(position.coords.latitude,  position.coords.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

   new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude,  position.coords.longitude),
        map: map,
        title: "Vous êtes ici!"
    });
    
}

function handleError(error) {
    var info = "Erreur lors de la geolocalisation : ";
    switch(error.code) {
        case error.TIMEOUT:
            info += "Timeout !";
            break;
        case error.PERMISSION_DENIED:
            info += "Vous n'avez pas donné la permission";
            break;
        case error.POSITION_UNAVAILABLE:
            info += "La position n'a pas pu être déterminée";
            break;
        case error.UNKNOWN_ERROR:
            info += "Erreur inconnue";
            break;
    }
    alert(info);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition, handleError);
} else {
    alert("Votre navigateur ne prend pas en compte la geolocalisation HTML5");
}