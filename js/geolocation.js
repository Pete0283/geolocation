document.addEventListener("DOMContentLoaded", function(){
   
     
    if( navigator.geolocation ){
        
        var params = {enableHighAccuracy: true, timeout:3600000000000, maximumAge:60000};
        
        navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params );
    
    }else{        
        alert("Uh Oh! It looks like your browser does not support location based services.")
    }    
});















function reportPosition( position ){ 
    
    var canvas = document.createElement('canvas');
    
    var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
canvas.setAttribute ("width", "400px");
    canvas.setAttribute ("height", "400px");
    canvas.setAttribute ("id", "myCanvas");
    
canvas.width  = 400;
canvas.height = 400;
canvas.style.border   = "1px solid";

    var img = document.createElement("img");
  img.setAttribute ("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:blue%7C"  + position.coords.latitude + "," + position.coords.longitude);
    img.setAttribute ("width", "400px");
    img.setAttribute ("height", "400px");
    
    
    var context = canvas.getContext('2d');
    var getcanvas = document.getElementById("myCanvas");
    
    document.body.appendChild(canvas);
    myCanvas.appendChild(img);
    
img.onload = function(){
    context.drawImage(img, 0,0);
    
}
    
};

    
function gpsError ( error ){
    var errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
    };
alert("Error: " + errors[error.code]);
};





        