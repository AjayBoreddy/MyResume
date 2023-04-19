import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Certified Dot net full-stack developer by Stack Route - NIIT Venture
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                National Merit Scholarship for academic excellence in the years 2016, 2017 and 2018 -Union Government of India
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Secured 2nd place in Hackathon conducted by IB hubs
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Azure Data Fundamentals (DP 900) Certification
              </li>
                
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
