
import c from "./index.js";






const pawnMove={
    black:(x,y,firstMoveData)=>{
        let boxpos=c.findBoxReverse(x,y);
        let ret=[];
        //console.log(boxpos,"box",x,y);
        
        
        if(firstMoveData=="no"){
          let move1=c.collisionStatus(boxpos.y-1,boxpos.x).main;
          let move2=c.collisionStatus(boxpos.y-2,boxpos.x).main;
            let move3=c.collisionStatus(boxpos.y-1,boxpos.x+1).main;
            let move4=c.collisionStatus(boxpos.y-1,boxpos.x-1).main;
            //console.log(move1,move2,move3,move4);
            
            if(move3=="white"){

                ret.push({
                    x:boxpos.x+1,
                    y:boxpos.y-1,
                })
            };

            if(move4=="white"){

                ret.push({
                    x:boxpos.x-1,
                    y:boxpos.y-1,
                })
            };

            if(move1=="blank"){
                ret.push({
                    x:boxpos.x,
                    y:boxpos.y-1


                });
                if(move2=="blank"){
                    ret.push({
                        x:boxpos.x,
                        y:boxpos.y-2
    
    
                    });


                }

            }

            
            

        


         
            

        }else if(firstMoveData=="yes"){
            let move1=c.collisionStatus(boxpos.y-1,boxpos.x).main;
            let move3=c.collisionStatus(boxpos.y-1,boxpos.x+1).main;
            let move4=c.collisionStatus(boxpos.y-1,boxpos.x-1).main;
            //console.log(move1,move3,move4);
            if(move3=="white"){

                ret.push({
                    x:boxpos.x+1,
                    y:boxpos.y-1,
                })
            };

            if(move4=="white"){

                ret.push({
                    x:boxpos.x-1,
                    y:boxpos.y-1,
                })
            };
            if(move1=="blank"){
                ret.push({
                    x:boxpos.x,
                    y:boxpos.y-1


                });}


        }
        


    return ret;

    },

    white:(x,y,firstMoveData)=>{
        let boxpos=c.findBoxReverse(x,y);
        let ret=[];
        if(firstMoveData=="no"){
            let move1=c.collisionStatus(boxpos.y+1,boxpos.x).main;
            let move2=c.collisionStatus(boxpos.y+2,boxpos.x).main;
              let move3=c.collisionStatus(boxpos.y+1,boxpos.x+1).main;
              let move4=c.collisionStatus(boxpos.y+1,boxpos.x-1).main;
              
              if(move3=="black"){
  
                  ret.push({
                      x:boxpos.x+1,
                      y:boxpos.y+1,
                  })
              };
  
              if(move4=="black"){
  
                  ret.push({
                      x:boxpos.x-1,
                      y:boxpos.y+1,
                  })
              };
  
              if(move1=="blank"){
                  ret.push({
                      x:boxpos.x,
                      y:boxpos.y+1
  
  
                  });
                  if(move2=="blank"){
                      ret.push({
                          x:boxpos.x,
                          y:boxpos.y+2
      
      
                      });
  
  
                  }
  
              }





        }else if(firstMoveData=="yes"){
            let move1=c.collisionStatus(boxpos.y+1,boxpos.x).main;
            let move3=c.collisionStatus(boxpos.y+1,boxpos.x+1).main;
            let move4=c.collisionStatus(boxpos.y+1,boxpos.x-1).main;
            
            if(move3=="black"){

                ret.push({
                    x:boxpos.x+1,
                    y:boxpos.y+1,
                })
            };

            if(move4=="black"){

                ret.push({
                    x:boxpos.x-1,
                    y:boxpos.y+1,
                })
            };
            if(move1=="blank"){
                ret.push({
                    x:boxpos.x,
                    y:boxpos.y+1


                });}


        }
        return ret;

    }





};


const horseMove=(x,y,opponent)=>{
        let boxpos=c.findBoxReverse(x,y);
        let ret=[];
        /**
         * let move1=c.collisionStatus(boxpos.y+1,boxpos.x).main;
        let move2wrtmove1=c.collisionStatus(boxpos.y+2,boxpos.x).main;
          let move3=c.collisionStatus(boxpos.y-1,boxpos.x).main;
          let move4wrtmove3=c.collisionStatus(boxpos.y-2,boxpos.x).main;
          let move5=c.collisionStatus(boxpos.y,boxpos.x+1).main;
          let move6wrtmove5=c.collisionStatus(boxpos.y,boxpos.x+2).main;
          let move7=c.collisionStatus(boxpos.y,boxpos.x-1).main;
          let move8wrtmove7=c.collisionStatus(boxpos.y,boxpos.x-2).main;

          if(move1=="blank"){
            ret.push({
                x:boxpos.x,
                y:boxpos.y+1,
            });

            if(move2wrtmove1=="blank"){
                ret.push({
                    x:boxpos.x,
                    y:boxpos.y+2,
                });


            }


          };

          if(move3=="blank"){
            ret.push({
                x:boxpos.x,
                y:boxpos.y-1,
            });

            if(move4wrtmove3=="blank"){
                ret.push({
                    x:boxpos.x,
                    y:boxpos.y-2,
                });


            }


          };

          if(move5=="blank"){
            ret.push({
                x:boxpos.x+1,
                y:boxpos.y,
            });

            if(move6wrtmove5=="blank"){
                ret.push({
                    x:boxpos.x+2,
                    y:boxpos.y,
                });


            }


          };

          if(move7=="blank"){
            ret.push({
                x:boxpos.x-1,
                y:boxpos.y,
            });

            if(move8wrtmove7=="blank"){
                ret.push({
                    x:boxpos.x-2,
                    y:boxpos.y,
                });


            }


          };
         * 
         * 
         * 
         * 
         * 
         */
        
 let move9=[c.collisionStatus(boxpos.y-2,boxpos.x+1),
    c.collisionStatus(boxpos.y-2,boxpos.x-1),
    c.collisionStatus(boxpos.y+2,boxpos.x+1),
    c.collisionStatus(boxpos.y+2,boxpos.x-1),
    c.collisionStatus(boxpos.y+1,boxpos.x+2),
    c.collisionStatus(boxpos.y-1,boxpos.x+2),
    c.collisionStatus(boxpos.y+1,boxpos.x-2),
    c.collisionStatus(boxpos.y-1,boxpos.x-2)]; 
    
    move9.forEach((obj)=>{
        if(obj.main=="blank" || obj.main==opponent){
            ret.push({
                x:obj.x,
                y:obj.y
            })
        }



    });




return ret;

    


        
    };








const montriMove=(x,y,opponent,team)=>{
    let boxpos=c.findBoxReverse(x,y);
    let ret=[];
    let block1="no";
    let block2="no";
    let block3="no";
    let block4="no";
    let i1=1;
    let i2=1;
    let i3=1;
    let i4=1;

    while(i1<=8 && block1=="no"){
       let data1=c.collisionStatus(boxpos.y+i1,boxpos.x+i1);

        if(data1.main=="blank"){
            ret.push({
                x:data1.x,
                y:data1.y
            })

        }else if(data1.main==opponent){
            ret.push({
                x:data1.x,
                y:data1.y
            })

            block1="yes";

        }else{

            block1="yes";
        }
     
      
i1++;


    }

    while(i2<=8 && block2=="no"){
        let data2=c.collisionStatus(boxpos.y+i2,boxpos.x-i2);

        if(data2.main=="blank"){
            ret.push({
                x:data2.x,
                y:data2.y
            })

        }else if(data2.main==opponent){
            ret.push({
                x:data2.x,
                y:data2.y
            })

            block2="yes";

        }else{
            block2="yes";
        }

        i2++;
    };
    while(i3<=8 && block3=="no"){
        let data3=c.collisionStatus(boxpos.y-i3,boxpos.x-i3);
        if(data3.main=="blank"){
            ret.push({
                x:data3.x,
                y:data3.y
            })

        }else if(data3.main==opponent){
            ret.push({
                x:data3.x,
                y:data3.y
            })

            block3="yes";

        }else{
            block3="yes";
        }

        i3++;
    };
    while(i4<=8 && block4=="no"){
        let data4=c.collisionStatus(boxpos.y-i4,boxpos.x+i4);
        if(data4.main=="blank"){
            ret.push({
                x:data4.x,
                y:data4.y
            })

        }else if(data4.main==opponent){
            ret.push({
                x:data4.x,
                y:data4.y
            })

            block4="yes";

        }else{

            block4="yes"
        }

        i4++;
    };








return ret;

};

const noukaMove=(x,y,opponent,team)=>{
    let boxpos=c.findBoxReverse(x,y);
    let ret=[];
    let block1="no";
    let block2="no";
    let block3="no";
    let block4="no";
    let i1=1;
    let i2=1;
    let i3=1;
    let i4=1;

    while(i1<=8 && block1=="no"){
        let data1=c.collisionStatus(boxpos.y+i1,boxpos.x);
 
         if(data1.main=="blank"){
             ret.push({
                 x:data1.x,
                 y:data1.y
             })
 
         }else if(data1.main==opponent){
             ret.push({
                 x:data1.x,
                 y:data1.y
             })
 
             block1="yes";
 
         }else{
 
             block1="yes";
         }
      
       
 i1++;
 
 
     };

     while(i2<=8 && block2=="no"){
        let data2=c.collisionStatus(boxpos.y-i2,boxpos.x);

        if(data2.main=="blank"){
            ret.push({
                x:data2.x,
                y:data2.y
            })

        }else if(data2.main==opponent){
            ret.push({
                x:data2.x,
                y:data2.y
            })

            block2="yes";

        }else{
            block2="yes";
        }

        i2++;
    };

    while(i3<=8 && block3=="no"){
        let data3=c.collisionStatus(boxpos.y,boxpos.x+i3);
        if(data3.main=="blank"){
            ret.push({
                x:data3.x,
                y:data3.y
            })

        }else if(data3.main==opponent){
            ret.push({
                x:data3.x,
                y:data3.y
            })

            block3="yes";

        }else{
            block3="yes";
        }

        i3++;
    };

    while(i4<=8 && block4=="no"){
        let data4=c.collisionStatus(boxpos.y,boxpos.x-i4);
        if(data4.main=="blank"){
            ret.push({
                x:data4.x,
                y:data4.y
            })

        }else if(data4.main==opponent){
            ret.push({
                x:data4.x,
                y:data4.y
            })

            block4="yes";

        }else{

            block4="yes"
        }

        i4++;
    };

    return ret;



}

const queenMove=(x,y,opponent,team)=>{
  //  let boxpos=c.findBoxReverse(x,y);
    let move1=noukaMove(x,y,opponent,team);
    let move2=montriMove(x,y,opponent,team);
    let ret=move1.concat(move2);


    
    //console.log(ret);

    return ret;

}

const kingMove=(x,y,opponent,team)=>{
    let boxpos=c.findBoxReverse(x,y);
    let ret=[];
    let move1=[c.collisionStatus(boxpos.y+1,boxpos.x),c.collisionStatus(boxpos.y-1,boxpos.x),c.collisionStatus(boxpos.y,boxpos.x+1),c.collisionStatus(boxpos.y,boxpos.x-1),c.collisionStatus(boxpos.y+1,boxpos.x-1),c.collisionStatus(boxpos.y+1,boxpos.x+1),c.collisionStatus(boxpos.y-1,boxpos.x-1),c.collisionStatus(boxpos.y-1,boxpos.x+1)];

    move1.forEach((obj)=>{
        if(obj.main=="blank" ||obj.main==opponent){

            ret.push({
                x:obj.x,
                y:obj.y
            })

        }


    });

    return ret;



};





export default {
    pawnMove,horseMove,noukaMove,montriMove,queenMove,kingMove
};