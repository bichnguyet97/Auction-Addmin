<template>
  <div>
    <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
    <div v-if="user.group=='Admin'" id="app">
      <sorted-table class="table table-striped" v-bind:values="category">
        <thead>
          <tr>
            <th scope="col" >
              <sort-link name="id">ID</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="name">Tên</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="alias">Alias</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="id">Ảnh</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="created">Ngày Tạo</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="created">Ngày Cập Nhật</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="actions">Actions</sort-link>
            </th>
          </tr>
        </thead>
        <template #body="sort">
          <tbody>
            <tr v-for="category in sort.values" v-bind:key="category.id">
              <th scope="row">{{ category.id }}</th>
              <td>{{ category.name }}</td>
              <td>{{ category.alias }}</td>
              <td>
                
                <img
                  style="width: 82px"
                  class=""
                  :src="category.avatar"
                  alt=""
                />
              </td>
              <td>
                <span
                  class="f-13 mr-1 d-block mb-1"
                  v-html="formatDatetime(category.created, 'date')"
                ></span>
                <span
                  class="f-13 mr-1 d-block mb-1"
                  style="padding-left: 0.3rem"
                  v-html="formatDatetime(category.created, 'time')"
                ></span>
              </td>
               <td>
                <span
                  class="f-13 mr-1 d-block mb-1"
                  v-html="formatDatetime(category.updated, 'date')"
                ></span>
                <span
                  class="f-13 mr-1 d-block mb-1"
                  style="padding-left: 0.3rem"
                  v-html="formatDatetime(category.updated, 'time')"
                ></span>
              </td>
              <td>
                <span>
                   
                  <base-button
                    size="sm"
                    outline
                    type="danger"
                    v-on:click="clickdelete1(category.id)"
                    >Xoá</base-button
                  >
                  <span>
                    
                    <b-button
                      v-b-modal.bv-modal-example
                      size="sm"
                      variant="warning"
                      id="show-btn"
                      @click="categoryEdit(buffer = category.id)"
                      >Sửa</b-button
                    >
                  </span>
                </span>
              </td>
               
            </tr>
            <b-modal id="bv-modal-example" hide-footer>
              <template #modal-title> Sửa loại </template>
              <div class="d-block">
                <div   class="form-group">
                  <label class="col-md-3 control-label" for=""
                    >Tên<strong>*</strong></label
                  >
                  <div class="col-md-9">
                    <input
                      v-model="obj.name"
                      class="form-control"
                      id="namee"
                      name="namee"
                      type="text"
                      placeholder=""
                      value
                    />
                  </div>
                  <label class="col-md-3 control-label" for=""
                    >Kí hiệu<strong>*</strong></label
                  >
                  <div class="col-md-9">
                    <input
                      v-model="obj.alias"
                      class="form-control"
                      id="aliass"
                      name="aliass"
                      type="text"
                      placeholder=""
                      value
                    />
                  </div>
                  <label class="col-md-3 control-label" for="">Ảnh</label>
                  <div class="col-md-9">
                     
                    <div class="input-group rounded-0">
                       
                      <input type="file" @change="onFileChange" />
                      <div id="preview">
                        <img
                          style="width: 236px"
                          v-if="obj.urlimg"
                          v-bind:src="obj.urlimg"
                        />
                      </div>
                    </div>
                  </div>
 
                </div>
              </div>
              <b-button
                class="mt-3"
                variant="warning"
                block
                @click="clickEdit(buffer)"
                >save</b-button
              >
            </b-modal>
          </tbody>
        </template>
      </sorted-table>
     
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import axios from "axios";
import SortedTablePlugin from "vue-sorted-table";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.use(VueClipboard);
Vue.use(SortedTablePlugin);
export default {
  data() {
    this.axios
      .get(process.env.VUE_APP_MY_ENV_VARIABLE + "/category", {
        headers: {
          Authorization: this.getCookie("AC-ACCESS-KEY"),
        },
      })
      .then((response) => {
        // console.log(response.data);
        this.category = response.data;
      });
      //get user me
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/user/me',{
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY') }
          }
          ).then((response) => { this.user=response.data});
    return {
      obj:{
        name:'',
        alias: '',
        urlimg: ''
      },
      category: [],
      user:[],
      alias: '',
      id: '',
      name: '',
      created:'',
      updated:'',
      info:'',
      avatar:'',
      picture:'',
      hihi:'true',
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      urlimg:null
    };
  },

  methods: {
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
    formatDatetime: function (datetime,type) {
      var a =datetime.split("T");
        if(type=='date'){
          return a[0];

        }else{
            var b = a[1].split(".");
            return b[0]
        }

    },
    clickUpdate1:async function(){
      this.axios.get(this.url+'/category',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => { this.category=response.data})
    },
    categoryEdit(id){
      console.log("id: " + id);
      this.category.forEach(item => {
          if(item.id === id){
            // console.log(item);
            this.obj.name=item.name;
            this.obj.alias = item.alias;           
            this.obj.urlimg=item.avatar;
          }
      })
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
      // console.log(this.hihi);
    },
    clickEdit(id){
      this.axios.put(this.url+'/edit/category/'+id ,
      { "name": this.obj.name,"avatar":this.obj.urlimg,
        "alias": this.obj.alias, "category":this.category},
      {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.obj.urlimg = URL.createObjectURL(file);
    },
    
  },
};
</script>
