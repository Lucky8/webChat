(function() {
    //set video element
    var video = document.getElementById('video'),
    vendorURL = window.URL || window.webkitURL;

    navigator.getMedia = navigator.getUserMedia || 
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

   //capture video                      
   navigator.getMedia({
       video: true,
       audio: true
   }, function(stream){

        //pass stream to video element
        /*const vendorURL = window.URL.createObjectURL(stream);*/

        video.srcObject=stream;
        video.play();

        console.log(stream);//logs stream information 

   },function(error){
        //if error occurs
        console.log("An error occured! " + err);
   });


})();