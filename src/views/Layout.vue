<template>
  <div class="Layout-container w">
    <el-row type="flex" justify="space-between">
      <el-col :span="16">
        <span class="left"
          >传智播客旗下高端IT在线教育平台|<i> 咨询热线：010-56288220</i></span
        >
      </el-col>
      <el-col :span="8">
        <span class="right">一样的在线教育，不一样的教学品质</span>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped>
.Layout-container {
  height: 27px;
  line-height: 27px;
  background-color: #f7f7f7;
  span {
    font-weight: 700;
    i {
      color: #3c61d7;
    }
    &.left {
      display: block;
      // width: 300px;
    }
    &.right {
      float: right;
      font-family: Helvetica, 'Hiragino Sans GB', 'LiSu', '微软雅黑', Arial,
        sans-serif;
      font-size: 18px;
    }
  }
}
</style>
