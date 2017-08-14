<template>
  <div class="">
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus" type="button" name="button">Change</button>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal';
      }
    }
  }
</script>
