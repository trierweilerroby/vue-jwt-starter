<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Welcome to the homepage {{ this.store.getFirstName }}</h2>
    </div>
  </section>
</template>

<script>
import { currentUserStore } from '../stores/currentUser';
export default {
  setup() {
    return {
      store: currentUserStore()
    }
  },
  name: "Home",
};

</script>

<style></style>