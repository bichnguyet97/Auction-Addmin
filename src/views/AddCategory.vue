<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >

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
                                class="mb-4 mb-xl-0"
                    >

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
                                class="mb-4 mb-xl-0"
                    >

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
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>
        <!-- <div class="row">
        <div @click="searchCheck=1" class="col-2">
            Auction Controller
            <span>
                <i class="fa fa-reply" aria-hidden="true"></i>
            </span>
        </div>
        <form class="form-inline my-2 my-lg-0">
        <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(auction.id)">SearchID</button>
        </form>
        <div @click="openIn" class="col-2 offset-8">
            <button type="button" class="btn btn-primary">Tạo mới</button>
        </div>
        </div>
        <b-container fluid>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Tạo mới</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo4" @click="showInfo4=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo4" @click="showInfo4=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo4">
                 <div class="form-group">
                    <label class="col-md-3 control-label" for="">Assest<strong>*</strong></label>
                    <div class="col-md-9"> 
                    <input v-model="assest" class="form-control" id="assest" name="assest" type="text" placeholder="assest" value>
                    </div>
                    <label class="col-md-3 control-label" for="">Bid Price<strong>*</strong></label>
                    <div class="col-md-9"> 
                    <input v-model="bidPrice" class="form-control" id="bidPrice" name="bidPrice" type="text" placeholder="bidPrice" value>
                    </div>
                    <label class="col-md-3 control-label" for="">Status<strong>*</strong></label>
                    <div class="col-md-9"> 
                    <input v-model="status" class="form-control" id="status" name="status" type="text" placeholder="status" value>
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
                    </div>
                </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Danh sách đấu giá</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo1" @click="showInfo1=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo1" @click="showInfo1=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo1">
                <div class="employee-list">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Giá dự thầu</th>
                        <th scope="col">Tạo</th>
                        <th scope="col">cập nhật</th>
                        <th scope="col">Bắt đầu</th>
                        <th scope="col">Kết thúc</th>
                        <th scope="col">Xác nhận</th>
                        <th scope="col">Confirm</th>
                        </tr>
                    </thead>
                    <tbody class="test" v-if="searchCheck==1">
                        <tr v-for="auction in auction" v-bind:key="auction.id">
                        <th scope="row">{{auction.id}}</th>
                        <td >{{auction.status}}</td>
                        <td >{{auction.bidPrice}}</td>
                        <td >{{auction.created}}</td>
                        <td >{{auction.updated}}</td>
                        <td >{{auction.startAt}}</td>
                        <td >{{auction.endAt}}</td>
                        <td style="color:red;">{{auction.confirm}}</td>
                        <td>
                            <span>
                            <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(auction.id)">Yes</button>
                            <button type="button" class="btn btn-warning" @click="clickConfirmfalse(auction.id)">No</button>
                            </span>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Danh sách đấu giá đã xác nhận</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo2" @click="showInfo2=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo2" @click="showInfo2=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo2">
                <div class="employee-list">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Giá dự thầu</th>
                        <th scope="col">Tạo</th>
                        <th scope="col">cập nhật</th>
                        <th scope="col">Bắt đầu</th>
                        <th scope="col">Kết thúc</th>
                        <th scope="col">Xác nhận</th>
                        <th scope="col">Confirm</th>
                        </tr>
                    </thead>
                    <tbody class="test" v-if="searchCheck==1">
                        <tr v-for="auction in auction" v-bind:key="auction.id">
                        <th v-if="auction.confirm==true" scope="row">{{auction.id}}</th>
                        <td v-if="auction.confirm==true">{{auction.status}}</td>
                        <td v-if="auction.confirm==true">{{auction.bidPrice}}</td>
                        <td v-if="auction.confirm==true">{{auction.created}}</td>
                        <td v-if="auction.confirm==true">{{auction.updated}}</td>
                        <td v-if="auction.confirm==true">{{auction.startAt}}</td>
                        <td v-if="auction.confirm==true">{{auction.endAt}}</td>
                        <td v-if="auction.confirm==true" style="color:red;">{{auction.confirm}}</td>
                        <td v-if="auction.confirm==true">
                            <span>
                            <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(auction.id)">Yes</button>
                            <button type="button" class="btn btn-warning" @click="clickConfirmfalse(auction.id)">No</button>
                            </span>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Danh sách đấu giá chưa xác nhận</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo3" @click="showInfo3=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo3" @click="showInfo3=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo3">
                <div class="employee-list">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Giá dự thầu</th>
                        <th scope="col">Tạo</th>
                        <th scope="col">cập nhật</th>
                        <th scope="col">Bắt đầu</th>
                        <th scope="col">Kết thúc</th>
                        <th scope="col">Xác nhận</th>
                        <th scope="col">Confirm</th>
                        </tr>
                    </thead>
                    <tbody class="test" v-if="searchCheck==1">
                        <tr v-for="auction in auction" v-bind:key="auction.id">
                        <th v-if="auction.confirm==false" scope="row">{{auction.id}}</th>
                        <td v-if="auction.confirm==false">{{auction.status}}</td>
                        <td v-if="auction.confirm==false">{{auction.bidPrice}}</td>
                        <td v-if="auction.confirm==false">{{auction.created}}</td>
                        <td v-if="auction.confirm==false">{{auction.updated}}</td>
                        <td v-if="auction.confirm==false">{{auction.startAt}}</td>
                        <td v-if="auction.confirm==false">{{auction.endAt}}</td>
                        <td v-if="auction.confirm==false" style="color:red;">{{auction.confirm}}</td>
                        <td v-if="auction.confirm==false">
                            <span>
                            <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(auction.id)">Yes</button>
                            <button type="button" class="btn btn-warning" @click="clickConfirmfalse(auction.id)">No</button>
                            </span>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        </b-container>
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table> -->
        <div class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="asset in asset" v-bind:key="asset.id" class="card-text pt-1">
                            <div class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                    <div class="user-avatar mb-3 text-center">
                                      <img class="w-100" :src="asset.images" alt="">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản:{{asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản:{{asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại:{{asset.category}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá niêm yết:{{auction.initPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Ngày đăng:{{auction.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật:{{auction.updated}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản:{{asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản:{{asset.updated}}</span>

                                                <span v-for="auctions in asset.auctions" v-bind:key="auctions.id" class="f-13 mr-1 d-block mb-1" >
                                                  <div v-if="auctions.status=='New'">
                                                    <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auctions.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá:{{auctions.created}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá:{{auctions.updated}}</span>
                                                  </div>
                                                  
                                                </span>
                                                 
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col12 col-xl-11 col-lg-5" id="right">
                                  <div class="text-right bid-pri-box">
                                    <div class="pri-bid mb-3">
                                      <span class="f-13 mr-1 d-block mb-1">Giá hiện tại:</span>
                                      <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{asset.currentPrice}}  VNDT</strong>
                                    </div>
                                    <div class="link-box">
                                      <span>
                                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                      </span>
                                      <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickconfirm(asset.id)" variant="primary">Xác nhận</b-button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <b-modal id="modalPopover" title="Thông báo" ok-only>
                              <p>
                              Bạn đã xác nhận đấu giá thành công !
                              </p>
                          </b-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => console.log(response.data[90].images.split(',',1)));
      console.log(this.asset);
      // console.log(response.data[0].auctions[0].id)
    // for(var i =0;i>auction.length;i++) {
    //     for(var j =0;j<auction.lenght;j++) {
    //         if(502){
    //             this.asset=response.data;
    //         }
    //     }
    // }
    return {
      new:'',
      bidPrice: '',
      currentPrice:'',
      finalPrice:'',
      status:'',
      startAt:'',
      creaded:'',
      auctions:[],
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
      save:true,
      assest:'',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      asset:[]
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
    clickAdd1:async function(){
    await this.axios.post(this.url+'/auction/',{ "assest": this.assest,
      "bidPrice": this.bidPrice,"status":this.status
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    await this.axios.get(this.url+'/auction'
       ).then((response) => { this.asset=response.data})
    },
    clickUpdate1(){
      this.axios.get(this.url+'/asset'
       ).then((response) => {console.log(response.data)})
    },
    clickSearch1: async function(){
       await this.axios.get(this.url+'/auction/'+this.id).then((response) => this.userSearch = response);
       console.log(this.userSearch.data.name);
       this.searchCheck=2;
    },
    clickConfirmtrue(id){
      this.axios.get(this.url+'/auction/confirmTrue/'+id , {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    clickConfirmfalse(id){
      this.axios.get(this.url+'/auction/confirmFalse/'+id , {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    // clickSearch: async function(){
    //    await this.axios.get(this.url+'/auction/category/'+this.category).then((response) => this.userSearch = response);
    //    this.searchCate=this.userSearch;
    //    this.searchCheck=3;
    //    console.log(this.userSearch.data);
    // },
    // clickdelete1(id){
    //   this.axios.delete(this.url+'/auction/delete/'+id , {
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
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
.employee-list{
  margin:0 100px 0 66px;
}
.text-right{
    margin-left:10px;
}
#right{
  margin-top:-137px;
}
</style>
