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
                          Bid Controller
                            <span>
                              <i class="fa fa-reply" aria-hidden="true"></i>
                            </span>
                        </div>
                        <form class="form-inline my-2 my-lg-0">
                        <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(bid.id)">SearchID</button>
                        </form>
                        <div @click="openIn" class="col-2 offset-8">
                          <button type="button" class="btn btn-primary">Tạo mới</button>
                        </div>
                      </div>
                      <div class="closeIn">
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="">Auction<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="auction" class="form-control" id="auction" name="auction" type="text" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Bid Price<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="bidPrice" class="form-control" id="bidPrice" name="bidPrice" type="text" value>
                          </div>
                          <div class="col-2 offset-8">
                            <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                          </div>
                        </div>
                      </div>
                      <div class="">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Giá dự thầu</th>
                            <th scope="col">Tạo</th>
                            <th scope="col">cập nhật</th>
                            <th scope="col">Mã đấu giá</th>
                          </tr>
                        </thead>
                        <tbody class="test" v-if="searchCheck==1">
                          <tr v-for="bid in bid" v-bind:key="bid.id">
                            <th scope="row">{{bid.id}}</th>
                            <td>{{bid.status}}</td>
                            <td>{{bid.bidPrice}}</td>
                            <td>{{bid.created}}</td>
                            <td>{{bid.updated}}</td>
                            <td>{{bid.auctionId}}</td>
                          </tr>
                        </tbody>
                        <tbody class="test" v-if="searchCheck==2">
                          <tr>
                            <th scope="row">{{userSearch.data.id}}</th>
                            <td>{{userSearch.data.status}}</td>
                            <td>{{userSearch.data.bidPrice}}</td>
                            <td>{{userSearch.data.created}}</td>
                            <td>{{userSearch.data.updated}}</td>
                            <td>{{userSearch.data.startAt}}</td>
                            <td>{{userSearch.data.endAt}}</td>
                            <td style="color:red;">{{userSearch.data.confirm}}</td>
                            <td>
                              <span>
                                <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(bid.id)">Yes</button>
                                <button type="button" class="btn btn-warning" @click="clickConfirmfalse(bid.id)">No</button>
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
    var bid = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/bid',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.bid=response.data});
    console.log(bid);
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
      auction:'',
      created:'',
      name: '',
      updated:'',
      info:'',
      bid: [],
      add:true,
      endAt:'',
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
    await this.axios.post(this.url+'/bid',{ "auction": this.auction,
      "bidPrice":this.bidPrice
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    await this.axios.get(this.url+'/bid'
       ).then((response) => { this.bid=response.data})
    },
    clickUpdate1:async function(){
      this.axios.get(this.url+'/bid'
       ).then((response) => { this.bid=response.data})
    },
    clickSearch1: async function(){
       await this.axios.get(this.url+'/bid/'+this.id).then((response) => this.userSearch = response);
       console.log(this.userSearch.data.name);
       this.searchCheck=2;
    },
    clickConfirmtrue(id){
      this.axios.get(this.url+'/bid/confirmTrue/'+id , {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    clickConfirmfalse(id){
      this.axios.get(this.url+'/bid/confirmFalse/'+id , {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    // clickSearch: async function(){
    //    await this.axios.get(this.url+'/bid/category/'+this.category).then((response) => this.userSearch = response);
    //    this.searchCate=this.userSearch;
    //    this.searchCheck=3;
    //    console.log(this.userSearch.data);
    // },
    // clickdelete1(id){
    //   this.axios.delete(this.url+'/bid/delete/'+id , {
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
</style>
