<template>
  <div id="app">
    <h2>Component 1</h2>
<!--    <button >get value</button>-->
    {{ filters }}
    <p> Page : {{filters.page}} </p>
    <p> Query : {{filters.query}} </p>
<!--    <button @click="getFilter">get value</button>-->
  </div>
</template>


<script>
import { mapGetters} from 'vuex';
export default {
  name: "One",
  computed: {
    ...mapGetters('programme', ['filters']),
  },
  methods: {
    getFilter () {
      // console.log({{ filters }})
    }
  }

}
</script>

<style scoped>

</style>