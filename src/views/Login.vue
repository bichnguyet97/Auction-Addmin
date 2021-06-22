<template>
  <div class="login-form">
    <div class="col-xs-12 col-sm-6">
      <div class="panel panel-default">
        <div class="panel-heading">Log In</div>
        <div class="panel-body">
          
          <div class="form-group">
            <label class="col-md-3 control-label" for="">Email</label>
            <div class="col-md-9"> 
              <input v-model="email" class="form-control" id="email" name="email" type="text" value>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label" for="">Password</label>
            <div class="col-md-9"> 
              <!-- <input v-model="password" type="text" class="form-control" id="password" name="password" value> -->
                <VuePassword
                  v-model="password"
                  id="password"
                   
                  type="text"
                />
            </div>
          </div>
          <div class="hee"></div>
          <button @click="onSubmit">Login</button>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import VuePassword from 'vue-password';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  components: {
    VuePassword,
  },
  data() {
    return {
      email: '',
      password: '',
      address: '',
      url:process.env.VUE_APP_MY_ENV_VARIABLE
    };
  },
  methods: {
  onSubmit:async function(){
    await axios.post(this.url+'/auth/login',{
        "email": this.email,
        "password": this.password
  }).then(response =>this.address = response)
  // console.log(this.address.data);
  console.log(this.url);
  if(this.data!='Khong ton tai' && this.data!='Sai pass'){
    this.$cookies.set("AC-ACCESS-KEY",this.address.data);
    this.$router.push('/dashboard');
  }
},
getCookie:async function(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
  }
}
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
.panel-heading{
  font-size:30px;
}
</style>