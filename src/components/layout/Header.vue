<template>
  <div id="header">
    <router-link to="/">Home</router-link>
    <span id="stya">|</span>
    <router-link to="/about">About</router-link>|
    <router-link to="/test">Test</router-link>|
    <router-link to="/input">Input</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
</style>