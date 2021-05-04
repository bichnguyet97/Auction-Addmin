<template>
    <div>
        <base-header type="gradient-info" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div v-if="win" class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
              <div>
                <div class="mt-3">
                  <b-button-group>
                    <b-button  @click="check=1" variant="info">Danh sách tài sản còn hạn đấu giá</b-button>
                    <b-button @click="check=2" variant="warning">Danh sách tài sản đã hết hạn đấu giá</b-button>
                    <!-- <b-button  @click="check=2" variant="info">Danh sách tài sản còn hạn đấu giá</b-button> -->
                    <b-button  @click="check=3" variant="success">Danh sách tài đã kết thúc đấu giá</b-button>
                    <!-- <b-button variant="warning">Warning</b-button> -->
                  </b-button-group>
                  <!-- <div class="card-body">
                    <div class="vue-tabs">
                      <div class="nav-tabs-navigation">
                        <div class="nav-tabs-wrapper">
                          <ul class="nav nav-tabs  ">
                            <li class="tab">
                              <a href="" class="tabs__link">
                                <span class="title title_center">info</span>
                              </a>
                            </li>
                            <li class="tab">
                              <a href="" class="tabs__link">
                                <span class="title title_center">info</span>
                              </a>
                            </li>
                            <li class="tab">
                              <a href="" class="tabs__link">
                                <span class="title title_center">info</span>
                              </a>
                            </li>
                            <li class="tab">
                              <a href="" class="tabs__link">
                                <span class="title title_center">info</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
                <div v-if="check==2" class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auctiontimeout in auctiontimeout" v-bind:key="auctiontimeout.id" class="card-text pt-1">
                            <div  class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img class="w-100" :src="auctiontimeout.asset.images" alt="">
                                  </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auctiontimeout.asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản: {{auctiontimeout.asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{auctiontimeout.asset.category}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá niêm yết:{{auction.initPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Ngày đăng:{{auction.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật:{{auction.updated}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{auctiontimeout.asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản: {{auctiontimeout.asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">
                                                  <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auctiontimeout.auction.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{auctiontimeout.auction.startAt}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{auctiontimeout.auction.endAt}}</span>
                                                  <h3>Giá hiện tại: <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{formatPrice(auctiontimeout.asset.currentPrice)}} VNDT</strong></h3>
                                                  <b-button v-b-modal.modall style="margin-top:5px;" @click="clickConfirm2(auctiontimeout.auction.id)" size="sm" variant="info">Yêu cầu tham gia đấu giá</b-button>
                                                  <!-- <b-button style="margin-top:5px;" size="sm" @click="win=false,clickWin(auction.auction.id)" variant="danger">Thông tin người thắng</b-button> -->
                                                  <!-- <h3>Nhập lý do không xác nhận</h3>
                                                  <input v-model="note" class="mr-sm-2" id="note" name="note" type="text" value> -->
                                                  <!-- <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm1(auction.auction.id)" variant="danger">Không xác nhận</b-button> -->
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="active_center" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Trạng thái</h3>
                                  <b-button style="margin-top:5px;" size="sm" variant="success">{{auctiontimeout.auction.status}}</b-button>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar :src="auctiontimeout.user.avatar" size="6rem"></b-avatar>
                                    <div class="user-sum ml-3">
                                      <h5 class="f-15 mb-2 font-weight-600">{{auctiontimeout.user.name}}</h5>
                                      <p class="f-13 mb-0">
                                        <span class="d-block">
                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                          {{auctiontimeout.user.mobile}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                          {{auctiontimeout.user.email}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-share" aria-hidden="true"></i>
                                          {{auctiontimeout.user.province}}
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
                        <b-modal id="modall" title="Thông báo" ok-only>
                          <p>
                            Bạn đã gửi yêu cầu thành công !
                          </p>
                        </b-modal>
                    </div>
                </div>
                <div v-if="check==1" class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auction in auction" v-bind:key="auction.id" class="card-text pt-1">
                            <div v-if="Date.now() < Date.parse(auction.auction.endAt)" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img class="w-100" :src="auction.asset.images" alt="">
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
                                                  <h3>Giá hiện tại: <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{formatPrice(auction.asset.currentPrice)}} VNDT</strong></h3>
                                                  <!-- <b-button style="margin-top:5px;" size="sm" @click="win=false,clickWin(auction.auction.id)" variant="danger">Thông tin người thắng</b-button> -->
                                                  <!-- <h3>Nhập lý do không xác nhận</h3>
                                                  <input v-model="note" class="mr-sm-2" id="note" name="note" type="text" value> -->
                                                  <!-- <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm(auction.auction.id)" variant="danger">Kết thúc</b-button> -->
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="active_center" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Trạng thái</h3>
                                  <b-button style="margin-top:5px;" size="sm" variant="success">{{auction.auction.status}}</b-button>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar :src="auction.user.avatar" size="6rem"></b-avatar>
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
                <div v-if="check==3" class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auctions in auctions" v-bind:key="auctions.id" class="card-text pt-1">
                            <div v-if="Date.now() < Date.parse(auctions.auction.endAt)" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img class="w-100" :src="auctions.asset.images" alt="">
                                  </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auctions.asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản: {{auctions.asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{auctions.asset.category}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{auctions.asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản: {{auctions.asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">
                                                  <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auctions.auction.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{auctions.auction.startAt}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{auctions.auction.endAt}}</span>
                                                  <h3>Giá hiện tại: <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{formatPrice(auctions.asset.currentPrice)}} VNDT</strong></h3>
                                                  <div class="col-12 col-md-6">
                                                      <div class="form-group">
                                                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                              Nhập ID người thắng <span class="text-danger">*</span>
                                                          </label>
                                                          <input v-model="id1" type="" class="form-control form-control-user fs-090" placeholder="" maxlength="20">
                                                      </div>
                                                  </div>
                                                  <b-button style="margin-top:5px;" size="sm" @click="win=false,clickWin(auctions.auction.id)" variant="info">Thông tin người thắng</b-button>
                                                  <b-button v-b-modal.modal2 style="margin-top:5px;" size="sm" @click="clickpay(id1,payauction=auctions.auction.id)" variant="warning">Thanh toán</b-button>
                                                  <!-- <b-button v-b-modal.modal2 style="margin-top:5px;" size="sm" @click="clickConfirm1(auctions.auction.id)" variant="warning">Yêu cầu thanh toán</b-button> -->
                                                  <b-button v-b-modal.modal1 style="margin-top:5px;" size="sm" @click="clickConfirmn(auctions.auction.id)" variant="danger">Xác nhận thanh toán</b-button>
                                                  <!-- <h3>Nhập lý do không xác nhận</h3>
                                                  <input v-model="note" class="mr-sm-2" id="note" name="note" type="text" value> -->
                                                  <!-- <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm1(auction.auction.id)" variant="danger">Không xác nhận</b-button> -->
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="active_center" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Trạng thái</h3>
                                  <b-button style="margin-top:5px;" size="sm" variant="success">{{auctions.auction.status}}</b-button>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar :src="auctions.user.avatar" size="6rem"></b-avatar>
                                    <div class="user-sum ml-3">
                                      <h5 class="f-15 mb-2 font-weight-600">{{auctions.user.name}}</h5>
                                      <p class="f-13 mb-0">
                                        <span class="d-block">
                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                          {{auctions.user.mobile}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                          {{auctions.user.email}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-share" aria-hidden="true"></i>
                                          {{auctions.user.province}}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <b-modal id="modal1" title="Thông báo" ok-only>
                          <p>
                            Xác nhận thanh toán thành công !
                          </p>
                        </b-modal>
                        <b-modal id="modal2" title="Thông báo" ok-only>
                          <p>
                            Bạn đã gửi yêu cầu thanh toán thành công !
                          </p>
                        </b-modal>
                    </div>
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auctions in auctions" v-bind:key="auctions.id" class="card-text pt-1">
                            <div v-if="Date.now() > Date.parse(auctions.auction.endAt)" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img class="w-100" :src="auctions.asset.images" alt="">
                                  </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auctions.asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản: {{auctions.asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{auctions.asset.category}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{auctions.asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản: {{auctions.asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">
                                                  <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auctions.auction.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{auctions.auction.startAt}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{auctions.auction.endAt}}</span>
                                                  <h3>Giá hiện tại: <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{formatPrice(auctions.asset.currentPrice)}} VNDT</strong></h3>
                                                  <div class="col-12 col-md-6">
                                                      <div class="form-group">
                                                          <label class="col-form-label pb-1 pt-0 font-weight-600">
                                                              Nhập ID người thắng <span class="text-danger">*</span>
                                                          </label>
                                                          <input v-model="id1" type="" class="form-control form-control-user fs-090" placeholder="" maxlength="20">
                                                      </div>
                                                  </div>
                                                  <b-button style="margin-top:5px;" size="sm" @click="win=false,clickWin(auctions.auction.id)" variant="info">Thông tin người thắng</b-button>
                                                  <b-button v-b-modal.modal2 style="margin-top:5px;" size="sm" @click="clickpay(id1,payauction=auctions.auction.id)" variant="warning">Thanh toán</b-button>
                                                  <!-- <b-button v-b-modal.modal2 style="margin-top:5px;" size="sm" @click="clickConfirm1(auctions.auction.id)" variant="warning">Yêu cầu thanh toán</b-button> -->
                                                  <b-button v-b-modal.modal1 style="margin-top:5px;" size="sm" @click="clickConfirmn(auctions.auction.id)" variant="danger">Xác nhận thanh toán</b-button>
                                                  <!-- <h3>Nhập lý do không xác nhận</h3>
                                                  <input v-model="note" class="mr-sm-2" id="note" name="note" type="text" value> -->
                                                  <!-- <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickConfirm1(auction.auction.id)" variant="danger">Không xác nhận</b-button> -->
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="active_center" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Trạng thái</h3>
                                  <b-button style="margin-top:5px;" size="sm" variant="success">{{auctions.auction.status}}</b-button>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar :src="auctions.user.avatar" size="6rem"></b-avatar>
                                    <div class="user-sum ml-3">
                                      <h5 class="f-15 mb-2 font-weight-600">{{auctions.user.name}}</h5>
                                      <p class="f-13 mb-0">
                                        <span class="d-block">
                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                          {{auctions.user.mobile}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                          {{auctions.user.email}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-share" aria-hidden="true"></i>
                                          {{auctions.user.province}}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <b-modal id="modal1" title="Thông báo" ok-only>
                          <p>
                            Xác nhận thanh toán thành công !
                          </p>
                        </b-modal>
                        <b-modal id="modal2" title="Thông báo" ok-only>
                          <p>
                            Bạn đã gửi yêu cầu thanh toán thành công !
                          </p>
                        </b-modal>
                    </div>
                    <div class="card-body p-3 rounded-0 border-0">
                        <div v-for="auctionss in auctionss" v-bind:key="auctionss.id" class="card-text pt-1">
                            <div v-if="Date.now() > Date.parse(auctionss.auction.endAt)" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                  <div class="user-avatar mb-3 text-center">
                                    <img class="w-100" :src="auctionss.asset.images" alt="">
                                  </div>
                                </div>
                                <div class="col-12 col-lg-9 col-md-6 border-top">
                                    <div class="start-pro-info p-3 p-md-4 p-lg-3 h-100">
                                        <div class="row h-100 align-items-center">
                                            <div class="col-12 col-xl-7 col-lg-7">
                                              <h3 class="f-17 mb-2 font-weight-bold">Tên tài sản: {{auctionss.asset.name}}</h3>
                                              <div class="pri-bid mb-3 mb-sm-0">
                                                <span class="f-13 mr-1 d-block mb-1">Mã tài sản: {{auctionss.asset.id}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Loại: {{auctionss.asset.category}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày tạo tài sản: {{auctionss.asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật tài sản: {{auctionss.asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">
                                                  <h3 class="f-17 mb-2 font-weight-bold">Thông tin đấu giá</h3>
                                                  <span class="f-13 mr-1 d-block mb-1">Mã đấu giá: {{auctionss.auction.id}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian bắt đầu đấu giá: {{auctionss.auction.startAt}}</span>
                                                  <span class="f-13 mr-1 d-block mb-1">Thời gian kết thúc đấu giá: {{auctionss.auction.endAt}}</span>
                                                  <h3>Giá hiện tại: <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{formatPrice(auctionss.asset.currentPrice)}} VNDT</strong></h3>
                                                  <b-button style="margin-top:5px;" size="sm" @click="win=false,clickWin(auctionss.auction.id)" variant="info">Thông tin người thắng</b-button>
                                                </span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="active_center" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Trạng thái</h3>
                                  <b-button style="margin-top:5px;" size="sm" variant="success">{{auctionss.auction.status}}</b-button>
                                </div>
                                <div id="borde" class="seller-info pb-2">
                                  <h3 class="f-17 border-bottom pb-3">Thông tin đại lý</h3>
                                  <div class="d-flex align-items-center">
                                    <!-- <img style="width=100px;height=100px;" class="rounded-circle edit-avatar" src="" alt=""> -->
                                    <b-avatar :src="auctionss.user.avatar" size="6rem"></b-avatar>
                                    <div class="user-sum ml-3">
                                      <h5 class="f-15 mb-2 font-weight-600">{{auctionss.user.name}}</h5>
                                      <p class="f-13 mb-0">
                                        <span class="d-block">
                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                          {{auctionss.user.mobile}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                          {{auctionss.user.email}}
                                        </span>
                                        <span class="d-block">
                                          <i class="fa fa-share" aria-hidden="true"></i>
                                          {{auctionss.user.province}}
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
          <div class="card border-0 rounded-0 shadow-sm">
            <div class="card-body p-3 rounded-0 border-0">
              <div class="card-text pt-1">
                <div class="row">
                  <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                    <div class="user-sum ml-7">
                      <b-avatar style="width:128px; height:128px" :src="Search.avatar"></b-avatar>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-user" aria-hidden="true"></i>: {{Search.id}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-user" aria-hidden="true"></i>: {{Search.name}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-envelope" aria-hidden="true"></i>: {{Search.email}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-phone" aria-hidden="true"></i>: {{Search.mobile}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-home" aria-hidden="true"></i>: {{Search.province}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-transgender" aria-hidden="true"></i>: {{Search.gender}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-users" aria-hidden="true"></i>: {{Search.group}}</h5>
                    </div>
                    <div class="user-sum ml-7">
                      <h5><i class="fa fa-birthday-cake" aria-hidden="true"></i>: {{Search.dateofbirth}}</h5>
                    </div>
                    <div class="col-12 col-xl-9 col-lg-9 col-md-8">
                    <!-- <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <b-button @click="clickConfirm1(auctions.auction.id)" id="confirm" variant="success">Yêu cầu thanh toán</b-button>
                        </div>
                      </div>
                      <b-modal id="modalPopover" title="Thông báo" ok-only>
                        <p>
                        Tạo tài khoản thành công !
                        </p>
                      </b-modal>
                    </div> -->
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
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
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/Active',{
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then((response) =>  { this.auction=response.data});
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/Timeout',{
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then((response) =>  { this.auctiontimeout=response.data});
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/Ended',{
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then((response) =>  { this.auctions=response.data});
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/auction/auction_status/Đã thanh toán',{
    headers: {
      Authorization: this.getCookie('AC-ACCESS-KEY') }
      }).then((response) =>  { this.auctionss=response.data});
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
      confirm:'',
      auctions:[],
      auctiontimeout:[],
      mobile:'',
      province:'',
      id: '',
      created:'',
      gender:'',
      name: '',
      email:'',
      updated:'',
      avatar:'',
      info:'',
      hii:'ok',
      group:'',
      dateofbirth:'',
      win:true,
      auction: [],
      add:true,
      Search:[],
      id1:'',
      id2:'',
      endAt:'',
      note:'',
      save:true,
      close1:true,
      assest:'',
      check:1,
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
      this.axios.post(this.url+'/auction/update/'+id+"?status=Ended", {"status":this.status}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/Active')
        .then(response => this.auction=response.data);
      });
    },
    clickConfirm1(id){
      this.axios.post(this.url+'/auction/update/'+id+"?note=Chúc mừng bạn đã là người thắng trong cuộc đấu giá, vui lòng thanh toán để được nhận tài sản đã mua!"+"&status=Ended", {"status":this.status, "note":this.note}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auctions=response.data);
      });
    },
    clickpay(id1,id2){
      this.axios.get(this.url+'/auction/pay/dl/'+id1+"/"+id2 , {"id1":this.payid, "id2":this.payauction}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auctions=response.data);
      });
      console.log(this.hii);
    },
    clickConfirmn(id){
      this.axios.post(this.url+'/auction/update/'+id+"?note=Đã thanh toán thành công!"+"&status=Đã thanh toán", {"status":this.status, "note":this.note}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auctions=response.data);
      });
    },
    clickConfirm2(id){
      this.axios.post(this.url+'/auction/update/'+id+"?note=Bạn có muốn tiếp tục đấu giá vào lần tiếp theo vui lòng đăng ký lại!"+"&status=timeout", {"status":this.status, "note":this.note}, {
        headers: {
          Authorization: this.getCookie('AC-ACCESS-KEY')
        }
      }).then(() => {
        this.axios.get(this.url+'/auction/auction_status/new')
        .then(response => this.auctions=response.data);
      });
    },
    clickSearch2(id){
      this.axios.get(this.url+'/user/'+id)
      .then((response) => { this.Search=response.data});
        console.log(this.Search);
      this.axios.get(this.url+'/user',{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => { this.users=response.data});
    },
    clickWin(id){
      this.axios.get(this.url+'/auction/winner/'+id)
      .then((response) => { this.Search=response.data});
        console.log(this.Search);
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
  margin-left: 938px;
  margin-top: -201px;
}
#active_center{
  margin-left: 940px;
  margin-top: -337px;
}
#confirm{
  width: 194px;
  height: 39px;
  margin-left: 60px;
}
</style>
