function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0kbU3Xav0/model.json',modelready)
}

function modelready(){
    classifier.classify(gotresult)
}

function gotresult(error,results){
    
}
