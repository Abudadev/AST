//https://teachablemachine.withgoogle.com/models/2sBFxqQfu/model.json

//Background Noise

//tiger

//dog

//fox

//cat

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2sBFxqQfu/model.json", modelsuccess)
}

function modelsuccess(){
    classifier.classify(Gotresults);
    console.log("Your Model is working");
}

function Gotresults(){
    
}
