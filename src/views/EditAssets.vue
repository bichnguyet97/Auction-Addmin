<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

         
        <div>
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
                                                    <img :src="tespicture" class="edit-avatar" style="max-width:300px; width:100%;" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click vào đây để thay avatar">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-5">
                                                <p class="pt-2 f-13">Nhấp chuột vào ảnh để chọn hoặc thay đổi ảnh đại diện. Ảnh đại diện phải là: <span class="font-weight-bold">jpg, png, gif</span> dung lượng tối đa <span class="font-weight-bold">500Kb</span>. Kích thước tối đa <span class="font-weight-bold">300px</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Tên tài sản<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input v-model="testName"  type="text" class="form-control form-control-user fs-090" maxlength="200" >
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
                                                    <option>Điện thoại</option>
                                                    <option>Gia dụng</option>
                                                    <option>Nghe nhìn</option>
                                                    <option>Máy tính</option>
                                                    <option>Đồ điện tử</option>
                                                    <option>Nội thất</option>
                                                    <option>Mỹ phẩm</option>
                                                    <option>Thời trang</option>
                                                    <option>Voucher</option>
                                                    <option>Mẹ và bé</option>
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
                                        <!-- <div class="input-group rounded-0">
                                            <div class="custom-file rounded-0">
                                                <b-form-file
                                                class="z-index-inputFile"
                                                @change="previewImage"
                                                placeholder="Select file"
                                                drop-placeholder="Drop file here..."
                                                accept="image/*"
                                                multiple
                                                id="inputGroupFile02"
                                                ></b-form-file>
                                                <label class="custom-file-label rounded-0" for="" aria-describedby="inputGroupFileAddon02">chọn ảnh</label>
                                            </div>
                                            <div class="input-group-append">
                                                <button @click="onUpload" class="btn btn-warning">
                                                    <i class="las la-plus-circle"></i>
                                                    Thêm
                                                </button>
                                            </div>
                                        </div> -->
                                        <input type="file" @change="onFileChange" />
                                        <div id="preview">
                                            <img v-if="tespicture" v-bind:src="tespicture" />
                                        </div>
                                        <small id="emailHelp" class="form-text text-muted">Chọn một hoặc nhiều ảnh để thêm vào thư viện.</small>
                                    </div>

                                    <!-- <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
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
                                    </div> -->

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
                                    <div v-if="testcategory=='Bất động sản'">
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
                                                <label class="col-form-label font-weight-600">Số tầng</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <input v-model="testfloorsNumber" type="text" class="form-control form-control-user fs-090" value="0" maxlength="500">
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
                                    <div v-if="testcategory=='Xe hơi'">
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
                                                        <option>7</option>
                                                        <option>14</option>
                                                        <option>16</option>
                                                        <option>24</option>
                                                        <option>29</option>
                                                        <option>30</option>
                                                        <option>45</option>
                                                        <option>47</option> 
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
                                    <div v-if="testcategory=='Sim số'">
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
                                                    <label class="col-form-label font-weight-600">Số sim</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testsimNumber" type="text" class="form-control form-control-user fs-090" maxlength="20">
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
                                    <div v-if="testcategory=='Đá quý'">
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
                                    <div v-if="testcategory=='Nghệ thuật'">
                                        helo
                                    </div>
                                    <div v-if="testcategory=='Đồ cổ'">
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
                                    <div v-if="testcategory=='Cây cảnh'">
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
                                    <div v-if="testcategory=='Điện thoại'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Độ phân giải</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testresolution" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Ram</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testram" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Rom</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testrom" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">CPU</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="cpu" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Kích thước màn hình</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testscreenSize" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hệ điều hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testoperatingSystem" type="text" class="form-control form-control-user fs-090" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Độ phân giải camera</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testcamera" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Sim</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testsim" type="text" class="form-control form-control-user fs-090" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Dung lượng pin</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testbatteryCapacity" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng điện thoại</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc điện thoại<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                    <div v-if="testcategory=='Gia dụng'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Công suất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testwattage" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Xanh hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Nghe nhìn'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Công suất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testwattage" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Xanh hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Máy tính'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Công suất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testwattage" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Xanh hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Đồ điện tử'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Công suất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testwattage" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Xanh hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Nội thất'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                         
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Xanh hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Mỹ phẩm'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Thời trang'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                         
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu sắc<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="tescolor" class="form-control select-default selectpickernone">
                                                        <option disable value="">Chọn màu sắc</option>
                                                        <option>Màu đỏ</option>
                                                        <option>Màu trắng</option>
                                                        <option>Màu đen</option>
                                                        <option>Màu xanh dương</option>
                                                        <option>Màu xanh lá</option>
                                                        <option>Màu hồng</option>
                                                        <option>Xanh hồng</option>
                                                        <option>Màu vàng</option>
                                                        <option>Màu da cam</option>
                                                        <option>Màu tím</option>
                                                        <option>Màu Bạc</option>
                                                        <option>Màu nâu đen</option>
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
                                                        <option>Singapore</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="testcategory=='Mẹ và bé'">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hãng sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testtrademark" type="text" class="form-control form-control-user fs-090" maxlength="200">
                                                </div>
                                            </div>
                                        </div>
                                         
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Bảo Hành</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="testguarantee" type="text" class="form-control form-control-user fs-090" maxlength="200">
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
                                                        <option>Singapore</option>
                                                    </select>
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
                                                    <option>Đã kích hoạt</option>
                                                    <option>Chưa kích hoạt</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                     
                                    <hr class="pt-3 mb-1" />
                                    <div class="clearfix">
                                        <button v-b-modal.modalPopover @click="clickEdit()" class="btn btn-primary mb-2">
                                            <i class="las la-save"></i>
                                            Sửa tài sản
                                        </button>
                                        <em class="text-danger f-13 d-block d-sm-inline float-left float-sm-right">* là trường bắt buộc nhập dữ liệu</em>
                                    </div>
                                    <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <!-- <p>
                                            Sửa tài sản thành công !
                                            </p> -->
                                        <p>
                                            {{error?'Sửa tài sản không thành công !': 'Sửa tài sản thành công !'}}
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
    
    this.axios.get(process.env.VUE_APP_MY_ENV_VARIABLE+'/asset/id/' + this.$route.params.id
        ).then((response) => 
        // {
        //      this.asset=response.data.assets[0];
        //      console.log(response.data.assets[0].id);
        //       console.log(this.asset.assets.name);
        //   }
        {if(response.data){ this.asset=response.data, this.testName = response.data.assets[0].name, this.testinitPrice= response.data.assets[0].initPrice, this.testcategory= response.data.assets[0].category,this.testtype= response.data.assets[0].type,this.testtoiletsNumber= response.data.assets[0].toiletsNumber,
      this.testdescription = response.data.assets[0].description, this.testcurrentStatus = response.data.assets[0].currentStatus, this.tespicture = response.data.assets[0].images.split(','),this.testtrademark= response.data.assets[0].trademark,this.tescolor= response.data.assets[0].color, this.tesinteriorColor= response.data.assets[0].interiorColor,
      this.testdirection = response.data.assets[0].direction, this.testarea = response.data.assets[0].area, this.testacreage = response.data.assets[0].acreage, this.testbedroomsNumber = response.data.assets[0].bedroomsNumber,this.tesmanufactureYear= response.data.assets[0].manufactureYear,
      this.tesgear= response.data.assets[0].gear,this.tesfuel= response.data.assets[0].fuel, this.tesconsume= response.data.assets[0].tesconsume,this.testpicture= response.data.assets[0].images,this.tesheight= response.data.assets[0].height,
      this.tesseatsNumber= response.data.assets[0].seatsNumber, this.tesorigin= response.data.assets[0].origin, this.teshomeNetwork= response.data.assets[0].homeNetwork,this.tesyearOld= response.data.assets[0].yearOld, this.testid= response.data.assets[0].id,
      this.tesshape=response.data.assets[0].shape,this.tesweight= response.data.assets[0].weight, this.tesbrightness= response.data.assets[0].brightness, this.tesamount= response.data.assets[0].amount,this.tesstumpDiameter= response.data.assets[0].stumpDiameter,this.testfloorsNumber=response.data.assets[0].floorsNumber, this.testsimNumber=response.data.assets[0].simNumber,
      this.testresolution=response.data.assets[0].resolution,this.testram= response.data.assets[0].ram,this.testrom= response.data.assets[0].rom,this.testscreenSize=response.data.assets[0].screenSize,this.testoperatingSystem= response.data.assets[0].operatingSystem,this.testcamera=response.data.assets[0].camera, this.testsim=response.data.assets[0].sim,
      this.testbatteryCapacity=response.data.assets[0].batteryCapacity, this.testwattage= response.data.assets[0].wattage,this.testguarantee= response.data.assets[0].guarantee, this.inId=response.data.assets[0].id
      }}
          );
    return {
     asEdit:null,
     testwattage:'',
     testguarantee:'',
     tescolor:'',
     tesorigin:'',
      initPrice: '',
      close2:'true',
      currentPrice:'',
      finalPrice:'',
      images:'',
      image:'',
      inId:'',
      asset2:[],
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
      teshomeNetwork:'',
      type:'',
      area:'',
      origin:'',
      asset: null,
      add:true,
      sessionId:'',
      save:true,
      testinitPrice:'',
       
      testName:'',
      assets:[],
      testcategory:'',
      currentStatus:'',
      searchCheck: 1,
      direction:'',
      acreage:'',
      testdescription:'',
      testcurrentStatus:'',
      tesamount:'',
      picture:null,
      bedroomsNumber:'',
      url:process.env.VUE_APP_MY_ENV_VARIABLE,
      searchCate:'',
      imageData:[],
      totalPage:0,
      currentPage : 1,
      perPage : 10,
      simNumber:'',
      floorsNumber:'',
      resolution:'',
      screenSize:'',
      operatingSystem:'',
      camera:'',
      batteryCapacity:'',
      sim:'',
      ram:'',
      rom:'',
      cpu:'',
      wattage:'',
      error:null,
      guarantee:'',
      testtrademark:'',
      tespicture:null
    };
  },
  components: {
    // Login
  },
  methods: {
    clickEdit(){
      this.axios.put(this.url+'/asset/update/'+ this.$route.params.id ,{ "name": this.testName, "initPrice": this.testinitPrice,"area": this.testarea,"type": this.testtype,"toiletsNumber": this.testtoiletsNumber,"color":this.tescolor,"interiorColor": this.tesinteriorColor,"manufactureYear":this.tesmanufactureYear,
      "category": this.testcategory,"description":this.testdescription, "currentStatus": this.testcurrentStatus, "trademark": this.testtrademark, "amount": this.tesamount,"stumpDiameter": this.tesstumpDiameter,"height": this.tesheight,
      "direction": this.testdirection,"acreage":this.testacreage, "bedroomsNumber": this.testbedroomsNumber, "gear": this.tesgear, "fuel": this.tesfuel, "yearOld": this.tesyearold,
      "consume": this.tesconsume, "seatsNumber": this.tesseatsNumber, "origin": this.tesorigin, "homeNetwork": this.teshomeNetwork,"images": this.tespicture,
      "shape": this.tesshape,"weight": this.tesweight, "birghtness":this.tesbirghtness, "floorsNumber": this.testfloorsNumber,"simNumber":this.testsimNumber,"resolution":this.testresolution,"ram":this.testram,"rom":this.testrom,"operatingSystem":this.testoperatingSystem,
      "screenSize":this.testscreenSize,"camera":this.testcamera,"sim":this.testsim, "batteryCapacity":this.testbatteryCapacity,"wattage": this.testwattage, "guarantee":this.testguarantee
      
      }, {
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then((response) => {
            if(response.data==200){
                this.error=null;
            }
        }
         
        );
    },
    previewImage(event){
            // this.uploadValue=0;
            for( var i = 0; i < document.querySelector("#inputGroupFile02").files.length; i++ ){  
                this.testpicture=null;
                this.imageData[i] =event.target.files[i];
                this.uploadValue=0;
                console.log(this.i)
            }
        },
    onUpload(){
            // var today = new Date();
            // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            // dateTime = date+' '+time;
            for( var i = 0; i < this.imageData.length; i++ ){
                this.testpicture='';
                 
                const storageRef=Firebase.storage().ref(`${this.imageData[i].name}`+`${this.imageData[i].lastModified}`).put(this.imageData[i]);
                storageRef.on(`state_changed`,snapshot=>{
                    this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    }, error =>{console.log(error.message)},
                    ()=>{this.uploadValue=100;
                
                    storageRef.snapshot.ref.getDownloadURL().then((url1)=>{
                        if(this.testpicture==this.testpicture){
                            this.testpicture=this.testpicture + url1 + ',' ;
                        }else {
                            return this.testpicture=url1;
                        } 
                        // this.testpicture=url1;
                        console.log(this.testpicture);
                    });

                    }
                    );
            }
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
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.tespicture = URL.createObjectURL(file);
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
.pagination li a {
  margin-top: 2px;
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
// .test td{
//     max-width: 100px;
//     overflow: hidden;
//     white-space: nowrap; 
//     text-overflow: ellipsis;
// }
#edit{
    margin-left: 960px;
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
