<template>
  <div class="contact">
    <list-view/>
  </div>
</template>

<script>
import ListView from '../../components/list-view.vue'

export default {
  name: 'Contact',
  components: {
    ListView
  },
  data () {
    return {
      msg: 'Welcome to Your Home.js App'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
