<template>
  <div>
    <!-- <nav class="navbar navbar-light" style="background-color:#3d3d3d;height:31px;">
      <a class="navbar-brand" style="color:#ffffff;font-size:12px;">phanudetkawilai2016@gmail.com</a>
    </nav> -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="border-bottom:1px solid #dddddd;background-color:#ffffff;">
      <div class="navbar-brand">
        <router-link to="/" style="text-decoration: none;">
          <img src="../assets/logo.png" width="35" height="35">
          <a style="color:rgb(60, 60, 60);font-size:30px;text-decoration: none;">hanudet</a>
        </router-link>
      </div>
      <button style="border:none;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span><img src="../assets/menu_btn.png" width="37" height="37"></span> -->
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="mr-auto"></a>
        <ul class="navbar-nav">
          <router-link to="/">
            <li class="nav-item" id="Hover">
              <a class="nav-link">Home <span class="sr-only">(current)</span></a>
            </li>
          </router-link>
          <router-link to="/resume">
            <li class="nav-item active" id="Hover">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent">Resume</a>
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

    <div class="main-content">
      <div class="section-1-with-background" style="color:#ffffff;">
        <div class="content-row-1 content-main-text">

          <!-- <div class="content-inner">
            <h1 style="font-size:60px;">My Resume</h1>
            <div class="container" style="padding-top:20px;">
              <div class="row">
                <div class="col-sm">
                  <img src="../assets/section-1resume1.png" alt="Card image cap" width="1163" height="521" style="pointer-events: none;">
                </div>
              </div>
            </div>
          </div> -->
          <div class="content-inner">
            <h1 style="font-size:60px;padding-top:30px;">My Resume</h1>
            <div class="show-img" style="padding-top:30px;">
              <img src="../assets/section-1resume1.png" width="1163" height="521" style="pointer-events: none;">
            </div>
            <h1 style="font-size:41px;color:#3d3d3d;padding-top:60px;" class="text-download"><b>Download my resume</b></h1>
            <div class="btn-to-download" style="padding-top:10px;">
              <button>Download</button>
            </div>
            <div class="content-resume" style="padding-top:60px;">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-1 icon-col">
                    <img src="../assets/person-icon.png" style="text-align:left;pointer-events: none;">
                  </div>
                  <div class="col-sm-5 text-content" style="text-align:left;">
                    <h1>Personal Info</h1>
                    <p>
                      <b>Name : </b>Phanudet Kawilai<br>
                      <b>Birthday : </b>30-06-1995 <br>
                      <b>Age : </b>23 <br>
                      <b>Nationality : </b>Thai <br>
                      <b>Race : </b>Thai <br>
                      <b>Religion : </b>Buddhism <br>
                      <b>Marital status: </b>Single <br>
                      <b>Phone : </b>+66 8 4867 8738 <br>
                      <b>Email : </b>phanudetkawilai2016@gmail.com <br>
                      <b>Address : </b>99/64 Village No.4, Latkrathing Sub-district, Sanamchaikhet District, Chachoengsao, 24160<br><br>
                    </p>
                  </div>
                  <div class="col-sm-1 icon-col">
                    <img src="../assets/skill-icon.png" style="pointer-events: none;">
                  </div>
                  <div class="col-sm-5 text-content" style="text-align:left;">
                    <h1>Skills</h1>
                    <p>
                      <!-- <b>Vue.js</b> <i class="icon-skill"><img src="../assets/vue.png" width="50" height="50" style="text-align:left;pointer-events: none;"></i><br> -->
                      <!-- <b>Vue.js</b><br>
                      <b>React Native</b><br>
                      <b>Git</b><br>
                      <b>Backend with Node.js</b><br>
                      <b>JSON</b><br>
                      <b>Bootstrap</b><br>
                      <b>HTML/CSS</b><br>
                      <b>Javascript  </b><br> -->
                      <b>Programming : </b> Vue.js, React Native, Backend with Node.js, Git, JSON, Firebase, Axios, Bootstrap, HTML/CSS, Javascript<br><br>
                      <b>Network : </b>Config Switch and Router, VLAN, InterVLAN, IP Routing Static OSPF EIGRP RIP
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-1 icon-col icon-col-row-2">
                    <img src="../assets/education-icon.png" style="pointer-events: none;">
                  </div>
                  <div class="col-sm-5 text-content" style="text-align:left;">
                    <h1 class="h1-col-row-2">Education</h1>
                    <p>
                      <b>2009 - 2014 : High School </b><br>Art-Math<br>Sanamchaikhet School, Chachoengsao <br><br>
                      <b>2014 - 2018 : University </b><br>Bachelor of Technology (Information Technology), <br> King Mongkut's University of Technology North Bangkok<br><br>
                    </p>
                  </div>
                  <div class="col-sm-1 icon-col icon-col-row-2">
                    <img src="../assets/rocket-icon.png" style="pointer-events: none;">
                  </div>
                  <div class="col-sm-5 text-content" style="text-align:left;">
                    <h1 class="h1-col-row-2">Experience</h1>
                    <p>
                      <b>- </b>Internship at Piramid Solutions Co., Ltd.<br><br>
                      <b>- </b>Attended 24 Hours Hacking Hospital Services Development<br>
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-1 icon-col icon-col-row-2">
                    <img src="../assets/thinking-icon.png" style="pointer-events: none;">
                  </div>
                  <div class="col-sm-5 text-content" style="text-align:left;border-bottom: none;">
                    <h1 class="h1-col-row-2">Passive Skill</h1>
                    <p>
                      <b>Positive Thinking : </b><font style="font-size:18px;">มีทัศนคติบวก ไม่มีงานไหนที่ยาก มีแค่งานที่เรารู้หรือยังไม่รู้แค่นั้นเอง</font><br><br>
                      <b>Passion : </b><font style="font-size:18px;">ในการ develop เมื่อเราชอบอะไรแล้ว สุดท้ายเราจะสามารถทำสิ่งนั้นให้ออกมาดีได้ในที่สุด </font><br><br>
                      <b>Evolution : </b><font style="font-size:18px;">ไม่ยึดติดกับ สไตล์เดิมๆ พร้อมที่จะพัฒนาตัวเองเสมอ </font><br>
                    </p>
                  </div>
                  <div class="col-sm-1 icon-col icon-col-row-2">
                    <img src="../assets/project-icon.png" style="pointer-events: none;">
                  </div>
                  <div class="col-sm-5 text-content" style="text-align:left;border-bottom: none;">
                    <h1 class="h1-col-row-2">Senior Project</h1>
                    <p>
                      <b>Medical Devices Management System, </b>
                        <font style="font-size:18px;">
                          It’s a borrowing system that applied QR code scanning to borrow a
                          medical device and use GPS with NB IoT for tracking the medical device by receive the value from GPS.
                        </font><br><br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-2-with-contact" style="color:#ffffff;background:#fff;">
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
  </div>
</template>

<script>
export default {
  name: 'resume',
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

#Hover a:hover{
  color: rgb(60, 135, 199);
}

.container-fluid {
  width:1140px;
}
.icon-col img {
  width: 70px;
  height: 70px;
  border-radius: 100px;

  /* ------------- shadow All around -------------- */
  -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  /* ----------------------------------------------- */
}

.icon-col {
  height:100px;
}

.text-content {
  border-bottom: 1px solid #dddddd;
  color: #3d3d3d;
  /* background-color: red; */
}
.text-content h1 {
  font-size: 35px;
  font-weight: bold;
}
.text-content p {
  font-size: 20px;
}

.icon-skill {
  margin-left:330px;
}

.section-1-with-background {
  height: 800px;
  background-image: url('../assets/section-1resume.png');
}

.content-row-1 {
  padding-top: 100px;
}

.btn-to-download button {
  width:205px;
  height:53px;
  border-radius: 100px;
  border: 2px solid #3c87c7;
  background-color: #3c87c7;
  color:#fff;
  margin: 0 5px;
  font-size: 22px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.btn-to-download button:hover {
  background-color:#3d3d3d;
  border: none;
  transition: 0.3s;
  border-radius: 15px;
}

.icon-col-row-2 {
  padding-top: 30px;
}
.h1-col-row-2 {
  padding-top: 30px;
}

.section-2-with-contact {
  height: 142px;
  margin-top: 50px;
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

.footer {
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

@media (max-width: 980px) {
  .navbar-brand {
    margin-left: 5px;
  }
  .navbar-nav {
    font-size:18px;
    margin-right: auto;
  }

  .show-img img {
    height: 158px;
    width: 320px;
  }

  .text-download b{
    color: #fff;
    font-size: 25px;
  }

  .container-fluid {
    width: 100%;
  }
  .icon-col {
    padding-top: 20px;
  }
  .icon-col img {
    width: 100px;
    height: 100px;
  }

  .text-content {
    padding-top: 50px;
  }
  .icon-col {
    padding-top: 40px;
  }

  .text-content h1 {
    text-align: center;
    padding-top: 20px;
  }
  .icon-skill {
    margin-left:30px;
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
