function Random({min, max}) {
    min = Number(min);
    max = Number(max);
    let limit = max-min;
    let randomNum = Math.floor(Math.random() * (limit))+min
    let convertedString = "Random value between " + min + " and " + max + " => " + randomNum
    return <p>{convertedString}</p>
}
    
export default Random;