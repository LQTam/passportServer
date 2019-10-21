import Axios from "axios";

export default {
    retrieveToken(context,credentials){
        Axios.post('/login',{
            username: credentials.username,
            password : credentials.password,
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
}