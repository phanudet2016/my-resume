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

                <div class="container" style="color:red;">
                  <div class="row" style="text-align:left;padding-top:30px;">
                    <div class="col-sm-6">
                      <span class="text-title">First name</span><br>
                      <input type="text"/>
                    </div>
                    <div class="col-sm-6">
                      <span class="text-title">Last name</span><br>
                      <input type="text"/>
                    </div>
                  </div>
                  <div class="row" style="text-align:left;">
                    <div class="col-sm-6">
                      <span class="text-title">Email</span><br>
                      <input type="text"/>
                    </div>
                    <div class="col-sm-6">
                      <span class="text-title">Company name</span><br>
                      <input type="text"/>
                    </div>
                  </div>
                  <div class="row" style="text-align:left;">
                    <div class="col-sm-6">
                      <span class="text-title">Message</span><br>
                      <textarea type="text"/>
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
      text: null
    }
  },
  methods: {
    sendMessage () {
      contactRef.push({contact: this.text})
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
}
</style>
