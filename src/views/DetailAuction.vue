<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
             
        </base-header>
        <div class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div class="card-text pt-1">
                            <div class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                                    <div class="user-avatar mb-3 text-center">
                                        <img class="w-100" :src="auction.assetImg" alt="">
                                    </div>
                                    <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
                                        Số User Tham Gia : {{auction.attendees}}
                                    </h3>
                                    <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
                                        Người chiến thắng : {{auction.winName}} <router-link :to="{ name: 'detailUser', params: { id: auction.winner }}"> ({{auction.winner}})</router-link>
                                    </h3>
                                    <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
                                        Trạng thái : 
                                        <span class="badge badge-success wf-85" v-if="auction.status == 'New' ">CHỜ XÁC NHẬN</span>
                                        <span class="badge badge-warning wf-85" v-if="auction.status == 'Upcoming'">SẮP BẮT ĐẦU</span>
                                        <span class="badge badge-success wf-85" v-if="auction.status == 'Active' ">ĐANG ĐẤU GIÁ</span>
                                        <span class="badge badge-warning wf-85" v-if="auction.status == 'Ended'">ĐÃ KẾT THÚC</span>
                                        <span class="badge badge-success wf-85" v-if="auction.status == 'Paid'">ĐÃ THANH TOÁN</span>
                                    </h3>
                                    <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
                                        Giá thắng : {{formatPrice(auction.win_price)}} VNDT
                                    </h3>
                                    <!-- <div  >
                                        <stats-card title="Total traffic"
                                                    type="gradient-red"
                                                    sub-title="350,897"
                                                    icon="ni ni-active-40"
                                                    class="mb-4 mb-xl-0"
                                        >

                                            <template slot="footer">
                                                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> {{auction.attendees}}</span>
                                                <span class="text-nowrap">Since last month</span>
                                            </template>
                                        </stats-card>
                                    </div> -->
                                </div>
                                <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                               <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập mã tài sản <span class="text-danger">*</span>
                                                </label> 
                                               <!--   <input v-model="inassest" type="" class="form-control form-control-user fs-090" value="2502" maxlength="20">-->
                                                <select v-model="auction.assest_id" class="form-control form-control-user fs-090" :disabled="validated ? disabled : ''">
                                                   <option v-for="option in asset" v-bind:key="option.id" v-bind:value="option.id">
                                                        {{ option.id }} - {{option.name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                Khu vực<span class="text-danger">*</span>
                                            </label>
                                            <base-input>
                                            <select v-model="auction.area" class="form-control form-control-user fs-090" :disabled="validated ? disabled : ''">
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
                                                <input v-model="auction.seller" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20" :disabled="validated ? disabled : ''">
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá khởi điểm <span class="text-danger">*</span>
                                                </label>
                                                <input v-on:input ="getwarranty" v-model="auction.bid_price" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20" :disabled="validated ? disabled : ''">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá bán ngay <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="auction.buy_price" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20" :disabled="validated ? disabled : ''">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Hạn tham dự <span class="text-danger">*</span>
                                                </label>
                                                <base-input   type="datetime-local" :value="formatDatetime(auction.attendance_deadline)" id="example-datetime-local-input" :disabled="validated ? disabled : ''"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Thời gian bắt đầu <span class="text-danger">*</span>
                                                </label>
                                                <base-input  type="datetime-local" :value="formatDatetime(auction.start_at)" id="example-datetime-local-input" :disabled="validated ? disabled : ''"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Thời gian kết thúc <span class="text-danger">*</span>
                                                </label>
                                                <base-input  type="datetime-local" :value="formatDatetime(auction.end_at)" id="example-datetime-local-input" :disabled="validated ? disabled : ''"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Bước giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="auction.step_price" type="" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                                            </div>
                                        </div>
                                         
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phí tham gia đấu giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="auction.registration_fee" type="" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                                            </div>
                                        </div>
                                         
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phần trăm <span class="text-danger">*</span>
                                                </label>
                                                <input
                                                v-on:input ="getwarranty"
                                                
                                                 v-model="auction.percent" type="number" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                                                <small class="form-text text-muted">Số phần trăm của tiền cọc {{(auction.bid_price*auction.percent)/100}}</small>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tiền cọc đấu giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="auction.warranty" type="" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                                                <small class="form-text text-muted">Tiền cọc phải nhỏ hơn 10% của giá niêm yết</small>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phần trăm thanh lý <span class="text-danger">*</span>
                                                </label>
                                                <input
                                                
                                                 v-model="auction.sell_off_percent" type="number" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                                                <small class="form-text text-muted">Số phần trăm của tiền thanh lý {{(inbuyPrice*sellOffPercent)/100}}</small>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Số người tham dự <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="auction.attending_user" type="number" class="form-control form-control-user fs-090" value="" :disabled="validated ? disabled : ''">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                Kiểu đấu giá <span class="text-danger">*</span>
                                            </label>
                                              
                                            <div>
                                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                                <b-form-radio v-model="auction.type" :aria-describedby="ariaDescribedby" name="some-radios" value="Normal" :disabled="validated ? disabled : ''">Truyền thống</b-form-radio>
                                                <b-form-radio v-model="auction.type" :aria-describedby="ariaDescribedby" name="some-radios" value="Reverse" :disabled="validated ? disabled : ''">Ngược</b-form-radio>
                                                </b-form-group>
 
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-6">
                                            <div class="col-2 offset-8">
                                                 
                                            </div>
                                        </div>
                                         
                                        <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            
                                            <p>
                                                {{loi?loi: 'Tạo cuộc đấu giá thành công !'}}
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
    this.axios.post(process.env.VUE_APP_MY_ENV_VARIABLE+'/admin/auction-detail',
        {
        "auctionId":this.$route.params.id},
        {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) =>  { this.auction=response.data 
        // console.log("hi"+response.data.attendance_deadline)
        });
      console.log(this.auction);

    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset'
        ).then((response) => { 
            // console.log( "response" + response.data);
            this.asset=response.data;
        });
    // this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/recreate/'+ this.$route.params.id
    //     ).then((response) => { 
    //         console.log( "response" + this.inseller);
    //         this.asset=response.data;
    //         this.Search=response.data, 
    //         this.inassest= response.data.assest,
    //         this.inarea= response.data.area,
    //         this.intype= response.data.type,
    //         this.inregistrationFee=response.data.registrationFee,
    //         this.inpercent=response.data.percent,
    //         this.inbidPrice=response.data.bidPrice,
    //         this.inendAt=response.data.endAt,
    //         this.instartAt=response.data.startAt,
    //         this.inwarranty=response.data.warranty,
    //         this.instepPrice=response.data.stepPrice,
    //         this.inbuyPrice= response.data.buyPrice, 
    //         this.inattendanceDeadline=response.data.attendanceDeadline,
    //         this.inseller=response.data.seller,
    //         this.incancelRegisterFee=response.data.cancelRegisterFee,
    //         this.inattendingUser=response.data.attendingUser,
    //         this.insellOffPercent=response.data.sellOffPercent
    //     });
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
      auction:{
            assetName: " ",
            note: "",
            assetImg: " ",
            step_price: " ",
            attendance_deadline: " ",
            attending_user: " ",
            start_at: " ",
            percent: " ",
            end_at: " ",
            area: " ",
            time_left: null,
            status: " ",
            warranty:  " ",
            user_id: " ",
            type: " ",
            winName: "",
            bid_price: " ",
            attendees: " ",
            show_in_baner: " ",
            assest_id: " ",
            live_stream: " ",
            category: " ",
            seller: " ",
            sell_off_percent: " ",
            updated: " ",
            win_price: null,
            winner: " ",
            id: " ",
            regulation: null,
            created: " ",
            registration_fee: " ",
            buy_price: " ",
            current_winner:" ",
            dash_end_in: null
      },
      buyPrice:'',
      creaded:'',
      area:'Hà Nội',
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
      id1:'',
      created:'',
      name: '',
      updated:'',
      info:'',
       
      add:true,
      endAt:'',
      email:'',
      mobile:'',
      note:'',
      seller:'504',
      sellOffPercent:'',
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
      Search:[],
      loi:null,
      percent:'',
      registrationFee:'',
      type:'',
      file1: null,
      attendingUser:'',
      inassest:'',
      inarea:'Hà Nội',
      intype:'',
      inregistrationFee:'',
      inpercent:'',
      inbidPrice:'',
      inendAt:'',
      instartAt:'',
      inwarranty:'',
      instepPrice:'',
      inbuyPrice:'',
      inattendanceDeadline:'',
      inseller:'504',
      incancelRegisterFee:'',
      inattendingUser:'',
      validated:'',
      insellOffPercent:'',
    };
  },
  components: {
    // Login
  },
  methods: { 
    clickAdd1:async function(){
    await this.axios.post(this.url+'/auction/',{ "assest": this.inassest,"type":this.intype,"registrationFee":this.inregistrationFee,"percent":this.inpercent,"regulation":this.pic,
      "bidPrice": this.inbidPrice,"endAt": this.inendAt, "startAt": this.instartAt, "warranty": this.inwarranty, "stepPrice": this.instepPrice, "buyPrice": this.inbuyPrice,
        "area": this.inarea, "note": this.note,"attendanceDeadline":this.inattendanceDeadline, "seller": this.inseller, "cancelRegisterFee": this.incancelRegisterFee, "attendingUser":this.inattendingUser,
        "sellOffPercent": this.insellOffPercent
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response))
      .catch((error) => { this.loi=error
        })
    },
    //tìm auction
    clickSearch2(id1){
      this.axios.get(this.url+'/auction/recreate/'+id1)
      .then((response) => {
        this.Search=response.data, 
        this.inassest= response.data.assest,
        this.inarea= response.data.area,
        this.intype= response.data.type,
        this.inregistrationFee=response.data.registrationFee,
        this.inpercent=response.data.percent,
        this.inbidPrice=response.data.bidPrice,
        this.inendAt=response.data.endAt,
        this.instartAt=response.data.startAt,
        this.inwarranty=response.data.warranty,
        this.instepPrice=response.data.stepPrice,
        this.inbuyPrice= response.data.buyPrice, 
        this.inattendanceDeadline=response.data.attendanceDeadline,
        this.inseller=response.data.seller,
        this.incancelRegisterFee=response.data.cancelRegisterFee,
        this.inattendingUser=response.data.attendingUser,
        this.insellOffPercent=response.data.sellOffPercent
      });
        console.log(this.Search);
      this.axios.get(this.url+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.users=response.data});
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
    // clickSearch2(id){
    //   this.axios.get(this.url+'/user/'+id)
    //   .then((response) => { this.Search=response.data});
    //     console.log(this.Search);
    //   this.axios.get(this.url+'/user',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => console.log(response));
    // },
    onUpload(){
        // var today = new Date();
        // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // dateTime = date+' '+time;
        for( var i = 0; i < this.fileData.length; i++ ){
        // console.log(this.file1)
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
    //get warranty
    getwarranty(){
        this.auction.warranty =  (this.auction.bid_price*this.auction.percent)/100

    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    // getwarranty2(){
    //     this.inwarranty2 =  (this.inbuyPrice*this.sellOffPercent)/100
    // },
    // get cookie
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
    },
        formatDatetime: function (datetime) {

            if(datetime != ''){
                var a =datetime.split(".");
                return a[0];
            }else return "";


        },
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
#but{
    margin-top: -4.4rem;
    margin-left:6rem;
}
#button{
    margin-top: -4.4rem;
    margin-left: 14rem;
}
</style>
