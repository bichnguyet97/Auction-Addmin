<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>
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
                            Nhập ID <span class="text-danger">*</span>
                          </label>
                          <input v-model="id" type="" class="form-control form-control-user fs-090" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Chọn phân quyền <span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="group" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option>Admin</option>
                            <option>Agency</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="col-2 offset-8">
                          <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickEdit(users.id)">Save</button>
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
    var users= [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.users=response.data});
    console.log(users);
    return {
      email: '',
      password:'',
      id: '',
      created:'',
      updated:'',
      info:'',
      fullname:'',
      lastname:'',
      gender:'',
      group:'',
      province:'',
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
    clickEdit(id){
      this.axios.put(this.url+'/edit/user/'+id ,{ "avatar": this.avatar, "dateofbirth": this.dateofbirth,
        "email": this.email, "mobile": this.mobile, "fullname": this.fullname, "lastname": this.lastname, "group":this.group, "province": this.province, "gender": this.gender}, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        })
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
