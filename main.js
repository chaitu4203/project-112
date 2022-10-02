navigator.mediaDevices.getUserMedia({video:true});
Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
document.getElementById("take_snapshot").onclick=function(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
    });
}

prediction_1="";
prediction_2="";

function speak(){
    var speech=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction_1;
    speak_data2="And the second prediction is"+prediction_2;
    var utterance=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterance);
}
document.getElementById("clap").onclick=function(){
    alert("Great try the other actions as well");

}
document.getElementById("thumbs1").onclick=function(){
    alert("Great try the other actions as well");
}
document.getElementById("thumbs2").onclick=function(){
    alert("Great try the other actions as well")
}

console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/MJk4D3Wtd/model.json",Modeloaded);

function Modeloaded(){
    console.log("Your model is loaded");
    
}
prediction_1="";
prediction_2="";

function speak(){
    var speech=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction_1;
    speak_data2="And the second prediction is"+prediction_2;
    var utterance=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    speech.speak(utterance);
}
document.getElementById("get_snapshot").onclick=function(){
    img=document.getElementById("captured_image");
    classifier.classify(img,getresults);
}
function getresults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
prediction_1=document.getElementById("result-name").innerHTML=result[0].label;
prediction_2=document.getElementById("result-name2").innerHTML=result[1].label;
speak();
        if(prediction_1=="Clap"){
            document.getElementById("emoji-pic").innerHTML="&#128079;";

        } 
         if(prediction_1=="Thumbs-up"){
            document.getElementById("emoji-pic").innerHTML="&#128077;";
        }
        if(prediction_1=="Thumbs-down"){
            document.getElementById("emoji-pic").innerHTML="&#128078;";
  }
        if(prediction_1=="Super"){
    document.getElementById("emoji-pic").innerHTML="&#128076;";
    }
     if(prediction_1=="One"){
        document.getElementById("emoji-pic").innerHTML="&#9757;";
    }
    if(prediction_1=="Two"){
        document.getElementById("emoji-pic").innerHTML="&#9996;";

    } 
     if(prediction_1=="Five"){
        document.getElementById("emoji-pic").innerHTML="&#9995;";
    }
    if(prediction_1=="Zero"){
        document.getElementById("emoji-pic").innerHTML="&#9994;";
    }
    if(prediction_2=="Clap"){
        document.getElementById("emoji-pic2").innerHTML="&#128079;";

    } 
     if(prediction_2=="Thumbs-up"){
        document.getElementById("emoji-pic2").innerHTML="&#128077;";
    }
    if(prediction_2=="Thumbs-down"){
        document.getElementById("emoji-pic2").innerHTML="&#128078;";
}
    if(prediction_2=="Super"){
document.getElementById("emoji-pic2").innerHTML="&#128076;";
}
 if(prediction_2=="One"){
    document.getElementById("emoji-pic2").innerHTML="&#9757;";
}
if(prediction_2=="Two"){
    document.getElementById("emoji-pic2").innerHTML="&#9996;";

} 
 if(prediction_2=="Five"){
    document.getElementById("emoji-pic2").innerHTML="&#9995;";
} 
if(prediction_2=="Zero"){
    document.getElementById("emoji-pic2").innerHTML="&#9994;";
}

    }
    
}


    
