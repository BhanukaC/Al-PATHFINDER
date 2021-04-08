import React from "react";

function About() {
  return (
    <div>
      <div className="intro">
        <h1> Al PATHFINDER </h1>
        <h2> Introduction </h2>
        <p>
          {" "}
          Some AL students face so many difficulties while finding a suitable
          tuition class. Learning style is different from student to student. So
          they have to attend so many tuition classes and check whether the
          particular teaching style is suitable for him or not. It is a time and
          money-wasting task. Also tuition class mostly depend on advertising.
          Tuition masters spend a lot of money on their advertisements.
        </p>
        <br />
        <h2> Solution </h2>
        <ul style={{ listStyle: "none" }}>
          <li>
            {" "}
            We have developed a website which contains the first lesson of each
            tuition master. It also includes their first tute and also other
            references.
          </li>
          <li>
            {" "}
            Each tuition master has an unique account so they can update, add or
            delete their content.
          </li>
          <li>
            {" "}
            Each student has a unique account. So they can log in to our website
            and search classes by setting their city, stream and subject.
          </li>
          <li>
            {" "}
            Each tuition master will have 6-month trail after that they need to
            pay for our service.
          </li>
          <li>
            {" "}
            Also tuition masters can include their details, time table etc on
            this website.
          </li>
          <li>
            Through this website, teachers can do effective advertisement also.
          </li>
          <li>
            Admin panel will verify every teacher profile after they sign up to
            maintain quality of the website
          </li>
        </ul>
        <br />
        <img
          src={require("./../assets/girl.jfif")}
          alt="studying"
          className="center"
        />
      </div>
      <div className="names bt">
        <h2> Group Members </h2>
        <p>
          <b>
            194174B - UYANAGE B.C. <br />
            194135H - RUBASINGHA R.C.P.K.
            <br />
            194136L - RUCHIRANGA T.V.P. <br />
            194130M - RANDIMA G.N.S. <br />
            194194K - YASHORA J.H.D. <br />
          </b>
        </p>
      </div>
    </div>
  );
}

export default About;
