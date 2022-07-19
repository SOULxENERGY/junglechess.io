
import c from "./index.js";
import move from "./move.js";



class BlackPawn{
    constructor(x,y,width,height,image){
        this.x=x;
        this.y=y;
       // this.rad=rad;
       this.width=width;
       this.height=height;
       this.image=image;
       this.gapX=this.width-5;
       this.gapY=this.height-5;
      //  console.log(this.x);
       // console.log(this.y,this.rad);
        this.team="black";
        this.firstMoveCompleted="no";
        this.validArr=[];
        c.updateBox(this.x,this.y,this.team,"yes");
    
    }

    draw(){

        this.validArr= move.pawnMove.black(this.x,this.y,this.firstMoveCompleted);

        //console.log(c.ctx1);
        c.ctx1.save();
        c.ctx1.beginPath();
        c.ctx1.fillStyle=this.team;
 
        c.ctx1.fillRect(this.x+this.gapX,this.y+this.gapY,this.width-this.gapX*2,this.height-this.gapY*2);
        c.ctx1.drawImage(this.image,this.x,this.y,this.width,this.height);
  c.ctx1.restore();
  


    }

    update(x,y){
       
        let ret="no";
        

       this.validArr.forEach((obj)=>{
        let o= c.findBox(obj.y,obj.x);

        

       

        if(o.x==x && o.y==y){
            if(c.updateBox(this.x,this.y,this.team,"no")=="completed"){
                this.x=x;
                this.y=y;
                ret="completed";
        
                c.updateBox(x,y,this.team,"yes");
                if(y==1){
                    c.makeCanvasInvisible();
                    c.visibility.addEventListener("click",()=>{
                        c.replaceItemfromAnArray(this,this.team,"white");
                    })
                   
                }
        
            };
    
    this.firstMoveCompleted="yes";


        }



       })
         



       return ret;


    }















};



class WhitePawn{
    constructor(x,y,width,height,image){
        this.x=x;
        this.y=y;
       // this.rad=rad;
       this.width=width;
       this.height=height;
       this.image=image;
       this.gapX=this.width-5;
       this.gapY=this.height-5;
        //console.log(this.x);
        //console.log(this.y,this.rad);
        this.team="white";
        this.firstMoveCompleted="no";
        
        this.validArr=[];
        c.updateBox(this.x,this.y,this.team,"yes");
    
    }

    draw(){
        //console.log(c.ctx1);
        this.validArr= move.pawnMove.white(this.x,this.y,this.firstMoveCompleted);
        c.ctx1.save();
        c.ctx1.beginPath();
        c.ctx1.fillStyle=this.team;
 
        c.ctx1.fillRect(this.x+this.gapX,this.y+this.gapY,this.width-this.gapX*2,this.height-this.gapY*2);
        c.ctx1.drawImage(this.image,this.x,this.y,this.width,this.height);
  c.ctx1.restore();


    }

    update(x,y){
        let ret="no";
       // console.log(this.validArr);
        this.validArr.forEach((obj)=>{
            let o= c.findBox(obj.y,obj.x);
    
           
    
            if(o.x==x && o.y==y){
                if(c.updateBox(this.x,this.y,this.team,"no")=="completed"){
                    this.x=x;
                    this.y=y;
                    ret="completed";
            
                    c.updateBox(x,y,this.team,"yes");
                    if(y==660.75){

                        c.makeCanvasInvisible();
                        c.visibility.addEventListener("click",()=>{
                            c.replaceItemfromAnArray(this,this.team,"black");
                        })

                       
                    }
            
                };
        
        this.firstMoveCompleted="yes";
    
    
            }
    
    
    
           });
           

           return ret;


    }















};










export default {BlackPawn,WhitePawn};