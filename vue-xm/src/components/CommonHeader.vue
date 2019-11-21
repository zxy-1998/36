<template>
    <div class="header" :style="{background:$store.state.color}">
      <h3>首页</h3>
       <h2>{{$store.state.names}}</h2>
    </div>
</template>

<script>
    export default {
        
    }
</script>
    
<style lang="scss" scoped>
    .header{
         background: #ff0;
         height: 1rem;
         position: fixed;
         top: 0rem;
         width: 100%;
         h2{
             line-height: 1rem;
             text-align: center;
             font-size: 16px;
         }
         h3{
             position: fixed;
             left: 0rem;
             line-height: 1rem;
             font-size: 16px;
           
         }
        }
</style>