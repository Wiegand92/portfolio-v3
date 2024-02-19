function mapRange(inMin, inMax, outMin, outMax){
    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );
    const inArray = arrayRange(inMin, inMax, 1)
    const outArray = arrayRange(outMin, outMax, 1)
    return function(numberToMap){
        const inNumber = inArray.findIndex(element => element === numberToMap)
        console.log(inNumber, inArray.length)
        const index = Math.floor(inArray.length / inNumber)
        console.log(index)
        console.log(Math.floor(outArray.length / index))
        return outArray[Math.floor(outArray.length / index)]
    }

}

const newMapper = mapRange(0, 100, 0, 250)
const value = newMapper(10)
console.log(value)