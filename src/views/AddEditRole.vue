<template>
  <div class="container m-auto role-background">
    <h1 v-if="id" class="title">Edit Role Card</h1>
    <h1 v-else class="title">Create Role Card</h1>
    <div class="input-group">
      <div class="role-input">
        <label>Name</label>
        <input type="text" v-model="roleCard.name" placeholder="name" class="outline-none">
      </div>
      <div class="role-input">
        <label>Type</label>
        <select v-model="roleCard.type" class="outline-none">
          <option value="admin">Administrator Role</option>
          <option value="job_admin">Job Administrator Role</option>
        </select>
      </div>
      <div class="role-input">
        <label>Description</label>
        <textarea v-model="roleCard.description" placeholder="description" class="outline-none"></textarea>
      </div>
      <div class="add-edit-button">
        <a v-if="id" v-on:click="saveAction(id)">Edit</a>
        <a v-else v-on:click="saveAction()">Create</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      roleCard: {}
    }
  },
  beforeMount () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
      this.roleCard = this.$store.getters.returnRoleCardById(Number(this.$route.params.id))[0]
    }
  },
  methods: {
    saveAction (id) {
      if (id) {
        alert('Role Updated!')
      } else {
        alert('Role Created!')
      }
    }
  }
}
</script>

<style>
.role-input{
  margin-bottom: 40px;
}
.role-input input, .role-input select, .role-input textarea{
  border-bottom: 2px solid #3eb9c8;
  width: 400px;
}
.role-input label{
  display: block;
  color: gray;
  font-size: 12px;
}
.add-edit-button{
  margin-top: 12px;
}
.add-edit-button a{
  padding: 12px 22px;
  color: white;
  background-color: #3eb9c8;
  border-radius: 5px;
}
.add-edit-button a:hover{
  box-shadow: 0 0 20px #3eb9c8;
  cursor: pointer;
  transition: box-shadow 0.5s;
}
</style>
