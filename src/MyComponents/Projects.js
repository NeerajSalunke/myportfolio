import todolist from "./todolist.PNG";
import votedapppic from "./votedapp.png";
import filestor from "./filestor.PNG";
import atm from "./atm.PNG";
import hospmng from "./hospmng.png";
import hospweb1 from "./hospweb1.png";
import movrec from "./movrec.png";
import quessimi from "./quessimi.png";
import evidstor from "./evidstor.png";
function Projects() {
    let title = {
        color: "white",
        textAlign: "center",
        font: "bold",
        fontSize: "30px",
        margin: "0px 0px",
        padding: "0px 0px"
    }
    let btn = {
        textDecoration: "none",
    }
    return (
        <>
            <div className="container2">
                <div className="project">
                    <p style={title}><b>Evidence Storage System</b></p>
                    <div className="img_desc">
                        <img src={evidstor} className="rounded projimg" alt="Hospital management pic" />
                        <p className="desc">A website to store evidences related to court matters so that evidences remain secure and tamper proof on Blockchain network. Only Police can upload evidences on the network. This evidence can accessed by anyone involved in the case like courts, lawyers and common citizens.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/evidence-storage" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                    {/* <a style={btn} href="" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Project</button></a> */}
                </div>
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
                    <div className="img_desc">
                        <img src={filestor} className="rounded projimg" alt="File Storage pic" />
                        <p className="desc">
                            File Storage Web App using Ethereum Blockchain and IPFS. There is no central server that can be shutdown and anyone can store files and participate.
                        </p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/FileStorage" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>Atm Simulator</b></p>
                    <div className="img_desc">
                        <img src={atm} className="rounded projimg" alt="atm pic" />
                        <p className="desc">This is a ATM simulator in java. Various atm services are available in this project. User can withdraw, deposit, transfer and can the change pin.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/atm-simulator" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>Hospital Management Desktop App</b></p>
                    <div className="img_desc">
                        <img src={hospmng} className="rounded projimg" alt="Hospital management pic" />
                        <p className="desc">Hospital Management software in python. UI is made using Tkinter library with support of mysql as a database to store records.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/Hosp-mng" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                </div>
                <div className="project">
                    <p style={title}><b>Hospital Web App using Azure</b></p>
                    <div className="img_desc">
                        <img src={hospweb1} className="rounded projimg" alt="Hospital management pic" />
                        <p className="desc">One stop destination for many task carried out in a clinic or hospitals. Patient can book appointment of doctor by giving some basic details. People can also chat with Web App Bot which is trained to answer all queries related to web site and other general questions of patients.</p>
                    </div>
                    <a style={btn} href="https://github.com/NeerajSalunke/hospital-azure" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a>
                    <a style={btn} href="https://hospital-azure.azurewebsites.net/" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Project</button></a>
                </div>

                <div className="project">
                    <p style={title}><b>Movie Recommender System</b></p>
                    <div className="img_desc">
                        <img src={movrec} className="rounded projimg" alt="Hospital management pic" />
                        <p className="desc">A content-based movie recommender website which recommends users movies based on genre and other features. It recommends similar movies liked by users in the past</p>
                    </div>
                    {/* <a style={btn} href="https://github.com/NeerajSalunke/Hosp-mng" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a> */}
                </div>
                <div className="project">
                    <p style={title}><b>Question pair similarity</b></p>
                    <div className="img_desc">
                        <img src={quessimi} className="rounded projimg" alt="Hospital management pic" />
                        <p className="desc">Aim of the project is to detect if 2 questions with different wordings are similar(meaning-wise) or not using NLP libraries. Websites like Quora use this technology. This way Quora can enhance the customer experience & reduce the unanswered duplicate questions & thus saving a lot of time for the users.</p>
                    </div>
                    {/* <a style={btn} href="https://github.com/NeerajSalunke/Hosp-mng" target="_blank"><button type="button" className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto">View Source Code</button></a> */}
                </div>
            </div>
        </>
    )
}

export default Projects;