<template>
   <div class="hello">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/trees">Home</a>
            </li>
        </ul>
    </nav>
    <h2>Edit Tree</h2>
    <div class=row>        
        <div class="col">
            <input ref="genus" v-model="tree.genus" placeholder="genus">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input ref="image" v-model="tree.image" placeholder="image url">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input ref="description" v-model="tree.description" placeholder="brief caption">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input ref="weight" v-model="tree.weight" placeholder="weight(kg)">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input ref="height" v-model="tree.height" placeholder="height(m)">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input ref="longitude" v-model="tree.longitude" placeholder="longitude">
        </div>
    </div>
    <div class=row>
        <div class="col">
            <input ref="latitude" v-model="tree.latitude" placeholder="latitude">
        </div>
    </div>
    <input type="submit" class="btn btn-primary" v-on:click="editTree"  label="Create Tree">
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'edit-page',
  data(){
    return{
      tree:null
    }
  },
  methods: {
    loadTree: function(){
      axios
          .get("http://localhost:3000/trees/"+this.$router.currentRoute.params.id)
          .then( (res) => {
            this.tree=res.data;
          })
          .catch((err)=>{console.log(err);})
    },
    editTree: function(){
      var newTree = {
        genus: this.$refs['genus'].value,
        image: this.$refs['image'].value,
        description: this.$refs['description'].value,
        weight: this.$refs['weight'].value,
        height: this.$refs['height'].value,
        longitude:this.$refs['longitude'].value,
        latitude:this.$refs['latitude'].value
      };
      axios
           .put("http://localhost:3000/trees/"+this.$router.currentRoute.params.id,newTree)
           .then((res)=>{
             console.log(res.data);
           })
           .catch((err)=>{console.log(err);});
      this.$router.push("/trees");
      window.location.reload();
    }
  },
  mounted: function(){
    this.loadTree();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
