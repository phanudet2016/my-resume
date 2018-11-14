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
            <li class="nav-item" id="Hover">
              <a class="nav-link">Resume</a>
            </li>
          </router-link>
          <router-link to="/CV">
            <li class="nav-item active" id="Hover">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent">CV</a>
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
        <div class="content-row-1 content-main-text">

          <div class="content-inner">
            <div class="btn-lenguang">
              <button @click="changeLenguang()">
                <i class="fas fa-globe" style="padding-right:10px;"></i>
                <span :style="colorChangeENG">ENG</span>
                <span> / </span>
                <span :style="colorChangeTH">TH</span>
              </button>
            </div>
            <h1 style="font-size:60px;padding-top:60px;">Curriculum Vitae</h1>
            <div class="btn-to-download" style="padding-top:10px;">
              <button @click="downLoadFile()">Download</button>
            </div>

            <div class="container-cv" style="padding:28px;padding-top:30px;">
              <div class="row content-row">
                <div v-if="lenguang === 'eng'" class="col text-content" style="padding:30px;color:#333">
                  <h1 class="text-heading">Phanudet Kawilai</h1>
                  <hr style="height:1px;border:none;background-color:#dddddd;" />
                  <p class="text-profile">
                    <b>E-mail : </b>phanudetkawilai2016@gmail.com <br>
                    <b>Mobile Phone : </b>084-867-8738 <br>
                    <b>Address : </b>Am House 42/1 Soi Chao Decha, Petchaburi Road, Bangkapi, Huai Khwang, Bangkok, 10310<br>
                    <b>Birthday : </b>30 June 1995 <br>
                    <b>Military Status : </b>Finished Reserved Officers Training Corps Course
                  </p><br>

                  <p class="text-topics">CAREER OBJECTIVE<br>
                    <a class="text-inner-topics">Web Developer</a>
                  </p>

                  <p class="text-topics">SKILLS<br>
                    <i style="font-size:15px;" class="text-inner-topics"><b>Programming</b></i><br>
                    <a class="text-inner-topics">Vue.js, React Native, Backend with Node.js, C++, Java, PHP, Git, JSON, Firebase, Axios, Bootstrap, </a><br>
                    <a class="text-inner-topics">HTML/CSS, Javascript</a><br><br>

                    <i style="font-size:15px;" class="text-inner-topics"><b>Network</b></i><br>
                    <a class="text-inner-topics">Config Switch and Router, VLAN, InterVLAN, IP Routing Static OSPF EIGRP RIP</a><br>
                  </p>

                  <p class="text-topics">EDUCATION<br>
                    <i style="font-size:15px;" class="text-inner-topics"><b>2014 - 2018</b></i><br>
                    <a class="text-inner-topics"><b>King Mongkut's University of Technology North Bangkok</b></a><br>
                    <a class="text-inner-topics">Bachelor of Technology (Information Technology)</a><br>
                    <a class="text-inner-topics">GPA : 2.38</a><br><br>

                    <i style="font-size:15px;" class="text-inner-topics"><b>2011 - 2013</b></i><br>
                    <a class="text-inner-topics"><b>Sanamchaikhet School, Chachoengsao </b></a><br>
                    <a class="text-inner-topics">Art-Math</a><br>
                    <a class="text-inner-topics">GPA : 2.91</a>
                  </p>

                  <p class="text-topics">EXPERIENCE<br>
                    <i style="font-size:15px;" class="text-inner-topics"><b>2017</b></i><br>
                    <a class="text-inner-topics"><b>-</b> Internship, Network Engineer department at Piramid Solutions Co., Ltd.</a><br>
                    <a class="text-inner-topics"><b>-</b> Attended 24 Hours Hacking Hospital Services Development</a><br>
                  </p>

                  <p class="text-topics">SENIOR PROJECT<br>
                    <a class="text-inner-topics"><b>Medical Devices Management System, </b>It’s a borrowing system that applied</a><br>
                    <a class="text-inner-topics">QR code scanning to borrow a medical device and use GPS with NB IoT for</a><br>
                    <a class="text-inner-topics">tracking the medical device by receive the value from GPS.</a><br>
                  </p>
                </div>
                <!--////////////////////////////////////////// CV THAI ///////////////////////////////////////////////-->
                <div v-if="lenguang === 'th'" class="col text-content" style="padding:30px;color:#333">
                  <h1 class="text-heading">ภานุเดช คะวิลัย</h1>
                  <hr style="height:1px;border:none;background-color:#dddddd;" />
                  <p class="text-profile">
                    <b>อีเมล : </b>phanudetkawilai2016@gmail.com <br>
                    <b>เบอร์โทร : </b>084-867-8738 <br>
                    <b>ที่อยู่ : </b>Am House 42/1 ซอยฉายเดชา ถนนเพชรบุรี แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310<br>
                    <b>วันเกิด : </b>30 มิถุนายน 2538 <br>
                    <b>สถานภาพทางการทหาร : </b>สำเร็จหลักสูตรรักษาดินแดน
                  </p><br>

                  <p class="text-topics">เป้าหมายทางอาชีพ<br>
                    <a class="text-inner-topics">Front-End Developer (Web Developer)</a>
                  </p>

                  <p class="text-topics">ทักษะ<br>
                    <i style="font-size:15px;" class="text-inner-topics"><b>Programming</b></i><br>
                    <a class="text-inner-topics">Vue.js, React Native, Backend with Node.js, Git, JSON, Firebase, Axios, Bootstrap, </a><br>
                    <a class="text-inner-topics">HTML/CSS, Javascript</a><br><br>

                    <i style="font-size:15px;" class="text-inner-topics"><b>Network</b></i><br>
                    <a class="text-inner-topics">Config Switch and Router, VLAN, InterVLAN, IP Routing Static OSPF EIGRP RIP</a><br>
                  </p>

                  <p class="text-topics">ประวัติการศึกษา<br>
                    <i style="font-size:15px;" class="text-inner-topics"><b>ปีการศึกษา 2557 - 2560</b></i><br>
                    <a class="text-inner-topics"><b>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</b></a><br>
                    <a class="text-inner-topics">ระดับปริญญาตรี สาขาวิชาเทคโนโลยีสารสนเทศ</a><br>
                    <a class="text-inner-topics">แขนงวิชาเทคโนโลยีเครือข่าย คณะเทคโนโลยีและการจัดการอุตสาหกรรม</a><br>
                    <a class="text-inner-topics">เกรดเฉลี่ย 2.38</a><br><br>

                    <i style="font-size:15px;" class="text-inner-topics"><b>ปีการศึกษา 2554 - 2556</b></i><br>
                    <a class="text-inner-topics"><b>โรงเรียนสนามชัยเขต ฉะเชิงเทรา</b></a><br>
                    <a class="text-inner-topics">ระดับมัธยมศึกษาตอนปลาย สายศิลป์-คํานวณ</a><br>
                    <a class="text-inner-topics">เกรดเฉลี่ย 2.91</a>
                  </p>

                  <p class="text-topics">ประวัติการทำงาน<br>
                    <i style="font-size:15px;" class="text-inner-topics"><b>ปีการศึกษา 2559</b></i><br>
                    <a class="text-inner-topics"><b>-</b> นักศึกษาฝึกงาน แผนก Network Engineer บริษัท ปิรามิด โซลูชั่น จำกัด</a><br>
                    <a class="text-inner-topics"><b>-</b> เข้าร่วมกิจกรรม 24 Hours Hacking Hospital Services Development </a><br>
                    <a class="text-inner-topics">เพื่อคิดหาทางแก้ไขปัญหาต่าง ๆ ให้กับโรงพยาบาลโดยใช้เทคโนโลยีเข้ามาผนวกภายในเวลา 24 ชั่วโมง</a><br>
                  </p>

                  <p class="text-topics">โครงงานพิเศษระดับปริญญาตรี<br>
                    <a class="text-inner-topics"><b>ระบบการจัดการอุปกรณ์ทางการแพทย์</b> เป็นเว็บไซต์แพลตฟอร์มระบบยืม – คืนอุปกรณ์ทางการแพทย์</a><br>
                    <a class="text-inner-topics">โดยใช้วิธีการสแกน QR Code เพื่อยืม – คืนและมีระบบติดตามอุปกรณ์โดยใช้ GPS ร่วมกับ NB IoT </a><br>
                    <a class="text-inner-topics">ในการส่งค่าพิกัดเพื่อให้ทราบถึงตำแหน่งของอุปกรณ์พอสังเขป</a><br>
                  </p>
                </div>
                <!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
              </div>
            </div>

            <!-- <div class="container-cv" style="padding-top:30px;">
              <div class="container-fluid"  style="border-radius:4px;background:red;">
                <div class="row" style="border-radius:4px;background:red;">
                  <div class="col text-content" style="padding:30px;">
                    <h1 style="color:#3d3d3d;text-align:left;">Phanudet Kawilai</h1>
                  </div>
                </div>
              </div>
            </div> -->

          </div>

        </div>

        <div class="content-row-2 section-2-with-contact" style="color:#ffffff;background:#fff;">
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
import { UrlDowloadFileRef } from './firebase'

export default {
  name: 'cv',
  data () {
    return {
      lenguang: 'eng',
      colorChangeTH: 'color: #868e96',
      colorChangeENG: 'color: #fff'
    }
  },
  methods: {
    changeLenguang () {
      if (this.lenguang === 'eng') {
        this.lenguang = 'th'
        this.colorChangeTH = 'color: #fff'
        this.colorChangeENG = 'color: #868e96'
      } else {
        this.lenguang = 'eng'
        this.colorChangeTH = 'color: #868e96'
        this.colorChangeENG = 'color: #fff'
      }
    },
    downLoadFile () {
      let UrlDownloadFile = this.UrlDownloadFile[1].URL
      window.open(UrlDownloadFile)
    }
  },
  firebase: {
    UrlDownloadFile: UrlDowloadFileRef
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

.section-1-with-background {
  height: 620px;
  background-image: url('../assets/section-1.png');
}

.btn-to-download button {
  width:167px;
  height:53px;
  border-radius: 100px;
  border: 2px solid #ffffff;
  background-color: Transparent;
  color:#fff;
  margin: 0 5px;
  font-size: 20px;
}
.btn-to-download button:hover {
  background-color:#fff;
  color: #4994cb;
  border: none;
  transition: 0.3s;
  border-radius: 10px;
}

.btn-lenguang button {
  width: 130px;
  height: 30px;
  right: 0;
  position: fixed;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 2px solid #38393d;
  background-color: #38393d;
  color:#fff;
  margin: 0 5px;
  margin-right: 10px;
  font-size: 14px;
  z-index: 1000;
}

.content-row {
  border-radius:4px;
  background:#fff;
  /* ------------- shadow All around -------------- */
  -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  /* ----------------------------------------------- */
}

.text-heading {
  color:#3d3d3d;
  text-align:left;
}
.text-profile {
  text-align: left;
  font-weight: normal;
}
.text-topics {
  text-align: left;
  font-weight: bold;
  font-size: 16px;
}
.text-inner-topics {
  font-weight: normal;
  text-align: left;
  margin-left: 200px;
  font-size: 15px;
}

.container-cv {
  width: 975px;
  margin: auto;
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

  .container-cv {
    width: 100%;
  }
  .text-content h1 {
    font-size: 25px;
  }

  .text-inner-topics {
     margin: auto;
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
