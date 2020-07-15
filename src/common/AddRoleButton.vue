<template>
  <div class="new-role-button inline-block">
    <router-link to="/add-role">CREATE NEW ROLE</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .new-role-button {
    float: right;
    margin-top: 12px;
  }
  .new-role-button a {
    padding: 12px 22px;
    color: white;
    background-color: #3eb9c8;
    border-radius: 5px;
  }
  .new-role-button a:hover {
    box-shadow: 0 0 20px #3eb9c8;
    transition: box-shadow 0.5s;
  }
</style>
