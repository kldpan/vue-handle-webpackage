class Test {
    constructor(uname,say){
        this.uname=uname;
        this.say=say;
    }
    show(){
        return this.uname+"喜欢唱"+this.say;
    }
}

// 暴露单个模块
export default new Test("Msea","我爱北京天安门");





