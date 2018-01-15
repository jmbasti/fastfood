
  function initMap() {
    var uk = {lat: 54.2233168, lng: -2.5184904};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uk
    });
    var marker = new google.maps.Marker({
      position: uk,
      map: map
    });
  }