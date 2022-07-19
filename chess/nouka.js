import c from "./index.js";
import move from "./move.js";


class Nouka{
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
        this.opponent=opponent;
        c.updateBox(this.x,this.y,this.team,"yes");
        this.validArr=[];
        



    }

    draw(){
        this.validArr= move.noukaMove(this.x,this.y,this.opponent,this.team);
        c.ctx1.save();
       // c.ctx1.beginPath();
//c.ctx1.arc(this.x+this.rad, this.y+this.rad, this.rad, 0, 2 * Math.PI);
//c.ctx1.fillStyle=this.team;
//c.ctx1.strokeStyle=this.opponent;

//c.ctx1.stroke();
//c.ctx1.fill();
//c.ctx1.textAlign="center";
//c.ctx1.font = '30px serif';
 // c.ctx1.strokeText('N', this.x+this.rad, this.y+this.rad);
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
                c.elephantsound.play();
        
                c.updateBox(x,y,this.team,"yes");
        
            };
    
    


        }



       })
         



return ret;

    
   




}














};

export default Nouka;