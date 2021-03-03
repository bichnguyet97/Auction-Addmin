<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                      <div class="row">
                        <div @click="searchCheck=1" class="col-2">
                          Auction Controller
                            <span>
                              <i class="fa fa-reply" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div id="smbutton2" class="col-2 offset-8">
                          <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(auction.id)">SearchID</button>
                        </div>
                        <div class="col-2 offset-8">
                          <b-button id="button_add" v-b-modal.modal-1 variant="primary">Tạo mới</b-button>
                          <b-modal id="modal-1" title="Tạo mới">
                            <div v-if="close1" class="form-group">
                            <label class="col-md-3 control-label" for="">Assest<strong>*</strong></label>
                            <div class="col-md-9"> 
                            <input v-model="assest" class="form-control" id="assest" name="assest" type="text" placeholder="assest" value>
                            </div>
                            <label class="col-md-3 control-label" for="">Bid Price<strong>*</strong></label>
                            <div class="col-md-9"> 
                            <input v-model="bidPrice" class="form-control" id="bidPrice" name="bidPrice" type="text" placeholder="bidPrice" value>
                            </div>
                            <label class="col-md-3 control-label" for="">Thời gian bắt đầu<strong>*</strong></label>
                            <div class="col-md-9">
                            <base-input v-model="startAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                            </div>
                            <label class="col-md-3 control-label" for="">Thời gian kết thúc<strong>*</strong></label>
                            <div class="col-md-9">
                            <base-input v-model="endAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                            </div>
                            <label class="col-md-3 control-label" for="">Tiền cọc tham gia dự thầu<strong>*</strong></label>
                            <div class="col-md-9">
                            <input v-model="warranty" class="form-control" id="bidPrice" name="bidPrice" type="text" placeholder="bidPrice" value>
                            </div>
                            <div class="col-2 offset-8">
                              <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                            </div>
                          </div>
                          </b-modal>
                        </div>
                        <div class="col-2 offset-8">
                          <div class="form-group">
                            <b-input-group id="add1">
                            <b-input-group-prepend>
                              <b-button variant="outline-primary">Status</b-button>
                            </b-input-group-prepend>
                              <select v-model="status" class="form-control">
                                <option disable value="">All</option>
                                <option>Kết thúc</option>
                                <option>Đang đấu giá</option>
                                <option>Sắp đấu giá</option>
                              </select>
                            </b-input-group>
                          </div>
                        </div>
                      </div>
                      <div class="closeIn">
                        <div v-if="close1" class="form-group">
                          <label class="col-md-3 control-label" for="">Assest<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="assest" class="form-control" id="assest" name="assest" type="text" placeholder="assest" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Bid Price<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="bidPrice" class="form-control" id="bidPrice" name="bidPrice" type="text" placeholder="bidPrice" value>
                          </div>
                          <label class="col-md-3 control-label" for="">End At<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="endAt" class="form-control" id="endAt" name="endAt" type="text" placeholder="endAt" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Start At<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="startAt" class="form-control" id="startAt" name="startAt" type="text" placeholder="startAt" value>
                          </div>
                          <div class="col-2 offset-8">
                            <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                            <b-button variant="outline-primary" @click="close1=false">Thoát</b-button>
                          </div>
                        </div>
                      </div>
                      <div class="">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tạo</th>
                            <th scope="col">Cập nhật</th>
                            <th scope="col">Bắt đầu</th>
                            <th scope="col">Kết thúc</th>
                            <th scope="col">Giá dự thầu</th>
                            <th scope="col">Trạng thái</th>
                            <!-- <th scope="col">Người đăng</th> -->
                          </tr>
                        </thead>
                        <tbody class="test" v-if="searchCheck==1">
                          <tr v-for="auction in auction" v-bind:key="auction.id">
                            <th scope="row">{{auction.id}}</th>
                            <td>{{auction.created}}</td>
                            <td>{{auction.updated}}</td>
                            <td>{{auction.startAt}}</td>
                            <td>{{auction.endAt}}</td>
                            <td>{{auction.bidPrice}}</td>
                            <td style="color:red;">{{auction.status}}</td>
                            <!-- <td>
                              <span>
                                <b-button size="sm" v-b-modal.modal-3 variant="warning" @click="clickinfo">Xem</b-button>
                              </span>
                            </td> -->
                          </tr>
                          <b-modal id="modal-3" title="Thông tin người đăng đấu giá">
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="">Tên<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <h2>{{users.name}}</h2>
                              </div>
                              <label class="col-md-3 control-label" for="">Email<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <h2>{{users.email}}</h2>
                              </div>
                              <label class="col-md-3 control-label" for="">Ảnh</label>
                              <div class="col-md-9"> 
                              <a :href="users.avatar">{{users.avatar}}</a>
                              </div>
                            </div>
                          </b-modal>
                        </tbody>
                        <tbody class="test" v-if="searchCheck==2">
                          <tr>
                            <th scope="row">{{userSearch.data.id}}</th>
                            <!-- <td>{{userSearch.data.status}}</td> -->
                            <!-- <td>{{userSearch.data.bidPrice}}</td> -->
                            <td>{{userSearch.data.created}}</td>
                            <td>{{userSearch.data.updated}}</td>
                            <td>{{userSearch.data.startAt}}</td>
                            <td>{{userSearch.data.endAt}}</td>
                            <td>{{userSearch.data.bidPrice}}</td>
                            <td style="color:red;">{{userSearch.data.status}}</td>
                            <td>
                              <span>
                                <!-- <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(auction.id)">Yes</button>
                                <button type="button" class="btn btn-warning" @click="clickConfirmfalse(auction.id)">No</button> -->
                                <b-button size="sm" v-b-modal.modal-3 variant="warning" @click="clickinfo">Xem</b-button>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>
                </div>
            </div>
        </div>
<!-- <vue /> -->
    </div>
</template>
<script>
// import Login from './views/Login.vue';
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
    var auction = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.auction=response.data});
    console.log(auction);
    return {
      bidPrice: '',
      currentPrice:'',
      finalPrice:'',
      status:'',
      startAt:'',
      creaded:'',
      tags:'',
      confirm:'',
      actions:'',
      id: '',
      created:'',
      name: '',
      updated:'',
      info:'',
      auction: [],
      add:true,
      endAt:'',
      warranty:'',
      save:true,
      close1:true,
      assest:'',
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      users:[],
    };
  },
  components: {
    // Login
  },
  methods: { 
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
    clickinfo(){
          this.axios.get(this.url+'/user/me',{
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY') }
          }).then((response) => { this.users=response.data});
      //  console.log(this.url);
      },
    clickAdd1:async function(){
    await this.axios.post(this.url+'/auction/',{ "assest": this.assest,
      "bidPrice": this.bidPrice,"endAt": this.endAt, "startAt": this.startAt, "warranty": this.warranty
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    await this.axios.get(this.url+'/auction'
       ).then((response) => { this.auction=response.data})
    },
    clickUpdate1:async function(){
      this.axios.get(this.url+'/auction'
       ).then((response) => { this.auction=response.data})
    },
    clickSearch1: async function(){
       await this.axios.get(this.url+'/auction/'+this.id).then((response) => this.userSearch = response);
       console.log(this.userSearch.data.name);
       this.searchCheck=2;
    },
    clickConfirm(id){
      this.axios.post(this.url+'/auction/updateStatus/'+id+"?status="+this.status,{"status":this.status},{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    clickdelete1(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
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
// .test td{
//     max-width: 100px;
//     overflow: hidden;
//     white-space: nowrap; 
//     text-overflow: ellipsis;
// }
#add{
  margin-top:50px;
}
#add1{
  margin-top:22px;
  margin-left:-267px;
}
#button_add{
  margin-left:-51px;
  margin-top:22px;
}
.test1{
  padding:10px 5px;
}
#smbutton2{
  padding:22px 5px;
  display:flex;
}
</style>
