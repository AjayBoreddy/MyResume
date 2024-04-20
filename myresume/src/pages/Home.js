import React from "react";
import Header from "../components/Header";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interest from "./Interest";
import Award from "./Award";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Ajay Kumar Reddy
              <span class="text-primary">Boreddy</span>
            </h1>
            <div class="subheading mb-5">
               (518) 606-7961 ·
              <a href="mailto:ajaykumar.boreddy@gmail.com">ajaykumar.boreddy@gmail.com</a>
            </div>
            <p class="lead mb-5">
            Seasoned IT professional with more than 3 years of software development experience with C# and Microsoft based platforms. 
            Has built expertise in various .Net technologies within commercial projects in different business domains
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/ajay-kumar-reddy-boreddy-13398512b/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/AjayBoreddy">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://twitter.com/AjaykBoreddy">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="https://www.instagram.com/ajay__boreddy/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <Experience />
        <Education/>
        <Projects/>
        <Skills/>
        <Interest/>
        <Award/>

      </div>
    </>
  );
};

export default Home;
