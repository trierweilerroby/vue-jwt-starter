<template>
    <div>
        <h1>Create a job offer</h1>

        <form @submit.prevent="checkForm">
  <div class="mb-3">
    <label for="title" class="form-label">Offer title</label>
    <input v-model="article.title" type="text" class="form-control" id="jobtitle">
  </div>
  <div class="mb-3">
    <label for="content" class="form-label">offer description</label>
    <input v-model="article.content" type="text" class="form-control" id="jobtitle">
  </div>
  <div class="mb-3">
    <label for="salary" class="form-label">Salary</label>
    <input v-model="article.salary" type="text" class="form-control" id="jobtitle">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>
<script>
import axios from "../../axious-auth.js";
import { currentUserStore } from "../../stores/currentUser";
export default{
    name: "CreateArticle",
    data(){
        return{
            article: {
                title: "",
                content: "",
                author: 11,
                salary: "",
            },
        };
    },
    mounted(){
        this.update();
    },
    methods: {
        update(){
            axios
            .get("http://localhost/articles")
            .then((result) => {
              console.log(result);
              this.products = result.data;
            })
            .catch((error) => console.log(error));
        },
        checkForm(){
            if(this.article.title == "" || this.article.content == "" || this.article.salary == ""){
                //no alert
                alert("Please fill in all the fields");
            }else{
                this.createArticle();
            }
        },
        createArticle(){
            axios.post("http://localhost/articles/insert", this.article)
            .then((result) => {
                console.log(result);
                this.$router.push("/articles");
            })
            .catch((error) => console.log(error));
        },
    }
}
</script>
<style scoped>
</style>