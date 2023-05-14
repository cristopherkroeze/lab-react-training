function Greetings(props) {
    let lang = props.lang
    if (lang === "de") {
        return <p>Hallo {props.children}</p>
    } else if (lang === "en") {
        return <p>Hello {props.children}</p>
    } else if (lang === "es") {
        return <p>Hola {props.children}</p>
    }else if (lang === "fr") {
        return <p>Bonjour {props.children}</p>
    }
}
    
export default Greetings;