<template>
  <section id="experiences">
    <h1 class="text-center">Experiences</h1>
    <div class="container mt-6 mb-6">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <ul class="timeline">
            <li class="active-before">
              <strong>Chief Technical Officer (CTO) @ <a target="_blank" href="http://goghoom.com/">GoGhoom</a>
                <a href="#" class="float-right date">(Jun, 2018 - Continued)</a></strong>
              <p>Designing of Backend Architecture from Database design to API designs, Working in Ruby on Rails Backend
                APIs. Handling team for front end side in VueJS with testing..</p>
            </li>
            <li class="active-before">
              <strong>Web Team Lead @ <a target="_blank" href="https://www.linkedin.com/company/zindagi-health/">myZindagi</a>
                <a href="#" class="float-right date">(Dec, 2017 - Continued)</a></strong>
              <p>Designing and managing back-end Ruby on Rails based Grape APIs of myZindagi with the features including
                fat model thin controllers, JSON responses and SMS prescription and image prescription.</p>
            </li>
            <li>
              <strong>Manager (Web Applications) @ <a target="_blank"
                                                      href="https://www.linkedin.com/company/pantera-pvt-limited/">Pantera
                Pvt.
                Ltd.</a>
                <a href="#" class="float-right date">(Aug, 2016 - Dec, 2017)</a></strong>
              <p>Designing and managing back-end Ruby on Rails based REST APIs with the features including token based
                authentications, multi-tenancy, multiple email accounts. Also managing the front end web applications
                being developed in AngularJS.</p>
            </li>
            <li>
              <strong>Software Engineer ROR @ <a target="_blank" href="https://www.linkedin.com/company/alchemative/">Alchemative</a>
                <a href="#" class="float-right date">(Feb, 2016 - Aug, 2016)</a></strong>
              <p>Designing of back-end Ruby on Rails based REST APIs with the features including token based
                authentications, multi-tenancy, multiple email account and creating full separate front end AngularJS
                apps that talk with the APIs. I have made complex apps like Customer Management System and Human
                Resources Management System that has helped me to learn a lot in web development field. </p>
            </li>
            <li>
              <strong>Researcher @ <a target="_blank"
                                      href="https://www.linkedin.com/school/universit-degli-studi-di-genova/">Universita
                degli studi di Genova</a>
                <a href="#" class="float-right date">(May, 2014 - Jan, 2016)</a></strong>
              <p>Modelling and designing the emotion detection method for agents in crowd by measuring the behavioural
                changes in crowd in real time. Making a Crowd Simulator and designing behavioural agents in crowd that
                respond to different situations such as normal, busy and emergency scenarios. Crowd simulator is made in
                agile so it is easy to change for any kind of scenario and layout to simulate the crowd.
                Crowd emotion detection is based on probabilistic graphical model based machine learning so machine
                learning method can be used anywhere for logical reasoning and automatic responses. Right now, I am
                working on panic behaviour simulation design in agents to simulate an emergency scenario to understand
                how crowd behaves in panic</p>
            </li>
            <li>
              <strong>Embedded System Developer @ <a target="_blank"
                                                     href="https://www.linkedin.com/company/powersoft19/">Powersoft19</a>
                <a href="#" class="float-right date">(Sep, 2013 - Apr, 2014)</a></strong>
              <p>Testing of Embedded firmware and embedded system designing. Designing embedded data acquisition bench
                for testing embedded firmware on PIC32MX795F512L. Also designing various drivers for PIC32 like SPI,
                WIFI, USART and I2C using MPLAB.</p>
            </li>
            <li>
              <strong>Design &amp; Development Engineer @ <a target="_blank"
                                                             href="https://www.linkedin.com/company/engineering-connections/">Engineering
                Connection</a></strong>
              <strong><a href="#" class="float-right date">(Jun, 2013 - Nov, 2013)</a></strong>
              <p>Designing, configuring home and industrial automation devices. SMS facility in automation with android,
                windows 8 and iOS application development.</p>
            </li>
            <li>
              <strong>Summer Intern @ <a target="_blank" href="http://www.ffc.com.pk/">FFC Ltd.</a></strong>
              <strong><a href="#" class="float-right date">(Jun, 2011 - Sep, 2011)</a></strong>
              <p>Worked on Power Plant of FFC, Understood the generation, transmission and distribution of
                electrical energy. Understood the systems of motor control centers, auxiliary control panels and
                the PLC installed in UREA Handling Plant and DCS & ESD.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {}
</script>

<style>
  .date, .date:hover, .date:visited, .date:active {
    text-decoration: none;
    color: #212529;
  }

  p {
    text-align: justify;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
  }

  ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }

  ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
  }

  ul.timeline > li:before {
    content: ' ';
    background: #343a40;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #343a40;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }

  li.active-before::before {
    background: white !important;
  }

  li:before {
    fill: #0c5460 !important;
  }
</style>
