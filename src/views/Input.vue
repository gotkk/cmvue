<template>
  <div>
    <form action v-on:submit.prevent="submit">
      <div>
        <label for="fname">Firstname</label>
        &nbsp;
        <input type="text" name="fname" id="fname" v-model.trim="dm.fname" />
        &nbsp;
        <label for="lname">Lastname</label>
        &nbsp;
        <input type="text" name="lname" id="lname" v-model.trim.lazy="dm.lname" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" name="age" id="age" v-model.number="dm.age" />
      </div>
      <div>
        <label for="sexm">male</label>
        <input type="radio" name="sex" id="sexm" value="male" v-model="dm.sex" />
        <label for="sexf">famale</label>
        <input type="radio" name="sex" id="sexf" value="female" v-model="dm.sex" />
      </div>
      <div>
        <select name="type" v-model="dm.type">
          <option value="active">Acive</option>
          <option value="disactive">Disacive</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
    </form>
    <div>
      DM : {{JSON.stringify(dm)}}
      <!-- DM : {{dm}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      dm: {
        fname: "",
        lname: "",
        sex: "",
        type: "",
        age: 0
      }
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.dm));
      // not reload form after submit or use @submit.prevent on tag form
      // event.preventDefault();
    },
    clear() {
      this.dm = {
        fname: "",
        lname: "",
        sex: "",
        type: "",
        age: 0
      };
    },
    useDefault() {
      this.dm = {
        fname: "fname",
        lname: "lname",
        sex: "male",
        type: "active",
        age: 10
      };
    }
  }
};
</script>

<style>
</style>