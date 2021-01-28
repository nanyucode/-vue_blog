<template>
  <div class="home">
    <div class="top-bar">
      <div  class="top-bar-item" v-for="(item,index) in tabData" :key="item+index">{{item}}</div>
    </div>
    <div class="cotanier">
      <button @click="come()">welcome</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tabData:['前端','Node.js','GIS','随笔']
    }
  },
  methods:{
    come(){
       this.$router.push({ path: '/Welcome' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  height: 100%;
}
@media screen and (max-width:500px){
  .top-bar{
    display: flex;
    width: 100%;
    height: 45px;
    font-size: 20px;
  }  
}
@media screen  and (min-width: 500px){
  .top-bar{
    display: flex;
    margin: 0 auto;
    width: 60%;
    height: 140px;
    font-size: 30px;
  }
}
.top-bar-item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    height: 100%;
    font-weight: bolder;
  }
  .cotanier{
    margin: 0 auto;
    width: 60%;
    height: calc(100% - 140px);
  }
</style>
