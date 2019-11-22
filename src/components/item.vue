<template>
  <div>
    <!-- item  在item里面操作逻辑 -->

    <!-- home -->

    <div v-if="father == 'home'" class="home">
      <div class="detail"></div>
      <div class="num"></div>
      <router-link :to="{path:'/answer'}">
        <div class="begin"></div>
      </router-link>
    </div>

    <!-- answer -->

    <div v-if="father == 'answer'" class="answer">
      <!-- 第几题 -->
      <div class="length"> 
        <div class="question_num">第 {{itemNum}} 题</div>
      </div>
                             
      <!-- 问题 -->
      <div class="question">
        <div
          class="top"
          v-for="(item,index) in itemDetail[itemNum-1].topic_answer"
          :key="index"
          @click="toggle(item.topic_answer_id,index)"
        >
          <!-- ABCD -->
          <span class="opa" :class="{red:num==index}">{{abc(index)}}</span>
          <!-- 问题 -->
          <span>{{item.answer_name}}</span>
        </div>
      </div>

      <!-- 按钮 -->
      <div v-show="itemNum !=itemDetail.length" class="next" @click="next"></div>
      <img class="submit" v-show="itemNum ==itemDetail.length" src="../assets/3-1.png" @click="go" />
      

    </div>

    <!-- defen -->
      <div v-if="father =='defen'" class="defen">
        <img class="great" src="../assets/4-2.png" alt="">
        <span class="fenshu">{{score}}</span>
      </div>
    <!-- root -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["itemDetail", "itemNum","answerid"])
  },
  methods: {
    ...mapActions(["addItem"]),
    // ...mapMutations(["nextItem","goItem"]),
    toggle(id,index) {
      this.num = index;
      this.id = id
      // console.log(this.id)
    },
    next() {
      if (this.num == null) {
        alert("未选择");
      } else {
        // this.$store.state.itemNum++;
        this.addItem(this.id)
        this.num = null;
      }
    },
    abc(index) {
      switch (index) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
          break;
      }
    },
    go(){
        this.addItem(this.id)
         this.$router.push({path:"/defen"})
    }
    //获取正确答案的
  },
  props: ["father"],
  data() {
    return {
      num: null,
      score:null,
      id:0,
      rigthId:[2,7,12,13,18]
    };
  },
  mounted() {
      this.answerid.forEach((item,index)=>{
        if(item == this.rigthId[index]){
          this.score +=20                         
        }
      })
  },
};
</script>

<style>
.fenshu{
  position: absolute;
  color: red;
  font-size: 80px;
  left: 35%;
  top: 27%;

}
.great{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 15%;
  top: 10%;
}
.defen{
    width: 300px;
    height: 500px;
    background: url(../assets/4-1.jpg) no-repeat;
    background-size: 100% 100%;               
    margin: 0 auto;         
    position: relative;
}
.red {
  background: red;
}
.home {
  margin: 0 auto;
  width: 300px;
  height: 500px;
  background: url(../assets/1-1.jpg) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.begin {
  position: absolute;
  background: url(../assets/1-4.png) no-repeat;
  width: 173px;
  height: 84px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.detail {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 50%;
  top: 30px;
  background: url(../assets/1-2.png) no-repeat;
  background-size: 100%;
  transform: translateX(-50%);
}
.num {
  width: 100px;
  height: 160px;
  background: url(../assets/1-3.png) no-repeat center bottom;
  position: absolute;
  background-size: 100px;
  right: 0;
  top: 10px;
}
.answer {
  width: 300px;
  height: 500px;
  background: url(../assets/5-1.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}
.next {
  width: 174px;
  height: 84px;
  background: url(../assets/2-2.png) no-repeat;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.submit {
  width: 174px;
  height: 84px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.length {
  width: 148px;
  height: 100px;
  background: url(../assets/WechatIMG2.png) no-repeat bottom center;
  background-size: 148px;
  position: absolute;
  right: 20px;
  top: 30px;
}
.question_num {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 20px;
}
.num span {
  margin: 0 5px;
}
.question {
  box-sizing: border-box;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 200px;
  padding-left: 30px;
  color: white;
}
.top {
  margin-top: 10px;
  letter-spacing: 3px;
}
.top {
  margin-left: 40px;
}

.opa {
  display: inline-block;
  text-align: center;
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
}
</style>
