<template>
  <section id="education">
    <h1 class="text-center">Education</h1>
    <div class="container mt-6 mb-6">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <ul class="timeline">
            <li>
              <strong>BSc. Electrical Engineering @ <a target="_blank" rel="nofollow" href="http://www.uol.edu.pk/">University
                of
                Lahore</a></strong>
              <strong><a href="#" class="float-right date">(Sep, 2007 - Jun, 2013)</a></strong>
              <p>Specialized in communication, electronics, control systems and embedded systems. Expertise are in
                computer programming like object-oriented programming, file handling, data structures, classes,
                hash-tables, binary search trees, dictionaries, sensor interfacing with hardware, serial communication
                for PC, GUI programming for easy interface of computer with embedded hardware, forking of application
                for parallel-similar operation of core on Linux and multi-core programming. Actively participated in
                team projects to create real-world applications. Served as Teaching Assistant for Computer Programming,
                responsible for assignment grading, class review sessions, and one-on-one student meetings.</p>
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
