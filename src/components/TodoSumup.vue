<template>
    <div class="mb-5">
        <div class="mb-2">
            {{percentageDone}} réalisé
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="{width: percentageDone}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            percentageDone() {
              return this.$store.getters.percentageDone;
            }
        }
    }
</script>