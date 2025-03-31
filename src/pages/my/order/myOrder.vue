<template>
<view class="wholePage">
    <view class="container">
        <view class="brandName">品牌名称</view>
        <view class="commodityDetail">
            <image
                src="https://ts1.cn.mm.bing.net/th/id/R-C.9a63f07dd802b5b550ff8c596296bed1?rik=ETiAK2w4umoDNw&riu=http%3a%2f%2fimg2.selfimg.com.cn%2fuedvoguecms%2f2019%2f02%2f27%2f1551282660_19Ur1q.jpg&ehk=dJqKsYT2y6wE5whGeLd9R9wkkpKOb%2fRj9LQVYeRM7Ak%3d&risl=&pid=ImgRaw&r=0"
              
                class="commodityPicture"
             
            />
            <view class="commodityDes">
                <view class="commodityDesRight">
                    <view class="commodityName">商品名称</view>
                    <view class="commodityPrice">￥350</view>
                </view>
                <view class="style">款式:黑色</view>
                <view class="quantity">数量:1件</view>
            </view>
        </view>
        <view class="buttonContainer">
            <view class="After-sales">申请售后</view>
            <view class="Logistics">查看物流</view>
            <view class="delivery">确认收货</view>
        </view>
    </view>
</view>


</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.wholePage{
    width: 100%;
    // height: 100%;
    background-color: rgba(247, 247, 247, 1);
}
.container{
    border-radius: 60rpx;
    padding: 32rpx 32rpx;
    margin: 0 auto;
    width: 79%;
    height: 480rpx;
    background-color: rgb(255, 255, 255);

}
.brandName{
    font-size: 40rpx;
}
.commodityPicture{
    width: 253rpx;
    margin-top: 22rpx;
    height: 334rpx;
}
.commodityDesRight{
    display: flex;
  margin-left: 14rpx;
  margin-top: 20rpx;
}
.commodityPrice{
    color: rgba(103, 83, 231, 1);
    margin-left: 102rpx;
}
.commodityDetail{
    display: flex;
   

}
.style,.quantity{
    color: rgba(196, 196, 196, 1);
    font-size: 24rpx;
    margin-left: 14rpx;
}
.style{
    margin-top: 60rpx;
}
.quantity{
    margin-top: 8rpx;
}
.buttonContainer{
    display: flex;
    margin-left: 79rpx;
}
.After-sales,.Logistics,.delivery{
    width: 158rpx;
    margin-left: 16rpx;
    height: 52rpx;
    text-align: center;
    border-radius: 35rpx;
    background-color: rgba(196, 196, 196, 1);   
    color: rgba(255, 255, 255, 1);
    margin-top: 26rpx;
    line-height: 52rpx;
    font-size: 28rpx;
}
</style>