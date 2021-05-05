<template>

<div class="top">
    <img src="@/assets/01.top.jpg">
    <input type="text" v-model="inputValue" @keyup.enter="toSearch">
    <el-button type="success">按钮</el-button>
</div>
  
</template>

<script>
export default {
    data() {
        return {
            inputValue:""
        }
    },
    methods: {
        toSearch(){
            if(!this.inputValue) {
                alert("输入不能为空！");
            } else {
                this.$router.push(`/result?q=${this.inputValue}`)
            }
        }
    },
}
</script>

<style>
.top{
    display: flex;
    align-items: center;
    background-color: #fff;
}

</style>