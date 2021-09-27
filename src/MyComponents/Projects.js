import todolist from "./todolist.PNG";
import votedapppic from "./votedapp.png";
import filestor from "./filestor.PNG";
import atm from "./atm.PNG";
import hospmng from "./hospmng.png";
function Projects() {
    let title = {
        color: "white",
        textAlign: "center",
        font: "bold",
        fontSize: "30px",
        margin:"0px 0px",
        padding:"0px 0px"
    }
    let btn = {
        textDecoration: "none",
    }
    return (
        <>
            <div className="container2">
                <div className="project">
                    <p style={title}><b>Todo List</b></p>
                    <div className="img_desc">
                        <img src={todolist} className="rounded projimg" alt="Todo List pic" />
                        <p className="desc">A simple Todo List build using React to list down our task .Allowing users to store their day to day task.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/neeraj-todos-list" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                    <a style={btn} href="https://neerajsalunke.github.io/neeraj-todos-list/" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Project</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>Voting Dapp</b></p>
                    <div className="img_desc">
                        <img src={votedapppic} className="rounded projimg" alt="Vote Dapp pic" />
                        <p className="desc">Online Voting Dapp(Decentralized Application) using Ethereum Blockchain. Here, a user can cast their votes for their favorite candidate from anywhere in world at anytime.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/Dapp-Voting-App" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                    <a style={btn} href="https://voting-dapp-neeraj.netlify.app/" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Project</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>File Storage</b></p>
                    <div  className="img_desc">
                        <img src={filestor} className="rounded projimg" alt="File Storage pic" />
                        <p className="desc">
                            File Storage Web App using Ethereum Blockchain and IPFS. There is no central server that can be shutdown and anyone can store files and participate. The project is in progress
                            <svg style={{marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                        </p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/FileStorage" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>Atm Simulator</b></p>
                    <div  className="img_desc">
                        <img src={atm} className="rounded projimg" alt="atm pic" />
                        <p className="desc">This is a ATM simulator in java. Various atm services are available in this project. User can withdraw, deposit, transfer and can the change pin.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/atm-simulator" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>Hospital Management</b></p>
                    <div  className="img_desc">
                        <img src={hospmng} className="rounded projimg" alt="Hospital management pic" />
                        <p className="desc">Hospital Management software in python. UI is made using Tkinter library with support of mysql as a database to store records.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/Hosp-mng" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                </div>
            </div>
            <div>
                <a style={btn} href="https://ipfs.infura.io/ipfs/QmcxzYdYZYY5E8iXdjCfNiUDFW22D2m7q7hyTCYL3mnrLg" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-3 mx-auto">Resume</button></a>
            </div>
        </>
    )
}

export default Projects;