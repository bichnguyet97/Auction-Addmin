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
                      </div>
                       
                      <div class="">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">MÃ SP</th>
                            <th scope="col">Hình Thức Đấu giá</th>
                            <th scope="col">Ngày Bắt Đấu Giá</th>
                            <th scope="col">Danh Mục</th>
                            <th scope="col">Tên Sản Phẩm</th>
                            <th scope="col">Vé</th>
                            <!-- <th scope="col">Lượt BIDs</th> -->
                            <th scope="col">Doanh Thu Giá Bán(cọc)</th>
                            <th scope="col">Giá Bán(Còn lại)</th>
                            <th scope="col">Tổng DT</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="test" v-for="category in category" v-bind:key="category.id">
                            <th scope="row">{{category.id}}</th>
                            <td>
                              <option v-if="category.type == 'Normal'">Truyền thống</option>
                              <option v-if="category.type == 'Reverse'">Đấu giá ngược</option> 
                            </td>
                            <td>{{category.startAt}}</td>
                            <td>{{category.category}}</td>
                            <!-- <td>{{category.created}}</td> -->
                            <td>{{category.name}}</td>
                            <td>{{formatPrice(category.ticket)}}</td>
                            <td>{{formatPrice(category.warranty)}}</td>
                            <td>{{formatPrice(category.rest)}}</td>
                            <!-- <td>{{category.ticket}}</td> -->
                            <td>{{formatPrice(category.sum)}}</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
         
                    </div>
                </div>
            </div>
        </div>
        
<!-- <vue /> -->
    </div>
</template>
<script>
 
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import XLSX from 'xlsx';
import Firebase from 'firebase'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    var category = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/admin/report',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.category=response.data});
    console.log(category);
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
      picture:'',
      hihi:'true',
      rest:'',
      Reverse:'',
      startAt:'',
      Normal:'',
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
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
    download : function() {
        const data = XLSX.utils.json_to_sheet(this.category)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, data, 'data')
        XLSX.writeFile(wb,'DOANHTHU.xlsx')
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
</style>
