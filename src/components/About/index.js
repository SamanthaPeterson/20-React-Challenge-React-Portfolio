import React from 'react';

function About() {

    return(
        <section className="container">
            <h2 class = "top-title" > Let me introduce myself to you. My name is Sam & I am a Web Developer. </h2>
            <hr></hr>
            <div>
                < img class = "mb-5"
                id = "about"
                src = "https://raw.githubusercontent.com/SamanthaPeterson/for-react-portfolio/main/images/245824315_386873103102615_7340239058675747987_n.jpeg"
                alt = "Let me introduce myself" />

                <p>
                Web developer coding in JavaScript. Enjoys Node JS and Express JS frameworks, as well as Figma
                for web design. An Adobe Creative Cloud guru. Graphic designer, able to create beautiful imagery that communicates clearly.
                </p>
                <p>
                I am driven, creative, teachable, willing to learn, and passionate. I am a Mom to the best boy in the world.
                </p>
                <p>
                Web developer coding in JavaScript. Enjoys Node JS and Express JS frameworks, as well as Figma
                for web design. An Adobe Creative Cloud guru. Graphic designer, able to create beautiful imagery that communicates clearly.
                </p>
            </div>
        </section>
    )
}

export default About;