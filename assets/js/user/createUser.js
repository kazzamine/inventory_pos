// function to send an ajax request to add new user
export const createUser=(data,url)=>{
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }
        )
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })

}