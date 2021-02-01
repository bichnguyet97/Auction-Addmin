<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <span class="mask bg-gradient-success opacity-8"></span>
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Người dùng</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                    </div>
                </div>
            </div>
        </base-header>
        <div class="mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                      <div class="row">
                        <div @click="searchCheck=false" class="col-2 point">
                          Users
                          <span>
                            <i class="fa fa-reply" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div id="smbutton1" class="col-2 offset-8">
                          <input v-model="email" class="form-control mr-sm-2" type="email" placeholder="Search a Email" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch(users.email)">SearchEmail</button>
                        </div>
                        <div id="smbutton1" class="col-2 offset-8">
                          <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(users.id)">SearchID</button>
                        </div>
                        <!-- <div @click="openIn" class="col-2 offset-8">
                          <button type="button" class="btn btn-primary" @click="close3=true">Tạo mới</button>
                        </div> -->
                        <div id="smtaomoi1" class="col-2 offset-8">
                          <b-button v-b-modal.modal-1 variant="primary">Tạo mới</b-button>
                          <b-modal id="modal-1" title="Tạo mới">
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="">Email<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="email" class="form-control" id="email" name="email" type="text" placeholder="hi@gmail.com" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="hi" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Password <strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="password" class="form-control" id="password" name="password" type="text" placeholder="12335fgg" value>
                              </div>
                              <div class="col-2 offset-8">
                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                              </div>
                            </div>
                          </b-modal>
                          <b-modal id="modalPopover" title="Thông báo" ok-only>
                            <p>
                              Tạo tài khoản thành công !
                            </p>
                          </b-modal>
                        </div>
                      </div>
                      <!-- <div class="closeIn">
                      <div v-if="close3" class="form-group">
                        <label class="col-md-3 control-label" for="">Email<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="email" class="form-control" id="email" name="email" type="text" placeholder="hi@gmail.com" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="hi" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Password <strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="password" class="form-control" id="password" name="password" type="text" placeholder="12335fgg" value>
                        </div>
                        <div class="col-2 offset-8">
                          <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                          <b-button variant="outline-primary" @click="close3=false">Exit</b-button>
                        </div>
                        <b-row class="form-group">
                          <label for="example-datetime-local-input" class="col-md-2 col-form-label form-control-label">Datetime</label>
                          <b-col md="10">
                            <base-input type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input"/>
                          </b-col>
                        </b-row>
                      </div>
                      </div> -->
                      <!-- <div class="closeEdit">
                      <div v-if="close4" class="form-group">
                        <label class="col-md-3 control-label" for="">Nhập Tên<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="name" class="form-control" id="namee" name="namee" type="text" placeholder="hi" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Nhập địa chỉ<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="address" class="form-control" id="address" name="address" type="text" placeholder="address" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Ảnh<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="avatar" class="form-control" id="avatar" name="avatar" type="text" placeholder="avatar" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Mobile<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="mobile" class="form-control" id="mobile" name="mobile" type="text" placeholder="mobile" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Tel<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="tel" class="form-control" id="tel" name="tel" type="text" placeholder="tel" value>
                        </div>
                        <div class="col-2 offset-8">
                          <button type="button" class="btn btn-primary" @click="clickEdit(buffer)">Save</button>
                          <b-button variant="outline-primary" @click="close4=false">Exit</b-button>
                        </div>
                      </div>
                      </div> -->
                      <div class="">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ảnh</th>
                            <!-- <th scope="col">Số ĐT</th>
                            <th scope="col">Địa chỉ</th> -->
                            <th scope="col">Password</th>
                            <th scope="col">Nhóm</th>
                            <th scope="col">Ngày tạo</th>
                            <!-- <th scope="col">Ngày cập nhật</th> -->
                            <th scope="col">Xoá</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody v-if="searchCheck==false" >
                          <tr v-for="users in users" v-bind:key="users.id">
                            <th scope="row">{{users.id}}</th>
                            <td class="test">{{users.name}}</td>
                            <td class="test">{{users.email}}</td>
                            <td class="test"><a :href="users.avatar">{{users.avatar}}</a></td>
                            <!-- <td>{{users.mobile}}</td>
                            <td class="test">{{users.address}}</td> -->
                            <td>{{users.password}}</td>
                            <td>{{users.group}}</td>
                            <td>{{users.created}}</td>
                            <!-- <td class="test">{{users.updated}}</td> -->
                            <td style="color:red;">{{users.delete}}</td>
                            <td>
                              <span>
                                <base-button size="sm" outline type="danger" v-on:click="clickdelete1(users.id)">Xoá</base-button>
                                <span>
                                  <!-- <b-button size="sm" variant="warning" @click="close4=true,buffer=users.id">Sửa</b-button> --> 
                                  <b-button size="sm" v-b-modal.modal-3 variant="warning" @click="close4=true,buffer=users.id">Sửa</b-button>
                                  <b-button size="sm" v-b-modal.modal-5 variant="info" @click="clickSearch2(users.id)">Thông tin chi tiết</b-button>
                                </span>
                              </span>
                            </td>
                          </tr>
                            <b-modal id="modal-3" title="Sửa người dùng">
                              <div class="form-group">
                                <label class="col-md-3 control-label" for="">Tên<strong>*</strong></label>
                                <div class="col-md-9"> 
                                <input v-model="name" class="form-control" id="namee" name="namee" type="text" placeholder="hi" value>
                                </div>
                                <label class="col-md-3 control-label" for="">Địa chỉ Email<strong>*</strong></label>
                                <div class="col-md-9"> 
                                <input v-model="email" class="form-control" id="email" name="email" type="text" placeholder="email" value>
                                </div>
                                <label class="col-md-3 control-label" for="">Địa chỉ<strong>*</strong></label>
                                <div class="col-md-9"> 
                                <input v-model="address" class="form-control" id="address" name="address" type="text" placeholder="address" value>
                                </div>
                                <label class="col-md-3 control-label" for="">Ảnh<strong>*</strong></label>
                                <div class="col-md-9"> 
                                <input v-model="avatar" class="form-control" id="avatar" name="avatar" type="text" placeholder="avatar" value>
                                </div>
                                <label class="col-md-3 control-label" for="">Số điện thoại<strong>*</strong></label>
                                <div class="col-md-9"> 
                                <input v-model="mobile" class="form-control" id="mobile" name="mobile" type="text" placeholder="mobile" value>
                                </div>
                                <label class="col-md-3 control-label" for="">Giới tính<strong>*</strong></label>
                                <div class="col-md-9"> 
                                <input v-model="gender" class="form-control" id="gender" name="gender" type="text" placeholder="gender" value>
                                </div>
                                <div class="col-2 offset-8">
                                  <button v-b-modal.modalPopover1 type="button" class="btn btn-primary" @click="clickEdit(buffer)">Save</button>
                                </div>
                              </div>
                            </b-modal>
                        </tbody>
                        <tbody class="test" v-else >
                          <tr>
                            <th scope="row">{{userSearch.data.id}}</th>
                            <td class="test">{{userSearch.data.name}}</td>
                            <td class="test">{{userSearch.data.email}}</td>
                            <td><a :href="userSearch.data.avatar">{{userSearch.data.avatar}}</a></td>
                            <td>{{userSearch.data.mobile}}</td>
                            <td>{{userSearch.data.address}}</td>
                            <td>{{userSearch.data.password}}</td>
                            <td>{{userSearch.data.group}}</td>
                            <td class="test">{{userSearch.data.created}}</td>
                            <td class="test">{{userSearch.data.updated}}</td>
                            <td style="color:red;">{{userSearch.data.delete}}</td>
                            <td>
                              <span>
                                <base-button size="sm" outline type="danger" v-on:click="clickdelete1(users.id)">Xoá</base-button>
                                <span>
                                  <!-- <b-button size="sm" variant="warning" @click="close4=true">Sửa</b-button> -->
                                  <b-button size="sm" v-b-modal.modal-4 variant="warning" @click="close4=true,buffer=users.id">Sửa</b-button>
                                </span>
                              </span>
                            </td>
                          </tr>
                          <b-modal id="modal-4" title="Sửa người dùng">
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="">Tên<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="name" class="form-control" id="namee" name="namee" type="text" placeholder="hi" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Địa chỉ<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="address" class="form-control" id="address" name="address" type="text" placeholder="address" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Ảnh<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="avatar" class="form-control" id="avatar" name="avatar" type="text" placeholder="avatar" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Số điện thoại<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="mobile" class="form-control" id="mobile" name="mobile" type="text" placeholder="mobile" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Giới tính<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="gender" class="form-control" id="gender" name="gender" type="text" placeholder="gender" value>
                              </div>
                              <div class="col-2 offset-8">
                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickEdit(buffer)">Save</button>
                              </div>
                            </div>
                          </b-modal>
                          <b-modal id="modalPopover" title="Thông báo" ok-only>
                            <p>
                              Cập nhật thành công !
                            </p>
                          </b-modal>
                        </tbody>
                      </table>
                      </div>
                      <b-modal id="modal-5" title="Thông tin người dùng">
                        <div class="">
                          <div class="col-md-9">
                            <b-avatar :src="Search.avatar" size="6rem"></b-avatar>
                            <h5><i class="fa fa-user" aria-hidden="true"></i> {{Search.name}}</h5>
                            <h5><i class="fa fa-envelope" aria-hidden="true"></i> {{Search.email}}</h5>
                            <h5><i class="fa fa-phone" aria-hidden="true"></i> {{Search.mobile}}</h5>
                            <h5><i class="fa fa-home" aria-hidden="true"></i> {{Search.address}}</h5>
                            <h5> <i class="fa fa-transgender" aria-hidden="true"></i>: {{Search.gender}}</h5>
                            <h5>Ngày tạo <i class="fa fa-calendar" aria-hidden="true"></i>: {{Search.created}}</h5>
                            <h5>Ngày cập nhật <i class="fa fa-calendar" aria-hidden="true"></i>: {{Search.updated}}</h5>
                          </div>
                        </div>
                      </b-modal>
                      <b-modal id="modalPopover1" title="Thông báo" ok-only>
                        <p>
                          Cập nhật thành công !
                        </p>
                      </b-modal>
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
      name: '',
      created:'',
      updated:'',
      info:'',
      gender:'',
      users: [],
      add:true,
      Search:[],
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
    // clickSearch2(id){
    //   console.log(id)
    //   this.axios.get(this.url+'/user/'+id).then((response) => this.Search = response.data);
    //    console.log(this.Search.name);
    // },
    clickEdit(id){
      this.axios.put(this.url+'/edit/user/'+id ,{ "avatar": this.avatar, "gender": this.tel,
        "address": this.address, "mobile": this.mobile, "name": this.name, "email": this.email}, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate();
          });
    },
    clickSearch2(id){
      this.axios.get(this.url+'/user/'+id)
      .then((response) => { this.Search=response.data});
        console.log(this.Search);
      this.axios.get(this.url+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.users=response.data});
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

