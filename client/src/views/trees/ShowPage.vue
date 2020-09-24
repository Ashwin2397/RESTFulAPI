<template>
  <div class="hello">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/trees">Home</a>
            </li>
        </ul>
    </nav>
    <img v-bind:src="tree.image" alt="Some image" height="200" width="200">
    <div class=row>
        <div class="col">
          <h2>The {{ tree.genus }} Tree</h2>
        </div>
    </div>
    <div class=row>
        <div class="col">
            <p>{{ tree.description }}</p>
        </div>
    </div>
    <div class=row>
        <div class="col">
            <p>Weight: {{ tree.weight }}</p>
        </div>
    </div>
    <div class=row>
        <div class="col">
            <p>Height: {{ tree.height }}</p>
        </div>
    </div>
    <div class=row>
        <div class="col">
            <p>Longitude: {{ tree.longitude }}</p>
        </div>
    </div>
    <div class=row>
        <div class="col">
            <p>Latitude: {{ tree.latitude }}</p>
        </div>
    </div>
     <a v-bind:href="tree._id+'/edit'" class="btn btn-warning">Edit Tree</a>
     <a v-on:click="deleteTree" class="btn btn-danger">Delete Tree</a>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'show-page',
  data(){
    return{
      tree: null
    }
  },
  props: {
    msg: String
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
    deleteTree: function(){
      axios
           .delete("http://localhost:3000/trees/"+this.$router.currentRoute.params.id)
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
