<template>
  <div id="app">
    <h2>Component 2</h2>
    {{ filters }}
    <p> Page : {{filters.page}} </p>
    <p> Query : {{filters.query}} </p>
  </div>

</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: "Two",
  computed: {
    ...mapGetters('programme', ['filters']),
  },
}
</script>

<style scoped>

</style>