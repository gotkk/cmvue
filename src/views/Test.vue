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
    <br />
    <hr />
    <div>
        <img v-bind:src="urlm" alt="test_img"/>
        <img :src="urlm" alt="test_img"/>
        <h3 :class="error">Test1</h3>
        <h3 :class="[error, error2]">Test2</h3>
        <h3 :class="[active? error: '', error2]">Test3</h3>

        <h3 style="color: red">Test4</h3>
        <h3 style="{backgroundColor: 'red'}">Test5</h3>
        <h3 :style="{color}">Test6</h3>
        <h3 :style="{color: aa}">Test7</h3>
        <h3 :style="t5">Test8</h3>
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
      fd: [ 1,2,3],
      urlm: "https://i0.wp.com/howto.prepareexam.icu/wp-content/uploads/2019/01/vuetify.png?fit=210%2C240&ssl=1",
      error: "error_class",
      error2: 'error2_class',
      color: "green",
      aa: "green",
      t5: {
          backgroundColor: 'yellow'
      }
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

<style scoped>
.error_class{
    color: red;
}
.error2_class{
    background-color: coral;
}
</style>