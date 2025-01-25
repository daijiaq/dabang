<template>
    <view class="addNew" @click="newAddressAdded">新增地址</view>
    
</template>

<script lang="ts" setup>
    const newAddressAdded=()=>{
        uni.navigateTo({
      url: '/pages/my/address/addAddress'
    })
    }
</script>

<style lang="scss" scoped>
    .addNew{
        width: 240rpx;
    margin: 50rpx auto;
    border-radius: 80rpx;
    line-height: 41px;
    text-align: center;
    height: 80rpx;
    background-color: rgba(103, 83, 231, 1);
    color: #fff;
    }
</style>