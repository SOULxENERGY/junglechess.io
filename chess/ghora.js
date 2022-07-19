import c from "./index.js";
import move from "./move.js";


class Ghora{
    constructor(x,y,width,height,image,team,opponent){
        this.x=x;
        this.y=y;
        this.team=team;
        //this.rad=rad;
        this.width=width;
        this.height=height;
        this.image=image;
        this.gapX=this.width-5;
        this.gapY=this.height-5;
        this.validArr=[];
        this.opponent=opponent;
        c.updateBox(this.x,this.y,this.team,"yes");



    }

    draw(){
        this.validArr= move.horseMove(this.x,this.y,this.opponent);
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
                c.horsesound.play();
        
                c.updateBox(x,y,this.team,"yes");
        
            };
    
    


        }



       })
         



       return ret;




}














};

export default Ghora;