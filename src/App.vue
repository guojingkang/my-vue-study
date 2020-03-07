<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Father>
      <div  slot="slot-test" slot-scope="{ nickName }">
        <children :value="nickName"/>
      </div>
    </Father>
  </div>
</template>

<script>
import Children from './components/children.vue';
import Father from './components/father.vue';
export default {
  name: 'app',  
  components: {
    Children,
    Father
  },
  data() {
    return {
      options:[
        {id:"1",name:"2"},
        {id:"3",name:"4"}
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
