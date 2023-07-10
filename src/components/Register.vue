<template>
    <div class="container">
        <form @submit.prevent="checkForm">
            <div class="mb-3">
                <label for="firstname" class="form-label">firstname</label>
                <input v-model="user.firstname" type="text" class="form-control" id="firstname">
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">lastname</label>
                <input v-model="user.lastname" type="text" class="form-control" id="lastname">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">email</label>
                <input v-model="user.email" type="text" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">password</label>
                <input v-model="user.password" type="password" class="form-control" id="password">
            </div>
            <div>
                <label for="certificate" class="form-label">certificate</label>
                <input v-model="user.certificate" type="text" class="form-control" id="certificate">
            </div>
            <div class="mb-3">
                <label for="usertype" class="form-label">usertype</label>
                <select class="form-control" v-model="user.type_id" id="usertype">
                        <option>Choose User type</option>
                        <option value="2">Employer</option>
                        <option value="3">Looking for Job</option>
                    </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
</template>
<script>
import axios from "../axious-auth.js";
import { currentUserStore } from "../stores/currentUser.js";

export default {
    setup() {
        return {
            store: currentUserStore()
        }
    },
    name: "Register",
    data() {
        return {
            user: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                certificate: "",
                type_id: "",
                job_type: 0
            },
        }
    },
    mounted() {
        this.checkifLoggedIn();
    },
    methods: {
        checkForm() {
            if (this.user.firstname == "" || this.user.lastname == "" || this.user.email == "" || this.user.password == "" || this.user.certificate == ""|| this.user.type_id == "") {
                alert("Please fill in all the fields");
            } else {
                console.log(this.user);
                this.store.register(this.user).then(() => {
                    this.$router.push("/");
                }).catch((error) => {
                    this.error = error;
                });
            }
        },

        checkifLoggedIn() {
            if (this.store.isLoggedIn) {
                this.$router.push("/");
            }
        },

    },
    name: "Register",
}



</script>
<style></style>