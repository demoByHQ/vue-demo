<template>
  <div class="main">
    <slot name="top"/>
    <div class="mainBox">
      <div>
        <button
          class="mainBtn ctrlBtn"
          @click="recOpen">打开录音</button>
        <button
          class="mainBtn ctrlBtn"
          @click="recStart">开始录音</button>
        <button
          class="mainBtn ctrlBtn"
          @click="recStop">结束录音</button>
      </div>
    </div>

    <div class="mainBox">
      <audio
        ref="LogAudioPlayer"
        style="width:100%"/>

      <div class="mainLog">
        <div
          v-for="obj in logs"
          :key="obj.idx">
          <div :style="{color:obj.color==1?'red':obj.color==2?'green':obj.color}">
            <!-- <template v-once> 在v-for里存在的bug，参考：https://v2ex.com/t/625317 -->
            <span v-once>[{{ getTime() }}]</span><span v-html="obj.msg"/>

            <template v-if="obj.res">
              {{ intp(obj.res.rec.set.bitRate,3) }}kbps
              {{ intp(obj.res.rec.set.sampleRate,5) }}hz
              编码{{ intp(obj.res.blob.size,6) }}b
              [{{ obj.res.rec.set.type }}]{{ intp(obj.res.duration,6) }}ms

              <button @click="recdown(obj.idx)">下载</button>
              <button @click="recplay(obj.idx)">播放</button>

              <span v-html="obj.playMsg"/>
              <span v-if="obj.down">
                <span style="color:red">{{ obj.down }}</span>

                没弹下载？试一下链接或复制文本<button @click="recdown64(obj.idx)">生成Base64文本</button>

                <textarea
                  v-if="obj.down64Val"
                  v-model="obj.down64Val"/>
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <slot name="bottom"/>
  </div>
</template>

<script>
import Recorder from 'recorder-core'

export default {
  name: 'SetUp',
  components: {

  },
  data () {
    return {
      name: '张三',
      type: 'mp3',
      bitRate: 16,
      sampleRate: 16000,
      rec: 0,
      duration: 0,
      powerLevel: 0,
      recOpenDialogShow: 0,
      logs: []
    }
  },
  mounted () {

  },
  methods: {
    recOpen: function () {
      var This = this
      var rec = this.rec = Recorder({
        type: This.type,
        bitRate: This.bitRate,
        sampleRate: This.sampleRate,
        onProcess: function (buffers, powerLevel, duration, sampleRate) {
          This.duration = duration
          This.powerLevel = powerLevel
        }
      })

      This.dialogInt = setTimeout(function () { // 定时8秒后打开弹窗，用于监测浏览器没有发起权限请求的情况
        This.showDialog()
      }, 8000)

      rec.open(function () {
        This.dialogCancel()
        // eslint-disable-next-line no-console
        console.log('已打开:' + This.type + ' ' + This.sampleRate + 'hz ' + This.bitRate + 'kbps', 2)
      }, function (msg, isUserNotAllow) {
        This.dialogCancel()
        // eslint-disable-next-line no-console
        console.log((isUserNotAllow ? 'UserNotAllow，' : '') + '打开失败：' + msg, 1)
      })
      This.waitDialogClickFn = function () {
        This.dialogCancel()
        // eslint-disable-next-line no-console
        console.log('打开失败：权限请求被忽略，用户主动点击的弹窗', 1)
      }
    },
    recStart: function () {
      // eslint-disable-next-line no-console
      console.log('1211111', this.logs)
      if (!this.rec) {
        this.reclog('未打开录音', 1)
        return
      }
      this.rec.start()
      var set = this.rec.set
      // eslint-disable-next-line no-console
      console.log('录制中：' + set.type + ' ' + set.sampleRate + 'hz ' + set.bitRate + 'kbps')
    },
    recStop: function () {
      var This = this
      var rec = This.rec
      This.rec = null
      if (!rec) {
        // eslint-disable-next-line no-console
        console.log('未打开录音', 1)
        return
      }

      rec.stop(function (blob, duration) {
        // eslint-disable-next-line no-console
        console.log('已录制:', '', {
          blob: blob,
          duration: duration,
          rec: rec
        })
        // eslint-disable-next-line no-console
        var audio = This.$refs.LogAudioPlayer
        audio.controls = true
        if (!(audio.ended || audio.paused)) {
          audio.pause()
        };
        // eslint-disable-next-line no-undef
        audio.src = (window.URL || webkitURL).createObjectURL(blob)
        audio.play()
      }, function (s) {
        // eslint-disable-next-line no-console
        console.log('结束出错：' + s, 1)
      }, true)// 自动close
    },

    reclog: function (msg, color, res) {
      this.logs.splice(0, 0, {
        idx: this.logs.length,
        msg: msg,
        color: color,
        res: res,

        playMsg: '',
        down: 0,
        down64Val: ''
      })
    },
    recplay: function (idx) {
      var This = this
      var o = this.logs[this.logs.length - idx - 1]
      o.play = (o.play || 0) + 1
      var logmsg = function (msg) {
        o.playMsg = '<span style="color:green">' + o.play + '</span> ' + This.getTime() + ' ' + msg
      }
      logmsg('')

      var audio = this.$refs.LogAudioPlayer
      audio.controls = true
      if (!(audio.ended || audio.paused)) {
        audio.pause()
      };
      audio.onerror = function (e) {
        logmsg('<span style="color:red">播放失败[' + audio.error.code + ']' + audio.error.message + '</span>')
      }
      // eslint-disable-next-line no-undef
      audio.src = (window.URL || webkitURL).createObjectURL(o.res.blob)
      audio.play()
    },
    recdown: function (idx) {
      var o = this.logs[this.logs.length - idx - 1]
      o.down = (o.down || 0) + 1

      o = o.res
      var name = 'rec-' + o.duration + 'ms-' + (o.rec.set.bitRate || '-') + 'kbps-' + (o.rec.set.sampleRate || '-') + 'hz.' + (o.rec.set.type || (/\w+$/.exec(o.blob.type) || [])[0] || 'unknown')
      var downA = document.createElement('A')
      // eslint-disable-next-line no-undef
      downA.href = (window.URL || webkitURL).createObjectURL(o.blob)
      downA.download = name
      downA.click()
    },
    recdown64: function (idx) {
      var o = this.logs[this.logs.length - idx - 1]
      var reader = new FileReader()
      reader.onloadend = function () {
        o.down64Val = reader.result
      }
      reader.readAsDataURL(o.res.blob)
    },
    getTime: function () {
      var now = new Date()
      var t = ('0' + now.getHours()).substr(-2) +
                ':' + ('0' + now.getMinutes()).substr(-2) +
                ':' + ('0' + now.getSeconds()).substr(-2)
      return t
    },
    intp: function (s, len) {
      s = s == null ? '-' : s + ''
      if (s.length >= len) return s
      return ('_______' + s).substr(-len)
    },

    showDialog: function () {
      // 我们可以选择性的弹一个对话框：为了防止移动端浏览器存在第三种情况：用户忽略，并且（或者国产系统UC系）浏览器没有任何回调
      if (!/mobile/i.test(navigator.userAgent)) {
        return// 只在移动端开启没有权限请求的检测
      };
      this.recOpenDialogShow = 1
    },
    dialogCancel: function () {
      clearTimeout(this.dialogInt)
      this.recOpenDialogShow = 0
    },
    waitDialogClick: function () {
      this.dialogCancel()
      this.waitDialogClickFn()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less" lang="less" rel="stylesheet/less">
//   .setUp .backImg {
//     background: url(../../assets/images/personal/background@1.png) no-repeat;
//     background-size: cover;
//     width: 100%;
//     height: 200px;
//     // margin-top: -20px;
//   }
//   .setUp .setUp-name {
//     position: absolute;
//     top: 140px;
//     color: white;
//     font-size: 17px;
//     left: 50%;
//     margin-left: -20px;
//     text-align: center;
//   }
// </style>
<style>
body{
    word-wrap: break-word;
    background:#f5f5f5 center top no-repeat;
    background-size: auto 680px;
}
pre{
    white-space:pre-wrap;
}
a{
    text-decoration: none;
    color:#06c;
}
a:hover{
    color:#f00;
}

.main{
    max-width:700px;
    margin:0 auto;
    padding-bottom:80px
}

.mainBox{
    margin-top:12px;
    padding: 12px;
    border-radius: 6px;
    background: #fff;
    --border: 1px solid #0b1;
    box-shadow: 2px 2px 3px #aaa;
}

.mainBtn{
    display: inline-block;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background: #0b1;
    color:#fff;
    padding: 0 15px;
    margin-right:20px;
    line-height: 36px;
    height: 36px;
    overflow: hidden;
    vertical-align: middle;
}
.mainBtn:active{
    background: #0a1;
}
.ctrlBtn{
    margin-top:10px;
}
</style>
