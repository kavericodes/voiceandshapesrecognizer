x = 0;
y = 0;
cir = "";
rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is loaded please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as"+content;
    if (content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing circle";
        cir = "arpita";
    }

    if (content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        rectangle = "arpita";
    }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if (cir == "arpita"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        cir = "";
    }
    if (rectangle == "arpita"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        rectangle = "";
    }
}