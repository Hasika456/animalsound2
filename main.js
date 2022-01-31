function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Quj9UCgOW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}