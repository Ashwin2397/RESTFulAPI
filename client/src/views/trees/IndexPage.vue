<template>
  <div class="hello">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Trees</h1>
        <p class="lead">A brief lists of all trees in Victoria</p>
      </div>
    </div>
    <a id="create" class="btn btn-success" href="./trees/new">Create new tree</a>
    <ul>
      <li v-for="item in trees" v-bind:key="item._id">
        {{ item.genus }} - {{ item.image }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'index-page',
  data(){
    return{
      trees:null
    }
  },
  methods: {
    //The scope of this function changed when i used an arrow function
    //read more on arrow functions
    getTrees: function(){
      axios
          .get("http://localhost:3000/trees")
          .then((res)=>{
            this.trees=res.data;
            console.log(res.data);
          })
          .catch((err) =>{console.log(err);});
    }
  },

  //Starting to understand that to mount a function is to run that function when page is loaded
  mounted: function(){
    this.getTrees();
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
.container{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
a{
  text-align: right;
}

.col{
  margin-top: 20px;
  background:pink;
}
</style>
