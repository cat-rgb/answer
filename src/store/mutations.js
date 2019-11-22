export default {
    // nextItem(state,id) {
    //     state.itemNum++
    //     state.answerid.push(id)
    //     // console.log(state.answerid)
    // },
    // goItem(state,id){
    //     state.answerid.push(id)
    // }

    nextItem(state) {
        //负责下一题
        state.itemNum++
    },
    remberId(state,id){
        //记录提交的答案
        state.answerid.push(id)
    }
}
