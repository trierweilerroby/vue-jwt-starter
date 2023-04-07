<template>
    <div class="container">
        <div v-if="error">
            {{ this.error }}
        </div>
        <div v-else>
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h3>
                            Name
                        </h3>
                        <p>
                            {{ currentUser.first_name }} {{ currentUser.last_name }}
                        </p>
                    </li>
                    <li class="list-group-item">
                        <h3>
                            email
                        </h3>
                        <p>
                            {{ currentUser.email }}
                        </p>
                    </li>
                    <li class="list-group-item">
                        <h3>
                            certificates
                        </h3>
                        <p>
                            {{ currentUser.certificate }}
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "../../axious-auth.js";
import { currentUserStore } from "../../stores/currentUser.js";

export default {
    setup() {
        return {
            store: currentUserStore()
        }
    },
    name: "currentUserDetails",
    data() {
        return {
            error: null,
            user_id: this.store.getUserId,
            currentUser: {
                first_name: "",
                last_name: "",
                email: "",
                type_id: "",
                certificate: ""
            }
        }
    },
    mounted() {
        axios.get("http://localhost/users/" + this.user_id)
            .then((result) => {
                this.currentUser = result.data;
            }).catch((error) => {
                this.error = error.response.data.errorMessage;
            })
    },
}

</script>
<style>
</style>