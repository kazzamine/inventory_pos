import {getProds} from "../common";

const $ = require('jquery');

global.$ = global.jQuery = $;
import Toastify from "toastify-js";

//display product info
const selectedProd=$('#selectedProd')
const price=$('#price')
const description=$('#description')
const tax=$('#tax')
selectedProd.on('change',()=>{
    const prodId=selectedProd.val();
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