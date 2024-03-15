(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var jquery_ui_dist_jquery_ui_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/dist/jquery-ui.min */ "./node_modules/jquery-ui/dist/jquery-ui.min.js");
/* harmony import */ var jquery_ui_dist_jquery_ui_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_dist_jquery_ui_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/theme */ "./assets/js/theme.js");
/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_bs_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/bs-init */ "./assets/js/bs-init.js");
/* harmony import */ var _js_bs_init__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_bs_init__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_user_makeOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/user/makeOrder */ "./assets/js/user/makeOrder.js");
/* harmony import */ var _js_user_makeOrder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_user_makeOrder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_multiForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/multiForm */ "./assets/js/multiForm.js");
/* harmony import */ var _js_multiForm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_multiForm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_pictures_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/pictures/icon.png */ "./public/pictures/icon.png");
/* harmony import */ var _js_user_mdp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/user/mdp */ "./assets/js/user/mdp.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;









var fullHeight = function fullHeight() {
  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function () {
    $('.js-fullheight').css('height', $(window).height());
  });
};
fullHeight();
$('#sidebarCollapse').on('click', function () {
  $('#sidebar').toggleClass('active');
});

/***/ }),

/***/ "./assets/js/admin/users.js":
/*!**********************************!*\
  !*** ./assets/js/admin/users.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/js/bs-init.js":
/*!******************************!*\
  !*** ./assets/js/bs-init.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
if (window.innerWidth < 768) {
  [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
    elem.classList.remove('animated');
    elem.removeAttribute('data-bss-hover-animate');
    elem.removeAttribute('data-aos');
    elem.removeAttribute('data-bss-parallax-bg');
    elem.removeAttribute('data-bss-scroll-zoom');
  });
}
document.addEventListener('DOMContentLoaded', function () {
  if ('AOS' in window) {
    AOS.init();
  }
}, false);

/***/ }),

/***/ "./assets/js/multiForm.js":
/*!********************************!*\
  !*** ./assets/js/multiForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("step");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("makeOrder").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("makeOrder").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("step");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("signUpForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("step");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}
function fixStepIndicator(n) {
  //removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("stepIndicator");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
var nextBtn = $('#nextBtn');
nextBtn.on('click', function () {
  nextPrev(1);
});
var prevBtn = $('#prevBtn');
prevBtn.on('click', function () {
  nextPrev(-1);
});

/***/ }),

/***/ "./assets/js/theme.js":
/*!****************************!*\
  !*** ./assets/js/theme.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
(function () {
  "use strict";

  // Start of use strict
  var sidebar = document.querySelector('.sidebar');
  var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');
  if (sidebar) {
    var collapseEl = sidebar.querySelector('.collapse');
    var collapseElementList = [].slice.call(document.querySelectorAll('.sidebar .collapse'));
    var sidebarCollapseList = collapseElementList.map(function (collapseEl) {
      return new bootstrap.Collapse(collapseEl, {
        toggle: false
      });
    });
    var _iterator = _createForOfIteratorHelper(sidebarToggles),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var toggle = _step.value;
        // Toggle the side navigation
        toggle.addEventListener('click', function (e) {
          document.body.classList.toggle('sidebar-toggled');
          sidebar.classList.toggle('toggled');
          if (sidebar.classList.contains('toggled')) {
            var _iterator3 = _createForOfIteratorHelper(sidebarCollapseList),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var bsCollapse = _step3.value;
                bsCollapse.hide();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          ;
        });
      }

      // Close any open menu accordions when window is resized below 768px
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    window.addEventListener('resize', function () {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw < 768) {
        var _iterator2 = _createForOfIteratorHelper(sidebarCollapseList),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var bsCollapse = _step2.value;
            bsCollapse.hide();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      ;
    });
  }

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

  var fixedNaigation = document.querySelector('body.fixed-nav .sidebar');
  if (fixedNaigation) {
    fixedNaigation.on('mousewheel DOMMouseScroll wheel', function (e) {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  }
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    // Scroll to top button appear
    window.addEventListener('scroll', function () {
      var scrollDistance = window.pageYOffset;

      //check if user is scrolling up
      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }
})(); // End of use strict

/***/ }),

/***/ "./assets/js/user/makeOrder.js":
/*!*************************************!*\
  !*** ./assets/js/user/makeOrder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;

//display product info
var selectedProd = $('#selectedProd');
var price = $('#price');
var description = $('#description');
var tax = $('#tax');
var total = $('#total');
var visa = $('#Visa');
var cash = $('#cash');
var masterCard = $('#MasterCard');
var paymentMethod = $('#paymentMethod');
var quantity = $('#quantity');
var discount = $('#discount');
var selectedCat = $('#selectedCat');
//select category and display it products
selectedCat.on('click', function () {
  var catId = selectedCat.val();
  price.val('');
  description.val('');
  tax.val('');
  fetch('/user/prodbycat?cat=' + catId, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then(function (Response) {
    return Response.json();
  }).then(function (data) {
    console.log(data);
  });
});
//select prod and display data
selectedProd.on('click', function () {
  var prodId = selectedProd.val();
  price.val('');
  description.val('');
  tax.val('');
  fetch('/user/prodbyid?prodId=' + prodId, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then(function (Response) {
    return Response.json();
  }).then(function (data) {
    price.val(data.price);
    description.val(data.desc);
    tax.val(data.tax);
  });
});
//
var method = '';
visa.on('click', function () {
  method = 'Visa';
  document.getElementById("cashContainer").style.display = "none";
  document.getElementById("bankContainer").style.display = "inline";
});
masterCard.on('click', function () {
  method = 'MasterCard';
  document.getElementById("cashContainer").style.display = "none";
  document.getElementById("bankContainer").style.display = "inline";
});
cash.on('click', function () {
  method = 'cash';
  document.getElementById("bankContainer").style.display = "none";
  document.getElementById("cashContainer").style.display = "inline";
});

//display total on quantity change

quantity.on('change', function () {
  var data = {
    'quantity': quantity.val(),
    'tax': tax.val(),
    'prodId': selectedProd.val()
  };
  fetch('/user/order/total', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (Response) {
    return Response.json();
  }).then(function (data) {
    total.val(data.total);
    discount.val(data.discount);
    quantity.val(data.quantity);
  });
});

//making order
var rest = $('#giveBack');
var amount = $('#payed');
var accNumber = $('#accNumber');
var expireDate = $('#expDate');
var makeOrder = $("#makeOrder");
var csrfToken = $("#_csrf_token_make_order");
var userid = $('#selectUser');
amount.on('change', function () {
  var restt = amount.val() - total.val();
  rest.val(restt);
});
makeOrder.on('click', function () {
  var data = {
    'prodId': selectedProd.val(),
    'total': total.val(),
    'discount': discount.val(),
    'toGive': amount.val(),
    'rest': rest.val(),
    'method': method,
    'quantity': quantity.val(),
    'expDate': expireDate.val(),
    'accNumber': accNumber.val(),
    'userId': userid.val()
  };
  fetch('/user/orders/makeOrder', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-CSRF-TOKEN': csrfToken.val()
    },
    body: JSON.stringify(data)
  }).then(function (Response) {
    return Response.json();
  }).then(function (data) {
    window.open('http://inventory.test/user/pdf?orderId=' + data.orderId, '_blank');
    location.reload(true);
  });
});

/***/ }),

/***/ "./assets/js/user/mdp.js":
/*!*******************************!*\
  !*** ./assets/js/user/mdp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/users */ "./assets/js/admin/users.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var changepwd = $('#change_password');
var newpwd = $('#newPassword');
var confirmpwd = $('#confirmPassword');
var csrdToken = $('#_csrf_token_pwd');
// changepwd.on('click',()=>{
//     const data={
//         'userId':changepwd.data('userId'),
//         'newPwd':newpwd.val()
//     }
//     changepwd('/user/profile/changepsd',data,csrdToken.val())
// })

/***/ }),

/***/ "./public/pictures/icon.png":
/*!**********************************!*\
  !*** ./public/pictures/icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icon.8522c877.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_expo-4a97ab","vendors-node_modules_toastify-js_src_toastify_js-node_modules_core-js_modules_es_array_for-ea-81b809","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-e86909","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery-ui_dist_jquery-ui-a31bcc"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW4vdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JzLWluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL211bHRpRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3VzZXIvbWFrZU9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91c2VyL21kcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcbmltcG9ydCAnYm9vdHN0cmFwJ1xuaW1wb3J0ICdqcXVlcnktdWkvZGlzdC9qcXVlcnktdWkubWluJ1xuaW1wb3J0ICcuL2pzL3RoZW1lJztcbmltcG9ydCAgJy4vanMvYnMtaW5pdCc7XG5pbXBvcnQgJy4vanMvdXNlci9tYWtlT3JkZXInO1xuaW1wb3J0ICcuL2pzL211bHRpRm9ybSdcbmltcG9ydCAnLi4vcHVibGljL3BpY3R1cmVzL2ljb24ucG5nJ1xuaW1wb3J0ICdjaGFydC5qcydcbmltcG9ydCAnLi9qcy91c2VyL21kcCdcblxubGV0IGZ1bGxIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICQoJy5qcy1mdWxsaGVpZ2h0JykuY3NzKCdoZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmpzLWZ1bGxoZWlnaHQnKS5jc3MoJ2hlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgfSk7XG5cbn07XG5mdWxsSGVpZ2h0KCk7XG5cbiQoJyNzaWRlYmFyQ29sbGFwc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3NpZGViYXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuXG4iLCJpbXBvcnQgVG9hc3RpZnkgZnJvbSBcInRvYXN0aWZ5LWpzXCI7XG4vLyBmdW5jdGlvbiB0byBzZW5kIGFuIGFqYXggcmVxdWVzdCB0byBhZGQgbmV3IHVzZXJcbi8vdXBkYXRlIHVzZXIgaW5mb3JzXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyPSh1cmwsZGF0YSxjc3JmVG9rZW4pPT57XG4gICAgZmV0Y2godXJsLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtYXBwbGljYXRpb24nOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzpjc3JmVG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFJlc3BvbnNlPT57XG4gICAgICAgICAgICBpZighUmVzcG9uc2Uub2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhPT57XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogJ3VwZGF0ZWQgc3VjY2Vzc2Z1bGx5IScsXG4gICAgICAgICAgICAgICAgdGl0bGU6J1N1Y2Nlc3MnICxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgIHN0b3BPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6J0Vycm9yJyAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSlcbn1cblxuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQ9KHVybCxkYXRhLGNzcmZUb2tlbik9PntcbiAgICBmZXRjaCh1cmwsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICAnY29udGVudC1hcHBsaWNhdGlvbic6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOmNzcmZUb2tlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oUmVzcG9uc2U9PntcbiAgICAgICAgICAgIGlmKCFSZXNwb25zZS5vaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGE9PntcbiAgICAgICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAndXBkYXRlZCBzdWNjZXNzZnVsbHkhJyxcbiAgICAgICAgICAgICAgICB0aXRsZTonU3VjY2VzcycgLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgICAgIGdyYXZpdHk6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICAgICAgc3RvcE9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XG4gICAgICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTonRXJyb3InICxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgICAgICBncmF2aXR5OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICBzdG9wT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgICB9KVxufSIsIlxuaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG5cdFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnNzLWRpc2FibGVkLW1vYmlsZV0nKSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuXHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ic3MtaG92ZXItYW5pbWF0ZScpO1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFvcycpO1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWJzcy1wYXJhbGxheC1iZycpO1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWJzcy1zY3JvbGwtem9vbScpO1xuXHR9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXHRpZiAoJ0FPUycgaW4gd2luZG93KSB7XG5cdFx0QU9TLmluaXQoKTtcblx0fVxufSwgZmFsc2UpOyIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcbmxldCBjdXJyZW50VGFiID0gMDsgLy8gQ3VycmVudCB0YWIgaXMgc2V0IHRvIGJlIHRoZSBmaXJzdCB0YWIgKDApXG5zaG93VGFiKGN1cnJlbnRUYWIpOyAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHRhYlxuXG5mdW5jdGlvbiBzaG93VGFiKG4pIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgZGlzcGxheSB0aGUgc3BlY2lmaWVkIHRhYiBvZiB0aGUgZm9ybS4uLlxuICAgIGxldCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0ZXBcIik7XG4gICAgeFtuXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vLi4uIGFuZCBmaXggdGhlIFByZXZpb3VzL05leHQgYnV0dG9uczpcbiAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldkJ0blwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFrZU9yZGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldkJ0blwiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICB9XG4gICAgaWYgKG4gPT0gKHgubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWtlT3JkZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dEJ0blwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRCdG5cIikuaW5uZXJIVE1MID0gXCJOZXh0XCI7XG4gICAgfVxuICAgIC8vLi4uIGFuZCBydW4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgZGlzcGxheSB0aGUgY29ycmVjdCBzdGVwIGluZGljYXRvcjpcbiAgICBmaXhTdGVwSW5kaWNhdG9yKG4pXG59XG5cbmZ1bmN0aW9uIG5leHRQcmV2KG4pIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgZmlndXJlIG91dCB3aGljaCB0YWIgdG8gZGlzcGxheVxuICAgIGxldCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0ZXBcIik7XG4gICAgLy8gRXhpdCB0aGUgZnVuY3Rpb24gaWYgYW55IGZpZWxkIGluIHRoZSBjdXJyZW50IHRhYiBpcyBpbnZhbGlkOlxuICAgIGlmIChuID09IDEgJiYgIXZhbGlkYXRlRm9ybSgpKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gSGlkZSB0aGUgY3VycmVudCB0YWI6XG4gICAgeFtjdXJyZW50VGFiXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gSW5jcmVhc2Ugb3IgZGVjcmVhc2UgdGhlIGN1cnJlbnQgdGFiIGJ5IDE6XG4gICAgY3VycmVudFRhYiA9IGN1cnJlbnRUYWIgKyBuO1xuICAgIC8vIGlmIHlvdSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgZm9ybS4uLlxuICAgIGlmIChjdXJyZW50VGFiID49IHgubGVuZ3RoKSB7XG4gICAgICAgIC8vIC4uLiB0aGUgZm9ybSBnZXRzIHN1Ym1pdHRlZDpcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBGb3JtXCIpLnN1Ym1pdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgZGlzcGxheSB0aGUgY29ycmVjdCB0YWI6XG4gICAgc2hvd1RhYihjdXJyZW50VGFiKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gZGVhbHMgd2l0aCB2YWxpZGF0aW9uIG9mIHRoZSBmb3JtIGZpZWxkc1xuICAgIGxldCB4LCB5LCBpLCB2YWxpZCA9IHRydWU7XG4gICAgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGVwXCIpO1xuICAgIHkgPSB4W2N1cnJlbnRUYWJdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIik7XG4gICAgLy8gQSBsb29wIHRoYXQgY2hlY2tzIGV2ZXJ5IGlucHV0IGZpZWxkIGluIHRoZSBjdXJyZW50IHRhYjpcbiAgICBmb3IgKGkgPSAwOyBpIDwgeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBJZiBhIGZpZWxkIGlzIGVtcHR5Li4uXG4gICAgICAgIGlmICh5W2ldLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIGFkZCBhbiBcImludmFsaWRcIiBjbGFzcyB0byB0aGUgZmllbGQ6XG4gICAgICAgICAgICB5W2ldLmNsYXNzTmFtZSArPSBcIiBpbnZhbGlkXCI7XG4gICAgICAgICAgICAvLyBhbmQgc2V0IHRoZSBjdXJyZW50IHZhbGlkIHN0YXR1cyB0byBmYWxzZVxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB0aGUgdmFsaWQgc3RhdHVzIGlzIHRydWUsIG1hcmsgdGhlIHN0ZXAgYXMgZmluaXNoZWQgYW5kIHZhbGlkOlxuICAgIGlmICh2YWxpZCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RlcEluZGljYXRvclwiKVtjdXJyZW50VGFiXS5jbGFzc05hbWUgKz0gXCIgZmluaXNoXCI7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDsgLy8gcmV0dXJuIHRoZSB2YWxpZCBzdGF0dXNcbn1cblxuZnVuY3Rpb24gZml4U3RlcEluZGljYXRvcihuKSB7XG4gICAgLy9yZW1vdmVzIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9mIGFsbCBzdGVwcy4uLlxuICAgIGxldCBpLCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0ZXBJbmRpY2F0b3JcIik7XG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgeFtpXS5jbGFzc05hbWUgPSB4W2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICB9XG4gICAgLy8uLi4gYW5kIGFkZHMgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gdGhlIGN1cnJlbnQgc3RlcDpcbiAgICB4W25dLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbn1cblxuXG5jb25zdCBuZXh0QnRuPSQoJyNuZXh0QnRuJylcbm5leHRCdG4ub24oJ2NsaWNrJywoKT0+e1xuICAgIG5leHRQcmV2KDEpXG59KVxuXG5jb25zdCBwcmV2QnRuPSQoJyNwcmV2QnRuJylcbnByZXZCdG4ub24oJ2NsaWNrJywoKT0+e1xuICAgIG5leHRQcmV2KC0xKVxufSkiLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICB2YXIgc2lkZWJhclRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZWJhclRvZ2dsZSwgI3NpZGViYXJUb2dnbGVUb3AnKTtcbiAgXG4gIGlmIChzaWRlYmFyKSB7XG4gICAgXG4gICAgdmFyIGNvbGxhcHNlRWwgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYXBzZScpO1xuICAgIHZhciBjb2xsYXBzZUVsZW1lbnRMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhciAuY29sbGFwc2UnKSlcbiAgICB2YXIgc2lkZWJhckNvbGxhcHNlTGlzdCA9IGNvbGxhcHNlRWxlbWVudExpc3QubWFwKGZ1bmN0aW9uIChjb2xsYXBzZUVsKSB7XG4gICAgICByZXR1cm4gbmV3IGJvb3RzdHJhcC5Db2xsYXBzZShjb2xsYXBzZUVsLCB7IHRvZ2dsZTogZmFsc2UgfSk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciB0b2dnbGUgb2Ygc2lkZWJhclRvZ2dsZXMpIHtcblxuICAgICAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXRvZ2dsZWQnKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVkJyk7XG5cbiAgICAgICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJykpIHtcbiAgICAgICAgICBmb3IgKHZhciBic0NvbGxhcHNlIG9mIHNpZGViYXJDb2xsYXBzZUxpc3QpIHtcbiAgICAgICAgICAgIGJzQ29sbGFwc2UuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENsb3NlIGFueSBvcGVuIG1lbnUgYWNjb3JkaW9ucyB3aGVuIHdpbmRvdyBpcyByZXNpemVkIGJlbG93IDc2OHB4XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZ3ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IDAsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuXG4gICAgICBpZiAodncgPCA3NjgpIHtcbiAgICAgICAgZm9yICh2YXIgYnNDb2xsYXBzZSBvZiBzaWRlYmFyQ29sbGFwc2VMaXN0KSB7XG4gICAgICAgICAgYnNDb2xsYXBzZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBQcmV2ZW50IHRoZSBjb250ZW50IHdyYXBwZXIgZnJvbSBzY3JvbGxpbmcgd2hlbiB0aGUgZml4ZWQgc2lkZSBuYXZpZ2F0aW9uIGhvdmVyZWQgb3ZlclxuICBcbiAgdmFyIGZpeGVkTmFpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5maXhlZC1uYXYgLnNpZGViYXInKTtcbiAgXG4gIGlmIChmaXhlZE5haWdhdGlvbikge1xuICAgIGZpeGVkTmFpZ2F0aW9uLm9uKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHZ3ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IDAsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuXG4gICAgICBpZiAodncgPiA3NjgpIHtcbiAgICAgICAgdmFyIGUwID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIGRlbHRhID0gZTAud2hlZWxEZWx0YSB8fCAtZTAuZGV0YWlsO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcCArPSAoZGVsdGEgPCAwID8gMSA6IC0xKSAqIDMwO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXRvLXRvcCcpO1xuICBcbiAgaWYgKHNjcm9sbFRvVG9wKSB7XG4gICAgXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBidXR0b24gYXBwZWFyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbERpc3RhbmNlID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAvL2NoZWNrIGlmIHVzZXIgaXMgc2Nyb2xsaW5nIHVwXG4gICAgICBpZiAoc2Nyb2xsRGlzdGFuY2UgPiAxMDApIHtcbiAgICAgICAgc2Nyb2xsVG9Ub3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxUb1RvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0pKCk7IC8vIEVuZCBvZiB1c2Ugc3RyaWN0XG4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG4vL2Rpc3BsYXkgcHJvZHVjdCBpbmZvXG5jb25zdCBzZWxlY3RlZFByb2Q9JCgnI3NlbGVjdGVkUHJvZCcpXG5jb25zdCBwcmljZT0kKCcjcHJpY2UnKVxuY29uc3QgZGVzY3JpcHRpb249JCgnI2Rlc2NyaXB0aW9uJylcbmNvbnN0IHRheD0kKCcjdGF4JylcbmNvbnN0IHRvdGFsPSQoJyN0b3RhbCcpXG5jb25zdCB2aXNhPSQoJyNWaXNhJylcbmNvbnN0IGNhc2g9JCgnI2Nhc2gnKVxuY29uc3QgbWFzdGVyQ2FyZD0kKCcjTWFzdGVyQ2FyZCcpXG5jb25zdCBwYXltZW50TWV0aG9kPSQoJyNwYXltZW50TWV0aG9kJylcbmNvbnN0IHF1YW50aXR5PSQoJyNxdWFudGl0eScpXG5jb25zdCBkaXNjb3VudD0kKCcjZGlzY291bnQnKVxuY29uc3Qgc2VsZWN0ZWRDYXQ9JCgnI3NlbGVjdGVkQ2F0Jylcbi8vc2VsZWN0IGNhdGVnb3J5IGFuZCBkaXNwbGF5IGl0IHByb2R1Y3RzXG5zZWxlY3RlZENhdC5vbignY2xpY2snLCgpPT57XG4gICAgbGV0IGNhdElkPXNlbGVjdGVkQ2F0LnZhbCgpO1xuICAgIHByaWNlLnZhbCgnJylcbiAgICBkZXNjcmlwdGlvbi52YWwoJycpXG4gICAgdGF4LnZhbCgnJylcbiAgICBmZXRjaCgnL3VzZXIvcHJvZGJ5Y2F0P2NhdD0nK2NhdElkLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oUmVzcG9uc2U9PntcbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGE9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG5cbn0pXG4vL3NlbGVjdCBwcm9kIGFuZCBkaXNwbGF5IGRhdGFcbnNlbGVjdGVkUHJvZC5vbignY2xpY2snLCgpPT57XG4gICAgbGV0IHByb2RJZD1zZWxlY3RlZFByb2QudmFsKCk7XG4gICAgcHJpY2UudmFsKCcnKVxuICAgIGRlc2NyaXB0aW9uLnZhbCgnJylcbiAgICB0YXgudmFsKCcnKVxuICAgIGZldGNoKCcvdXNlci9wcm9kYnlpZD9wcm9kSWQ9Jytwcm9kSWQsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihSZXNwb25zZT0+e1xuICAgICAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YT0+e1xuICAgICAgICAgICAgcHJpY2UudmFsKGRhdGEucHJpY2UpXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWwoZGF0YS5kZXNjKVxuICAgICAgICAgICAgdGF4LnZhbChkYXRhLnRheClcbiAgICAgICAgfSlcblxufSlcbi8vXG5sZXQgbWV0aG9kPScnO1xuXG52aXNhLm9uKCdjbGljaycsKCk9PntcbiAgICBtZXRob2Q9J1Zpc2EnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXNoQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbmtDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG59KVxuXG5tYXN0ZXJDYXJkLm9uKCdjbGljaycsKCk9PntcbiAgICBtZXRob2Q9J01hc3RlckNhcmQnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXNoQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbmtDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG59KVxuXG5jYXNoLm9uKCdjbGljaycsKCk9PntcbiAgICBtZXRob2Q9J2Nhc2gnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5rQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhc2hDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG59KVxuXG5cbi8vZGlzcGxheSB0b3RhbCBvbiBxdWFudGl0eSBjaGFuZ2VcblxucXVhbnRpdHkub24oJ2NoYW5nZScsKCk9PntcbiAgICBjb25zdCBkYXRhPXtcbiAgICAgICAgJ3F1YW50aXR5JzpxdWFudGl0eS52YWwoKSxcbiAgICAgICAgJ3RheCc6dGF4LnZhbCgpLFxuICAgICAgICAncHJvZElkJzpzZWxlY3RlZFByb2QudmFsKClcbiAgICB9XG4gICAgZmV0Y2goJy91c2VyL29yZGVyL3RvdGFsJyx7XG4gICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KVxuICAgICAgICAudGhlbihSZXNwb25zZT0+e1xuICAgICAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhPT57XG4gICAgICAgICAgICB0b3RhbC52YWwoZGF0YS50b3RhbClcbiAgICAgICAgICAgIGRpc2NvdW50LnZhbChkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgcXVhbnRpdHkudmFsKGRhdGEucXVhbnRpdHkpXG4gICAgfSlcbn0pXG5cbi8vbWFraW5nIG9yZGVyXG5jb25zdCByZXN0PSQoJyNnaXZlQmFjaycpXG5jb25zdCBhbW91bnQ9JCgnI3BheWVkJylcbmNvbnN0IGFjY051bWJlcj0kKCcjYWNjTnVtYmVyJylcbmNvbnN0IGV4cGlyZURhdGU9JCgnI2V4cERhdGUnKVxuY29uc3QgbWFrZU9yZGVyPSQoXCIjbWFrZU9yZGVyXCIpXG5jb25zdCBjc3JmVG9rZW49JChcIiNfY3NyZl90b2tlbl9tYWtlX29yZGVyXCIpXG5jb25zdCB1c2VyaWQ9JCgnI3NlbGVjdFVzZXInKVxuXG5hbW91bnQub24oJ2NoYW5nZScsKCk9PntcbiAgICBsZXQgcmVzdHQ9YW1vdW50LnZhbCgpLXRvdGFsLnZhbCgpXG4gICAgcmVzdC52YWwocmVzdHQpO1xufSlcblxuXG5tYWtlT3JkZXIub24oJ2NsaWNrJywoKT0+e1xuICAgIGNvbnN0IGRhdGE9e1xuICAgICAgICAncHJvZElkJzpzZWxlY3RlZFByb2QudmFsKCksXG4gICAgICAgICd0b3RhbCc6dG90YWwudmFsKCksXG4gICAgICAgICdkaXNjb3VudCc6ZGlzY291bnQudmFsKCksXG4gICAgICAgICd0b0dpdmUnOmFtb3VudC52YWwoKSxcbiAgICAgICAgJ3Jlc3QnOnJlc3QudmFsKCksXG4gICAgICAgICdtZXRob2QnOm1ldGhvZCxcbiAgICAgICAgJ3F1YW50aXR5JzpxdWFudGl0eS52YWwoKSxcbiAgICAgICAgJ2V4cERhdGUnOmV4cGlyZURhdGUudmFsKCksXG4gICAgICAgICdhY2NOdW1iZXInOmFjY051bWJlci52YWwoKSxcbiAgICAgICAgJ3VzZXJJZCc6dXNlcmlkLnZhbCgpXG4gICAgfVxuXG4gICAgZmV0Y2goJy91c2VyL29yZGVycy9tYWtlT3JkZXInLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOmNzcmZUb2tlbi52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oUmVzcG9uc2U9PntcbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YT0+e1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly9pbnZlbnRvcnkudGVzdC91c2VyL3BkZj9vcmRlcklkPScrZGF0YS5vcmRlcklkLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cbiAgICAgICAgfSlcblxufSkiLCJpbXBvcnQge2NoYW5nZVBhc3N3b3JkfSBmcm9tIFwiLi4vYWRtaW4vdXNlcnNcIjtcblxuY29uc3QgY2hhbmdlcHdkPSQoJyNjaGFuZ2VfcGFzc3dvcmQnKVxuY29uc3QgbmV3cHdkPSQoJyNuZXdQYXNzd29yZCcpXG5jb25zdCBjb25maXJtcHdkPSQoJyNjb25maXJtUGFzc3dvcmQnKVxuY29uc3QgY3NyZFRva2VuPSQoJyNfY3NyZl90b2tlbl9wd2QnKVxuLy8gY2hhbmdlcHdkLm9uKCdjbGljaycsKCk9Pntcbi8vICAgICBjb25zdCBkYXRhPXtcbi8vICAgICAgICAgJ3VzZXJJZCc6Y2hhbmdlcHdkLmRhdGEoJ3VzZXJJZCcpLFxuLy8gICAgICAgICAnbmV3UHdkJzpuZXdwd2QudmFsKClcbi8vICAgICB9XG4vLyAgICAgY2hhbmdlcHdkKCcvdXNlci9wcm9maWxlL2NoYW5nZXBzZCcsZGF0YSxjc3JkVG9rZW4udmFsKCkpXG4vLyB9KSJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsImZ1bGxIZWlnaHQiLCJjc3MiLCJ3aW5kb3ciLCJoZWlnaHQiLCJyZXNpemUiLCJvbiIsInRvZ2dsZUNsYXNzIiwiVG9hc3RpZnkiLCJ1cGRhdGVVc2VyIiwidXJsIiwiZGF0YSIsImNzcmZUb2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsIlJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJ0ZXh0IiwidGl0bGUiLCJkdXJhdGlvbiIsImdyYXZpdHkiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsInN0b3BPbkZvY3VzIiwic2hvd1RvYXN0IiwiZXJyb3IiLCJ0b1N0cmluZyIsImNoYW5nZVBhc3N3b3JkIiwiaW5uZXJXaWR0aCIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFPUyIsImluaXQiLCJjdXJyZW50VGFiIiwic2hvd1RhYiIsIm4iLCJ4IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImdldEVsZW1lbnRCeUlkIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZml4U3RlcEluZGljYXRvciIsIm5leHRQcmV2IiwidmFsaWRhdGVGb3JtIiwic3VibWl0IiwieSIsImkiLCJ2YWxpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidmFsdWUiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwibmV4dEJ0biIsInByZXZCdG4iLCJzaWRlYmFyIiwicXVlcnlTZWxlY3RvciIsInNpZGViYXJUb2dnbGVzIiwiY29sbGFwc2VFbCIsImNvbGxhcHNlRWxlbWVudExpc3QiLCJzaWRlYmFyQ29sbGFwc2VMaXN0IiwibWFwIiwiYm9vdHN0cmFwIiwiQ29sbGFwc2UiLCJ0b2dnbGUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsImRvbmUiLCJlIiwiY29udGFpbnMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiYnNDb2xsYXBzZSIsImhpZGUiLCJlcnIiLCJmIiwidnciLCJNYXRoIiwibWF4IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiZml4ZWROYWlnYXRpb24iLCJlMCIsIm9yaWdpbmFsRXZlbnQiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbFRvVG9wIiwic2Nyb2xsRGlzdGFuY2UiLCJwYWdlWU9mZnNldCIsInNlbGVjdGVkUHJvZCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJ0YXgiLCJ0b3RhbCIsInZpc2EiLCJjYXNoIiwibWFzdGVyQ2FyZCIsInBheW1lbnRNZXRob2QiLCJxdWFudGl0eSIsImRpc2NvdW50Iiwic2VsZWN0ZWRDYXQiLCJjYXRJZCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kSWQiLCJkZXNjIiwicmVzdCIsImFtb3VudCIsImFjY051bWJlciIsImV4cGlyZURhdGUiLCJtYWtlT3JkZXIiLCJ1c2VyaWQiLCJyZXN0dCIsIm9wZW4iLCJvcmRlcklkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjaGFuZ2Vwd2QiLCJuZXdwd2QiLCJjb25maXJtcHdkIiwiY3NyZFRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==