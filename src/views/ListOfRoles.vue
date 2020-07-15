<template>
  <div class="container m-auto role-background">
    <h1 class="title">User Roles Menagement</h1>
    <div class="input-group">
      <RoleSearch />
      <RoleFilter />
      <AddRoleButton />
      <div class="role-cards">
        <div class="flex flex-wrap overflow-hidden sm:-mx-4">
          <div v-for="data in roleFilter" :key="data.id" class="w-full overflow-hidden sm:my-4 sm:px-4 xl:w-1/3">
            <RoleCard :cardContent="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoleCard from '@/components/RoleCard.vue'
import RoleSearch from '@/components/RoleSearch.vue'
import RoleFilter from '@/components/RoleFilter.vue'
import AddRoleButton from '@/common/AddRoleButton.vue'

export default {
  components: {
    RoleCard,
    RoleSearch,
    RoleFilter,
    AddRoleButton
  },
  computed: {
    roleFilter () {
      return this.$store.getters.filteredCardData
    }
  }
}
</script>

<style>
  .title{
    font-size: 30px;
    color: #8d8d8d;
  }
  .role-cards{
    margin: 80px 0;
  }
</style>
