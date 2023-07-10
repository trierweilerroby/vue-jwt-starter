<template>
    <div class="card text-center" style="width: 18rem; float: left; margin: 5px;">
        <div class="card-header">
            <h2>
                {{ user.email }}
            </h2>
        </div>
        <div class="card-text">
            <p>
                {{ user.firstname }}
            </p>
            <p>
                {{ user.lastname }}
            </p>
        </div>
        <br>
        <div class="card-footer">
            <p v-if="user.type_id === 1">
                Admin
            </p>
            <p v-if="user.type_id === 2">
                Employer
            </p>
            <p v-if="user.type_id === 3">
                Looking for a job
            </p>
        </div>
        <div v-if="this.store.isAdmin">
            <button class="btn btn-danger" @click="deleteUser">Delete</button>
        </div>
        <div v-if="this.store.isAdmin">
            <button class="btn btn-primary" @click="promoteToAdmin">Promote to admin</button>
        </div>
    </div>
</template>

<script>

import axios from "../../axious-auth.js";
import { currentUserStore } from "../../stores/currentUser";
export default {
    setup() {
        return {
            store: currentUserStore(),
        };
    },
    name: "UserListItem",
    props: {
        user: Object,
    },
    data() {
        return {
        }
    },

    methods: {
        deleteUser() {
            axios.delete('/users/delete/' + this.user.id)
                .then((result) => {
                    this.$emit("update");
                })
                .catch((error) => console.log(error));
        },
        promoteToAdmin(){
            axios.put('/users/promote/' + this.user.id)
                .then((result) => {
                    this.$emit("promote");
                })
                .catch((error) => console.log(error));
        }

    },
};
</script>
<style></style>