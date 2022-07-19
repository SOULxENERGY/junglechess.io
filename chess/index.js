import Box from "./box.js";
import grid from "./grid.js";
import pawn from "./pawn.js";
import King from "./king.js";
import Queen from "./queen.js";
import Ghora from "./ghora.js";
import Montri from "./montri.js";
import Nouka from "./nouka.js";




const tiger=document.getElementById("tiger");
const tigersound=document.getElementById("tigersound");
const lion=document.getElementById("lion");
const lionsound=document.getElementById("lionsound");
const tortoise=document.getElementById("tortoise");
const wolf=document.getElementById("wolf");
const wolfsound=document.getElementById("wolfsound");
const elephant=document.getElementById("elephant");
const elephantsound=document.getElementById("elephantsound");
const horse=document.getElementById("horse");
const horsesound=document.getElementById("horsesound");
const selectAudio=document.getElementById("select");
const canvas1= document.getElementById("canvas1");
const ctx1= canvas1.getContext("2d");
const promote=document.getElementById("promote");
const promoteform=document.getElementById("promoteform");
let transforminto="queen";
const visibility= document.getElementById("visibility");
promoteform.addEventListener("change",()=>{
transforminto=promoteform.value;
   
});

function makeCanvasInvisible(){
  // canvas1.style.display="none";
   promote.style.display="block";


};



export default {canvas1,ctx1,updateBox,findBoxReverse,collisionStatus,findBox,replaceItemfromAnArray,tigersound,lionsound,wolfsound,elephantsound,horsesound,visibility,makeCanvasInvisible};
if(window.innerWidth>window.innerHeight){
   canvas1.width=window.innerHeight;
   canvas1.height=window.innerHeight;


}else if(window.innerHeight>window.innerWidth){
   canvas1.width=window.innerWidth;
   canvas1.height=window.innerHeight*0.7;

}else if(window.innerHeight==window.innerWidth){
   canvas1.width=window.innerWidth;
   canvas1.height=window.innerHeight*0.8;

}

let blackPieces=[];
let whitePieces=[];
const turn=["white","black"];
let selectedPiece="none";

let turnModifier=0
const boxArray=[];
const color=["white","black"];
let colorNO=0;

let canvas1Left=canvas1.getBoundingClientRect().x;
let canvas1Top=canvas1.getBoundingClientRect().y;

//all about grid and boxes initialization
grid.init(ctx1,canvas1);
grid.drawGrid();

let y=0;
function fillBoxArray(){
   for(let p=0;p<grid.scaleY(8).y;p=p+grid.scaleY(1).y){
   boxArray.push([]);

      for(let i= 0; i<grid.scaleX(8).x;i=i+grid.scaleX(1).x){
         
   //10 6ilo kintu gap
         boxArray[y].push(new Box(i,p,1,grid.scaleX(1).x,grid.scaleY(1).y,color[colorNO]));
         colorNO=(colorNO+1)%2;
   
   
      }
      colorNO=(colorNO+1)%2;
   
   y++;
   };




};




function drawBoxes(){
   boxArray.forEach((obj)=>{
      obj.forEach((o)=>{
         o.draw();
      })

      
   })

};

function findBox(y,x){

   return{
      x:boxArray[y][x].x,
      y:boxArray[y][x].y,
      w:boxArray[y][x].w,
      h:boxArray[y][x].h,
      

   }
};

function findBoxReverse(x,y){
   let ret;
for(let i=0;i<boxArray.length;i++){
   for(let p=0;p<boxArray[i].length;p++){
         if(boxArray[i][p].x==x && boxArray[i][p].y==y){


            ret={
               y:i,
               x:p,

            }
         }


   }

};

return ret


};

function collisionStatus(y,x){
//y and x should notbe in pixels it should be position in boxArray
let ret;
let theBox;
if(x>=0 && x<=boxArray[0].length-1 && y>=0 && y<=boxArray.length-1){
   theBox=boxArray[y][x];
  // console.log(theBox);

   if(theBox.blackCollision=="no" && theBox.whiteCollision=="no"){

      ret="blank";
   }else if(theBox.blackCollision=="no" && theBox.whiteCollision=="yes"){
   
      ret="white";
   }else if(theBox.blackCollision=="yes" && theBox.whiteCollision=="no"){
      ret="black";
   }

}else{
   ret="invalid";
}







return {main:ret,x:x,y:y};




};




function updateBox(x,y,team,stateMent){
      //x and y is in pixel
let gg= findBoxReverse(x,y);
if(team=="white"){
boxArray[gg.y][gg.x].whiteCollision=stateMent;
}else if(team=="black"){
   boxArray[gg.y][gg.x].blackCollision=stateMent;

};

return "completed";

};







console.log(boxArray);







fillBoxArray();
drawBoxes();

//completed all about grid and boxes

function SelectPiece(e){
   
  
      let ret="no";
   

      if(turn[turnModifier]=="white"){
         
            whitePieces.forEach((o)=>{
               if (e.x-canvas1Left < o.x + findBox(0,0).w &&
                  e.x-canvas1Left + 1 > o.x &&
                  e.y-canvas1Top < o.y + findBox(0,0).h &&
                  1 + e.y-canvas1Top > o.y) {
                  // collision detected!
                 // console.log(o);
                  ret= o;
                 
               } else {
                  // no collision
                  
                  
                  
               }



            })

            return ret;


      }else if(turn[turnModifier]=="black"){
         blackPieces.forEach((o)=>{
            if (e.x-canvas1Left < o.x + findBox(0,0).w &&
            e.x-canvas1Left + 1 > o.x &&
            e.y-canvas1Top < o.y + findBox(0,0).h &&
            1 + e.y-canvas1Top > o.y) {
            // collision detected!
            //console.log(o);
            ret=o;
           
         } else {
            // no collision
            
            
            
         }









         })




         return ret;



      };





   
};

function checkClickOnBoxes(e){

   let ret="no";
   boxArray.forEach((obj)=>{
      obj.forEach((o)=>{
         if (e.x-canvas1Left < o.x + o.w &&
            e.x-canvas1Left + 1 > o.x &&
            e.y-canvas1Top < o.y + o.h &&
            1 + e.y-canvas1Top > o.y) {
            // collision detected!
           
            ret= o;
           
         } else {
            // no collision
            
            o.update(o.realColor);
            
         }
   
   
   
      })
    
   
   
   
   
   });

   return ret;
};

function collisionDetectionWithOpponent(o){
    let ret="no";
    if(turn[turnModifier]=="black"){

         whitePieces.forEach((obj)=>{
            if (obj.x < o.x + findBox(0,0).w &&
               obj.x + findBox(0,0).w > o.x &&
               obj.y < o.y + findBox(0,0).h &&
               findBox(0,0).h + obj.y > o.y) {
               // collision detected!
               ret=obj;
           } else {
               // no collision
               
           }




         })



    }else if(turn[turnModifier]=="white"){

      blackPieces.forEach((obj)=>{
         if (obj.x < o.x + findBox(0,0).w &&
            obj.x + findBox(0,0).w > o.x &&
            obj.y < o.y + findBox(0,0).h &&
            findBox(0,0).h + obj.y > o.y) {
            // collision detected!
            ret=obj;
        } else {
            // no collision
            
        }



      })


    }


    return ret;





};

function eleminateOpponent(collision){

   

   
   
   if(collision!=="no"){
      
      if(turn[turnModifier]=="white"){
         updateBox(collision.x,collision.y,"black","no");

         
        blackPieces= blackPieces.filter((obj)=>{
         
            return(obj.x!==collision.x || obj.y!==collision.y);
         });
         

        // blackPieces=ret;
         

      }else if(turn[turnModifier]=="black"){
         updateBox(collision.x,collision.y,"white","no");
         whitePieces= whitePieces.filter((obj)=>{
            
            return(obj.x!==collision.x || obj.y!==collision.y);



         })
         
        // whitePieces=ret;
         

      }

   }


   

}


















function initPawn(){
for(let i=0;i<8;i++){
whitePieces.push(new pawn.WhitePawn(findBox(1,i).x,findBox(1,i).y,findBox(1,i).w,findBox(1,i).h,tortoise));
blackPieces.push(new pawn.BlackPawn(findBox(6,i).x,findBox(6,i).y,findBox(6,i).w,findBox(6,i).h,tortoise));

}};

function initNouka(){
   
   for(let i=0;i<8;i=i+7){
      whitePieces.push(new Nouka(findBox(0,i).x,findBox(0,i).y,findBox(0,i).w,findBox(0,i).h,elephant,"white","black"));
      blackPieces.push(new Nouka(findBox(7,i).x,findBox(7,i).y,findBox(7,i).w,findBox(7,i).h,elephant,"black","white"));
      
   }





};

function initGhora(){
   for(let i=1;i<7;i=i+5){
      whitePieces.push(new Ghora(findBox(0,i).x,findBox(0,i).y,findBox(0,i).w,findBox(0,i).h,horse,"white","black"));
      blackPieces.push(new Ghora(findBox(7,i).x,findBox(7,i).y,findBox(7,i).w,findBox(7,i).h,horse,"black","white"));


   }




};


function initMontri(){
   for(let i=2;i<6;i=i+3){
      whitePieces.push(new Montri(findBox(0,i).x,findBox(0,i).y,findBox(0,i).w,findBox(0,i).h,wolf,"white","black"));
      blackPieces.push(new Montri(findBox(7,i).x,findBox(7,i).y,findBox(7,i).w,findBox(7,i).h,wolf,"black","white"));


   }



};

function initQueen(){
   whitePieces.push(new Queen(findBox(0,3).x,findBox(0,3).y,findBox(0,3).w,findBox(0,3).h,tiger,"white","black"));
   blackPieces.push(new Queen(findBox(7,3).x,findBox(7,3).y,findBox(7,3).w,findBox(7,3).h,tiger,"black","white"));

};
function initKing(){
   whitePieces.push(new King(findBox(0,4).x,findBox(0,4).y,findBox(0,4).w,findBox(0,4).h,lion,"white","black"));
   blackPieces.push(new King(findBox(7,4).x,findBox(7,4).y,findBox(7,4).w,findBox(7,4).h,lion,"black","white"));


};


function initAllPieces(){
   initPawn();
   initNouka();
   initGhora();
  initMontri();
  initQueen();
   initKing();
};


initAllPieces();

function replaceItemfromAnArray(o,team,opponent){

if(team=="black"){
   let index = blackPieces.indexOf(o);
   if (index !== -1) {
      if(transforminto=="queen"){
         blackPieces[index] = new Queen(o.x,o.y,o.width,o.height,tiger,team,opponent);
      }else if(transforminto=="horse"){
         blackPieces[index] = new Ghora(o.x,o.y,o.width,o.height,horse,team,opponent);

      }
     
    }


}else if(team=="white"){
   let index = whitePieces.indexOf(o);
   if (index !== -1) {

      if(transforminto=="queen"){
         whitePieces[index] = new Queen(o.x,o.y,o.width,o.height,tiger,team,opponent)
      }else if(transforminto=="horse"){
         whitePieces[index] = new Ghora(o.x,o.y,o.width,o.height,horse,team,opponent);

      }
      
    }


}
   

 




};






















//let g=new pawn.BlackPawn(findBox(0,1).x,findBox(0,1).y,findBox(0,0).w/2);

document.addEventListener("click",(e)=>{

   let click= checkClickOnBoxes(e);
   let letSelect=SelectPiece(e);

   if(SelectPiece(e)!=="no"){
      if(promote.style.display=="none"){
         selectAudio.play();
         selectedPiece=letSelect;
         
         click.update("yellow");
         selectedPiece.validArr.forEach((o)=>{
            boxArray[o.y][o.x].update("green");
   
         });


      }
    
      //console.log(colochange,"colo");
      
     // console.log(selectedPiece);
      
   }else if(selectedPiece !=="none" && letSelect =="no" && click!=="no"){

      

     if( selectedPiece.update(click.x,click.y,click.rad/2)=="completed"){
      let collision=collisionDetectionWithOpponent(click);

      eleminateOpponent(collision);

      turnModifier=(turnModifier+1)%2;
      selectedPiece="none";


     };

      

      
      //console.log(blackPieces);

     


      
   
   
   }
   
   
animate();
   
   
   });



function animate(){
ctx1.clearRect(0,0,canvas1.width,canvas1.height);
drawBoxes();

//g.draw();
grid.drawGrid();
whitePieces.forEach((obj)=>{
   obj.draw();
});

blackPieces.forEach((obj)=>{

   obj.draw();
})

  // requestAnimationFrame(animate);
};
animate();

document.getElementById("printBox").addEventListener("click",()=>{

   console.log(boxArray);
})





//pawn1.draw();






















