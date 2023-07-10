<template>
<div class="footer">
<footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" active-class="active">
                        Home</router-link>
                </li>
                <li v-if="this.store.isAuthenticated" class="nav-item">
                    <router-link to="/articles" class="nav-link" active-class="active">Article</router-link>
                </li>
                <li v-if="!this.store.isAuthenticated" class="nav-item">
                    <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
                </li>
                <li v-if="this.store.isEmployer" class="nav-item">
                    <router-link to="/replys" class="nav-link" active-class="active">Replys</router-link>
                </li>
                <li v-if="this.store.isAdmin" class="nav-item">
                    <router-link to="/User" class="nav-link" active-class="active">Users</router-link>
                </li>
                <li v-if="this.store.isAuthenticated" class="nav-item">
                    <a href="/home" class="nav-link" @click="this.store.logout">Logout</a>
                </li>
            </ul>
            <p class="text-center text-muted">© 2023 JobHunt, Inc</p></span>
  </div>
</footer>
</div>
</template>

<script>
import { currentUserStore } from "../stores/currentUser.js";
export default {
  name: "Footer",
  setup() {
    return {
      store: currentUserStore(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>