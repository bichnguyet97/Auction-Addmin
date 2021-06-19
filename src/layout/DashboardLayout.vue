<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Bảng Chính',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />
        
        <!-- <sidebar-item :link="{name: 'AddCategory', icon: 'ni ni-planet text-blue', path: '/AddCategory'}"/> -->
        <h6 id="tl" class="navbar-heading text-muted">Người Dùng</h6>
        <sidebar-item :link="{name: 'Danh Sách User', icon: 'ni ni-single-02 text-blue', path: '/user-controller'}"/>
        <sidebar-item :link="{name: 'Thêm User', icon: 'fa fa-user-plus text-blue', path: '/AddUser-controller'}"/>
        <!-- <sidebar-item :link="{name: 'Block User', icon: 'fa fa-ban text-blue', path: '/block-user'}"/> -->
        <!-- <sidebar-item :link="{name: 'Phân Quyền User', icon: 'fa fa-users text-blue', path: '/phanquyen-user'}"/> -->
        <h6 id="tl" class="navbar-heading text-muted">Thể Loại</h6>
        <sidebar-item :link="{name: 'Danh Sách Loại', icon: 'ni ni-bullet-list-67 text-blue', path: '/Category'}"/>
        <sidebar-item :link="{name: 'Thêm loại', icon: 'fa fa-cart-plus text-blue', path: '/addcategory-controller'}"/>
        <!-- <h6 class="card-title f-19 mb-3 font-weight-700 border-bottom pb-3"></h6> -->
        <h6 id="tl" class="navbar-heading text-muted">Tài Sản</h6>
        <sidebar-item :link="{name: 'Danh Sách Tài Sản', icon: 'fa fa-anchor text-blue', path: '/asset-controller'}"/>
        <sidebar-item :link="{name: 'Thêm tài sản', icon: 'fa fa-cart-plus text-blue', path: '/addasset-controller'}"/>
        <!-- <sidebar-item :link="{name: 'Xác Nhận Tài Sản', icon: 'fa fa-check text-blue', path: '/cfirmasset-controller'}"/> -->
        <!-- <sidebar-item :link="{name: 'Sửa Tài Sản', icon: 'fa fa-wrench text-blue', path: '/editasset-controller'}"/> -->
        <h6 id="tl" class="navbar-heading text-muted">Đấu Giá</h6>
        <sidebar-item :link="{name: 'Danh Sách Đấu Giá', icon: 'fa fa-gavel text-blue', path: '/auction-controller'}"/>
        <sidebar-item :link="{name: 'Thêm Đấu Giá', icon: 'fa fa-plus text-blue', path: '/addauction-controller'}"/>
        <sidebar-item :link="{name: 'Xác Nhận Đấu Giá', icon: 'fa fa-check text-blue', path: '/cfaution-controller'}"/>
        <!-- <sidebar-item :link="{name: 'Đấu Giá Đã Xác Nhận', icon: 'fa fa-check-circle text-green', path: '/active-controller'}"/> -->
        <h6 id="tl" class="navbar-heading text-muted">Transaction</h6>
        <sidebar-item :link="{name: 'Lịch Sử Giao Dịch', icon: 'fa fa-address-book text-green', path: '/transaction'}"/>
        <!-- <sidebar-item :link="{name: 'Kiểm soát đấu giá', icon: 'fa fa-balance-scale text-blue', path: '/bid-controller'}"/> -->
        <h6 id="tl" class="navbar-heading text-muted">EXPORT</h6>
        <sidebar-item :link="{name: 'Export', icon: 'fa fa-table text-warning', path: '/export-controller'}"/>
        <sidebar-item :link="{name: 'Export Win', icon: 'fa fa-table text-warning', path: '/export-win'}"/>
        <h6 id="tl" class="navbar-heading text-muted">Admin</h6>
        <sidebar-item :link="{name: 'login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <!-- <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/> -->
        <!-- <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/> -->
        <!-- <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/> -->

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
#tl{
  margin-left:11px;
}
</style>
