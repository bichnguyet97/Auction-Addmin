<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
             
        </base-header>
        <div>
            <!-- <div class="d-block text-center">
                    <div class="modal-body">
                    <ul  style="padding:0" >
                   
                        <div class="row mb-3">
                        <div class="col-auto font-weight-bold ng-binding">ID:</div>
                        <div class="col ng-binding">{{detailF.id}}</div>
                        </div>
                        <div class="row mb-3">
                        <div class="col-auto font-weight-bold ng-binding">Mã use:</div>
                        <div class="col text-danger font-weight-bold ng-binding">{{detailF.user}}</div>
                        </div>
                          
                        <div class="row mb-3">
                        <div class="col-auto font-weight-bold ng-binding">Mã auction:</div>
                        <div class="col ng-binding">{{detailF.auction}}</div>
                        </div>
 
                        <div class="row mb-4">
                        <div class="col-auto font-weight-bold">Star:</div>
                        <div style="word-break: break-all;" class="col ng-binding">{{detailF.star}}</div>
                        </div>
                         
                        <div class="row mb-3" ng-show="choosedTran.additionInfo.accountNumber!=undefined">
                        <div class="col-auto font-weight-bold ng-binding">Trạng thái:</div>
                        <div class="col ng-binding">{{detailF.status}}</div>
                        </div>
                        <div class="row mb-3" ng-show="choosedTran.additionInfo.accountName!=undefined">
                        <div class="col-auto font-weight-bold ng-binding">Comment:</div>
                        <div class="col ng-binding">{{detailF.comment}}</div>
                        </div>
                        <div class="row mb-3">
                        <div class="col-auto font-weight-bold ng-binding">Ngày tháng:</div>
                        <div class="col ng-binding">{{formatDatetime(detailF.created,'date')}} {{formatDatetime(detailF.created,'time')}}</div>
                        
                        </div>
                        
                    </ul>
                    </div>
            </div> -->
            
            <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                Mã feedback <span class="text-danger">*</span>
                            </label> 
                              <input v-model="detailF.id" type="" class="form-control form-control-user fs-090" value="2502" maxlength="20" :disabled="validated ? disabled : ''">
                            
                        </div>
                    </div>
                        
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                               Mã user <span class="text-danger">*</span>
                            </label>
                            <input v-model="detailF.user" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                Mã auction <span class="text-danger">*</span>
                            </label>
                            <input   v-model="detailF.auction" type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                Star <span class="text-danger">*</span>
                            </label>
                            <input v-model="detailF.star " type="" class="form-control form-control-user fs-090" value="100000000" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                Ngày tháng <span class="text-danger">*</span>
                            </label>
                            <base-input   type="datetime-local" :value="formatDatetime(detailF.created)" id="example-datetime-local-input" :disabled="validated ? disabled : ''"/>
                        </div>
                    </div>
                     
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                               Trạng thái <span class="text-danger">*</span>
                            </label>
                            <input v-model="detailF.status" type="" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                    </div>
                        
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label pb-1 pt-0 font-weight-600">
                                Comment <span class="text-danger">*</span>
                            </label>
                            <input v-model="detailF.comment" type="" class="form-control form-control-user fs-090" value="" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                    </div>
                     
                     
                </div>
            </div>
            <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                 <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
                   Rep feedback
                </h3>
                 <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Mã feedback <span class="text-danger">*</span>
                        </label> 
                            <input v-model="detailF.id" type="" class="form-control form-control-user fs-090" value="2502" maxlength="20" >
                        
                    </div>
                </div>
                 <div class="col-12 col-md-6">
                    <div class="col-2 offset-8">
                        <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Send</button>
                        
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
 
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/feedback/detail/'+this.$route.params.id,{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
        ).then((response) => { 
            console.log( "response" + response.data.id);
            this.detailF=response.data;
        });
     
    return {
       
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      
      detailF:[],
      id:'',
   
        user:'',
        auction:' ',
        star:' ',
        status:' ',
        comment: '',
        created: ' '
    };
  },
  components: {
    // Login
  },
  methods: { 
     formatDatetime: function (datetime) {

            if(datetime != ''){
                var a =datetime.split(".");
                return a[0];
            }else return "";


        },
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
        // formatDatetime: function (datetime) {

        //     if(datetime != ''){
        //         var a =datetime.split(".");
        //         return a[0];
        //     }else return "";


        // },
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
