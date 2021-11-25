let cam = document.getElementById("cam")
let media = navigator.mediaDevices.getUserMedia

if (media) {
    navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
    })

    
    .then( function(stream){
        cam.srcObject =stream;
    })

    .catch( function(error){
        alert("Sorry! There is an error");
    })
    
}
