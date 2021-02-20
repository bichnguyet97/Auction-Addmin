<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div v-if="hinh" class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auction in auction" v-bind:key="auction.id" class="card-text pt-1">
                            <div class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img @click="hinh=false,clickSearch2(auction.asset.id)" class="w-100" :src="auction.asset.images.split(',',1)" alt="">
                                  </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auction.asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản: {{auction.asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{auction.asset.category}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá niêm yết:{{auction.initPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Ngày đăng:{{auction.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật:{{auction.updated}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{auction.asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản: {{auction.asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">
                                                  <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auction.auction.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{auction.auction.startAt}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{auction.auction.endAt}}</span>
                                                  <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm(auction.auction.id)" variant="info">Xác nhận</b-button>
                                                  <!-- <h3>Nhập lý do không xác nhận</h3>
                                                  <input v-model="note" class="mr-sm-2" id="note" name="note" type="text" value> -->
                                                  <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm1(auction.auction.id)" variant="danger">Không xác nhận</b-button>
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                                    <div class="user-sum ml-3">
                                      <h5 class="f-15 mb-2 font-weight-600">{{auction.user.name}}</h5>
                                      <p class="f-13 mb-0">
                                        <span class="d-block">
                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                          {{auction.user.mobile}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                          {{auction.user.email}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-share" aria-hidden="true"></i>
                                          {{auction.user.province}}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <b-modal id="modalPopover" title="Thông báo" ok-only>
                          <p>
                            Bạn đã xác nhận đấu giá thành công !
                          </p>
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="col-12 col-xl-12 col-lg-12">
          <div class="detail-box mg-b-30">
            <!--Detail Sum-->
            <div class="detail-sum p-0 p-sm-3 bg-white mg-b-20">
                <div class="detail-sum-box mini-col">
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <!--Photo-->
                            <div class="detail-photo position-relative">
                                <div class="photo-slide photo-box">
                                    <!--Thumb-->
                                    <!-- <div class="photo-thum">
                                        <div id="secondary-slider" class="splide secondary-slider">
                                            <div class="splide__track">
                                                <ul class="splide__list">
                                                    <li class="splide__slide">
                                                        <img :src="Search.images.split(',',1)">
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div>
                                    <b-carousel
                                      id="carousel-fade"
                                      style="text-shadow: 0px 0px 2px #000"
                                      fade
                                      indicators
                                      img-width="1024"
                                      img-height="480"
                                    >
                                      <b-carousel-slide 
                                        v-for="image in image" v-bind:key="image.images"
                                        :img-src="image"
                                      ></b-carousel-slide>
                                    </b-carousel>
                                  </div>
                                    <!--Thumb-->
                                    <!--Photo View-->
                                    <!-- <div class="photo-slide">
                                        <div class="position-relative">
                                            <div id="primary-slider" class="splide primary-slider">
                                                <div class="splide__track">
                                                    <ul class="splide__list">
                                                        <li class="splide__slide" data-src="img/brand/s500.jpg" data-lightbox="photo" data-title="Biệt thự Vinhome Riverside" data-caption="Biệt thự Vinhome Riverside" data-fancybox="photo-list" data-height="600" data-thumb-type="image" data-thumbs="{&quot;autoStart&quot;:true}">
                                                            <img src="img/brand/s500.jpg">
                                                        </li>
                                                        <li class="splide__slide" data-src="img/brand/s500.jpg" data-lightbox="photo" data-title="Biệt thự Vinhome Riverside" data-caption="Biệt thự Vinhome Riverside" data-fancybox="photo-list" data-height="600" data-thumb-type="image" data-thumbs="{&quot;autoStart&quot;:true}">
                                                            <img src="img/brand/s500.jpg">
                                                        </li>
                                                        <li class="splide__slide" data-src="img/brand/s500.jpg" data-lightbox="photo" data-title="Biệt thự Vinhome Riverside" data-caption="Biệt thự Vinhome Riverside" data-fancybox="photo-list" data-height="600" data-thumb-type="image" data-thumbs="{&quot;autoStart&quot;:true}">
                                                            <img src="img/brand/s500.jpg">
                                                        </li>
                                                        <li class="splide__slide" data-src="img/brand/s500.jpg" data-lightbox="photo" data-title="Biệt thự Vinhome Riverside" data-caption="Biệt thự Vinhome Riverside" data-fancybox="photo-list" data-height="600" data-thumb-type="image" data-thumbs="{&quot;autoStart&quot;:true}">
                                                            <img src="img/brand/s500.jpg">
                                                        </li>
                                                        <li class="splide__slide" data-src="img/brand/s500.jpg" data-lightbox="photo" data-title="Biệt thự Vinhome Riverside" data-caption="Biệt thự Vinhome Riverside" data-fancybox="photo-list" data-height="600" data-thumb-type="image" data-thumbs="{&quot;autoStart&quot;:true}">
                                                            <img src="img/brand/s500.jpg">
                                                        </li>
                                                        <li class="splide__slide" data-src="img/brand/s500.jpg" data-lightbox="photo" data-title="Biệt thự Vinhome Riverside" data-caption="Biệt thự Vinhome Riverside" data-fancybox="photo-list" data-height="600" data-thumb-type="image" data-thumbs="{&quot;autoStart&quot;:true}">
                                                            <img src="img/brand/s500.jpg">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <span class="like-box liked d-inline-block">
                                                <i class="las la-heart"></i>
                                            </span>
                                        </div>
                                    </div> -->
                                    <!--Photo View-->

                                </div>

                            </div>
                            <!--Photo-->
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="detail-sum-info p-3 p-sm-0">
                                <!--Time End-->
                                <!--Time End-->
                                 
                                <!--Price current-->
                                <div id="innit" class="price-cur text-center">
                                    <span class="f-19 mr-1 d-block mb-0 text-dark font-weight-bold">Giá khởi điểm: </span>
                                    <h3 class="text-warning f-23 mb-1">{{Search.assets[0].currentPrice}}  VNDT</h3>
                                </div>
                                <!-- Estimate -->
                                <div class="modal fade" id="MdlEstimate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header pt-3 pb-3">
                                                <h5 class="modal-title f-15 mb-0" id="exampleModalLabel">Giá ước tính</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body f-13">
                                                <p class="mb-0">Là giá được đánh giá và thẩm định bởi các tổ chức hoặc chuyên gia hàng đầu về mặt hàng hoặc tài sản đưa ra đấu giá.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Buy Now -->
                                <div class="modal fade" id="MdlBuyNow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header pt-3 pb-3">
                                                <h5 class="modal-title f-15 mb-0" id="exampleModalLabel">Giá ước tính</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body f-13">
                                                <p class="mb-0">Là giá bạn có thể trả để sở hữu ngay sản phẩm khi đấu giá bắt đầu.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Estimate -->
                                <div class="modal fade" id="MdlPriceStart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header pt-3 pb-3">
                                                <h5 class="modal-title f-15 mb-0" id="exampleModalLabel">Giá khởi điểm</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body f-13">
                                                <p class="mb-0">Là giá được người bán đưa ra để bắt đầu cho người mua tham gia đấu giá.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Price current-->
                                <!--Bidding-->
                                <!-- Estimate -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Detail Sum-->
            <!--Detail Pro-->
            <div class="detail-info p-3 bg-white mini-col">
                <div class="row">
                    <div class="col-12 col-lg-8 ">
                        <div  class="pro-info">
                            <div class="info-list f-14 mb-4">
                                <h3 class="f-17 border-bottom pb-3 mb-3">Thông tin đấu giá</h3>
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá:</span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại:</span>
                                            <strong>Hà Nội</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng:</span>
                                            <strong>1</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự:</span>
                                            <strong class="text-danger">10:20 20-11-2021</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá:</span>
                                            <strong class="text-danger">10:20 22-11-2021</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá:</span>
                                            <strong class="text-danger">10:20 22-11-2021</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Thương hiệu:</span>
                                            <strong>Vinhome</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái:</span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục:</span>
                                            <strong>Bất động sản</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Chủng loại:</span>
                                            <strong>Nhà phố, biệt thự</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Diện tích:</span>
                                            <strong>312 m2</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hướng:</span>
                                            <strong>Đông Nam</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng tầng:</span>
                                            <strong>3 tầng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số phòng ngủ:</span>
                                            <strong>3</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số nhà vệ sinh:</span>
                                            <strong>2</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Khu vực:</span>
                                            <strong>Long Biên, Hà Nội</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="video-pro mb-3">
                                <h3 class="f-17 border-bottom pb-3 mb-3">Video giới thiệu</h3>
                                <div class="row">
                                    <div class="col-12 col-md-4">
                                        <a class="video-box d-block text-center bg-light mg-b-20" href="https://www.youtube.com/watch?v=YS4tMCCfifY" data-caption="Giới thiệu về sản phẩm" data-width="800" data-height="450" data-fancybox="room_video">
                                            <span class="video mb-2 position-relative">
                                                <img src="img/1234.jpg" class="w-100" />
                                                <span class="play-icon">
                                                    <i class="las la-play"></i>
                                                </span>
                                            </span>
                                            <h6 class="font-weight-600 pt-2 mb-0 pb-2 f-14">
                                                Giới thiệu về sản phẩm
                                            </h6>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <a class="video-box d-block text-center bg-light mg-b-20" href="https://www.youtube.com/watch?v=YS4tMCCfifY" data-caption="Cơ quan thẩm định" data-width="800" data-height="450" data-fancybox="room_video">
                                            <span class="video mb-2 position-relative">
                                                <img src="img/v3.jpg" class="w-100" />
                                                <span class="play-icon">
                                                    <i class="las la-play"></i>
                                                </span>
                                            </span>
                                            <h6 class="font-weight-600 pt-2 mb-0 pb-2 f-14">
                                                Cơ quan thẩm định
                                            </h6>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <a class="video-box d-block text-center bg-light mg-b-20" href="https://www.youtube.com/watch?v=YS4tMCCfifY" data-caption="Đánh giá của chuyên gia" data-width="800" data-height="450" data-fancybox="room_video">
                                            <span class="video mb-2 position-relative">
                                                <img src="img/1235.jpg" class="w-100" />
                                                <span class="play-icon">
                                                    <i class="las la-play"></i>
                                                </span>
                                            </span>
                                            <h6 class="font-weight-600 pt-2 mb-0 pb-2 f-14">
                                                Đánh giá của chuyên gia
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="info-detail">
                                <h3 class="f-17 border-bottom pb-3 mb-3">Thông tin sản phẩm</h3>
                                <div>
                                    <ul>
                                        <li>Sản phẩm: Biệt thự Vinhome Riverside</li>
                                        <li>Địa chỉ: Khu Đô Thị Vinhomes Riverside – Long Biên – Hà Nội</li>
                                        <li>Diện tích: 140m2</li>
                                        <li>Công trình: Nhà ở gia đình</li>
                                        <li>Phong cách thiết kế: Tân cổ điển</li>
                                        <li>Số tầng: 3 tầng</li>
                                        <li>Đơn vị thiết kế: Công ty Cổ phần ARCHITEC VIỆT</li>
                                    </ul>
                                    <p>
                                        Thiết kế biệt thự vinhomes riverside này được kiến trúc sư Vũ Huy Hiệp của Công ty thiết kế Architec Việt thiết kế hoàn thiện phần kiến trúc và nội thất cho gia đình anh Hà chị Thanh tại Khu Đô Thị Vinhomes Riverside. Ngay khi được kiến trúc sư Vũ Huy Hiệp tư vấn thiết kế, anh Hà chị Thanh đã rất yêu thích ngoại thất của ngôi biệt thự này. Mẫu biệt thự 3 tầng này vô cùng phù hợp với dải đất 10x14m tại Khu Đô thị Vinhomes Riverside.
                                    </p> <p>

                                        Hình ảnh ban đầu của ngôi biệt thự tân cổ điển được thiết kế với chiều cao 3 tầng. Xét vể tổng thể thì ngôi biệt thự 3 tầng này khá hài hòa, tuy nhiên, chưa toát lên được những nét đẹp đặc trưng của nét kiến trúc Pháp. Chính vì vậy, kiến trúc sư cần cải tạo lại để tôn lên vẻ sang trọng và đẳng cấp cho công trình.
                                    </p> <p>
                                        Mời quý vị và các bạn chiêm ngưỡng hình ảnh biệt thự 3 tầng được vẽ bằng 3D do kiến trúc sư Vũ Huy Hiệp vẽ thiết kế cho gia đình anh Hà chị Thanh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="detail-side">
                            <div class="seller-box mg-b-20 bg-light p-3">
                                <div class="seller-info pb-2">
                                    <h3 class="f-17 border-bottom pb-3">Thông tin người bán</h3>
                                    <div class="d-flex align-items-center">
                                        <img :src="Search.avatar" class="rounded-circle edit-avatar" width="100" height="100">
                                        <div class="user-sum ml-3">
                                            <h5 class="f-15 mb-2 font-weight-600">{{Search.lastname}} {{Search.fullname}} </h5>
                                            <p class="f-13 mb-0 text-secondary">
                                                <span class="d-block">
                                                    <i class="las la-phone mr-1"></i>
                                                      {{Search.mobile}}
                                                </span>
                                                <span class="d-block">
                                                    <i class="las la-envelope mr-1 mt-1"></i>
                                                    {{Search.email}}
                                                </span>
                                                <span class="d-block">
                                                    <i class="las la-directions mt-1"></i>
                                                      {{Search.province}}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Detail Pro-->

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
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/new',{
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then((response) =>  { this.auction=response.data});
    console.log(this.auction);
    // var auction = [];
    // this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction',{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => { this.auction=response.data});
    // console.log(auction);
    return {
      bidPrice: '',
      currentPrice:'',
      finalPrice:'',
      status:'',
      startAt:'',
      creaded:'',
      tags:'',
      asset:[],
      province:'',
      confirm:'',
      actions:'',
      id: '',
      created:'',
      name: '',
      mobile:'',
      hinh:'true',
      updated:'',
      info:'',
      auction: [],
      add:true,
      endAt:'',
      note:'',
      save:true,
      close1:true,
      assest:'',
      Search:'',
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      users:[],
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
    clickinfo(){
          this.axios.get(this.url+'/user/me',{
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY') }
          }).then((response) => { this.users=response.data});
      //  console.log(this.url);
      },
    clickAdd1:async function(){
    await this.axios.post(this.url+'/auction/',{ "assest": this.assest,
      "bidPrice": this.bidPrice,"endAt": this.endAt, "startAt": this.startAt
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    await this.axios.get(this.url+'/auction'
       ).then((response) => { this.auction=response.data})
    },
    clickUpdate1:async function(){
      this.axios.get(this.url+'/auction'
       ).then((response) => { this.auction=response.data})
    },
    clickSearch1: async function(){
       await this.axios.get(this.url+'/auction/'+this.id).then((response) => this.userSearch = response);
       console.log(this.userSearch.data.name);
       this.searchCheck=2;
    },
    clickConfirm(id){
      this.axios.post(this.url+'/auction/update/'+id+"?status=Active", {"status":this.status}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auction=response.data);
      });
    },
    clickConfirm1(id){
      this.axios.post(this.url+'/auction/update/'+id+"?note=Thông tin tài sản của bạn bị thiếu hoặc sai, vui lòng nhập lại! cảm ơn!"+"&status=Unaccept", {"status":this.status, "note":this.note}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auction=response.data);
      });
    },
    clickSearch2(id){
      this.axios.get(this.url+'/asset/id/'+id)
      .then((response) => {this.image=(response.data.assets[0].images.split(',')), this.Search=response.data, this.auc=response.data.auctions[0]});
        console.log(this.auc);
    },
    // clickdelete1(id){
    //   this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
    // clickSearch: async function(){
    //    await this.axios.get(this.url+'/auction/category/'+this.category).then((response) => this.userSearch = response);
    //    this.searchCate=this.userSearch;
    //    this.searchCheck=3;
    //    console.log(this.userSearch.data);
    // },
    // clickdelete1(id){
    //   this.axios.delete(this.url+'/auction/delete/'+id , {
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
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
// .test td{
//     max-width: 100px;
//     overflow: hidden;
//     white-space: nowrap; 
//     text-overflow: ellipsis;
// }
#add{
  margin-top:50px;
}
#add1{
  margin-top:22px;
  margin-left:-267px;
}
#button_add{
  margin-left:-51px;
  margin-top:22px;
}
.test1{
  padding:10px 5px;
}
#smbutton2{
  padding:22px 5px;
  display:flex;
}
#right{
  margin-top:-179px;
}
#borde{
  margin-left: 903px;
  margin-top: -201px;
}
#innit{
  margin-top: 180px;
}
</style>
