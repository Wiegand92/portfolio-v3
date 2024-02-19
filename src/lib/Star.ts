export class Star{
    size: number;
    scale: number;
    alpha: number
    x: number;
    y: number;
    constructor(size = 0.5, scale = 0.5, alpha = 0, x: number, y: number){
        this.size = size;
        this.scale = scale;
        this.alpha = alpha
        this.x = x;
        this.y = y;
    }
}