  <template>
  
  <div id="app">
      <div id="nav">
        <!-- <common-header></common-header> -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      

      <router-link :to='{name:"mine",params:{id:666,name:"小王"}}'>我的params</router-link> |
      <router-link :to='{path:"/mine",query:{id:666,name:"小王"}}'>我的query</router-link> |
      <router-link to="/test/5/lisi">test</router-link> |
      <router-link to="/aaa">跳转aaa</router-link> |
      <router-link to="/c">重定向</router-link> |

      <button @click="$router.push('/')">首页</button>
      <button @click="$router.go(-1)">上一页</button>
      <button @click="$router.go(1)">下一页</button>
      </div>
      <transition name="fade">
      <router-view/>
      </transition>
  </div>
  
</template>
  <script>
import CommonHeader from "./components/CommonHeader";
export default {
  components: {
    CommonHeader
  }
};
</script>
  <style lang="scss">
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{ 
    transition: opacity 2s ease;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-leave{
    transform: translateX(0);
  }
  .fade-leave-active{
    transform: translateX 1s ease;
  }
  .fade-leave-to{
    transform: translateX(100%);
  }
</style>
