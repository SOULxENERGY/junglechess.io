


let ctx=undefined;
let canvas=undefined;


function init(c,can){

    ctx=c;
    canvas=can;
    
    
}





function drawGrid(){
 for(let i=0; i<=canvas.width;i+=canvas.width/8){
ctx.beginPath();
ctx.moveTo(i,0);
ctx.lineTo(i,canvas.height);
ctx.stroke();



 }

 for(let i=0;i<=canvas.height;i+=canvas.height/8){
    ctx.beginPath();
ctx.moveTo(0,i);
ctx.lineTo(canvas.width,i);
ctx.stroke();




 }


};


function scaleX(val){
return {x:val*((canvas.width)/8),

X:val
};



};
function scaleY(val){
    return {y:val*((canvas.height)/8),
    
    Y:val
    };
    
    
    
    };





export default {init,drawGrid,scaleX,scaleY};