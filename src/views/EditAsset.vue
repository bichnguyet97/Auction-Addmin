<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div v-if="hinh" class="col-12 col-xl-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">
                    <div class="card-body p-3 rounded-0 border-0">
                        <div class="card-text pt-1">
                            <div v-for="asset in asset" v-bind:key="asset.id" class="row">
                                <div class="col-12 col-xl-3 col-lg-3 col-md-4 border-top">
                                    <div class="user-avatar mb-3 text-center">
                                      <img @click="hinh=false,clickSearch2(asset.id)" class="w-100" :src="asset.images" alt="">
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
                                                <span class="f-13 mr-1 d-block mb-1">Giá niêm yết: {{asset.initPrice}}</span>
                                                <!-- <span class="f-13 mr-1 d-block mb-1">Giá hiện tại: {{asset.currentPrice}}</span> -->
                                                <span class="f-13 mr-1 d-block mb-1">Ngày đăng: {{asset.created}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Ngày cập nhật: {{asset.updated}}</span>
                                                <span class="f-13 mr-1 d-block mb-1">Thông tin của tài sản: {{asset.description}}</span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div @click="hinh=false,clickSearch2(asset.id)">
                                <div id="edit" class="col-12 col-xl-5 col-lg-5">
                                    <div class="text-right bid-pri-box">
                                        <div class="link-box">
                                            <a class="btn btn-primary btn-sm text-white">
                                                <i class="las la-edit"></i>
                                                Sửa tài sản
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!-- <div class="col12 col-xl-11 col-lg-5" id="right">
                                  <div class="text-right bid-pri-box">
                                    <div class="pri-bid mb-3">
                                      <span class="f-13 mr-1 d-block mb-1">Giá hiện tại:</span>
                                      <strong class="text-danger font-weight-800 d-block lh-1 f-17">{{asset.currentPrice}} VNDT</strong>
                                    </div>
                                    <div class="link-box">
                                      <span>
                                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                      </span>
                                      <b-button v-b-modal.modalPopover style="margin-top:5px;" size="sm" v-on:click="clickconfirm(asset.id)" variant="primary">Xác nhận</b-button>
                                    </div>
                                  </div>
                                </div> -->
                            </div>
                            <b-modal id="modalPopover" title="Thông báo" ok-only>
                              <p>
                              Bạn đã xác nhận tài sản thành công !
                              </p>
                          </b-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <!-- <div class="row">
            <div class="col-12 col-xl-3 col-lg-3 col-md-4">
                <div class="user-avatar mb-3 text-center">
                    <img class="w-100" :src="Search.assets[0].images" alt="">
                </div>
            </div>
            </div>
            <div class="col-12 col-xl-9 col-lg-9 col-md-8">
            <div class="row">
                <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="col-form-label pb-1 pt-0 font-weight-600">
                    Tên tài sản<span class="text-danger">*</span>
                    </label>
                    <input v-model="name" type="" class="form-control form-control-user fs-090" :placeholder="Search.name" maxlength="20">
                </div>
                </div>
                <div class="col-12 col-md-6">
                <div class="form-group">
                    <label class="col-form-label pb-1 pt-0 font-weight-600">
                    Ảnh<span class="text-danger">*</span>
                    </label>
                    <input v-model="images" type="" class="form-control form-control-user fs-090" :placeholder="Search.images" maxlength="20">
                </div>
                <div class="form-group">
                    <label class="col-form-label pb-1 pt-0 font-weight-600">
                    Giá<span class="text-danger">*</span>
                    </label>
                    <input v-model="initPrice" type="" class="form-control form-control-user fs-090" :placeholder="Search.initPrice" maxlength="20">
                </div>
                </div>
                <button id="buttontt" v-b-modal.modalPopover class="btn btn-primary mb-2" @click="clickEdit(Search.id)">Cập nhật tài sản</button>
                <b-modal id="modalPopover" title="Thông báo" ok-only>
                <p>
                Cập nhật tài khoản thành công !
                </p>
                </b-modal>
            </div>
            </div> -->
            <div class="col-12 col-lg-12">
            <div class="edit-profile">
                <div class="card border-0 rounded-0 shadow-sm">

                    <div class="card-body p-3 rounded-0 border-0">

                        <div class="card-text pt-1">
                            <div class="row justify-content-center">

                                <div class="col-12 col-xl-9 col-lg-10 col-md-12">

                                    <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3">
                                        Thông tin chung
                                    </h3>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Ảnh đại diện<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <div class="user-avatar mb-3 mb-sm-0 text-center">
                                                    <img :src="tespicture" class="edit-avatar" style="max-width:280px; width:100%;" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click vào đây để thay avatar">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5">
                                                <p class="pt-2 f-13">Nhấp chuột vào ảnh để chọn hoặc thay đổi ảnh đại diện. Ảnh đại diện phải là: <span class="font-weight-bold">jpg, png, gif</span> dung lượng tối đa <span class="font-weight-bold">500Kb</span>. Kích thước tối đa <span class="font-weight-bold">300px</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Mã tài sản<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <input type="text" class="form-control form-control-user fs-090" maxlength="20">
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Tên tài sản<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input v-model="testName" type="text" class="form-control form-control-user fs-090" maxlength="200" value="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Nhập số lượng<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input v-model="tesamount" type="text" class="form-control form-control-user fs-090" maxlength="200" value="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Nhập giá bán<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input v-model="testinitPrice" type="text" class="form-control form-control-user fs-090" value="0">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Danh mục đấu giá<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <select v-model="testcategory" class="form-control form-control-user fs-090">
                                                    <option disable value="">Chọn</option>
                                                    <option>Bất động sản</option>
                                                    <option>Xe hơi</option>
                                                    <option>Đồ cổ</option>
                                                    <option>Cây cảnh</option>
                                                    <option>Sim số</option>
                                                    <option>Đá quý</option>
                                                    <option>Nghệ thuật</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Người bán<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select class="form-control select-default selectpickernone">
                                                    <option value="0">Chọn người bán</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Nguyễn Văn Hưng</option>
                                                    <option value="3">Nguyễn Tuấn Ngọc</option>
                                                    <option value="4">Hoàng Anh Mạnh</option>
                                                    <option value="5">Quách Tuấn Du</option>
                                                    <option value="6">Hoàng Ngọc Linh</option>
                                                    <option value="7">Trương Vĩnh Kiệt</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> -->

                                    <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
                                        Thư viện ảnh
                                    </h3>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="list-photo-pro mini-col">
                                                <!--Chưa có ảnh-->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
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
                                                    Thêm
                                                </button>
                                            </div>
                                        </div>
                                        <div id="topimage" class="user-avatar mb-3 text-center">
                                            <img id="sizeimage" :src="tespicture" alt="">
                                        </div>
                                        <small id="emailHelp" class="form-text text-muted">Chọn một hoặc nhiều ảnh để thêm vào thư viện.</small>
                                    </div>

                                    <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
                                        Video gới thiệu
                                    </h3>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Giới thiệu tài sản</label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input type="text" class="form-control form-control-user fs-090" value="" maxlength="500">
                                                <small id="emailHelp" class="form-text text-muted">Link youtube video</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Cơ quan thẩm định </label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input type="text" class="form-control form-control-user fs-090" value="" maxlength="500">
                                                <small id="emailHelp" class="form-text text-muted">Link youtube video</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Chuyên gia đánh giá</label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input type="text" class="form-control form-control-user fs-090" value="" maxlength="500">
                                                <small id="emailHelp" class="form-text text-muted">Link youtube video</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-block d-md-flex align-items-center border-bottom mb-3 pb-2 mt-5 ">
                                        <h3 class="card-title f-17 font-weight-700 bd-highlight mb-3 mb-sm-0">
                                            Thuộc tính tài sản
                                        </h3>
                                        <!-- <div class="bd-highlight ml-auto">
                                            <select v-model="check" class="form-control select-default selectpickernone ">
                                                <option value="">Chọn loại tài sản</option>
                                                <option  value="1" selected="selected">Bất động sản</option>
                                                <option value="2">Xe hơi</option>
                                                <option value="3">Đá quý</option>
                                                <option value="4">Nghệ thuật</option>
                                                <option value="5">Đồ cổ</option>
                                                <option value="6">Cây cảnh</option>
                                                <option value="7">Sim số đẹp</option>
                                            </select>
                                        </div> -->
                                    </div>
                                    <div v-if="Search.assets[0].category=='Bất động sản'">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class=" col-form-label pb-1 pt-0 font-weight-600">Khu vực<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                <select v-model="testarea" class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn khu vực</option>
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
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Chủng loại</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="testtype" class="form-control select-default selectpickernone">
                                                    <option disable value="">Đất thổ cư, đất dự án</option>
                                                    <option>Căn hộ chung cư</option>
                                                    <option>Nhà riêng, nhà phố, biệt thự</option>
                                                    <option>Khu nghỉ dưỡng, trang trại</option>
                                                    <option>Nhà kho, nhà xưởng</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Diện tích</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <input v-model="testacreage" type="text" class="form-control form-control-user fs-090" value="0" maxlength="20">
                                                <small id="emailHelp" class="form-text text-muted">Đơn vị là m2</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Số phòng ngủ</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="testbedroomsNumber" class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn số phòng</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Số phòng vệ sinh</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="testtoiletsNumber" class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn số phòng</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Hướng</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="testdirection" class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn hướng</option>
                                                    <option>Đông</option>
                                                    <option>Tây</option>
                                                    <option>Nam</option>
                                                    <option>Bắc</option>
                                                    <option>Đông-Bắc</option>
                                                    <option>Tây-Bắc</option>
                                                    <option>Tây-Nam</option>
                                                    <option>Đông-Nam</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Thương hiệu</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="testtrademark" class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn thương hiệu</option>
                                                    <option>Vin</option>
                                                    <option>Green city</option>
                                                    <option>Vin ocean park</option>
                                                    <option>Time city</option>
                                                    <option>Roy city</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    </div >
                                    <div v-if="Search.assets[0].category=='Xe hơi'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu xe<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh nước biển</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu nâu đen</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Màu nội thất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesinteriorColor" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Năm sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesmanufactureYear" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Hộp số<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tesgear" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn hộp số</option>
                                                        <option>Hộp số sàn/ số tay</option>
                                                        <option>Hộp số tự động</option>
                                                        <option>Hộp số tự động vô cấp CVT</option>
                                                        <option>Hộp số ly hợp kép</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Nhiên liệu<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tesfuel" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn nhiên liệu</option>
                                                        <option>Khí hóa lỏng (LPG)</option>
                                                        <option>Hydrogen</option>
                                                        <option>Xăng sinh học Bioethanol</option>
                                                        <option>Khí thiên nhiên nén CNG</option>
                                                        <option>Dầu sinh học Biodiesel</option>
                                                        <option>Propane (C3H8)</option>
                                                        <option>Nước</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Tiêu thụ</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesconsume" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    <small id="emailHelp" class="form-text text-muted">Tiêu thụ bao nhiêu lít xăng/100km</small>
                                                </div>
                                        
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Hãng xe<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="testtrademark" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn hãng xe</option>
                                                        <option>Abarth</option>
                                                        <option> Zenos</option>
                                                        <option>Alfa Romeo</option>
                                                        <option>Volvo</option>
                                                        <option>Aston Martin</option>
                                                        <option>Volkswagen</option>
                                                        <option>Audi</option>
                                                        <option>Vauxhall</option>
                                                        <option>Bentley</option>
                                                        <option>Toyota</option>
                                                        <option>BMW</option>
                                                        <option>Tesla</option>
                                                        <option>Bugatti</option>
                                                        <option>Suzuki</option>
                                                        <option>Cadillac</option>
                                                        <option>Subaru</option>
                                                        <option>Caterham</option>
                                                        <option>SsangYong</option>
                                                        <option>Chevrolet</option>
                                                        <option>Smart</option>
                                                        <option>Chrysler</option>
                                                        <option>Skoda</option>
                                                        <option>Citroen</option>
                                                        <option>Vinfast</option>
                                                        <option>Dacia</option>
                                                        <option>Seat</option>
                                                        <option>Ferrari</option>
                                                        <option>Saab</option>
                                                        <option>Fiat</option>
                                                        <option>Rolls-Royce</option>
                                                        <option>Ford</option>
                                                        <option>Renault</option>
                                                        <option>Honda</option>
                                                        <option>Radical</option>
                                                        <option>Hyundai</option>
                                                        <option>Porsche</option>
                                                        <option>Infiniti</option>
                                                        <option>Peugeot</option>
                                                        <option>Jaguar</option>
                                                        <option>Pagani</option>
                                                        <option>Jeep</option>
                                                        <option>Noble</option>
                                                        <option>Kia</option>
                                                        <option>Nissan</option>
                                                        <option>Lamborghini</option>
                                                        <option>Morgan</option>
                                                        <option>Land Rover</option>
                                                        <option>Mitsubishi</option>
                                                        <option>Lexus</option>
                                                        <option>Mini</option>
                                                        <option>Lotus</option>
                                                        <option>MG</option>
                                                        <option>Maserati</option>
                                                        <option>Mercedes-Benz</option>
                                                        <option>Mazda</option>
                                                        <option>Mclaren</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Số chỗ<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tesseatsNumber" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn số chỗ</option>
                                                        <option>2</option>
                                                        <option>4</option>
                                                        <option>6</option>
                                                        <option>14</option>
                                                        <option>24</option> 
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Xuất xứ<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tesorigin" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn xuất xứ</option>
                                                        <option>Hàn quốc</option>
                                                        <option>Nhật bản</option>
                                                        <option>Trung quốc</option>
                                                        <option>Mỹ</option>
                                                        <option>Việt nam</option>
                                                        <option>Đức</option>
                                                        <option>Thuỵ điển</option>
                                                        <option>Úc</option>
                                                        <option>Ấn độ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="Search.assets[0].category=='Sim số'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Nhà mạng<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="teshomeNetwork" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn nhà mạng</option>
                                                        <option>Viettel</option>
                                                        <option>MobiFone</option>
                                                        <option>Vietnamobile</option>
                                                        <option>Vinaphone</option>
                                                        <option>Gmobile(Beeline)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Loại sim</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtype" type="text" class="form-control form-control-user fs-090" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="Search.assets[0].category=='Đá quý'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh nước biển</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu nâu đen</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Loại đá quý</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtype" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hình dạng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesshape" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Trọng lượng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesweight" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Độ sáng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesbrightness" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="Search.assets[0].category=='Nghệ thuật'">
                                        helo
                                    </div>
                                    <div v-if="Search.assets[0].category=='Đồ cổ'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Loại đồ cổ</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtype" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Tuổi đời</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesyearOld" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="Search.assets[0].category=='Cây cảnh'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Loại cây</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtype" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Kiểu dáng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model=""  type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Chiều cao của cây</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesheight" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Đường kính gốc cây</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="tesstumpDiameter" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
                                        Chi tiết tài sản
                                    </h3>
                                    <div class="form-group">
                                        <textarea v-model="testdescription" class="form-control" rows="8"></textarea>
                                        <!-- <small id="emailHelp" class="form-text text-muted">Lập trình viên tự chọn TextEditor phù hợp vào ô trên</small> -->
                                    </div>
                                    <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
                                        Thông tin khác
                                    </h3>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Tình trạng</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="testcurrentStatus" class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn tình trạng</option>
                                                    <option>Cũ</option>
                                                    <option>Mới</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Trạng thái</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select class="form-control select-default selectpickernone">
                                                    <option>Đang hoạt động</option>
                                                    <option>Đã vô hiệu</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Thời gian đăng</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <div class="input-group mb-3">
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Giờ</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                        <option>11</option>
                                                        <option>12</option>
                                                        <option>13</option>
                                                        <option>14</option>
                                                        <option>15</option>
                                                        <option>16</option>
                                                        <option>17</option>
                                                        <option>18</option>
                                                        <option>19</option>
                                                        <option>20</option>
                                                        <option>21</option>
                                                        <option>22</option>
                                                        <option>23</option>
                                                        <option>24</option>
                                                    </select>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text f-13 border-right-0">:</span>
                                                    </div>
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Phút</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                        <option>11</option>
                                                        <option>12</option>
                                                        <option>13</option>
                                                        <option>14</option>
                                                        <option>15</option>
                                                        <option>16</option>
                                                        <option>17</option>
                                                        <option>18</option>
                                                        <option>19</option>
                                                        <option>20</option>
                                                        <option>21</option>
                                                        <option>22</option>
                                                        <option>23</option>
                                                        <option>24</option>
                                                        <option>25</option>
                                                        <option>26</option>
                                                        <option>27</option>
                                                        <option>28</option>
                                                        <option>29</option>
                                                        <option>30</option>
                                                        <option>31</option>
                                                        <option>32</option>
                                                        <option>33</option>
                                                        <option>34</option>
                                                        <option>35</option>
                                                        <option>36</option>
                                                        <option>37</option>
                                                        <option>38</option>
                                                        <option>39</option>
                                                        <option>40</option>
                                                        <option>41</option>
                                                        <option>42</option>
                                                        <option>43</option>
                                                        <option>44</option>
                                                        <option>45</option>
                                                        <option>46</option>
                                                        <option>47</option>
                                                        <option>48</option>
                                                        <option>49</option>
                                                        <option>50</option>
                                                        <option>51</option>
                                                        <option>52</option>
                                                        <option>53</option>
                                                        <option>54</option>
                                                        <option>55</option>
                                                        <option>56</option>
                                                        <option>57</option>
                                                        <option>58</option>
                                                        <option>59</option>
                                                        <option>60</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5">
                                                <div class="input-group dateranger-one mb-3 mb-sm-3">
                                                    <input type="text" class="form-control date-use bg-white" value="12-11-1986" readonly="">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text bg-white pl-2 pr-2">
                                                            <i class="las la-calendar"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <hr class="pt-3 mb-1" />
                                    <div class="clearfix">
                                        <button v-b-modal.modalPopover @click="clickEdit(Search.assets[0].id)" class="btn btn-primary mb-2">
                                            <i class="las la-save"></i>
                                            Sửa tài sản
                                        </button>
                                        <em class="text-danger f-13 d-block d-sm-inline float-left float-sm-right">* là trường bắt buộc nhập dữ liệu</em>
                                    </div>
                                    <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <p>
                                            Sửa tài sản thành công !
                                            </p>
                                    </b-modal>
                                </div>
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
import Firebase from 'firebase'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueClipboard)
  export default {
  data() {
    var asset = [];
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset'
        ).then((response) => { this.asset=response.data});
    console.log(asset);
    return {
      initPrice: '',
      close2:'true',
      currentPrice:'',
      finalPrice:'',
      images:'',
      image:'',
      gear:'',
      amount:'',
      description:'',
      hinh:true,
      category:'',
      creaded:'',
      stumpDiameter:'',
      tags:'',
      consume:'',
      seller:'',
      homeNetwork:'',
      interiorColor:'',
      actions:'',
      id: '',
      trademark:'',
      toiletsNumber:'',
      name: '',
      shape:'',
      weight:'',
      brightness:'',
      manufactureYear:'',
      Search:'',
      check:1,
      fuel:'',
      yearOld:'',
      seatsNumber:'',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      info:'',
      color:'',
      status:'',
      type:'',
      area:'',
      origin:'',
      asset: [],
      add:true,
      sessionId:'',
      save:true,
      testinitPrice:'',
      tespicture:'',
      testName:'',
      assets:[],
      testcategory:'',
      currentStatus:'',
      searchCheck: 1,
      direction:'',
      acreage:'',
      tesamount:'',
      picture:null,
      bedroomsNumber:'',
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:''
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
    clickSearch2(id){
      this.axios.get(this.url+'/asset/id/'+id)
      .then((response) => { this.Search=response.data, this.testName = response.data.assets[0].name, this.testinitPrice= response.data.assets[0].initPrice, this.testcategory= response.data.assets[0].category,this.testtype= response.data.assets[0].type,this.testtoiletsNumber= response.data.assets[0].toiletsNumber,
      this.testdescription = response.data.assets[0].description, this.testcurrentStatus = response.data.assets[0].currentStatus, this.tespicture = response.data.assets[0].images.split(','),this.testtrademark= response.data.assets[0].trademark,this.tescolor= response.data.assets[0].color, this.tesinteriorColor= response.data.assets[0].interiorColor,
      this.testdirection = response.data.assets[0].direction, this.testarea = response.data.assets[0].area, this.testacreage = response.data.assets[0].acreage, this.testbedroomsNumber = response.data.assets[0].bedroomsNumber,this.tesmanufactureYear= response.data.assets[0].manufactureYear,
      this.tesgear= response.data.assets[0].gear,this.tesfuel= response.data.assets[0].fuel, this.tesconsume= response.data.assets[0].tesconsume,this.testpicture= response.data.assets[0].images,this.tesheight= response.data.assets[0].height,
      this.tesseatsNumber= response.data.assets[0].seatsNumber, this.tesorigin= response.data.assets[0].origin, this.teshomeNetwork= response.data.assets[0].homeNetwork,this.tesyearOld= response.data.assets[0].yearOld,
      this.tesshape=response.data.assets[0].shape,this.tesweight= response.data.assets[0].weight, this.tesbrightness= response.data.assets[0].brightness, this.tesamount= response.data.assets[0].amount,this.tesstumpDiameter= response.data.assets[0].stumpDiameter
      });
        console.log(this.testdescription);
    },
    clickEdit(id){
      this.axios.put(this.url+'/asset/update/'+id ,{ "name": this.testName, "initPrice": this.testinitPrice,"area": this.testarea,"type": this.testtype,"toiletsNumber": this.testtoiletsNumber,"color":this.tescolor,"interiorColor": this.tesinteriorColor,"manufactureYear":this.tesmanufactureYear,
      "category": this.testcategory,"description":this.testdescription, "currentStatus": this.testcurrentStatus, "trademark": this.testtrademark, "amount": this.tesamount,"stumpDiameter": this.tesstumpDiameter,"height": this.tesheight,
      "direction": this.testdirection,"acreage":this.testacreage, "bedroomsNumber": this.testbedroomsNumber, "gear": this.tesgear, "fuel": this.tesfuel, "yearOld": this.tesyearold,
      "consume": this.tesconsume, "seatsNumber": this.tesseatsNumber, "origin": this.tesorigin, "homeNetwork": this.teshomeNetwork,"images": this.testpicture,
      "shape": this.tesshape,"weight": this.tesweight, "birghtness":this.tesbirghtness
      
      }, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => console.log(response));
    },
    previewImage(event){
            // this.uploadValue=0;
            
                this.testpicture=null;
                this.imageData =event.target.files[0];
                this.uploadValue=0;
            
        },
    onUpload(){
            // var today = new Date();
            // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            // dateTime = date+' '+time;
             
                this.picture=null;
                 
                const storageRef=Firebase.storage().ref(`${this.imageData.name}`+`${this.imageData.lastModified}`).put(this.imageData);
                storageRef.on(`state_changed`,snapshot=>{
                    this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    }, error =>{console.log(error.message)},
                    ()=>{this.uploadValue=100;
                
                    storageRef.snapshot.ref.getDownloadURL().then((url1)=>{
                        this.testpicture=url1;
                        console.log(this.testpicture);
                    });

                    }
                    );
            
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
    clickconfirm(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=Đã xác nhận",{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
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
#edit{
    margin-left: 880px;
    margin-top: -144px;
}
#sizeimage{
    height: 125px;
    width: 201px;
}
#topimage{
    margin-top:10px;
}
</style>
