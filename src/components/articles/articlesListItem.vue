<template>
    <div class="card text-center" style="width: 18rem; float: left; margin: 5px;">
        <div class="card-header">
            <h2>
                {{ article.title }}
            </h2>
        </div>
        <div class="card-text">
            <p>
                {{ article.content }}
            </p>
            <p>
                the salary is {{ article.salary }}€
            </p>
        </div>
        <br>
        <div class="card-footer">
            <p>
                Posted by: {{ article.author_user.firstname }} at {{ article.posted_at }}
            </p>
        </div>
        <div v-if="store.isUser">
            <form>
                <label>Reply to job</label>
                <input type="text" v-model="reply.content">
            </form>
            <button type="Submit" class="btn btn-primary mt-3" @click="createReply">
                Reply
            </button>
        </div>
        <div v-if="this.store.isEmployer || this.store.isAdmin">
            <button class="btn btn-danger" @click="deleteArticle">Delete</button>
        </div>
        <div v-if="this.store.isEmployer">
            <button class="btn btn-primary" @click="updateArticle">Update</button>
        </div>
        <div v-if="this.success" class="alert alert-success" role="alert">
            {{ success }}
        </div>
    </div>
</template>

<script>

import axios from "../../axious-auth.js";
import { currentUserStore } from "../../stores/currentUser";
export default {
    setup() {
        return {
            store: currentUserStore(),
        };
    },
    name: "ArticleListItem",
    props: {
        article: Object,
    },
    data() {
        return {
            reply: {
                content: '',
                reply_from: this.store.getUserId,
                reply_to: this.article.author,
                article_id: this.article.id,
            },
            success: ""
        }
    },

    methods: {
        createReply() {
            axios.post('/replys/insert', this.reply)
                .then((result) => {
                    console.log(result);
                    this.success = "Reply created successfully";
                    this.reply.content = "";
                })
                .catch((error) => console.log(error));
        },
        deleteArticle() {
            axios.delete('/articles/delete/' + this.article.id)
                .then((result) => {
                    this.$emit("update");
                })
                .catch((error) => console.log(error));
        },
        updateArticle() {
            this.$router.push("/articles/update/" + this.article.id);
        }
    },
};
</script>
<style></style>