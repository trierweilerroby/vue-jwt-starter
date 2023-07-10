<template>
  <section>
    <img class="d-block h-25 w-50" src="/job Hunt.jpeg" alt="First slide" style="max-height: 400px; min-width: 100%;">

    <div class="container">
      <h1 style="text-align: center;" >Welcome to the homepage {{ this.store.getFirstName }}</h1>
    </div>
  <div v-if="!this.store.isAuthenticated">
    <h2 style="text-align: center;">Login to continue</h2>
    </div>
    <br>
    <p v-if="!this.store.isAuthenticated">Welcome to JobHunt!<br>
       We're an online job platform dedicated to connecting job seekers with their dream opportunities and helping companies find the perfect candidates.
       With our user-friendly interface and vast database of job listings, we simplify the job search process for individuals while providing comprehensive recruitment solutions for employers.
       Join us today and unlock a world of exciting career possibilities.
       Welcome to JobHunt, the future of job hunting.</p>

    <p v-if="this.store.isAuthenticated">You joined JobHunt. Welcome!<br> 
       Explore a world of job opportunities with our user-friendly platform. 
       Refine your search, access expert advice, and connect with a vibrant community of job seekers. 
       Our dedicated support team is here to assist you on your journey. Together, let's find the perfect job that matches your aspirations and leads to career success. 
       Join us today!</p>

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