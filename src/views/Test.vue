<template>
  <div>
    <h1>Counter is {{count}}</h1>
    <button @click="handleAdd">Count</button>
    <br />
    <hr />
    <div>
      <br />
      <span>Input&nbsp;</span>
      <input v-model="message" type="text" placeholder="enter message" />
      &nbsp;
      <button @click="message=''">Clear</button>
      <br />
      <br />
      <span>Message is { {{message}} }</span>
    </div>
    <br />
    <hr />
    <div>
      <button v-on:click="click1('click1'); click2();">click1</button>
      <br />
      <h3 v-if="active">Active</h3>
      <h4>{{getTime()}}</h4>
      <h4>{{getTimeC}}</h4>
      <br/>
      <h5 v-for="(item, index) in fd" :key="index">{{item}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      count: 0,
      message: "",
      active: false,
      fd: [ 1,2,3,4]
    };
  },
  mounted() {
    console.log("mount");
  },
  updated() {
    console.log("update");
  },
  methods: {
    handleAdd() {
      this.count = this.count + 1;
    },
    click1(message) {
      alert(message);
    },
    click2(){
        this.active = true;
    },
    getTime() {
      return new Date();
    }
  },
  computed: {
      // not use () and update all of call them
      getTimes(){
          return new Date();
      }
  },
};
</script>

<style>
</style>