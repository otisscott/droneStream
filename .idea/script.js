
$(document).ready(function()) {

    $.ajax({
        url: ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAFtlrU91318DZ8cBgzgxlo4G4RhCG_6xY&callback=myMap"],
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {console.log(result)},
        error: function () {alert('Failed!');}
    });
}

