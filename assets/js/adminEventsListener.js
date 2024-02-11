// handling events triggered by admin

import {createUser} from "./user/createUser";
import {addAjax} from "./admin/addAjax";
import Toastify from "toastify-js";
import {toggleEditable} from "./comon";

//for category

//detecting clicks
let btnAddCat=$('#btn_addCat');
//getting fields
let txtCatName=$('#category_name')
let txtCatDesc=$('#cat_desc')
let csrfToken=$('#_csrf_token')
//event of addinf new category
btnAddCat.on('click',(e)=>{
    e.preventDefault();
    if(txtCatDesc.val() && txtCatName.val() ) {
        const data = {
            'catname': txtCatName.val(),
            'desc': txtCatDesc.val()
        }
        addAjax('/admin/category/add', data,csrfToken.val());
        txtCatName.val('');
        txtCatDesc.val('')
    }else{
        Toastify({
            text: 'fill all fields please',
            title:'empty' ,
            duration: 3000,
            gravity: 'center',
            position: 'top',
            backgroundColor: 'warning',
            stopOnFocus: true,
        }).showToast();
    }

})


//change fields of list to be editable
const updateButtons = $('.updateBtn');
toggleEditable(updateButtons);




//for products
//updateProdBtn
const updateProdBtn = $('.updateProdBtn');
toggleEditable(updateProdBtn);

//add product

//detecting clicks
let btnAddProd=$('#btn_addProd');
//getting fields
let txtProdName=$('#product_name')
let txtProdPrice=$('#price')
let txtProdDesc=$('#description')
let txtProdTax=$('#tax')
let txtProdCat=$('#category')

let prodCsrfToken=$('#_csrf_token')
//event of addinf new category
btnAddProd.on('click',(e)=>{
    e.preventDefault();
    if(txtProdName.val() && txtProdPrice.val() && txtProdTax.val() && txtProdDesc.val() ) {
        const data = {
            'prodName': txtProdName.val(),
            'desc': txtProdDesc.val(),
            'price':txtProdPrice.val(),
            'tax':txtProdTax.val(),
            'category':txtProdCat.val()
        }
        addAjax('/admin/product/add', data,prodCsrfToken.val());
    }else{
        Toastify({
            text: 'fill all fields please',
            title:'empty' ,
            duration: 3000,
            gravity: 'center',
            position: 'top',
            backgroundColor: 'warning',
            stopOnFocus: true,
        }).showToast();
    }

})
