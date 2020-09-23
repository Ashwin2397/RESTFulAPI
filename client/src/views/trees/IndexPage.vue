<template>
  <div class="hello">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Trees</h1>
        <p class="lead">A brief lists of all trees in Victoria</p>
      </div>
    </div>
    <a id="create" class="btn btn-success" href="./trees/new">Create new tree</a>
    <div class="container">
      <div class="row">
        <div class="col-sm-4"  v-for="item in trees" v-bind:key="item._id">
            <div class="card" style="width: 18rem;" >
              <img class="card-img-top" v-bind:src="item.image" >
              <div class="card-body">
                <h4 class="card-title">{{ item.genus }}</h4>
                <p class="card-text">{{ item.description }}</p>
                <a v-bind:href="'./trees/'+item._id" class="btn btn-primary">Read More...</a>
              </div>
            </div>
        </div>    
      </div>
    </div>
    
   
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
