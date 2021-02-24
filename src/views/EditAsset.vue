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
                                                        <img src="img/no-image.jpg" class="edit-avatar" style="max-width:280px; width:100%;" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click vào đây để thay avatar">
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
                                                    <input type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Danh mục đấu giá<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select class="form-control select-default selectpickernone" multiple data-actions-box="false" data-none-selected-text="Chưa chọn danh mục">
                                                        <option value="1">Bất động sản</option>
                                                        <option value="2">Xe hơi</option>
                                                        <option value="4">Đồ cổ</option>
                                                        <option value="5">Cây cảnh</option>
                                                        <option value="5">Sim số</option>
                                                        <option value="6">Đá quý</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
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
                                        </div>

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
                                                    <input type="file" class="custom-file-input rounded-0" id="inputGroupFile02">
                                                    <label class="custom-file-label rounded-0" for="" aria-describedby="inputGroupFileAddon02">chọn ảnh</label>
                                                </div>
                                                <div class="input-group-append">
                                                    <button class="btn btn-warning">
                                                        <i class="las la-plus-circle"></i>
                                                        Thêm
                                                    </button>
                                                </div>
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
                                            <div class="bd-highlight ml-auto">
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
                                            </div>
                                        </div>
                                        <div v-if="check==1">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Khu vực<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select class="form-control select-default selectpickernone">
                                                        <option selected="selected" value="0">Chọn tỉnh thành</option>
                                                        <option value="24">Hà Nội</option>
                                                        <option value="30">Hồ Chí Minh</option>
                                                        <option value="15">Đà Nẵng</option>
                                                        <option value="28">Hải Phòng</option>
                                                        <option value="14">Cần Thơ</option>
                                                        <option value="58">Thừa Thiên - Huế</option>
                                                        <option value="50">Quảng Ninh</option>
                                                        <option value="1">An Giang</option>
                                                        <option value="2">Bà Rịa-Vũng Tàu</option>
                                                        <option value="5">Bắc Giang</option>
                                                        <option value="4">Bắc Kạn</option>
                                                        <option value="3">Bạc Liêu</option>
                                                        <option value="6">Bắc Ninh</option>
                                                        <option value="7">Bến Tre</option>
                                                        <option value="8">Bình Dương</option>
                                                        <option value="9">Bình Định</option>
                                                        <option value="10">Bình Phước</option>
                                                        <option value="11">Bình Thuận</option>
                                                        <option value="12">Cà Mau</option>
                                                        <option value="13">Cao Bằng</option>
                                                        <option value="16">Đắk Lắk</option>
                                                        <option value="17">Đắk Nông</option>
                                                        <option value="18">Điện Biên</option>
                                                        <option value="19">Đồng Nai</option>
                                                        <option value="20">Đồng Tháp</option>
                                                        <option value="21">Gia Lai</option>
                                                        <option value="22">Hà Giang</option>
                                                        <option value="23">Hà Nam</option>
                                                        <option value="26">Hà Tĩnh</option>
                                                        <option value="27">Hải Dương</option>
                                                        <option value="31">Hậu Giang</option>
                                                        <option value="29">Hòa Bình</option>
                                                        <option value="32">Hưng Yên</option>
                                                        <option value="34">Kiên Giang</option>
                                                        <option value="35">Kon Tum</option>
                                                        <option value="33">Khánh Hòa</option>
                                                        <option value="36">Lai Châu</option>
                                                        <option value="38">Lạng Sơn</option>
                                                        <option value="37">Lào Cai</option>
                                                        <option value="39">Lâm Đồng</option>
                                                        <option value="40">Long An</option>
                                                        <option value="41">Nam Định</option>
                                                        <option value="43">Ninh Bình</option>
                                                        <option value="44">Ninh Thuận</option>
                                                        <option value="42">Nghệ An</option>
                                                        <option value="45">Phú Thọ</option>
                                                        <option value="46">Phú Yên</option>
                                                        <option value="47">Quảng Bình</option>
                                                        <option value="48">Quảng Nam</option>
                                                        <option value="49">Quảng Ngãi</option>
                                                        <option value="51">Quảng Trị</option>
                                                        <option value="52">Sóc Trăng</option>
                                                        <option value="53">Sơn La</option>
                                                        <option value="54">Tây Ninh</option>
                                                        <option value="59">Tiền Giang</option>
                                                        <option value="61">Tuyên Quang</option>
                                                        <option value="55">Thái Bình</option>
                                                        <option value="56">Thái Nguyên</option>
                                                        <option value="57">Thanh Hóa</option>
                                                        <option value="60">Trà Vinh</option>
                                                        <option value="62">Vĩnh Long</option>
                                                        <option value="63">Vĩnh Phúc</option>
                                                        <option value="64">Yên Bái</option>

                                                    </select>
                                                </div>
                                                <div class="col-12 col-md-5">
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Chọn quận huyện</option>
                                                        <option value="1">Hoàn Kiếm</option>
                                                        <option value="2">Hai bà trưng</option>
                                                        <option value="4">Đống đa</option>
                                                        <option value="5">Hoàng Mai</option>
                                                        <option value="5">Thanh Xuân</option>
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
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="1">Đất thổ cư, đất dự án</option>
                                                        <option value="2">Căn hộ chung cư</option>
                                                        <option value="4">Nhà riêng, nhà phố, biệt thự</option>
                                                        <option value="5">Khu nghỉ dưỡng, trang trại</option>
                                                        <option value="5">Nhà kho, nhà xưởng</option>
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
                                                    <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
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
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Chọn số phòng</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="4">3</option>
                                                        <option value="5">4</option>
                                                        <option value="5">5</option>
                                                        <option value="5">6</option>
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
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Chọn hướng</option>
                                                        <option value="1">Đông</option>
                                                        <option value="2">Tây</option>
                                                        <option value="4">Nam</option>
                                                        <option value="5">Bắc</option>
                                                        <option value="6">Đông-Bắc</option>
                                                        <option value="7">Tây-Bắc</option>
                                                        <option value="8">Tây-Nam</option>
                                                        <option value="8">Đông-Nam</option>
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
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Chọn hướng</option>
                                                        <option value="1">Vinhome</option>
                                                        <option value="2">Imperia</option>
                                                        <option value="4">Sungroup</option>
                                                        <option value="5">T&T</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        </div >
                                        <div v-if="check==2">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu xe<span class="text-danger">*</span></label>
                                                    </div>
                                                    <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                        <select class="form-control select-default selectpickernone">
                                                            <option selected="selected" value="0">Chọn màu sắc</option>
                                                            <option value="1">Màu đỏ</option>
                                                            <option value="2">Màu trắng</option>
                                                            <option value="4">Màu đen</option>
                                                            <option value="5">Màu xanh nước biển</option>
                                                            <option value="6">Màu xanh lá</option>
                                                            <option value="7">Màu hồng</option>
                                                            <option value="8">Màu vàng</option>
                                                            <option value="9">Màu da cam</option>
                                                            <option value="10">Màu tím</option>
                                                            <option value="11">Màu nâu đen</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class="col-form-label font-weight-600">Năm sản xuất</label>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class=" col-form-label pb-1 pt-0 font-weight-600">Hãng xe<span class="text-danger">*</span></label>
                                                    </div>
                                                    <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                        <select class="form-control select-default selectpickernone">
                                                            <option selected="selected" value="0">Chọn hãng xe</option>
                                                            <option value="1">Abarth</option>
                                                            <option value="2"> Zenos</option>
                                                            <option value="4">Alfa Romeo</option>
                                                            <option value="5">Volvo</option>
                                                            <option value="6">Aston Martin</option>
                                                            <option value="7">Volkswagen</option>
                                                            <option value="8">Audi</option>
                                                            <option value="9">Vauxhall</option>
                                                            <option value="10">Bentley</option>
                                                            <option value="11">Toyota</option>
                                                            <option value="12">BMW</option>
                                                            <option value="13">Tesla</option>
                                                            <option value="14">Bugatti</option>
                                                            <option value="15">Suzuki</option>
                                                            <option value="16">Cadillac</option>
                                                            <option value="17">Subaru</option>
                                                            <option value="18">Caterham</option>
                                                            <option value="19">SsangYong</option>
                                                            <option value="20">Chevrolet</option>
                                                            <option value="21">Smart</option>
                                                            <option value="22">Chrysler</option>
                                                            <option value="23">Skoda</option>
                                                            <option value="24">Citroen</option>
                                                            <option value="25">Vinfast</option>
                                                            <option value="26">Dacia</option>
                                                            <option value="27">Seat</option>
                                                            <option value="28">Ferrari</option>
                                                            <option value="29">Saab</option>
                                                            <option value="30">Fiat</option>
                                                            <option value="31">Rolls-Royce</option>
                                                            <option value="32">Ford</option>
                                                            <option value="33">Renault</option>
                                                            <option value="34">Honda</option>
                                                            <option value="35">Radical</option>
                                                            <option value="36">Hyundai</option>
                                                            <option value="37">Porsche</option>
                                                            <option value="38">Infiniti</option>
                                                            <option value="39">Peugeot</option>
                                                            <option value="40">Jaguar</option>
                                                            <option value="41">Pagani</option>
                                                            <option value="42">Jeep</option>
                                                            <option value="43">Noble</option>
                                                            <option value="44">Kia</option>
                                                            <option value="45">Nissan</option>
                                                            <option value="46">Lamborghini</option>
                                                            <option value="47">Morgan</option>
                                                            <option value="48">Land Rover</option>
                                                            <option value="49">Mitsubishi</option>
                                                            <option value="50">Lexus</option>
                                                            <option value="51">Mini</option>
                                                            <option value="52">Lotus</option>
                                                            <option value="53">MG</option>
                                                            <option value="54">Maserati</option>
                                                            <option value="55">Mercedes-Benz</option>
                                                            <option value="56">Mazda</option>
                                                            <option value="57">Mclaren</option>
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
                                                        <select class="form-control select-default selectpickernone">
                                                            <option selected="selected" value="0">Chọn số chỗ</option>
                                                            <option value="1">2</option>
                                                            <option value="2">4</option>
                                                            <option value="4">6</option>
                                                            <option value="5">14</option>
                                                            <option value="6">24</option> 
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
                                                        <select class="form-control select-default selectpickernone">
                                                            <option selected="selected" value="0">Chọn xuất xứ</option>
                                                            <option value="1">Hàn quốc</option>
                                                            <option value="2">Nhật bản</option>
                                                            <option value="4">Trung quốc</option>
                                                            <option value="5">Mỹ</option>
                                                            <option value="6">Việt nam</option>
                                                            <option value="7">Đức</option>
                                                            <option value="8">Thuỵ điển</option>
                                                            <option value="9">Úc</option>
                                                            <option value="10">Ấn độ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="check==7">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class=" col-form-label pb-1 pt-0 font-weight-600">Nhà mạng<span class="text-danger">*</span></label>
                                                    </div>
                                                    <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                        <select class="form-control select-default selectpickernone">
                                                            <option selected="selected" value="0">Chọn nhà mạng</option>
                                                            <option value="1">Viettel</option>
                                                            <option value="2">MobiFone</option>
                                                            <option value="4">Vietnamobile</option>
                                                            <option value="5">Vinaphone</option>
                                                            <option value="6">Gmobile(Beeline)</option>
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
                                                        <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="check==3">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu<span class="text-danger">*</span></label>
                                                    </div>
                                                    <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                        <select class="form-control select-default selectpickernone">
                                                            <option selected="selected" value="0">Chọn màu sắc</option>
                                                            <option value="1">Màu đỏ</option>
                                                            <option value="2">Màu trắng</option>
                                                            <option value="4">Màu đen</option>
                                                            <option value="5">Màu xanh nước biển</option>
                                                            <option value="6">Màu xanh lá</option>
                                                            <option value="7">Màu hồng</option>
                                                            <option value="8">Màu vàng</option>
                                                            <option value="9">Màu da cam</option>
                                                            <option value="10">Màu tím</option>
                                                            <option value="11">Màu nâu đen</option>
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
                                                        <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="check==4">
                                            helo
                                        </div>
                                        <div v-if="check==5">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class="col-form-label font-weight-600">Loại đồ cổ</label>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="check==6">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class="col-form-label font-weight-600">Loại cây</label>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-12 col-md-3">
                                                            <label class="col-form-label font-weight-600">Kiểu dáng</label>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <input type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
                                            Chi tiết tài sản
                                        </h3>
                                        <div class="form-group">
                                            <textarea class="form-control" rows="8"></textarea>
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
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="0">Chọn tình trạng</option>
                                                        <option value="1">Cũ</option>
                                                        <option value="2">Mới</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Trạng thái</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <select class="form-control select-default selectpickernone">
                                                        <option value="1">Đang hoạt động</option>
                                                        <option value="2">Đã vô hiệu</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
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
                                        </div>
                                        <hr class="pt-3 mb-1" />
                                        <div class="clearfix">
                                            <button class="btn btn-primary mb-2">
                                                <i class="las la-save"></i>
                                                Thêm tài sản
                                            </button>
                                            <em class="text-danger f-13 d-block d-sm-inline float-left float-sm-right">* là trường bắt buộc nhập dữ liệu</em>
                                        </div>
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
      description:'',
      hinh:true,
      category:'',
      creaded:'',
      tags:'',
      seller:'',
      actions:'',
      id: '',
      name: '',
      Search:'',
      check:1,
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      info:'',
      status:'',
      asset: [],
      add:true,
      sessionId:'',
      save:true,
      searchCheck: 1,
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
      .then((response) => { this.Search=response.data});
        console.log(this.Search);
    },
    clickEdit(id){
      this.axios.put(this.url+'/asset/update/'+id ,{ "name": this.name, "images": this.images,
        "initPrice": this.initPrice }, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate();
          });
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
</style>
