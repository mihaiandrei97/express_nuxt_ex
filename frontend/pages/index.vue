<template>
  <p>Message from server: {{ message }}</p>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      message: null
    }
  },
  async created(){
    const result = await this.$axios.$get('http://localhost:5000/')
    console.log(result);
    this.message = result.message
  }
}
</script>
