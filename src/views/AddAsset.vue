<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
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

                                    <!-- <div class="form-group">
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
                                    </div> -->

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
                                                <input v-model="name" type="text" class="form-control form-control-user fs-090" maxlength="200" value="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Nhập số lượng<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input v-model="amount" type="text" class="form-control form-control-user fs-090" maxlength="200" value="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Nhập giá bán<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <input v-model="initPrice" type="text" class="form-control form-control-user fs-090" value="0">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Danh mục đấu giá<span class="text-danger">*</span></label>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <select v-model="category" class="form-control form-control-user fs-090">
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
                                            <img id="sizeimage" :src="picture" alt="">
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
                                                <select v-model="area" class="form-control select-default selectpickernone">
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
                                            <!-- <div class="col-12 col-md-5">
                                                <select class="form-control select-default selectpickernone">
                                                    <option disable value="">Chọn quận huyện</option>
                                                    <option>Hoàn Kiếm</option>
                                                    <option>Hai bà trưng</option>
                                                    <option>Đống đa</option>
                                                    <option>Hoàng Mai</option>
                                                    <option>Thanh Xuân</option>
                                                </select>
                                            </div> -->
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12 col-md-3">
                                                <label class="col-form-label font-weight-600">Chủng loại</label>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <select v-model="type" class="form-control select-default selectpickernone">
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
                                                <input v-model="acreage" type="text" class="form-control form-control-user fs-090" value="0" maxlength="20">
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
                                                <select v-model="bedroomsNumber" class="form-control select-default selectpickernone">
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
                                                <select v-model="toiletsNumber" class="form-control select-default selectpickernone">
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
                                                <select v-model="direction" class="form-control select-default selectpickernone">
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
                                                <select v-model="trademark" class="form-control select-default selectpickernone">
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
                                    <div v-if="check==2">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Màu xe<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="color" class="form-control select-default selectpickernone">
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
                                                    <input v-model="interiorColor" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Năm sản xuất</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="manufactureYear" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Hộp số<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="gear" class="form-control select-default selectpickernone">
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
                                                    <select v-model="fuel" class="form-control select-default selectpickernone">
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
                                                    <input v-model="consume" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
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
                                                    <select v-model="trademark" class="form-control select-default selectpickernone">
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
                                                    <select v-model="seatsNumber" class="form-control select-default selectpickernone">
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
                                                    <select v-model="origin" class="form-control select-default selectpickernone">
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
                                    <div v-if="check==7">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class=" col-form-label pb-1 pt-0 font-weight-600">Nhà mạng<span class="text-danger">*</span></label>
                                                </div>
                                                <div class="col-12 col-md-4 mb-2 mb-sm-0">
                                                    <select v-model="homeNetwork" class="form-control select-default selectpickernone">
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
                                                    <input v-model="type" type="text" class="form-control form-control-user fs-090" maxlength="20">
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
                                                    <select v-model="color" class="form-control select-default selectpickernone">
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
                                                    <input v-model="type" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Hình dạng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="shape" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Trọng lượng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="weight" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Độ sáng</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="brightness" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
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
                                                    <input v-model="type" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="check==5">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-md-3">
                                                    <label class="col-form-label font-weight-600">Tuổi đời</label>
                                                </div>
                                                <div class="col-12 col-md-4">
                                                    <input v-model="yearOld" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
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
                                                    <input v-model="type" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class="col-form-label font-weight-600">Chiều cao của cây</label>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input v-model="height" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-12 col-md-3">
                                                        <label class="col-form-label font-weight-600">Đường kính gốc cây</label>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input v-model="stumpDiameter" type="text" class="form-control form-control-user fs-090" value="" maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="card-title f-17 mb-3 font-weight-700 border-bottom pb-3 mt-5">
                                        Chi tiết tài sản
                                    </h3>
                                    <div class="form-group">
                                        <textarea v-model="description" class="form-control" rows="8"></textarea>
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
                                                <select v-model="currentStatus" class="form-control select-default selectpickernone">
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
                                        <button v-b-modal.modalPopover @click="clickAdd1" class="btn btn-primary mb-2">
                                            <i class="las la-save"></i>
                                            Thêm tài sản
                                        </button>
                                        <em class="text-danger f-13 d-block d-sm-inline float-left float-sm-right">* là trường bắt buộc nhập dữ liệu</em>
                                    </div>
                                    <b-modal id="modalPopover" title="Thông báo" ok-only>
                                            <p>
                                            Tạo tài sản thành công !
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
</template>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import Firebase from 'firebase';
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
      origin:'',
      description:'',
      hinh:true,
      category:'',
      creaded:'',
      tags:'',
      gear:'',
      consume:'',
      seller:'',
      actions:'',
      id: '',
      yearOld:'',
      amount:'',
      trademark:'',
      shape:'',
      weight:'',
      brightness:'',
      bedroomsNumber:'',
      name: '',
      Search:'',
      check:1,
      toiletsNumber:'',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      info:'',
      interiorColor:'',
      acreage:'',
      direction:'',
      seatsNumber:'',
      area:'',
      fuel:'',
      homeNetwork:'',
      currentStatus:'',
      status:'',
      height:'',
      stumpDiameter:'',
      manufactureYear:'',
      asset: [],
      picture: null,
      add:true,
      sessionId:'',
      type:'',
      color:'',
      imagess: [],
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
    clickAdd1:async function(){
     await this.axios.post(this.url+'/asset',{ "name": this.name,"initPrice": this.initPrice,"weight": this.weight,"brightness":this.brightness,
      "category": this.category, "images":this.picture,"description":this.description, "currentStatus": this.currentStatus, "area": this.area,
      "direction": this.direction,"acreage":this.acreage, "bedroomsNumber": this.bedroomsNumber, "homeNetwork": this.homeNetwork, "type": this.type,
      "seatsNumber": this.seatsNumber,"origin": this.origin,"color": this.color, "manufactureYear": this.manufactureYear, "trademark": this.trademark,
      "toiletsNumber": this.toiletsNumber, "interiorColor": this.interiorColor,"gear": this.gear, "fuel": this.fuel, "consume": this.consume, "shape": this.shape,
      "amount": this.amount,"yearOld":this.yearOld, "height":this.height, "stumpDiameter": this.stumpDiameter
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    },
    previewImage(event){
            // this.uploadValue=0;
            this.picture=null;
            this.imageData=event.target.files[0];
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
            
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.picture=url;
                    console.log(this.picture);
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
#sizeimage{
    height: 125px;
    width: 201px;
}
#topimage{
    margin-top:10px;
}
</style>
