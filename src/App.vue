<template>
  <div id="app">
    <Header/>
    <router-view />
    <Foother @onApp="AppF" fooname="gotkk"/>
    <span>{{txt}}</span>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Foother from '@/components/layout/Foother.vue';

export default {
  name: "app",
  components: {
    Header,
    Foother
  },
  data() {
    return {
      txt: ""
    }
  },
  methods: {
    AppF(t){
      this.txt= t
    }
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

span {
  color: red;
}
</style>

// complete video 34