import { Link } from "react-router-dom";
function Blogs() {
    let blogStyle = {
        textAlign:"center",
        // marginLeft: "250px",
        marginTop: "50px",
        fontSize: "20px",
        fontStyle: "Bold",
        color: "white"
    }
return(
    <div style={blogStyle} className="container3">
        <Link className="nav-link active text-white" to="/ethams">ETHamsterdam experience</Link>
    </div>
    )   
}

export default Blogs