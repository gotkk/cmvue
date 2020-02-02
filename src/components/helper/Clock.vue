<template>
  <div>
      <slot>Now Fallback Default</slot> {{time}}
      <slot name="sl"></slot>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    name: "Clock",
    data() {
        return {
            time: ""
        }
    },
    mounted() {
        setInterval(()=> {
            this.time = moment(Date()).format("MM/DD/YY hh:mm:ss")
        }, 1000)
    },
}
</script>

<style>

</style>