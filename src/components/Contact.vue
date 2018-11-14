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
            <li class="nav-item" id="Hover">
              <a class="nav-link">Grade</a>
            </li>
          </router-link>
          <router-link to="/Contact">
            <li class="nav-item active" id="Hover">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent">Contact</a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>

    <div class="main-content" style="margin-top:72px;">
      <div class="section-1-with-background" style="color:#ffffff;">
        <div class="content-row-1 content-main-text">

          <div class="content-inner">
            <h1 style="font-size:60px;padding-top:60px;">Contact</h1>
            <div class="container-contact" style="padding:28px;padding-top:30px;">
              <div class="row content-row">

                <div class="container" style="color:#ff7675;">
                  <div class="row" style="text-align:left;padding-top:30px;">
                    <div class="col-sm-6">
                      <span class="text-title" :style="textFirstNameColor">First name</span>
                      <span v-if="checkBorderFirstName" style="font-size: 22px;">*</span>
                      <br>
                      <input type="text" v-model="firstName" :style="borderColorFirstName"/>
                    </div>
                    <div class="col-sm-6">
                      <span class="text-title" :style="textLastNameColor">Last name</span>
                      <span v-if="checkBorderLastName" style="font-size: 22px;">*</span>
                      <br>
                      <input type="text" v-model="lastName" :style="borderColorLastName"/>
                    </div>
                  </div>
                  <div class="row" style="text-align:left;">
                    <div class="col-sm-6">
                      <span class="text-title" :style="textEmailColor">Email</span>
                      <span v-if="checkBorderEmail" style="font-size: 22px;">*</span>
                      <span v-if="checkFormatEmail" style="font-size: 15px;color:red;">Invalid email format.</span>
                      <br>
                      <input type="text" v-model="email" :style="borderColorEmail"/>
                    </div>
                    <div class="col-sm-6">
                      <span class="text-title" :style="textCompanyNameColor">Company name</span>
                      <span v-if="checkBorderCompanyName" style="font-size: 22px;">*</span>
                      <br>
                      <input type="text" v-model="companyName" :style="borderColorCompanyName"/>
                    </div>
                  </div>
                  <div class="row" style="text-align:left;">
                    <div class="col-sm-6">
                      <span class="text-title" :style="textMessageColor">Message</span>
                      <span v-if="checkBorderMessage" style="font-size: 22px;">*</span>
                      <br>
                      <textarea type="text" v-model="message" :style="borderColorMessage"/>
                    </div>
                  </div>

                  <button @click="sendMessage()" class="send-massage">
                    Send Message
                  </button>
                </div>
              </div>
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
import { contactRef } from './firebase'

export default {
  name: 'contact',
  data () {
    return {
      text: null,
      firstName: '',
      lastName: '',
      companyName: '',
      message: '',
      email: '',

      // STYLE CHECK BOX
      checkFormatEmail: false,

      checkBorderFirstName: false,
      checkBorderLastName: false,
      checkBorderCompanyName: false,
      checkBorderMessage: false,
      checkBorderEmail: false,

      textFirstNameColor: 'color:#4e4e4e;',
      textLastNameColor: 'color:#4e4e4e;',
      textCompanyNameColor: 'color:#4e4e4e;',
      textMessageColor: 'color:#4e4e4e;',
      textEmailColor: 'color:#4e4e4e;',

      borderColorFirstName: null,
      borderColorLastName: null,
      borderColorCompanyName: null,
      borderColorMessage: null,
      borderColorEmail: null
      // ***********************************
    }
  },
  methods: {
    sendMessage () {
      this.borderColorFirstName = this.firstName === '' ? this.borderColorFirstName = 'border: 2px solid #ff7675;' : this.borderColorFirstName = null
      this.borderColorLastName = this.lastName === '' ? this.borderColorLastName = 'border: 2px solid #ff7675;' : this.borderColorLastName = null
      this.borderColorCompanyName = this.companyName === '' ? this.borderColorCompanyName = 'border: 2px solid #ff7675;' : this.borderColorCompanyName = null
      this.borderColorMessage = this.message === '' ? this.borderColorMessage = 'border: 2px solid #ff7675;' : this.borderColorMessage = null
      this.borderColorEmail = this.email === '' ? this.borderColorEmail = 'border: 2px solid #ff7675;' : this.borderColorEmail = null

      this.textFirstNameColor = this.firstName === '' ? this.textFirstNameColor = 'color:red;' : this.textFirstNameColor = 'color:#4e4e4e;'
      this.textLastNameColor = this.lastName === '' ? this.textLastNameColor = 'color:red;' : this.textLastNameColor = 'color:#4e4e4e;'
      this.textCompanyNameColor = this.companyName === '' ? this.textCompanyNameColor = 'color:red;' : this.textCompanyNameColor = 'color:#4e4e4e;'
      this.textMessageColor = this.message === '' ? this.textMessageColor = 'color:red;' : this.textMessageColor = 'color:#4e4e4e;'
      this.textEmailColor = this.email === '' ? this.textEmailColor = 'color:red;' : this.textEmailColor = 'color:#4e4e4e;'

      this.checkBorderFirstName = this.firstName === '' ? this.checkBorderFirstName = true : this.checkBorderFirstName = false
      this.checkBorderLastName = this.lastName === '' ? this.checkBorderLastName = true : this.checkBorderLastName = false
      this.checkBorderCompanyName = this.companyName === '' ? this.checkBorderCompanyName = true : this.checkBorderCompanyName = false
      this.checkBorderMessage = this.message === '' ? this.checkBorderMessage = true : this.checkBorderMessage = false
      this.checkBorderEmail = this.email === '' ? this.checkBorderEmail = true : this.checkBorderEmail = false

      let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm
      if (re.test(this.email) === true) {
        if (this.firstName !== '' && this.lastName !== '' && this.companyName !== '' && this.message !== '' && this.email !== '') {
          contactRef.push({
            firstName: this.firstName,
            lastName: this.lastName,
            companyName: this.companyName,
            message: this.message,
            email: this.email
          })
          if (this.email !== '') {
            if (re.test(this.email) === false) {
              this.checkFormatEmail = true
            }
            if (re.test(this.email) === true) {
              this.checkFormatEmail = false
            }
          }

          this.firstName = ''
          this.lastName = ''
          this.companyName = ''
          this.message = ''
          this.email = ''
        }
      } else {
        this.borderColorEmail = re.test(this.email) === false ? this.borderColorEmail = 'border: 2px solid #ff7675;' : this.borderColorEmail = null
        this.textEmailColor = re.test(this.email) === false ? this.textEmailColor = 'color:red;' : this.textEmailColor = 'color:#4e4e4e;'
        this.checkBorderEmail = re.test(this.email) === false ? this.checkBorderEmail = true : this.checkBorderEmail = false
      }

      if (this.email !== '') {
        if (re.test(this.email) === false) {
          this.checkFormatEmail = true
        }
        if (re.test(this.email) === true) {
          this.checkFormatEmail = false
        }
      }
    }
  },
  firebase: {
    contact: contactRef
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

.container-contact {
  width: 975px;
  margin: auto;
}

.content-row {
  border-radius:4px;
  background:#fff;
  height: 510px;
  /* ------------- shadow All around -------------- */
  -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  /* ----------------------------------------------- */
}

.text-title {
  color: #4e4e4e;
  font-size: 21px;
}

.row {
  padding-left: 15px;
}

input[type=text], select, textarea {
  padding: 7px;
  border: 2px solid #e0dfdf;
  border-radius: 4px;
  color: #4e4e4e;
  background-color: #fff;
  width: 400px;
  margin-bottom: 17px;
  height: 40px;
}
textarea {
  height: 180px;
}

.send-massage {
  background: #3b87c7;
  border: 1px solid #3b87c7;
  width: 860px;
  color: #fff;
  border-radius: 100px;
  height: 45px;
  font-size: 18px;
}
button:hover {
  background-color:#3d3d3d;
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

  .container-contact {
    width: 100%;
  }

  input[type=text], select, textarea {
    width: 100%;
  }
  textarea {
    height: 130px;
  }

  .content-row {
    height: 640px;
  }

  .row {
    padding-left: 0;
  }

  .send-massage {
    width: 260px;
  }
  .navbar button:hover {
    background-color: #ffffff;
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
