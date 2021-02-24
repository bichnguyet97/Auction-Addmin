<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
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
                                        <img class="w-100" src="img/brand/th4.jpg" alt="">
                                    </div>
                                </div>
                                <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập mã tài sản <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="assest" type="" class="form-control form-control-user fs-090" value="2502" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                Tỉnh thành<span class="text-danger">*</span>
                                            </label>
                                            <base-input>
                                            <select v-model="area" class="form-control form-control-user fs-090">
                                                <option disable value="">Chọn tỉnh thành</option>
                                                <option value="24">Hà Nội</option>
                                                <option value="30">Hồ Chí Minh</option>
                                                <option value="15">Đà Nẵng</option>
                                                <option value="28">Hải Phòng</option>
                                                <option value="14">Cần Thơ</option>
                                                <option value="58">Thừa Thiên - Huế</option>
                                                <option value="50">Quảng Ninh</option>
                                                <option value="1">An Giang</option>
                                                <option value="2">Bà Rịa-Vũng Tàu</option>
                                                <option value="5">Bắc Giang</option>
                                                <option value="4">Bắc Kạn</option>
                                                <option value="3">Bạc Liêu</option>
                                                <option value="6">Bắc Ninh</option>
                                                <option value="7">Bến Tre</option>
                                                <option value="8">Bình Dương</option>
                                                <option value="9">Bình Định</option>
                                                <option value="10">Bình Phước</option>
                                                <option value="11">Bình Thuận</option>
                                                <option value="12">Cà Mau</option>
                                                <option value="13">Cao Bằng</option>
                                                <option value="16">Đắk Lắk</option>
                                                <option value="17">Đắk Nông</option>
                                                <option value="18">Điện Biên</option>
                                                <option value="19">Đồng Nai</option>
                                                <option value="20">Đồng Tháp</option>
                                                <option value="21">Gia Lai</option>
                                                <option value="22">Hà Giang</option>
                                                <option value="23">Hà Nam</option>
                                                <option value="26">Hà Tĩnh</option>
                                                <option value="27">Hải Dương</option>
                                                <option value="31">Hậu Giang</option>
                                                <option value="29">Hòa Bình</option>
                                                <option value="32">Hưng Yên</option>
                                                <option value="34">Kiên Giang</option>
                                                <option value="35">Kon Tum</option>
                                                <option value="33">Khánh Hòa</option>
                                                <option value="36">Lai Châu</option>
                                                <option value="38">Lạng Sơn</option>
                                                <option value="37">Lào Cai</option>
                                                <option value="39">Lâm Đồng</option>
                                                <option value="40">Long An</option>
                                                <option value="41">Nam Định</option>
                                                <option value="43">Ninh Bình</option>
                                                <option value="44">Ninh Thuận</option>
                                                <option value="42">Nghệ An</option>
                                                <option value="45">Phú Thọ</option>
                                                <option value="46">Phú Yên</option>
                                                <option value="47">Quảng Bình</option>
                                                <option value="48">Quảng Nam</option>
                                                <option value="49">Quảng Ngãi</option>
                                                <option value="51">Quảng Trị</option>
                                                <option value="52">Sóc Trăng</option>
                                                <option value="53">Sơn La</option>
                                                <option value="54">Tây Ninh</option>
                                                <option value="59">Tiền Giang</option>
                                                <option value="61">Tuyên Quang</option>
                                                <option value="55">Thái Bình</option>
                                                <option value="56">Thái Nguyên</option>
                                                <option value="57">Thanh Hóa</option>
                                                <option value="60">Trà Vinh</option>
                                                <option value="62">Vĩnh Long</option>
                                                <option value="63">Vĩnh Phúc</option>
                                                <option value="64">Yên Bái</option>
                                            </select>
                                            </base-input>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá dự thầu <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="bidPrice" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá bán ngay <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="buyPrice" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Thời gian bắt đầu <span class="text-danger">*</span>
                                                </label>
                                                <base-input v-model="startAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Thời gian kết thúc <span class="text-danger">*</span>
                                                </label>
                                                <base-input v-model="endAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Bước giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="stepPrice" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tiền cọc đấu giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="warranty" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                <small class="form-text text-muted">Tiền cọc phải nhỏ hơn 10% của giá niêm yết</small>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="col-2 offset-8">
                                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                                            </div>
                                        </div>
                                        <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <p>
                                            Tạo cuộc đấu giá thành công !
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
      buyPrice:'',
      creaded:'',
      area:'',
      warranty:'',
      auctions:[],
      tags:'',
      stepPrice:'',
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
    await this.axios.post(this.url+'/auction/',{ "assest": this.assest,
      "bidPrice": this.bidPrice,"endAt": this.endAt, "startAt": this.startAt, "warranty": this.warranty, "stepPrice": this.stepPrice, "buyPrice": this.buyPrice,
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
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
