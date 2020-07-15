<template>
  <div class="role-card">
    <div class="card-status" v-if="!cardContent.active">
      <p>Inactive</p>
    </div>
    <div class="card-content">
      <h1>{{cardContent.name}}</h1>
      <h3>{{cardContent.type === "admin" ? "Administrator Role" : "Job Administrator Role"}}</h3>
      <p>{{cardContent.description}}</p>
      <div class="card-images">
        <img v-for="user in cardContent.users" :src="user.photo_url" :alt="`${user.first_name} ${user.last_name}`" :key="user.id" class="inline-block card-user-img">
      </div>
    </div>
    <div class="card-footer">
      <div v-if="cardContent.editable">
        <p class="inline-block">Last update: <span>{{(new Date(cardContent.modified_on)).toLocaleDateString('en-GB')}}</span></p>
        <div class="float-right card-footer-options">
          <router-link class="inline-block" :to="`/edit-role/${cardContent.id}`">EDIT</router-link>
          <a class="inline-block red-link deleteButton" v-on:click="deleteAction">DELETE</a>
        </div>
      </div>
      <div v-else>
        <p class="inline-block">Date created: <span>{{(new Date(cardContent.created_on)).toLocaleDateString('en-GB')}}</span></p>
        <lock-icon size="1.5x" class="lock-icon inline-block float-right"></lock-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { LockIcon } from 'vue-feather-icons'

export default {
  props: {
    cardContent: Object
  },
  components: {
    LockIcon
  },
  methods: {
    deleteAction () {
      // Dummy CTA
      confirm('Are you sure?')
    }
  }
}
</script>

<style>
  .role-card {
    border: 1.5px solid #d3d3d3;
  }
  .card-status {
    float: right;
    background-color: red;
    margin: 20px;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .card-status p {
    color: white;
    font-size: 14px;
  }
  .card-content {
    margin: 60px 30px;
  }
  .card-content h1 {
    font-size: 25px;
    color: #595959;
  }
  .card-content h3 {
    font-size: 17px;
    color: #7f7f7f;
  }
  .card-content p {
    font-size: 14px;
    margin: 30px 0;
    color: #7f7f7f;
  }
  .card-user-img {
    margin-right: 7px;
    height: 42px;
    border-radius: 21px;
  }
  .card-footer {
    background-color: #f9f9f8;
    padding: 25px;
  }
  .card-footer p {
    font-weight: bold;
    color: #7f7f7f;
    font-size: 14px;
  }
  .card-footer span {
    font-weight: normal;
  }
  .card-footer-options a {
    margin-top: -4px;
    color: #595959;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  .card-footer-options .red-link {
    color: #e53e3e;
  }
  .lock-icon {
    color: #a9a8a9;
  }
  .deleteButton {
    cursor: pointer;
  }
</style>
