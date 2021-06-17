import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/AddCategory',
          name: 'AddCategory',
          component: () => import(/* webpackChunkName: "demo" */ './views/AddCategory.vue')
        },
        {
          path: '/Category',
          name: 'Category',
          component: () => import(/* webpackChunkName: "demo" */ './views/Category.vue')
        },
        {
          path: '/addcategory-controller',
          name: 'addcategory-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/AddCagory.vue')
        },
        {
          path: '/user-controller',
          name: 'user-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/detailUser/:id',
          name: 'detailUser',
          component: () => import(/* webpackChunkName: "demo" */ './views/DetailUser.vue')
        },
        {
          path: '/adduser-controller',
          name: 'adduser-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/AddUser.vue')
        },
        {
          path: '/block-user',
          name: 'block-user',
          component: () => import(/* webpackChunkName: "demo" */ './views/BlockUsers.vue')
        },
        {
          path: '/phanquyen-user',
          name: 'phanquyen-user',
          component: () => import(/* webpackChunkName: "demo" */ './views/phanquyenuser.vue')
        },
        {
          path: '/asset-controller',
          name: 'asset-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/Assetcontroller.vue')
        },
        {
          path: '/addasset-controller',
          name: 'addasset-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/AddAsset.vue')
        },
        {
          path: '/cfirmasset-controller',
          name: 'masset-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/confirmAsset.vue')
        },
        {
          path: '/editasset-controller',
          name: 'editasset-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/EditAsset.vue')
        },
        {
          path: '/detailEditAsset/:id',
          name: 'detailEditAsset',
          component: () => import(/* webpackChunkName: "demo" */ './views/DetailEditAsset.vue')
        },
        {
          path: '/editasset/:id',
          name: 'editasset',
          component: () => import(/* webpackChunkName: "demo" */ './views/EditAssets.vue')
        },
        {
          path: '/auction-controller',
          name: 'auction-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/Auctioncontroller.vue')
        },
        {
          path: '/addauction-controller',
          name: 'addauction-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/AddAuction.vue')
        },
        {
          path: '/cfaution-controller',
          name: 'cfaution-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/confirmAuction.vue')
        },
        {
          path: '/active-controller',
          name: 'active-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/Active.vue')
        },
        {
          path: '/export-controller',
          name: 'export-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/Export.vue')
        },
        {
          path: '/export-win',
          name: 'export-win',
          component: () => import(/* webpackChunkName: "demo" */ './views/ExportUserWin.vue')
        },
        {
          path: '/bid-controller',
          name: 'bid-controller',
          component: () => import(/* webpackChunkName: "demo" */ './views/Bidcontroller.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/transaction',
          name: 'transaction',
          component: () => import(/* webpackChunkName: "demo" */ './views/Transactioncontroller.vue')
        }
      ]
    },
    
  ],
  // resolve: {
  //   extensions:['.js', 'vue', 'json'],
  //   alias: {
  //     '@': resolve('src')
  //   }
  // }
})
