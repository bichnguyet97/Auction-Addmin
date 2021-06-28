<template>
  <div>
    <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
     <div >

            <div class="row ml-2 mt-2">
                <h5 style="margin-top:10px;">Search</h5>
                <div class="search-wrapper panel-heading col-sm-2 m">
                  <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                </div>
                <h5 style="margin-top:10px;">Trạng thái</h5>
                <div class="search-wrapper panel-heading col-sm-2 m">
                  <select v-model="searchQuery" class="form-control">
                    <option disable value="">All</option>
                    <option value="complete">Hoàn Thành</option>
                    <option value="Pending">Chưa Hoàn Thành</option>
                  </select>
                </div>                        
            </div>
          <div style="overflow-x:auto;">
         <sorted-table class="table table-striped mt-2" v-bind:values="resultQuery">
            <thead>
                <tr>
                <th scope="col">
                  <sort-link name="id">ID</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="amount">Số lượng</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="fromUser">ID người gửi</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="toUser">ID người nhận</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="hash">Mã hash</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="note">Tin nhắn</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="created">Ngày tháng</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="status">Trạng thái</sort-link>
                </th>
                <th scope="col">
                  <sort-link name="amount">Actions</sort-link>
                </th>
                </tr>
            </thead>
            <template #body="sort">
            <tbody>

                <!-- <tr>
                <td colspan="4"></td>
                <td>
                    <span>
                    <b-button v-b-modal.modalPopover style="margin-top:5px;width:53%;" size="sm" v-on:click="clickConfirm3(auction.auction.id)" variant="info">Xác nhận tất cả</b-button>
                    <b-button v-b-modal.modalPopover style="margin-top:5px;width:50%;" size="sm" v-on:click="clickConfirm1(auction.auction.id)" variant="danger">Huỷ tất cả</b-button>
                    </span>
                </td>
                </tr> -->
                <tr v-for="transactions2 in sort.values" v-bind:key="transactions2.id">
                <!-- <td scope="row">
                    <img style="width: 200px;" class="" :src="auction.asset.images.split(',',1)" alt="">
                </td> -->
                <td style="white-space: normal;" scope="row">
                    {{transactions2.id}}
                </td>
                <td style="white-space: normal;">
                    {{transactions2.amount}}
                </td>
                <td style="white-space: normal;">
                  <!-- {{transactions2.fromUser}} -->
                  <router-link :to="{ name: 'detailUser', params: { id: transactions2.fromUser }}">{{transactions2.fromUser}}</router-link>
                </td>
                <td style="white-space: normal;">
                  {{transactions2.toUser}}
                </td>
                <td  class="test" style="white-space: normal;">
                  <!-- <a href="https://tronscan.org/#/transaction/+'transactions2.hash'" target="_blank">{{transactions2.hash}}</a> -->
                  <a v-bind:href="'https://tronscan.org/#/transaction/'+ transactions2.hash" target="_blank">{{transactions2.hash}}</a>
                  <!-- {{transactions2.hash}} -->
                </td>
                <!-- <td><span class="f-13 mr-1 d-block mb-1">ID người gửi: {{transactions2.fromUser}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">Địa chỉ gửi: {{transactions2.fromAddress}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">ID người nhận: {{transactions2.toUser}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">Địa chỉ nhận: {{transactions2.toAddress}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">Mã hash: {{transactions2.hash}}</span></td> -->
                <td style="white-space: normal;">{{transactions2.note}}</td>
                <td style="white-space: normal;">
                  <!-- {{transactions2.created}} -->
                    <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(transactions2.created,'date')"></span>
                    <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(transactions2.created,'time')"></span>

                </td>
                <td>
                    <!-- <span>
                    <b-button style=" width:55%;" size="sm" variant="info" v-if="transactions2.status == 'complete'">HOÀN THÀNH</b-button>
                    <b-button style=" width:55%;" size="sm" variant="danger" v-if="transactions2.status == 'Pending'">ĐANG XỬ LÝ</b-button>
                    </span> -->
                  <span class="badge badge-success wf-85" v-if="transactions2.status == 'complete' ">HOÀN THÀNH</span>
                  <span class="badge badge-warning wf-85" v-if="transactions2.status == 'Pending'">ĐANG XỬ LÝ</span>
                </td>
                <td>
                    <span>
                      <!-- <base-button size="sm" outline type="info" @click="handleClick(asset.id)" >
                       
                        <router-link :to="{ name: 'detailEditAsset', params: { }}">Chi tiết</router-link>
                      </base-button> -->
                      <base-button style="width:auto;" outline type="info" id="show-btn" @click="$bvModal.show('bv-modal-example'),clickDetail(setId=transactions2.id)">Chi tiết</base-button>

                    </span>
                </td>

                <!-- <td>
                    <option v-if="transactions.status == 'complete'">HOÀN THÀNH</option>
                    <option v-if="transactions.status == 'Pending'">ĐANG XỬ LÝ</option> 
                </td> -->
                </tr>
                  <b-modal id="bv-modal-example" hide-footer>
                    <template #modal-title>
                       Lịch Sử Giao Dịch
                    </template>
                    <div class="d-block text-center">
                         <div class="modal-body">
                           <ul  style="padding:0" >
                            <!-- <li class="pt-0"> -->
                              <div class="row mb-3">
                                <div class="col-auto font-weight-bold ng-binding">Mã giao dịch</div>
                                <div class="col ng-binding">{{detail.id}}</div>
                              </div>
                              <div class="row mb-3">
                                <div class="col-auto font-weight-bold ng-binding">Số tiền</div>
                                <div class="col text-danger font-weight-bold ng-binding">{{detail.amount}} {{detail.currency}}</div>
                              </div>
                              <div class="row align-items-center mb-4">
                                <div class="col-auto font-weight-bold ng-binding">Trạng thái</div>
                                <div class="col">
                                  <!-- <b-button size="sm" variant="info"></b-button> -->
                                  <b-button size="sm" variant="info" v-if="detail.status == 'complete'">HOÀN THÀNH</b-button>
                                  <b-button size="sm" variant="danger" v-if="detail.status == 'Pending'">ĐANG XỬ LÝ</b-button>
                                </div>
                              </div>	
                            <!-- </li> -->
                            <!-- <li> -->
                              <div class="row mb-3">
                                <div class="col-auto font-weight-bold ng-binding">Địa chỉ người gửi</div>
                                <div style="word-break: break-all;" class="col ng-binding">{{detail.fromAddress}}</div>
                              </div>

                              <!-- <div class="row mb-3">
                                <div class="col-auto font-weight-bold ng-binding">Địa chỉ người nhận</div>
                                <div class="col ng-binding">{{detail.toAddress}}/div> 
                              </div> -->
                              <div class="row mb-4">
                                <div class="col-auto font-weight-bold">Txid</div>
                                <div style="word-break: break-all;" class="col ng-binding">{{detail.hash}}</div>
                              </div>
                               
                              <!-- <div class="row mb-3" ng-show="choosedTran.additionInfo.bankName!=undefined">
                                <div class="col-auto font-weight-bold ng-binding">Tên ngân hàng</div>
                                <div class="col ng-binding">TCB</div>
                              </div> -->
                              <div class="row mb-3" ng-show="choosedTran.additionInfo.accountNumber!=undefined">
                                <div class="col-auto font-weight-bold ng-binding">ID người gửi</div>
                                <div class="col ng-binding">{{detail.fromUser}}</div>
                              </div>
                              <div class="row mb-3" ng-show="choosedTran.additionInfo.accountName!=undefined">
                                <div class="col-auto font-weight-bold ng-binding">ID người nhận</div>
                                <div class="col ng-binding">{{detail.toUser}}</div>
                              </div>
                              <div class="row mb-3">
                                <div class="col-auto font-weight-bold ng-binding">Ngày tháng</div>
                                <div class="col ng-binding">{{formatDatetime(detail.created,'date')}} {{formatDatetime(detail.created,'time')}}</div>
                                <!-- <div class="col ng-binding">{{formatDatetime(detail.created,'date')}} {{formatDatetime(detail.created,'time')}}</div> -->
                                <!-- <span class="col ng-binding" v-html="formatDatetime(detail.created,'date') "> </span>
                                <span class=" " v-html="formatDatetime(detail.created,'time') "> </span> -->
                                 
                              </div>
                              <div class="row">
                                <div class="col-auto font-weight-bold ng-binding">Nội dung</div>
                                <div class="col ng-binding">{{detail.note}}</div>
                              </div>
                            <!-- </li> -->
                          </ul>
                         </div>
                    </div>
                    <b-button class="mt-3" block><a v-bind:href="'https://tronscan.org/#/transaction/'+ detail.hash" target="_blank">Check Export</a></b-button>
                  </b-modal>
            </tbody>
             </template>   
        </sorted-table>
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
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import axios from "axios";
import VueAxios from "vue-axios";
import SortedTablePlugin from "vue-sorted-table";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.use(VueClipboard);
Vue.use(SortedTablePlugin);
export default {
  data() {
    this.axios.get(
        process.env.VUE_APP_MY_ENV_VARIABLE + "/wallet/transactions",
        {
          headers: {
            Authorization: this.getCookie("AC-ACCESS-KEY"),
          },
        }
      ).then((response) => {
        this.transactions = response.data;
        this.transactions2 = this.transactions.slice(0, this.perPage-1), 
        this.totalPage = Math.ceil(response.data.length / this.perPage)
      });
    console.log(this.transactions);
    this.axios.get(
        process.env.VUE_APP_MY_ENV_VARIABLE +"/auction/auction_status/Upcoming",
        {
          headers: {
            Authorization: this.getCookie("AC-ACCESS-KEY"),
          },
        }
      ).then((response) => {
        this.auctionnn = response.data;
      });
    console.log(this.auctionnn);
    // var auction = [];
    // this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => { this.auction=response.data});
    // console.log(auction);

  
    return {
      detail:{
        id:'',
        fromUser:'',
        fromAddress:'',
        toUser:'',
        note:'',
        toAddress:'',
        status:'',
        currency:'',
        amount:'',
        hash:'',
        created:''
      },
      bidPrice: "",
      currentPrice: "",
      finalPrice: "",
      status: "",
      startAt: "",
      auctionnn: [],
      transactions:[],
      creaded: "",
      tags: "",
      transactions2:[],
      shape: "",
      avatar: "",
      weight: "",
      brightness: "",
      toiletsNumber: "",
      bedroomsNumber: "",
      asset: [],
      province: "",
      confirm: "",
      actions: "",
      id: "",
      showInBaner: "",
      attendanceDeadline: "",
      created: "",
      name: "",
      acreage: "",
      image: [],
      Search1: [],
      mobile: "",
      hinh: "true",
      updated: "",
      info: "",
      area: "",
      asse: [],
      auction: [],
      add: true,
      endAt: "",
      category: "",
      homeNetwork: "",
      note: "",
      direction: "",
      save: true,
      trademark: "",
      close1: true,
      assest: "",
      yearOld: "",
      Search: "",
      amount: "",
      currentStatus: "",
      hihi: "ok",
      searchCheck: 1,
      url: process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate: "",
      users: [],
      currentPage : 1,
      perPage : 10,
      totalPage:0,
      page: 10,
      searchQuery: ""
    };
  },
  components: {
    // Login
  },
  methods: {
    openIn: function () {
      var close = document.querySelector(".closeIn");
      close.classList.add("openIn");
      this.save = true;
    },
    openEdit: function () {
      var close = document.querySelector(".closeEdit");
      close.classList.add("openEdit");
      this.save = true;
    },
    onclick(page){
      console.log(page);
      this.transactions2 = this.transactions.slice((page-1)*this.perPage,page*this.perPage-1)
      // this.page=page;
    },
    clickinfo() {
      this.axios
        .get(this.url + "/user/me", {
          headers: {
            Authorization: this.getCookie("AC-ACCESS-KEY"),
          },
        })
        .then((response) => {
          this.users = response.data;
        });
      //  console.log(this.url);
    },
    clickAdd1: async function () {
      await this.axios
        .post(
          this.url + "/auction/",
          {
            assest: this.assest,
            bidPrice: this.bidPrice,
            endAt: this.endAt,
            startAt: this.startAt,
          },
          {
            headers: {
              Authorization: this.getCookie("AC-ACCESS-KEY"),
            },
          }
        )
        .then((response) => console.log(response));
      await this.axios.get(this.url + "/auction").then((response) => {
        this.auction = response.data;
      });
    },
    clickUpdate1: async function () {
      this.axios.get(this.url + "/auction").then((response) => {
        this.auction = response.data;
      });
    },
    clickSearch1: async function () {
      await this.axios
        .get(this.url + "/auction/" + this.id)
        .then((response) => (this.userSearch = response));
      console.log(this.userSearch.data.name);
      this.searchCheck = 2;
    },
    clickConfirm(id) {
      this.axios
        .post(
          this.url + "/auction/update/" + id + "?status=Active",
          { status: this.status },
          {
            headers: {
              Authorization: this.getCookie("AC-ACCESS-KEY"),
            },
          }
        )
        .then(() => {
          this.axios
            .get(this.url + "/auction/auction_status/new")
            .then((response) => (this.auction = response.data));
        });
    },
    clickConfirm3(id) {
      this.axios
        .post(
          this.url + "/auction/update/" + id + "?status=Upcoming",
          { status: this.status },
          {
            headers: {
              Authorization: this.getCookie("AC-ACCESS-KEY"),
            },
          }
        )
        .then(() => {
          this.axios
            .get(this.url + "/auction/auction_status/new")
            .then((response) => (this.auction = response.data));
        });
    },
    clickConfirm2(id) {
      this.axios
        .post(
          this.url + "/auction/showInBaner/" + id + "?showInBaner=1",
          { showInBaner: this.showInBaner },
          {
            headers: {
              Authorization: this.getCookie("AC-ACCESS-KEY"),
            },
          }
        )
        .then(() => {
          this.axios
            .get(this.url + "/auction/auction_status/new")
            .then((response) => (this.auction = response.data));
        });
      console.log(this.hihi);
    },
    clickConfirm22(id) {
      this.axios.post(
          this.url + "/auction/showInBaner/" + id + "?showInBaner=0",{ showInBaner: this.showInBaner },
          {
            headers: {
              Authorization: this.getCookie("AC-ACCESS-KEY"),
            },
          }
        ).then(() => {
          this.axios.get(this.url + "/auction/auction_status/new"
          ).then((response) => (this.auction = response.data));
        });
      console.log(this.hihi);
    },
    clickConfirm1(id) {
      this.axios.post(
          this.url +
            "/auction/update/" +id +"?note=Thông tin tài sản của bạn bị thiếu hoặc sai, vui lòng nhập lại! cảm ơn!&status=Unaccept",{ status: this.status, note: this.note },
          {
            headers: {
              Authorization: this.getCookie("AC-ACCESS-KEY"),
            },
          }
        ).then(() => {
          this.axios
            .get(this.url + "/auction/auction_status/new")
            .then((response) => (this.auction = response.data));
        });
    },
    clickSearch2(id) {
      this.axios.get(this.url + "/asset/id/" + id).then((response) => {
        if (response.data) {
          (this.image = response.data.assets[0].images.split(",")),
            (this.Search1 = response.data),
            (this.Search = response.data.assets[0]),
            (this.Searchh = response.data.auctions[0]),
            (this.auc = response.data.auctions[0]),
            (this.asse = response.data.assets[0]),
            (this.teid = response.data.assets[0].auctions[0].id);
        }
      });
      console.log(this.Searchh);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // clickSearch3(id){
    //   this.axios.get(this.url+'/auction/id/'+id)
    //   .then((response) => {this., this.Search=response.data, this.auc=response.data.auctions[0], this.asse=response.data
    //   });
    //     console.log(this.auc);
    // },
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
    getCookie: function (cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    formatDatetime: function (datetime,type) {

      if(datetime != ''){
        var a =datetime.split("T");

          if(a.length > 1){
           if(type=='date'){
                return a[0];

              }else{
                  var b = a[1].split(".");
                  return b[0]
              }
          }return "";
      }return "";
     

    },
    clickDetail(id){
      // console.log("id: " + id);
      this.transactions.forEach(item => {
          if(item.id === id){
            // console.log("hi"+item);
            this.detail.id=item.id;
            this.detail.amount = item.amount;           
            this.detail.status=item.status;
            this.detail.fromUser=item.fromUser;
            this.detail.fromAddress=item.fromAddress;
            this.detail.toUser=item.toUser;
            this.detail.toAddress=item.toAddress;
            this.detail.note=item.note;
            this.detail.currency=item.currency;
            this.detail.hash=item.hash;
            this.detail.created=item.created;
          }
      })
    }
  },
computed: {
    resultQuery(){
      if(this.searchQuery){
        
        return  this.transactions.filter((item)=>{                
        return   this.searchQuery.toLowerCase().split(' ').every(v => ((item.fromAddress + '').toLowerCase().includes(v) 
                || (item.toAddress + '').toLowerCase().includes(v))
                || (item.toUser + '').toLowerCase().includes(v)
                || (item.fromUser + '').toLowerCase().includes(v)
                || (item.hash + '').toLowerCase().includes(v)
                || (item.status + '').toLowerCase().includes(v)
                )
        });
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        // this.totalPage = Math.ceil(list.length /  this.perPage);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        // this.transactions2=list;
        // return '';  
      }else{
        console.log("3");
        return this.transactions2;
      }
    }
}


};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  
}

.pagination li {
  border: 0.1rem solid rgb(68, 185, 240);
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
  background-color: #34c0c0;
  color: white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}
.col-2 {
  margin-top: 25px;
  margin-bottom: 20px;
  margin-left: 50px;
}
.row {
  display: flex;
}
employee-list {
  margin: 0 100px 0 66px;
}
.closeIn {
  display: none;
}
.closeIn.openIn {
  display: block;
}
.closeEdit {
  display: none;
}
.closeEdit.openEdit {
  display: block;
}
.col-2 {
  font-size: 18px;
  font-weight: bold;
  color: #428bca;
}
.col-md-3 {
  font-size: 16px;
  font-weight: bold;
  color: #ca425f;
}
// .test td {
//     max-width: 100px;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
// }
#add {
  margin-top: 50px;
}
#add1 {
  margin-top: 22px;
  margin-left: -267px;
}
#button_add {
  margin-left: -51px;
  margin-top: 22px;
}
.test1 {
  padding: 10px 5px;
}
#smbutton2 {
  padding: 22px 5px;
  display: flex;
}
#right {
  margin-top: -179px;
}
#borde {
  margin-left: 903px;
  margin-top: -201px;
}
#innit {
  margin-top: 180px;
}
.sze {
  height: 900px;
  width: 400px;
}
.test{
  max-width: 100px;
  overflow: hidden;
  // white-space: nowrap; 
  text-overflow: ellipsis;
}
</style>
