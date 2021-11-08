import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Samantha Peterson</h2>
          <ul>
            <li>
           js node express what i am good at
            </li>
          </ul>

          <p class="mt-5">
            < a href = "https://www.linkedin.com/in/samantha-peterson-web-developer-photographer/" >
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/react-portfolio/raw/main/docs/SamanthaPetersonResume.docx"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            Web developer coding in JavaScript.Enjoys Node JS and Express JS frameworks, as well as Figma
            for web design.An Adobe Creative Cloud guru.Graphic designer, able to create beautiful imagery that communicates clearly. < br />
            Web developer coding in JavaScript.Enjoys Node JS and Express JS frameworks, as well as Figma
            for web design.An Adobe Creative Cloud guru.Graphic designer, able to create beautiful imagery that communicates clearly. < br />
            Web developer coding in JavaScript.Enjoys Node JS and Express JS frameworks, as well as Figma
            for web design.An Adobe Creative Cloud guru.Graphic designer, able to create beautiful imagery that communicates clearly.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
