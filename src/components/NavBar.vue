<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link :to="'/'" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
              <router-link :to="'/todos'" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Todo</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    watch:{
      '$route' (to, from){
        console.log(this.$router.history.current.name, to, from);
      }
    },
    updated() {
      // console.log("Re render");
    }
  }
</script>