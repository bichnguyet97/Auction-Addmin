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
                       
                      <div style="overflow-x:auto;" class="">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Thông Tin Sản Phẩm</th>
                            <th scope="col">Doanh Thu Vé</th>
                            <th scope="col">Doanh Thu Khách Hàng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="exportWin2 in exportWin2" v-bind:key="exportWin2.id">
                            <td>
                                <h5 class="f-17 mb-2 font-weight-bold">Ngày: {{exportWin2.name}}</h5>
                                <span class="f-13 mr-1 d-block mb-1">Mã phiên: {{exportWin2.id}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Mã sản phẩm: {{exportWin2.category}}</span>                            
                                <span class="f-13 mr-1 d-block mb-1">Tên sản phẩm: {{exportWin2.created}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Giá niêm yết: {{exportWin2.updated}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Giá khởi điểm: {{exportWin2.updated}}</span>
                            </td>
                            <td>
                                <span class="f-13 mr-1 d-block mb-1">Số lượt trả giá/phiên: {{exportWin2.id}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Số người tham gia: {{exportWin2.category}}</span>                            
                                <span class="f-13 mr-1 d-block mb-1">Đơn giá vé: {{exportWin2.created}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Tổng doanh thu vé: {{exportWin2.updated}}</span>
                            </td>
                            <td>
                                <span class="f-13 mr-1 d-block mb-1">Giá đấu trúng: {{exportWin2.id}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Mã khách hàng: {{exportWin2.category}}</span>                            
                                <span class="f-13 mr-1 d-block mb-1">Tên khách hàng: {{exportWin2.created}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Số điện thoại: {{exportWin2.updated}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Địa chỉ nhận: {{exportWin2.updated}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Tiền cọc: {{exportWin2.updated}}</span>
                                <span class="f-13 mr-1 d-block mb-1">Số tiền đã thanh toán: {{exportWin2.updated}}</span>
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
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    // var exportWin = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/admin/statistical?startAt='+this.startAt+'25',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.exportWin=response.data});
    // console.log(exportWin);
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
      //  console.log(this.exportWin);
    },
     onclick(page){
      console.log(page);
      this.exportWin2 = this.exportWin.slice((page-1)*this.perPage,page*this.perPage-1)
    },
     
    //xuất file
    download : function() {
        const data = XLSX.utils.json_to_sheet(this.exportWin2)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, data, 'data')
        XLSX.writeFile(wb,'DANHSACHNGUOITRUNG.xlsx')
      },
    
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
