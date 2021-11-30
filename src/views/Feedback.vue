<template>
  <div>
    <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
    <div id="app">
      <sorted-table class="table table-striped" v-bind:values="feedback">
        <thead>
          <tr>
            <th scope="col" >
              <sort-link name="id">ID</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="user">User</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="auction">Auction</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="star">Số sao</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="comment">Comment</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="created">Ngày Cập Nhật</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="status">Trạng thái</sort-link>
            </th>
            <th scope="col" >
              <sort-link name="actions">Actions</sort-link>
            </th>
          </tr>
        </thead>
        <template #body="sort">
          <tbody>
            <tr v-for="feedback in sort.values" v-bind:key="feedback.id">
              <th scope="row">{{ feedback.id }}</th>
              <td><router-link :to="{ name: 'detailUser', params: { id: feedback.user }}"> {{feedback.user}}</router-link></td>
              <td><router-link :to="{ name: 'detailUser', params: { id: feedback.auction }}"> {{feedback.auction}}</router-link></td>
              <td>
                  {{feedback.star}}
              </td>
              <td>
                  {{feedback.comment}}
              </td>
              <td>
                <span
                  class="f-13 mr-1 d-block mb-1"
                  v-html="formatDatetime(feedback.created, 'date')"
                ></span>
                <span
                  class="f-13 mr-1 d-block mb-1"
                  style="padding-left: 0.3rem"
                  v-html="formatDatetime(feedback.created, 'time')"
                ></span>
              </td>
                <td>{{feedback.status}}</td>
              <td>
               <router-link :to="{ name: 'detailfeedback', params: { id: feedback.id }}">Thông tin chi tiết</router-link>
              </td>
               
            </tr>
      
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
      .get(process.env.VUE_APP_MY_ENV_VARIABLE + "/feedback/all", {
        headers: {
          Authorization: this.getCookie("AC-ACCESS-KEY"),
        },
      })
      .then((response) => {
        console.log("hi"+ response.data);
        this.feedback = response.data;
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
      feedback: [],
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
      
    onFileChange(e) {
      const file = e.target.files[0];
      this.obj.urlimg = URL.createObjectURL(file);
    },
    
  },
};
</script>
