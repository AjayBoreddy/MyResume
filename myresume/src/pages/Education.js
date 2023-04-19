import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">State University of New York -Albany</h3>
                <div class="subheading mb-3">Masters in Computer Science</div>
                <div>Computer and Information Sciences</div>
                <p>GPA: 3.23</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2022 - Dec 2024</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Karunya Institute of Technology & Sciences</h3>
                <div class="subheading mb-3">Bachelor of Technology </div>
                <div> <b>Major :</b> Electronics & Communication Engineering</div>
                <p>CGPA: 8.7</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July2015 - May 2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
