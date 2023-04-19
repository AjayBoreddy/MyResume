import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />

        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              
              <div class="flex-grow-1">
                <h3 class="mb-0">Software Engineer</h3>
                <div class="subheading mb-3">CGI Inc</div>
                <p>
                  <b>Project Description:</b>
                  Mass Auto is a fully integrated Auto Insurance Product for the
                  State of Massachusetts. The Product Supports both Private
                  passenger and commercial automobile business. This Product is
                  a complete Automobile solution that supports Data Collect,
                  Underwriting and Billing, Claims, Statistical Reporting and
                  Full Policy Assembly. The system has real time data
                  interchange capability with registry of Massachusetts.
                  <br />
                  <p>
                    <b>Roles and Responsibilities:-</b>
                    <br />
                    Interaction with BA’s and Senior resources to understand and
                    implementation of business. <br />
                    Understanding of requirements and development of modules in
                    Phase 1. <br />
                    Develop program as per given requirements. <br />
                    Defect resolution and clarification to onsite UAT teams and
                    BA’s. <br />
                    Involved in SQL script Development in SQL Server 2008
                  </p>
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary"> March 2020 - May 2022</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Associate Software Engineer</h3>
                <div class="subheading mb-3">CGI Inc</div>
                <p>
                  Worked for a banking client designing and developing a system
                  of apps for the client’s internal use in the loan department.
                  The system has shown an 80% decrease in manual errors by the
                  employees . I also worked on the creation of CGI's internal
                  education system where I built a coding platform from scratch.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Sept 2019 - March 2020</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Full stack .net Intern</h3>
                <div class="subheading mb-3">NIIT Venture</div>
                <p>
                  Worked on the development of a web application using ASP.NET <br />
Website development creation of web content and designing the front end of web pages. <br/>
Done a project with sensors to test the functionality and implemented the working model.<br />
Experience in bug fixing and troubleshooting issues.<br />
Worked on the implementation and testing of sensors and programming it for the automation.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2019 - October 2019</span>
              </div>
            </div>
            
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
