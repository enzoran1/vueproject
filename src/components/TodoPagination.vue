<template>
    <div class="flex items-center justify-center mt-10">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <div v-if="$store.state.page > 1" @click="selectPage(1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">First page</span>
                <!-- Heroicon name: solid/chevron-double-left -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </div>
            <div @click="selectPage($store.state.page - 1)" v-if="$store.state.page > 1" class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Previous</span>
                <!-- Heroicon name: solid/chevron-left -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </div>
            <div v-for="currentPage in availablePages" :key="currentPage" aria-current="page" 
                @click="selectPage(currentPage)"
                class="z-10 bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                :class="{
                    'bg-blue-50 text-blue-600': currentPage === $store.state.page
                }"
            > 
                {{currentPage}} 
            </div>
            <div @click="selectPage( $store.state.page + 1)" v-if="$store.state.page < nbOfPages" class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Next</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </div>
            <div v-if="$store.state.page < nbOfPages"
                 @click="selectPage( nbOfPages)"
                 class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Last page</span>
                <!-- Heroicon name: solid/chevron-double-right -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </div>
        </nav>
    </div>
</template>

<script>
import config from "../config/page";
import {mapActions} from 'vuex';

function addPages(arrPages, page, maxPage, nb, beforeOrAfter) {
  if (beforeOrAfter === "before") {
    for(let i = 1; i <= nb; i++) {
      if (page - i >= 1) arrPages.unshift(page - i);
    }
  } else {
    for(let i = 1; i <= nb; i++) {
      if (page + i <= maxPage) arrPages.push(page + i);
    }
  }
}

export default {
  computed: {
      nbOfPages() {
          return parseInt(this.$store.state.todos.length / config.PAGE_SIZE) + 1;
      },
      availablePages() {
          const availablePages = [];
          addPages(availablePages, this.$store.state.page, this.nbOfPages, 3, "before");
          availablePages.push(this.$store.state.page);
          addPages(availablePages, this.$store.state.page, this.nbOfPages, 3, "after");
          return availablePages;
      }
  },
  methods: {
    ...mapActions([
        "selectPage"
    ])
  }
}
</script>