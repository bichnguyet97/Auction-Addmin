<template>
    <div>
        <base-header type="gradient-warning" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                      <div class="row">
                        <div class="col-2">
                          Export
                          <span>
                            <i class="fa fa-reply" aria-hidden="true"></i>
                          </span>
                        </div>
                         
                        <div class="col-2 offset-8">
                          <b-button type="button" class="download-btn" v-on:click="download" variant="outline-primary">Xuất file <b-icon icon="cloud-download" aria-hidden="true"></b-icon></b-button>
                        </div>
                    
                        <div id="smbutton1" class="col-2 offset-8">
                          <!-- <base-input v-model="startAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/> -->
                          <b-container>
                            <b-row class="my-1" v-for="type in types" :key="type">
                              <b-col sm="12">
                                <b-form-input v-model="startAt" :id="`type-${type}`" :type="type"></b-form-input>
                              </b-col>
                            </b-row>
                          </b-container>
                          <!-- <input v-model="startAt" class="form-control mr-sm-2" type="startAt" placeholder="Search" aria-label="Search"> -->
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch(exportWin2.startAt)">Search</button>
                        </div>
                      </div>
                       
                      <div class="">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Mã Phiên</th>
                            <th scope="col">Tên Sản Phẩm</th>
                            <th scope="col">Tên Người Trúng</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tiền cọc</th>
                            <th scope="col">Giá Trúng</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Số Điện Thoại</th>
                            <th scope="col">Trạng Thái</th>
                          </tr>
                        </thead>
                        <tbody>
                            <!-- <tr>
                            <td colspan="7"></td>
                            <td>
                               <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <base-input v-model="startAt" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/>
                                        <b-button v-b-modal.modalPopover style="margin-top:5px;width:53%;" size="sm" @click="clickSearch(exportWin.startAt)" variant="info">Chọn</b-button>
                                    </div>
                                </div>  
                            </td>
                            </tr> -->
                          <tr v-for="exportWin2 in exportWin2" v-bind:key="exportWin2.id">
                            <th scope="row">{{exportWin2.id}}</th>
                            <th scope="row">{{exportWin2.asset}}</th>
                            <!-- <td>
                              <option v-if="category.type == 'Normal'">Truyền thống</option>
                              <option v-if="category.type == 'Reverse'">Đấu giá ngược</option> 
                            </td> -->
                            <td>{{exportWin2.username}}</td>
                            <td>{{exportWin2.email}}</td>
                            <!-- <td>{{category.created}}</td> -->
                            <td>{{exportWin2.deposit}}</td>
                            <!-- <td>{{formatPrice(category.ticket)}}</td>
                            <td>{{formatPrice(category.warranty)}}</td>
                            <td>{{formatPrice(category.rest)}}</td> -->
                            <!-- <td>{{category.ticket}}</td> -->
                            <td>{{formatPrice(exportWin2.winPrice)}}</td>
                            <td>{{exportWin2.address}}</td>
                            <td>{{exportWin2.mobile}}</td>
                            <!-- <td>{{exportWin2.status}}</td> -->
                            <td>
                              <span>
                              <b-button style=" width:100%;" size="sm" variant="info" v-if="exportWin2.status == 'Đã thanh toán'">Đã Thanh Toán</b-button>
                              <b-button style=" width:100%;" size="sm" variant="danger" v-if="exportWin2.status == 'Chưa thanh toán'">Chưa Thanh Toán</b-button>
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
        <paginate
            :page-count="totalPage"
            :click-handler="onclick"
            :prev-text="'Prev'"
            :next-text="'Next'"
            class="pagination">
        </paginate>
        
<!-- <vue /> -->
    </div>
</template>
<script>
 
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import XLSX from 'xlsx';
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
import Firebase from 'firebase'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    var exportWin = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/admin/statistical?startAt='+this.startAt+'25',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.exportWin=response.data});
    console.log(exportWin);
    return {
      alias: '',
      id: '',
      name: '',
      created:'',
      updated:'',
      close3:true,
      close4:true,
      info:'',
      sum:'',
      warranty:'',
      add:true,
      sessionId:'',
      save:true,
      avatar:'',
      category:'',
      type:'',
      ticket:'',
      email:'',
      deposit:'',
      winPrice:'',
      picture:'',
      hihi:'true',
      rest:'',
      Reverse:'',
      address:'',
      username:'',
      startAt:'',
      asset:'',
      mobile:'',
      currentPage : 1,
      perPage : 10,
      totalPage:0,
      page: 10,
      Normal:'',
      exportWin:[],
      exportWin2:[],
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      types: [
          'date',
        ]
    };
  },
  components: {
    // Login
  },
  methods: {
    //tim kiem
    clickSearch: async function(){
       await this.axios.get(this.url+'/admin/statistical?startAt='+this.startAt+'%25').then((response) => this.exportWin = response.data,
       this.exportWin2 = this.exportWin.slice(0, this.perPage-1), 
          this.totalPage = Math.ceil(this.exportWin.length / this.perPage));
       console.log(this.exportWin);
    },
     onclick(page){
      console.log(page);
      this.exportWin2 = this.exportWin.slice((page-1)*this.perPage,page*this.perPage-1)
    },
    openIn: function () {
      var close = document.querySelector('.closeIn')
      close.classList.add('openIn')
      this.save=true
    },
    //xuất file
    download : function() {
        const data = XLSX.utils.json_to_sheet(this.exportWin2)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, data, 'data')
        XLSX.writeFile(wb,'DANHSACHNGUOITRUNG.xlsx')
      },
    openEdit: function () {
      var close = document.querySelector('.closeEdit')
      close.classList.add('openEdit')
      this.save=true
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    clickUpdate1:async function(){
      this.axios.get(this.url+'/category',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => { this.category=response.data})
    },
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
    clickEdit(id){
      this.axios.put(this.url+'/edit/category/'+id ,{ "name": this.name,"avatar":this.picture,
        "alias": this.alias, "category":this.category}, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    clickdelete1(id){
      this.axios.delete(this.url+'/category/'+id , {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            // console.warn(response)
            // this.category=response.data
            this.clickUpdate1();
          });
      console.log(this.hihi);
    },
    previewImage(event){
      // this.uploadValue=0;
      this.picture=null;
      this.imageData=event.target.files[0];
      this.uploadValue=0;
    },
    onUpload(){
      // var today = new Date();
      // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // dateTime = date+' '+time;
      this.picture=null;
      const storageRef=Firebase.storage().ref(`${this.imageData.name}`+`${this.imageData.lastModified}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
          this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error =>{console.log(error.message)},
          ()=>{this.uploadValue=100;
      
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.picture=url;
              console.log(this.picture);
          });

          }
          );
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
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  
}

.pagination li {
  border: 0.1rem solid green;
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
  background-color: #4CAF50;
  color: white;
}
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
.test td{
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;

}
#smbutton1{
  padding:10px 5px;
  display:flex;
  margin-left: -8rem;
  margin-top: 0.65rem;
}
</style>
