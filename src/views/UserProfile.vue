<template>
    <div class="testLinh">
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
        
        <div class="mt--7" v-if="close3">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                      <div class="row">
                          <div class="row ml-3 mt-2">
                              <h5 style="margin-top:10px;">Search</h5>
                              <div class="search-wrapper panel-heading col-sm-4 m">
                                <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                              </div>
                              <h5 style="margin-top:10px;">Trạng thái</h5>
                              <div class="search-wrapper panel-heading col-sm-4 m">
                                <select v-model="searchStatus" class="form-control">
                                  <option disable value="">All</option>
                                  <option value="true">Đã Hoạt Động</option>
                                  <option value="false">Chưa Hoạt Động</option>
                                </select>
                              </div>         
                          </div>                      
                        <!-- <div id="smbutton1" class="col-2 offset-8">
                          <input v-model="email" class="form-control mr-sm-2" type="email" placeholder="Search a Email" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch(users.email)">SearchEmail</button>
                        </div>
                        <div id="smbutton1" class="col-2 offset-8">
                          <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(users.id)">SearchID</button>
                        </div> -->
                        <div id="smtaomoi1" class="col-2 offset-8">
                          <!-- <b-button v-b-modal.modal-1 variant="primary">Tạo mới</b-button> -->
                        </div>
                      </div>
                      <div style="overflow-x:auto;" class="">
                      <sorted-table class="table table-striped" v-bind:values="resultQuery">
                        <thead>
                          <tr>
                            <th scope="col"><sort-link name="id">ID</sort-link></th>
                            <th scope="col"><sort-link name="name">Tên</sort-link></th>
                            <th scope="col"><sort-link name="email">Email</sort-link></th>
                            <th scope="col"><sort-link name="avatar">Ảnh</sort-link></th>
                            <th scope="col"><sort-link name="group">Nhóm</sort-link></th>
                            <th scope="col"><sort-link name="created">Ngày tạo</sort-link></th>
                            <th scope="col"><sort-link name="updated">Ngày cập nhật</sort-link></th>
                            <th scope="col"><sort-link name="isActive">Trạng thái</sort-link></th>
                            <th scope="col"><sort-link name="Active">Actions</sort-link></th>
                          </tr>
                        </thead>
                        <template #body="sort">
                        <tbody >
                          <tr v-for="user in sort.values" v-bind:key="user.id">
                            <th scope="row">{{user.id}}</th>
                            <td style="white-space: normal;">{{user.name}}</td>
                            <td style="white-space: normal;">{{user.email}}</td>
                            <td>
                              <!-- <img style="width: 40px;" class="" :src="user.avatar" alt=""> -->
                              <b-avatar :src="user.avatar" size="3rem"></b-avatar>
                            </td>
                            <td>{{user.group}}</td>
                            <td> 
                              <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(user.created,'date')"></span>
                              <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(user.created,'time')"></span>
                            </td>
                            <td>
                              <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(user.updated,'date')"></span>
                              <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(user.updated,'time')"></span>
                            </td>
                            <td>
                              <span>
                              </span>
                              <span class="badge badge-success wf-85" v-if="user.isActive ">ĐÃ HOẠT ĐỘNG</span>
                              <span class="badge badge-warning wf-85" v-if="!user.isActive ">CHƯA HOẠT ĐỘNG</span>
                            </td>
                            <td>
                              <span>
                                <span> 
                                  <base-button size="sm" outline type="success" >
                                    <!-- Thông tin chi tiết -->
                                    <router-link :to="{ name: 'detailUser', params: { id: user.id }}">Thông tin chi tiết</router-link>
                                  </base-button>
                                </span>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        </template>
                      </sorted-table>
                      </div>
                       
                      <b-modal id="modalPopover1" title="Thông báo" ok-only>
                        <p>
                          Cập nhật thành công !
                        </p>
                      </b-modal>
                    </div>
                </div>
            </div>
            <paginate
            :page-count="totalPage"
            :click-handler="onclick"
            :prev-text="'Prev'"
            :next-text="'Next'"
            class="pagination">
          </paginate>
        </div>
        <div v-else class="mt--7">
          <div class="card border-0 rounded-0 shadow-sm">
            <div class="card-body p-3 rounded-0 border-0">
              <div class="card-text pt-1">
                <div class="row">
                  <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                    <div class="user-sum ml-7">
                      <b-avatar style="width:128px; height:128px" :src="inavatar"></b-avatar>
                    </div>
                    <div class="user-sum ml-6">
                        <button v-b-modal.modal-1 class="btn btn-warning btn-sm" @click="changeAvatar=true">
                            <b-icon icon="check2" font-scale="1.5"></b-icon>
                            Thay đổi
                        </button>
                        <button class="btn btn-default btn-sm">
                            <b-icon icon="x" font-scale="1.5"></b-icon>
                            Hủy bỏ
                        </button>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-user" aria-hidden="true"></i>: {{Search.name}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-envelope" aria-hidden="true"></i>: {{Search.email}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-phone" aria-hidden="true"></i>: {{Search.mobile}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-home" aria-hidden="true"></i>: {{Search.province}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-transgender" aria-hidden="true"></i>: {{Search.gender}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-users" aria-hidden="true"></i>: {{Search.group}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-birthday-cake" aria-hidden="true"></i>: {{Search.dateofbirth}}</h5>
                    </div>
                  </div>
                  <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Tên đăng nhập<span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control form-control-user fs-090" :value="inname" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Địa chỉ Email<span class="text-danger">*</span>
                          </label>
                          <input v-model="inemail" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Họ và đệm<span class="text-danger">*</span>
                          </label>
                          <input v-model="inlastname" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Tên<span class="text-danger">*</span>
                          </label>
                          <input v-model="infullname" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Giới tính<span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="ingender" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Ngày sinh<span class="text-danger">*</span>
                          </label>
                          <base-input v-model="indateofbirth" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Số điện thoại<span class="text-danger">*</span>
                          </label>
                          <input v-model="inmobile" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Tỉnh thành<span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="inprovince" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option >Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                            <option>Đà Nẵng</option>
                            <option>Hải Phòng</option>
                            <option>Cần Thơ</option>
                            <option>Thừa Thiên - Huế</option>
                            <option>Quảng Ninh</option>
                            <option>An Giang</option>
                            <option>Bà Rịa-Vũng Tàu</option>
                            <option>Bắc Giang</option>
                            <option>Bắc Kạn</option>
                            <option>Bạc Liêu</option>
                            <option>Bắc Ninh</option>
                            <option>Bến Tre</option>
                            <option>Bình Dương</option>
                            <option>Bình Định</option>
                            <option>Bình Phước</option>
                            <option>Bình Thuận</option>
                            <option>Cà Mau</option>
                            <option>Cao Bằng</option>
                            <option>Đắk Lắk</option>
                            <option>Đắk Nông</option>
                            <option>Điện Biên</option>
                            <option>Đồng Nai</option>
                            <option>Đồng Tháp</option>
                            <option>Gia Lai</option>
                            <option>Hà Giang</option>
                            <option>Hà Nam</option>
                            <option>Hà Tĩnh</option>
                            <option>Hải Dương</option>
                            <option>Hậu Giang</option>
                            <option>Hòa Bình</option>
                            <option>Hưng Yên</option>
                            <option>Kiên Giang</option>
                            <option>Kon Tum</option>
                            <option>Khánh Hòa</option>
                            <option>Lai Châu</option>
                            <option>Lạng Sơn</option>
                            <option>Lào Cai</option>
                            <option>Lâm Đồng</option>
                            <option>Long An</option>
                            <option>Nam Định</option>
                            <option>Ninh Bình</option>
                            <option>Ninh Thuận</option>
                            <option>Nghệ An</option>
                            <option>Phú Thọ</option>
                            <option>Phú Yên</option>
                            <option>Quảng Bình</option>
                            <option>Quảng Nam</option>
                            <option>Quảng Ngãi</option>
                            <option>Quảng Trị</option>
                            <option>Sóc Trăng</option>
                            <option>Sơn La</option>
                            <option>Tây Ninh</option>
                            <option>Tiền Giang</option>
                            <option>Tuyên Quang</option>
                            <option>Thái Bình</option>
                            <option>Thái Nguyên</option>
                            <option>Thanh Hóa</option>
                            <option>Trà Vinh</option>
                            <option>Vĩnh Long</option>
                            <option>Vĩnh Phúc</option>
                            <option>Yên Bái</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Phân quyền <span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="ingroup" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option>Admin</option>
                            <option>Agency</option>
                            <option>User</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                        <button id="buttontt" v-b-modal.modalPopover class="btn btn-primary mb-2" @click="clickEdit(Search.id)">Cập nhật thông tin</button>
                      <b-modal id="modalPopover" title="Thông báo" ok-only>
                        <p>
                        Cập nhật thông tin tài khoản thành công !
                        </p>
                      </b-modal>
                      <b-modal id="modal-1" title="Chọn ảnh của tài sản bạn muốn đăng" hide-footer>
                       <div class="input-group rounded-0">
                          <div class="custom-file rounded-0">
                              <b-form-file
                              class="z-index-inputFile"
                              @change="previewImage"
                              placeholder="Select file"
                              drop-placeholder="Drop file here..."
                              accept="image/*"
                              ></b-form-file>
                              <label class="custom-file-label rounded-0" for="" aria-describedby="inputGroupFileAddon02">chọn ảnh</label>
                          </div>
                          <div class="input-group-append">
                              <button @click="onUpload" class="btn btn-warning">
                                  <i class="las la-plus-circle"></i>
                                  Thay đổi
                              </button>
                          </div>
                      </div>
                      <div id="topimage" class="user-avatar mb-3 text-center">
                        <img id="sizeimage" :src="picture" alt="">
                      </div>
                      <!-- <base-button v-if="uploadValue==0" outline type="success"  @click="onUpload()">Xem ảnh</base-button> -->
                    </b-modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import Firebase from 'firebase'
import VueAxios from 'vue-axios'
import SortedTablePlugin from "vue-sorted-table";
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
Vue.use(SortedTablePlugin);
  export default {
  data() {
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => {
          this.users = response.data,

          // console.log(this.users);
          this.users2 = response.data.slice(0, this.perPage-1), 
          this.totalPage = Math.ceil(response.data.length / this.perPage)
         });
      
    return {
      email: '',
      password:'',
      id: '',
      page: 10,
      name: '',
      rows: 0,
      results: [],
      created:'',
      group: '',
      inavatar:'',
      currentPage : 1,
      perPage : 10,
      province:'',
      updated:'',
      info:'',
      gender:'',
      users: [],
      users2:[],
      totalPage:0,
      add:true,
      Search:[],
      dateofbirth:'',
      fullname:'',
      lastname:'',
      sessionId:'',
      save:true,
      saveof:false,
      close3:true,
      close4:true,
      search: '',
      inprovince:'',
      ingroup:'',
      isActive:'',
      inmobile:'',
      indateofbirth:'',
      ingender:'',
      infullname:'',
      inlastname:'',
      inemail:'',
      inname:'',
      picture:'',
      hihi:'true',
      address:'',
      avatar:'',
      mobile:'',
      tel:'',
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchQuery: "",
      searchStatus:"",
      filter:''
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
    clickEdit(id){
      this.axios.put(this.url+'/user/edit/'+id ,{ "avatar": this.picture, "gender": this.ingender,
        "province": this.inprovince, "mobile": this.inmobile, "lastname": this.inlastname, "email": this.inemail, "group":this.ingroup, "dateofbirth":this.indateofbirth, "fullname": this.infullname}, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate();
          });
    },
    clickSearch2(id){
      this.axios.get(this.url+'/user/'+id)
      .then((response) => { this.Search=response.data, this.inlastname= response.data.lastname,this.infullname= response.data.fullname, this.indateofbirth= response.data.dateofbirth,
                            this.inname=response.data.name,this.inmobile=response.data.mobile,this.inprovince=response.data.province,
                            this.inemail=response.data.email,this.ingroup=response.data.group,this.inavatar=response.data.avatar,
                            this.ingender= response.data.gender});
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
    onclick(page){
      console.log(page);
      this.users2 = this.users.slice((page-1)*this.perPage,page*this.perPage-1)
    },
    formatDatetime: function (datetime,type) {
      if(datetime != null){
      var a = String(datetime).split("T");
        if(type=='date'){
          return a[0];
        }else{
          var b = a[1].split(".");
          return b[0]
        }
      }else return '';
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
    },
     // previewImage(event){
    //   // this.uploadValue=0;
    //   this.picture=null;
    //   this.imageData =event.target.files[0];
    //   this.uploadValue=0;
        
    // },
    // onUpload(){
    //   this.picture=null;
        
    //   const storageRef=Firebase.storage().ref(`${this.imageData.name}`+`${this.imageData.lastModified}`).put(this.imageData);
    //   storageRef.on(`state_changed`,snapshot=>{
    //     this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
    //     }, error =>{console.log(error.message)},
    //     ()=>{this.uploadValue=100;
    
    //     storageRef.snapshot.ref.getDownloadURL().then((url1)=>{
    //       this.picture=url1;
    //       console.log(this.picture);
    //     });

    //     }
    //     );
        
    // },
    
    },
    computed: {
    //  filteredCats() {
    //   return this.users.filter(c => {
    //     if(this.filter == '') return true;
    //     return c.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
    //   })
    // },
    // resultQuery(){
    //     if(this.searchQuery){
    //      return this.users.filter((item)=>{  
    //           var checkStatus;
    //           if(this.searchStatus) checkStatus = (JSON.stringify(item.isActive) === this.searchStatus);else checkStatus = true;
    //           // console.log("test: " + test);
    //          return   this.searchQuery.toLowerCase().split(' ').every(v => ((
    //                   (item.name + '').toLowerCase().includes(v) 
    //                   || (item.email + '').toLowerCase().includes(v)
    //                   || (item.id + '').toLowerCase().includes(v)
    //                   || (item.group + '').toLowerCase().includes(v)
                      
    //                 ) && checkStatus)
    //               ) 
    //       });
    //   }else{
    //     return  this.users2;
    //   }
    // }
    resultQuery(){
        if(this.searchQuery){
         return this.users.filter((item)=>{  
              var checkStatus;
              if(this.searchStatus) checkStatus = (JSON.stringify(item.isActive) === this.searchStatus);
              else checkStatus = true;
              // console.log("test: " + test);
             return   this.searchQuery.toLowerCase().split(' ').every(v => ((
                      (item.name + '').toLowerCase().includes(v) 
                      || (item.email + '').toLowerCase().includes(v)
                      || (item.id + '').toLowerCase().includes(v)
                      || (item.group + '').toLowerCase().includes(v)
                      || (item.category + '').toLowerCase().includes(v)
                    ) && checkStatus)
                  ) 
          });
      }else if(this.searchStatus != undefined){
        return this.users2.filter((item)=>{  
          var checkStatus;
          if(this.searchStatus) checkStatus = (JSON.stringify(item.isActive) === this.searchStatus);
          else checkStatus = true;
          return  checkStatus;
        }); 
      }
      else { 
        return  this.users2;
      }
    }
  }
}
</script>
<style lang="scss">

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  
}

.pagination li {
  border: 0.1rem solid green;
  display: block;
  margin: 0 0.5rem;
  height: 1.5rem;
  width: 3rem;
  text-align: center;
  border-radius:2.5rem;
}

.pagination li a {
  display: block;
}

.pagination li a:focus {
  outline: none;
}

.pagination li.active {
  background-color: #4CAF50;
  color: white;
}
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
#buttontt{
  width: 177px;
  height: 40px;
  text-align: center;
  margin-top: 28px;
  margin-left: 21px;
}
#sizeimage{
    height: 125px;
    width: 201px;
}
#topimage{
    margin-top:10px;
}
// @media (max-width: 556px) {
//   .testLinh{
//     display:none;
//   }
// }
</style>

