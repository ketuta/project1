    pause.onclick = function() {
        if(MediaRecorder.state === "recording") {
            mediaRecorder.pause();
            console.log("recording paused");
            // recording paused
        } else if(MediaRecorder.state === "paused") {
            mediaRecorder.resume();
            // resume recording
        }
    }