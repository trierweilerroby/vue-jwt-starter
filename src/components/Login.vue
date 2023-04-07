<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form @submit.prevent="checkForm">
            <div class="mb-3">
              <label for="inputemail" class="form-label">email</label>
              <input v-model="this.email" id="inputemail" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input v-model="this.password" type="password" class="form-control" id="inputPassword" />
            </div>
            <button type='submit' class="btn btn-primary">Submit</button>
            <a href="/register">Register</a>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../axious-auth.js";
import { currentUserStore } from "../stores/currentUser.js";
export default {
  name: "Login",
  setup() {
    return {
      store: currentUserStore(),
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.store.login(this.email, this.password).then(() => {
        this.$router.push("/");
      }).catch((error) => {
        this.error = error;
      });
    },

    checkForm() {
      if (this.email == "" || this.password == "") {
        alert("Please fill in all the fields");
      } else {
        this.login();
      }
    },

    checkifLoggedIn() {
      if (this.store.isLoggedIn) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    //this.checkifLoggedIn();
  },
};
</script>

<style></style>