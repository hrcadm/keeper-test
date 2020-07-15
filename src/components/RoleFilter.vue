<template>
  <div class="select-status inline-block">
    <label for="role-select">Role Select</label>
    <select v-model="roleFilter" id="role-select" class="outline-none w-full">
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="">Active and Inactive</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    roleFilter: {
      get () {
        return this.$store.state.roleFilter
      },
      set (value) {
        this.$store.dispatch('setRoleFilter', value)
      }
    }
  }
}
</script>

<style>
  .select-status {
    border-bottom: 2px solid #3eb9c8;
    width: 198px;
  }
  .select-status label {
    display: block;
    color: gray;
    font-size: 12px;
  }
</style>
