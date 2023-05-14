function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
    const convertedHeight = height/100
    return(
        <div>
            <img style={{width:100, height:100}} src={picture} alt={props.firstName}/>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {convertedHeight}</p>
            <p>Birth: {birth}</p>
        </div>
    )
}

export default IdCard;