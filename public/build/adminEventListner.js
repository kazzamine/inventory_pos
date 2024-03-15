"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["adminEventListner"],{

/***/ "./assets/js/admin/addAjax.js":
/*!************************************!*\
  !*** ./assets/js/admin/addAjax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAjax: () => (/* binding */ addAjax)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_3__);



//function handles ajax request for adding

var addAjax = function addAjax(url, data, csrf) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-CSRF-TOKEN': csrf
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    toastify_js__WEBPACK_IMPORTED_MODULE_3___default()({
      text: data.success,
      title: 'Success',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'green',
      stopOnFocus: true
    }).showToast();
  })["catch"](function (error) {
    toastify_js__WEBPACK_IMPORTED_MODULE_3___default()({
      text: error,
      title: 'error',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'red',
      stopOnFocus: true
    }).showToast();
  });
};

/***/ }),

/***/ "./assets/js/admin/updateAjax.js":
/*!***************************************!*\
  !*** ./assets/js/admin/updateAjax.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAjax: () => (/* binding */ updateAjax)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_3__);



//function for ajax request for updating


var updateAjax = function updateAjax(url, data) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    toastify_js__WEBPACK_IMPORTED_MODULE_3___default()({
      text: 'successful update',
      title: 'Success',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'green',
      stopOnFocus: true
    }).showToast();
  })["catch"](function (error) {
    toastify_js__WEBPACK_IMPORTED_MODULE_3___default()({
      text: error,
      title: 'error',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'red',
      stopOnFocus: true
    }).showToast();
  });
};

/***/ }),

/***/ "./assets/js/admin/users.js":
/*!**********************************!*\
  !*** ./assets/js/admin/users.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePassword: () => (/* binding */ changePassword),
/* harmony export */   updateUser: () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_7__);








// function to send an ajax request to add new user
//update user infors

var updateUser = function updateUser(url, data, csrfToken) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-application': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify(data)
  }).then(function (Response) {
    if (!Response.ok) {
      throw new Error();
    }
    return Response.json();
  }).then(function (data) {
    toastify_js__WEBPACK_IMPORTED_MODULE_7___default()({
      text: 'updated successfully!',
      title: 'Success',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'green',
      stopOnFocus: true
    }).showToast();
  })["catch"](function (error) {
    toastify_js__WEBPACK_IMPORTED_MODULE_7___default()({
      text: error.toString(),
      title: 'Error',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'red',
      stopOnFocus: true
    }).showToast();
  });
};
var changePassword = function changePassword(url, data, csrfToken) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-application': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify(data)
  }).then(function (Response) {
    if (!Response.ok) {
      throw new Error();
    }
    return Response.json();
  }).then(function (data) {
    toastify_js__WEBPACK_IMPORTED_MODULE_7___default()({
      text: 'updated successfully!',
      title: 'Success',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'green',
      stopOnFocus: true
    }).showToast();
  })["catch"](function (error) {
    toastify_js__WEBPACK_IMPORTED_MODULE_7___default()({
      text: error.toString(),
      title: 'Error',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'red',
      stopOnFocus: true
    }).showToast();
  });
};

/***/ }),

/***/ "./assets/js/adminEventsListener.js":
/*!******************************************!*\
  !*** ./assets/js/adminEventsListener.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_updateAjax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/updateAjax */ "./assets/js/admin/updateAjax.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _admin_addAjax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/addAjax */ "./assets/js/admin/addAjax.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common */ "./assets/js/common.js");
/* harmony import */ var _admin_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/users */ "./assets/js/admin/users.js");





// handling events triggered by admin

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;





//toggle divs
var toggleList = $('#listModelContainer');
var eventToggleList = $('#toggleList');
eventToggleList.on('click', function () {
  (0,_common__WEBPACK_IMPORTED_MODULE_8__.toggleDivVisibility)(toggleList);
});
var addToggle = $('#addToggle');
var toggleAdd = $('#toggleAdd');
toggleAdd.on('click', function () {
  (0,_common__WEBPACK_IMPORTED_MODULE_8__.toggleDivVisibility)(addToggle);
});
// category events section

//detecting clicks
var btnAddCat = $('#btn_addCat');
//getting fields
var txtCatName = $('#category_name');
var txtCatDesc = $('#cat_desc');
var csrfToken = $('#_csrf_token');
//event of adding new category
btnAddCat.on('click', function (e) {
  e.preventDefault();
  if (txtCatDesc.val() && txtCatName.val()) {
    var data = {
      'catname': txtCatName.val(),
      'desc': txtCatDesc.val()
    };
    (0,_admin_addAjax__WEBPACK_IMPORTED_MODULE_7__.addAjax)('/admin/category/add', data, csrfToken.val());
    txtCatName.val('');
    txtCatDesc.val('');
  } else {
    toastify_js__WEBPACK_IMPORTED_MODULE_6___default()({
      text: 'fill all fields please',
      title: 'empty',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'warning',
      stopOnFocus: true
    }).showToast();
  }
});

//change fields of list to be editable
//for products
//updateProdBtn
// const saveUpdatedProd=$('.saveBtn');
//
// Array.from(saveUpdatedProd).forEach( (button)=> {
//     const prodName=$('#prodName');
//     const prodDesc=$('#prodDesc');
//     const prodPrice=$('#prodPrice')
//     const prodTax=$('#prodTax');
//     button.addEventListener('click', function () {
//         const data={
//             'prodName':prodName.data('field'),
//             'prodDesc':prodDesc.value,
//             'prodPrice':prodPrice.value,
//             'prodTax':prodTax.value,
//             'prodId':button.value
//         }
//         console.log(data)
//     });
// });

//add product
var btnAddProd = $('#btn_addProd');
//getting fields
var txtProdName = $('#product_name');
var txtProdPrice = $('#price');
var txtProdDesc = $('#description');
var txtProdTax = $('#tax');
var txtProdCat = $('#category');
var storage = $('#storage');
var prodImage = $('#prodImage');
var prodCsrfToken = $('#_csrf_token');
//event of adding new category
btnAddProd.on('click', function (e) {
  e.preventDefault();
  if (txtProdName.val() && txtProdPrice.val() && txtProdTax.val() && txtProdDesc.val()) {
    var data = {
      'prodName': txtProdName.val(),
      'desc': txtProdDesc.val(),
      'price': txtProdPrice.val(),
      'tax': txtProdTax.val(),
      'category': txtProdCat.val(),
      'storage': storage.val(),
      'prodImage': prodImage.prop('files')[0]
    };
    (0,_admin_addAjax__WEBPACK_IMPORTED_MODULE_7__.addAjax)('/admin/product/add', data, prodCsrfToken.val());
    location.reload(true);
  } else {
    toastify_js__WEBPACK_IMPORTED_MODULE_6___default()({
      text: 'fill all fields please',
      title: 'empty',
      duration: 3000,
      gravity: 'center',
      position: 'top',
      backgroundColor: 'warning',
      stopOnFocus: true
    }).showToast();
  }
});

//update user

var updateinfoClick = $('#updateInfo');
var saveInfoChanges = $('#saveUpdatedUser');
var userInfo = $('.userInfo');
updateinfoClick.on('click', function () {
  // toggleHiddenButton(updateinfoClick);
  Array.from(userInfo).forEach(function (txtInput) {
    (0,_common__WEBPACK_IMPORTED_MODULE_8__.makeReadOnly)(txtInput);
  });
  if (updateinfoClick.text('update')) {
    updateinfoClick.text('cancel');
    saveInfoChanges.show();
  } else {
    updateinfoClick.text('update');
    saveInfoChanges.hide();
  }
});

//data to be updated
var txtUsername = $('#txtUsername');
var txtFirstName = $('#txtFirstName');
var txtLastName = $('#txtLastName');
var txtAddress = $('#txtAddress');
var txtPhone = $('#txtPhone');
var txtCity = $('#txtCity');
var userPic = $('#ProfilePictureInput');
var ProfilecsrfToken = $('#_csrf_token_userUpdate');
saveInfoChanges.on('click', function () {
  var data = {
    'id': saveInfoChanges.data('userId'),
    'username': txtUsername.val(),
    'firstname': txtFirstName.val(),
    'lastname': txtLastName.val(),
    'address': txtAddress.val(),
    'phone': txtPhone.val(),
    'city': txtCity.val(),
    'picture': userPic.prop('files')[0]
  };
  console.log(data.picture);
  (0,_admin_users__WEBPACK_IMPORTED_MODULE_9__.updateUser)('/user/profile/update', data, ProfilecsrfToken.val());
  Array.from(userInfo).forEach(function (txtInput) {
    (0,_common__WEBPACK_IMPORTED_MODULE_8__.makeReadOnly)(txtInput);
  });
  if (updateinfoClick.text('cancel')) {
    updateinfoClick.text('update');
    saveInfoChanges.hide();
  } else {
    updateinfoClick.text('cancel');
  }
});

//actions for model

var addModel = $('#btn_addModel');
var txtModName = $('#model_name');
var txtModPath = $('#model_path');
var txtModIcon = $('#model_icon');
var txtModRole = $('#model_role');
var ModelCsrfToken = $('#_csrf_token_addmodel');
addModel.on('click', function () {
  var data = {
    'modName': txtModName.val(),
    'modIcon': txtModIcon.val(),
    'modPath': txtModPath.val(),
    'modRole': txtModRole.val()
  };
  (0,_admin_addAjax__WEBPACK_IMPORTED_MODULE_7__.addAjax)('/admin/model/list/add', data, ModelCsrfToken.val());
  txtModName.val('');
  txtModPath.val('');
  txtModIcon.val('');
  txtModRole.val('');
});

//sub model actions

var addSubModel = $('#btn_addSubModel');
var txtSubModName = $('#sub_model_name');
var txtSubModPath = $('#sub_model_path');
var txtSubModIcon = $('#sub_model_icon');
var txtSubModModId = $('#sub_model_mod');
var SubModelCsrfToken = $('#_csrf_token_addsubmodel');
addSubModel.on('click', function () {
  var data = {
    'submodName': txtSubModName.val(),
    'submodIcon': txtSubModIcon.val(),
    'submodPath': txtSubModPath.val(),
    'submodid': txtSubModModId.val()
  };
  console.log(data);
  (0,_admin_addAjax__WEBPACK_IMPORTED_MODULE_7__.addAjax)('/admin/submodel/list/add', data, SubModelCsrfToken.val());
  txtSubModName.val('');
  txtSubModPath.val('');
  txtSubModIcon.val('');
  txtSubModModId.val('');
});

//providers

var providerChoice = $('#providers');
var providerName = $('#provider_name');
var btnUpdateProvider = $('#btnUpdateProvider');
providerChoice.on('change', function () {
  var selectedValue = providerChoice.options[providerChoice.selectedIndex].value;
  console.log(selectedValue);
  // Display the selected value in the text box
  providerName.val(selectedValue);
});
btnUpdateProvider.on('click', function () {
  var data = {
    'providerId': providerChoice.val(),
    'providerName': providerName.val()
  };
  (0,_admin_updateAjax__WEBPACK_IMPORTED_MODULE_5__.updateAjax)('/admin/provider/update', data);
});

/***/ }),

/***/ "./assets/js/common.js":
/*!*****************************!*\
  !*** ./assets/js/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProds: () => (/* binding */ getProds),
/* harmony export */   makeReadOnly: () => (/* binding */ makeReadOnly),
/* harmony export */   toggleDivVisibility: () => (/* binding */ toggleDivVisibility),
/* harmony export */   toggleHiddenButton: () => (/* binding */ toggleHiddenButton)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


//contains common js functions

//toggle columns to be editable
// export const toggleEditable=(classButtons)=>{
//     let currentlyToggledRow = null;
//     Array.from(classButtons).forEach(function (button) {
//         button.addEventListener('click', function () {
//             const row = button.closest('tr');
//             const editableCells = row.querySelectorAll('.editable');
//             const saveBtn=row.querySelector('.saveBtn')
//
//             const isToggled = row.classList.contains('toggled');
//             Array.from(document.querySelectorAll('.toggled')).forEach(function (toggledRow) {
//                 const toggledEditableCells = toggledRow.querySelectorAll('.editable');
//                 toggledEditableCells.forEach(function (cell) {
//                     toggleEditable(cell);
//                 });
//                 toggleHiddenButton(saveBtn);
//                 toggledRow.classList.remove('toggled');
//             });
//             // Toggle the clicked row if it was not already toggled
//             if (!isToggled) {
//                 editableCells.forEach(function (cell) {
//                     toggleEditable(cell);
//                 });
//                 toggleHiddenButton(saveBtn);
//                 row.classList.add('toggled');
//             }
//
//         });
//
//     });
//    function toggleEditable(cell) {
//         const field = cell.dataset.field;
//
//         if (cell.querySelector('input')) {
//             // If an input field is present, switch back to text
//             const inputValue = cell.querySelector('input').value;
//             cell.innerHTML = inputValue;
//         } else {
//             // If no input field is present, switch to input
//             const currentValue = cell.textContent;
//             cell.innerHTML = `<input type="text" style="max-width: 100%;" name="${field}" id="${field}" value="${currentValue}">`;
//         }
//     }

//}
var toggleHiddenButton = function toggleHiddenButton(button) {
  if (button.style.display === 'none') {
    button.style.display = 'inline-block';
  } else {
    button.style.display = 'none';
  }
};
var makeReadOnly = function makeReadOnly(input) {
  if (input.hasAttribute('readonly')) {
    input.removeAttribute('readonly');
  } else {
    input.setAttribute('readonly', true);
  }
};
var toggleDivVisibility = function toggleDivVisibility(divId) {
  // Toggle the visibility of the div
  divId.style.display = divId.style.display === 'none' || divId.style.display === '' ? 'block' : 'none';
};

//get products based on select
var getProds = function getProds(prodId) {
  var retData;
  fetch('/user/prodbyid?prodId=' + prodId, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then(function (Response) {
    return Response.json();
  }).then(function (data) {
    return data;
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-4a97ab","vendors-node_modules_toastify-js_src_toastify_js-node_modules_core-js_modules_es_array_for-ea-81b809"], () => (__webpack_exec__("./assets/js/adminEventsListener.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osT0FBT0EsUUFBUSxDQUFDZCxJQUFJLENBQUMsQ0FBQztFQUMxQixDQUFDLENBQUMsQ0FDREYsSUFBSSxDQUFDLFVBQUFSLElBQUksRUFBRTtJQUNULE9BQU9BLElBQUk7RUFDZCxDQUFDLENBQUM7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2FkZEFqYXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL3VwZGF0ZUFqYXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL3VzZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbkV2ZW50c0xpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9mdW5jdGlvbiBoYW5kbGVzIGFqYXggcmVxdWVzdCBmb3IgYWRkaW5nXG5pbXBvcnQgVG9hc3RpZnkgZnJvbSBcInRvYXN0aWZ5LWpzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRBamF4PSh1cmwsZGF0YSxjc3JmKT0+e1xuICAgIGZldGNoKHVybCx7XG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOmNzcmZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH1cbiAgICApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XG5cbiAgICAgICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEuc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6J1N1Y2Nlc3MnICxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3IsXG4gICAgICAgICAgICAgICAgdGl0bGU6J2Vycm9yJyAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSlcbn0iLCIvL2Z1bmN0aW9uIGZvciBhamF4IHJlcXVlc3QgZm9yIHVwZGF0aW5nXG5cbmltcG9ydCBUb2FzdGlmeSBmcm9tIFwidG9hc3RpZnktanNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFqYXg9KHVybCxkYXRhKT0+e1xuICAgIGZldGNoKHVybCx7XG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfVxuICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSk9PntcblxuICAgICAgICAgICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3N1Y2Nlc3NmdWwgdXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6J1N1Y2Nlc3MnICxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3IsXG4gICAgICAgICAgICAgICAgdGl0bGU6J2Vycm9yJyAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSlcbn0iLCJpbXBvcnQgVG9hc3RpZnkgZnJvbSBcInRvYXN0aWZ5LWpzXCI7XG4vLyBmdW5jdGlvbiB0byBzZW5kIGFuIGFqYXggcmVxdWVzdCB0byBhZGQgbmV3IHVzZXJcbi8vdXBkYXRlIHVzZXIgaW5mb3JzXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyPSh1cmwsZGF0YSxjc3JmVG9rZW4pPT57XG4gICAgZmV0Y2godXJsLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtYXBwbGljYXRpb24nOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzpjc3JmVG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFJlc3BvbnNlPT57XG4gICAgICAgICAgICBpZighUmVzcG9uc2Uub2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhPT57XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogJ3VwZGF0ZWQgc3VjY2Vzc2Z1bGx5IScsXG4gICAgICAgICAgICAgICAgdGl0bGU6J1N1Y2Nlc3MnICxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgIHN0b3BPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6J0Vycm9yJyAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSlcbn1cblxuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQ9KHVybCxkYXRhLGNzcmZUb2tlbik9PntcbiAgICBmZXRjaCh1cmwsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICAnY29udGVudC1hcHBsaWNhdGlvbic6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOmNzcmZUb2tlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oUmVzcG9uc2U9PntcbiAgICAgICAgICAgIGlmKCFSZXNwb25zZS5vaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGE9PntcbiAgICAgICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAndXBkYXRlZCBzdWNjZXNzZnVsbHkhJyxcbiAgICAgICAgICAgICAgICB0aXRsZTonU3VjY2VzcycgLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTonRXJyb3InICxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICBzdG9wT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9KVxufSIsIi8vIGhhbmRsaW5nIGV2ZW50cyB0cmlnZ2VyZWQgYnkgYWRtaW5cbmltcG9ydCB7dXBkYXRlQWpheH0gZnJvbSBcIi4vYWRtaW4vdXBkYXRlQWpheFwiO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5pbXBvcnQgVG9hc3RpZnkgZnJvbSBcInRvYXN0aWZ5LWpzXCI7XG5cbmltcG9ydCB7YWRkQWpheH0gZnJvbSBcIi4vYWRtaW4vYWRkQWpheFwiO1xuaW1wb3J0IHttYWtlUmVhZE9ubHl9IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IHt0b2dnbGVEaXZWaXNpYmlsaXR5fSBmcm9tIFwiLi9jb21tb25cIjtcblxuLy90b2dnbGUgZGl2c1xuY29uc3QgdG9nZ2xlTGlzdD0kKCcjbGlzdE1vZGVsQ29udGFpbmVyJylcbmNvbnN0IGV2ZW50VG9nZ2xlTGlzdD0kKCcjdG9nZ2xlTGlzdCcpXG5ldmVudFRvZ2dsZUxpc3Qub24oJ2NsaWNrJywoKT0+e1xuICAgIHRvZ2dsZURpdlZpc2liaWxpdHkodG9nZ2xlTGlzdClcblxufSlcblxuY29uc3QgYWRkVG9nZ2xlPSQoJyNhZGRUb2dnbGUnKVxuY29uc3QgdG9nZ2xlQWRkPSQoJyN0b2dnbGVBZGQnKVxudG9nZ2xlQWRkLm9uKCdjbGljaycsKCk9PntcbiAgICB0b2dnbGVEaXZWaXNpYmlsaXR5KGFkZFRvZ2dsZSlcblxufSlcbi8vIGNhdGVnb3J5IGV2ZW50cyBzZWN0aW9uXG5cbi8vZGV0ZWN0aW5nIGNsaWNrc1xuY29uc3QgYnRuQWRkQ2F0PSQoJyNidG5fYWRkQ2F0Jyk7XG4vL2dldHRpbmcgZmllbGRzXG5jb25zdCB0eHRDYXROYW1lPSQoJyNjYXRlZ29yeV9uYW1lJylcbmNvbnN0IHR4dENhdERlc2M9JCgnI2NhdF9kZXNjJylcbmNvbnN0IGNzcmZUb2tlbj0kKCcjX2NzcmZfdG9rZW4nKVxuLy9ldmVudCBvZiBhZGRpbmcgbmV3IGNhdGVnb3J5XG5idG5BZGRDYXQub24oJ2NsaWNrJywoZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYodHh0Q2F0RGVzYy52YWwoKSAmJiB0eHRDYXROYW1lLnZhbCgpICkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ2NhdG5hbWUnOiB0eHRDYXROYW1lLnZhbCgpLFxuICAgICAgICAgICAgJ2Rlc2MnOiB0eHRDYXREZXNjLnZhbCgpXG4gICAgICAgIH1cbiAgICAgICAgYWRkQWpheCgnL2FkbWluL2NhdGVnb3J5L2FkZCcsIGRhdGEsY3NyZlRva2VuLnZhbCgpKTtcbiAgICAgICAgdHh0Q2F0TmFtZS52YWwoJycpO1xuICAgICAgICB0eHRDYXREZXNjLnZhbCgnJylcbiAgICB9ZWxzZXtcbiAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgdGV4dDogJ2ZpbGwgYWxsIGZpZWxkcyBwbGVhc2UnLFxuICAgICAgICAgICAgdGl0bGU6J2VtcHR5JyAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIGdyYXZpdHk6ICdjZW50ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2FybmluZycsXG4gICAgICAgICAgICBzdG9wT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgfVxufSlcblxuLy9jaGFuZ2UgZmllbGRzIG9mIGxpc3QgdG8gYmUgZWRpdGFibGVcbi8vZm9yIHByb2R1Y3RzXG4vL3VwZGF0ZVByb2RCdG5cbi8vIGNvbnN0IHNhdmVVcGRhdGVkUHJvZD0kKCcuc2F2ZUJ0bicpO1xuLy9cbi8vIEFycmF5LmZyb20oc2F2ZVVwZGF0ZWRQcm9kKS5mb3JFYWNoKCAoYnV0dG9uKT0+IHtcbi8vICAgICBjb25zdCBwcm9kTmFtZT0kKCcjcHJvZE5hbWUnKTtcbi8vICAgICBjb25zdCBwcm9kRGVzYz0kKCcjcHJvZERlc2MnKTtcbi8vICAgICBjb25zdCBwcm9kUHJpY2U9JCgnI3Byb2RQcmljZScpXG4vLyAgICAgY29uc3QgcHJvZFRheD0kKCcjcHJvZFRheCcpO1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgY29uc3QgZGF0YT17XG4vLyAgICAgICAgICAgICAncHJvZE5hbWUnOnByb2ROYW1lLmRhdGEoJ2ZpZWxkJyksXG4vLyAgICAgICAgICAgICAncHJvZERlc2MnOnByb2REZXNjLnZhbHVlLFxuLy8gICAgICAgICAgICAgJ3Byb2RQcmljZSc6cHJvZFByaWNlLnZhbHVlLFxuLy8gICAgICAgICAgICAgJ3Byb2RUYXgnOnByb2RUYXgudmFsdWUsXG4vLyAgICAgICAgICAgICAncHJvZElkJzpidXR0b24udmFsdWVcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gICAgIH0pO1xuLy8gfSk7XG5cbi8vYWRkIHByb2R1Y3RcbmNvbnN0IGJ0bkFkZFByb2Q9JCgnI2J0bl9hZGRQcm9kJyk7XG4vL2dldHRpbmcgZmllbGRzXG5jb25zdCB0eHRQcm9kTmFtZT0kKCcjcHJvZHVjdF9uYW1lJylcbmNvbnN0IHR4dFByb2RQcmljZT0kKCcjcHJpY2UnKVxuY29uc3QgdHh0UHJvZERlc2M9JCgnI2Rlc2NyaXB0aW9uJylcbmNvbnN0IHR4dFByb2RUYXg9JCgnI3RheCcpXG5jb25zdCB0eHRQcm9kQ2F0PSQoJyNjYXRlZ29yeScpXG5jb25zdCBzdG9yYWdlPSQoJyNzdG9yYWdlJylcbmNvbnN0IHByb2RJbWFnZT0kKCcjcHJvZEltYWdlJylcbmNvbnN0IHByb2RDc3JmVG9rZW49JCgnI19jc3JmX3Rva2VuJylcbi8vZXZlbnQgb2YgYWRkaW5nIG5ldyBjYXRlZ29yeVxuYnRuQWRkUHJvZC5vbignY2xpY2snLChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0eHRQcm9kTmFtZS52YWwoKSAmJiB0eHRQcm9kUHJpY2UudmFsKCkgJiYgdHh0UHJvZFRheC52YWwoKSAmJiB0eHRQcm9kRGVzYy52YWwoKSApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdwcm9kTmFtZSc6IHR4dFByb2ROYW1lLnZhbCgpLFxuICAgICAgICAgICAgJ2Rlc2MnOiB0eHRQcm9kRGVzYy52YWwoKSxcbiAgICAgICAgICAgICdwcmljZSc6dHh0UHJvZFByaWNlLnZhbCgpLFxuICAgICAgICAgICAgJ3RheCc6dHh0UHJvZFRheC52YWwoKSxcbiAgICAgICAgICAgICdjYXRlZ29yeSc6dHh0UHJvZENhdC52YWwoKSxcbiAgICAgICAgICAgICdzdG9yYWdlJzpzdG9yYWdlLnZhbCgpLFxuICAgICAgICAgICAgJ3Byb2RJbWFnZSc6cHJvZEltYWdlLnByb3AoJ2ZpbGVzJylbMF1cbiAgICAgICAgfVxuICAgICAgICBhZGRBamF4KCcvYWRtaW4vcHJvZHVjdC9hZGQnLCBkYXRhLHByb2RDc3JmVG9rZW4udmFsKCkpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfWVsc2V7XG4gICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgIHRleHQ6ICdmaWxsIGFsbCBmaWVsZHMgcGxlYXNlJyxcbiAgICAgICAgICAgIHRpdGxlOidlbXB0eScgLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICBncmF2aXR5OiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgIH1cbn0pXG5cbi8vdXBkYXRlIHVzZXJcbmltcG9ydCB7dXBkYXRlVXNlcn0gZnJvbSBcIi4vYWRtaW4vdXNlcnNcIjtcblxuY29uc3QgdXBkYXRlaW5mb0NsaWNrPSQoJyN1cGRhdGVJbmZvJyk7XG5jb25zdCBzYXZlSW5mb0NoYW5nZXM9JCgnI3NhdmVVcGRhdGVkVXNlcicpO1xuY29uc3QgdXNlckluZm89JCgnLnVzZXJJbmZvJylcbnVwZGF0ZWluZm9DbGljay5vbignY2xpY2snLCgpPT57XG4gICAgLy8gdG9nZ2xlSGlkZGVuQnV0dG9uKHVwZGF0ZWluZm9DbGljayk7XG4gICAgQXJyYXkuZnJvbSh1c2VySW5mbykuZm9yRWFjaCh0eHRJbnB1dD0+e1xuICAgICAgICBtYWtlUmVhZE9ubHkodHh0SW5wdXQpXG4gICAgfSlcbiAgICBpZih1cGRhdGVpbmZvQ2xpY2sudGV4dCgndXBkYXRlJykpXG4gICAge1xuICAgICAgICB1cGRhdGVpbmZvQ2xpY2sudGV4dCgnY2FuY2VsJylcbiAgICAgICAgc2F2ZUluZm9DaGFuZ2VzLnNob3coKTtcblxuICAgIH1lbHNle1xuICAgICAgICB1cGRhdGVpbmZvQ2xpY2sudGV4dCgndXBkYXRlJylcbiAgICAgICAgc2F2ZUluZm9DaGFuZ2VzLmhpZGUoKTtcblxuICAgIH1cbn0pXG5cbi8vZGF0YSB0byBiZSB1cGRhdGVkXG5jb25zdCB0eHRVc2VybmFtZT0kKCcjdHh0VXNlcm5hbWUnKTtcbmNvbnN0IHR4dEZpcnN0TmFtZT0kKCcjdHh0Rmlyc3ROYW1lJyk7XG5jb25zdCB0eHRMYXN0TmFtZT0kKCcjdHh0TGFzdE5hbWUnKTtcbmNvbnN0IHR4dEFkZHJlc3M9JCgnI3R4dEFkZHJlc3MnKTtcbmNvbnN0IHR4dFBob25lPSQoJyN0eHRQaG9uZScpO1xuY29uc3QgdHh0Q2l0eT0kKCcjdHh0Q2l0eScpO1xuY29uc3QgdXNlclBpYz0kKCcjUHJvZmlsZVBpY3R1cmVJbnB1dCcpXG5jb25zdCBQcm9maWxlY3NyZlRva2VuPSQoJyNfY3NyZl90b2tlbl91c2VyVXBkYXRlJylcbnNhdmVJbmZvQ2hhbmdlcy5vbignY2xpY2snLCgpPT57XG4gICAgbGV0IGRhdGE9e1xuICAgICAgICAnaWQnOnNhdmVJbmZvQ2hhbmdlcy5kYXRhKCd1c2VySWQnKSxcbiAgICAgICAgJ3VzZXJuYW1lJzp0eHRVc2VybmFtZS52YWwoKSxcbiAgICAgICAgJ2ZpcnN0bmFtZSc6dHh0Rmlyc3ROYW1lLnZhbCgpLFxuICAgICAgICAnbGFzdG5hbWUnOnR4dExhc3ROYW1lLnZhbCgpLFxuICAgICAgICAnYWRkcmVzcyc6dHh0QWRkcmVzcy52YWwoKSxcbiAgICAgICAgJ3Bob25lJzp0eHRQaG9uZS52YWwoKSxcbiAgICAgICAgJ2NpdHknOnR4dENpdHkudmFsKCksXG4gICAgICAgICdwaWN0dXJlJzp1c2VyUGljLnByb3AoJ2ZpbGVzJylbMF1cbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YS5waWN0dXJlKVxuICAgIHVwZGF0ZVVzZXIoJy91c2VyL3Byb2ZpbGUvdXBkYXRlJyxkYXRhLFByb2ZpbGVjc3JmVG9rZW4udmFsKCkpO1xuICAgIEFycmF5LmZyb20odXNlckluZm8pLmZvckVhY2godHh0SW5wdXQ9PntcbiAgICAgICAgbWFrZVJlYWRPbmx5KHR4dElucHV0KVxuICAgIH0pXG4gICAgaWYodXBkYXRlaW5mb0NsaWNrLnRleHQoJ2NhbmNlbCcpKVxuICAgIHtcbiAgICAgICAgdXBkYXRlaW5mb0NsaWNrLnRleHQoJ3VwZGF0ZScpXG4gICAgICAgIHNhdmVJbmZvQ2hhbmdlcy5oaWRlKCk7XG4gICAgfWVsc2V7XG4gICAgICAgIHVwZGF0ZWluZm9DbGljay50ZXh0KCdjYW5jZWwnKVxuXG4gICAgfVxufSlcblxuXG4vL2FjdGlvbnMgZm9yIG1vZGVsXG5cbmNvbnN0IGFkZE1vZGVsPSQoJyNidG5fYWRkTW9kZWwnKTtcbmNvbnN0IHR4dE1vZE5hbWU9JCgnI21vZGVsX25hbWUnKTtcbmNvbnN0IHR4dE1vZFBhdGg9JCgnI21vZGVsX3BhdGgnKTtcbmNvbnN0IHR4dE1vZEljb249JCgnI21vZGVsX2ljb24nKTtcbmNvbnN0IHR4dE1vZFJvbGU9JCgnI21vZGVsX3JvbGUnKTtcbmNvbnN0IE1vZGVsQ3NyZlRva2VuPSQoJyNfY3NyZl90b2tlbl9hZGRtb2RlbCcpXG5hZGRNb2RlbC5vbignY2xpY2snLCgpPT57XG4gICAgY29uc3QgZGF0YT17XG4gICAgICAgICdtb2ROYW1lJzp0eHRNb2ROYW1lLnZhbCgpLFxuICAgICAgICAnbW9kSWNvbic6dHh0TW9kSWNvbi52YWwoKSxcbiAgICAgICAgJ21vZFBhdGgnOnR4dE1vZFBhdGgudmFsKCksXG4gICAgICAgICdtb2RSb2xlJzp0eHRNb2RSb2xlLnZhbCgpXG4gICAgfVxuICAgIGFkZEFqYXgoJy9hZG1pbi9tb2RlbC9saXN0L2FkZCcsZGF0YSxNb2RlbENzcmZUb2tlbi52YWwoKSk7XG4gICAgdHh0TW9kTmFtZS52YWwoJycpXG4gICAgdHh0TW9kUGF0aC52YWwoJycpXG4gICAgdHh0TW9kSWNvbi52YWwoJycpXG4gICAgdHh0TW9kUm9sZS52YWwoJycpXG59KVxuXG5cblxuXG4vL3N1YiBtb2RlbCBhY3Rpb25zXG5cbmNvbnN0IGFkZFN1Yk1vZGVsPSQoJyNidG5fYWRkU3ViTW9kZWwnKTtcbmNvbnN0IHR4dFN1Yk1vZE5hbWU9JCgnI3N1Yl9tb2RlbF9uYW1lJyk7XG5jb25zdCB0eHRTdWJNb2RQYXRoPSQoJyNzdWJfbW9kZWxfcGF0aCcpO1xuY29uc3QgdHh0U3ViTW9kSWNvbj0kKCcjc3ViX21vZGVsX2ljb24nKTtcbmNvbnN0IHR4dFN1Yk1vZE1vZElkPSQoJyNzdWJfbW9kZWxfbW9kJyk7XG5jb25zdCBTdWJNb2RlbENzcmZUb2tlbj0kKCcjX2NzcmZfdG9rZW5fYWRkc3VibW9kZWwnKVxuYWRkU3ViTW9kZWwub24oJ2NsaWNrJywoKT0+e1xuICAgIGNvbnN0IGRhdGE9e1xuICAgICAgICAnc3VibW9kTmFtZSc6dHh0U3ViTW9kTmFtZS52YWwoKSxcbiAgICAgICAgJ3N1Ym1vZEljb24nOnR4dFN1Yk1vZEljb24udmFsKCksXG4gICAgICAgICdzdWJtb2RQYXRoJzp0eHRTdWJNb2RQYXRoLnZhbCgpLFxuICAgICAgICAnc3VibW9kaWQnOnR4dFN1Yk1vZE1vZElkLnZhbCgpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgYWRkQWpheCgnL2FkbWluL3N1Ym1vZGVsL2xpc3QvYWRkJyxkYXRhLFN1Yk1vZGVsQ3NyZlRva2VuLnZhbCgpKTtcbiAgICB0eHRTdWJNb2ROYW1lLnZhbCgnJylcbiAgICB0eHRTdWJNb2RQYXRoLnZhbCgnJylcbiAgICB0eHRTdWJNb2RJY29uLnZhbCgnJylcbiAgICB0eHRTdWJNb2RNb2RJZC52YWwoJycpXG59KVxuXG5cbi8vcHJvdmlkZXJzXG5cbmNvbnN0IHByb3ZpZGVyQ2hvaWNlPSQoJyNwcm92aWRlcnMnKVxuY29uc3QgcHJvdmlkZXJOYW1lPSQoJyNwcm92aWRlcl9uYW1lJylcbmNvbnN0IGJ0blVwZGF0ZVByb3ZpZGVyPSQoJyNidG5VcGRhdGVQcm92aWRlcicpXG5wcm92aWRlckNob2ljZS5vbignY2hhbmdlJywoKT0+e1xuICAgIGxldCBzZWxlY3RlZFZhbHVlID0gcHJvdmlkZXJDaG9pY2Uub3B0aW9uc1twcm92aWRlckNob2ljZS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFZhbHVlKVxuICAgIC8vIERpc3BsYXkgdGhlIHNlbGVjdGVkIHZhbHVlIGluIHRoZSB0ZXh0IGJveFxuICAgIHByb3ZpZGVyTmFtZS52YWwoc2VsZWN0ZWRWYWx1ZSlcbn0pXG5idG5VcGRhdGVQcm92aWRlci5vbignY2xpY2snLCgpPT57XG4gICAgY29uc3QgZGF0YT17XG4gICAgICAgICdwcm92aWRlcklkJzpwcm92aWRlckNob2ljZS52YWwoKSxcbiAgICAgICAgJ3Byb3ZpZGVyTmFtZSc6cHJvdmlkZXJOYW1lLnZhbCgpXG4gICAgfVxuXG4gICAgdXBkYXRlQWpheCgnL2FkbWluL3Byb3ZpZGVyL3VwZGF0ZScsZGF0YSk7XG59KSIsIi8vY29udGFpbnMgY29tbW9uIGpzIGZ1bmN0aW9uc1xuXG4vL3RvZ2dsZSBjb2x1bW5zIHRvIGJlIGVkaXRhYmxlXG4vLyBleHBvcnQgY29uc3QgdG9nZ2xlRWRpdGFibGU9KGNsYXNzQnV0dG9ucyk9Pntcbi8vICAgICBsZXQgY3VycmVudGx5VG9nZ2xlZFJvdyA9IG51bGw7XG4vLyAgICAgQXJyYXkuZnJvbShjbGFzc0J1dHRvbnMpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuLy8gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICBjb25zdCByb3cgPSBidXR0b24uY2xvc2VzdCgndHInKTtcbi8vICAgICAgICAgICAgIGNvbnN0IGVkaXRhYmxlQ2VsbHMgPSByb3cucXVlcnlTZWxlY3RvckFsbCgnLmVkaXRhYmxlJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBzYXZlQnRuPXJvdy5xdWVyeVNlbGVjdG9yKCcuc2F2ZUJ0bicpXG4vL1xuLy8gICAgICAgICAgICAgY29uc3QgaXNUb2dnbGVkID0gcm93LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpO1xuLy8gICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlZCcpKS5mb3JFYWNoKGZ1bmN0aW9uICh0b2dnbGVkUm93KSB7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgdG9nZ2xlZEVkaXRhYmxlQ2VsbHMgPSB0b2dnbGVkUm93LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0YWJsZScpO1xuLy8gICAgICAgICAgICAgICAgIHRvZ2dsZWRFZGl0YWJsZUNlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoY2VsbCk7XG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgICAgdG9nZ2xlSGlkZGVuQnV0dG9uKHNhdmVCdG4pO1xuLy8gICAgICAgICAgICAgICAgIHRvZ2dsZWRSb3cuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGNsaWNrZWQgcm93IGlmIGl0IHdhcyBub3QgYWxyZWFkeSB0b2dnbGVkXG4vLyAgICAgICAgICAgICBpZiAoIWlzVG9nZ2xlZCkge1xuLy8gICAgICAgICAgICAgICAgIGVkaXRhYmxlQ2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShjZWxsKTtcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICB0b2dnbGVIaWRkZW5CdXR0b24oc2F2ZUJ0bik7XG4vLyAgICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZWQnKTtcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIH0pO1xuLy9cbi8vICAgICB9KTtcbi8vICAgIGZ1bmN0aW9uIHRvZ2dsZUVkaXRhYmxlKGNlbGwpIHtcbi8vICAgICAgICAgY29uc3QgZmllbGQgPSBjZWxsLmRhdGFzZXQuZmllbGQ7XG4vL1xuLy8gICAgICAgICBpZiAoY2VsbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKSB7XG4vLyAgICAgICAgICAgICAvLyBJZiBhbiBpbnB1dCBmaWVsZCBpcyBwcmVzZW50LCBzd2l0Y2ggYmFjayB0byB0ZXh0XG4vLyAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gY2VsbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuLy8gICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBpbnB1dFZhbHVlO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgLy8gSWYgbm8gaW5wdXQgZmllbGQgaXMgcHJlc2VudCwgc3dpdGNoIHRvIGlucHV0XG4vLyAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjZWxsLnRleHRDb250ZW50O1xuLy8gICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7XCIgbmFtZT1cIiR7ZmllbGR9XCIgaWQ9XCIke2ZpZWxkfVwiIHZhbHVlPVwiJHtjdXJyZW50VmFsdWV9XCI+YDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy99XG5leHBvcnQgY29uc3QgdG9nZ2xlSGlkZGVuQnV0dG9uPShidXR0b24pPT4ge1xuICAgIGlmIChidXR0b24uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbWFrZVJlYWRPbmx5PShpbnB1dCk9PntcbiAgICBpZihpbnB1dC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jykpe1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5JylcbiAgICB9ZWxzZSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLHRydWUpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlRGl2VmlzaWJpbGl0eT0oZGl2SWQpPT4ge1xuICAgIC8vIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZGl2XG4gICAgZGl2SWQuc3R5bGUuZGlzcGxheSA9IChkaXZJZC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgZGl2SWQuc3R5bGUuZGlzcGxheSA9PT0gJycpID8gJ2Jsb2NrJyA6ICdub25lJztcbn1cblxuXG4vL2dldCBwcm9kdWN0cyBiYXNlZCBvbiBzZWxlY3RcbmV4cG9ydCBjb25zdCBnZXRQcm9kcz0ocHJvZElkKT0+e1xuXG4gICAgbGV0IHJldERhdGE7XG4gICAgZmV0Y2goJy91c2VyL3Byb2RieWlkP3Byb2RJZD0nK3Byb2RJZCxcbiAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFJlc3BvbnNlPT57XG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhPT57XG4gICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxufSJdLCJuYW1lcyI6WyJUb2FzdGlmeSIsImFkZEFqYXgiLCJ1cmwiLCJkYXRhIiwiY3NyZiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInRleHQiLCJzdWNjZXNzIiwidGl0bGUiLCJkdXJhdGlvbiIsImdyYXZpdHkiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsInN0b3BPbkZvY3VzIiwic2hvd1RvYXN0IiwiZXJyb3IiLCJ1cGRhdGVBamF4IiwidXBkYXRlVXNlciIsImNzcmZUb2tlbiIsIlJlc3BvbnNlIiwib2siLCJFcnJvciIsInRvU3RyaW5nIiwiY2hhbmdlUGFzc3dvcmQiLCIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsIm1ha2VSZWFkT25seSIsInRvZ2dsZURpdlZpc2liaWxpdHkiLCJ0b2dnbGVMaXN0IiwiZXZlbnRUb2dnbGVMaXN0Iiwib24iLCJhZGRUb2dnbGUiLCJ0b2dnbGVBZGQiLCJidG5BZGRDYXQiLCJ0eHRDYXROYW1lIiwidHh0Q2F0RGVzYyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbCIsImJ0bkFkZFByb2QiLCJ0eHRQcm9kTmFtZSIsInR4dFByb2RQcmljZSIsInR4dFByb2REZXNjIiwidHh0UHJvZFRheCIsInR4dFByb2RDYXQiLCJzdG9yYWdlIiwicHJvZEltYWdlIiwicHJvZENzcmZUb2tlbiIsInByb3AiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZWluZm9DbGljayIsInNhdmVJbmZvQ2hhbmdlcyIsInVzZXJJbmZvIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInR4dElucHV0Iiwic2hvdyIsImhpZGUiLCJ0eHRVc2VybmFtZSIsInR4dEZpcnN0TmFtZSIsInR4dExhc3ROYW1lIiwidHh0QWRkcmVzcyIsInR4dFBob25lIiwidHh0Q2l0eSIsInVzZXJQaWMiLCJQcm9maWxlY3NyZlRva2VuIiwiY29uc29sZSIsImxvZyIsInBpY3R1cmUiLCJhZGRNb2RlbCIsInR4dE1vZE5hbWUiLCJ0eHRNb2RQYXRoIiwidHh0TW9kSWNvbiIsInR4dE1vZFJvbGUiLCJNb2RlbENzcmZUb2tlbiIsImFkZFN1Yk1vZGVsIiwidHh0U3ViTW9kTmFtZSIsInR4dFN1Yk1vZFBhdGgiLCJ0eHRTdWJNb2RJY29uIiwidHh0U3ViTW9kTW9kSWQiLCJTdWJNb2RlbENzcmZUb2tlbiIsInByb3ZpZGVyQ2hvaWNlIiwicHJvdmlkZXJOYW1lIiwiYnRuVXBkYXRlUHJvdmlkZXIiLCJzZWxlY3RlZFZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsInRvZ2dsZUhpZGRlbkJ1dHRvbiIsImJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsImlucHV0IiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZGl2SWQiLCJnZXRQcm9kcyIsInByb2RJZCIsInJldERhdGEiXSwic291cmNlUm9vdCI6IiJ9