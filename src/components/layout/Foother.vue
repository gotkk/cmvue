<template>
  <div id="foother">
      <span>Foother {{fooname}}</span>
  </div>
</template>

<script>
export default {
    name: "Foother",
    mounted() {
        this.$emit("onApp", "emit")
    },
    props: [
      "fooname"
    ]
}
</script>

<style scoped>

</style>