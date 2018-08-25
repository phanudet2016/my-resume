<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="border-bottom:1px solid #dddddd;background-color:#ffffff;">
      <div class="navbar-brand">
        <router-link to="/" style="text-decoration: none;">
          <img src="../assets/logo.png" width="35" height="35" style="pointer-events: none;">
          <a style="color:rgb(60, 60, 60);font-size:30px;text-decoration: none;">hanudet</a>
        </router-link>
      </div>
      <button style="border:none;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="mr-auto"></a>
        <ul class="navbar-nav">
          <router-link to="/">
            <li class="nav-item active" id="Hover">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent">Home <span class="sr-only">(current)</span></a>
            </li>
          </router-link>
          <router-link to="/resume">
            <li class="nav-item" id="Hover">
              <a class="nav-link">Resume</a>
            </li>
          </router-link>
          <router-link to="/CV">
            <li class="nav-item" id="Hover">
              <a class="nav-link">CV</a>
            </li>
          </router-link>
          <router-link to="/Grade">
            <li class="nav-item" id="Hover">
              <a class="nav-link">Grade</a>
            </li>
          </router-link>
          <router-link to="/Contact">
            <li class="nav-item" id="Hover">
              <a class="nav-link">Contact</a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="main-content" style="margin-top:72px;">
      <div class="section-1-with-background" style="color:#ffffff;">
        <div class="main-content-row-1">
          <div class="content-inner">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img src="../assets/me.png" alt="Card image cap" width="400" height="400" style="border-radius:400px;pointer-events: none;">
                </div>
                <div class="col-sm text-1" style="padding-top:200px;text-align: left;">
                  <h1 style="font-size:60px;">Hello...</h1>
                  <p style="font-size:35px;">I'm Phanudet Kawilai</p>
                  <p style="font-size:16;">
                    I am interested in Web / App Development career. I am a productive team player,
                    I would like to learn new things, fast learning,
                    and come to work on time and were responsible for the work assigned.
                    I completed the work by a specified time.
                    I'm a very hard-working person and highly dedicated to work.
                  </p>
                  <br>
                  <div class="btn-to-link">
                    <router-link to="/resume">
                      <button>Resume</button>
                    </router-link>
                    <router-link to="/cv">
                      <button>CV</button>
                    </router-link>
                    <router-link to="/grade">
                      <button>Grade</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-2-with-contact" style="color:#353a40;">
        <div class="content-inner">
          <div class="logo-contact">
            <a href="https://www.facebook.com/panudach.kawilai" target="_blank">
              <img src="../assets/fb-icon.png" alt="Card image cap" style="border-radius:80;">
            </a>
            <a href="https://www.facebook.com/messages/t/panudach.kawilai" target="_blank">
              <img src="../assets/fb-ms-icon.png" alt="Card image cap" style="border-radius:50;">
            </a>
            <a href="https://github.com/phanudet2016" target="_blank">
              <img src="../assets/github-icon.png" alt="Card image cap" style="border-radius:50;">
            </a>
            <router-link to="/contact">
              <img src="../assets/gmail-icon.png" alt="Card image cap" width="50" height="80" style="border-radius:50;">
            </router-link>
          </div>
        </div>
      </div>

      <div class="footer">
          <a style="color:rgb(244, 244, 244);font-size:12px;">@ 2018 Developed by Phanudet Kawilai</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.navbar-brand {
  margin-left: 230px;
}
.navbar-nav {
  font-size:18px;
  margin-right: 230px;
}
.footer{
    /* position: fixed; */
    height: 60px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #3d3d3d;
    color: white;
    text-align: center;
    padding-top: 19px;
}

#Hover a:hover{
  color: rgb(60, 135, 199);
}

.section-1-with-background {
  height: 700px;
  background-image: url('../assets/section-1home.png');
}

.main-content-row-1 {
  padding: 50px;
}

.text-inner-1 h1 {
  font-size: 60px;
}
.text-inner-2 p {
  font-size: 25px;
}
.text-inner-3 p {
  font-size: 18px;
}

.btn-to-link button {
  width:167px;
  height:53px;
  border-radius: 100px;
  border: 2px solid #ffffff;
  background-color: Transparent;
  color:#fff;
  margin: 0 5px;
}
.btn-to-link button:hover {
  background-color:rgb(60, 135, 199);
  border: none;
  transition: 0.3s;
}

.section-2-with-contact {
  height: 142px;
  background: #fff;
}
.main-content-row-2 img{
  /* margin: 0 10px; */
  margin-top: 50px;
  margin-left: 50px;
}
.main-content-row-2 {
  padding: 50px;
}
.logo-contact img {
  width: 50px;
  height: 50px;
  margin-top: 50px;
  margin-left: 50px;
}

@media (max-width: 980px) {
  .navbar-brand {
    margin-left: 5px;
  }
  .navbar-nav {
    font-size: 18px;
    margin-right: auto;
  }

  .col-sm text-1 {
    width: 2px;
  }
  .col-sm img {
    width: 200px;
    height: 200px;
  }
  .text-1 {
    margin-top: -150px;
  }

  .section-1-with-background {
    height: 1100px;
    background-image: url('../assets/section-1home-for-m.png');
  }

  /* .btn-to-link {
    text-align: center;
  } */
  .btn-to-link button {
    width: 82px;
    height: 82px;
    margin-top: 10px;
  }
  .footer {
    position: inherit;
  }

  .logo-contact img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .logo-contact {
    padding-top: 10px;
  }

  .section-2-with-contact {
    height: 80px;
  }
}
</style>
