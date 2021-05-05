<template>
  <div>
      <img src="@/assets/07.result.jpg" alt="">
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.q)
  },
}
</script>

<style>

</style>