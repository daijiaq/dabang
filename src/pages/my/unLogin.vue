<template>
    <view class="wholePage">
        <view class="loginButton">登录查看更多</view>
        <view class="des">让每一个日常成为你的T台</view>
    </view>

    
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.wholePage{
    width: 100%;
    height: 100%;
    background-color: rgba(112, 112, 112, 1);
}
.loginButton{
    width: 417rpx;
    height: 102rpx;
    border-radius: 74rpx;
    background-color: rgb(103, 83, 231);
    color: white;
    text-align: center;

    top: 455rpx;
    position: absolute;
    left: 170rpx;
    line-height: 102rpx;

    font-size: 46rpx;
}
.des{
    position: absolute;
    top: 578rpx;
    left: 198rpx;
    color: rgba(112, 112, 112, 1);
}

</style>
