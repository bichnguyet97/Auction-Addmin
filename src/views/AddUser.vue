<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div class="card-text pt-1">
                            <div class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                                  <div class="user-avatar mb-3 text-center">
                                    <b-avatar style="width:128px; height:128px" src="https://placekitten.com/300/300"></b-avatar>
                                  </div>
                                </div>
                                <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tên đăng nhập <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="name" type="" class="form-control form-control-user fs-090" placeholder="hihi" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Địa chỉ Email <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="email" type="" class="form-control form-control-user fs-090" placeholder="hi123@gmail.com" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Password <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="password" type="" class="form-control form-control-user fs-090" placeholder="123456" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="col-2 offset-8">
                                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                                            </div>
                                        </div>
                                        <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <p>
                                            Tạo tài khoản thành công !
                                            </p>
                                        </b-modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
<!-- <vue /> -->
    </div>
</template>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    return {
      email: '',
      password:'',
      id: '',
      name: '',
      created:'',
      updated:'',
      info:'',
      users: [],
      add:true,
      sessionId:'',
      save:true,
      saveof:false,
      close3:true,
      close4:true,
      search: '',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      searchQuery:null,
      searchCheck: false,
      hihi:'true',
      address:'',
      avatar:'',
      mobile:'',
      tel:'',
      url:process.env.VUE_APP_MY_ENV_VARIABLE
    };
  },
  components: {
  },
  methods: {
    clickUpdate:async function(){
        this.axios.get(this.url+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.users=response.data});
    //  console.log(this.url);
    },
    openIn: function () {
      var close = document.querySelector('.closeIn')
      close.classList.add('openIn')
      this.save=true
    },
    openEdit: function () {
      var close = document.querySelector('.closeEdit')
      close.classList.add('openEdit')
      this.save=true
    },
    clickAdd1:async function(){
      await this.axios.post(this.url+'/user/register',{ "email": this.email,"name": this.name,
      "password": this.password
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
      await this.axios.get(this.url+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.users=response.data});
    },
    clickSearch: async function(){
       await this.axios.get(this.url+'/user/email/'+this.email).then((response) => this.userSearch = response);
       console.log(this.userSearch.data.name);
       this.searchCheck=true;
    },
    clickSearch1: async function(){
       await this.axios.get(this.url+'/user/'+this.id).then((response) => this.userSearch = response);
       console.log(this.userSearch.data.name);
       this.searchCheck=true;
    },
    clickSearch2(id){
       this.axios.get(this.url+'/user/'+id).then((response) => this.usersearch1 = response);
       console.log(this.usersearch1.data.email);
    },
    clickEdit(id){
      this.axios.put(this.url+'/edit/user/'+id ,{ "avatar": this.avatar, "tel": this.tel,
        "address": this.address, "mobile": this.mobile, "name": this.name }, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate();
          });
    },
    clickdelete1(id){
      this.axios.delete(this.url+'/user/'+id, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate();
          });
        console.log(this.hihi);
    },
    getCookie: function(cname) {
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
    },
  
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}
.col-2{
  margin-top:25px;
  margin-bottom: 20px;
  margin-left:50px;
}
.row{
  display:flex;
}
employee-list{
  margin:0 100px 0 66px;
}
.closeIn{
  display:none;
}
.closeIn.openIn{
  display:block;
}
.closeEdit{
  display:none;
}
.closeEdit.openEdit{
  display:block;
}
.col-2{
  font-size: 18px;
  font-weight: bold;
  color: #428bca;
}
.col-md-3{
  font-size: 16px;
  font-weight: bold;
  color: #ca425f;
}
.point{
  cursor: pointer;
}
.test{
  max-width: 100px;
  overflow: hidden;
  // white-space: nowrap; 
  text-overflow: ellipsis;
}
#sua{
  width:5px;
  height: 2px;
}
#smbutton1{
  padding:10px 5px;
  display:flex;
}
#smtaomoi1{
  margin-top:35px;
}
</style>
