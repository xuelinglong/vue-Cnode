<template>
  <div class="Topics">
    <div class="Topics-tab">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="all" title="全部"/>
        <mu-tab value="good" title="精华"/>
        <mu-tab value="share" title="分享"/>
        <mu-tab value="ask" title="问答"/>
        <mu-tab value="job" title="招聘"/>
        <mu-tab value="dev" title="测试帖"/>
      </mu-tabs>
    </div>

    <div class="Topics-contentlist" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="loadTop"/>
      <topics-item v-for="topic in topics.topicsdata" :key="topic.id" :topic="topic"></topics-item>
      <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText="正在加载..."/> -->
      <p class="Topics-loading" v-show="this.busy">
        <mu-circular-progress :size="25"/>
        正在加载...
      </p>
      <p class="Topics-isError" v-show="this.isError">加载失败，请重试！！！</p>
      <p class="Topics-nomoredata" v-show="this.nomoredata">到底啦～</p>
    </div>

  </div>
</template>

<script>
import * as type from './../../store/type'
import { mapState, mapGetters } from 'vuex'
import TopicsItem from './TopicsItem'
let tabName = 'all'
export default {
  name: 'Topics',
  components: {
    'topics-item': TopicsItem
  },
  data () {
    return {
      activeTab: tabName,
      page: 0,
      refreshing: false,
      trigger: null,
      // loading: false,
      // scroller: null,
      busy: false,
      nomoredata: false,
      isError: false
    }
  },
  created () {
    this.fetchtopics('all', 0, 20)
    this.page = 1
  },
  mounted () {
    this.trigger = this.$el
    // this.scroller = this.$el
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      tabName = val
      this.$store.dispatch(type.CLEAR_TOPICSDATA)
      this.page = 1
      switch (val) {
        case 'all':
          this.fetchtopics('all', 0, 20)
          break
        case 'good':
          this.fetchtopics('good', 0, 20)
          break
        case 'share':
          this.fetchtopics('share', 0, 20)
          break
        case 'ask':
          this.fetchtopics('ask', 0, 20)
          break
        case 'job':
          this.fetchtopics('job', 0, 20)
          break
        case 'dev':
          this.fetchtopics('dev', 0, 20)
          break
      }
    },
    fetchtopics (tab, page, limit) {
      this.$store.dispatch(type.FETCH_TOPICS, {
        tab, page, limit
      })
    },
    loadTop () {
      this.refreshing = true
      this.$store.dispatch(type.CLEAR_TOPICSDATA)
      setTimeout(() => {
        this.fetchtopics(this.activeTab, 0, 20)
        this.page = 1
        this.refreshing = false
      }, 2000)
    },
    loadMore () {
      if (this.TOPICS_DATA_LENGTH > 0 && !this.nomoredata) {
        this.isError = false
        this.busy = true
        this.page += 1
        this.fetchtopics(this.activeTab, this.page, 20)
        setTimeout(() => {
          this.busy = false
          if (this.TOPICS_DATA_LENGTH % 20 === 0 && this.TOPICS_DATA_LENGTH / 20 < this.page) {
            this.page -= 1
            this.isError = true
          } else if (this.TOPICS_DATA_LENGTH % 20 !== 0) {
            this.nomoredata = true
          }
        }, 3000)
      }
    }
  },
  computed: {
    ...mapState([
      'topics'
    ]),
    ...mapGetters([
      'TOPICS_DATA_LENGTH'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.Topics {
  width 100%
  position fixed
  top 56px
  left 0
  bottom 56px
  overflow-y auto
  background #f0f0f0
}

.Topics-tab {
  width 100%
  z-index 9
}

.mu-tab-link {
  height 48px
  padding 0 2px
}

.Topics-contentlist {
  width 100%
  position fixed
  top 104px
  left 0
  bottom 56px
  overflow-y auto
}

.Topics-loading {
  width 100%
  height 25px
  font-size 1.1rem
  box-sizing border-box
}

.Topics-nomoredata {
  width 100%
  height 25px
  font-size 1.2rem
  box-sizing border-box
}

.Topics-isError {
  width 100%
  height 25px
  font-size 1.2rem
  box-sizing border-box
}
</style>
