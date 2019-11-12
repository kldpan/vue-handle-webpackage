import Vue from "vue/dist/vue.js";
import "./index.scss";
// 单模块暴露,自定义名字 
import  Test from "./test.js";
//多模块引入 使用 {} 名字要与暴露的一致
import {food,str} from "./createStar.js";
import axios from "axios"


setTimeout(()=>{
    axios({
        method:"GET",
        url:"/apis/api/v1/topics"
    }).then((res)=>{
        console.log(res);
    })
},3000)


new Vue({
    el:"#app",
    data:{
        msg:food+str
    },
})


