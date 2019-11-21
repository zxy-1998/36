<template>
    <div>
        <aplayer autoplay
            :music="musicData[0]"
            :list="musicData"
            v-if="show"
            :showLrc="true"
/>
    </div>
    <!-- src	必需	音频文件的 URL  
        title	'Untitled'	歌曲名称
        artist	'Unknown'	演唱者
        pic	none	封面图片 URL
        lrc	none	LRC 歌词或者歌词文件的 URL -->
</template>

<script>
import axios from 'axios';
import Aplayer from 'vue-aplayer';
    export default {
        data(){
            return {
                musicData:[],
                show:false
            }
        },
        components:{
            Aplayer
        },
        created(){
            axios.get("./../data/musicdata.json?id="+this.$route.query.id)
            .then((res)=>{
                console.log(res)
                res.data.musicData.forEach((obj)=>{
                    let music = {
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        title:obj.title,
                        artist:obj.author,
                        lrc:"http://localhost:8081/"+ obj.lrc
                    }
                     this.musicData.push(music);
                })
               this.show = true;
               
            }).catch((res)=>{

            })
        }
    }
</script>

<style lang="scss" scoped>

</style>