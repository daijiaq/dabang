<template>
    <view class="whole-Page"> 
<view class="detailAddressBox">
    <text>详细地址与门牌号码</text>
    <up-line length="100%" color="rgba(196, 196, 196, 1)" margin="40rpx 0"></up-line>
</view>
<view class="receiverBox">
    <text>收货人名字</text>
    <up-line length="100%" color="rgba(196, 196, 196, 1)" margin="40rpx 0"></up-line>

</view>
<view class="phoneBox">
    <text>+86    手机号</text>
    <up-line length="100%" color="rgba(196, 196, 196, 1)" margin="40rpx 0"></up-line>

</view>
<view class="labelsBox" :class="{isBigBox:ifBig}">
    <view>地址标签</view>
    <view class="detailLabels">
    <view class="home" :class="{ChangeColor:selected==='home'}" @click="select('home')">家</view>

    <view class="company" :class="{ChangeColor:selected==='company'}" @click="select('company')">公司</view>
    <view class="school" :class="{ChangeColor:selected==='school'}" @click="select('school')">学校</view>
    <view class="selfDefine" :class="{ChangeColor:selected==='selfDefine'}" @click="select('selfDefine')">{{ selfDefineName }}</view>
    </view>
   <view class="writeSelfDefineBox" v-if="ifBig">
        <text class="first">输入标签名称</text>
        <text class="second">{{wordCount}}</text>
        <text class="third">/4字</text>
        <text class="fourth">使用</text>
    </view>
<view class="saveAddress">保存地址</view>
</view>    


</view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const selected = ref<string>('');
const wordCount=ref<number>(0)
const selfDefineName=ref<string>('自定义')
const ifBig=ref<boolean>(false)
function select(view: string) {
    selected.value = view;
    if(view==='selfDefine'){
        
        writeDetailLabel()
    }else{
        ifBig.value=false
    }
}

const writeDetailLabel=()=>{
    ifBig.value=true
}


</script>

<style lang="scss" scoped>
.whole-Page{
width: 100%;
    height: 100vh;
    background-color: rgba(247, 247, 247, 1);
    padding-bottom: 44rpx;
    padding-top: 60rpx;
}
.detailAddressBox,.receiverBox,.phoneBox,.labelsBox{
background-color: #fff;
width: 92%;
height: 80rpx;
margin:0 auto 33rpx auto;
border-radius: 32rpx;
padding: 22rpx 30rpx;
}
.labelsBox{
height: 125rpx;
}
::v-deep .u-button.data-v-461e713c {
width: 225rpx !important;
height: 88rpx !important;
border-radius: 50rpx !important;
background-color: rgba(103, 83, 231, 1);
color: rgba(255, 255, 255, 1);
}
::v-deep .u-button__text.data-v-461e713c {
font-size: 34rpx !important;
}
.detailLabels{
display: flex;

}
.home,.company,.school,.selfDefine{
height: 36rpx;
background-color: rgb(196, 196, 196);
padding: 12rpx;
border-radius: 42rpx;
margin-left: 26rpx;
line-height: 36rpx;
margin-top: 17rpx;
color: white;
}
.home{
margin-left: 0;
}
.ChangeColor{
background-color: rgba(103, 83, 231, 1) !important;
}
.writeSelfDefineBox{
    width: 100%;
    height: 85rpx;
    background-color: rgb(196, 196, 196);
    margin: 26rpx 0rpx;
    border-radius: 48rpx;
    line-height: 85rpx;
}

.first,.second,.third{
    color: white;
}
.first{
    margin-left: 28rpx;
}
.second{
    margin-left: 289rpx;
}
.third{
    margin-left: 4rpx;
}
.fourth{
    color:rgba(103, 83, 231, 1) ;
    font-size: 38rpx;
    margin-left: 16rpx;
}
.isBigBox{
    height: 248rpx !important;
}
.saveAddress{
    width: 199rpx;
    text-align: center;
    line-height: 43px;
    height: 84rpx;
    margin: 105rpx auto;
    color: white;
    background-color: rgb(103, 83, 231);
    border-radius: 36rpx;
}
</style>