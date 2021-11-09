import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          {/* < h2 className = "top-title"> My qualifications </h2>
          <ul>
            <li>
          My qualifications
            </li>
          </ul> */}

          <p class="mt-5">
            < a href = "https://www.linkedin.com/in/samantha-peterson-web-developer-photographer/" >
              <img
                src = "https://github.com/SamanthaPeterson/for-react-portfolio/blob/main/resume/Screen%20Shot%202021-11-08%20at%205.48.25%20PM.png?raw=true"
                alt="inkedIn"
              />
                < img
                src = "https://github.com/SamanthaPeterson/for-react-portfolio/blob/main/resume/Screen%20Shot%202021-11-08%20at%205.48.39%20PM.png?raw=true"
                alt = "inkedIn" />
            </a>
          </p>

          <a
            href = "https://github.com/SamanthaPeterson/for-react-portfolio/blob/main/resume/Resume-%20Pages%202021.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title"> </h2>
          <ul>
            <li>
            Web developer coding in JavaScript.Enjoys Node JS and Express JS frameworks, as well as Figma
            for web design.An Adobe Creative Cloud guru.Graphic designer, able to create beautiful imagery that communicates clearly. < br />
            </li>
          </ul>
            {/* <ul>
              <li>
              Web developer coding in JavaScript.Enjoys Node JS and Express JS frameworks, as well as Figma
            for web design.An Adobe Creative Cloud guru.Graphic designer, able to create beautiful imagery that communicates clearly. < br / >
              </li> 
              </ul> */}
        </div>
      </div>
    </section>
  );
}

export default Resume;
