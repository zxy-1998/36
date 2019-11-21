<template>
    <div class="photo-class">
        <img v-for="(photo,index) in photoData" :key="index" :src="photo.src"  @click="goDetail()" alt="">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                photoData:[]
            }
        },
        created(){
            axios.get("./data/photodata.json")
            .then((res)=>{
                console.log(res)
                this.photoData = res.data.photoData;
            }).catch(()=>{

            })
        },
        methods:{
            goDetail(){
                this.$router.push("/image/photo-detail")
            }
        }
    }
</script>

<style lang="scss" scoped>
.photo-class{
    overflow: hidden;
    img{
        float: left;
        width: 50%
    }
}
</style>