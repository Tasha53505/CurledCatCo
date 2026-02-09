<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout,
  },
};
</script>

<style>
/* Add any global styles specific to App.vue here */
</style>