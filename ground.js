class Ground{
    constructor(x,y,w,h,color){
        var ops={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h,ops);
        
        this.w = w;
        this.h = h;
        World.add(world,this.body)
        this.color = color

    }
    show(){
        var pos = this.body.position
        Body.rotate(this.body,angle);
        
        push();
        
        translate(pos.x,pos.y);

        rotate(angle);

        fill(this.color);

        rect(0,0,this.w,this.h);

        angle +=0.01;

        pop();
    }
}