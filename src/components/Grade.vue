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
            <li class="nav-item" id="Hover">
              <a class="nav-link">CV</a>
            </li>
          </router-link>
          <router-link to="/Grade">
            <li class="nav-item active" id="Hover">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent">Grade</a>
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
            <h1 style="font-size:60px;padding-top:60px;">Grade / Transcript</h1>
            <p style="font-size:35px;">เกรดเฉลี่ย 2.38</p>
            <p style="font-size:16px;padding:10px;">
              * หมายเหตุ ภาพนี้นำมาจากเว็บไซต์รายงานผลการเรียนนักศึกษาของมหาวิทยาลัย
              เนื่องจาก Thranscript ทางมหาวิทยาลัยกำลังดำเนินการออกให้อยู่
            </p>
            <div class="btn-to-download" style="padding-top:10px;">
              <button @click="downLoadFile()">Download</button>
            </div>

            <div class="container-grade" style="padding:10px;padding-top:35px;">
              <img class="content-row" src="../assets/grade/year1.jpg" alt="Card image cap"  style="pointer-events: none;">
              <img class="content-row" src="../assets/grade/year2.jpg" alt="Card image cap"  style="pointer-events: none;">
              <img class="content-row" src="../assets/grade/year3.jpg" alt="Card image cap"  style="pointer-events: none;">
              <img class="content-row" src="../assets/grade/year4.jpg" alt="Card image cap"  style="pointer-events: none;">
            </div>
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
  name: 'grade',
  data () {
    return {
    }
  },
  firebase: {
    UrlDownloadFile: UrlDowloadFileRef
  },
  methods: {
    downLoadFile () {
      let UrlDownloadFile = this.UrlDownloadFile[2].URL
      window.open(UrlDownloadFile)
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

.section-1-with-background {
  height: 630px;
  background-image: url('../assets/section-1grade.png');
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

.container-grade {
  width: 770px;
  margin: auto;
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

  .container-grade {
    width: 100%;
  }
  .container-grade img {
    width: 100%;
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
