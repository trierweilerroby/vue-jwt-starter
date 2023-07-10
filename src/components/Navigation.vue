<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Home</router-link>
        </li>      
        <li v-if="this.store.isAuthenticated" class="nav-item">
          <router-link to="/articles" class="nav-link" active-class="active"
            >Article</router-link>
        </li>

        <li v-if="!this.store.isAuthenticated" class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"
            >Login</router-link>
        </li>
        <li v-if="this.store.isEmployer" class="nav-item">
          <router-link to="/replys" class="nav-link" active-class="active"
            >Replys</router-link>
        </li>
        <li v-if="this.store.isAdmin" class="nav-item">
          <router-link to="/User" class="nav-link" active-class="active"
            >Users</router-link>
        </li>
        
        <li v-if="this.store.isAuthenticated" class="nav-item">
          <a href="/home" class="nav-link" @click="this.store.logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { currentUserStore } from "../stores/currentUser.js";
export default {
  name: "Navigation",
  setup() {
    return {
      store: currentUserStore(),
    };
  },
};
</script>

<style>
</style>