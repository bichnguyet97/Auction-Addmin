<template>
    <div class="testLinh">
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <span class="mask bg-gradient-success opacity-8"></span>
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Người dùng</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                    </div>
                </div>
            </div>
        </base-header>
        
         
        <div class="mt--7">
            
          <div class="card border-0 rounded-0 shadow-sm">
             
            <div class="card-body p-3 rounded-0 border-0">
                 <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
                    Thông Tin Người Dùng
                </h3>
              <div class="card-text pt-1">
                   
                <div class="row">
                  <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                    <div class="user-sum ml-7">
                      <b-avatar style="width:128px; height:128px" :src="picture"></b-avatar>
                    </div>
                    <div class="user-sum ml-6 mt-2">
                        <button v-b-modal.modal-1 class="btn btn-success btn-sm" @click="changeAvatar=true">
                            <b-icon icon="check2" font-scale="1.5"></b-icon>
                            Chọn ảnh
                        </button>
                        <button class="btn btn-default btn-sm">
                            <b-icon icon="x" font-scale="1.5"></b-icon>
                            Hủy bỏ
                        </button>
                    </div>
                    <div class="user-sum ml-7 mt-2">
                      <h5><i class="fa fa-user" aria-hidden="true"></i>: {{user.name}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-envelope" aria-hidden="true"></i>: {{user.email}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-phone" aria-hidden="true"></i>: {{user.mobile}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-home" aria-hidden="true"></i>: {{user.province}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-transgender" aria-hidden="true"></i>: {{user.gender}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-users" aria-hidden="true"></i>: {{user.group}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-birthday-cake" aria-hidden="true"></i>: {{user.dateofbirth}}</h5>
                    </div>
                  </div>
                  <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Tên đăng nhập<span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control form-control-user fs-090" :value="user.name" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Địa chỉ Email<span class="text-danger">*</span>
                          </label>
                          <input v-model="user.email" type="" class="form-control form-control-user fs-090" value="user.email" maxlength="20" :disabled="validated ? disabled : ''">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Họ và đệm<span class="text-danger">*</span>
                          </label>
                          <input v-model="user.lastname" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Tên<span class="text-danger">*</span>
                          </label>
                          <input v-model="user.fullname" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Giới tính<span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="user.gender" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Ngày sinh<span class="text-danger">*</span>
                          </label>
                          <!-- <base-input v-model="user.dateofbirth" type="datetime-local" value="2021-1-25T10:30:00" id="example-datetime-local-input"/> -->
                           
                            <b-row v-for="type in types" :key="type">
                              <b-col  >
                                <b-form-input  v-model="user.dateofbirth" :id="`type-${type}`" :type="type"></b-form-input>
                              </b-col>
                            </b-row>
                           
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Số điện thoại<span class="text-danger">*</span>
                          </label>
                          <input v-model="user.mobile" type="" class="form-control form-control-user fs-090" value="" maxlength="20">
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Tỉnh thành<span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="user.province" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option >Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                            <option>Đà Nẵng</option>
                            <option>Hải Phòng</option>
                            <option>Cần Thơ</option>
                            <option>Thừa Thiên - Huế</option>
                            <option>Quảng Ninh</option>
                            <option>An Giang</option>
                            <option>Bà Rịa-Vũng Tàu</option>
                            <option>Bắc Giang</option>
                            <option>Bắc Kạn</option>
                            <option>Bạc Liêu</option>
                            <option>Bắc Ninh</option>
                            <option>Bến Tre</option>
                            <option>Bình Dương</option>
                            <option>Bình Định</option>
                            <option>Bình Phước</option>
                            <option>Bình Thuận</option>
                            <option>Cà Mau</option>
                            <option>Cao Bằng</option>
                            <option>Đắk Lắk</option>
                            <option>Đắk Nông</option>
                            <option>Điện Biên</option>
                            <option>Đồng Nai</option>
                            <option>Đồng Tháp</option>
                            <option>Gia Lai</option>
                            <option>Hà Giang</option>
                            <option>Hà Nam</option>
                            <option>Hà Tĩnh</option>
                            <option>Hải Dương</option>
                            <option>Hậu Giang</option>
                            <option>Hòa Bình</option>
                            <option>Hưng Yên</option>
                            <option>Kiên Giang</option>
                            <option>Kon Tum</option>
                            <option>Khánh Hòa</option>
                            <option>Lai Châu</option>
                            <option>Lạng Sơn</option>
                            <option>Lào Cai</option>
                            <option>Lâm Đồng</option>
                            <option>Long An</option>
                            <option>Nam Định</option>
                            <option>Ninh Bình</option>
                            <option>Ninh Thuận</option>
                            <option>Nghệ An</option>
                            <option>Phú Thọ</option>
                            <option>Phú Yên</option>
                            <option>Quảng Bình</option>
                            <option>Quảng Nam</option>
                            <option>Quảng Ngãi</option>
                            <option>Quảng Trị</option>
                            <option>Sóc Trăng</option>
                            <option>Sơn La</option>
                            <option>Tây Ninh</option>
                            <option>Tiền Giang</option>
                            <option>Tuyên Quang</option>
                            <option>Thái Bình</option>
                            <option>Thái Nguyên</option>
                            <option>Thanh Hóa</option>
                            <option>Trà Vinh</option>
                            <option>Vĩnh Long</option>
                            <option>Vĩnh Phúc</option>
                            <option>Yên Bái</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                            Phân quyền <span class="text-danger">*</span>
                          </label>
                          <base-input>
                          <select v-model="user.group" class="form-control form-control-user fs-090">
                            <option disable value="">Chọn</option>
                            <option>Admin</option>
                            <option>AdminLV1</option>
                            <option>AdminLV2</option>
                            <option>AdminLV3</option>
                            <option>Agency</option>
                            <option>User</option>
                          </select>
                          </base-input>
                        </div>
                      </div>
                        <button id="buttontt" v-b-modal.modalPopover class="btn btn-success mb-2" @click="clickEdit(user.id)">Cập nhật thông tin</button>
                      <b-modal id="modalPopover" title="Thông báo" ok-only>
                        <p>
                          {{loi?loi: 'Cập nhật thông tin tài khoản thành công !'}}
                        </p>
                      </b-modal>
                      <b-modal id="modal-1" title="Chọn ảnh của bạn" hide-footer>
                        <!-- <input type="file" @change="onFileChange" />
                        <div id="topimage" class="user-avatar mb-3 text-center">
                          <img id="sizeimage" v-if="urlimg" v-bind:src="urlimg" />
                        </div> -->
                        <div class="input-group rounded-0">
                          <div class="custom-file rounded-0">
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
                                  Thay đổi
                              </button>
                          </div>
                          </div>
                       
                          <div id="preview">
                              <img style="width:20%" v-if="picture" v-bind:src="picture" />
                          </div>
                          <small id="emailHelp" class="form-text text-muted">Chọn một hoặc nhiều ảnh để thêm vào thư viện.</small>
                       
                    </b-modal>
                    </div>
                  </div>
                </div>
              </div>
              <h3 v-b-toggle.collapse-5 style="border-bottom: 1px solid green ;" class=" pb-3">
                Thông tin ví
              </h3>
              <b-collapse visible id="collapse-5">
                <div class="w-100" style="display: flex;margin-top:2rem;">
                  
                  <div class="col-12 col-md-3">
                    <label for="" class="font-weight-500">
                      <a v-bind:href="'https://tronscan.org/#/address/'+ user.walletAddress" target="_blank">Địa chỉ ví VNDT</a>
                    </label>
                    <div class="input-group mb-0">
                        <input class="form-control form-control-user fs-090" type="text" v-model="user.walletAddress" :disabled="validated ? disabled : ''">
                        <button type="button" @click="doCopy">Copy!</button>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <label for="" class="font-weight-500">
                      <a v-bind:href="'https://tronscan.org/#/address/'+ user.bonusAddress" target="_blank">Địa chỉ ví phụ</a>
                    </label>
                    <div class="input-group mb-0">
                        <input class="form-control form-control-user fs-090" type="text" v-model="user.bonusAddress" :disabled="validated ? disabled : ''">
                        <button type="button" @click="doCopy1">Copy!</button>
                    </div>
                  </div>
                </div>
                <div class="w-100" style="display: flex;">
                  <div class="ml-3">
                    <span class="d-block font-weight-light text-uppercase f-15 mt-4 m">Tài khoản chính: <strong class="font-weight-600 mr-2"><span class="cur-format">{{user.vndtbalance}}</span>
                            VNDT</strong></span>
                    <span class="d-block font-weight-light f-14 mt-2">
                        Tổng số tiền đặt cọc: <strong class="font-weight-600 mr-2"><span class="cur-format">{{user.vndtfreeze}}</span>
                            VNDT</strong>
                    </span>
                  </div>
                    <span class="d-block font-weight-light text-uppercase f-15 mt-4 ml-9">Tài khoản phụ: <strong class="font-weight-600 mr-2"><span class="cur-format">{{user.bonusBalance}}</span>
                            VNDT</strong></span>
                </div>
              </b-collapse>
              <h3 v-b-toggle.collapse-3 style="border-bottom: 1px solid green ;" class=" pb-3 mt-4">
                Thông Tin Giao Dịch
              </h3>
              <div style="overflow-x:auto;">
                <b-collapse visible id="collapse-3">
                  <sorted-table class="table table-striped" v-bind:values="trans2">
                    <thead>
                        <tr>
                          <th scope="col"><sort-link name="id">ID</sort-link></th>
                          <th scope="col"><sort-link name="amount">Số lượng</sort-link></th>
                          <th scope="col"><sort-link name="from_user">Giao dịch</sort-link></th>
                          <th scope="col"><sort-link name="hash">Mã hash</sort-link></th>
                          <th scope="col"><sort-link name="note">Nội dung</sort-link></th>
                          <th scope="col"><sort-link name="created">Ngày tháng</sort-link></th>
                          <th scope="col"><sort-link name="status">Trạng thái</sort-link></th>
                        </tr>
                    </thead>
                    <template #body="sort">
                    <tbody>
                        <tr v-for="transactions2 in sort.values" v-bind:key="transactions2.id">
                          <td style="white-space: normal;" scope="row">
                            {{transactions2.id}}
                          </td>
                          <td style="white-space: normal;">
                            {{transactions2.amount}}
                          </td>
                          <td style="white-space: normal;">
                            <span class="f-13 mr-1 d-block mb-1">ID người gửi: {{transactions2.from_user}}</span>
                            <span class="f-13 mr-1 d-block mb-1">Địa chỉ gửi: {{transactions2.from_address}}</span>
                            <span class="f-13 mr-1 d-block mb-1">ID người nhận: {{transactions2.to_user}}</span>
                            <span class="f-13 mr-1 d-block mb-1">Địa chỉ nhận: {{transactions2.to_address}}</span>
                            <span class="f-13 mr-1 d-block mb-1">Mã hash: {{transactions2.hash}}</span>
                          </td>
                          <td style="white-space: normal;">
                            <a v-bind:href="'https://tronscan.org/#/transaction/'+ transactions2.hash" target="_blank">Xem</a>
                          </td>
                          <td style="white-space: normal;">{{transactions2.note}}</td>
                          <td style="white-space: normal;">
                            <span class="f-13 mr-1 d-block mb-1" v-html="formatDatetime(transactions2.created,'date')"></span>
                            <span class="f-13 mr-1 d-block mb-1" style="padding-left: 0.3rem;" v-html="formatDatetime(transactions2.created,'time')"></span>
                          </td>
                          <td>
                            <span>
                              <b-button style=" width:auto;" size="sm" variant="info" v-if="transactions2.status == 'complete'">HOÀN THÀNH</b-button>
                              <b-button style=" width:auto;" size="sm" variant="danger" v-if="transactions2.status == 'Pending'">ĐANG XỬ LÝ</b-button>
                            </span>
                          </td>
                        </tr>    
                    </tbody>
                    </template>   
                  </sorted-table>
                  <paginate
                  :page-count="totalPage"
                  :click-handler="onclick"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  class="pagination">
                  </paginate>
                </b-collapse>
              </div>
            <h3 v-b-toggle.collapse-2 style="border-bottom: 1px solid green ;" class=" pb-3 mt-4">
              Đấu Giá Đã Tham Gia
            </h3>
            <div>
              <div style="display:flex;">
                <h5 style="margin-top:10px;">Search Win</h5>
                <div class="search-wrapper panel-heading col-sm-2 m">
                  <!-- <select v-model="searchQuery" class="form-control ml-4">
                    <option disable value="">All</option>
                    <option value="Trúng Đấu Giá">Trúng Đấu Giá</option>
                    <option value="False">False</option>
                  </select> -->
                  <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                </div>
                <h5 style="margin-top:10px;">Trạng thái</h5>
                <div class="search-wrapper panel-heading col-sm-2 m">
                  <select v-model="searchStatus" class="form-control ml-4">
                    <option disable value="">All</option>
                    <option value="true">Trúng Đấu Giá</option>
                    <option value="false">False</option>
                  </select>
                  <!-- <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" /> -->
                </div>
              </div>
              <b-collapse visible id="collapse-2">
              <table class="table table-striped mt-2">
                  <thead>
                      <tr>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Thông Tin tài sản</th>
                      <th scope="col">Thông tin đấu giá</th>
                      <!-- <th scope="col">Thông tin đại lý</th> -->
                      <th scope="col">Trạng Thái</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="auction in resultQuery" v-bind:key="auction.id"> 
                        <td scope="row">
                          <img style="width: 80px;" class="" :src="auction.images.split(',',1)" alt="">
                        </td>
                        <td class="test" style="white-space: normal;">
                          <h5 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auction.name}}</h5>
                          <span class="f-13 mr-1 d-block mb-1">Mã tài sản: <router-link :to="{ name: 'detailEditAsset', params: { id: auction.assest_id }}">{{auction.assest_id}}</router-link></span>
                          <span class="f-13 mr-1 d-block mb-1">Loại: {{auction.category}}</span>                            
                          <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{formatDatetime(auction.created,'date')}} {{formatDatetime(auction.created,'time')}}</span>
                          <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật: {{formatDatetime(auction.updated,'date')}} {{formatDatetime(auction.updated,'time')}}</span>
                        </td>
                        <td>
                          <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: <router-link :to="{ name: 'detailauction', params: { id: auction.id }}">{{auction.id}}</router-link></span>
                          <span class="f-13 mr-1 d-block mb-1">Đấu giá tại: {{auction.area}}</span>
                          <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{formatDatetime(auction.start_at,'date')}} {{formatDatetime(auction.start_at,'time')}}</span>
                          <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{formatDatetime(auction.end_at,'date')}} {{formatDatetime(auction.end_at,'time')}}</span>
                          <span class="f-13 mr-1 d-block mb-1">Số user tham gia:{{auction.attending_user}}</span>
                          <span class="f-13 mr-1 d-block mb-1">User win:{{auction.winner}}</span>
                        </td>
                        <!-- <td>
                          <span class="f-13 mr-1 d-block mb-1">ID người bán: <router-link :to="{ name: 'detailUser', params: { id: auction.user_id }}">{{auction.user_id}}</router-link></span>
                        </td> -->
                        <td>
                          <span>
                            <!-- <b-button style=" width:70%;" size="sm" variant="info" v-if="auction.winner==">TRÚNG ĐẤU GIÁ</b-button> -->
                            <span class="badge badge-success wf-85" v-if="auction.winner == user.id">Trúng Đấu Giá</span>
                            <span class="badge badge-warning wf-85" v-if="auction.winner != user.id">FALSE</span>
                          </span>
                        </td>
                      </tr> 
                  </tbody>         
              </table>
              <paginate
              :page-count="totalPage"
              :click-handler="onclick2"
              :prev-text="'Prev'"
              :next-text="'Next'"
              class="pagination">
              </paginate>
              </b-collapse>
            </div>
            <!-- <h3 style="border-bottom: 1px solid green ;" class=" pb-3">
              Đấu Giá Đã Trúng
            </h3> -->
            </div>
          </div>
        </div>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import Firebase from 'firebase'
import VueAxios from 'vue-axios'
import SortedTablePlugin from "vue-sorted-table";
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
Vue.use(SortedTablePlugin);
  export default {
  data() {
    this.axios.post(process.env.VUE_APP_MY_ENV_VARIABLE+'/admin/user-info',{
          "startAt":"2020-12-07",
          "endAt":"2021-07-26",
          "userId":this.$route.params.id
          // "userId":100515
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') 
      }
      
        }).then((response) => {
          this.user = response.data.user,
          this.auction =response.data.auction,
          this.trans =response.data.trans,
          // this.inname= response.data.user.name,
          this.picture= response.data.user.avatar,
          // this.inemail= response.data.user.email,
          // this.indateofbirth= response.data.user.dateofbirth,
          // this.infullname= response.data.user.fullname,
          // this.ingender= response.data.user.gender,
          // this.ingroup= response.data.user.group,
          // this.inlastname= response.data.user.lastname,
          // this.inmobile= response.data.user.mobile,
          // this.inprovince= response.data.user.province
         
          // console.log( "1"+-this.users.id);
        //   this.users2 = response.data.slice(0, this.perPage-1), 
        //   this.totalPage = Math.ceil(response.data.length / this.perPage)
          this.trans2 = response.data.trans.slice(0, this.perPage-1),
          this.totalPage = Math.ceil(response.data.trans.length / this.perPage),
          this.auction2= response.data.auction.slice(0, this.perPage-1)
         });
      
    return {
      trans:[],
      email: '',
      password:'',
      id: '',
      page: 10,
      name: '',
      rows: 0,
      results: [],
      created:'',
      group: '',
      inavatar:'',
      currentPage : 1,
      perPage : 10,
      totalPage:0,
      province:'',
      updated:'',
      info:'',
      trans2:[],
      auction2:[],
      gender:'',
      user: {
          id:'',
          email:"",
          avatar:"",        
          name:"",
          fullname:null,
          lastname:null,
          mobile:null,
          gender:null,
          dateofbirth:null,
          province:null,
          resetToken:"",
          isActive:true,
          walletAddress:"",
          bonusAddress:"",
          code:"",
          bidTurn:0,
          created:"",
          updated:"",
          group:"",
          vndtbalance: "",
          vndtfreeze: "",
          bonusBalance: "",
          usdfbalance: "",
          trxbalance: ""
      },
      picture:null,
      auction:[],
      transactions2:[],
      urlimg:null,
      loi:null,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchQuery:"",
      validated:"",
      searchStatus:'',
      types:[
        'date'
      ]
    };
  },
  components: {
  },
  methods: {
    clickUpdate:async function(){
        this.axios.get(this.url+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).catch((error) => { this.loi=error
        }).then((response) => { this.users=response.data})
    //  console.log(this.url);
    },
    onclick(page){
      console.log(page);
      this.trans2 = this.trans.slice((page-1)*this.perPage,page*this.perPage-1)
    },
    onclick2(page){
      console.log(page);
      this.auction2 = this.auction.slice((page-1)*this.perPage,page*this.perPage-1)
    },
    clickEdit(id){
    this.axios.put(this.url+'/user/edit/'+id ,{ "avatar": this.picture, "gender": this.user.gender,
      "province": this.user.province, "mobile": this.user.mobile, "lastname": this.user.lastname, "email": this.user.email, "group":this.user.group, "dateofbirth":this.user.dateofbirth, "fullname": this.user.fullname}, {
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then(() => {
          this.clickUpdate();
        });
    },
    // previewImage(event){
    //   // this.uploadValue=0;
    //   this.picture=null;
    //   this.imageData =event.target.files[0];
    //   this.uploadValue=0;
        
    // },
     
    formatDatetime: function (datetime,type) {
      if(datetime != null){
      var a = String(datetime).split("T");
        if(type=='date'){
          return a[0];

        }else{
            var b = a[1].split(".");
            return b[0]
        }

      }else return '';


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
    previewImage(event){
      // this.uploadValue=0;
      this.picture=null;
      this.imageData =event.target.files[0];
      this.uploadValue=0;
      const file = event.target.files[0];
      this.picture = URL.createObjectURL(file);
    },
    onUpload(){
      this.picture=null;
        
      const storageRef=Firebase.storage().ref(`${this.imageData.name}`+`${this.imageData.lastModified}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error =>{console.log(error.message)},
        ()=>{this.uploadValue=100;
    
        storageRef.snapshot.ref.getDownloadURL().then((url1)=>{
          this.picture=url1;
          console.log(this.picture);
        });

        }
        );
        
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.urlimg = URL.createObjectURL(file);
    },
    doCopy: function () {
        this.$copyText(this.user.walletAddress).then(function (e) {
          alert('Đã sao chép')
          // console.log(e)
        }, function (e) {
          alert('Can not copy')
          // console.log(e)
        })
      },
      doCopy1: function () {
        this.$copyText(this.user.bonusAddress).then(function (e) {
          alert('Đã sao chép')
          // console.log(e)
        }, function (e) {
          alert('Can not copy')
          // console.log(e)
        })
      }
  },
  computed: {

  
function(){
  console.log('qqqqq');
},
    resultQuery(){
        if(this.searchQuery){
         return this.auction.filter((item)=>{  
              var checkStatus;
              if(this.searchStatus) checkStatus = (JSON.stringify(item.winner === this.user.id) === this.searchStatus);else checkStatus = true;
              // console.log("test: " + test);
             return   this.searchQuery.toLowerCase().split(' ').every(v => ((
                      (item.name + '').toLowerCase().includes(v) 
                      || (item.area + '').toLowerCase().includes(v)
                      || (item.id + '').toLowerCase().includes(v)
                      || (item.winner + '').toLowerCase().includes(v)
                      || (item.category + '').toLowerCase().includes(v)
                    ) && checkStatus)
                  ) 
          });
      }else if(this.searchStatus != undefined){
        return this.auction2.filter((item)=>{  
          var checkStatus;
          if(this.searchStatus) checkStatus = (JSON.stringify(item.winner === this.user.id) === this.searchStatus);else checkStatus = true;
          return  checkStatus;
        }); 
      }
      else{ 
        return  this.auction2;
      }
    }
  }
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
.point{
  cursor: pointer;
}
.test{
  max-width: 100px;
  overflow: hidden;
  // white-space: nowrap; 
  text-overflow: ellipsis;
}
#sua{
  width:5px;
  height: 2px;
}
#smbutton1{
  padding:10px 5px;
  display:flex;
}
#smtaomoi1{
  margin-top:35px;
}
#buttontt{
  width: 177px;
  height: 40px;
  text-align: center;
  margin-top: 28px;
  margin-left: 21px;
}
#sizeimage{
    height: 125px;
    width: 201px;
}
#topimage{
    margin-top:10px;
}
// @media (max-width: 768px) {
//   .testLinh{
//     display:none;
//   }
// }
</style>

