import {defineStore} from 'pinia';
import axios from '../axious-auth.js';

export const currentUserStore = defineStore("userSession", {
    state: () => ({
        token:"",
        email:"",
        user_id:"",
        type_id:"",
        firstname:"",
        lastname:"",
    }),
    getters: {
        isAuthenticated(state) {
            return state.token !== "";
        },
        isAdmin() {
            return state.type_id === 1;
        },
        getFirstName(state) {
            return state.firstname;
        },
        getLastName() {
            return state.lastname();
        },
        getUserId(state) {
            return state.user_id;
        },
    },

        actions: {
            locallogin(){
            if(localStorage["token"] == null) {
                return;
            }
            this.token = localStorage["token"];
            this.firstname = localStorage["firstname"];
            this.lastname = localStorage["lastname"];
            //this.email = localStorage["email"];
            this.user_id = localStorage["user_id"];
            this.type_id = localStorage["type_id"];
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
            console.log("User is authenticated");
            console.log(localStorage["token"]);
            },
            login(email, password) {
                return new Promise((resolve, reject) => {
                    axios.post('/users/login', {
                        email: email,
                        password: password
                    }).then(response => {
                        this.token = response.data.jwt;
                        this.firstname = response.data.firstname;
                        this.lastname = response.data.lastname;
                        //this.email = response.data.email;
                        this.user_id = response.data.user_id;
                        this.type_id = response.data.type_id;

                        localStorage["token"] = this.token;
                        localStorage["firstname"] = this.firstname;
                        localStorage["lastname"] = this.lastname;
                        //localStorage["email"] = this.email;
                        localStorage["user_id"] = this.user_id;
                        localStorage["type_id"] = this.type_id;

                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                        console.log(this.token);
                        resolve();
                    }).catch(error => {
                        console.log(error);
                        reject();
                    });
                });
            },
            logout() {
                this.token = "";
                this.firstname = "";
                this.lastname = "";
                //this.email = "";
                this.user_id = "";
                this.type_id = "";
                localStorage.removeItem("token");
                localStorage.removeItem("firstname");
                localStorage.removeItem("lastname");
                //localStorage.removeItem("email");
                localStorage.removeItem("user_id");
                localStorage.removeItem("type_id");

                axios.defaults.headers.common['Authorization'] = 'Bearer';
            },
            register(user) {
                return new Promise((resolve, reject) => {
                    axios.post('/users/register', user).then(response => {
                        this.login(user.email, user.password);
                        resolve();
                    }).catch(error => {
                        console.log(error);
                        reject(error.response.data.errorMessage);
                    });
                });
            }
        }
    });