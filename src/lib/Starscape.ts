import { Star } from "./Star";

export class Starscape {
    densityRatio: number;
    sizeLimit: number;
    defaultAlpha: number;
    scaleLimit: number;
    proximityRatio: number;
    stars: Star[] | []
    canvasRef:HTMLCanvasElement;
    contextRef:CanvasRenderingContext2D | null
    vmin: number;
    alphaMapper;
    scaleMapper;
    constructor(canvasRef:HTMLCanvasElement){
        this.densityRatio = 0.5
        this.sizeLimit = 5;
        this.defaultAlpha = 0.5;
        this.scaleLimit = 2;
        this.proximityRatio = 0.1;
        this.stars = [];
        this.canvasRef = canvasRef;
        this.contextRef = canvasRef.getContext("2d");
        this.vmin = Math.min(window.innerHeight, window.innerWidth)
        this.alphaMapper = mapRange(0, this.vmin * this.proximityRatio, 1, this.defaultAlpha);
        this.scaleMapper = mapRange(0, this.vmin * this.proximityRatio, this.scaleLimit, 1)
    }
    LOAD(){
        const STAR_COUNT = Math.floor(this.vmin * this.densityRatio);
        this.canvasRef.width = window.innerWidth;
        this.canvasRef.height = window.innerHeight;
        this.stars = new Array(STAR_COUNT).fill(null).map(() => {
            const x = Math.floor(Math.random() * window.innerWidth)
            const y = Math.floor(Math.random() * window.innerHeight)
            const alpha = 0.5
            const scale = 1
            const size = 1
            return new Star(size, scale, alpha, x, y)
        })
        console.log(this.alphaMapper, this.scaleMapper)
    }
    RENDER(){
        this.contextRef?.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height)
        this.stars.forEach(star => {
            if(this.contextRef)
            this.contextRef.fillStyle = `hsla(0, %100, %100, ${star.alpha})`
            this.contextRef?.beginPath()
            this.contextRef?.arc(star.x, star.y, (star.size / 2) * star.scale, 0, Math.PI * 2)
            this.contextRef?.fill()
        })
    }
    RUN() {
        this.LOAD()
        this.RENDER()
    }
    UPDATE(x:number, y:number){
        this.stars.forEach(star => {
            const DISTANCE = Math.sqrt(Math.pow(star.x - x, 2) + Math.pow(star.y - y, 2));
            star.scale = this.scaleMapper(Math.min(DISTANCE, this.vmin * this.proximityRatio))
            star.alpha = this.alphaMapper(Math.min(DISTANCE, this.vmin * this.proximityRatio))
        });
        this.RENDER()
      }
}
// function mapRange(inMin:number, inMax:number, outMin:number, outMax:number){
//     const arrayRange = (start:number, stop:number, step:number) =>
//         Array.from(
//             { length: (stop - start) / step + 1 },
//             (value, index) => start + index * step
//         );
//     const inArray = arrayRange(inMin, inMax, 0.1)
//     const outArray = arrayRange(outMin, outMax, 0.1)
//     return function(numberToMap:number){
//         const inNumber:number = inArray.findIndex(element => element === numberToMap)
//         const index = Math.floor(inArray.length / inNumber)
//         return outArray[Math.floor(outArray.length / index)]
//     }

// }

function mapRange(inMin:number, inMax:number, outMin:number, outMax:number){
    const arrayRange = (start:number, stop:number, step:number) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );
    const inArray = arrayRange(inMin, inMax, 1)
    const outArray = arrayRange(outMin, outMax, 1)
    return function(numberToMap:number){

        const inNumber = inArray.findIndex(element => element === numberToMap)
        console.log(inNumber, inArray.length)
        const index = Math.floor(inArray.length / inNumber)
        console.log(index)
        console.log(Math.floor(outArray.length / index))
        return outArray[Math.floor(outArray.length / index)]
    }

}
function clamp(input: number, min: number, max: number): number {
    return input < min ? min : input > max ? max : input;
  }
  
function map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
    const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    return clamp(mapped, out_min, out_max);
  }
// function brighten(node:Element, {delay = 0, duration = 200}){
//     const o = +getComputedStyle(node).opacity;
//     return {
//         delay,
//         duration,
//         css:(t:number) => {`opacity: ${t * o}`}
//     }
// }