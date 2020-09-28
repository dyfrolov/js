const BASE_URL = 'https://contacts-telran.herokuapp.com';

class Api{
    static getContacts(token){
        return request(`${BASE_URL}/api/contact`,{
            method:'GET',
            headers:{
                'Authorization':token
            }
        });
    }
    
    static addContact(token, contact){
        const requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Authorization':token
            },
            body:requestBody
        });
    }
    static updateContact(token, contact){
        const requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Authorization':token
            },
            body:requestBody
        });
    }
    static deleteContact(token, id){
        return request(`${BASE_URL}/api/contact/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization':token
            }
        });
    }
    static clearContacts(token){
        return request(`${BASE_URL}/api/clear`,{
            method:'DELETE',
            headers:{
                'Authorization':token
            }
        });
    }

    static registration(email,password){
        const auth = {email,password};
        const requestBody = JSON.stringify(auth);
        return request(`${BASE_URL}/api/registration`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8'
            },
            body:requestBody
        });
    }

    static async login(email,password){
        const requestBody = JSON.stringify({email,password});
        try{
            const response = await fetch(`${BASE_URL}/api/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json; charset=utf-8'
                },
                body:requestBody
            });
            const data = await response.json();
            if(response.ok){
                return data;
            }
            return Promise.reject(data);
        }catch(error){
            return Promise.reject({message:error.message});
        }
    }
}


function parseJSON(response){
    return new Promise(resolve => {
        response.json()
        .then(json => resolve({
            status:response.status,
            ok: response.ok,
            json
        }));
    });
}

function request(url, options){
    return new Promise((resolve,reject) => {
        fetch(url,options)
        .then(parseJSON)
        .then(response => {
            if(response.ok){
                return resolve(response.json);
            }
            return reject(response.json);
        }).catch(error => {
            reject({message:error.message});
        });
    });
}