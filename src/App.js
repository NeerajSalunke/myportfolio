import React from "react";
import MyPic from "./MyComponents/Neeraj Zaanse_Schans.jpg";
import stockMar from "./MyComponents/stockMar.png";
import codeAnal from "./MyComponents/codeAnal.png";
import applAssis from "./MyComponents/applAssis.jpeg";
import evidstor from "./MyComponents/evidstor.png";
import multiModal from "./MyComponents/multiModal.png";
import todolist from "./MyComponents/todolist.PNG";
import votedapppic from "./MyComponents/votedapp.png";
import filestor from "./MyComponents/filestor.PNG";
import atm from "./MyComponents/atm.PNG";
import hospmng from "./MyComponents/hospmng.png";
import hospweb1 from "./MyComponents/hospweb1.png";
import movrec from "./MyComponents/movrec.png";
import quessimi from "./MyComponents/quessimi.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I’m <span className="highlight2">Neeraj Salunke</span>
            </h1>
            <p>
              Master’s in Computer Science (Class of 2025) @ USC. Passionate about
              building intelligent, scalable, and user-centric software. Experienced
              in full-stack development, AI-driven applications, cloud-native systems,
              <span className="highlight"> DevOps</span> practices, and
              <span className="highlight"> Blockchain</span> technologies.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn" id="projectsBtn">🚀 View Projects</a>
              <a
                href="https://drive.google.com/drive/folders/1K7Xc_Fszz_hphP303lML_mCsY4xkrO14?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                📄 Resume
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about">
        <img src={MyPic} alt="Neeraj" className="about-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Graduated with a Master’s degree in Computer Science from the University of Southern California in May 2025. Formerly supported students as a Teaching Assistant for front-end and back-end development courses at the USC Jimmy Iovine and Andre Young Academy, where I mentored over 100 students in full-stack web development and modern coding practices.
          </p>
          <p>
            Most recently contributed to a collaborative startup environment as a Software Engineer Intern at Kintsugi Global, Inc., focusing on building decentralized crowdfunding platforms using DESO Blockchain APIs. I value innovation, mentorship, and creating impactful solutions through teamwork, and I’m excited to bring a diverse perspective and a passion for problem-solving to dynamic and inclusive teams.
          </p>
        </div>
      </section>

      <section id="projects" className="projects">
        <h1>Projects</h1>
        <div className="project-list">

          <div className="project-card">
            <img src={codeAnal} />
            <div>

              <h3>AI-driven Code Analysis platform</h3>
              <p>Full-stack Web Platform for automated code analysis, vulnerability detection, and software
                quality evaluation. Integrated Spring AI and LangChain4j to power an advanced RAG-based chatbot for contextual codebase Q&A and
                architecture explanations.</p>
              <a href="https://drive.google.com/drive/folders/11zU3rHKUCrluLPbFCltd_Lv3Q4tyZKkE?usp=sharing" target="_blank" rel="noreferrer" className="btn-sm">
                View Demo Video
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={stockMar} />
            <div>

              <h3>Stock Market Search Website and Android App</h3>
              <p>Full-stack trading dashboard integrating the Finnhub API to deliver real-time and historical stock data for thousands of companies. Extended platform reach by developing a native Android app.</p>
              <a href="https://stocksearchangular1502-418801.wl.r.appspot.com/search/home" target="_blank" rel="noreferrer" className="btn-sm">
                View Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={applAssis} />
            <div>

              <h3>AI-Powered Appliance Repair Assistant</h3>
              <p>
                Built a conversational AI assistant that diagnoses appliance issues and suggests compatible replacement parts. Implemented a RAG pipeline with ChromaDB and LangChain’s memory module to support vector-based semantic search.
              </p>
              <a href="https://ai-chat-agent-partselect-1.onrender.com/" target="_blank" rel="noreferrer" className="btn-sm">
                View Website
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={evidstor} />
            <div>

              <h3>Decentralized Evidence Storage System using Ethereum Blockchain</h3>
              <p>Designed and executed a decentralized evidence storage system powered by Ethereum Blockchain and IPFS to ensure data integrity, security, and accessibility of 100+ sensitive court files, reducing manipulation risks by 95%</p>
              <a href="https://link.springer.com/chapter/10.1007/978-981-99-5166-6_18" target="_blank" rel="noreferrer" className="btn-sm">
                View Publication
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={multiModal} />
            <div>

              <h3>Candidate Profiling Through Multimodal Personality Analysis</h3>
              <p> Designed a talent assessment platform to evaluate candidates on audio, video and text. Extracted the Audio Features using Wav2Vec2, preprocessed audio features, trained a Bi-GRU model, and collaborated
                on multimodal data fusion across Audio, Video and Text for comprehensive personality analysis.</p>
              {/* <a href="https://link.springer.com/chapter/10.1007/978-981-99-5166-6_18" target="_blank" rel="noreferrer" className="btn-sm">
                View Publication
              </a> */}
            </div>
          </div>

          <a href="https://www.linkedin.com/in/neeraj-salunke/details/projects/" target="_blank" rel="noreferrer" className="btn-md">
            View More Projects on LinkedIn
          </a>
        </div>

      </section>

      <section id="blogs" class="blogs">
        <h1>Blogs</h1>
        <p>
          I occasionally write about software engineering, AI, cloud systems, and blockchain.
          Here are some of my recent posts:
        </p>

        <div class="blogs-container">
          <article class="blog-card">
            <h3><a href="https://medium.com/@salunkeneeraj/building-ai-enhanced-applications-with-spring-ai-f9611d74696e" target="_blank">Building AI-Enhanced Applications with Spring AI</a></h3>
          </article>

          <article class="blog-card">
            <h3><a href="https://medium.com/@salunkeneeraj/my-first-blockchain-hackathon-ethamsterdam-2145b9c2a013" target="_blank">My First Blockchain Hackathon: ETHAmsterdam</a></h3>
          </article>
        </div>
      </section>

      <section id="certifications" class="certifications">
        <h1>Certifications</h1>

        <div class="cert-container">
          <div class="cert-card">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"></path><path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"></path>
              </svg>
            </span>
            <span className="link"><a href="https://coursera.org/share/584629fc4c85da55712ae544b87d28e0" target="_blank">
              Amazon Bedrock: Generative AI Applications
            </a></span>
          </div>




          <div class="cert-card">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#3f51b5" d="M48 16L48 14 40.469 14 39.809 16zM33 31L33 29 29 29 27 29 27 31zM39.766 28L40.51 26 34.51 26 35.266 28zM29 26H33V28H29zM29 23H33V25H29zM42 29L42 31 48 31 48 29 46 29zM36.181 19L35.521 17 27 17 27 19 29 19zM37.17 22L36.51 20 29 20 29 22zM33.378 23L34.133 25 40.883 25 41.628 23zM42 23H46V25H42zM27 32H33V34H27zM35.191 16L34.531 14 27 14 27 16zM36.776 32L37.531 34 38.276 32zM42 32H48V34H42zM39.479 17L38.819 19 46 19 48 19 48 17zM39.393 29L35.643 29 36.398 31 38.648 31zM42 26H46V28H42zM38.49 20L37.83 22 46 22 46 20zM0 14H8V16H0zM0 17H8V19H0zM2 20H6V22H2zM2 23H6V25H2zM2 26H6V28H2zM0 29H8V31H0zM0 32H8V34H0zM10 17H18V19H10zM24.977 16c-.913-1.208-2.347-2-3.977-2H10v2h7.023H24.977z"></path><path fill="#3f51b5" d="M25.578 17h-9.131C16.171 17.613 16 18.283 16 19h10C26 18.288 25.846 17.613 25.578 17zM23.975 23H12v2h11.973c-.833-.62-1.854-1-2.973-1C22.119 24 23.142 23.621 23.975 23zM17.023 32H10v2h11c1.63 0 3.065-.792 3.977-2H17.023zM18 29h-2-6v2h6.447H18h7.578C25.846 30.387 26 29.712 26 29H18zM21 20c0 0 0 .083 0 1s-1 1-1 1h4.979c.441-.584.77-1.257.921-2H21zM12 20H17V22H12z"></path><g><path fill="#3f51b5" d="M21 28h4.885c-.156-.738-.467-1.418-.907-2H20c0 0 1 .167 1 1S21 28 21 28zM12 26H17V28H12z"></path></g>
            </svg>
            <span className="link"><a href="https://coursera.org/share/2d7cb599afab9fdabb7ca17f2313d9ff" target="_blank">
              Containerization with Docker, Kubernetes & OpenShift
            </a></span>
          </div>
          <a href="https://www.linkedin.com/in/neeraj-salunke/details/certifications/" target="_blank" rel="noreferrer" className="btn-md"  >
            View All Certificates on LinkedIn
          </a>
        </div>


      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h1>Contact</h1>
        <p>Let’s connect! Feel free to reach out 👇</p>
        <div className="contact-links">
          <a href="https://linkedin.com/in/neeraj-salunke" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
            </svg>
          </a>

          <a href="mailto:nsalunke@usc.edu">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 42 42" fill="#ffffff"><path fill="#ffffff" d="M40.5 31.5v-18S22.3 26.2 20.53 26.859C18.79 26.23.5 13.5.5 13.5v18c0 2.5.53 3 3 3h34c2.529 0 3-.439 3-3zm-.029-21.529c0-1.821-.531-2.471-2.971-2.471h-34c-2.51 0-3 .78-3 2.6l.03.28s18.069 12.44 20 13.12c2.04-.79 19.97-13.4 19.97-13.4l-.029-.129z" /></svg>
          </a>

          <a href="https://github.com/NeerajSalunke" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 432 416" fill="#ffffff"><path fill="#ffffff" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" /></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Neeraj Salunke | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
