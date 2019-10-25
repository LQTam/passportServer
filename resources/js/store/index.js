import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login';
import register from './modules/register';
import Axios from 'axios';

Vue.use(Vuex);

Axios.defaults.baseURL = 'http://passport.test/api/v1';

export default new Vuex.Store({
    state:{
        token: localStorage.getItem('access_token') || null,
    },

    getters:{
        loggedIn(state){
            return state.token !== null;
        }
    },

    mutations:{
        retrieveToken(state,token){
            state.token = token;
        },

        destroyToken(state){
            state.token = null;
        },
    },

    actions:{
        retrieveToken(context,credentials){
            return new Promise((resolve,reject)=>{
                Axios.post('/login',{
                    username: credentials.username,
                    password : credentials.password,
                })
                .then(res=>{
                    const token = res.data.access_token;
                    localStorage.setItem('access_token',token);
                    context.commit('retrieveToken',token);
                    resolve(res);
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err.response);
                    reject(err);
                })
            });
        },

        register(context,data){
            return new Promise((resolve,reject)=>{
                Axios.post('/register',data)
                .then(res=>{
                    resolve(res);
                    console.log(res);
                })
                .catch(err=>{
                    reject(err.response.data.errors);
                })
            })
        },

        destroyToken(context){
            Axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.token;
            if(context.getters.loggedIn){
                return new Promise((resolve,reject)=>{
                    Axios.post('/logout')
                    .then(res=>{
                        localStorage.removeItem('access_token');
                        context.commit('destroyToken');
                        resolve(res);
                        console.log(res);
                    })
                    .catch(err=>{
                        localStorage.removeItem('access_token');
                        context.commit('destroyToken');
                        console.log(err);
                        reject(err);
                    })
                });
            }
        }
    }
})