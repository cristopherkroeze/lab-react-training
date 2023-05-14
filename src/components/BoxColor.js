function BoxColor({r, g, b}) {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    let hexString = rgbToHex(r, g, b)

    let a = 1
    const divStyle = {
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
    }

    return(
        <div style={divStyle}>
        <p>rgb({r},{g},{b})</p>
        <p>{hexString}</p>
        </div>
    )
}

export default BoxColor;