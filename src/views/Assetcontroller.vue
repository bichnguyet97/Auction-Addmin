<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
         
        <div class="mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                      <div class="row">
                        <div @click="searchCheck=1" class="col-2">
                          Asset Controller
                          <span>
                            <i class="fa fa-reply" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div id="smbutton" class="col-2 offset-8">
                          <input v-model="category" class="form-control mr-sm-2" type="category" placeholder="Search a type" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch(asset.category)">SearchType</button>
                        </div>
                        <div id="smbutton" class="col-2 offset-8">
                          <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(asset.id)">SearchID</button>
                        </div>
                         
                        <div id="smtaomoi" class="col-2 offset-8">
                          <!-- <b-button v-b-modal.modal-1 variant="primary">Tạo mới</b-button> -->
                          <b-modal id="modal-1" title="Tạo mới">
                            <div v-if="close2" class="form-group">
                              <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="name" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Images<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="images" class="form-control" id="images" name="images" type="text" placeholder="Link ảnh" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Category<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="category" class="form-control" id="category" name="category" type="text" placeholder="ID" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Init Price<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="initPrice" class="form-control" id="initPrice" name="initPrice" type="text" placeholder="giá" value>
                              </div>
                              <div class="col-2 offset-8">
                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                              </div>
                            </div>
                          </b-modal>
                          <b-modal id="modalPopover" title="Thông báo" ok-only>
                            <p>
                              Thêm tài sản thành công !
                            </p>
                          </b-modal>
                        </div>
                      </div>

                      <div class="asset_controller">
                      <table class="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Loại</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Giá niêm yết</th>
                            <th scope="col">Giá hiện tại</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Ngày Cập nhật</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody v-if="searchCheck==1">
                          <tr v-for="asset in asset2" v-bind:key="asset.id">
                            <th scope="row">{{asset.id}}</th>
                            <td style="white-space: normal;">{{asset.name}}</td>
                            <td>{{asset.category}}</td>
                            <td>
                              <!-- <a :href="asset.images">{{asset.images}}</a> -->
                              <img style="width: 82px;" class="" :src="asset.images" alt="">
                            </td>
                            <td>{{formatPrice(asset.initPrice)}}</td>
                            <td>{{formatPrice(asset.currentPrice)}}</td>
                            <td>
                              <!-- {{asset.created}} -->
                              <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(asset.created,'date')"></span>
                              <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(asset.created,'time')"></span>
                            </td>
                            <td>
                              <!-- {{asset.updated}} -->
                              <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(asset.updated,'date')"></span>
                              <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(asset.updated,'time')"></span>
                            </td>
                            <td>
                              <!-- {{asset.status}} -->
                              <span>
                                <b-button style=" width:70%;" size="sm" variant="info" v-if="asset.status == 'waiting'">MỚI</b-button>
                                <b-button style=" width:80%;" size="sm" variant="danger" v-if="asset.status == 'Paid'">ĐÃ BÁN</b-button>
                              </span>
                            </td>
                            <td>
                              <span>
                                <base-button size="sm" outline type="info" v-on:click="clickdelete1(asset.id)">Xoá</base-button>
                                <base-button size="sm" outline type="info" @click="handleClick(asset.id)" >
                                  <router-link :to="{ name: 'editasset', params: { id: asset.id }}">Sửa</router-link>
                                </base-button>
                                <base-button size="sm" outline type="info" @click="handleClick(asset.id)" >
                                  <router-link :to="{ name: 'detailEditAsset', params: { id: asset.id }}">Chi tiết</router-link>
                                </base-button>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-if="searchCheck==2">
                          <tr>
                            <th scope="row">{{userSearch.data.id}}</th>
                            <td class="test">{{userSearch.data.name}}</td>
                            <td>{{userSearch.data.category}}</td>
                            <td class="test"><a :href="userSearch.data.images">{{userSearch.data.images}}</a></td>
                            <td>{{userSearch.data.initPrice}}</td>
                            <td>{{userSearch.data.currentPrice}}</td>
                            <td class="test">{{userSearch.data.created}}</td>
                            <td class="test">{{userSearch.data.updated}}</td>
                             
                            <td style="color:red;">{{userSearch.data.status}}</td>
                            <td>
                              <span>
                                <base-button size="sm" outline type="info" v-on:click="clickdelete1(asset.id)">Xoá</base-button>
                                 
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-if="searchCheck==3">
                          <tr v-for="n in searchCate.data.length" v-bind:key="n">
                            <th scope="row">{{searchCate.data[n-1].id}}</th>
                            <td class="test">{{searchCate.data[n-1].name}}</td>
                            <td class="test">{{searchCate.data[n-1].category}}</td>
                            <td class="test"><a :href="searchCate.data[n-1].images">{{searchCate.data[n-1].images}}</a></td>
                            <td>{{searchCate.data[n-1].initPrice}}</td>
                            <td>{{searchCate.data[n-1].currentPrice}}</td>
                            <td class="test">{{searchCate.data[n-1].created}}</td>
                            <td class="test">{{searchCate.data[n-1].updated}}</td>
                            <td>{{searchCate.data[n-1].status}}</td>
                            <td>
                              <span>
                                <base-button style="margin-top:5px;" size="sm" outline type="info" v-on:click="clickdelete1(asset.id)">Xoá</base-button>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
        </div>
<!-- <vue /> -->
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    var asset = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset'
        ).then((response) => { this.asset=response.data, this.asset2 = response.data.slice(0, this.perPage-1), 
          this.totalPage = Math.ceil(response.data.length / this.perPage)
        });
    console.log(asset);
    return {
      initPrice: '',
      close2:'true',
      currentPrice:'',
      finalPrice:'',
      images:'',
      category:'',
      creaded:'',
      tags:'',
      seller:'',
      actions:'',
      id: '',
      name: '',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      info:'',
      status:'',
      staus1:'đã xoá',
      asset: [],
      asset2:[],
      add:true,
      sessionId:'',
      save:true,
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      totalPage:0,
      currentPage : 1,
      perPage : 10
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
    openEdit: function () {
      var close = document.querySelector('.closeEdit')
      close.classList.add('openEdit')
      this.save=true
    },
    clickUpdate1:async function(){
      this.axios.get(this.url+'/asset'
       ).then((response) => { this.asset=response.data})
    },
    clickAdd1:async function(){
    await this.axios.post(this.url+'/asset',{ "name": this.name,
      "category": this.category,"images":this.images,"initPrice":this.initPrice
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    await this.axios.get(this.url+'/asset'
      ).then((response) => { this.asset=response.data})
    },
    clickSearch1: async function(){
      await this.axios.get(this.url+'/asset/id/'+this.id).then((response) => this.userSearch = response);
      console.log(this.userSearch.data.name);
      this.searchCheck=2;
    },
    clickSearch: async function(){
      await this.axios.get(this.url+'/asset/byCategory/'+this.category).then((response) => this.userSearch = response);
      this.searchCate=this.userSearch;
      this.searchCheck=3;
      console.log(this.userSearch.data);
    },
    clickConfirm(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status="+this.status,{"status":this.status},{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    onclick(page){
        console.log(page);
        this.asset2 = this.asset.slice((page-1)*this.perPage,page*this.perPage-1)
    },
    // clickEdit: async function(){
    //   await this.axios.put(this.url+'/category/'+this.id ,{ "name": this.name,"id":this.id,
    //     "alias": this.alias}, {
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => console.log(response));
    // },
    clickdelete1(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    deleteAssest:async function(){
      await axios.post(this.url+'/asset/updateStatus/'+this.buffer+'?status=deleted',{
          headers: {
            Authorization: this.$cookies.get("AC-ACCESS-KEY=") }
        }).then(response => console.log(response))
        this.$router.go();
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
      handleClick(id) {
      let assetObj;
      this.asset.forEach( e =>{ 
          if(e.id == id)assetObj = e;
      });
      this.$router.push({
        name: "editasset",
        params: { assetObj }
      });
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
.mb-0{
  font-size: 18px;
  font-weight: bold;
  color: #428bca;
}
.col-md-3{
  font-size: 16px;
  font-weight: bold;
  color: #ca425f;
}
.test{
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;
}
.text-right{
  margin-left:10px;
}
#smbutton{
  padding:10px 5px;
  display:flex;
}
#smtaomoi{
  margin-top:35px;
}
</style>
