<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
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
        <div class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div class="card-text pt-1">
                            <div v-for="asset in asset" v-bind:key="asset.id" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                    <div class="user-avatar mb-3 text-center">
                                      <img class="w-100" :src="asset.images" alt="">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã: {{asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{asset.category}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Giá niêm yết: {{asset.initPrice}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày đăng: {{asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật: {{asset.updated}}</span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col12 col-xl-11 col-lg-5" id="right">
                                  <div class="text-right bid-pri-box">
                                    <div class="pri-bid mb-3">
                                      <span class="f-13 mr-1 d-block mb-1">Giá hiện tại:</span>
                                      <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{asset.currentPrice}} VNDT</strong>
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
                              Bạn đã xác nhận tài sản thành công !
                              </p>
                          </b-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container-fluid mt--7">
          <div class="row">
              <div class="col">
                  <projects-table title="Light Table"></projects-table>
              </div>
          </div>
          <div class="row mt-5">
              <div class="col">
                  <projects-table type="dark" title="Dark Table"></projects-table>
              </div>
          </div>
        </div> -->

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
    var asset = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset'
        ).then((response) => { this.asset=response.data});
    console.log(asset);
    return {
      initPrice: '',
      close2:'true',
      currentPrice:'',
      finalPrice:'',
      images:'',
      category:'',
      creaded:'',
      tags:'',
      seller:'',
      actions:'',
      id: '',
      name: '',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      info:'',
      status:'',
      asset: [],
      add:true,
      sessionId:'',
      save:true,
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:''
    };
  },
  components: {
    // Login
  },
  methods: {
    clickUpdate1:async function(){
      this.axios.get(this.url+'/asset'
       ).then((response) => { this.asset=response.data})
    },
    // clickSearch1: async function(){
    //   await this.axios.get(this.url+'/asset/id/'+this.id).then((response) => this.userSearch = response);
    //   console.log(this.userSearch.data.name);
    //   this.searchCheck=2;
    // },
    // clickSearch: async function(){
    //   await this.axios.get(this.url+'/asset/byCategory/'+this.category).then((response) => this.userSearch = response);
    //   this.searchCate=this.userSearch;
    //   this.searchCheck=3;
    //   console.log(this.userSearch.data);
    // }
    // clickConfirm(id){
    //   this.axios.post(this.url+'/asset/updateStatus/'+id+"?status="+this.status,{"status":this.status},{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
    // clickdelete1(id){
    //   this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
    clickconfirm(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=Đã xác nhận",{
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
<style>
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
.mb-0{
  font-size: 18px;
  font-weight: bold;
  color: #428bca;
}
.col-md-3{
  font-size: 16px;
  font-weight: bold;
  color: #ca425f;
}
.test{
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;
}
.text-right{
  margin-left:10px;
}
#smbutton{
  padding:10px 5px;
  display:flex;
}
#smtaomoi{
  margin-top:35px;
}
#right{
  margin-top:-137px;
}
</style>
