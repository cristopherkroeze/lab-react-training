import { FaStar } from "react-icons/fa";
function Rating(props) {
    let rating = props.children
    rating = Number(rating)
    rating = Math.round(rating)
    if (rating === 0) {
        return (
            <div style = {{backgroundColor: "#eee"}}>
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            </div>  
        )
    } else if (rating === 1) {
        return (
            <div style = {{backgroundColor: "#eee"}}>
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            </div>  
        )
    } else if (rating === 2) {
        return (
            <div style = {{backgroundColor: "#eee"}}>
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            </div>  
        )
    } else if (rating === 3) {
        return (
            <div style = {{backgroundColor: "#eee"}}>
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            </div>  
        )
    } else if (rating === 4) {
        return (
            <div style = {{backgroundColor: "#eee"}}>
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#fff"
                    }}
            />
            </div>  
        )
    } else if (rating === 5) {
        return (
            <div style = {{backgroundColor: "#eee"}}>
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            <FaStar 
                style={{
                    color:"#000"
                    }}
            />
            </div>  
        )
    }
    

}

export default Rating;