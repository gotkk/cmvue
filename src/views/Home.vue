<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>This is a home page</h1>
    <Clock>
      <span>Clock</span>
    </Clock>
    <Clock>
      <div style="display: flex; width: 100px; height: 50px; backgroundColor: green;">นาฬิกา</div>
      <template v-slot:sl>
        <h2>slot sl</h2>
      </template>
    </Clock>
    <Clock />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorlds from '@/components/HelloWorld.vue'
import Clock from "@/components/helper/Clock.vue";

export default {
  name: "Home",
  components: {
    // HelloWorlds,
    Clock
  }
};
</script>
