import axios from "axios";
export const LoginService = async (email: string, password: string) => {
     const data  = JSON.stringify({
        username: email,
        password: password
     });

     const config = {
         method: 'post',
         url: 'http://198.251.72.253:8080/boletaje/api/auth/signin',
         headers: {
             'Content-Type': 'application/json'
         },
         data: data
     }

     return axios(config).then((response) => {
            return(response.data);
        })
};