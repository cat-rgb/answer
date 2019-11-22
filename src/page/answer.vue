<template>
    <div>
        <Item  father = "answer"></Item>
        <!-- <div class="answer">
            <div class="next"></div>
            <div class="length">
                <p class="num">第 <span>1</span> 题</p>
            </div>
            <div class="question"></div>
        </div> -->
    </div>
</template>

<script>
import  Item from '../components/item.vue'
export default {
    components:{Item}
}
</script>

<style scoped>
.answer{
    width: 300px;
    height: 500px;
    background: url(../assets/5-1.png) no-repeat;
    background-size: 100% 100%;               
    margin: 0 auto;         
    position: relative;
}
.next{
    width: 174px;
    height: 84px;
    background: url(../assets/2-2.png) no-repeat;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}
.length{
    width: 148px;
    height: 100px;
    background: url(../assets/WechatIMG2.png) no-repeat bottom center;
    background-size:148px ; 
    position: absolute;
    right: 20px;
    top: 30px;
}
.num{
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%,-50%);
    color: red;
    font-size: 20px;
}
.num span{
    margin: 0 5px;
}
.question{
    width: 300px;
    height: 200px;
}
</style>
