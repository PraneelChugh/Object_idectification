img = "";
status1 = "";
object = [];

function preload(){
    img = loadImage('DOG_CAT.jpg')
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
        for(i = 0; i<object.length;i++){
            document.getElementById("status").innerHTML = "Status : Detecting Objects";

            fill("#FF0000");
            percent = floor(object[i].confidence*100);
            text(object[i].label + "" + percent+"%",object[i].x + 15,object[i].y + 15) ;
            nofill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
    fill("#FF0000");
    text("Dog",45,75);
    nofill("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text('Cat',320,120);
    nofill();
    stroke("#FF0000");
    rect(300,90,270,320);
}