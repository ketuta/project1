record.onclick= function(){
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("started")
}