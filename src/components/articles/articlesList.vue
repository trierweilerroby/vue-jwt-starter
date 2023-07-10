<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Jobs</h2>
      
      <button v-if="this.store.isEmployer" type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createarticles');">
        Add Jobs
      </button>
      <div class="alert alert-danger mt-3" role="alert" v-if="articles.length === 0">
        There are no jobs yet.
      </div>
      <div class="row mt-3">
        <ArticlesListItem v-for="article in articles" :key="article.id" :article="article" @update="update" />
      </div>

    </div>
  </section>
</template>
<script>

import axios from "../../axious-auth.js";
import { currentUserStore } from '../../stores/currentUser';
import ArticlesListItem from "./articlesListItem.vue";

export default {
  setup() {
    return {
      store: currentUserStore()
    }
  },
  name: "ArticleList",
  components: {
    ArticlesListItem,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      if(this.store.isEmployer){
      axios
        .get("http://localhost/articles/author/" + this.store.getUserId)
        .then((result) => {
          console.log(result);
          this.articles = result.data;
        })
        .catch((error) => console.log(error));
      }
      else
      {
        axios
        .get("http://localhost/articles")
        .then((result) => {
          console.log(result);
          this.articles = result.data;
        })
        .catch((error) => console.log(error));
      }
    },
  },
};
</script>
<style></style>