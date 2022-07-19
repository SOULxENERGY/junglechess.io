import c from "./index.js";


class Box{
    constructor(x,y,gap,w,h,color){
        //console.log(gap);
        this.x=x+gap;
        this.y=y+gap;
        this.w=w-(gap*2);
        this.h=h-(gap*2);
        this.color=color;
        this.realColor=this.color;
        this.blackCollision="no";
        this.whiteCollision="no";

        




    }

    draw(){
        c.ctx1.fillStyle=this.color;
        
        c.ctx1.fillRect(this.x,this.y,this.w,this.h);



    }

    update(colorr){
            this.color=colorr;


    }



};


export default Box;