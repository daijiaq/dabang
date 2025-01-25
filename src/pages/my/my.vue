<template>
    <view class="whole-page">
        <view class="userInfo">
            <image
                src="../../static/dabang/icon-08.png"
                mode="scaleToFill"
                class="avatar"
            />
            <view class="userName">用户名称</view>
        </view>
    
        <view class="navigateBox">
            <view class="myOrder">
                <image
                    src="../../static/dabang/order.png"
                    mode="scaleToFill"
                    class="orderImage"
                />
                <view class="text1 text">我的订单</view>
            </view>
            <view class="addressManagement" @click="toAddAddress">
                <image
                    src="../../static/dabang/address.png"
                    mode="scaleToFill"
                    class="addressImage"
                />
                <view class="text2 text">地址管理</view>
            </view>
            <view class="history">
                <image
                    src="../../static/dabang/history.png"
                    mode="scaleToFill"
                    class="historyImage"
                />
                <view class="text3 text">浏览历史</view>
            </view>
            <view class="collection">
                <image
                    src="../../static/dabang/collection.png"
                    mode="scaleToFill"
                    class="collectionImage"
                />
                <view class="text4 text">收藏穿搭</view>
            </view>

        </view>
        <view class="figureData" @click="popWriteBox">
            <view class="size">
                <text class="sizes">S</text>
                <text class="sizem">M</text>
                <text class="sizel">L</text>
            </view>
            <view class="height">
                <view class="heightText">身高</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view>
            <view class="weight">
                <view class="weightText" >体重</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view> 
            <view class="bust">
                <view  class="bustText">胸围</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view>
             <view class="waist">
                <view class="waistText">腰围</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view> 
            <view class="hip">
                <view class="hipText">臀围</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view> 
            <view class="shoulderWidth">
                <view class="shoulderWidthText">肩宽</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view> 
            <view class="armLength">
                <view class="armLengthText">臂长</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view> 
            <view class="legLength">
                <view class="legLengthText">腿长</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view>
            <view class="neck">
                <view class="neckText">颈围</view>
                <view class="progress">
                    <view class="dashLine dashLine1"></view>
                    <view class="dashLine dashLine2"></view>
                    <view class="dashLine dashLine3"></view>
                </view>
            </view>
        </view>

        <template>
	        <view >
	         	<up-modal :show="show" style="border-radius: 68rpx;" class="figureBox" @confirm="show=!(heightData&&weightData)">
                    <view class="figureDataWriteBox">
                        <text>身高</text>
                        <up-input
                             border="bottom"
                             class="heightData"
                             v-model="heightData"
                        ></up-input>
                    </view>
                    <text class="mustWrite1">必填</text>

                    <view class="figureDataWriteBox"> 
                        <text>体重</text>
                        <up-input
                            class="weightData"
                             border="bottom"
                             v-model="weightData"
                        ></up-input>
                    </view>
                    <text class="mustWrite2">必填</text>

                    <view class="figureDataWriteBox">
                        <text>胸围</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                    <view class="figureDataWriteBox"> 
                        <text>腰围</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                    <view class="figureDataWriteBox">
                        <text>臀围</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                    <view class="figureDataWriteBox">
                        <text>肩宽</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                    <view class="figureDataWriteBox">
                        <text>臂长</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                    <view class="figureDataWriteBox">
                        <text>腿长</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                    <view class="figureDataWriteBox">
                        <text>颈围</text>
                        <up-input
                             border="bottom"
                        ></up-input>
                    </view>
                 
                </up-modal>
		       
	        </view>
         </template>
    </view>
   
</template>

<script setup lang="ts">
import { ref } from 'vue';  
  
  // 使用 ref 创建响应式数据  
  const show = ref<boolean>(false);  
  const  popWriteBox=()=>{
    show.value=true
  }
  const heightData=ref()
  const weightData=ref()

  const toAddAddress=()=>{
    uni.navigateTo({
      url: '/pages/my/address/address'
    })
  }
</script>

<style lang="scss" scoped>
    .whole-page{
        width: 100%;
        height: 100%;
        background-color: rgba(247, 247, 247, 1);
        padding-bottom: 44rpx;
    }
  .userInfo{
    display: flex;
    align-items: center;
  }
    .avatar{ 
        border-radius: 50%;
        width: 120rpx;
    margin-top: 51rpx;
    margin-left: 37rpx;
    height: 120rpx;
    }
    .userName{
        margin-left: 22rpx;
    margin-top: 44rpx;
    font-size: 40rpx;
    }
    .navigateBox{
        display: flex;
        justify-content: space-between;
        margin: 51rpx auto;
    width: 92%;
    height: 236rpx;
    border-radius: 62rpx;
    background-color: white;
    }
    .myOrder,.addressManafement,.history,.collection{
        flex-grow: 1;
        box-sizing: border-box;
        text-align: center;
    }
    .orderImage,.addressImage,.historyImage,.collectionImage{
        width: 60rpx;
    // margin-left: 45rpx;
    margin-top: 50rpx;
    height: 72rpx;
    }
    .addressImage{
        margin-left: 44rpx;
    }
    .text{
        margin-left: 20rpx;
        margin-top: 12rpx;
    }
    .text3{
        margin-left: 30rpx !important;
    }

    .figureData{
        width: 92%;
        background-color: white;
        border-radius: 62rpx;
        margin: 73rpx auto;
        padding-bottom: 68rpx;
    }

    .size{
        padding-top: 40rpx;
    }
    .sizes{
        margin-left: 209rpx;
    }
    .sizem{
        margin-left: 136rpx;
    }
    .sizel{
        margin-left: 150rpx;
    }

    .progress{
        height: 80rpx;
        width: 78%;
        margin-left: 16rpx;
        background: rgba(196, 196, 196, 1);
    }

    .height,.weight,.bust,.waist,.hip,.shoulderWidth,.armLength,.legLength,.neck{
        display: flex;
        align-items: center;
        margin-top: 46rpx;
    }
    .heightText,.weightText,.bustText,.waistText,.hipText,.shoulderWidthText,.armLengthText,.legLengthText,.neckText{
        margin-left: 26rpx;
    }
    .dashLine{
        display: inline-block;
        width: 2rpx;
        border-left: 1px dashed #000;
        margin-left: 40rpx;
        height: 80rpx;
    }
    .dashLine1{
        margin-left: 115rpx;
    }
    .dashLine2{
        margin-left: 156rpx;
    }
    .dashLine3{
        margin-left: 171rpx;
    }


    ::v-deep .u-popup__content.data-v-74921bef {
        border-radius: 68rpx;
    }
    ::v-deep .u-modal.data-v-12b77a26 {
    width: 372rpx !important;
    // height: 604rpx;    
}
::v-deep .u-modal__button-group.data-v-12b77a26 {
   
    width: 200rpx !important;
    border-radius: 40rpx;
    margin: 0 auto;
    margin-block: 50rpx;
    background-color: rgba(103, 83, 231, 1);;
}
::v-deep .u-modal__button-group__wrapper__text.data-v-12b77a26 {
    color: white !important;
}
::v-deep .u-line.data-v-bbd9963c {
    border: 0 !important;
}
::v-deep .u-modal__content.data-v-12b77a26 {
    margin-bottom: 15rpx;
}
::v-deep .data-v-d3687551 .u-popup__content.data-v-74921bef {
    border-radius: 68rpx !important;
}
::v-deep .u-modal__content.data-v-12b77a26 {
    display: block;
}
.figureDataWriteBox{
    display: flex;
    align-items: flex-end;
    margin-bottom: 22rpx;
}
::v-deep .u-input--no-radius.data-v-5904192e{
    margin-left: 22rpx;
}

.figureBox{
    position: relative;
}

.mustWrite1{
    position: absolute;
    top: 61rpx;
    right: 47rpx;
    font-size: 25rpx;
    color: rgba(103, 83, 231, 1);
}
.mustWrite2{
    position: absolute;
    top: 128rpx;
    right: 47rpx;
    font-size: 25rpx;
    color: rgba(103, 83, 231, 1);
}
::v-deep .u-input--no-radius.data-v-5904192e {
    padding: 0 !important;
}

</style>