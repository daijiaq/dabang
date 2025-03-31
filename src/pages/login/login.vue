<template>
    <view class="wholepage">
        <image
    src="../../static/dabang/icon-04.png"
    mode="scaleToFill"
    class="icon"
   />
   <view class="des">让每个时常成为你的T台</view>
   <view class="oneClickLogin">一键登录</view>
   <view class="phoneLogin">手机号登录/注册</view>
    </view>
 
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.wholepage{
    width: 100%;
    height: 100%;
}
.icon{
    display: block;
    width: 110rpx;
    height: 110rpx;
    margin: 120rpx auto;
}
.des{

 margin-top: -89rpx;
 margin-left: 193rpx;
    color: rgba(103, 83, 231, 1);
    font-size: 36rpx;
}
.oneClickLogin,.phoneLogin{
    width: 86%;
    height: 70rpx;
    text-align: center;
    line-height: 70rpx;
    margin-top: 60rpx;
    color: white;
}
.oneClickLogin{
    background-color: rgba(103, 83, 231, 1);
    margin: 150rpx auto;
}
.phoneLogin{
    background-color: rgba(196, 196, 196, 1);
    margin: -76rpx auto;
}
</style>