baby =  [ ];
animal= [ ];
statu=" ";


function preload(){
    song=loadSound("music.mp3");
}

function start(){
    detective=ml5.objectDetector("cocossd",loaded);
    document.getElementById("sta").innerHTML= statu;
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    vid.hide();
}

function loaded(){
    console.log("model chalu"); 
    statu="loading 00000";
}

function getresult(error,results){
    if (error) {
        console.log(error);
    } 
        console.log(results);
        animal=results;
}

function draw(){
    
    image(video,0,0,400,400);

    if (statu != " "){
        
        detective.detect(video,getresult);

        for(i=0; i<animal.length; i++){
              
            if ( animal == " person " ) {

                r = random(255);
                g=random(255);
                b= random(255);
                
                fill(r,g,b);
                stroke(r,g,b);
                noFill();
        
                pers=floor(animal[i].confidence*100);
        
                rect( animal[i].x , animal[i].y,animal[i].width,animal[i].height );
                text(animal[i].label + " "+ pers + " % " ,animal[i].x +10 ,animal[i].y+ 10 );
            
                statu=" BABY FOUND  "
                document.getElementById("sta").innerHTML= statu;
                document.getElementById("noo").innerHTML= " Number Of Objects = " + animal.length;

            } else{
                 
                r = random(255);
                g=random(255);
                b= random(255);
                
                fill(r,g,b);
                stroke(r,g,b);
                noFill();
        
                pers=floor(animal[i].confidence*100);
        
                rect( animal[i].x , animal[i].y,animal[i].width,animal[i].height );
                text(animal[i].label + " "+ pers + " % " ,animal[i].x +10 ,animal[i].y+ 10 );
            
                statu=" BABY NOT FOUND  "
                document.getElementById("sta").innerHTML= statu;
                document.getElementById("noo").innerHTML= " Number Of Objects = " + animal.length;
                song.play();
                song.setVolume(1);
                song.rate(1);

            } 
    
        }

    }


    
}
//order for giving a shape it's things === "( x , y , width, height )"//