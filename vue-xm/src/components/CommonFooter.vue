<template>
    <div class="footer" :style="{background:$store.state.color}">
    
      <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>
      
    </div>
    
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                menu:[
                    {
                        path:'/',
                        color:"red",
                        title:"电影"
                    },{
                        path:'/music',
                        color:'green',
                        title:"音乐"
                    },{
                        path:'/image',
                        color:'orange',
                        title:"图片"
                    },{
                        path:'/book',
                        color:"gray",
                        title:"书籍"
                    }
                ]
            }
        },
        methods:mapMutations(['change']),
        created(){
            this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path ){
                    this.change({title:obj.title,color:obj.color})
                }
            });
        }
        
    }       
      
    
    
</script>

<style lang="scss" scoped>
    .footer{
        background: #f00;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom: 0rem;
        width: 100%;
        display: flex;
        a{
            flex:1;
            border: 1px solid #fff;
            text-align: center;
            columns: #f053f0;;
            &.router-link-exact-active{
                color:#fff;
            }
            
        }
    }
  
</style>