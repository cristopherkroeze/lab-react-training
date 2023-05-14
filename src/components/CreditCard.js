function CreditCard(props) {
    let {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    let numString = number.split("")
    numString.splice(0, 12)
    numString = numString.join("")
    let censoredString = "**** **** **** " + numString
    expirationYear = String(expirationYear)
    let shortenedYear = expirationYear.split("").splice(0,2).join("")

    const backgroundStyle = {
        backgroundColor: bgColor
    }

    const textColor = {
        color: color
    }
    return(


    <div className="card" style = {backgroundStyle} >
      <div className="card__front card__part" style = {backgroundStyle}>
        <img className="card__front-square card__square" style = {backgroundStyle} alt = {bank}src=""/>
        <img className="card__front-logo card__logo" style = {backgroundStyle} alt = {type} src=""/>
        <p className="card_number" style = {textColor}>{censoredString}</p>
        <div className="card__space-75" style = {backgroundStyle}>
          <span className="card__label">Card holder</span>
          <p className="card__info" style = {textColor}>{owner}</p>
        </div>
        <div className="card__space-25" style = {backgroundStyle}>
          <span className="card__label">Expires</span>
                <p className="card__info" style = {textColor}>{expirationMonth}/{shortenedYear}</p>
        </div>
      </div>
      </div>
      
    
    )



}

export default CreditCard;