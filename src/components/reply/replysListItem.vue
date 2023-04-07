<template>
    <div class="card text-center" style="width: 18rem; float: left; margin: 5px;">
        <div class="card-header">
            <h2>
                {{ reply.article.title }}
            </h2>
        </div>
        <div class="card-text">
            <p>
                {{ reply.content }}
            </p>
            <p>
                 {{ reply.reply_from_user.firstname }} {{ reply.reply_from_user.lastname }} replied to your offer
            </p>
        </div>
        <br>
        <div class="card-footer">
            <button class="btn btn-warning" @click="declineReply(reply.id)">Decline</button>&nbsp;&nbsp;
            <button class="btn btn-success" @click="acceptReply(reply.id)">Accept</button>
        </div>
    </div>


</template>

<script>

import axios from "../../axious-auth.js";

export default {
name: "ReplysListItem",
props: {
reply: Object,
},
methods: {
declineReply(id) {
  axios
    .delete("http://localhost/replys/delete/" + id)
    .then((result) => {
      console.log(result);
      this.$emit('update')
    })
    .catch((error) => console.log(error));
},
acceptReply(id) {
   axios
    .put("http://localhost/replys/accept/" + id)
    .then((result) => {
      console.log(result);
      this.$emit('update')
    })
    .catch((error) => console.log(error));
}
},
};
</script>
