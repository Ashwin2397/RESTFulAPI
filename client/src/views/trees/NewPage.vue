<template>
  <div class="">
    <h2>Add Tree</h2>
    <div class=row>
        <div class="col">
            <input v-model="genus" placeholder="genus">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input v-model="image" placeholder="image url">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input v-model="weight" placeholder="weight(kg)">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input v-model="height" placeholder="height(m)">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input v-model="longitude" placeholder="longitude">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input v-model="latitude" placeholder="latitude">
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'new-page',
  data(){
      return{
          genus: '',
          image: '',
          weight: 0,
          height: 0,
          longitude:'',
          latitude:''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-bottom:20px;
}

.col{
    margin-bottom:10px;
}

</style>
