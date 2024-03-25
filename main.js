var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

function start() {
    document.getElementById("text-box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)
    var Content = event.results[0][0].transcript;

    document.getElementById("text-box").innerHTML = Content
    console.log(Content);
    if (Content == "tire uma selfie") {
        console.log("tirando Selfie")
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tirando sua selfie em 5 segundos"
    //speak_data=document.getElementById("text-box").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera)
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000)
}

camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML =
            '<img id="Minha_img" src="' + data_uri + '"/>'
    })
}

function save() {
    link = document.getElementById("link");
    image=document.getElementById("Minha_img").src
    link.href=image;
    link.click()
}