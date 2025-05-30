import MyPic from "./Neeraj Zaanse_Schans.jpg";
// import '../MyComponents/App.css';
function About() {
    let firstStyle = {
        // textAlign:"center",
        // marginLeft: "250px",
        // marginTop: "150px",
        fontSize: "20px",
        fontStyle: "Bold",
        color: "white"
    }

    let emojiStyle = {
        margin: "10px"
    }
    return (
        <>
            <div className="container">
                <div className="img">
                    <img src={MyPic} class="rounded float-start" alt="My pic" />
                </div>
                <div style={firstStyle} className="aboutme">
                    <h2>
                        A bit about me
                        <svg style={emojiStyle} xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg>
                    </h2>
                    Hi, I'm Neeraj. Currently pursuing Master's in Computer Science at <span style={{ color: "#FFA500" }}>University of Southern California</span>, Los Angeles, USA.<br />
                    Born and raised in Navi Mumbai, India.<br />
                    Loves to learn new things and explore new Technologies. Extremely motivated to constantly
                    develop my skills and grow
                    professionally. I am confident in
                    my ability to come up with
                    interesting ideas.<br />
                    Successful working in a team
                    environment, as well as
                    independently.<br />
                    Right now, learning more about <span style={{color:"#6BDDE7"}}>Ethereum Blockchain.</span><br />
                    An avid car lover. Can call me <span style={{color:"#FF2F2F"}}>Car Geek.</span>
                    
                    <div className="resume">
                        {/* <a style={{textDecoration:"none"}} href="https://ipfs.infura.io/ipfs/QmcxzYdYZYY5E8iXdjCfNiUDFW22D2m7q7hyTCYL3mnrLg" target="_blank"><button type="button" className="btn btn-outline-primary btn-lg">Resume</button></a> */}
                        <a style={{textDecoration:"none"}} href="https://drive.google.com/drive/folders/1K7Xc_Fszz_hphP303lML_mCsY4xkrO14?usp=sharing" target="_blank"><button type="button" className="btn btn-outline-primary btn-lg">Resume</button></a>
                    </div>
                </div>
                
            </div>


        </>
    )
}

export default About;