import {getProds} from "../common";

const $ = require('jquery');

global.$ = global.jQuery = $;
import Toastify from "toastify-js";

//display product info
const selectedProd=$('#selectedProd')
const price=$('#price')
const description=$('#description')
const tax=$('#tax')
const total=$('#total')
const visa=$('#Visa')
const cash=$('#cash')
const masterCard=$('#MasterCard')
const paymentMethod=$('#paymentMethod')
const quantity=$('#quantity')
const discount=$('#discount')
const selectedCat=$('#selectedCat')
//select category and display it products
selectedCat.on('click',()=>{
    let catId=selectedCat.val();
    price.val('')
    description.val('')
    tax.val('')
    fetch('/user/prodbycat?cat='+catId,
        {
            method:'GET',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(Response=>{
            return Response.json();
        })
        .then(data=>{
            console.log(data)
        })

})
//select prod and display data
selectedProd.on('click',()=>{
    let prodId=selectedProd.val();
    price.val('')
    description.val('')
    tax.val('')
    fetch('/user/prodbyid?prodId='+prodId,
        {
            method:'GET',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(Response=>{
            return Response.json();
        })
        .then(data=>{
            price.val(data.price)
            description.val(data.desc)
            tax.val(data.tax)
        })

})
//
let method='';

visa.on('click',()=>{
    method='Visa'
    document.getElementById("cashContainer").style.display = "none";
    document.getElementById("bankContainer").style.display = "inline";
})

masterCard.on('click',()=>{
    method='MasterCard'
    document.getElementById("cashContainer").style.display = "none";
    document.getElementById("bankContainer").style.display = "inline";
})

cash.on('click',()=>{
    method='cash'
    document.getElementById("bankContainer").style.display = "none";
    document.getElementById("cashContainer").style.display = "inline";
})


//display total on quantity change

quantity.on('change',()=>{
    const data={
        'quantity':quantity.val(),
        'tax':tax.val(),
        'prodId':selectedProd.val()
    }
    fetch('/user/order/total',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
        .then(Response=>{
            return Response.json()
        })
        .then(data=>{
            total.val(data.total)
            discount.val(data.discount)
            quantity.val(data.quantity)
    })
})

//making order
const rest=$('#giveBack')
const amount=$('#payed')
const accNumber=$('#accNumber')
const expireDate=$('#expDate')
const makeOrder=$("#makeOrder")
const csrfToken=$("#_csrf_token_make_order")
const userid=$('#selectUser')

amount.on('change',()=>{
    let restt=amount.val()-total.val()
    rest.val(restt);
})


makeOrder.on('click',()=>{
    const data={
        'prodId':selectedProd.val(),
        'total':total.val(),
        'discount':discount.val(),
        'toGive':amount.val(),
        'rest':rest.val(),
        'method':method,
        'quantity':quantity.val(),
        'expDate':expireDate.val(),
        'accNumber':accNumber.val(),
        'userId':userid.val()
    }
    console.log(data)

    fetch('/user/orders/makeOrder',
        {
            method:'POST',
            headers:{
                'content-type':'application/json',
                'X-CSRF-TOKEN':csrfToken.val()
            },
            body:JSON.stringify(data)
        })
        .then(Response=>{
            return Response.json()
        })
        .then(data=>{
            window.open('http://inventory.test/user/pdf?orderId='+data.orderId, '_blank');
            location.reload(true);

        })

})