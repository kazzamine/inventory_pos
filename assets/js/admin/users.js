import Toastify from "toastify-js";
// function to send an ajax request to add new user
export const addUser=(url,data,csrfToken)=>{
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'X-CSRF-TOKEN':csrfToken
        },
        body:JSON.stringify(data)
    }
        )
        .then((Response)=>{
            if(!Response.ok)
            {
                throw new Error();
            }
            return Response.json();
        })
        .then((data)=>{
            Toastify({
                text: 'updated successfully!',
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
                text: error.toString(),
                title:'Error' ,
                duration: 3000,
                gravity: 'center',
                position: 'top',
                backgroundColor: 'red',
                stopOnFocus: true,
            }).showToast();
        })
}

//update user infors

export const updateUser=(url,data,csrfToken)=>{
    fetch(url,
        {
            method:'POST',
            headers:{
                'content-application':'application/json',
                'X-CSRF-TOKEN':csrfToken
            },
            body:JSON.stringify(data)
        })
        .then(Response=>{
            if(!Response.ok)
            {
                throw new Error();
            }
            return Response.json();
        })
        .then(data=>{
            Toastify({
                text: 'updated successfully!',
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
                text: error.toString(),
                title:'Error' ,
                duration: 3000,
                gravity: 'center',
                position: 'top',
                backgroundColor: 'red',
                stopOnFocus: true,
            }).showToast();
        })
}