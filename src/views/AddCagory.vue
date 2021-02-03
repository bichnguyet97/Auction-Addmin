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
        <div class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div class="card-text pt-1">
                            <div class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                                    <div class="user-avatar mb-3 text-center">
                                        <img class="w-100" src="img/brand/s500.jpg" alt="">
                                    </div>
                                </div>
                                <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tên loại <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="name" type="" class="form-control form-control-user fs-090" placeholder="ô tô" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Alias <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="alias" type="" class="form-control form-control-user fs-090" placeholder="o-to" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Hình ảnh <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="avatar" type="" class="form-control form-control-user fs-090" placeholder="https://placekitten.com/300/300" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="col-2 offset-8">
                                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                                            </div>
                                        </div>
                                        <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <p>
                                            Tạo loại thành công !
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
        }).then((response) =>  { this.asset=response.data});
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
      avatar:'',
      alias:'',
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
    clickAdd1:async function(){
     await this.axios.post(this.url+'/category',{ "name": this.name,
      "alias": this.alias, "category":this.category
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
     await this.axios.get(this.url+'/category',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => { this.category=response.data})
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
