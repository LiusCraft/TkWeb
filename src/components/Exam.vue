<template>
  <div class="mdui-m-t-2">
    <div class="mdui-progress">
      <div class="mdui-progress-determinate" :style="{ width: Current/Total*100 + '%' }"></div>
    </div>
    <h2>
      <a class="round mdui-p-a-1">{{ Current > 9? '':'0'}}{{Current}}</a>
      {{CurTopic.Tm_Title}}
    </h2>
    <ul class="mdui-list">
      <li
        @click="select('A')"
        :class="['mdui-list-item mdui-ripple',{'mdui-list-item-active':CurTopic.Tm_Selec=='A'}]"
      >{{ CurTopic.Tm_Data.CurA }}</li>
      <li
        @click="select('B')"
        :class="['mdui-list-item mdui-ripple',{'mdui-list-item-active':CurTopic.Tm_Selec=='B'}]"
      >{{ CurTopic.Tm_Data.CurB }}</li>
      <li
        @click="select('C')"
        :class="['mdui-list-item mdui-ripple',{'mdui-list-item-active':CurTopic.Tm_Selec=='C'}]"
      >{{ CurTopic.Tm_Data.CurC }}</li>
      <li
        @click="select('D')"
        :class="['mdui-list-item mdui-ripple',{'mdui-list-item-active':CurTopic.Tm_Selec=='D'}]"
      >{{ CurTopic.Tm_Data.CurD }}</li>
    </ul>
    <div class="mdui-row-xs-2">
      <div class="mdui-col">
        <button
          class="mdui-btn mdui-btn-block mdui-btn-raised mdui-color-theme-accent mdui-ripple"
          :disabled="Current==1"
          @click="back"
        >上一题</button>
      </div>
      <div class="mdui-col">
        <button
          class="mdui-btn mdui-btn-block mdui-btn-raised mdui-color-theme-accent mdui-ripple"
          :disabled="Current==Total"
          @click="next"
        >下一题</button>
      </div>
    </div>
    <button
      @click="getTkData(10)"
      style="font-size: 20px;"
      class="mdui-m-t-2 mdui-btn mdui-btn-block mdui-btn-raised mdui-color-theme-accent mdui-ripple"
    >设 置 题 目</button>
  </div>
</template>
<script>
import Static from "../static";
import { setCookie, getCookie } from "../staticfun";
import Vue from "vue";
import resOurce from "vue-resource";
Vue.use(resOurce);
var TkData = {
  0: {
    Id: "0",
    Tm_Title: "",
    Tm_Data: {
      CurA: "",
      CurB: "",
      CurC: "",
      CurD: ""
    },
    Tm_Selec: ""
  }
};
var TopicPage = {
  Current: 1,
  Total: 1
};
export default {
  name: "Exam",
  data() {
    return {
      Current: TopicPage.Current,
      Total: TopicPage.Total,
      CurTopic: TkData[TopicPage.Current - 1]
    };
  },
  watch: {
    Current: function(newValue) {
      this.CurTopic = TkData[newValue - 1];
      TopicPage.Current = newValue;
      setCookie("TopicPage", JSON.stringify(TopicPage));
    }
  },
  methods: {
    next: function() {
      if (this.Current < TopicPage.Total) {
        this.Current++;
      } else {
      }
    },
    back: function() {
      if (this.Current > 1) {
        this.Current--;
        TopicPage.Current = this.CurTopic;
      } else {
      }
    },
    select: function(value) {
      TkData[this.Current - 1].Tm_Selec = value;
      this.CurTopic.Tm_Selec = value;
      setCookie("TKDatalist", JSON.stringify(TkData));
      setCookie("TopicPage", JSON.stringify(TopicPage));
      TkData = JSON.parse(getCookie("TKDatalist"));
      TopicPage = JSON.parse(getCookie("TopicPage"));
    },
    getTkData: function(Count, Class = null) {
      var PostData = { Count: Count };
      if (Class != null) {
        PostData.Class = Class;
      }
      this.$http
        .post(Static.Api + "getSubject.php", PostData, {
          emulateJSON: true,
          credentials: false
        })
        .then(
          function(res) {
            // Success
            setCookie("TKDatalist", JSON.stringify(res.body.Data));
            setCookie(
              "TopicPage",
              JSON.stringify({ Total: res.body.Count, Current: 1 })
            );
            
            TkData = JSON.parse(getCookie("TKDatalist"));
            TopicPage = JSON.parse(getCookie("TopicPage"));
            this.CurTopic = TkData[TopicPage.Current - 1];
            this.Total = TopicPage.Total;
            this.Current = 1;
          },
          function(res) {
            // Error
          }
        );
    }
  },
  mounted() {
    if (getCookie("TKDatalist", true)) {
      TkData = JSON.parse(getCookie("TKDatalist"));
      TopicPage = JSON.parse(getCookie("TopicPage"));
      this.CurTopic = TkData[TopicPage.Current - 1];
      this.Total = TopicPage.Total;
      this.Current = TopicPage.Current;
    } else {
      this.getTkData(100);
    }
  }
};
</script>

<style>
.round {
  border: 1px solid #4d58ee;

  text-align: center;

  font-weight: bold;

  font-size: 20px;

  border-radius: 50%;
}
</style>