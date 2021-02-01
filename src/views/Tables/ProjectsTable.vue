<template>
 <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" class="form-control" id="nameInput" v-model="employee.name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Address</label>
      <input type="text" class="form-control" id="nameInput"  v-model="employee.address">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Phone number: </label>
      <input type="text" class="form-control" id="nameInput"  v-model="employee.phone">
    </div>
    <div type="submit" class="btn btn-primary" @click="clickSave()">Save</div>
  </form>
</template>
<script>
  export default {
    name: 'projects-table',
    props: {
      table: Object
    },
    methods: {
      clickSave() {
        this.$emit('save', this.table);
      }
    }
  }
</script>
<style>
</style>
