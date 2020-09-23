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
            <input v-model="description" placeholder="brief caption">
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
    <input type="submit" class="" v-on:click="postTree" href="http://localhost:8080/trees" label="Create Character">
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'new-page',
  data(){
      return{
          genus: '',
          image: '',
          description: '',
          weight: 0,
          height: 0,
          longitude:'',
          latitude:''
      }
  },
  methods: {
      postTree: function(){

        axios
            .post("http://localhost:3000/trees",{
                    genus: this.genus,
                    image: this.image,
                    description: this.description,
                    weight: this.weight,
                    height: this.height,
                    longitude: this.longitude,
                    latitude: this.latitude
            })
            .then(function(res){
                console.log(res);
            });
        this.$router.push("/trees");
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
