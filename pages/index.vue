<template>
  <section id="home-page">
    <section id="intro">
      <div class="container">
        <div class="text-center">
          <h1 id="title">Sulman Baig</h1>
          <img src="~/assets/img/sulman.png" alt="sulman baig" class="img-responsive">
        </div>
      </div>
    </section>

    <br>
    <section id="social-links">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-2 text-center">
                    <a href="https://medium.com/@sulmanweb" target="_blank" rel="nofollow" title="medium"><i
                      class="fab fa-medium-m fa-2x"></i></a>
                  </div>
                  <div class="col-2 text-center">
                    <a href="https://www.linkedin.com/in/sulmanbaig/" target="_blank" rel="nofollow" title="linkedin"><i
                      class="fab fa-linkedin-in fa-2x"></i></a>
                  </div>
                  <div class="col-2 text-center">
                    <a href="https://github.com/sulmanweb" target="_blank" rel="nofollow" title="github"><i
                      class="fab fa-github fa-2x"></i></a>
                  </div>
                  <div class="col-2 text-center">
                    <a href="https://twitter.com/sulmanweb" target="_blank" rel="nofollow" title="twitter"><i
                      class="fab fa-twitter fa-2x"></i></a>
                  </div>
                  <div class="col-2 text-center">
                    <a href="mailto:sulmanweb@gmail.com" title="email"><i
                      class="fas fa-envelope fa-2x"></i></a>
                  </div>
                  <div class="col-2 text-center">
                    <a href="https://stackoverflow.com/users/4011757/sulman-baig?tab=profile" target="_blank"
                       rel="nofollow"
                       title="stack overflow"><i
                      class="fab fa-stack-overflow fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Download CV-->
          <div class="col-md-6 offset-md-3">
            <div class="card">
              <div class="card-body taxt-center">
                <a href="https://docs-sulman.s3.amazonaws.com/Resume-of-Mirza-Sulman-Baig-Aug-2018.pdf"
                   download="Resume-of-Sulman-Baig.pdf"
                   class="btn btn-lg btn-block"><i class="fas fa-download"></i> Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br>
    <section id="short-intro">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="text">
              <p>I worked about 5 years in research areas and industry, have worked in web app development for 3
                years.</p>
              <p>I have experience in Ruby on Rails backend API development as well as web development. Also very good
                in VueJS front end web development.</p>
              <p>I have worked in agile environments with complex industrial grade applications with technologies like
                Swagger REST API, MVC architectures and Database architecture designs.</p>
              <p>I have done 2 years research in machine learning and computer vision with successful 1 conference
                paper(singapore) and 1 journal paper(usa) published.</p>
              <p>I also contribute to open-source community, stackoverflow and early startups as well.</p>
              <p>I have worked in embedded systems, robotics, computer vision, machine learning and web development.
                This shows I am dynamic in approach to jobs and can work with whatever job assigned to me with positive
                attitude and team player characteristics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br>
    <section id="skills">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <h1 class="text-center">Skills</h1>
            <div class="row">
              <div class="col-md-6">
                <h3>Ruby on Rails</h3>
                <div class="progress">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 90%" aria-valuenow="90"
                       aria-valuemin="0"
                       aria-valuemax="100">90%
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h3>VueJS</h3>
                <div class="progress">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 80%" aria-valuenow="80"
                       aria-valuemin="0"
                       aria-valuemax="100">80%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>Machine Learning</h3>
                <div class="progress">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 70%" aria-valuenow="70"
                       aria-valuemin="0"
                       aria-valuemax="100">70%
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h3>Bootstrap Front End</h3>
                <div class="progress">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 70%" aria-valuenow="70"
                       aria-valuemin="0"
                       aria-valuemax="100">70%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>Database Architecture</h3>
                <div class="progress">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 80%" aria-valuenow="80"
                       aria-valuemin="0"
                       aria-valuemax="100">80%
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h3>REST API Design</h3>
                <div class="progress">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 90%" aria-valuenow="90"
                       aria-valuemin="0"
                       aria-valuemax="100">90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br>
    <br>
  </section>
</template>

<script>
  export default {}
</script>

<style>
  #short-intro div.text > p {
    text-align: justify;
    font-size: large;
  }

  #social-links a, #social-links a:hover, #social-links a:active, #social-links a:visited {
    text-decoration: none;
    color: #212529;
  }
</style>

