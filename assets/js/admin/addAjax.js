//function handles ajax request for adding
import Toastify from "toastify-js";

export const addAjax=(url,data,csrf)=>{
    fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'X-CSRF-TOKEN':csrf
            },
            body:JSON.stringify(data)
        }
    )
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{

                Toastify({
                    text: data.success,
                    title:'Success' ,
                    duration: 3000,
                    gravity: 'center',
                    position: 'top',
                    backgroundColor: 'green',
                    stopOnFocus: true,
                }).showToast();

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