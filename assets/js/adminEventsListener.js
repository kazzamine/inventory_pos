// handling events triggered by admin
const $ = require('jquery');

global.$ = global.jQuery = $;
import {users} from "./admin/users";
import {addAjax} from "./admin/addAjax";
import Toastify from "toastify-js";
import {toggleEditable} from "./common";
import {makeReadOnly} from "./common";
import {updateAjax} from "./admin/updateAjax";

//for category

//detecting clicks
const btnAddCat=$('#btn_addCat');
//getting fields
const txtCatName=$('#category_name')
const txtCatDesc=$('#cat_desc')
const csrfToken=$('#_csrf_token')
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
const saveUpdatedProd=$('.saveBtn');

Array.from(saveUpdatedProd).forEach( (button)=> {
    const prodName=$('#prodName');
    const prodDesc=$('#prodDesc');
    const prodPrice=$('#prodPrice')
    const prodTax=$('#prodTax');
    button.addEventListener('click', function () {
        const data={
            'prodName':prodName.data('field'),
            'prodDesc':prodDesc.value,
            'prodPrice':prodPrice.value,
            'prodTax':prodTax.value,
            'prodId':button.value
        }
        console.log(data)
    });
});




//add product
const btnAddProd=$('#btn_addProd');
//getting fields
const txtProdName=$('#product_name')
const txtProdPrice=$('#price')
const txtProdDesc=$('#description')
const txtProdTax=$('#tax')
const txtProdCat=$('#category')

const prodCsrfToken=$('#_csrf_token')
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


//update user
import {updateUser} from "./admin/users";


const updateinfoClick=$('#updateInfo');
const saveInfoChanges=$('#saveUpdatedUser');
const userInfo=$('.userInfo')
updateinfoClick.on('click',()=>{
    // toggleHiddenButton(updateinfoClick);
    Array.from(userInfo).forEach(txtInput=>{
        console.log(txtInput)
        makeReadOnly(txtInput)
    })
    if(updateinfoClick.text('update'))
    {
        updateinfoClick.text('cancel')
        saveInfoChanges.show();

    }else{
        updateinfoClick.text('update')
        saveInfoChanges.hide();

    }
})

//data to be updated
const txtUsername=$('#txtUsername');
const txtFirstName=$('#txtFirstName');
const txtLastName=$('#txtLastName');
const txtAddress=$('#txtAddress');
const txtPhone=$('#txtPhone');
const txtCity=$('#txtCity');

const ProfilecsrfToken=$('#_csrf_token_userUpdate')
saveInfoChanges.on('click',()=>{
    let data={
        'id':saveInfoChanges.data('userId'),
        'username':txtUsername.val(),
        'firstname':txtFirstName.val(),
        'lastname':txtLastName.val(),
        'address':txtAddress.val(),
        'phone':txtPhone.val(),
        'city':txtCity.val()
    }

    updateUser('/user/profile/update',data,ProfilecsrfToken.val());
    Array.from(userInfo).forEach(txtInput=>{
        console.log(txtInput)
        makeReadOnly(txtInput)
    })
    if(updateinfoClick.text('cancel'))
    {
        updateinfoClick.text('update')
        saveInfoChanges.hide();
    }else{
        updateinfoClick.text('cancel')

    }
})


//actions for model

const addModel=$('#btn_addModel');
const txtModName=$('#model_name');
const txtModPath=$('#model_path');
const txtModIcon=$('#model_icon');
const txtModRole=$('#model_role');
const ModelCsrfToken=$('#_csrf_token_addmodel')
addModel.on('click',()=>{
    const data={
        'modName':txtModName.val(),
        'modIcon':txtModIcon.val(),
        'modPath':txtModPath.val(),
        'modRole':txtModRole.val()
    }
    addAjax('/admin/model/list/add',data,ModelCsrfToken.val());
    txtModName.val('')
    txtModPath.val('')
    txtModIcon.val('')
    txtModRole.val('')
})