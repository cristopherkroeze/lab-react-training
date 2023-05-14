import Rating from "./Rating"

function DriverCard(props) {
    let {name, rating, img, car} = props;
    let {model, licensePlate} = car;

    return(
        <div>
            <img src={img} alt={"profile"} style={{width:100, height:100, float:"left"}}/>
            <p>{name}</p>
            <Rating children={rating}/>
            <p>{model} - {licensePlate}</p>
            <br></br>
        </div>
    )
}


export default DriverCard