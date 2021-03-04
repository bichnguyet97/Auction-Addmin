<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <!-- <b-container-fluid>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Tạo tài sản</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo4" @click="showInfo4=true" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo4" @click="showInfo4=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo4">
                <div class="form-group">
                  <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                  <div class="col-md-9"> 
                  <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="name" value>
                  </div>
                  <label class="col-md-3 control-label" for="">Images<strong>*</strong></label>
                  <div class="col-md-9"> 
                  <input v-model="images" class="form-control" id="images" name="images" type="text" placeholder="Link ảnh" value>
                  </div>
                  <label class="col-md-3 control-label" for="">Category<strong>*</strong></label>
                  <div class="col-md-9"> 
                  <input v-model="category" class="form-control" id="category" name="category" type="text" placeholder="ID" value>
                  </div>
                  <label class="col-md-3 control-label" for="">Init Price<strong>*</strong></label>
                  <div class="col-md-9"> 
                  <input v-model="initPrice" class="form-control" id="initPrice" name="initPrice" type="text" placeholder="giá" value>
                  </div>
                  <div class="col-2 offset-8">
                    <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                  </div>
                </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Danh sách tài sản đã xác nhận</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo2" @click="showInfo2=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo2" @click="showInfo2=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo2">
                <div class="employee-list">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Loại</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Giá niêm yết</th>
                      <th scope="col">Giá hiện tại</th>
                      <th scope="col">Tạo</th>
                      <th scope="col">Cập nhật</th>
                      <th scope="col">Người bán</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Xác nhận</th>
                    </tr>
                  </thead>
                  <tbody class="test" v-if="searchCheck==1">
                    <tr v-for="asset in asset" v-bind:key="asset.id">
                      <th v-if="asset.status==waiting" scope="row">{{asset.id}}</th>
                      <td v-if="asset.status==waiting">{{asset.name}}</td>
                      <td v-if="asset.status==waiting">{{asset.category}}</td>
                      <td v-if="asset.status==waiting">{{asset.images}}</td>
                      <td v-if="asset.status==waiting">{{asset.initPrice}}</td>
                      <td v-if="asset.status==waiting">{{asset.currentPrice}}</td>
                      <td v-if="asset.status==waiting">{{asset.created}}</td>
                      <td v-if="asset.status==waiting">{{asset.updated}}</td>
                      <td v-if="asset.status==waiting">{{asset.seller}}</td>
                      <td v-if="asset.status==waiting" style="color:red;">{{asset.status}}</td>
                      <td v-if="asset.status==waiting">
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Yes</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">No</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody class="test" v-if="searchCheck==2">
                    <tr>
                      <th scope="row">{{userSearch.data.id}}</th>
                      <td>{{userSearch.data.name}}</td>
                      <td>{{userSearch.data.initPrice}}</td>
                      <td>{{userSearch.data.currentPrice}}</td>
                      <td>{{userSearch.data.created}}</td>
                      <td>{{userSearch.data.updated}}</td>
                      <td>{{userSearch.data.seller}}</td>
                      <td style="color:red;">{{userSearch.data.confirm}}</td>
                      <td>
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Có</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">Không</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-if="searchCheck==3">
                    <tr v-for="n in searchCate.data.length" v-bind:key="n">
                      <th scope="row">{{searchCate.data[n-1].id}}</th>
                      <td class="test">{{searchCate.data[n-1].name}}</td>
                      <td class="test">{{searchCate.data[n-1].category}}</td>
                      <td>{{searchCate.data[n-1].initPrice}}</td>
                      <td>{{searchCate.data[n-1].currentPrice}}</td>
                      <td class="test">{{searchCate.data[n-1].created}}</td>
                      <td class="test">{{searchCate.data[n-1].updated}}</td>
                      <td>{{searchCate.data[n-1].tags}}</td>
                      <td>{{searchCate.data[n-1].seller}}</td>
                      <td>
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Yes</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">No</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Danh sách tài sản không được xác nhận</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo5" @click="showInfo5=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo5" @click="showInfo5=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo5">
                <div class="employee-list">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Giá niêm yết</th>
                      <th scope="col">Giá hiện tại</th>
                      <th scope="col">Tạo</th>
                      <th scope="col">Cập nhật</th>
                      <th scope="col">Người bán</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Xác nhận</th>
                    </tr>
                  </thead>
                  <tbody class="test" v-if="searchCheck==1">
                    <tr v-for="asset in asset" v-bind:key="asset.id">
                      <th v-if="asset.confirm==false" scope="row">{{asset.id}}</th>
                      <td v-if="asset.confirm==false">{{asset.name}}</td>
                      <td v-if="asset.confirm==false">{{asset.initPrice}}</td>
                      <td v-if="asset.confirm==false">{{asset.currentPrice}}</td>
                      <td v-if="asset.confirm==false">{{asset.created}}</td>
                      <td v-if="asset.confirm==false">{{asset.updated}}</td>
                      <td v-if="asset.confirm==false">{{asset.seller}}</td>
                      <td v-if="asset.confirm==false" style="color:red;">{{asset.confirm}}</td>
                      <td v-if="asset.confirm==false">
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Yes</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">No</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody class="test" v-if="searchCheck==2">
                    <tr>
                      <th scope="row">{{userSearch.data.id}}</th>
                      <td>{{userSearch.data.name}}</td>
                      <td>{{userSearch.data.initPrice}}</td>
                      <td>{{userSearch.data.currentPrice}}</td>
                      <td>{{userSearch.data.created}}</td>
                      <td>{{userSearch.data.updated}}</td>
                      <td>{{userSearch.data.seller}}</td>
                      <td style="color:red;">{{userSearch.data.confirm}}</td>
                      <td>
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Có</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">Không</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-if="searchCheck==3">
                    <tr v-for="n in searchCate.data.length" v-bind:key="n">
                      <th scope="row">{{searchCate.data[n-1].id}}</th>
                      <td class="test">{{searchCate.data[n-1].name}}</td>
                      <td class="test">{{searchCate.data[n-1].category}}</td>
                      <td>{{searchCate.data[n-1].initPrice}}</td>
                      <td>{{searchCate.data[n-1].currentPrice}}</td>
                      <td class="test">{{searchCate.data[n-1].created}}</td>
                      <td class="test">{{searchCate.data[n-1].updated}}</td>
                      <td>{{searchCate.data[n-1].tags}}</td>
                      <td>{{searchCate.data[n-1].seller}}</td>
                      <td>
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Yes</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">No</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <card header-classes="bg-transparent">
                <b-row class="row" align-v="center">
                <b-col>
                    <h3 class="mb-0">Danh sách tài sản chưa xác nhận</h3>
                </b-col>
                <b-col cols="8" class="text-right">
                    <b-button v-if="!showInfo3" @click="showInfo3=true, getAuction()" variant="primary"><i class="ni ni-bold-down"></i></b-button>
                    <b-button v-if="showInfo3" @click="showInfo3=false" variant="primary"><i class="ni ni-bold-up"></i></b-button>
                </b-col>
                </b-row>
                <b-form v-if="showInfo3">
                <div class="employee-list">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Giá niêm yết</th>
                      <th scope="col">Giá hiện tại</th>
                      <th scope="col">Tạo</th>
                      <th scope="col">Cập nhật</th>
                      <th scope="col">Người bán</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Xác nhận</th>
                    </tr>
                  </thead>
                  <tbody class="test" v-if="searchCheck==1">
                    <tr v-for="asset in asset" v-bind:key="asset.id">
                      <th v-if="asset.confirm==null" scope="row">{{asset.id}}</th>
                      <td v-if="asset.confirm==null">{{asset.name}}</td>
                      <td v-if="asset.confirm==null">{{asset.initPrice}}</td>
                      <td v-if="asset.confirm==null">{{asset.currentPrice}}</td>
                      <td v-if="asset.confirm==null">{{asset.created}}</td>
                      <td v-if="asset.confirm==null">{{asset.updated}}</td>
                      <td v-if="asset.confirm==null">{{asset.seller}}</td>
                      <td v-if="asset.confirm==null" style="color:red;">{{asset.confirm}}</td>
                      <td v-if="asset.confirm==null">
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Yes</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">No</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody class="test" v-if="searchCheck==2">
                    <tr>
                      <th scope="row">{{userSearch.data.id}}</th>
                      <td>{{userSearch.data.name}}</td>
                      <td>{{userSearch.data.initPrice}}</td>
                      <td>{{userSearch.data.currentPrice}}</td>
                      <td>{{userSearch.data.created}}</td>
                      <td>{{userSearch.data.updated}}</td>
                      <td>{{userSearch.data.seller}}</td>
                      <td style="color:red;">{{userSearch.data.confirm}}</td>
                      <td>
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Có</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">Không</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-if="searchCheck==3">
                    <tr v-for="n in searchCate.data.length" v-bind:key="n">
                      <th scope="row">{{searchCate.data[n-1].id}}</th>
                      <td class="test">{{searchCate.data[n-1].name}}</td>
                      <td class="test">{{searchCate.data[n-1].category}}</td>
                      <td>{{searchCate.data[n-1].initPrice}}</td>
                      <td>{{searchCate.data[n-1].currentPrice}}</td>
                      <td class="test">{{searchCate.data[n-1].created}}</td>
                      <td class="test">{{searchCate.data[n-1].updated}}</td>
                      <td>{{searchCate.data[n-1].tags}}</td>
                      <td>{{searchCate.data[n-1].seller}}</td>
                      <td>
                        <span>
                          <button type="button" class="btn btn-danger" v-on:click="clickConfirmtrue(asset.id)">Yes</button>
                          <button type="button" class="btn btn-warning" @click="clickConfirmfalse(asset.id)">No</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        </b-container-fluid> -->
        <div class="mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                      <div class="row">
                        <div @click="searchCheck=1" class="col-2">
                          Asset Controller
                          <span>
                            <i class="fa fa-reply" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div id="smbutton" class="col-2 offset-8">
                          <input v-model="category" class="form-control mr-sm-2" type="category" placeholder="Search a type" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch(asset.category)">SearchType</button>
                        </div>
                        <div id="smbutton" class="col-2 offset-8">
                          <input v-model="id" class="form-control mr-sm-2" type="id" placeholder="Search a ID" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="clickSearch1(asset.id)">SearchID</button>
                        </div>
                        <!-- <div @click="openIn" class="col-2 offset-8">
                          <button type="button" class="btn btn-primary" @click="close2=true">Thêm mới</button>
                        </div> -->
                        <div id="smtaomoi" class="col-2 offset-8">
                          <b-button v-b-modal.modal-1 variant="primary">Tạo mới</b-button>
                          <b-modal id="modal-1" title="Tạo mới">
                            <div v-if="close2" class="form-group">
                              <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="name" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Images<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="images" class="form-control" id="images" name="images" type="text" placeholder="Link ảnh" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Category<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="category" class="form-control" id="category" name="category" type="text" placeholder="ID" value>
                              </div>
                              <label class="col-md-3 control-label" for="">Init Price<strong>*</strong></label>
                              <div class="col-md-9"> 
                              <input v-model="initPrice" class="form-control" id="initPrice" name="initPrice" type="text" placeholder="giá" value>
                              </div>
                              <div class="col-2 offset-8">
                                <button v-b-modal.modalPopover type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                              </div>
                            </div>
                          </b-modal>
                          <b-modal id="modalPopover" title="Thông báo" ok-only>
                            <p>
                              Thêm tài sản thành công !
                            </p>
                          </b-modal>
                        </div>
                      </div>
                      <!-- <div class="closeIn">
                        <div v-if="close2" class="form-group">
                          <label class="col-md-3 control-label" for="">Name<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="name" class="form-control" id="name" name="name" type="text" placeholder="name" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Images<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="images" class="form-control" id="images" name="images" type="text" placeholder="Link ảnh" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Category<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="category" class="form-control" id="category" name="category" type="text" placeholder="ID" value>
                          </div>
                          <label class="col-md-3 control-label" for="">Init Price<strong>*</strong></label>
                          <div class="col-md-9"> 
                          <input v-model="initPrice" class="form-control" id="initPrice" name="initPrice" type="text" placeholder="giá" value>
                          </div>
                          <div class="col-2 offset-8">
                            <button type="button" class="btn btn-primary" @click="clickAdd1">Save</button>
                            <b-button variant="outline-primary" @click="close2=false">Thoát</b-button>
                          </div>
                        </div>
                      </div> -->
                      <div class="asset_controller">
                      <table class="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Loại</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Giá niêm yết</th>
                            <th scope="col">Giá hiện tại</th>
                            <!-- <th scope="col">Auctions</th> -->
                            <!-- <th scope="col">Final Price</th> -->
                            <th scope="col">Tạo</th>
                            <th scope="col">Cập nhật</th>
                            <!-- <th scope="col">Tags</th> -->
                            <!-- <th scope="col">Người bán</th> -->
                            <th scope="col">Trạng thái</th>
                            <!-- <th scope="col">Xác nhận</th> -->
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody v-if="searchCheck==1">
                          <tr v-for="asset in asset" v-bind:key="asset.id">
                            <th scope="row">{{asset.id}}</th>
                            <td>{{asset.name}}</td>
                            <td>{{asset.category}}</td>
                            <td class="test"><a :href="asset.images">{{asset.images}}</a></td>
                            <td>{{asset.initPrice}}</td>
                            <td>{{asset.currentPrice}}</td>
                            <!-- <td>{{asset.auctions}}</td> -->
                            <!-- <td>{{asset.finalPrice}}</td> -->
                            <td>{{asset.created}}</td>
                            <td>{{asset.updated}}</td>
                            <!-- <td>{{asset.tags}}</td> -->
                            <!-- <td>{{asset.seller}}</td> -->
                            <td style="color:red;">{{asset.status}}</td>
                            <td>
                              <span>
                                <base-button size="sm" outline type="info" v-on:click="clickdelete1(asset.id)">Xoá</base-button>
                                <!-- <base-input>
                                  <select size="sm" v-model="status" class="form-select form-select-sm">
                                    <option disable value="">Chọn</option>
                                    <option>Đã xác nhận</option>
                                    <option>Chờ đăng báo</option>
                                    <option>Đã đăng báo</option>
                                  </select>
                                  <b-button style="margin-top:59px; margin-left:-108px" size="sm" v-on:click="clickConfirm(asset.id,status)" variant="primary">Xác nhận</b-button>
                                </base-input> -->
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-if="searchCheck==2">
                          <tr>
                            <th scope="row">{{userSearch.data.id}}</th>
                            <td class="test">{{userSearch.data.name}}</td>
                            <td>{{userSearch.data.category}}</td>
                            <td class="test"><a :href="userSearch.data.images">{{userSearch.data.images}}</a></td>
                            <td>{{userSearch.data.initPrice}}</td>
                            <td>{{userSearch.data.currentPrice}}</td>
                            <td class="test">{{userSearch.data.created}}</td>
                            <td class="test">{{userSearch.data.updated}}</td>
                            <td>{{userSearch.data.seller}}</td>
                            <td style="color:red;">{{userSearch.data.status}}</td>
                            <td>
                              <span>
                                <base-input>
                                  <select id="select" v-model="status" class="form-control">
                                    <option disable value="">Chọn</option>
                                    <option>Đã xác nhận</option>
                                    <option>Chờ đăng báo</option>
                                    <option>Đã đăng báo</option>
                                  </select>
                                  <b-button style="margin-top:5px;" size="sm" v-on:click="clickConfirm(asset.id,status)" variant="primary">Xác nhận</b-button>
                                  <base-button style="margin-top:5px;" size="sm" outline type="info" v-on:click="clickdelete1(asset.id)">Xoá</base-button>
                                </base-input>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-if="searchCheck==3">
                          <tr v-for="n in searchCate.data.length" v-bind:key="n">
                            <th scope="row">{{searchCate.data[n-1].id}}</th>
                            <td class="test">{{searchCate.data[n-1].name}}</td>
                            <td class="test">{{searchCate.data[n-1].category}}</td>
                            <td class="test"><a :href="searchCate.data[n-1].images">{{searchCate.data[n-1].images}}</a></td>
                            <td>{{searchCate.data[n-1].initPrice}}</td>
                            <td>{{searchCate.data[n-1].currentPrice}}</td>
                            <!-- <td>{{asset.auctions}}</td> -->
                            <!-- <td>{{asset.finalPrice}}</td> -->
                            <td class="test">{{searchCate.data[n-1].created}}</td>
                            <td class="test">{{searchCate.data[n-1].updated}}</td>
                            <!-- <td>{{searchCate.data[n-1].tags}}</td> -->
                            <td>{{searchCate.data[n-1].seller}}</td>
                            <td>{{searchCate.data[n-1].status}}</td>
                            <td>
                              <span>
                                <base-input>
                                  <select v-model="status" class="form-control">
                                    <option disable value="">Chọn</option>
                                    <option>Đã xác nhận</option>
                                    <option>Chờ xác nhận</option>
                                    <option>Chờ đăng báo</option>
                                    <option>Đã đăng báo</option>
                                    <option>Đã xoá</option>
                                  </select>
                                  <b-button style="margin-top:5px;" size="sm" v-on:click="clickConfirm(asset.id,status)" variant="primary">Xác nhận</b-button>
                                  <!-- <b-button size="sm" v-on:click="clickdelete1(asset.id)" variant="Danger">Xoá</b-button> -->
                                  <base-button style="margin-top:5px;" size="sm" outline type="info" v-on:click="clickdelete1(asset.id)">Xoá</base-button>
                                </base-input>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>
                </div>
            </div>
        </div>
<!-- <vue /> -->
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
      category:'',
      creaded:'',
      tags:'',
      seller:'',
      actions:'',
      id: '',
      name: '',
      showInfo1:false,
      showInfo2:false,
      showInfo3:false,
      showInfo4:false,
      showInfo5:false,
      updated:'',
      info:'',
      status:'',
      staus1:'đã xoá',
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
    clickUpdate1:async function(){
      this.axios.get(this.url+'/asset'
       ).then((response) => { this.asset=response.data})
    },
    clickAdd1:async function(){
    await this.axios.post(this.url+'/asset',{ "name": this.name,
      "category": this.category,"images":this.images,"initPrice":this.initPrice
      },{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }
      ).then((response) => console.log(response));
    await this.axios.get(this.url+'/asset'
      ).then((response) => { this.asset=response.data})
    },
    clickSearch1: async function(){
      await this.axios.get(this.url+'/asset/id/'+this.id).then((response) => this.userSearch = response);
      console.log(this.userSearch.data.name);
      this.searchCheck=2;
    },
    clickSearch: async function(){
      await this.axios.get(this.url+'/asset/byCategory/'+this.category).then((response) => this.userSearch = response);
      this.searchCate=this.userSearch;
      this.searchCheck=3;
      console.log(this.userSearch.data);
    },
    clickConfirm(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status="+this.status,{"status":this.status},{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    // clickEdit: async function(){
    //   await this.axios.put(this.url+'/category/'+this.id ,{ "name": this.name,"id":this.id,
    //     "alias": this.alias}, {
    //   headers: {
    //     Authorization: this.getCookie('AC-ACCESS-KEY') }
    //     }).then((response) => console.log(response));
    // },
    clickdelete1(id){
      this.axios.post(this.url+'/asset/updateStatus/'+id+"?status=deleted",{
      headers: {
        Authorization: this.getCookie('AC-ACCESS-KEY') }
        }).then(() => {
            this.clickUpdate1();
          });
    },
    deleteAssest:async function(){
      await axios.post(this.url+'/asset/updateStatus/'+this.buffer+'?status=deleted',{
          headers: {
            Authorization: this.$cookies.get("AC-ACCESS-KEY=") }
        }).then(response => console.log(response))
        this.$router.go();
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
</style>
