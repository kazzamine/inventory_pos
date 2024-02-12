//function for ajax request for updating

import Toastify from "toastify-js";

export const updateAjax=(url,data)=>{
    fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(data)
        }
    )
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            if(data.key =='success'){
                Toastify({
                    text: 'successful update',
                    title:'Success' ,
                    duration: 3000,
                    gravity: 'center',
                    position: 'top',
                    backgroundColor: 'green',
                    stopOnFocus: true,
                }).showToast();
            }else{
                Toastify({
                    text: data.error,
                    title:'Error!!' ,
                    duration: 3000,
                    gravity: 'center',
                    position: 'top',
                    backgroundColor: 'red',
                    stopOnFocus: true,
                }).showToast();
            }

        })
        .catch(error=>{
            Toastify({
                text: error,
                title:'error' ,
                duration: 3000,
                gravity: 'center',
                position: 'top',
                backgroundColor: 'red',
                stopOnFocus: true,
            }).showToast();
        })
}