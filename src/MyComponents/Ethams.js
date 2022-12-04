import eth1 from "./eth1.jpg";
import eth2 from "./eth2.jpg";
import eth3 from "./eth3.jpeg";
import eth4 from "./eth4.jpeg";
import eth5 from "./eth5.jpeg";
import eth6 from "./eth6.jpeg";
import eth7 from "./eth7.jpeg";
function Ethams() {
    let ethamsStyle = {
        fontSize: "20px",
        // fontStyle: "Bold",
        color: "white",
        marginLeft: "250px",
        marginRight: "250px",
        marginTop: "50px",
    }
    let btn = {
        textDecoration: "none",
    }
    return(
        <div style={ethamsStyle}>
            ETHAmsterdam was my first Blockchain Hackathon which took place in Amsterdam. It was very fun as well as challenging. My motive for participating in the event was to gain knowledge and meet like minded geeks. 
            <br/>
            <br/>
            As I had a basic knowledge of blockchain, I was not able to think for a good problem statement.  Also, I didn’t know any of the participants with whom I can form a team. Before starting the hackathon, we were supposed to share our resume so that others participants can see and contact each other to form teams. I went through some resumes and contacted many people. I formed team with a German guy who is a IOS developer. He is a very friendly and helpful guy. We along with 2 more developers formed a team. Second was frontend developer and the third guy was doing his MS in Amsterdam itself. Each one of us was new to blockchain. The participants came from all over the world. There were few from India as well.
            <br/>
            <br/>
            Each participant was called as a Hacker. Every hacker had to stake 0.02 ethers for participation. Ethers is a cryptocurrency in Ethereum blockchain. The organizers said that they would return the staked amount after a team successfully submits a project.
            <br/>
            <br/>
            This was a four days event. On the 1st day after a lot of brainstorming, we decided to build a Staking application and named it as FRENSTAKE. Using this application, 2 or more people can decide some tasks which have to be completed. After that, they must stake some amount (any cryptocurrency) in the application. If the Tasks gets completed, staked amount will be returned to the people or else it will go to charity.
            <br/>
            <br/>
            From day 2, we started coding the application from scratch. The backend part was coded using Solidity language and the frontend was made using React. As I had some knowledge of solidity, I started working on it. At first, I was little worried. But I was grateful that my teammates were super helpful and very understanding.
            <br/>
            <br/>
            There were many workshops kept for beginners to learn different protocols used in blockchain. I got a chance to talk with many Founders and CEOs of startups working in web3. Also, there were many expert developers from web3, from whom I got to learn a lot. Even my team had experienced frontend and IOS developer, from whom I understood that blockchain has a great potential in future.
            <br/>
            <br/>
            Apart from this, food served at the event was great. Organizers had taken care of everything. There were also some comfy resting places for night. There were many startups who sponsored the event and gave us a lot of goodies. I got around 10 t-shirts. I felt like I don’t need to buy new t-shirts for a long time😆
            <br/>
            <br/>
            We submitted our project on the last day before deadline. Organizers arranged for party after the submissions and judging was done and the hackathon ended. We successfully completed the hackathon and organizers returned our staked amount of 0.02 ethers back to our team members. 
            <br/>
            <br/>
            The competition was tough. Other teams had built very good and creative projects. We couldn’t manage to get a prize, but the experience we gained is going to help us a lot in future.
            <br/>
            <br/>
            Instead of giving us the certificates, organizers distributed all participants a NFT for proof of our participation. NFTs are tokens which can store digital data on blockchain.
            <br/>
            <br/>    
            <a style={btn} href="https://app.poap.xyz/token/4942196" target="_blank">Link to NFT</a>
            <br/>
            <br/>

            Photos:<br/>
            <div className="container4">
                <img src={eth3} className="rounded ethimgs" alt="ETHamsterdam" />
                <img src={eth4} className="rounded ethimgs" alt="ETHamsterdam" />
                <img src={eth7} className="rounded ethimgs" alt="ETHamsterdam" />
                <img src={eth5} className="rounded ethimgs" alt="ETHamsterdam" />
                <img src={eth6} className="rounded ethimgs" alt="ETHamsterdam" />
                <img src={eth2} className="rounded ethimgs" alt="ETHamsterdam" />
                <img src={eth1} className="rounded ethimgs" alt="ETHamsterdam" />
            </div>
        </div>
    )
}

export default Ethams