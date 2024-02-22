// handling events triggered by admin
import {updateAjax} from "./admin/updateAjax";

const $ = require('jquery');

global.$ = global.jQuery = $;
import Toastify from "toastify-js";

import {addAjax} from "./admin/addAjax";
import {makeReadOnly} from "./common";
import {toggleDivVisibility} from "./common";

//toggle divs
const toggleList=$('#listModelContainer')
const eventToggleList=$('#toggleList')
eventToggleList.on('click',()=>{
    toggleDivVisibility(toggleList)

})

const addToggle=$('#addToggle')
const toggleAdd=$('#toggleAdd')
toggleAdd.on('click',()=>{
    toggleDivVisibility(addToggle)

})
//toggleAdd

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
const btnAddProd=$('#btn_addProd');
//getting fields
const txtProdName=$('#product_name')
const txtProdPrice=$('#price')
const txtProdDesc=$('#description')
const txtProdTax=$('#tax')
const txtProdCat=$('#category')
const storage=$('#storage')
const prodImage=$('#prodImage')
const prodCsrfToken=$('#_csrf_token')
//event of adding new category
btnAddProd.on('click',(e)=>{
    e.preventDefault();
    if(txtProdName.val() && txtProdPrice.val() && txtProdTax.val() && txtProdDesc.val() ) {
        const data = {
            'prodName': txtProdName.val(),
            'desc': txtProdDesc.val(),
            'price':txtProdPrice.val(),
            'tax':txtProdTax.val(),
            'category':txtProdCat.val(),
            'storage':storage.val(),
            'prodImage':prodImage.prop('files')[0]
        }
        addAjax('/admin/product/add', data,prodCsrfToken.val());
        location.reload(true);
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
const userPic=$('#ProfilePictureInput')
const ProfilecsrfToken=$('#_csrf_token_userUpdate')
saveInfoChanges.on('click',()=>{
    // console.log(userPic.prop('files')[0])

    let data={
        'id':saveInfoChanges.data('userId'),
        'username':txtUsername.val(),
        'firstname':txtFirstName.val(),
        'lastname':txtLastName.val(),
        'address':txtAddress.val(),
        'phone':txtPhone.val(),
        'city':txtCity.val(),
        'picture':userPic.prop('files')[0]
    }
    console.log(data.picture)
    updateUser('/user/profile/update',data,ProfilecsrfToken.val());
    Array.from(userInfo).forEach(txtInput=>{
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




//sub model actions

const addSubModel=$('#btn_addSubModel');
const txtSubModName=$('#sub_model_name');
const txtSubModPath=$('#sub_model_path');
const txtSubModIcon=$('#sub_model_icon');
const txtSubModModId=$('#sub_model_mod');
const SubModelCsrfToken=$('#_csrf_token_addsubmodel')
addSubModel.on('click',()=>{
    const data={
        'submodName':txtSubModName.val(),
        'submodIcon':txtSubModIcon.val(),
        'submodPath':txtSubModPath.val(),
        'submodid':txtSubModModId.val()
    }
    console.log(data)
    addAjax('/admin/submodel/list/add',data,SubModelCsrfToken.val());
    txtSubModName.val('')
    txtSubModPath.val('')
    txtSubModIcon.val('')
    txtSubModModId.val('')
})


//providers

const providerChoice=$('#providers')
const providerName=$('#provider_name')
const btnUpdateProvider=$('#btnUpdateProvider')
providerChoice.on('change',()=>{
    let selectedValue = providerChoice.options[providerChoice.selectedIndex].value;
    console.log(selectedValue)
    // Display the selected value in the text box
    providerName.val(selectedValue)
})
btnUpdateProvider.on('click',()=>{
    const data={
        'providerId':providerChoice.val(),
        'providerName':providerName.val()
    }

    updateAjax('/admin/provider/update',data);
})

//
