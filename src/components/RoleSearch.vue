<template>
  <div class="search-input mr-20 inline-block">
    <input v-model="roleSearch" type="text" placeholder="search" class="outline-none">
    <search-icon size="1.5x" class="inline-block"></search-icon>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    SearchIcon
  },
  computed: {
    roleSearch: {
      get () {
        return this.$store.state.roleSearch
      },
      set (value) {
        this.$store.dispatch('setRoleSearch', value)
      }
    }
  }
}
</script>

<style>
  .search-input {
    border-bottom: 2px solid #3eb9c8;
  }
  .search-input input {
    height: 30px;
  }
</style>
