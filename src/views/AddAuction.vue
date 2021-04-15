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
                                                Khu vực<span class="text-danger">*</span>
                                            </label>
                                            <base-input>
                                            <select v-model="area" class="form-control form-control-user fs-090">
                                                <option disable value="">Chọn khu vực</option>
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
                                                    Nhập ID người đăng bán <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="seller" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20">
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá khởi điểm <span class="text-danger">*</span>
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
                                                    Hạn tham dự <span class="text-danger">*</span>
                                                </label>
                                                <base-input v-model="attendanceDeadline" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
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
                                        <!-- <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tiền huỷ cọc <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="cancelRegisterFee" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                            </div>
                                        </div> -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phí đăng kí <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="registrationFee" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
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
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phần trăm <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="percent" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                <small class="form-text text-muted">Số phần trăm của tiền cọc</small>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                Kiểu đấu giá <span class="text-danger">*</span>
                                            </label>
                                            <!-- <div class="form-check">
                                            <input v-model="type" class="form-check-input" type="checkbox" value="Normal" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Truyền thống
                                            </label>
                                            </div>

                                            <div class="form-check">
                                            <input v-model="type" class="form-check-input" type="checkbox" value="Reverse" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Ngược
                                            </label>
                                            </div> -->

                                            <div>
                                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                                <b-form-radio v-model="type" :aria-describedby="ariaDescribedby" name="some-radios" value="Normal">Truyền thống</b-form-radio>
                                                <b-form-radio v-model="type" :aria-describedby="ariaDescribedby" name="some-radios" value="Reverse">Ngược</b-form-radio>
                                                </b-form-group>

                                                <!-- <div class="mt-3">type: <strong>{{ type }}</strong></div> -->
                                            </div>
                                        </div>
                                        <!-- <div class="form-group">
                                            <div class="input-group rounded-0">
                                                <div class="custom-file rounded-0">
                                                     
                                                    <b-form-file
                                                    @change="previewImage"  
                                                    placeholder="Choose a file or drop it here..."
                                                    drop-placeholder="Drop file here..."
                                                     
                                                    id="inputGroupFile02"
                                                    ></b-form-file>
                                                     
                                                </div>
                                                <div class="input-group-append">
                                                    <button @click="onUpload" class="btn btn-warning">
                                                        <i class="las la-plus-circle"></i>
                                                        Thêm
                                                    </button>
                                                </div>
                                            </div>
                                             
                                            <small id="emailHelp" class="form-text text-muted">Chọn một hoặc nhiều file để thêm vào thư viện.</small>
                                             
                                            
                                        </div> -->
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
import Firebase from 'firebase';
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
      regulation:'',
      auctions:[],
      tags:'',
      cancelRegisterFee:'',
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
      email:'',
      mobile:'',
      note:'',
      seller:'',
      save:true,
      assest:'',
      traditional:'',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      attendanceDeadline:'',
      asset:[],
      percent:'',
      registrationFee:'',
      type:'',
      file1: null,

    };
  },
  components: {
    // Login
  },
  methods: { 
    clickAdd1:async function(){
    await this.axios.post(this.url+'/auction/',{ "assest": this.assest,"type":this.type,"registrationFee":this.registrationFee,"percent":this.percent,"regulation":this.pic,
      "bidPrice": this.bidPrice,"endAt": this.endAt, "startAt": this.startAt, "warranty": this.warranty, "stepPrice": this.stepPrice, "buyPrice": this.buyPrice,
        "area": this.area, "note": this.note,"attendanceDeadline":this.attendanceDeadline, "seller": this.seller, "cancelRegisterFee": this.cancelRegisterFee
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    },
    previewImage(event){
        // this.uploadValue=0;
         
        for( var i = 0; i < document.querySelector("#inputGroupFile02").files.length; i++ ){     
        this.pic=null;
        this.fileData[i]=event.target.files[i];
        this.uploadValue=0;
        console.log(this.i)
        }
    },
    onUpload(){
        // var today = new Date();
        // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // dateTime = date+' '+time;
        for( var i = 0; i < this.fileData.length; i++ ){
        console.log(this.file1)
        this.pic='';
        const storageRef=Firebase.storage().ref(`${this.fileData[i].name}`+`${this.fileData[i].lastModified}`).put(this.fileData[i]);
        storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error =>{console.log(error.message)},
            ()=>{this.uploadValue=100;
        
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                if(this.pic==this.pic){
                    this.pic=this.pic + url + ',' ;
                }else {
                    return this.pic=url;
                }

                // if(this.picture==0){
                //   return  this.picture=url
                // }
                 
                console.log(this.pic);
            });

            }
            );
        }
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
