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
                          Category
                          <span>
                            <i class="fa fa-reply" aria-hidden="true"></i>
                          </span>
                        </div>
                         
                        <div class="col-2 offset-8">
                          <b-button   variant="outline-warning">
                            <router-link :to="{ name: 'addcategory-controller'}">Tạo mới</router-link>
                          </b-button>
                          <!-- <b-modal id="modal-1" title="Tạo mới">
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="Máy bay" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Alias<strong>*</strong></label>
                              <div class="col-md-9">
                              <input v-model="alias" class="form-control" id="alias" name="alias" type="text" placeholder="May-bay" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Ảnh<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="avatar" class="form-control" id="av" name="av" type="text" placeholder="ảnh" value>
                              </div>
                              <div class="col-2 offset-8">
                                <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                              </div>
                            </div>
                          </b-modal> -->
                        </div>
                      </div>
                      <div class="closeIn">
                        <div v-if="close3" class="form-group">
                          <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="Máy bay" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Alias<strong>*</strong></label>
                          <div class="col-md-9">
                          <input v-model="alias" class="form-control" id="alias" name="alias" type="text" placeholder="May-bay" value>
                          </div>
                           
                          <div class="col-2 offset-8">
                            <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                            <b-button variant="outline-primary" @click="close3=false">Thoát</b-button>
                          </div>
                        </div>
                      </div>
                      <div class="closeEdit">
                      <div v-if="close4" class="form-group">
                        <label class="col-md-3 control-label" for="">Nhập ID muốn sửa</label>
                        <div class="col-md-9"> 
                        <input v-model="id" class="form-control" id="idd" name="idd" type="text" placeholder="1">
                        </div>
                        <label class="col-md-3 control-label" for="">Nhập tên<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="name" class="form-control" id="namee" name="namee" type="text" placeholder="Máy bay" value>
                        </div>
                        <label class="col-md-3 control-label" for="">Nhập kí hiệu<strong>*</strong></label>
                        <div class="col-md-9"> 
                        <input v-model="alias" class="form-control" id="aliass" name="aliass" type="text" placeholder="May-bay" value>
                        </div>
                        <div class="col-2 offset-8">
                          <button type="button" class="btn btn-primary" @click="clickEdit(category.id)">Save</button>
                          <b-button variant="outline-primary" @click="close4=false">Exit</b-button>
                        </div>
                      </div>
                      </div>
                      <div style="overflow-x:auto;" class="">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Alias</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Tạo</th>
                            <th scope="col">Cập nhật</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="test" v-for="category in category" v-bind:key="category.id">
                            <th scope="row">{{category.id}}</th>
                            <td>{{category.name}}</td>
                            <td>{{category.alias}}</td>
                            <td>
                              <!-- <a href="" target="_blank">{{category.avatar}}</a> -->
                              <img style="width: 82px;" class="" :src="category.avatar" alt="">
                            </td>
                            <td>
                              <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(category.created,'date')"></span>
                              <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(category.created,'time')"></span>
                            </td>
                            <td>
                              <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(category.updated,'date')"></span>
                              <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(category.updated,'time')"></span>
                            </td>
                            <td>
                              <span>
                                <!-- <button type="button" class="btn btn-danger" v-on:click="clickdelete1(category.id)">Delete</button> -->
                                <!-- <button type="button" class="btn btn-warning" @click="openEdit()">edit</button> -->
                                <base-button size="sm" outline type="danger" v-on:click="clickdelete1(category.id)">Xoá</base-button>
                                <span>
                                  <!-- <b-button size="sm" variant="warning" @click="close4=true">Sửa</b-button> -->
                                  <!-- <b-button size="sm" v-b-modal.modal-3 variant="warning" @click="category=buffer.id">Sửa</b-button> -->
                                  <!-- <b-button size="sm" v-b-modal.modal-3 variant="warning" @click="close4=true,buffer=category.id">Sửa</b-button> -->
                                  <b-button v-b-modal.bv-modal-example size="sm" variant="warning" id="show-btn" @click="buffer=category.id">Sửa</b-button>
                                </span>
                              </span>
                            </td>
                          </tr>
                          <!-- <b-modal id="bv-modal-example" hide-footer>
                            <template #modal-title>
                              Using <code>$bvModal</code> Methods
                            </template>
                            <div class="d-block text-center">
                              <h3>Hello From This Modal!</h3>
                            </div>
                            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">save</b-button>
                          </b-modal> -->
                          <b-modal id="bv-modal-example" hide-footer>
                            <template #modal-title>
                              Sửa loại
                            </template>
                            <div class="d-block">
                            <div v-if="close4" class="form-group">
                              <label class="col-md-3 control-label" for="">Tên<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="name" class="form-control" id="namee" name="namee" type="text" placeholder="Máy bay" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Kí hiệu<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="alias" class="form-control" id="aliass" name="aliass" type="text" placeholder="May-bay" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Ảnh</label>
                              <div class="col-md-9"> 
                              <!-- <input v-model="avatar" class="form-control" id="avatar" name="avatar" type="text" placeholder="avatar"> -->
                              <div class="input-group rounded-0">
                                  <!-- <div class="custom-file rounded-0">
                                      <b-form-file
                                      class="z-index-inputFile"
                                      @change="previewImage"
                                      placeholder="Select file"
                                      drop-placeholder="Drop file here..."
                                      accept="image/*"
                                      ></b-form-file>
                                      <label class="custom-file-label rounded-0" for="" aria-describedby="inputGroupFileAddon02">chọn ảnh</label>
                                  </div>
                                  <div class="input-group-append">
                                      <button @click="onUpload" class="btn btn-warning">
                                          <i class="las la-plus-circle"></i>
                                          Thêm
                                      </button>
                                  </div> -->
                                  <input type="file" @change="onFileChange" />
                                  <div id="preview">
                                    <img v-if="urlimg" v-bind:src="urlimg" />
                                  </div>
                              </div>
                              </div>
                              <!-- <div class="col-2 offset-8">
                                <button type="button" class="btn btn-primary" @click="clickEdit(buffer)">Save</button>
                              </div> -->
                            </div>
                            </div>
                            <b-button class="mt-3" variant="warning" block @click="clickEdit(buffer)">save</b-button>
                          </b-modal>
                        </tbody>
                      </table>
                      </div>
                    <!-- <div class="col-2 offset-8">
                      <button type="button" class="btn btn-primary" @click="clickdelete()">Delete</button>
                    </div>
                    <label class="col-md-3 control-label" for="">ID</label>
                    <div class="col-md-9"> 
                    <input v-model="id" class="form-control" id="id" name="id" type="text">
                    </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- <b-button type="button" class="download-btn" v-on:click="download" variant="outline-primary">Xuất file <b-icon icon="cloud-download" aria-hidden="true"></b-icon></b-button> -->
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
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/category',{
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
      category: [],
      add:true,
      sessionId:'',
      save:true,
      avatar:'',
      picture:'',
      hihi:'true',
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      urlimg:null
    };
  },
  components: {
    // Login
  },
  methods: {
    // clickAdd:async function(){
    //   this.axios.post('http://52.77.244.234/category', { "name": this.name,
    //     "alias": this.alias, "creaded": this.creaded, "update": this.update }, { 
    //     headers: {
    //       Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBY2hhdUF1Y3Rpb24iLCJleHAiOjE2MTIwNjQ5NjEsImp0aSI6ImhpQGdtYWlsLmNvbSIsImdyb3VwIjoiVXNlciJ9.WyKdRGHvmovX20Aa6FGxzdV6BEXtok0Jtn0NYpgn_gQ" 
    //     },
    //   }).then((response) => console.log(response));
    // },
    // clickdelete(id){
    //   this.axios.delete('http://52.77.244.234/category/'+id , { 
    //     headers: { 
    //       Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBY2hhdUF1Y3Rpb24iLCJleHAiOjE2MTE5MDI4MDksImp0aSI6Im5ndXlldDk3QGdtYWlsLmNvbSIsImdyb3VwIjoiVXNlciJ9._LpkM15wOQ1DA0isKw5IJ5dgxjWPrl2pQBNu3ri5DF8" 
    //       }, 
    //       }).then((response) => {
    //         console.warn(response)
    //         this.category=response.data
    //       });
    // },
    openIn: function () {
      var close = document.querySelector('.closeIn')
      close.classList.add('openIn')
      this.save=true
    },
    download : function() {
        const data = XLSX.utils.json_to_sheet(this.category)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, data, 'data')
        XLSX.writeFile(wb,'category.xlsx')
      },
    openEdit: function () {
      var close = document.querySelector('.closeEdit')
      close.classList.add('openEdit')
      this.save=true
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
      this.axios.put(this.url+'/edit/category/'+id ,{ "name": this.name,"avatar":this.urlimg,
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
    },
    formatDatetime: function (datetime,type) {
      var a =datetime.split("T");
        if(type=='date'){
          return a[0];

        }else{
            var b = a[1].split(".");
            return b[0]
        }

    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.urlimg = URL.createObjectURL(file);
    },
     
    // getData(){
    //   this.axios.get('http://52.77.244.234/category').then((response)=>{
    //     console.warn(response)
    //     this.category=response.data;
    //   })
    // }
    
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
