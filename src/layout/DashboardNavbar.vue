<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
                <base-input placeholder="Search"
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input>
            </div>
        </form>
        <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
                <base-dropdown class="nav-link pr-0">
                    <div class="media align-items-center" slot="title">
                <span class="avatar avatar-sm rounded-circle">
                  <!-- <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg"> -->
                  <b-avatar v-if="user.avatar" :src="user.avatar"></b-avatar>
                </span>
                        <div class="media-body ml-2 d-none d-lg-block">
                            <span class="mb-0 text-sm  font-weight-bold">{{user.name}}</span>
                        </div>
                    </div>

                    <template>
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-single-02"></i>
                            <span>My profile</span>
                        </router-link>
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-settings-gear-65"></i>
                            <span>Settings</span>
                        </router-link>
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-calendar-grid-58"></i>
                            <span>Activity</span>
                        </router-link>
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-support-16"></i>
                            <span>Support</span>
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <!-- <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-user-run"></i>
                            <span>Logout</span>
                        </router-link> -->
                        <a href="/login" class="dropdown-item"><i class="ni ni-user-run"></i><span class="nav-link-text">Logout</span></a>
                    </template>
                </base-dropdown>
            </li>
        </ul>
    </base-nav>
</template>
<script>
import Vue from 'vue';
import VueCookies from 'vue-cookies';
Vue.use(VueCookies)
  export default {
    data() {
      this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/user/me',{
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY') }
          }
          ).then((response) => { this.user=response.data});
     
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: '',
        name:'',
        user:[],
        users:[],
        title:"users_me",
        url:process.env.VUE_APP_MY_ENV_VARIABLE
      };
    },
    methods: {
    //   clickUpdate1:async function(){
    //     this.axios.get(this.url+'/user/me',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => { this.user=response.data});
    // console.log(this.user.name)
    // },
    // users_me(){
    //   this.axios.get(this.url+'/user/me',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => { this.user=response.data});
    // console.log(this.user.name);
    // },
    // clickinfo(){
    //       this.axios.get(this.url+'/user/me',{
    //     headers: {
    //       Authorization: this.getCookie('AC-ACCESS-KEY') }
    //       }).then((response) => { this.users=response.data});
    //   //  console.log(this.url);
    //   console.log(this.users)
    //   },
      clickUpdate(){
          this.axios.get(this.url+'/user/me',{
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY') }
          }).then((response) => { this.users=response.data});
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
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
    }
  };
</script>
