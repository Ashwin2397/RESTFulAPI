<template>
  <div class="hello">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/trees">Home</a>
            </li>
        </ul>
    </nav>
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
            <input v-model="longitude" placeholder="longitude: [deg]^[N or S]">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input v-model="latitude" placeholder="latitude: [deg]^[W or E]">
        </div>
    </div>
    <input type="submit" class="" v-on:click="postTree" href="http://localhost:8080/trees" label="Create Tree">
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
          weight: null,
          height: null,
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
        window.location.reload();
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
