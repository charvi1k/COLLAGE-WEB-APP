var SpeechRecongnition = window.webkitSpeechRecognition;

var recognition = new SpeechRecongnition();

var text_box = document.getElementById("text_box");

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    text_box.innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("Taking selfie ---");
        speak();
 }

}

function speak(){
   var synth = window.speechSynthesis;
   var speak_data = "Taking your Selfie in 5 seconds";
   var utter_this = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_this);
   Webcam.attach(camera);

   setTimeout(function(){
       img_id = "Selfie1";
       take_selfie();
       var speak_data = "Taking your Selfie in 5 seconds";
   var utter_this = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_this);
   }, 5000);
 }

 setTimeout(function(){
    img_id = "Selfie2";
    take_selfie();
    var speak_data = "Taking your Selfie in 5 seconds";
var utter_this = new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);

}, 5000);

setTimeout(function(){
    img_id = "Selfie3";
    take_selfie();
    var speak_data = "Taking your Selfie in 5 seconds";
var utter_this = new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
}, 5000);



 camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height:350,
    image_format: 'png',
    png_quality:90
});

function take_selfie()
{
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id == "Selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
            }
            if(img_id == "selfie3"){
                document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
                }
});
}