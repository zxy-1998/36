<template>
    <div class="musiclist">
        <li v-for="(obj,index) in musicList" :key="index" @click="goDetail(obj.id)">
            <img :src="obj.bg" alt="">
        </li>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        methods:{
            goDetail(id){
                this.$router.push({
                    path:"/music/up",
                    query:{id}
                })
            }
        },
        created(){
            axios.get("./data/musiclist.json")
            .then((res)=>{
                this.musicList = res.data.albums;
                // console.log(res);
            }).catch((res)=>{
                alert("服务器错误")
            })
        }
    }
</script>   

<style lang="scss" scoped>
.musiclist{
    display: flex;
    flex-wrap: wrap;
    li{
        width: 50%;
        img{
            width:100%;
            display: block;
        }
    }
}
</style>