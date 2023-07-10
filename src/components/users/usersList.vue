<template>
    <section>
        <div class="container">
            <h2 class="mt-3 mt-lg-5">Jobs</h2>

            <div class="row mt-3">
                <UsersListItem v-for="user in users" :key="user.id" :user="user" @update="update" />
            </div>

        </div>
    </section>
</template>
<script>

import axios from "../../axious-auth.js";
import { currentUserStore } from '../../stores/currentUser';
import UsersListItem from "./usersListItem.vue";

export default {
    setup() {
        return {
            store: currentUserStore()
        }
    },
    name: "UserList",
    components: {
        UsersListItem,
    },
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {

            axios
                .get("http://localhost/users")
                .then((result) => {
                    console.log(result);
                    this.users = result.data;
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>
<style></style>