<template>
  <div class="home w">
    <el-row>
      <el-col :span="4">
        <!-- 侧边菜单导航栏 -->
        <SideBar :newsNavTitle="newsNavTitle" @findname="findnameFn" />
      </el-col>
      <el-col class="offset" :span="14">
        <!-- 主要新闻栏 -->
        <NewsMain :newsDataList="newsDataList" />
      </el-col>
      <el-col :span="6">
        <!-- 账户栏 -->
        <Account />
        <!-- 博学谷本地新闻 -->
        <LocalNews />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideBar from './components/side-bar.vue'
import NewsMain from './components/news-main.vue'
import Account from './components/account.vue'
import LocalNews from './components/local-news.vue'
import request from '@/utils/request'

export default {
  name: 'Home',
  data () {
    return {
      newsNavTitle: [
        { title: '头条', id: '0', name: 'top' },
        { title: '社会', id: '1', name: 'shehui' },
        { title: '国内', id: '2', name: 'guonei' },
        { title: '国际', id: '3', name: 'guoji' },
        { title: '娱乐', id: '4', name: 'yule' },
        { title: '体育', id: '5', name: 'tiyu' },
        { title: '军事', id: '6', name: 'junshi' },
        { title: '科技', id: '7', name: 'keji' },
        { title: '财经', id: '8', name: 'caijing' },
        { title: '时尚', id: '9', name: 'shishang' }
      ],
      newsDataList: [],
      newsName: 'top'
    }
  },
  components: {
    SideBar,
    NewsMain,
    Account,
    LocalNews
  },
  methods: {
    // async findnameFn(key) {
    //   // console.log(this.newsNavTitle[key].name)
    //   this.newsName = this.newsNavTitle[key].name
    //   const { result } = await axios.get(
    //     `http://127.0.0.1:3006/${this.newsName}`
    //   )
    //   console.log(result)
    // }
    async findnameFn (key) {
      // console.log(this.newsNavTitle[key].name)
      this.newsName = this.newsNavTitle[key].name
      const { data } = await request(`${this.newsName}`, 'get')
      // console.log(data)
      this.newsDataList = data
    }
  },
  mounted () {
    this.findnameFn(0)
  }
}
</script>
<style lang="less" scoped>
.home {
  margin-top: 30px;
  position: relative;
  .offset {
    margin-left: 200px;
  }
}
</style>
