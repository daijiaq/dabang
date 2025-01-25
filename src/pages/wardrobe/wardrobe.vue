<!-- <template>
    <view>这是3D试衣页面</view>
    
</template> -->

<template>
      <view>这是3D试衣页面</view>
    <view class="container">
      <canvas type="webgl" id="webgl" 
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
              :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }">
      </canvas>
    </view>
  </template>
   
  <script>


//   import * as THREE from 'three';
//   import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
   
//   export default {
//     data() {
//       return {
//         canvasWidth: 375,
//         canvasHeight: 600,
//         renderer: null,
//         camera: null,
//         scene: null,
//         cube: null,
//         controls: null,
//         canvas: null,
//         animation: null
//       }
//     },
//     onLoad() {
//       // 获取设备信息以设置画布大小
//       const info = uni.getSystemInfoSync();
//       this.canvasWidth = info.windowWidth;
//       this.canvasHeight = info.windowHeight;
      
//       // 初始化3D场景
//       this.$nextTick(() => {
//         this.initThree();
//       });
//     },
//     methods: {
//       initThree() {
//         // 获取canvas上下文
//         const query = uni.createSelectorQuery().in(this);
//         query.select('#webgl')
//           .node()
//           .exec((res) => {
//             const canvas = res[0].node;
//             this.canvas = canvas;
            
//             // 创建渲染器
//             this.renderer = new THREE.WebGLRenderer({
//               canvas: canvas,
//               antialias: true
//             });
//             this.renderer.setSize(this.canvasWidth, this.canvasHeight);
//             this.renderer.setPixelRatio(uni.getSystemInfoSync().pixelRatio);
            
//             // 创建场景
//             this.scene = new THREE.Scene();
//             this.scene.background = new THREE.Color(0xf0f0f0);
            
//             // 创建相机
//             this.camera = new THREE.PerspectiveCamera(
//               75,
//               this.canvasWidth / this.canvasHeight,
//               0.1,
//               1000
//             );
//             this.camera.position.z = 5;
            
//             // 创建控制器
//             this.controls = new OrbitControls(this.camera, canvas);
//             this.controls.enableDamping = true;
            
//             // 添加光源
//             const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//             this.scene.add(ambientLight);
            
//             const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//             directionalLight.position.set(2, 2, 5);
//             this.scene.add(directionalLight);
            
//             // 创建一个示例立方体
//             const geometry = new THREE.BoxGeometry(1, 1, 1);
//             const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
//             this.cube = new THREE.Mesh(geometry, material);
//             this.scene.add(this.cube);
            
//             // 开始动画循环
//             this.animate();
//           });
//       },
      
//       animate() {
//         this.animation = requestAnimationFrame(() => {
//           this.animate();
//         });
        
//         // 旋转立方体
//         if (this.cube) {
//           this.cube.rotation.x += 0.01;
//           this.cube.rotation.y += 0.01;
//         }
        
//         // 更新控制器
//         if (this.controls) {
//           this.controls.update();
//         }
        
//         // 渲染场景
//         if (this.renderer && this.scene && this.camera) {
//           this.renderer.render(this.scene, this.camera);
//         }
//       },
      
//       // 触摸事件处理
//       onTouchStart(event) {
//         const touch = event.touches[0];
//         const rect = this.canvas.getBoundingClientRect();
//         const x = touch.clientX - rect.left;
//         const y = touch.clientY - rect.top;
        
//         // 在这里处理触摸开始事件
//       },
      
//       onTouchMove(event) {
//         const touch = event.touches[0];
//         const rect = this.canvas.getBoundingClientRect();
//         const x = touch.clientX - rect.left;
//         const y = touch.clientY - rect.top;
        
//         // 在这里处理触摸移动事件
//       },
      
//       onTouchEnd() {
//         // 在这里处理触摸结束事件
//       }
//     },
    
//     onUnload() {
//       // 清理资源
//       if (this.animation) {
//         cancelAnimationFrame(this.animation);
//       }
      
//       if (this.renderer) {
//         this.renderer.dispose();
//       }
      
//       if (this.geometry) {
//         this.geometry.dispose();
//       }
      
//       if (this.material) {
//         this.material.dispose();
//       }
//     }
//   }
  </script>
   
  <style>
  .container {
    width: 100%;
    height: 100vh;
  }
  </style>