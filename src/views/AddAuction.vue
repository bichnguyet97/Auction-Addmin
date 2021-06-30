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
                                                    Chọn tài sản <span class="text-danger">*</span>
                                                </label> 
                                               <!--   <input v-model="inassest" type="" class="form-control form-control-user fs-090" value="2502" maxlength="20">-->
                                                <select @click="clickSearch3()" v-model="inassest" class="form-control form-control-user fs-090">
                                                   <option  v-for="option in asset" v-bind:key="option.id" v-bind:value="option.id">
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
                                            <select v-model="inarea" class="form-control form-control-user fs-090">
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
                                                <input v-model="inseller" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20">
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá khởi điểm <span class="text-danger">*</span>
                                                </label>
                                                <input v-on:input ="getwarranty" v-model="inbidPrice" type="" class="form-control form-control-user fs-090"  maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Nhập giá bán ngay <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="inbuyPrice" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Hạn tham dự <span class="text-danger">*</span>
                                                </label>
                                                <base-input v-model="inattendanceDeadline" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Thời gian bắt đầu <span class="text-danger">*</span>
                                                </label>
                                                <base-input v-model="instartAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Thời gian kết thúc <span class="text-danger">*</span>
                                                </label>
                                                <base-input v-model="inendAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Bước giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="instepPrice" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                            </div>
                                        </div>
                                        <!-- <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tiền huỷ cọc <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="incancelRegisterFee" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                            </div>
                                        </div> -->
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phí tham gia đấu giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="inregistrationFee" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                            </div>
                                        </div>
                                        <!-- <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tiền cọc đấu giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="warranty" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                <small class="form-text text-muted">Tiền cọc phải nhỏ hơn 10% của giá niêm yết</small>
                                            </div>
                                        </div> -->

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phần trăm <span class="text-danger">*</span>
                                                </label>
                                                <input
                                                v-on:input ="getwarranty"
                                                
                                                 v-model="inpercent" type="number" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                <small class="form-text text-muted">Số phần trăm của tiền cọc {{(inbidPrice*inpercent)/100}}</small>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Tiền cọc đấu giá <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="inwarranty" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                <small class="form-text text-muted">Tiền cọc phải nhỏ hơn 10% của giá niêm yết</small>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Phần trăm thanh lý <span class="text-danger">*</span>
                                                </label>
                                                <input
                                                
                                                 v-model="sellOffPercent" type="number" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                <small class="form-text text-muted">Số phần trăm của tiền cọc {{(inbuyPrice*sellOffPercent)/100}}</small>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                    Số người tham dự <span class="text-danger">*</span>
                                                </label>
                                                <input v-model="inattendingUser" type="number" class="form-control form-control-user fs-090" value="">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                Kiểu đấu giá <span class="text-danger">*</span>
                                            </label>
                                              
                                            <div>
                                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                                <b-form-radio v-model="intype" :aria-describedby="ariaDescribedby" name="some-radios" value="Normal">Truyền thống</b-form-radio>
                                                <b-form-radio v-model="intype" :aria-describedby="ariaDescribedby" name="some-radios" value="Reverse">Ngược</b-form-radio>
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
                                                <button id="but" type="button" class="btn btn-success" @click="clickSearch2(id1,Search.id1)">Update</button>
                                                <!-- <input v-model="id1" id="button"  type="" class="form-control form-control-user fs-090" value=""> -->
                                                <div id="button" class="form-group">
                                                <base-input >
                                            <select v-model="id1" class="form-control form-control-user fs-090">
                                                <option disable value="">Chọn mã</option>
                                                <option id="16h30-17h">93002</option>
                                                <option>93003</option>
                                                <option>93004</option>
                                                <option>93005</option>
                                                <option>93006</option>
                                                <option>93007</option>
                                                <option>93008</option>
                                                <option>93009</option>
                                                <option>93010</option>
                                                <option>93011</option>
                                                <option>93012</option>
                                                <option>93013</option>
                                                <option>93014</option>
                                                <option>93015</option>
                                                <option>93016</option>
                                                <option>93017</option>
                                                <option>93018</option>
                                                <option>93019</option>
                                                <option>93020</option>
                                                <option>93021</option>
                                                <option>93022</option>
                                                <option>93023</option>
                                               
                                            </select>
                                            </base-input>
                                                </div>
                                            </div>
                                        </div>
                                         
                                        <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <!-- <p>
                                            Tạo cuộc đấu giá thành công !
                                            </p> -->
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
    // this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/new',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) =>  { this.asset=response.data});
    //   console.log(this.asset);

    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset'
        ).then((response) => {
            // console.log( "response" + response.data);
            this.asset=response.data;
            this.auctions=response.data.auction[0]
        });
  
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
      auction: [],
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
      inattendingUser:''
    
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
        "sellOffPercent": this.sellOffPercent
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response))
      .catch((error) => { this.loi=error
        })
    },
    //tìm asset
    clickSearch3(){
    //    console.log(this.inassest)
        this.asset.forEach(test => {
            if(this.inassest ==  test.id) {
                this.inbidPrice = test.initPrice;
            }
        });
    },
    // clickSelect(){
    //     this.auctions.forEach(ac =>{ 
    //         if(this.inassest == ac.id){
    //             console.log("buyPrice"+this.buyPrice)
    //             this.inbuyPrice = ac.buyPrice
    //         }
    //     });
    // },
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
        this.inattendingUser=response.data.attendingUser
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
    //get warranty
    getwarranty(){
        this.inwarranty =  (this.inbidPrice*this.inpercent)/100
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
#but{
    margin-top: -4.4rem;
    margin-left:6rem;
}
#button{
    margin-top: -4.4rem;
    margin-left: 14rem;
}
</style>
