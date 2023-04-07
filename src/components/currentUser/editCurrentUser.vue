<template>
    <div class="container">
        <div>
            <input v-model="user.firstname" type="text" name="firstname" id="firstname">
            <label for="firstname">First name</label>
        </div>
        <div>
            <input v-model="user.lastname" type="text" name="lastname" id="lastname">
            <label for="lastname">Last name</label>
        </div>
        <div>
            <input v-model="user.email" type="text" name="email" id="email">
            <label for="email">Email</label>
        </div>


    </div>
</template>
<script>
import{currentUserStore} from "../../stores/currentUser.js";
import axios from "../../axious-auth.js";

export default {
    setup() {
        return {
            store: currentUserStore()
        }
    },
    name: "editCurrentUser",
    data() {
        return {
            user: {
                firstname: "",
                lastname: "",
                email: ""
            }
        }
    },
    methods: {
        getUser(){
            axios.get("/users/" + this.store.getUserId)
                .then((response) => {
                    this.user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        editUser() {
            axios.put("/users/" + this.store.getUserId, this.user)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteUser() {
            axios.delete("/users/" + this.store.getUserId)
                .then((response) => {
                    console.log(response);
                    this.store.logout();
                    this.$router.push("/login");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        checkForm() {
            if (this.user.firstname == "" || this.user.lastname == "" || this.user.email == "") {
                alert("Please fill out all fields");
            } else {
                this.editUser();
            }
        }
    },
    mounted() {
        axios.get("/users/" + this.store.getUserId)
            .then((response) => {
                this.user = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}



</script>
<style></style>