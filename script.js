var mediaRecorder ;
var recBtn ;
var pauseResBtn ;
var stopBtn;
var localStream = null;

if (!navigator.mediaDevices.getUserMedia) {
    alert('navigator.mediaDevices.getUserMedia not supported on your browser, use the latest version of Firefox or Chrome');
    navigator.mediaDevices.getUserMedia({audio: true})
        .then(function (stream) {
            console.log('You let me use your mic!');
            localStream = stream;
            recBtn = document.getElementById("record");
        });


    function onBtnRecordClicked() {
        if (localStream == null) {
            alert('Could not get local stream from mic/camera');
        } else {
            recBtn.disabled = true;
            pauseResBtn.disabled = false;
            stopBtn.disabled = false;

        }
    }

    function onBtnStopClicked() {
        mediaRecorder.stop();
        recBtn.disabled = false;
        pauseResBtn.disabled = true;
        stopBtn.disabled = true;


    }

    function onPauseResumeClicked() {
        if (pauseResBtn.textContent === "Pause") {
            pauseResBtn.textContent = "Resume";
            mediaRecorder.pause();
            stopBtn.disabled = true;
            pauseResBtn = document.getElementById("pauseRes");

        } else {
            pauseResBtn.textContent = "Pause";
            mediaRecorder.resume();
            stopBtn.disabled = false;
        }
        recBtn.disabled = true;
        pauseResBtn.disabled = false;
        pauseResBtn = document.getElementById("pauseRec");
    }}

else
    stopBtn = document.getElementById("stop");

/*
function onStateClicked(){


    if(mediaRecorder != null && localStream != null ){
        console.log("mediaRecorder.state="+mediaRecorder.state);
        console.log("mediaRecorder.mimeType="+mediaRecorder.mimeType);
       console.log("mediaRecorder.audioBitsPerSecond="+mediaRecorder.audioBitsPerSecond);


    }

}
*/
