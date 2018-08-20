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
                    <a href="https://web.facebook.com/sulmanwebdev" target="_blank" rel="nofollow" title="facebook"><i
                      class="fab fa-facebook-f fa-2x"></i></a>
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
              <p>I have learned many programming languages e.g., C, C++, JAVA, Python, Ruby, JavaScript, and SQL through
                academic and various famous online courses. Also, I have experience of working with programming
                techniques such as Agile development, Object Oriented Programming, Test Driven Development and Machine
                Learning.</p>
              <p>I am very enthusiastic to learn and keep myself updated with the modern world of science by learning
                from the online learning platforms. I like accepting new challenges, because they test skills and teach
                us a lot.</p>
              <p>I worked one year in industry then two year in research lab and now again working in industry for half
                a year now. Now, after working both in industry and academia research, I am ready to work on challenging
                projects in companies. I am sure that I can make it up to the expectations of my recruiters and will
                deliver my best to the jobs assigned.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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

