<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<!-- <style></style> -->

<style lang="scss">
@import "uview-plus/index.scss";

body {
  font-family: "Microsoft YaHei" !important;
}
</style>
