<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Replies</h2>
      <div class="alert alert-danger mt-3" role="alert" v-if="replys.length === 0">
        There are no replies yet.
      </div>
      <div class="row mt-3">
        <ReplysListItem v-for="reply in replys" :key="reply.id" :reply="reply" @update="update" />
      </div>
    </div>
  </section>
</template>
  
<script>

import axios from "../../axious-auth.js";

import ReplysListItem from "./replysListItem.vue";
import { currentUserStore } from "../../stores/currentUser";
export default {
  setup() {
    return {
      store: currentUserStore(),
    };
  },
  name: "ReplysList",
  components: {
    ReplysListItem,
  },
  data() {
    return {
      replys: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("http://localhost/replys/" + this.store.getUserId)
        .then((result) => {
          console.log(result);
          this.replys = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
