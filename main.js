nose_x = 0;
 nose_y = 0; 
 difference = 0; 
 right_wrist_X = 0;
 left_wrist_X = 0; 
 function setup() 
 { 
     video = createCapture(VIDEO); 
     video.size(550, 500); 
     canvas = createCanvas(550, 550); 
     canvas.position(560,150); 
     poseNet = ml5.poseNet(video, modelLoaded); 
     poseNet.on('pose', gotPoses); 
    } 
    function modelLoaded() 
    { 
        console.log('Model Loaded! Yay!');
     } 
     function_wrist_X = results[0].pose.wrist.x;
             left_wrist_X = results[0].pose.wrist.x;
              gotPoses(results) 
     { if(results.length > 0) 
        {
             console.log(results);
             nose_x = results[0].pose.nose.x;
             nose_y = results[0].pose.nose.y;
             console.log("nose x = " +nose_x);
             console.log("nose y = " +nose_y);
             ri
             difference = floor(left_wrist_X - right_wrist_X);
             console.log("Left wrist x  = " +left_wrist_X);
             console.log("Right wrist x = " +right_wrist_X);
             console.log("Difference between left and right = "+difference);
            }
        }
        function draw() 
        {
             background('#33FFFF'); 
             document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference+"px";
             fill('#3dffd5');
             stroke('#88FFFF'); 
             square(noseX, noseY, difference); 
            }