<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auction in auction" v-bind:key="auction.id" class="card-text pt-1">
                            <div class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img class="w-100" src="img/brand/th1.jpg" alt="">
                                  </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auction.asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản: {{auction.asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{auction.asset.category}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá niêm yết:{{auction.initPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Ngày đăng:{{auction.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật:{{auction.updated}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{auction.asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản: {{auction.asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">
                                                  <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auction.auction.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{auction.auction.startAt}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{auction.auction.endAt}}</span>
                                                  <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm(auction.auction.id)" variant="info">Xác nhận</b-button>
                                                  <!-- <h3>Nhập lý do không xác nhận</h3>
                                                  <input v-model="note" class="mr-sm-2" id="note" name="note" type="text" value> -->
                                                  <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm1(auction.auction.id)" variant="danger">Không xác nhận</b-button>
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                                    <div class="user-sum ml-3">
                                      <h5 class="f-15 mb-2 font-weight-600">{{auction.user.name}}</h5>
                                      <p class="f-13 mb-0">
                                        <span class="d-block">
                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                          {{auction.user.mobile}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                          {{auction.user.email}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-share" aria-hidden="true"></i>
                                          {{auction.user.address}}
                                        </span>
                                      </p>
                                    </div>
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
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/new',{
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then((response) =>  { this.auction=response.data});
    console.log(this.auction);
    // var auction = [];
    // this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => { this.auction=response.data});
    // console.log(auction);
    return {
      bidPrice: '',
      currentPrice:'',
      finalPrice:'',
      status:'',
      startAt:'',
      creaded:'',
      tags:'',
      asset:[],
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
      note:'',
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
      "bidPrice": this.bidPrice,"endAt": this.endAt, "startAt": this.startAt
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
      this.axios.post(this.url+'/auction/update/'+id+"?status=Active", {"status":this.status}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auction=response.data);
      });
    },
    clickConfirm1(id){
      this.axios.post(this.url+'/auction/update/'+id+"?note=Thông tin tài sản của bạn bị thiếu hoặc sai, vui lòng nhập lại! cảm ơn!"+"&status=Unaccept", {"status":this.status, "note":this.note}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auction=response.data);
      });
    },
    // clickdelete1(id){
    //   this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
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
#right{
  margin-top:-179px;
}
#borde{
  margin-left: 903px;
  margin-top: -201px;
}
</style>
