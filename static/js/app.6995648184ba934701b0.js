webpackJsonp([1],{"1rPx":function(t,e){},"3w+Z":function(t,e){},"4Uwr":function(t,e,s){t.exports=s.p+"static/img/logo.8874938.jpg"},"4wPn":function(t,e){},D1NQ:function(t,e){},DLBe:function(t,e){},Dgpq:function(t,e){},E51W:function(t,e){},GbEw:function(t,e){},I265:function(t,e){},MLXy:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Dd8w"),n=s.n(i),o=s("NYxO"),c={name:"Bottomnav",methods:{handleChange:function(t){this.$store.dispatch("HANDEL_CHANGE",{active:t})}},computed:n()({},Object(o.c)(["common"]))},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("mu-paper",{attrs:{zDepth:0}},[e("mu-bottom-nav",{attrs:{value:this.common.bottomnav.active},on:{change:this.handleChange}},[e("mu-bottom-nav-item",{attrs:{value:"topics",title:"话题",to:"/topics",icon:"view_list"}}),this._v(" "),e("mu-bottom-nav-item",{attrs:{value:"message",title:"消息",to:"/message",icon:"note"}}),this._v(" "),e("mu-bottom-nav-item",{attrs:{value:"push",title:"发布",to:"/push",icon:"send"}}),this._v(" "),e("mu-bottom-nav-item",{attrs:{value:"user",title:"我的",to:"/user",icon:"face"}})],1)],1)},staticRenderFns:[]};var l=s("VU/8")(c,r,!1,function(t){s("I265")},null,null).exports,u={name:"Appbar",computed:n()({},Object(o.c)(["common"]))},m={render:function(){var t=this.$createElement;return(this._self._c||t)("mu-appbar",{attrs:{title:this.common.appbar.title,zDepth:0}})},staticRenderFns:[]};var _={name:"App",components:{"app-bottomnav":l,"app-appbar":s("VU/8")(u,m,!1,function(t){s("Dgpq")},null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-appbar"),this._v(" "),e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view"),this._v(" "),e("app-bottomnav")],1)},staticRenderFns:[]};var d=s("VU/8")(_,p,!1,function(t){s("sWdm")},null,null).exports,h=s("/ocq"),v={name:"TopicsItem",props:{topic:{type:Object}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"TopicsItem"},[s("router-link",{attrs:{to:{name:"details",params:{id:t.topic.id}}}},[s("div",{staticClass:"TopicsItem-top-box"},[s("div",{staticClass:"TopicsItem-author-img"},[s("img",{staticClass:"TopicsItem-author",attrs:{src:t.topic.author.avatar_url}})]),t._v(" "),s("div",{staticClass:"TopicsItem-title-box"},[t._v("\n        "+t._s(t.topic.title)+"\n      ")]),t._v(" "),s("div",{staticClass:"TopicsItem-label-box"},[s("span",{staticClass:"label"},[t._v(t._s(t.topic.tab))])])]),t._v(" "),s("div",{staticClass:"TopicsItem-icon-box"},[s("div",{staticClass:"TopicsItem-icon-left"},[s("span",{staticClass:"TopicsItem-author-name"},[t._v(t._s(t.topic.author.loginname)+"   "+t._s(t._f("filterTime")(t.topic.create_at))+" ")])]),t._v(" "),s("div",{staticClass:"TopicsItem-icon-right"},[s("mu-icon",{attrs:{value:"visibility",size:19,color:"#D3DCE6"}}),t._v(" "),s("span",{staticClass:"TopicsItem-visit-count"},[t._v(t._s(t.topic.visit_count))]),t._v(" "),s("mu-icon",{attrs:{value:"textsms",size:19,color:"#D3DCE6"}}),t._v(" "),s("span",{staticClass:"TopicsItem-reply-count"},[t._v(t._s(t.topic.reply_count))])],1)])])],1)},staticRenderFns:[]};var g="all",E={name:"Topics",components:{"topics-item":s("VU/8")(v,C,!1,function(t){s("MLXy")},null,null).exports},data:function(){return{activeTab:g,page:0,refreshing:!1,trigger:null,busy:!1,nomoredata:!1,isError:!1}},created:function(){this.fetchtopics("all",0,20),this.page=1},mounted:function(){this.trigger=this.$el},methods:{handleTabChange:function(t){switch(this.activeTab=t,g=t,this.$store.dispatch("CLEAR_TOPICSDATA"),this.page=1,t){case"all":this.fetchtopics("all",0,20);break;case"good":this.fetchtopics("good",0,20);break;case"share":this.fetchtopics("share",0,20);break;case"ask":this.fetchtopics("ask",0,20);break;case"job":this.fetchtopics("job",0,20);break;case"dev":this.fetchtopics("dev",0,20)}},fetchtopics:function(t,e,s){this.$store.dispatch("FETCH_TOPICS",{tab:t,page:e,limit:s})},loadTop:function(){var t=this;this.refreshing=!0,this.$store.dispatch("CLEAR_TOPICSDATA"),setTimeout(function(){t.fetchtopics(t.activeTab,0,20),t.page=1,t.refreshing=!1},2e3)},loadMore:function(){var t=this;this.TOPICS_DATA_LENGTH>0&&!this.nomoredata&&(this.isError=!1,this.busy=!0,this.page+=1,this.fetchtopics(this.activeTab,this.page,20),setTimeout(function(){t.busy=!1,t.TOPICS_DATA_LENGTH%20==0&&t.TOPICS_DATA_LENGTH/20<t.page?(t.page-=1,t.isError=!0):t.TOPICS_DATA_LENGTH%20!=0&&(t.nomoredata=!0)},3e3))}},computed:n()({},Object(o.c)(["topics"]),Object(o.b)(["TOPICS_DATA_LENGTH"]))},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Topics"},[s("div",{staticClass:"Topics-tab"},[s("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[s("mu-tab",{attrs:{value:"all",title:"全部"}}),t._v(" "),s("mu-tab",{attrs:{value:"good",title:"精华"}}),t._v(" "),s("mu-tab",{attrs:{value:"share",title:"分享"}}),t._v(" "),s("mu-tab",{attrs:{value:"ask",title:"问答"}}),t._v(" "),s("mu-tab",{attrs:{value:"job",title:"招聘"}}),t._v(" "),s("mu-tab",{attrs:{value:"dev",title:"测试帖"}})],1)],1),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"Topics-contentlist",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"30"}},[s("mu-refresh-control",{attrs:{refreshing:t.refreshing,trigger:t.trigger},on:{refresh:t.loadTop}}),t._v(" "),t._l(t.topics.topicsdata,function(t){return s("topics-item",{key:t.id,attrs:{topic:t}})}),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:this.busy,expression:"this.busy"}],staticClass:"Topics-loading"},[s("mu-circular-progress",{attrs:{size:25}}),t._v("\n      正在加载...\n    ")],1),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:this.isError,expression:"this.isError"}],staticClass:"Topics-isError"},[t._v("加载失败，请重试！！！")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:this.nomoredata,expression:"this.nomoredata"}],staticClass:"Topics-nomoredata"},[t._v("到底啦～")])],2)])},staticRenderFns:[]};var T=s("VU/8")(E,f,!1,function(t){s("DLBe")},null,null).exports,b={name:"MessageItem",props:{message:{type:Object}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MessageItem"},[s("router-link",{attrs:{to:{name:"details",params:{id:t.message.topic.id}}}},[s("div",{staticClass:"top-box"},[s("div",{staticClass:"authorimg-box"},[s("img",{staticClass:"author-img",attrs:{src:t.message.author.avatar_url}})]),t._v(" "),s("div",{staticClass:"authorname-box"},[t._v("\n        来自："+t._s(t.message.author.loginname)+"\n      ")]),t._v(" "),s("div",{staticClass:"time-box"},[t._v("\n        "+t._s(t._f("filterTime")(t.message.reply.create_at))+"\n      ")])]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n      "+t._s(t.message.reply.content)+"\n    ")])])],1)},staticRenderFns:[]};var L={name:"Message",components:{"message-item":s("VU/8")(b,S,!1,function(t){s("q7AW")},null,null).exports},created:function(){this.login.loginData.success&&this.$store.dispatch("GET_MESSAGE_COUNT",{accesstoken:"af0a22ca-d49f-47ec-afef-51b9cabf4c3c"})},methods:{goToLogin:function(){nt.push({name:"user"}),this.$store.dispatch("HANDEL_CHANGE",{active:"user"})}},computed:n()({},Object(o.c)(["login","messages"]),Object(o.b)(["HASNOT_READ_MESSAGES","HAS_READ_MESSAGES"]))},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Message"},[t.login.loginData.success?t._e():s("div",{staticClass:"Message-login"},[t._m(0),t._v(" "),s("div",{staticClass:"Message-loginbutton"},[s("mu-raised-button",{staticClass:"Message-demo-raised-button",attrs:{label:"去登录",fullWidth:!0,primary:""},nativeOn:{click:function(e){t.goToLogin(e)}}}),s("br")],1)]),t._v(" "),t.login.loginData.success?s("div",{staticClass:"Message-view"},[s("div",{staticClass:"Message-title-text"},[t._v("未读消息("+t._s(t.HASNOT_READ_MESSAGES)+")")]),t._v(" "),t.HASNOT_READ_MESSAGES>0?s("div",{staticClass:"Message-list"},t._l(t.messages.messageData.hasnot_read_messages,function(t){return s("message-item",{key:t.reply.id,attrs:{message:t}})})):t._e(),t._v(" "),0===t.HASNOT_READ_MESSAGES?s("div",{staticClass:"Message-blank"},[t._v("\n      无新消息\n    ")]):t._e(),t._v(" "),s("div",{staticClass:"Message-title-text"},[t._v("过往已读消息("+t._s(t.HAS_READ_MESSAGES)+")")]),t._v(" "),t.HAS_READ_MESSAGES>0?s("div",{staticClass:"Message-list"},t._l(t.messages.messageData.has_read_messages,function(t){return s("message-item",{key:t.id,attrs:{message:t}})})):t._e(),t._v(" "),0===t.HAS_READ_MESSAGES?s("div",{staticClass:"Message-blank"},[t._v("\n      无过往消息\n    ")]):t._e()]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Message-main-image"},[e("img",{staticClass:"Message-logo",attrs:{src:s("4Uwr"),alt:""}})])}]};var A=s("VU/8")(L,D,!1,function(t){s("sboj")},null,null).exports,I={name:"Push",data:function(){return{accesstoken:"af0a22ca-d49f-47ec-afef-51b9cabf4c3c",tab:"ask",list:[{tab:"ask",title:"问答"},{tab:"share",title:"分享"},{tab:"job",title:"招聘"},{tab:"dev",title:"测试贴"}],title:[],content:[],snackbar:!1}},methods:{goToLogin:function(){nt.push({name:"user"}),this.$store.dispatch("HANDEL_CHANGE",{active:"user"})},pushNewTopic:function(){var t=this;this.login.loginData.success&&(this.title.length>10&&this.content.length>0?(this.$store.dispatch("PUSH_NEW_TOPIC",{accesstoken:this.accesstoken,loginname:this.login.loginData.loginname,title:this.title,tab:this.tab,content:this.content}),this.tab="ask",this.title=[],this.content=[]):(this.snackbar=!0,setTimeout(function(){t.hideSnackbar()},1e3)))},hideSnackbar:function(){this.snackbar=!1,this.snackTimer&&clearTimeout(this.snackTimer)}},computed:n()({},Object(o.c)(["login"]))},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Push"},[t.login.loginData.success?t._e():s("div",{staticClass:"Push-login"},[t._m(0),t._v(" "),s("div",{staticClass:"Push-button"},[s("mu-raised-button",{staticClass:"Push-demo-raised-button",attrs:{label:"去登录",fullWidth:!0,primary:""},nativeOn:{click:function(e){t.goToLogin(e)}}}),s("br")],1)]),t._v(" "),t.login.loginData.success?s("div",{staticClass:"Push-view"},[s("mu-select-field",{attrs:{labelFocusClass:["label-foucs"],label:"选择话题类型"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.list,function(t){return s("mu-menu-item",{key:t.index,attrs:{value:t.tab,title:t.title}})})),s("br"),t._v(" "),s("mu-text-field",{attrs:{label:"输入标题",hintText:"标题不得少于10个字符"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),s("br"),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"Push-content",attrs:{placeholder:"正文不能为空"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),s("div",{staticClass:"Push-button"},[s("mu-raised-button",{staticClass:"Push-demo-raised-button",attrs:{label:"发布",primary:"",fullWidth:""},on:{click:t.pushNewTopic}})],1),t._v(" "),t.snackbar?s("mu-snackbar",{attrs:{message:"请检查标题和正文的长度",action:"关闭"},on:{actionClick:t.hideSnackbar,close:t.hideSnackbar}}):t._e()],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Push-main-image"},[e("img",{staticClass:"Push-logo",attrs:{src:s("4Uwr"),alt:""}})])}]};var P=s("VU/8")(I,O,!1,function(t){s("4wPn")},null,null).exports,k={name:"User",data:function(){return{accesstoken:"af0a22ca-d49f-47ec-afef-51b9cabf4c3c",topicCollect:"0",recentReplies:"0",recentTopics:"0"}},beforeUpdate:function(){this.lengthToString()},methods:{lengthToString:function(){this.topicCollect=this.TOPIC_COLLECT.toString(),this.recentReplies=this.RECENT_REPLIES.toString(),this.recentTopics=this.RECENT_TOPICS.toString()},tapToLogin:function(){this.$store.dispatch("LOGIN",{accesstoken:this.accesstoken})},loginOut:function(){this.$store.dispatch("LOGINOUT")}},computed:n()({},Object(o.c)(["login"]),Object(o.b)(["TOPIC_COLLECT","RECENT_REPLIES","RECENT_TOPICS"]))},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"User"},[t.login.loginData.success?t._e():s("div",{staticClass:"User-login"},[s("mu-text-field",{attrs:{hintText:"accesstoken",type:"string",icon:"lock_outline",underlineFocusClass:"line-focus"},model:{value:t.accesstoken,callback:function(e){t.accesstoken=e},expression:"accesstoken"}}),s("br"),t._v(" "),s("div",{staticClass:"User-button-box"},[s("div",{staticClass:"User-main-button"},[s("mu-raised-button",{staticClass:"User-demo-raised-button",attrs:{label:"登录",fullWidth:!0,primary:""},nativeOn:{click:function(e){t.tapToLogin(e)}}}),s("br")],1),t._v(" "),s("div",{staticClass:"User-main-button"},[s("mu-raised-button",{staticClass:"User-demo-raised-button",attrs:{label:"注册",fullWidth:!0,href:"https://www.vue-js.com/signup",primary:""}})],1)])],1),t._v(" "),t.login.loginData.success?s("div",{staticClass:"User-view"},[s("div",{staticClass:"User-author-image"},[s("img",{staticClass:"User-image",attrs:{src:t.login.loginData.avatar_url,alt:""}}),s("br"),t._v(" "),s("span",{staticClass:"User-loginname"},[t._v(t._s(t.login.loginData.loginname))])]),t._v(" "),s("mu-list",[s("mu-list-item",{attrs:{title:"我收藏的话题",to:{name:"usertopics",params:{type:"topic_collect"}},titleClass:"left"}},[s("mu-icon",{staticStyle:{color:"#ffd600"},attrs:{slot:"left",value:"star"},slot:"left"}),t._v(" "),s("mu-badge",{directives:[{name:"show",rawName:"v-show",value:t.TOPIC_COLLECT>0,expression:"TOPIC_COLLECT > 0"}],staticClass:"demo-icon-badge",attrs:{slot:"right",content:t.topicCollect,circle:"",secondary:""},slot:"right"}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0===t.TOPIC_COLLECT,expression:"TOPIC_COLLECT === 0"}],staticClass:"User-no-count",attrs:{slot:"right"},slot:"right"}),t._v(" "),s("mu-icon",{attrs:{slot:"right",value:"chevron_right"},slot:"right"})],1),t._v(" "),s("mu-list-item",{attrs:{title:"我参与的话题",to:{name:"usertopics",params:{type:"recent_replies"}}}},[s("mu-icon",{staticStyle:{color:"#00b1fe"},attrs:{slot:"left",value:"chat"},slot:"left"}),t._v(" "),s("mu-badge",{directives:[{name:"show",rawName:"v-show",value:t.RECENT_REPLIES>0,expression:"RECENT_REPLIES > 0"}],staticClass:"demo-icon-badge",attrs:{slot:"right",content:t.recentReplies,circle:"",secondary:""},slot:"right"}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0===t.RECENT_REPLIES,expression:"RECENT_REPLIES === 0"}],staticClass:"User-no-count",attrs:{slot:"right"},slot:"right"}),t._v(" "),s("mu-icon",{attrs:{slot:"right",value:"chevron_right"},slot:"right"})],1),t._v(" "),s("mu-list-item",{attrs:{title:"我最近的话题",to:{name:"usertopics",params:{type:"recent_topics"}}}},[s("mu-icon",{staticStyle:{color:"#e91e63"},attrs:{slot:"left",value:"bubble_chart"},slot:"left"}),t._v(" "),s("mu-badge",{directives:[{name:"show",rawName:"v-show",value:t.RECENT_TOPICS>0,expression:"RECENT_TOPICS > 0"}],staticClass:"demo-icon-badge",attrs:{slot:"right",content:t.recentTopics,circle:"",secondary:""},slot:"right"}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0===t.RECENT_TOPICS,expression:"RECENT_TOPICS === 0"}],staticClass:"User-no-count",attrs:{slot:"right"},slot:"right"}),t._v(" "),s("mu-icon",{attrs:{slot:"right",value:"chevron_right"},slot:"right"})],1)],1),t._v(" "),s("div",{staticClass:"User-loginout"},[s("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"退出登录",fullWidth:!0,primary:""},nativeOn:{click:function(e){t.loginOut(e)}}})],1)],1):t._e()])},staticRenderFns:[]};var N=s("VU/8")(k,R,!1,function(t){s("f3m5")},null,null).exports,w={name:"UserTopicsItem",props:{topic:Object}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"UserTopicsItem"},[s("router-link",{attrs:{to:{name:"details",params:{id:t.topic.id}}}},[s("div",{staticClass:"UserTopicsItem-image-author"},[s("img",{staticClass:"UserTopicsItem-image",attrs:{src:t.topic.author.avatar_url}})]),t._v(" "),s("div",{staticClass:"UserTopicsItem-name-author"},[t._v("\n      "+t._s(t.topic.author.loginname)+"\n    ")]),t._v(" "),s("div",{staticClass:"UserTopicsItem-title-topic"},[t._v("\n      "+t._s(t.topic.title)+"\n    ")])])],1)},staticRenderFns:[]};var H={name:"UserTopics",components:{"user-topics-item":s("VU/8")(w,U,!1,function(t){s("D1NQ")},null,null).exports},data:function(){return{lists:[],title:"",length:0}},created:function(){switch(this.$route.params.type){case"topic_collect":this.lists=this.user.topic_collect.data,this.title="我收藏的话题",this.length=this.TOPIC_COLLECT;break;case"recent_topics":this.lists=this.user.userData.recent_topics,this.title="我最近的话题",this.length=this.RECENT_TOPICS;break;case"recent_replies":this.lists=this.user.userData.recent_replies,this.title="我参与的话题",this.length=this.RECENT_REPLIES}},methods:{back:function(){nt.go(-1)}},computed:n()({},Object(o.c)(["user"]),Object(o.b)(["RECENT_REPLIES","RECENT_TOPICS","TOPIC_COLLECT"]))},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Usertopics"},[s("div",{staticClass:"Usertopics-paperbar"},[s("div",{staticClass:"Usertopics-paper-left"},[s("mu-icon-button",{attrs:{slot:"left",icon:"close"},on:{click:t.back},slot:"left"})],1),t._v(" "),s("div",{staticClass:"Usertopics-paper-center"},[s("span",{staticClass:"title"},[t._v(t._s(t.title)+" ( "+t._s(t.length)+" )")])]),t._v(" "),s("div",{staticClass:"Usertopics-paper-right"},[s("mu-icon-button",{attrs:{slot:"right",icon:""},slot:"right"}),t._v(" "),s("mu-icon-button",{attrs:{slot:"right",icon:""},slot:"right"})],1)]),t._v(" "),s("div",{staticClass:"Usertopics-list"},t._l(t.lists,function(t){return s("user-topics-item",{key:t.id,attrs:{topic:t}})}))])},staticRenderFns:[]};var x=s("VU/8")(H,y,!1,function(t){s("GbEw")},null,null).exports,$={name:"Details",data:function(){return{accesstoken:"af0a22ca-d49f-47ec-afef-51b9cabf4c3c",repliesCount:""}},created:function(){this.login.loginData.success?this.$store.dispatch("FETCH_TOPIC_DETAILS",{accesstoken:this.accesstoken,id:this.$route.params.id}):this.$store.dispatch("FETCH_TOPIC_DETAILS",{id:this.$route.params.id})},beforeUpdate:function(){this.lengthToString()},methods:{lengthToString:function(){this.repliesCount=this.REPLIES_COUNT.toString()},back:function(){nt.go(-1),this.$store.dispatch("CLEAR_TOPIC_DETAILS")},handelCollect:function(){this.login.loginData.success?this.info.detailsData.is_collect?this.$store.dispatch("DEL_COLLECTED",{accesstoken:this.accesstoken,topic_id:this.$route.params.id,loginname:this.login.loginData.loginname}):this.$store.dispatch("COLLECT",{accesstoken:this.accesstoken,topic_id:this.$route.params.id,loginname:this.login.loginData.loginname}):(nt.push({name:"user"}),this.$store.dispatch("HANDEL_CHANGE",{active:"user"}))},gotoComments:function(){nt.push({name:"comments"})}},computed:n()({},Object(o.c)(["login","info"]),Object(o.b)(["REPLIES_COUNT"]))},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Details"},[s("div",{staticClass:"Details-paperbar"},[s("div",{staticClass:"Details-paper-left"},[s("mu-icon-button",{attrs:{slot:"left",icon:"arrow_back"},on:{click:t.back},slot:"left"})],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"Details-paper-right"},[s("mu-badge",{directives:[{name:"show",rawName:"v-show",value:t.REPLIES_COUNT>0,expression:"REPLIES_COUNT > 0"}],staticClass:"demo-icon-badge",attrs:{slot:"right",content:t.repliesCount,circle:"",secondary:""},slot:"right"},[s("mu-icon",{attrs:{value:"chat"},on:{click:t.gotoComments}})],1),t._v(" "),s("mu-icon-button",{directives:[{name:"show",rawName:"v-show",value:!t.info.detailsData.is_collect,expression:"!info.detailsData.is_collect"}],attrs:{slot:"right",icon:"star",iconClass:"collect"},on:{click:t.handelCollect},slot:"right"}),t._v(" "),s("mu-icon-button",{directives:[{name:"show",rawName:"v-show",value:t.info.detailsData.is_collect,expression:"info.detailsData.is_collect"}],staticStyle:{color:"yellow"},attrs:{slot:"right",icon:"star",iconClass:"collected"},on:{click:t.handelCollect},slot:"right"})],1)]),t._v(" "),s("div",{staticClass:"Details-content"},[s("p",{staticClass:"Details-title"},[t._v(t._s(t.info.detailsData.title))]),t._v(" "),s("mu-list-item",{attrs:{title:t.info.detailsData.author.loginname,disabled:""}},[s("mu-avatar",{attrs:{slot:"left",src:t.info.detailsData.author.avatar_url},slot:"left"}),t._v(" "),s("div",{staticClass:"Details-time",attrs:{slot:"right"},slot:"right"},[t._v("刚刚")])],1),t._v(" "),s("div",{staticClass:"Details-content-html",domProps:{innerHTML:t._s(t.info.detailsData.content)}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Details-paper-center"},[e("span",{staticClass:"title"},[this._v("话题正文")])])}]};var G=s("VU/8")($,M,!1,function(t){s("1rPx")},null,null).exports,F={name:"CommentsItem",props:{comment:{type:Object}},data:function(){return{accesstoken:"af0a22ca-d49f-47ec-afef-51b9cabf4c3c",number:0}},methods:{ups:function(){this.login.loginData.success?this.$store.dispatch("REPLY_UPS",{accesstoken:this.accesstoken,reply_id:this.comment.id,topic_id:this.info.detailsData.id}):(nt.push({name:"user"}),this.$store.dispatch("HANDEL_CHANGE",{active:"user"}))},replyToComment:function(){this.login.loginData.success?(this.$store.dispatch("SHOW_REPLIES_EDIT"),this.$store.dispatch("SAVE_REPLY_ID",{reply_id:this.comment.id})):(nt.push({name:"user"}),this.$store.dispatch("HANDEL_CHANGE",{active:"user"}))}},computed:n()({},Object(o.c)(["login","info"]))},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CommentsItem"},[s("div",{staticClass:"CommentsItem-top-box"},[s("div",{staticClass:"CommentsItem-authorimg-box"},[s("img",{staticClass:"CommentsItem-author-img",attrs:{src:t.comment.author.avatar_url}})]),t._v(" "),s("div",{staticClass:"CommentsItem-authorname-box"},[t._v("\n      "+t._s(t.comment.author.loginname)+"\n    ")]),t._v(" "),s("div",{staticClass:"CommentsItem-time-box"},[t._v("\n      "+t._s(t._f("filterTime")(t.comment.create_at))+"\n    ")])]),t._v(" "),s("div",{staticClass:"CommentsItem-content",domProps:{innerHTML:t._s(t.comment.content)}}),t._v(" "),s("div",{staticClass:"CommentsItem-icon-bar"},[s("div",{staticClass:"CommentsItem-left"},[s("mu-icon-button",{staticStyle:{color:"#aaaaaa"},attrs:{icon:"comment",size:14},on:{click:t.replyToComment}}),t._v(" "),s("span",{staticClass:"CommentsItem-text"},[t._v("回复")])],1),t._v(" "),s("div",{staticClass:"CommentsItem-right"},[s("mu-icon-button",{directives:[{name:"show",rawName:"v-show",value:!t.comment.is_uped,expression:"!comment.is_uped"}],staticStyle:{color:"#aaaaaa"},attrs:{icon:"thumb_up",size:14},on:{click:t.ups}}),t._v(" "),s("mu-icon-button",{directives:[{name:"show",rawName:"v-show",value:t.comment.is_uped,expression:"comment.is_uped"}],staticStyle:{color:"#ffd600"},attrs:{icon:"thumb_up",size:14},on:{click:t.ups}}),t._v(" "),s("span",{staticClass:"CommentsItem-text"},[t._v(t._s(t.comment.ups.length))])],1)])])},staticRenderFns:[]};var W={name:"Comments",components:{"comments-list-item":s("VU/8")(F,j,!1,function(t){s("mc9M")},null,null).exports},data:function(){return{accesstoken:"af0a22ca-d49f-47ec-afef-51b9cabf4c3c",content:[],toast:!1}},methods:{back:function(){nt.go(-1)},showReplies:function(){this.login.loginData.success?this.$store.dispatch("SHOW_REPLIES_EDIT"):(nt.push({name:"user"}),this.$store.dispatch("HANDEL_CHANGE",{active:"user"}))},pushreply:function(){var t=this;this.content.length>0?(this.$store.dispatch("REPLY_PUSH",{accesstoken:this.accesstoken,content:this.content,topic_id:this.info.detailsData.id,reply_id:this.info.reply_toComment_id}),this.$store.dispatch("SHOW_REPLIES_EDIT"),this.content=[]):(this.toast=!0,setTimeout(function(){t.hideToast()},1e3))},cancel:function(){this.$store.dispatch("SHOW_REPLIES_EDIT"),this.$store.dispatch("CLEAR_REPLY_ID")},hideToast:function(){this.toast=!1,this.toastTimer&&clearTimeout(this.toastTimer)}},computed:n()({},Object(o.c)(["login","info"]),Object(o.b)(["REPLIES_COUNT"]))},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Comments"},[s("div",{staticClass:"Comments-paperbar"},[s("div",{staticClass:"Comments-paper-left"},[s("mu-icon-button",{attrs:{slot:"left",icon:"arrow_back"},on:{click:t.back},slot:"left"})],1),t._v(" "),s("div",{staticClass:"Comments-paper-center"},[s("span",{staticClass:"title"},[t._v(t._s(t.REPLIES_COUNT)+"条评论")])]),t._v(" "),s("div",{staticClass:"Comments-paper-right"},[s("mu-icon-button",{attrs:{slot:"right",icon:"mode_edit"},on:{click:t.showReplies},slot:"right"})],1)]),t._v(" "),s("div",{staticClass:"Comments-list"},t._l(t.info.detailsData.replies,function(t){return s("comments-list-item",{key:t.id,attrs:{comment:t}})})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.info.showreplies,expression:"info.showreplies"}],staticClass:"Comments-replies-edit"},[s("div",{staticClass:"Comments-reply-content-box"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"Comments-input",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),s("div",{staticClass:"Comments-replies-button"},[s("button",{staticClass:"Comments-replies-push",on:{click:t.pushreply}},[t._v("发表")]),t._v(" "),s("button",{staticClass:"Comments-replies-cancel",on:{click:t.cancel}},[t._v("取消")])]),t._v(" "),t.toast?s("mu-toast",{attrs:{message:"评论正文不能为空"},on:{close:t.hideToast}}):t._e()],1)])])},staticRenderFns:[]};var V=s("VU/8")(W,Y,!1,function(t){s("3w+Z")},null,null).exports;a.default.use(h.a);var z=new h.a({routes:[{path:"/topics",name:"topics",component:T,meta:{keepAlive:!0}},{path:"/message",name:"message",component:A},{path:"/push",name:"push",component:P},{path:"/user",name:"user",component:N,meta:{keepAlive:!0}},{path:"/usertopics/:type",name:"usertopics",component:x},{path:"/details/:id",name:"details",component:G},{path:"comments",name:"comments",component:V}]});z.push({name:"topics"});var q,B,Q,X,Z,J,K,tt,et,st,at,it,nt=z,ot=s("bqTm"),ct=s.n(ot),rt=s("u64Q"),lt=s.n(rt),ut=(s("E51W"),s("bOdI")),mt=s.n(ut),_t={state:{bottomnav:{active:"topics"},appbar:{title:"话题"}},mutations:mt()({},"HANDEL_CHANGE",function(t,e){switch(t.bottomnav.active=e.data,e.data){case"topics":t.appbar.title="话题";break;case"message":t.appbar.title="消息";break;case"push":t.appbar.title="发布";break;case"user":t.appbar.title="我的"}}),actions:mt()({},"HANDEL_CHANGE",function(t,e){t.commit("HANDEL_CHANGE",{data:e.active})})},pt=s("mtWM"),dt=s.n(pt),ht={state:{topicsdata:[]},getters:mt()({},"TOPICS_DATA_LENGTH",function(t){var e=t.topicsdata;return e?e.length:0}),mutations:(q={},mt()(q,"FETCH_TOPICS",function(t,e){t.topicsdata=e.data}),mt()(q,"CLEAR_TOPICSDATA",function(t){t.topicsdata=[]}),q),actions:(B={},mt()(B,"FETCH_TOPICS",function(t,e){dt.a.get("topics",{params:{tab:e.tab,page:e.page,limit:e.limit}}).then(function(e){var s=e.data.data,a=t.state.topicsdata.concat(s);t.commit("FETCH_TOPICS",{data:a})})}),mt()(B,"CLEAR_TOPICSDATA",function(t){t.commit("CLEAR_TOPICSDATA")}),B)},vt={state:{userData:{loginname:"",avatarurl:"",githubUsername:"",reate_at:"",score:0,recent_topics:[],recent_replies:[]},topic_collect:[]},getters:(Q={},mt()(Q,"RECENT_REPLIES",function(t){var e=t.userData.recent_replies;return e?e.length:0}),mt()(Q,"RECENT_TOPICS",function(t){var e=t.userData.recent_topics;return e?e.length:0}),mt()(Q,"TOPIC_COLLECT",function(t){var e=t.topic_collect.data;return e?e.length:0}),Q),mutations:(X={},mt()(X,"FETCH_USERDATA",function(t,e){t.userData=e.data}),mt()(X,"FETCH_TOPIC_COLLECT",function(t,e){t.topic_collect=e.data}),mt()(X,"CLEAR_USERDATA",function(t){t.userData={loginname:"",avatarurl:"",githubUsername:"",reate_at:"",score:0,recent_topics:[],recent_replies:[]},t.topic_collect=[]}),X),actions:(Z={},mt()(Z,"FETCH_USERDATA",function(t,e){dt.a.get("user/"+e.loginname,{params:{loginname:e.loginname}}).then(function(e){t.commit("FETCH_USERDATA",{data:e.data.data})})}),mt()(Z,"FETCH_TOPIC_COLLECT",function(t,e){dt.a.get("topic_collect/"+e.loginname,{params:{loginname:e.loginname}}).then(function(e){t.commit("FETCH_TOPIC_COLLECT",{data:e.data})})}),mt()(Z,"CLEAR_USERDATA",function(t){t.commit("CLEAR_USERDATA")}),Z)},Ct={state:{messageData:{has_read_messages:[],hasnot_read_messages:[]},count:0},getters:(J={},mt()(J,"HASNOT_READ_MESSAGES",function(t){var e=t.messageData.hasnot_read_messages;return e?e.length:0}),mt()(J,"HAS_READ_MESSAGES",function(t){var e=t.messageData.has_read_messages;return e?e.length:0}),J),mutations:(K={},mt()(K,"GET_MESSAGE_COUNT",function(t,e){t.count=e.data}),mt()(K,"CLEAR_MESSAGESDATA",function(t){t.count=0,t.messageData={has_read_messages:[],hasnot_read_messages:[]}}),K),actions:(tt={},mt()(tt,"GET_MESSAGE_COUNT",function(t,e){dt.a.get("message/count",{params:{accesstoken:e.accesstoken}}).then(function(e){t.commit("GET_MESSAGE_COUNT",{data:e.data})})}),mt()(tt,"CLEAR_MESSAGESDATA",function(t){t.commit("CLEAR_MESSAGESDATA")}),tt)},gt={state:{newTopic:{success:!1,topic_id:""}},mutations:mt()({},"PUSH_NEW_TOPIC",function(t,e){t.newTopic=e.data}),actions:mt()({},"PUSH_NEW_TOPIC",function(t,e){dt.a.post("topics",{accesstoken:e.accesstoken,title:e.title,tab:e.tab,content:e.content}).then(function(s){t.commit("PUSH_NEW_TOPIC",{data:s.data}),t.dispatch("FETCH_USERDATA",{loginname:e.loginname})})})},Et={state:{detailsData:{id:"",author_id:"",tab:"",content:"",title:"",last_reply_at:0,good:!1,top:!1,reply_count:0,visit_count:0,create_at:"",author:{loginname:"",avatar_url:""},replies:[],is_collect:!1},collect:!1,del_collected:!1,ups:!1,showreplies:!1,replyedit:{success:"",reply_id:""},reply_toComment_id:""},getters:mt()({},"REPLIES_COUNT",function(t){var e=t.detailsData.replies;return e?e.length:0}),mutations:(et={},mt()(et,"FETCH_TOPIC_DETAILS",function(t,e){t.detailsData=e.data}),mt()(et,"COLLECT",function(t,e){t.collect=e.data}),mt()(et,"DEL_COLLECTED",function(t,e){t.del_collected=e.data}),mt()(et,"REPLY_UPS",function(t,e){t.ups=e.data}),mt()(et,"SHOW_REPLIES_EDIT",function(t){t.showreplies=!t.showreplies}),mt()(et,"SAVE_REPLY_ID",function(t,e){t.reply_toComment_id=e.data}),mt()(et,"CLEAR_REPLY_ID",function(t){t.reply_toComment_id=""}),mt()(et,"REPLY_PUSH",function(t,e){t.replyedit=e.data}),mt()(et,"CLEAR_TOPIC_DETAILS",function(t){t.detailsData={id:"",author_id:"",tab:"",content:"",title:"",last_reply_at:0,good:!1,top:!1,reply_count:0,visit_count:0,create_at:"",author:{loginname:"",avatar_url:""},replies:[],is_collect:!1},t.collect=!1,t.del_collected=!1}),et),actions:(st={},mt()(st,"FETCH_TOPIC_DETAILS",function(t,e){dt.a.get("topic/"+e.id,{params:{accesstoken:e.accesstoken}}).then(function(e){t.commit("FETCH_TOPIC_DETAILS",{data:e.data.data})})}),mt()(st,"COLLECT",function(t,e){dt.a.post("topic_collect/collect",{accesstoken:e.accesstoken,topic_id:e.topic_id}).then(function(s){t.commit("COLLECT",{data:s.data.success}),t.dispatch("FETCH_TOPIC_DETAILS",{accesstoken:e.accesstoken,id:e.topic_id}),t.dispatch("FETCH_TOPIC_COLLECT",{loginname:e.loginname})})}),mt()(st,"DEL_COLLECTED",function(t,e){dt.a.post("topic_collect/de_collect",{accesstoken:e.accesstoken,topic_id:e.topic_id}).then(function(s){t.commit("DEL_COLLECTED",{data:s.data.success}),t.dispatch("FETCH_TOPIC_DETAILS",{accesstoken:e.accesstoken,id:e.topic_id}),t.dispatch("FETCH_TOPIC_COLLECT",{loginname:e.loginname})})}),mt()(st,"REPLY_UPS",function(t,e){dt.a.post("reply/"+e.reply_id+"/ups",{accesstoken:e.accesstoken}).then(function(s){t.commit("REPLY_UPS",{data:s.data.success}),t.dispatch("FETCH_TOPIC_DETAILS",{accesstoken:e.accesstoken,id:e.topic_id})})}),mt()(st,"SHOW_REPLIES_EDIT",function(t){t.commit("SHOW_REPLIES_EDIT")}),mt()(st,"SAVE_REPLY_ID",function(t,e){t.commit("SAVE_REPLY_ID",{data:e.reply_id})}),mt()(st,"CLEAR_REPLY_ID",function(t){t.commit("CLEAR_REPLY_ID")}),mt()(st,"REPLY_PUSH",function(t,e){dt.a.post("topic/"+e.topic_id+"/replies",{accesstoken:e.accesstoken,content:e.content,reply_id:e.reply_id}).then(function(s){t.commit("REPLY_PUSH",{data:s.data}),t.dispatch("FETCH_TOPIC_DETAILS",{accesstoken:e.accesstoken,id:e.topic_id}),t.commit("CLEAR_REPLY_ID")})}),mt()(st,"CLEAR_TOPIC_DETAILS",function(t){t.commit("CLEAR_TOPIC_DETAILS")}),st)},ft={state:{loginData:{avatarurl:"",id:"",loginname:"",success:!1}},mutations:(at={},mt()(at,"LOGIN",function(t,e){t.loginData=e.data}),mt()(at,"LOGINOUT",function(t){t.loginData={avatarurl:"",id:"",loginname:"",success:!1}}),at),actions:(it={},mt()(it,"LOGIN",function(t,e){dt.a.post("accesstoken",{accesstoken:e.accesstoken}).then(function(e){t.commit("LOGIN",{data:e.data}),t.dispatch("FETCH_USERDATA",{loginname:e.data.loginname}),t.dispatch("FETCH_TOPIC_COLLECT",{loginname:e.data.loginname})})}),mt()(it,"LOGINOUT",function(t){t.commit("LOGINOUT"),t.commit("CLEAR_USERDATA"),t.commit("CLEAR_MESSAGESDATA")}),it)};a.default.use(o.a);var Tt=new o.a.Store({modules:{common:_t,topics:ht,user:vt,messages:Ct,push:gt,info:Et,login:ft}});dt.a.defaults.baseURL="https://cnodejs.org/api/v1/",a.default.config.productionTip=!1,a.default.use(lt.a),a.default.use(ct.a),a.default.filter("filterTime",function(t){if(!t)return"";var e=new Date(t).getTime(),s=(new Date).getTime(),a=new Date(t),i=a.getFullYear(),n=a.getMonth()+1,o=a.getDate(),c=s-e,r=Math.floor(c/1e3),l=Math.floor(r/60),u=Math.floor(l/60),m=Math.floor(u/24);return 0===l?r+"秒前":0===u?l+"分钟前":0===m?u+"小时前":m>0&&m<=20?m+"天前":m>20?i+"-"+n+"-"+o:void 0}),new a.default({el:"#app",router:nt,store:Tt,components:{App:d},template:"<App/>"})},f3m5:function(t,e){},mc9M:function(t,e){},q7AW:function(t,e){},sWdm:function(t,e){},sboj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6995648184ba934701b0.js.map