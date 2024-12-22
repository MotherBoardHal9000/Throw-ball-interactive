let circle = document.getElementById("circle");
let stageW = window.innerWidth; //보고있는 윈도우창의 가로값
let stageH = window.innerHeight;//보고있는 윈도우창의 세로값
let isDrag = false;
let preX = 0;
let preY = 0;
let vx = 0;
let vy = 0;
let isFlick = false;


circle.style.left = stageW / 2 -100 + "px";//position:absolute 성질대로 '변'을 기준으로 자리잡게됨 추가조정이 따라서 필요함 윈도우창의 절반에 왼쪽 변이 위치됨
circle.style.top = stageH / 2 -100 + "px";
circle.addEventListener("mousedown", onDown);//onDown이라는 함수를 호출한다.
window.addEventListener("mousemove", onMove);//onMove라는 함수를 호출한다.
window.addEventListener("mouseup", onUp);



function onUp(addEventListener){
isDrag = false;
isFlick = true;
window.requestAnimationFrame(onAnimate);

}




function onMove(addEventListener){
    if(isDrag == true){
        if ( circle.offsetLeft < 0 ){circle.style.left = "0px";}
        if ( circle.offsetTop < 0 ){circle.style.top = "0px";}
        if ( circle.offsetLeft + 200 > stageW) {circle.style.left = stageW - 200 + "px";}
        if ( circle.offsetTop + 200 >stageH) {circle.style.top = stageH - 200 + "px";}


        vx = addEventListener.pageX - preX;
        vy = addEventListener.pageY - preY;
        circle.style.left = circle.offsetLeft + vx + "px";
        circle.style.top = circle.offsetTop + vy + "px"; //현재 서클의 위치값//
        preX = addEventListener.pageX;
        preY = addEventListener.pageY;
}}



function onDown(addEventListener){ 
    isFlick = false;
    isDrag = true;
    preX = addEventListener.pageX;
    preY = addEventListener.pageY;
}


function onAnimate(){

    if (isFlick == true){
        if(circle.offsetLeft < 0){ vx = vx * -1;} //화면 밖으로 나가면 음수 화면 안으로 들어올 수 있게 -1을 곱해서 양수로 바꿈//
        if(circle.offsetLeft + 200 > stageW){ vx = vx * -1; }
        if(circle.offsetTop < 0){ vy = vy * -1;} //화면 밖으로 나가면 음수 화면 안으로 들어올 수 있게 -1을 곱해서 양수로 바꿈//
        if(circle.offsetTop + 200 > stageH){ vy = vy * -1; }
        vx = vx * 0.97;
        vy = vy * 0.97;
        console.log(vx);
        circle.style.left = circle.offsetLeft + vx + "px";
        circle.style.top = circle.offsetTop + vy + "px";
        window.requestAnimationFrame(onAnimate);
        console.log("animate");
    }



  
}
