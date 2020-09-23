<template>
  <div class="hello">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Trees</h1>
        <p class="lead">A brief lists of all trees in Victoria</p>
      </div>
    </div>
    <a id="create" class="btn btn-success" href="./new">Create new tree</a>
    <div class="container">
      <div class="row">
        <div class="col">
          1 of 2
        </div>
        <div class="col">
          2 of 2
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index-page',
  props: {
    msg: String
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
