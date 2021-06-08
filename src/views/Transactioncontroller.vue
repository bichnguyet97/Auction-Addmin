<template>
  <div>
    <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
     <div>
         <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giao dịch</th>
                <th scope="col">Tin nhắn</th>
                <th scope="col">Ngày tháng</th>
                <th scope="col">Actions </th>
                </tr>
            </thead>
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
                <tr v-for="transactions in transactions" v-bind:key="transactions.id">
                <!-- <td scope="row">
                    <img style="width: 200px;" class="" :src="auction.asset.images.split(',',1)" alt="">
                </td> -->
                <td style="white-space: normal;width:10%;" scope="row">
                    {{transactions.id}}
                </td>
                <td style="white-space: normal;width:25%;">
                    {{transactions.amount}}
                </td>
                <td><span class="f-13 mr-1 d-block mb-1">ID người gửi: {{transactions.fromUser}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">Địa chỉ gửi: {{transactions.fromAddress}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">ID người nhận: {{transactions.toUser}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">Địa chỉ nhận: {{transactions.toAddress}}</span>
                                        <span class="f-13 mr-1 d-block mb-1">Mã hash: {{transactions.toAddress}}</span></td>
                <td style="white-space: normal;width:25%;">{{transactions.note}}</td>
                <td style="white-space: normal;width:25%;">{{transactions.created}}</td>
                <td>
                    <span>
                    <b-button style=" width:100%;" size="sm" variant="info" v-if="transactions.status == 'complete'">HOÀN THÀNH</b-button>
                    <b-button style=" width:100%;" size="sm" variant="danger" v-if="transactions.status == 'Pending'">ĐANG XỬ LÝ</b-button>
                    </span>
                </td>
                <!-- <td>
                    <option v-if="transactions.status == 'complete'">HOÀN THÀNH</option>
                    <option v-if="transactions.status == 'Pending'">ĐANG XỬ LÝ</option> 
                </td> -->
                </tr>
                    
            </tbody>
                
        </table>
     </div>
     
  </div>
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.use(VueClipboard);
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
      bidPrice: "",
      currentPrice: "",
      finalPrice: "",
      status: "",
      startAt: "",
      auctionnn: [],
      transactions:[],
      creaded: "",
      tags: "",
      
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
  },
};
</script>

<style lang="scss">
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
</style>
