<template>
  <div class="User">
    <div class="User-login" v-if="!login.loginData.success">
      <mu-text-field hintText="accesstoken" v-model="accesstoken" type="string" icon="lock_outline" underlineFocusClass="line-focus"/><br/>
      <div class="User-button-box">
        <div class="User-main-button">
          <mu-raised-button label="登录" :fullWidth="true" class="User-demo-raised-button" @click.native="tapToLogin" primary/><br/>
        </div>
        <div class="User-main-button">
          <mu-raised-button label="注册" :fullWidth="true" class="User-demo-raised-button" href="https://www.vue-js.com/signup" primary/>
        </div>
      </div>
    </div>

    <div class="User-view" v-if="login.loginData.success">
      <div class="User-author-image">
        <img class="User-image" :src="login.loginData.avatar_url" alt=""><br/>
        <span class="User-loginname">{{ login.loginData.loginname }}</span>
      </div>

      <mu-list>
        <mu-list-item title="我收藏的话题" :to="{name: 'usertopics', params: {type: 'topic_collect'}}" titleClass="left">
          <mu-icon slot="left" value="star" style="color: #ffd600"/>
          <mu-badge :content="topicCollect" class="demo-icon-badge" slot="right" v-show="TOPIC_COLLECT > 0" circle secondary />
          <span class="User-no-count" slot="right" v-show="TOPIC_COLLECT === 0"></span>
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-list-item title="我参与的话题" :to="{name: 'usertopics', params: {type: 'recent_replies'}}">
          <mu-icon slot="left" value="chat" style="color: #00b1fe"/>
          <mu-badge :content="recentReplies" class="demo-icon-badge" slot="right" v-show="RECENT_REPLIES > 0" circle secondary />
          <span class="User-no-count" slot="right" v-show="RECENT_REPLIES === 0"></span>
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-list-item title="我最近的话题" :to="{name: 'usertopics', params: {type: 'recent_topics'}}">
          <mu-icon slot="left" value="bubble_chart" style="color: #e91e63"/>
          <mu-badge :content="recentTopics" class="demo-icon-badge" slot="right" v-show="RECENT_TOPICS > 0" circle secondary />
          <span class="User-no-count" slot="right" v-show="RECENT_TOPICS === 0"></span>
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
      </mu-list>

      <div class="User-loginout">
        <mu-raised-button label="退出登录" :fullWidth="true" class="demo-raised-button" @click.native="loginOut" primary/>
      </div>
    </div>
  </div>
</template>

<script>
import * as type from './../../store/type'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
      accesstoken: 'af0a22ca-d49f-47ec-afef-51b9cabf4c3c',
      topicCollect: '0',
      recentReplies: '0',
      recentTopics: '0'
    }
  },
  beforeUpdate () {
    this.lengthToString()
  },
  methods: {
    lengthToString () {
      this.topicCollect = this.TOPIC_COLLECT.toString()
      this.recentReplies = this.RECENT_REPLIES.toString()
      this.recentTopics = this.RECENT_TOPICS.toString()
    },
    tapToLogin () {
      this.$store.dispatch(type.LOGIN, {
        accesstoken: this.accesstoken
      })
    },
    loginOut () {
      this.$store.dispatch(type.LOGINOUT)
    }
  },
  computed: {
    ...mapState([
      'login'
    ]),
    ...mapGetters([
      'TOPIC_COLLECT',
      'RECENT_REPLIES',
      'RECENT_TOPICS'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.User {
  width 100%
  text-align center
  position fixed
  top 56px
  left 0
  bottom 56px
  background #f0f0f0
}

.User-login {
  width 100%
  height 100%
  padding 10% 0
  box-sizing border-box
}

.User-button-box {
  width 80%
  margin-left 10%
}

.User-main-button {
  width 100%
  margin-top 30px
}

.User-demo-raised-button {
  font-size 1.1rem
}

.User-view {
  width 100%
  height 100%
}

.User-author-image {
  width 100%
  height 37%
  padding-top 5%
  background #7e57c2
}

.User-image {
  border-radius 100%
}

.User-loginname {
  font-size 1.1rem
  color #ffffff
}

.mu-list {
  padding 15px 0
  text-align left
}

.mu-item-wrapper {
  background #ffffff
  border-bottom 1px solid #f0f0f0
}

.mu-item-right {
  width 50px
}

.User-no-count {
  width 24px
  height 24px
  font-size 0.9rem
  color #ffffff
  text-align center
  border-radius 100%
}

.User-loginout {
  width 80%
  position relative
  top 5%
  left 10%
  font-size 1.2rem
}
</style>
