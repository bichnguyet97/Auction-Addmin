<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
             
        </base-header>
        <div v-if="hihi" class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div class="card-text pt-1">
                            <div v-for="asset in asset2" v-bind:key="asset.id" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                    <div class="user-avatar mb-3 text-center">
                                      <img @click="clickSearch2(asset.id),hihi=false" class="w-100" :src="asset.images" alt="">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã: {{asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{asset.category}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Giá niêm yết: {{ formatPrice(asset.initPrice)}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày đăng: {{asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật: {{asset.updated}}</span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col12 col-xl-11 col-lg-5" id="right">
                                  <div class="text-right bid-pri-box">
                                    <div class="pri-bid mb-3">
                                      <span class="f-13 mr-1 d-block mb-1">Giá hiện tại:</span>
                                      <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{formatPrice(asset.currentPrice)}} VNDT</strong>
                                    </div>
                                    <div class="link-box">
                                      <span>
                                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                      </span>
                                      <b-button style="margin-top:5px;" size="sm" v-on:click="clickSearch2(asset.id,hihi=false)" variant="primary">Xem chi tiết</b-button>
                                      <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickconfirm(asset.id)" variant="primary">Xác nhận</b-button>
                                      <b-button v-b-modal.modal2 style="margin-top:5px;" size="sm" v-on:click="clickconfirmn(asset.id)" variant="danger">Không xác nhận</b-button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <b-modal id="modalPopover" title="Thông báo" ok-only>
                              <p>
                              Bạn đã xác nhận tài sản thành công !
                              </p>
                          </b-modal>
                          <b-modal id="modal2" title="Thông báo" ok-only>
                              <p>
                              Không xác nhận thành công!
                              </p>
                          </b-modal>
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
                                     
                                    <div>
                                    <b-carousel
                                      id="carousel-fade"
                                      style="text-shadow: 0px 0px 2px #000"
                                      fade
                                      indicators
                                      img-width="1000"
                                      img-height="480"
                                    >
                                      <b-carousel-slide 
                                        v-for="image in image" v-bind:key="image.images"
                                        :img-src="image"
                                      ></b-carousel-slide>
                                    </b-carousel>
                                  </div>

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
                                    <h3 class="text-warning f-23 mb-1">{{formatPrice(Search.assets[0].currentPrice)}}  VNDT</h3>
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
                                <div v-if="asse.category=='Sim số'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Nhà mạng: </span>
                                            <strong>{{asse.homeNetwork}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.category}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Loại sim: </span>
                                            <strong>{{asse.type}}</strong>
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div v-if="asse.category=='Bất động sản'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Thương hiệu: </span>
                                            <strong>{{asse.trademark}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.category}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Chủng loại: </span>
                                            <strong>{{asse.type}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Diện tích: </span>
                                            <strong>{{asse.acreage}}</strong>
                                        </span>
                                    </div>
                                     <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hướng: </span>
                                            <strong>{{asse.direction}}</strong>
                                        </span>
                                    </div>
                                    
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số phòng ngủ: </span>
                                            <strong>{{asse.bedroomsNumber}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số nhà vệ sinh: </span>
                                            <strong>{{asse.toiletsNumber}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Khu vực: </span>
                                            <strong>{{asse.area}}</strong>
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div v-if="asse.category=='Đá quý'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.category}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Loại đá quý: </span>
                                            <strong>{{asse.type}}</strong>
                                        </span>
                                    </div>
                                    
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Màu đá quý: </span>
                                            <strong>{{asse.color}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trọng lượng đá quý: </span>
                                            <strong>{{asse.weight}} g</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Độ sáng đá quý: </span>
                                            <strong>{{asse.brightness}} F</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hình dạng đá quý: </span>
                                            <strong>{{asse.shape}}</strong>
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div v-if="asse.category=='Xe hơi'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Thương hiệu: </span>
                                            <strong>{{asse.trademark}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.category}}</strong>
                                        </span>
                                    </div>
                                     
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Màu xe: </span>
                                            <strong>{{asse.color}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Màu nội thất: </span>
                                            <strong>{{asse.interiorColor}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Năm sản xuất: </span>
                                            <strong>{{asse.manufactureYear}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hộp số: </span>
                                            <strong>{{asse.gear}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Nhiên liệu: </span>
                                            <strong>{{asse.fuel}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Tiêu thụ: </span>
                                            <strong>{{asse.consume}} lít/100km</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số chỗ: </span>
                                            <strong>{{asse.seatsNumber}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Xuất xứ: </span>
                                            <strong>{{asse.origin}}</strong>
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div v-if="asse.category=='Đồ cổ'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.assets[0].amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                     
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.assets[0].category}}</strong>
                                        </span>
                                    </div>
                                     
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Loại đồ cổ: </span>
                                            <strong>{{asse.assets[0].type}}</strong>
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div v-if="asse.category=='Cây cảnh'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Thương hiệu: </span>
                                            <strong>{{asse.trademark}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.category}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Chủng loại: </span>
                                            <strong>{{asse.type}}</strong>
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div v-if="asse.category=='Nghệ thuật'">
                                <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Mã đấu giá: </span>
                                            <strong>{{auc.id}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Đấu giá tại: </span>
                                            <strong>{{auc.area}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Số lượng: </span>
                                            <strong>{{asse.amount}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Hạn tham dự: </span>
                                            <strong class="text-danger">{{auc.attendanceDeadline}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Bắt đầu đấu giá: </span>
                                            <strong class="text-danger">{{auc.startAt}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Kết thúc đấu giá: </span>
                                            <strong class="text-danger">{{auc.endAt}}</strong>
                                        </span>
                                    </div>
                                     
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Trạng thái: </span>
                                            <strong>Đã qua sử dụng</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Danh mục: </span>
                                            <strong>{{asse.category}}</strong>
                                        </span>
                                    </div>
                                    <div class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <span class="mb-2 d-block">
                                            <span>Chủng loại: </span>
                                            <strong>{{asse.type}}</strong>
                                        </span>
                                    </div>
                                     
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
                                <div v-if="asse.category=='Bất động sản'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Địa chỉ: {{asse.area}}</li>
                                        <li>Diện tích: {{asse.acreage}} m2</li>
                                        <li>Số phòng ngủ: {{asse.bedroomsNumber}} phòng</li>
                                        <li>Số nhà vệ sinh: {{asse.toiletsNumber}} phòng</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
                                </div>
                                <div v-if="asse.category=='Xe hơi'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Màu xe: {{asse.color}}</li>
                                        <li>Màu nội thất: {{asse.interiorColor}}</li>
                                        <li>Năm sản xuất: {{asse.manufactureYear}}</li>
                                        <li>Hộp số: {{asse.gear}}</li>
                                        <li>Nhiên liệu: {{asse.fuel}}</li>
                                        <li>Tiêu thụ: {{asse.consume}} lít/100km</li>
                                        <li>Số chỗ: {{asse.seatsNumber}}</li>
                                        <li>Xuất xứ: {{asse.origin}}</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
                                </div>
                                <div v-if="asse.category=='Đá quý'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Màu đá quý: {{asse.color}}</li>
                                        <li>Loại đá quý: {{asse.type}}</li>
                                        <li>Độ sáng đá quý: {{asse.brightness}}</li>
                                        <li>Trọng lượng đá quý: {{asse.weight}}</li>
                                        <li>Hình dạng đá quý: {{asse.shape}}</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
                                </div>
                                <div v-if="asse.category=='Sim số'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Loại sim: {{asse.type}}</li>
                                        <li>Nhà mạng: {{asse.homeNetwork}}</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
                                </div>
                                <div v-if="asse.category=='Cây cảnh'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Loại cây: {{asse.type}}</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
                                </div>
                                <div v-if="asse.category=='Đồ cổ'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Loại Đồ cổ: {{asse.type}}</li>
                                        <li>Tuổi đời đồ cổ: {{asse.yearOld}}</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
                                </div>
                                <div v-if="asse.category=='Nghệ thuật'">
                                    <ul>
                                        <li>Sản phẩm: {{asse.name}}</li>
                                        <li>Loại: {{asse.type}}</li>
                                    </ul>
                                    <p>{{asse.description}}</p>
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
                                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                                        {{Search.mobile}}
                                                </span>
                                                <span class="d-block">
                                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                                        {{Search.email}}
                                                </span>
                                                <span class="d-block">
                                                    <i class="fa fa-share" aria-hidden="true"></i>
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
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    var asset = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset'
        ).then((response) => { this.asset=response.data,
        this.asset2 = response.data.slice(0, this.perPage-1), 
          this.totalPage = Math.ceil(response.data.length / this.perPage)});
    console.log(asset);
    return {
      initPrice: '',
      close2:'true',
      currentPrice:'',
      images:'',
      category:'',
      tags:'',
      asset2:[],
      seller:'',
      actions:'',
      hihi:true,
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      sessionId:'',
      searchCheck: 1,
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      bidPrice: '',
      finalPrice:'',
      status:'',
      startAt:'',
      creaded:'',
      shape:'',
      weight:'',
      brightness:'',
      toiletsNumber:'',
      bedroomsNumber:'',
      asset:[],
      province:'',
      confirm:'', 
      id: '',
      showInBaner:'',
      attendanceDeadline:'',
      created:'',
      name: '',
      acreage:'',
      image:[],
      mobile:'',
      hinh:'true',
      info:'',
      area:'',
      auction: [],
      add:true,
      endAt:'',
      homeNetwork:'',
      note:'',
      direction:'',
      save:true,
      trademark:'',
      close1:true,
      assest:'',
      yearOld:'',
      Search:'',
      amount:'',
      totalPage:0,
      currentPage : 1,
      perPage : 10
    };
  },
  components: {
    // Login
  },
  methods: {
    clickUpdate1:async function(){
      this.axios.get(this.url+'/asset'
       ).then((response) => { this.asset=response.data})
       
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    onclick(page){
      console.log(page);
      this.asset2 = this.asset.slice((page-1)*this.perPage,page*this.perPage-1)
    },
    // clickSearch1: async function(){
    //   await this.axios.get(this.url+'/asset/id/'+this.id).then((response) => this.userSearch = response);
    //   console.log(this.userSearch.data.name);
    //   this.searchCheck=2;
    // },
    // clickSearch: async function(){
    //   await this.axios.get(this.url+'/asset/byCategory/'+this.category).then((response) => this.userSearch = response);
    //   this.searchCate=this.userSearch;
    //   this.searchCheck=3;
    //   console.log(this.userSearch.data);
    // }
    // clickConfirm(id){
    //   this.axios.post(this.url+'/asset/updateStatus/'+id+"?status="+this.status,{"status":this.status},{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
    // clickdelete1(id){
    //   this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then(() => {
    //         this.clickUpdate1();
    //       });
    // },
    clickSearch2(id){
      this.axios.get(this.url+'/asset/id/'+id)
      .then((response) => { if(response.data){ this.image=(response.data.assets[0].images.split(',')), this.Search=response.data, this.auc=response.data.auctions[0], this.asse=response.data.assets[0]
      }});
        console.log(this.auc);
    },
    clickconfirm(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=Valid",{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
      console.log(this.hihi);
    },
    clickconfirmn(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=Invalid",{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
      console.log(this.hihi);
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
    },
  }
</script>
<style>

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
.pagination li a {
  margin-top: 2px;
}
.pagination li.active {
  background-color: #4CAF50;
  color: white;
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
#right{
  margin-top:-137px;
}
#innit{
  margin-top: 180px;
}
</style>
